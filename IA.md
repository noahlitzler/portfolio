# Déclaration d'usage de l'IA

Pour chaque outil : à quelle étape, pour quoi faire, et ce que j'ai modifié, corrigé ou rejeté.

## Claude (Anthropic)

### Conception - maquette Figma

- **Pour quoi faire :**
  - proposer des pistes de mise en page ;
  - appliquer des modifications dans Figma via l'API de plugins (composants, liens du prototype, pages Contexte/Design) ;
  - vérifier le prototype : liens morts, textes qui débordent.
- **Ce que j'ai rejeté ou corrigé :**
  - les premières pages projets, trop "IA", avec des cartes arrondies ;
  - la version "scénario", trop longue ;
  - les tirets longs, remplacés partout par "-" ;
  - le logo de la Cimade, trop déformé, refait jusqu'à rester fidèle à l'original.
- **Ce qui vient de moi :** le concept "portfolio = film", le choix des projets, la note de positionnement, le moodboard, l'arbitrage final sur chaque écran.
- **Ce que j'ai refait moi-même dans Figma :** Modification de la naviguation demandée par le prof, mise en place de mon Nom et Prénom au lieu de Portfolio à l'accueil, passage en revue des nombreux textes qui étaient trop petits ou peu visible directement. Ajout du troisième projet étant donné qu'il a été terminer après la soutenance maquette.

### Soutenance maquette

- **Pour quoi faire :** structurer le diaporama, préparer une trame d'oral et des questions probables du jury.
- **Ce que j'ai modifié :** [à compléter]

### Réalisation - mise en place du projet

- **Pour quoi faire :** m'expliquer la création du projet Astro avec Bun, corriger un repo imbriqué, proposer un plan de commits, rédiger un brouillon du README, du journal et de cette déclaration.
- **Code fourni puis relu et compris :** tokens.css, fonts.css, global.css, Base.astro, les 4 pages vides.
- **Ce que j'ai modifié :** J'ai relu chaque fichier, testé le rendu dans le navigateur, et les valeurs (palette, polices, tailles minimales) viennent de mes décisions de maquette.

### Réalisation - pages et composants

- **Pour quoi faire :** écrire le code des composants et des pages à partir de ma maquette Figma finale, sous forme de commandes PowerShell à coller dans le terminal, puis m'aider à corriger les erreurs de build.
- **Code fourni puis relu et compris :**
  - src/components/Entete.astro : header avec chapitres, timecode, barre de progression et bouton CHAPITRES (balise details) ;
  - src/components/PiedDePage.astro : footer précédent / suivant ;
  - src/components/Bandeau.astro : bandeau défilant à perforations ;
  - src/layouts/Base.astro : branchement du header et du footer ;
  - src/pages/index.astro : hero avec nom en demi-teinte, présentation, claquette, quatre scènes, section "Séances à l'affiche", portrait optimisé en WebP ;
  - src/pages/contact.astro et src/pages/merci.astro : formulaire (Netlify Forms), cartes de contact, crédits de fin ;
  - src/styles/global.css : deux règles ajoutées pour coller le footer en bas de page.
- **Ce qui vient de moi :** la maquette complète que le code reproduit (structure, textes, couleurs, effets) et le choix des contenus affichés.
- **Comment j'ai vérifié :** chaque bloc testé avec bun run build (nombre de titres, de billets, fichiers générés) puis dans le navigateur. Les erreurs rencontrées sont dans le journal, semaine 8.
- **Ce que j'ai modifié :** J'ai fourni moi-même les données réelles (mon URL LinkedIn, mon CV, le portrait exporté de Figma), vérifié chaque page dans le navigateur, et réparé avec une commande l'erreur de double collage dans index.astro.
## ChatGPT (OpenAI)

- **Étape :** projet La Cimade, bannières.
- **Pour quoi faire :** générer les photos utilisées dans les bannières.
- **Ce que j'ai modifié :** La séléction du typ d'affiche, le sens que je veux voulais donné à l'affiche ainsi que le nombre de personnes et la disposition.

Règle : je dois pouvoir expliquer chaque ligne du code du site. Quand une IA m'aide sur du code, je le note ici avec le fichier concerné.

## Codex / OpenAI - intégration du 7 novembre 2026

- Étape : réalisation et contrôle local, à partir de la maquette Figma et du projet Astro existant.
- Travail fourni par l’outil : récupération des exports Figma ; composant Affiche ; intégration des visuels des études de cas ; storyboard À propos ; menu de chapitres avec dialog natif et JavaScript ; adaptation mobile ; remplacement de SULL par Derrière le prompt ; métadonnées et pages annexes.
- Fichiers concernés : src/components/Affiche.astro, Entete.astro, Visuel.astro, PiedDePage.astro ; src/data/projets.js ; src/pages/index.astro, projets.astro, projets/[slug].astro, a-propos.astro, contact.astro, 404.astro, mentions-legales.astro ; Base.astro, styles globaux et tokens ; robots.txt.ts, sitemap.xml.ts et astro.config.mjs.
- Vérifications effectuées par l’outil : compilation Astro, liens et images locaux, titres et descriptions, rendu navigateur sur ordinateur et mobile, ouverture du menu, fermeture par Échap et retour du focus. Aucun message de formulaire envoyé.
- Correction de l’outil après contrôle : proportions du symbole La Cimade, menu mobile, recadrage des images de making-of, débordement des affiches à 320 px, suppression des exports inutilisés.
- Origine des nouveaux textes : maquette, code initial, site et README local de Derrière le prompt. L’outil n’a pas attribué de tâches individuelles détaillées dans le binôme faute de preuve.
- À relire par Noah : chaque changement de code et de texte ; répartition exacte du travail sur la SAÉ 303 ; politique des données et informations légales. La relecture personnelle n’a pas encore eu lieu : cette entrée ne prétend pas le contraire.
- À compléter par Noah après relecture : ce que j’ai compris, modifié, corrigé ou rejeté parmi les propositions de Codex.


## Codex / OpenAI - expérience cinéma du 8 novembre 2026

- Demande : mettre en œuvre les six évolutions approuvées par Noah, en conservant des commits locaux et sans publication.
- Code produit : Cinema.astro, scripts/cinema.ts et styles/cinema.css ; comparateur, galerie, ouverture, raccords de navigation, lecteur de scènes, révélations au défilement, ambiance sonore synthétisée sur activation volontaire, générique et billet de remerciement.
- Méthode : Astro statique conservé ; CSS natif et JavaScript/TypeScript du navigateur ; aucune bibliothèque d’animation ni dépendance ajoutée. Les View Transitions sont progressives : les navigateurs qui ne les prennent pas en charge gardent les liens normaux.
- Référence du comparateur : logo officiel téléchargé depuis https://www.lacimade.org/wp-content/themes/cimade/_img/lacimade-couleur.svg le 8 novembre 2026, attribué dans la page ; proposition personnelle issue de la maquette. Son original synthétisé avec Web Audio, sans extrait de film ni musique protégée.
- Contrôles : build ; galerie avec précédent/suivant, Échap et retour du focus ; curseur aux deux extrémités au clavier ; activation puis coupure du son ; huit pages contrôlées à 320 px sans débordement après chargement des polices. Aucune erreur console observée pendant ce parcours. Le navigateur de vérification demande les mouvements réduits : mode statique observé, animations complètes non jugées visuellement dans ce mode.
- Corrections : correspondance des étiquettes du comparateur ; progression supérieure liée au scroll ; générique lisible sans JavaScript ; respect du mouvement réduit.
- Relecture personnelle de Noah encore à faire : comprendre les écouteurs d’événements, IntersectionObserver, les dialogues, requestAnimationFrame et les réglages d’accessibilité ; préciser ensuite ses corrections ou rejets.


## Codex / OpenAI - refonte éditoriale du 8 novembre 2026

- Autorisation : Noah a validé la composition d’accueil et de séquence projet, puis demandé son intégration complète avec sauvegarde et commits locaux.
- Sauvegarde préalable : ZIP des sources (y compris les modifications non commitées et package-lock.json) et bundle Git ; commit 5f91ed1 de la version précédente.
- Travail de l’outil : nouvelle composition de l’accueil, programmation en grands plans, trois univers de projets, composant HeroProjet, navigation unique par dialog, pied de page et déplacement des données de parcours vers la page À propos. Le profil reprend les contenus existants, sans expérience ajoutée.
- Fichiers principaux : Entete.astro, FilmProgramme.astro, HeroProjet.astro, Profil.astro, PiedDePage.astro, index.astro, projets.astro, projets/[slug].astro, profil.js et editorial.css ; retrait du lecteur inférieur dans Cinema.astro et simplification du calcul de progression dans cinema.ts.
- Corrections après inspection : marges des titres, placement des textes de l’accueil, proportions des affiches et suppression des anciens styles du lecteur. Les CSS ont été mises en forme pour faciliter la relecture.
- Contrôles : build, références locales, huit routes à 320 px, navigation menu/Échap, bande-annonce, galerie et comparateur. Les médias existants sont utilisés ; aucune dépendance ajoutée.
- À relire personnellement : chaque nouveau composant, les trois ambiances de projets, le contenu du profil, les choix graphiques et les animations dans un navigateur sans réduction des mouvements. Aucune relecture personnelle n’est attestée à la place de Noah.


## Codex - retour à la maquette le 10 novembre 2026

À la demande de Noah, restauration de la présentation de la version 3509daa (accueil, projets, études de cas, storyboard et contact), avec conservation du menu Chapitres de la refonte et d’un filet de progression au défilement. Sauvegardes ZIP et bundle de la version éditoriale avant modification. Retrait des composants et styles ajoutés pour la refonte et l’expérience cinéma ; les réglages de son et d’effets sont retirés du menu. Aucun push ni déploiement.
