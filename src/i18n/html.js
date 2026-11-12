// Traduction au rendu : le HTML anglais fonctionne aussi sans JavaScript.
// Seuls les textes et attributs éditoriaux sont traduits ; styles et scripts restent intacts.
export const normaliser = texte => texte.replace(/\s+/g,' ').trim();
const decoder = texte => texte.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi,(_,code)=>{
  if(code[0]==='#')return String.fromCodePoint(parseInt(code.slice(code[1].toLowerCase()==='x'?2:1),code[1].toLowerCase()==='x'?16:10));
  return {amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' '}[code.toLowerCase()];
});
const encoder = texte => texte.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const cheminAnglais = chemin => /^\/(?:$|(?:projets|a-propos|contact|mentions-legales|merci)(?:[\/#?]|$))/.test(chemin) ? '/en'+(chemin==='/'?'/':chemin) : chemin;
export function parcourirHTML(html, traduire, liensAnglais=false){
  // Les guillemets sont pris en compte pour ne pas couper un attribut contenant >.
  const morceaux=html.split(/(<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script\s*>|<style\b[^>]*>[\s\S]*?<\/style\s*>|<(?:[^>"']|"[^"]*"|'[^']*')+>)/gi);
  const texte = brut => {
    const cle=normaliser(decoder(brut));
    if(!cle)return brut;
    const traduit=traduire(cle);
    if(traduit===cle)return brut;
    return (brut.match(/^\s*/)?.[0]||'')+encoder(traduit)+(brut.match(/\s*$/)?.[0]||'');
  };
  return morceaux.map(m=>{
    if(/^<(?:script|style)\b|^<!--/i.test(m))return m;
    if(!m.startsWith('<'))return texte(m);
    const langue=/\bdata-langue\b/.test(m);
    const editorialMeta=/<meta\s/i.test(m)&&/(?:name="description"|property="og:(?:title|description)")/.test(m);
    return m.replace(/([\w:-]+)="([^"]*)"/g,(attribut,nom,valeur)=>{
      if(['alt','title','placeholder','aria-label','aria-roledescription','data-titre','data-categorie','data-legende'].includes(nom)||(nom==='content'&&editorialMeta))return nom+'="'+texte(valeur)+'"';
      if(liensAnglais&&!langue&&['href','action'].includes(nom))return nom+'="'+cheminAnglais(valeur)+'"';
      return attribut;
    });
  }).join('');
}
