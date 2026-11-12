import {anglais} from './en.js';
// Noms propres, marques, typographies et libellés déjà anglais : volontairement inchangés.
const identiques=new Set(['Noah Litzler','Portfolio / 2026','N.L','noah.litzler@gmail.com ↗','© 2026 Noah Litzler - Montbéliard, France','Montbéliard, 2026','Imagination','Michael Jackson','Comics','Comics.','Street workout.','Contact','Email','Collaboration','Message','Admission','CV','noah.litzler@gmail.com','LinkedIn','Instagram','@noahlitzler','Author, Oswald, Caveat, Courier Prime','Figma','Astro','Noah','Litzler','NL / 2026','Smooth','Vivez l’essentiel','La Cimade','Branding','Derrière le prompt','SULL','UX / UI design','Prod.','IUT Nord Franche-Comté, Montbéliard','Lycée Jean Jacques Henner, Altkirch','IUT Nord Franche-Comté','VS Code','Affinity','Print & illustration','Blender','3D','Framer','Notion','UI/UX (web)','Motion design','Storytelling','Clément Bertrand','Montserrat','Oswald','Terracotta','Light']);
export function traduire(texte){
  if(Object.hasOwn(anglais,texte))return anglais[texte];
  if(identiques.has(texte)||/^[\d\s/:×.…↗＋✕←→↓↘#A-Fa-f-]+$/.test(texte)||/^N° \d+$/.test(texte))return texte;
  if(texte.endsWith(' - Noah Litzler'))return traduire(texte.slice(0,-15))+' - Noah Litzler';
  const prefixes=[['Agrandir : ','Enlarge: '],['Découvrir ','Explore '],['Afficher ','Show '],['Voir la séance ','View the screening: '],['Entrer dans la salle : ','Enter the screening: '],['Documents du projet ','Project documents: ']];
  for(const [fr,en] of prefixes)if(texte.startsWith(fr))return en+traduire(texte.slice(fr.length));
  const ouvrir=texte.match(/^Ouvrir (.+) \(nouvel onglet\)$/);
  if(ouvrir)return 'Open '+traduire(ouvrir[1])+' (new tab)';
  const scene=texte.match(/^(Scène|Plan) (\d+)$/);
  if(scene)return (scene[1]==='Scène'?'Scene ':'Shot ')+scene[2];
  const seance=texte.match(/^Séance (\d+)(.*)$/);
  if(seance)return 'Screening '+seance[1]+(seance[2]?seance[2].slice(0,3)+traduire(seance[2].slice(3)):'');
  if(texte.startsWith('Projet scolaire · '))return 'Course project · '+traduire(texte.slice(18));
  // Les bandeaux de projet composent trois éléments déjà traduits séparément.
  if(/ - Séance \d+ - /.test(texte))return texte.split(' - ').map(traduire).join(' - ');
  throw new Error('Traduction anglaise manquante : '+texte);
}
