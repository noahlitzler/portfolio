# Portfolio — Noah Litzler

Portfolio individuel de BUT MMI, parcours création numérique. Positionnement : design graphique et direction artistique. Stage recherché du 29 mars au 4 juin 2027 dans le Haut-Rhin, à Bâle, à Porrentruy et aux alentours.

- Site : https://noahlitzler.fr/
- Dépôt public : https://github.com/noahlitzler/portfolio
- Maquette : https://www.figma.com/design/jAvCe2R0eTMmsTBlGz5A2E/PORTFOLIO---NOAH-LITZLER

## État au 17 novembre 2026

Le site est publié sur Netlify ; Infomaniak fournit le nom de domaine. Le domaine sans www est principal. L’accueil, le contact et les mentions légales ont répondu HTTP 200 lors du contrôle du 17 novembre. Noah a confirmé la réception d’un message du formulaire dans Gmail le 16 novembre. Cette confirmation est distincte des tests automatisés, qui n’envoient aucun email réel.

L’accueil suit cet ordre : ouverture animée, présentation personnelle, carrousel de cinq projets, parcours et compétences. Le menu Chapitres et la barre de progression sont partagés. Les points des bandeaux restent fixes et seuls les textes défilent. Le sélecteur FR / EN conserve la page consultée ; les créations et le CV restent dans leur langue d’origine.

Les pages Figma « 02 - Desktop · version actuelle » et « 03 - Mobile · version actuelle » remplacent les modèles de référence ; les précédentes sont archivées. La maquette reste une représentation des mises en page et états du site, sans reproduire toutes ses animations. Inter y remplace temporairement Author, avec l’accord de Noah ; le site conserve Author.

## Projets

| Projet scolaire | Date | Réalisation |
| --- | --- | --- |
| Vivez l’essentiel | Mai 2026 | Noah, individuel |
| La Cimade | Mars 2026 | Noah, individuel ; proposition non officielle |
| Derrière le prompt | Octobre 2026 | Noah et Clément Bertrand |
| SULL | Septembre 2026 | Noah et Clément Bertrand |
| Smooth | Octobre 2026 | Noah, individuel |

Les cinq études suivent le même gabarit : contexte, rôle, processus, choix techniques, résultat et recul personnel. Le sujet écrit limite les études à trois ; Noah a indiqué que l’enseignant autorisait et encourageait davantage de projets en cours. Ce choix est consigné dans JOURNAL.md.

## Technologies et raisons des choix

| Technologie / dépendance | Usage et justification |
| --- | --- |
| Astro | Précompiler les pages de présentation et réutiliser les composants sans framework client complet. Les projets proviennent de src/data/projets.js. |
| HTML, CSS natif et variables CSS | Structure sémantique, responsive et identité cinéma personnalisée ; aucun thème téléchargé. |
| JavaScript / TypeScript du navigateur | Menu dialog, carrousel, progression, visionneuse et effets du pointeur. Aucune bibliothèque d’animation ou de carrousel. |
| @astrojs/netlify | Adaptateur de publication actuel, notamment pour la route serveur du formulaire. |
| Nodemailer | Envoyer le contact par Gmail SMTP côté serveur ; identifiants conservés dans les variables privées de Netlify. |
| @astrojs/node | Alternative standalone préparée pour le VPS du cours ; sélectionnée uniquement avec PORTFOLIO_CIBLE=vps. Ce n’est pas l’hébergement actuel. |
| Fontsource : Oswald, Caveat, Courier Prime, Montserrat | Polices disponibles localement dans les dépendances ; Author est auto-hébergée séparément. Les imports du site déterminent les polices réellement chargées. |
| Bun, Node et Git | Installation, compilation, tests et suivi des versions. Netlify utilise Bun pour le build et Node pour l’exécution serveur. |

Les dépendances et versions sont déclarées dans package.json et les fichiers de verrouillage. Le framework et les polices servent une composition issue de la maquette personnelle ; aucun kit de composants générique n’est intégré.

## Lancer et vérifier

Prérequis : Node >= 22.12 et Bun. La configuration Netlify fixe Node 22 et Bun 1.4.2.

```sh
bun install --frozen-lockfile
bun run dev
bun run test
bun run build
```

Le build cible Netlify par défaut. La configuration de publication et du contact est décrite dans [docs/NETLIFY.md](docs/NETLIFY.md). L’ancienne procédure VPS est conservée pour l’historique dans [docs/PUBLICATION.md](docs/PUBLICATION.md) ; son workflow GitHub Actions est désactivé.

## Repères dans le code

- src/components/HeroAccueil.astro : nom, affiches et effets d’ouverture.
- src/components/CarrouselProjets.astro : index circulaire, flèches, repères, clavier et rotation automatique.
- src/components/Bandeau.astro : texte animé et points fixes en CSS.
- src/components/Entete.astro : menu dialog et progression au défilement.
- src/components/Visuel.astro et Visionneuse.astro : images et agrandissement.
- src/pages/projets/[slug].astro : génération des cinq études depuis les données.
- src/pages/api/contact.ts et src/lib/contact.js : validation et envoi SMTP.
- src/i18n et src/middleware.js : traduction anglaise au rendu ; voir [docs/LANGUES.md](docs/LANGUES.md).
- tests/ : contrôles du contact avec transport factice et de la traduction.

## Dossier de rendu

- [JOURNAL.md](JOURNAL.md) : décisions et difficultés, avec justification des réseaux.
- [IA.md](IA.md) : outils utilisés, productions, corrections et rejets ; maîtrise personnelle à démontrer à l’oral.
- [QUALITE.md](QUALITE.md) : contrôles propres au site, résultats datés et limites.
- [docs/REMISE.md](docs/REMISE.md) : correspondance avec les livrables et dernières actions.

Noah a confirmé les droits de publication des ressources et la mise à jour de LinkedIn et Instagram. Les crédits restent présents et les licences tierces applicables. Les messages sont conservés au maximum 12 mois après le dernier échange, sous les exceptions précisées dans les mentions ; leur suppression dans Gmail est manuelle.

Les animations permanentes restent un choix de Noah, y compris lorsque le système demande une réduction des mouvements. Cette limite est déclarée : aucune conformité complète d’accessibilité n’est revendiquée. La relecture personnelle du code, des textes français et anglais et les essais manuels restants ne sont pas présentés comme achevés.

Les changements de cette finalisation sont locaux. Aucun nouveau push ni déploiement n’est effectué ; le dernier push sera réalisé après validation de Noah.
