import test from 'node:test';
import assert from 'node:assert/strict';
import {parcourirHTML,cheminAnglais} from '../src/i18n/html.js';
import {traduire} from '../src/i18n/traduire.js';

test('les textes, entités et attributs éditoriaux sont traduits sans toucher aux scripts',()=>{
  const html='<p title="Agrandir : Logo final La Cimade">Maquettes &amp; UI</p><script>const nom="Projet";const comparaison=1>0;</script><style>.nom::after{content:"Projet"}</style><!-- Projet -->';
  const anglais=parcourirHTML(html,traduire,true);
  assert.ok(anglais.includes('title="Enlarge: Final La Cimade logo"'));
  assert.ok(anglais.includes('>Prototypes &amp; UI</p>'));
  assert.ok(anglais.includes('<script>const nom="Projet";const comparaison=1>0;</script>'));
  assert.ok(anglais.includes('<style>.nom::after{content:"Projet"}</style><!-- Projet -->'));
});
test('seuls les liens de navigation interne changent de langue',()=>{
  assert.equal(cheminAnglais('/projets/sull#resultat'),'/en/projets/sull#resultat');
  assert.equal(cheminAnglais('/'),'/en/');
  for(const lien of ['/en/contact','/cv-noah-litzler.pdf','/_astro/image.webp','mailto:noah.litzler@gmail.com','https://example.org/contact'])assert.equal(cheminAnglais(lien),lien);
  assert.equal(parcourirHTML('<a data-langue href="/contact">FR</a>',traduire,true),'<a data-langue href="/contact">FR</a>');
});
test('les descriptions et légendes dynamiques sont également en anglais',()=>{
  assert.equal(traduire('Séance 03 · Datavisualisation'),'Screening 03 · Data visualisation');
  assert.equal(traduire('Projet scolaire · Mai 2026'),'Course project · May 2026');
  assert.equal(traduire('Derrière le prompt - Séance 03 - Datavisualisation'),'Derrière le prompt - Screening 03 - Data visualisation');
  assert.equal(traduire('Design graphique et direction artistique - Noah Litzler'),'Graphic design and art direction - Noah Litzler');
  assert.throws(()=>traduire('Une nouvelle phrase à traduire'),/Traduction anglaise manquante/);
});
test('les traductions ne peuvent pas introduire du HTML',()=>{
  assert.equal(parcourirHTML('<p>Bonjour</p>',()=>'<img src="x">'),'<p>&lt;img src=&quot;x&quot;&gt;</p>');
  assert.equal(parcourirHTML('<p title="a > b">Projet</p>',t=>t==='Projet'?'Project':t),'<p title="a > b">Project</p>');
});
