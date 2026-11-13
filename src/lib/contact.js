import nodemailer from 'nodemailer';
import {createHash} from 'node:crypto';

const destinataire='noah.litzler@gmail.com';
const types=new Set(['Stage','Projet','Collaboration','Autre']);
const textes={
  fr:{invalide:'Vérifie ton nom, ton email et ton message (10 à 4 000 caractères).',indisponible:'Le formulaire est momentanément indisponible. Écris-moi directement par email.',origine:'Cette demande ne provient pas du portfolio.',limite:'Tu as envoyé plusieurs demandes. Patiente quelques minutes ou écris-moi directement par email.',echec:'L’envoi a échoué. Ton message est conservé dans le formulaire ; réessaie ou écris-moi directement par email.',retour:'Revenir au formulaire',titre:'Message non envoyé'},
  en:{invalide:'Check your name, email and message (10 to 4,000 characters).',indisponible:'The form is temporarily unavailable. Please email me directly.',origine:'This request did not come from the portfolio.',limite:'You have sent several requests. Please wait a few minutes or email me directly.',echec:'Your message could not be sent. It is still in the form; try again or email me directly.',retour:'Back to the form',titre:'Message not sent'}
};

async function envoyerMessage(message,env){
  const port=Number(env.SMTP_PORT||465);
  const transport=nodemailer.createTransport({
    host:env.SMTP_HOST,port,secure:port===465,requireTLS:port!==465,
    auth:{user:env.SMTP_USER,pass:env.SMTP_PASS},
    connectionTimeout:5000,greetingTimeout:5000,socketTimeout:10000,
    disableFileAccess:true,disableUrlAccess:true
  });
  const resultat=await transport.sendMail({
    from:{name:'Portfolio Noah Litzler',address:env.SMTP_USER},
    to:destinataire,
    replyTo:{name:message.nom,address:message.email},
    subject:'Portfolio — '+message.type,
    text:`Nom : ${message.nom}\nEmail : ${message.email}\nDemande : ${message.type}\n\n${message.message}`
  });
  if(!resultat.accepted?.includes(destinataire))throw new Error('Message non accepté');
}

// Les dépendances optionnelles permettent des tests sans envoyer de véritables emails.
export function creerFormulaire({env=process.env,envoyer=envoyerMessage,maintenant=Date.now}={}){
  const tentatives=new Map();
  return async function traiter(request,adresse='locale'){
    let langue='fr';
    const json=request.headers.get('accept')?.includes('application/json');
    const repondre=(code,raison)=>{
      const mots=textes[langue];
      const suite=langue==='en'?'/en/merci':'/merci';
      const entetes={'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'};
      if(code===200){
        if(json)return Response.json({ok:true,redirect:suite},{headers:entetes});
        return new Response(null,{status:303,headers:{...entetes,Location:suite}});
      }
      if(json)return Response.json({ok:false,message:mots[raison]},{status:code,headers:entetes});
      // Aucun contenu saisi par le visiteur n’est injecté dans cette page d’erreur.
      return new Response(`<!doctype html><html lang="${langue}"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex"><title>${mots.titre}</title><body><h1>${mots.titre}</h1><p>${mots[raison]}</p><p><a href="${langue==='en'?'/en/contact':'/contact'}">${mots.retour}</a></p><a href="mailto:${destinataire}">${destinataire}</a></body></html>`,{status:code,headers:{...entetes,'Content-Type':'text/html; charset=utf-8'}});
    };
    if(!request.headers.get('content-type')?.startsWith('application/x-www-form-urlencoded'))return repondre(415,'invalide');
    let donnees;
    try{
      const corps=await request.text();
      if(new TextEncoder().encode(corps).length>12288)return repondre(413,'invalide');
      donnees=new URLSearchParams(corps);
    }catch{return repondre(400,'invalide')}
    langue=donnees.get('langue')==='en'?'en':'fr';
    const origine=request.headers.get('origin');
    const autorisees=new Set([new URL(request.url).origin,new URL(env.PORTFOLIO_SITE||'https://noahlitzler.fr').origin]);
    if(!origine||!autorisees.has(origine))return repondre(403,'origine');
    if(donnees.get('bot-field'))return repondre(200);
    const message={nom:(donnees.get('nom')||'').trim(),email:(donnees.get('email')||'').trim(),type:donnees.get('type')||'',message:(donnees.get('message')||'').trim()};
    if(message.nom.length<2||message.nom.length>100||/[\r\n]/.test(message.nom)||message.email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.email)||!types.has(message.type)||message.message.length<10||message.message.length>4000)return repondre(400,'invalide');
    if(env.PUBLIC_CONTACT_ACTIF!=='true'||!env.SMTP_HOST||!env.SMTP_USER||!env.SMTP_PASS)return repondre(503,'indisponible');
    const instant=maintenant();
    for(const [cle,entree] of tentatives)if(instant-entree.debut>=600000)tentatives.delete(cle);
    const cle=createHash('sha256').update(adresse+'|'+message.email.toLowerCase()).digest('hex');
    const entree=tentatives.get(cle)||{debut:instant,nombre:0};
    if(entree.nombre>=3||tentatives.size>=2000&&!tentatives.has(cle))return repondre(429,'limite');
    entree.nombre++;tentatives.set(cle,entree);
    try{await envoyer(message,env)}catch{return repondre(502,'echec')}
    return repondre(200);
  };
}
