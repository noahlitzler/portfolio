import test from 'node:test';import assert from 'node:assert/strict';
import {creerFormulaire} from '../src/lib/contact.js';
const env={PUBLIC_CONTACT_ACTIF:'true',SMTP_HOST:'smtp.example.test',SMTP_USER:'noah@example.test',SMTP_PASS:'secret-factice',PORTFOLIO_SITE:'https://noahlitzler.fr'};
const requete=(champs={},entetes={})=>new Request('https://noahlitzler.fr/api/contact',{method:'POST',headers:{Origin:'https://noahlitzler.fr','Content-Type':'application/x-www-form-urlencoded',Accept:'application/json',...entetes},body:new URLSearchParams({nom:'Personne Test',email:'test@example.test',type:'Stage',message:'Message de test local, aucun envoi réel.',...champs})});
test('validation, origine et honeypot ne déclenchent aucun email',async()=>{
 let nombre=0;const traiter=creerFormulaire({env,envoyer:async()=>nombre++});
 assert.equal((await traiter(requete({nom:'x'}))).status,400);
 assert.equal((await traiter(requete({email:'a@example.test\r\nBcc:x@example.test'}))).status,400);
 assert.equal((await traiter(requete({}, {Origin:'https://tiers.example.test'}))).status,403);
 assert.equal((await traiter(requete({'bot-field':'robot'}))).status,200);
 assert.equal(nombre,0);
});
test('le formulaire fermé ou sans identifiants ne simule pas de succès',async()=>{
 const traiter=creerFormulaire({env:{...env,SMTP_PASS:''},envoyer:async()=>assert.fail('aucun envoi attendu')});
 assert.equal((await traiter(requete())).status,503);
});
test('la confirmation suit la langue uniquement après acceptation',async()=>{
 let recu;const traiter=creerFormulaire({env,envoyer:async message=>{recu=message}});
 const reponse=await traiter(requete({langue:'en'}));
 assert.deepEqual(await reponse.json(),{ok:true,redirect:'/en/merci'});
 assert.equal(recu.type,'Stage');
 const natif=await traiter(requete({}, {Accept:'text/html'}));
 assert.equal(natif.status,303);assert.equal(natif.headers.get('Location'),'/merci');
});
test('une panne SMTP reste une erreur et les tentatives sont limitées',async()=>{
 const traiter=creerFormulaire({env,envoyer:async()=>{throw Error('erreur SMTP factice')}});
 for(let i=0;i<3;i++)assert.equal((await traiter(requete())).status,502);
 assert.equal((await traiter(requete())).status,429);
});
test('messages trop longs et contenus HTML saisis restent hors de la réponse',async()=>{
 const traiter=creerFormulaire({env,envoyer:async()=>{}});
 assert.equal((await traiter(requete({message:'a'.repeat(4001)}))).status,400);
 const reponse=await traiter(requete({nom:'<img src=x onerror=alert(1)>',message:'court'}, {Accept:'text/html'}));
 assert.equal(reponse.status,400);assert.ok(!(await reponse.text()).includes('<img'));
});
