# Portfolio — Noah Litzler

Portfolio scolaire de BUT MMI, parcours création numérique. Positionnement : design graphique et direction artistique. Stage recherché du 29 mars au 4 juin 2027, dans le Haut-Rhin, à Bâle, à Porrentruy et aux alentours.

## Version actuelle — 12 novembre 2026

Le portfolio emprunte au cinéma son vocabulaire et sa présentation : ouverture, affiches, séances, making-of, storyboard et guichet. L’accueil comporte une composition animée de créations et un carrousel de cinq projets. Le storyboard À propos utilise le portrait et les travaux de Noah, sans affiches de films. Un seul menu Chapitres et une barre de progression au défilement assurent la navigation.

Les cinq études de cas sont conservées : Noah précise que l’enseignant a autorisé et encouragé davantage de projets en cours. Elles suivent le même gabarit : contexte, rôle, making-of, fiche technique, résultat et recul personnel.

| Projet scolaire | Date | Réalisation |
| --- | --- | --- |
| Vivez l’essentiel | Mai 2026 | Noah, individuel |
| La Cimade | Mars 2026 | Noah, individuel, refonte non officielle |
| Derrière le prompt | Octobre 2026 | Noah et Clément Bertrand |
| SULL | Septembre 2026 | Noah et Clément Bertrand |
| Smooth | Octobre 2026 | Noah, individuel |

## Techniques et lancement

Astro génère les pages statiques ; les contenus sont dans src/data/projets.js. CSS natif, variables et JavaScript/TypeScript du navigateur. Dépendances déclarées dans package.json : Astro et Fontsource. Aucune bibliothèque de carrousel ou d’animation ajoutée. Polices locales : Author, Oswald, Caveat, Courier Prime et Montserrat.

Node 22.12 ou supérieur. Lancer npm install puis npm run dev ; compiler avec npm run build et contrôler le résultat avec npm run preview. Bun reste utilisable avec les scripts équivalents. Le package-lock.json existant de Noah est conservé sans inclusion dans les commits de cette intervention.

## Comprendre les composants

- HeroAccueil.astro : composition, lumière et mouvements en CSS ; commande de pause des effets.
- CarrouselProjets.astro : cinq liens issus des données ; index circulaire, positions CSS, précédent/suivant, repères, clavier et balayage tactile. Rotation toutes les 6,5 secondes uniquement lorsque le carrousel est visible, sans survol et sans pause. Arrêt lors des interactions et en onglet masqué ; démarrage arrêté si le système demande une réduction des mouvements. Sans JavaScript, une liste horizontale reste utilisable.
- Bandeau.astro : texte et rangées de perforations animés, avec lecture/pause. Les mouvements réduits sont respectés ; le visiteur peut explicitement lancer un bandeau.
- Entete.astro : dialog natif, Échap et retour du focus ; progression calculée avec scrollY et la hauteur du document, actualisée par requestAnimationFrame.
- projets/[slug].astro : getStaticPaths génère une page par projet et le lien suivant circule sur les cinq projets.
- Affiche.astro et Visuel.astro : affiches partagées et images optimisées avec Astro Image.

## Domaine et publication

Noah possède noahlitzler.fr chez Infomaniak, pour le nom de domaine uniquement. L’hébergement est à configurer. Le domaine est renseigné dans astro.config.mjs ; PORTFOLIO_SITE peut le remplacer. Le build génère les URL canoniques, robots.txt et le sitemap pour cette adresse. Cette configuration ne publie pas le site.

Le formulaire est encore préparé pour Netlify Forms. Le choix et la configuration de l’hébergement, la réception réelle des messages à noah.litzler@gmail.com et les informations de confidentialité restent à vérifier avant ouverture publique. Ne pas considérer l’envoi comme opérationnel sur un hébergement quelconque.

## Documents et validation

JOURNAL.md conserve les décisions successives ; IA.md déclare l’aide reçue et la relecture personnelle restant à effectuer ; QUALITE.md décrit les contrôles actuels. Les anciennes mesures qualité sont archivées dans docs/archives/QUALITE-2026-11-10.md.

Avant publication : relecture personnelle du code et des textes, crédits et licences des ressources à confirmer, tests qualité restants, configuration de l’hébergement et du formulaire, mise à jour des réseaux. Le compte Instagram de créations sera ajouté plus tard par Noah. Préparation de soutenance envisagée autour de La Cimade ou Smooth ; le code n’a pas encore été relu personnellement par Noah.

Sauvegardes ZIP et bundle avant chaque refonte. Commits locaux uniquement. Aucun push ni déploiement sans validation de Noah.
