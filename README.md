# Portfolio — Noah Litzler

Portfolio scolaire de BUT MMI, parcours création numérique. Positionnement : design graphique et direction artistique. Stage recherché du 29 mars au 4 juin 2027, dans le Haut-Rhin, à Bâle, à Porrentruy et aux alentours.

## Version actuelle — 13 novembre 2026, préparation du VPS du cours

Le portfolio emprunte au cinéma son vocabulaire et sa présentation : ouverture, affiches, séances, making-of, storyboard et guichet. L’accueil comporte une composition animée de créations, immédiatement suivie du carrousel de cinq projets. Le choix FR / EN conserve la page consultée ; les deux versions sont générées en HTML statique, y compris les cinq études. Les créations et le CV restent dans leur langue d’origine. Le storyboard À propos utilise le portrait et les travaux de Noah, sans affiches de films. Un seul menu Chapitres et une barre de progression au défilement assurent la navigation.

Les cinq études de cas sont conservées : Noah précise que l’enseignant a autorisé et encouragé davantage de projets en cours. Elles suivent le même gabarit : contexte, rôle, making-of, fiche technique, résultat et recul personnel.

| Projet scolaire | Date | Réalisation |
| --- | --- | --- |
| Vivez l’essentiel | Mai 2026 | Noah, individuel |
| La Cimade | Mars 2026 | Noah, individuel, refonte non officielle |
| Derrière le prompt | Octobre 2026 | Noah et Clément Bertrand |
| SULL | Septembre 2026 | Noah et Clément Bertrand |
| Smooth | Octobre 2026 | Noah, individuel |

## Techniques et lancement

Astro génère les pages de présentation statiques ; les contenus sont dans src/data/projets.js. L’adaptateur Node standalone permet au formulaire de recevoir les messages côté serveur, avec Bun et systemd comme dans le cours de Hakim. CSS natif, variables et JavaScript/TypeScript du navigateur. Dépendances déclarées dans package.json : Astro, Fontsource, adaptateur Node officiel et Nodemailer pour le SMTP. Aucune bibliothèque de carrousel ou d’animation ajoutée. Polices locales : Author, Oswald, Caveat, Courier Prime et Montserrat.

Node 22.12 ou supérieur et Bun (1.4.2 lors du contrôle). Utiliser bun install --frozen-lockfile, bun run dev, bun run test, puis bun run --bun build. Après build, bun run start lance le serveur standalone ; le service définit HOST=127.0.0.1 et PORT=3355. Les pages publiques sont dans dist/client, l’entrée serveur dans dist/server/entry.mjs. Le package-lock.json existant de Noah est conservé sans inclusion dans les commits de cette intervention.

## Comprendre les composants

- HeroAccueil.astro : apparition du nom, balayage de lumière, reflets sur les affiches et mouvement de profondeur. Un léger parallaxe suit le pointeur avec requestAnimationFrame. Les effets démarrent automatiquement, sans bouton d’activation.
- CarrouselProjets.astro : cinq liens issus des données ; index circulaire, positions CSS, précédent/suivant, repères, clavier et balayage tactile. Rotation automatique toutes les 6,5 secondes lorsque le carrousel est visible. Suspension pendant le survol, le focus clavier ou quand l’onglet est masqué, puis reprise automatique. Flèches et repères conservés ; aucune commande Lecture/Pause. Sans JavaScript, une liste horizontale reste utilisable.
- Bandeau.astro : seul le texte défile en continu ; les deux rangées de points restent fixes. Animation CSS commune à toutes les pages qui utilisent ce composant, sans JavaScript ni bouton.
- src/pages/api/contact.ts et src/lib/contact.js : réception, validation et envoi SMTP ; identifiants privés chargés sur le serveur. Les tests remplacent l’envoi par un transport local factice.
- Entete.astro : dialog natif, Échap et retour du focus ; progression calculée avec scrollY et la hauteur du document, actualisée par requestAnimationFrame.
- projets/[slug].astro : getStaticPaths génère une page par projet et le lien suivant circule sur les cinq projets.
- Affiche.astro et Visuel.astro : affiches partagées et images optimisées avec Astro Image. Les visuels des études sont des liens directs utilisables sans JavaScript.
- Visionneuse.astro : un dialogue partagé pour les images, précédent/suivant, taille réelle, Échap et retour du focus. Les visuels déjà dans un lien de projet ne sont pas imbriqués dans un second lien.
- src/i18n : dictionnaire anglais, traduction des textes et attributs au rendu ; src/middleware.js applique ce traitement aux routes /en. Une traduction manquante fait échouer la compilation avec la phrase concernée. Voir docs/LANGUES.md.
- tests/langues.test.mjs : quatre contrôles de la traduction, des liens et de la préservation des scripts/styles. Lancer npm test.

## Domaine et publication

Noah possède noahlitzler.fr chez Infomaniak, pour le nom de domaine uniquement. L’installation dédiée du portfolio sur le VPS est à effectuer après validation. Le domaine est renseigné dans astro.config.mjs ; PORTFOLIO_SITE peut le remplacer. Le build génère les URL canoniques, robots.txt et le sitemap pour cette adresse. Cette configuration ne publie pas le site.

La piste Netlify a été remplacée, à la demande de Noah, par la méthode du cours : VPS, Apache, Certbot, Bun, systemd et GitHub Actions. Le VPS est accessible et ses services ont été lus sans modification ; le domaine public pointait encore vers Netlify lors du relevé. Un conflit de VirtualHost racine avec TiK TaK a été repéré ; les modèles prévoient un service et un port distincts. Les fichiers et la procédure détaillée sont dans deploy/ et docs/PUBLICATION.md.

Le formulaire est préparé pour SMTP Gmail vers noah.litzler@gmail.com. Par défaut il reste désactivé, avec un lien email direct. Noah doit créer et saisir lui-même son mot de passe d’application dans le fichier privé du VPS, compléter les modalités de traitement et valider le test réel avant activation. Aucun secret n’est présent dans le dépôt et aucun email réel n’a été envoyé.

## Documents et validation

JOURNAL.md conserve les décisions successives ; IA.md déclare l’aide reçue et la relecture personnelle restant à effectuer ; QUALITE.md décrit les contrôles actuels. Les anciennes mesures qualité sont archivées dans docs/archives/QUALITE-2026-11-10.md.

Avant publication : relecture personnelle du code et des textes, crédits et licences des ressources à confirmer, tests qualité restants, configuration de l’hébergement et du formulaire, mise à jour des réseaux. Le compte Instagram de créations sera ajouté plus tard par Noah. Préparation de soutenance envisagée autour de La Cimade ou Smooth ; le code n’a pas encore été relu personnellement par Noah.

Sauvegardes ZIP et bundle avant chaque refonte. Commits locaux uniquement. Aucun push ni déploiement sans validation de Noah. Le workflow attend en plus DEPLOIEMENT_ACTIF=true ; il reste désactivé pendant la préparation.
