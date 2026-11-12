# Qualité du portfolio — version du 12 novembre 2026

Ce fichier décrit la version actuelle, contrôlée localement. Les mesures des anciennes expériences cinéma sont conservées dans docs/archives/QUALITE-2026-11-10.md ; elles ne décrivent pas des fonctionnalités encore présentes.

## Compilation et contenu

- Compilation Astro réussie : 13 sorties de pages, dont la redirection /sull vers son étude locale.
- Analyse des 12 pages de contenu : 241 références locales sans fichier absent ; 53 balises image avec attribut alt ; un h1, une description et lang=fr par page contrôlée.
- Cinq projets scolaires détaillés, maintenus après précision donnée oralement par l’enseignant à Noah. Dates, contributions et reculs personnels actualisés depuis ses réponses du 12 novembre.
- Dossier de contrôle responsive temporaire retiré avant compilation finale. Aucun push ni déploiement.

## Accessibilité et interactions

| Critère propre au portfolio | Vérification | Résultat et limites |
| --- | --- | --- |
| Menu unique au clavier | Ouverture, Échap, observation de document.activeElement | Dialogue fermé ; focus rendu au bouton Chapitres. |
| Débordement sur mobile | Navigateur, documents à 320 px dans des cadres de contrôle ; lecture des largeurs du document | Accueil, carrousel, storyboard et cinq études : largeur 305 px pour 305 px disponibles après scrollbar. Storyboard également contrôlé à 768 px, sans dépassement. Les cadres servent à tester de vrais viewports CSS ; aucune simple réduction d’image n’est utilisée comme preuve. |
| Navigation du carrousel | Clics précédent/suivant sur les cinq positions ; flèche droite au clavier | Une carte active, cinq liens conservés, légende correspondante et boucle des cinq projets observées. Navigation manuelle met la lecture en pause. |
| Lecture automatique | Activation volontaire puis observation ultérieure, carrousel visible et onglet actif | Projet passé de Vivez l’essentiel à Smooth ; commande Pause disponible. Minuteur prévu à 6,5 s ; arrêt si hors écran, survol ou onglet masqué. Le comportement de pause par survol n’a pas fait l’objet d’une mesure isolée. |
| Mouvement réduit | Préférence active dans le navigateur de contrôle | Ouverture, carrousel et bandeaux initialement arrêtés. Activation explicite des effets observée : 9 s pour les affiches, 14 s pour le projecteur ; remise en pause vérifiée. |
| Bandeaux et points lumineux | Activation du bouton Lire la bande ; lecture des styles à deux instants | Transformation du texte et position des perforations changent ; durées respectives 55 s et 14 s. Le bouton remet le bandeau en pause. |
| Images du storyboard | Inspection du rendu et des sources | Portrait WebP local de 720 × 900 chargé immédiatement ; illustration personnelle présente ; affiches Miami Vice et Spider-Man retirées des sources et de public. |
| Images de processus | Inspection des captures et références | Persona SULL d’origine conservé au ratio naturel ; captures réelles des graphiques de Derrière le prompt ajoutées. |
| Sans JavaScript | Relecture du HTML et du repli CSS | Cinq liens de projets et une piste horizontale prévus ; contrôle navigateur avec JavaScript désactivé encore à faire. |
| Lecteur d’écran, contrastes, zoom | À compléter | Aucune conformité globale revendiquée. Les attributs et les tests clavier ne remplacent pas ces essais. |

Le balayage tactile est implémenté, mais n’a pas été exercé sur un téléphone physique. Aucun échec console de l’application relevé sur le parcours final de contrôle.

## Sobriété et performance

| Critère | Mise en œuvre / contrôle | État |
| --- | --- | --- |
| Images adaptées | Astro Image pour les projets et le portrait d’accueil ; portrait du storyboard servi en WebP local optimisé | Formats et dimensions contrôlés. |
| Dépendances | package.json et code client | Aucun ajout de bibliothèque de carrousel ou d’animation ; Astro, CSS natif et scripts de navigateur. |
| Ressources externes | Relecture des sources | Polices et images locales ; dossiers et projets tiers accessibles par liens, sans iframe intégrée dans le produit. |
| Poids généré | Somme des fichiers de dist | 4 660 281 octets, toutes pages et tailles d’images comprises. Ce total ne mesure pas le transfert initial d’une visite. |
| Mesures de chargement | À effectuer sur l’hébergement final | Lighthouse / PageSpeed, transfert réseau, LCP et stabilité visuelle restent à mesurer. Aucun score inventé. |

## Référencement

| Critère | Contrôle | État |
| --- | --- | --- |
| Domaine de référence | Configuration et HTML généré | noahlitzler.fr confirmé par Noah, renseigné dans Astro ; URL canonique présente dans le build. |
| Sitemap et robots | Lecture des fichiers générés | Neuf URL de contenu sur https://noahlitzler.fr ; robots.txt désigne le sitemap. |
| Titres et descriptions | Analyse des pages compilées | Présents, avec positionnement et dates de stage actualisés sur les pages concernées. |
| Publication et indexation | À réaliser | Domaine seul chez Infomaniak ; hébergement à configurer. Une compilation locale n’atteste pas une mise en ligne ni une indexation. |

## Crédits, données et publication

- Les cinq projets sont identifiés comme scolaires ; La Cimade reste une proposition non officielle.
- Contributions de Derrière le prompt et SULL renseignées d’après Noah. Liens vers Observable, la réutilisation data.gouv.fr et le dossier Figma SULL ajoutés.
- Visuels Smooth : SVG fournis par l’enseignante puis retravaillés avec ChatGPT. Les rendus ne sont pas attribués à Noah comme modèles 3D originaux. Crédit détaillé et licence de la ressource fournie à confirmer.
- Les personas SULL sont des profils fictifs du dossier pédagogique. Origine et droits des photos de ces planches, des médias capturés dans SULL et des autres ressources à confirmer avant publication.
- Formulaire toujours préparé pour Netlify Forms ; aucun envoi réel effectué. Hébergement, réception à noah.litzler@gmail.com, politique de traitement des messages et mentions d’hébergeur restent à configurer et vérifier.
- LinkedIn et Instagram restent accessibles ; le compte consacré aux créations sera fourni plus tard par Noah. Aucune modification ni publication sur ses réseaux effectuée.
- IA.md et JOURNAL.md actualisés. Noah a indiqué ne pas encore avoir relu le code : aucune maîtrise personnelle n’est attestée à sa place.

## Preuves et sauvegardes

Sauvegardes avant ajustements : portfolio-avant-ajustements-12-novembre.zip et .bundle. Captures dans le dossier outputs de la session : ajustements-accueil-desktop.png, ajustements-storyboard-desktop.png, ajustements-accueil-mobile.png, ajustements-carrousel-mobile.png, ajustements-storyboard-mobile.png. Ces fichiers de session ne constituent pas une publication du portfolio.
