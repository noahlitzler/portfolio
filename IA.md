# Déclaration d’utilisation de l’IA — Portfolio

J’ai utilisé Claude, ChatGPT et Codex à plusieurs étapes du portfolio : pour explorer des solutions, obtenir des explications, débloquer le code et mettre en place certaines fonctionnalités. Je présente ici leur rôle et les choix que j’ai faits à partir des propositions reçues.

Mon travail personnel porte d’abord sur le concept cinéma et la direction graphique. J’ai conçu les écrans desktop dans Figma et défini principalement moi-même les couleurs, les typographies et les compositions. Pendant l’intégration, j’ai notamment modifié les tailles, les couleurs, les marges et le responsive en CSS. J’ai aussi saisi ou modifié les informations des projets dans le fichier de données. L’adaptation mobile et plusieurs développements ont été réalisés avec de l’aide.

## 1. Conception : développer mon idée et comparer des pistes

**Outil utilisé : Claude.**

Mon point de départ était de faire découvrir les projets comme des films, avec une affiche et des coulisses. J’ai utilisé Claude pour développer cette idée, comparer des présentations et améliorer certains écrans. Il m’a aussi aidé à structurer la première soutenance. Mes écrans desktop et mes recherches graphiques servaient de base aux échanges.

Je n’ai pas retenu les présentations de projets trop génériques : elles ne correspondaient pas au reste de la maquette. Une organisation en scénario était trop longue et rendait l’information moins facile à trouver. J’ai choisi une fiche de film avec un pitch, un making-of, une fiche technique, un résultat et une scène coupée. Cette structure permet de montrer ma démarche tout en restant dans l’univers cinéma.

Le choix des couleurs et des polices a été surtout fait par moi dans Figma. J’ai gardé une base sombre et crème, accompagnée d’accents colorés, et les polices Author, Oswald et Caveat. L’IA m’a aidé à faire évoluer les propositions, mais les décisions visuelles venaient de ce que je voulais montrer de mon travail.

Après la soutenance maquette, j’ai repris la navigation et la hiérarchie des textes en tenant compte des retours des professeurs. L’ajout d’un vrai menu a été un changement important. J’ai retenu l’idée des « Chapitres » pour répondre à ce besoin sans sortir de ma direction artistique.

## 2. Développement : intégrer la maquette et résoudre les blocages

**Outils utilisés : Claude au démarrage, ChatGPT pour les explications et le dépannage, puis Codex pour l’intégration et les évolutions.**

L’aide de Claude a accompagné le démarrage du projet Astro et les premières pages. ChatGPT m’a surtout servi à obtenir des explications sur le code et à résoudre des problèmes, notamment lorsque les interactions JavaScript ne réagissaient pas comme prévu. Quand une correction n’était pas claire, je demandais des précisions avant de continuer et je vérifiais le résultat dans le navigateur.

Codex a fourni du code et des corrections pour les composants Astro, les pages de projets et les interactions : menu, carrousel, progression au défilement, animations et visionneuse. L’aide a également porté sur le responsive et la version anglaise. Les principales parties concernées sont HeroAccueil.astro, CarrouselProjets.astro, Entete.astro, Bandeau.astro, Visionneuse.astro, le gabarit projets/[slug].astro et le dossier src/i18n avec le middleware de traduction.

De mon côté, j’ai travaillé sur les réglages CSS et les contenus. J’ai modifié les tailles, couleurs, marges et adaptations aux écrans pour retrouver les proportions voulues. J’ai saisi ou corrigé les informations des cinq projets dans src/data/projets.js : contexte, dates, rôle, processus et recul personnel. Cette organisation m’a permis de comprendre comment un même composant peut afficher des contenus différents tout en gardant une présentation cohérente.

J’ai régulièrement fait reprendre les propositions après les avoir parcourues dans le navigateur. Plusieurs décisions ont réellement changé le résultat :

- **Une seule navigation :** la présence de repères en haut et en bas donnait l’impression de deux menus. J’ai demandé de garder un menu Chapitres et la barre de progression.
- **Retour à la maquette :** une refonte poussait le concept cinéma, mais s’éloignait de mon intention visuelle. J’ai choisi de revenir à une version plus proche de mes écrans, en conservant les améliorations utiles.
- **Accueil et affiches :** j’ai fait revoir plusieurs fois le nom, les proportions et la position des créations pour obtenir une entrée plus personnelle et lisible.
- **Carrousel :** j’ai préféré une présentation tournante des cinq projets, puis placé cette sélection après ma présentation pour clarifier le parcours.
- **Bandeaux :** j’ai précisé que les points lumineux devaient rester fixes et que seul le texte devait défiler.
- **Storyboard :** j’ai fait retirer les affiches de films et recentré cette partie sur ma personnalité, mes influences et mes créations.

Ces retours faisaient partie de mon travail de conception : une proposition pouvait fonctionner techniquement sans correspondre au résultat que je cherchais.

## 3. Publication et contrôles : rendre le site accessible en ligne

**Outil utilisé : Codex.**

J’ai utilisé Codex pour préparer la mise en ligne, comprendre les problèmes rencontrés et adapter le projet à l’hébergement. La méthode du VPS du cours a d’abord été travaillée ; les difficultés d’accès SSH ont ensuite conduit au choix de Netlify pour le portfolio, avec le nom de domaine enregistré chez Infomaniak.

Pour le contact, j’ai choisi Gmail SMTP plutôt que Netlify Forms. Codex a aidé à développer la route serveur /api/contact et la logique d’envoi dans src/lib/contact.js, avec Nodemailer. J’ai saisi les identifiants en privé et testé le formulaire ; j’ai confirmé la réception d’un message dans Gmail. Le fonctionnement serveur du contact et la publication sont les points que je souhaite particulièrement approfondir pour l’oral.

L’IA a également aidé à effectuer des contrôles de compilation, de liens, d’images, de responsive et de métadonnées, ainsi qu’à préparer les tests automatisés. J’ai moi-même parcouru les pages, testé les interactions et signalé les défauts visuels, dont la découpe du prénom et la place des projets. Les résultats datés et les essais restants sont consignés dans QUALITE.md.

## 4. Finalisation de la maquette et des documents

**Outil utilisé : Codex, avec le connecteur Figma pour la maquette.**

J’ai fait rapprocher la maquette desktop et mobile du site final, en conservant les modèles précédents en archive. L’aide a porté notamment sur les affiches, les états du carrousel et les études de cas. Author n’étant pas disponible pour l’édition par le connecteur, j’ai accepté Inter provisoirement dans les copies actualisées ; je prévois de remettre Author moi-même. Le site conserve Author.

Codex a aussi servi à structurer et reformuler le README, le journal, cette déclaration et la checklist qualité. Les contenus personnels sont basés sur les informations que j’ai fournies : mon organisation, les difficultés rencontrées, mes interventions et mes choix. J’ai également retenu un favicon proposé dans la continuité de mon univers : initiale, point rose et perforations de pellicule.

## 5. Usage de l’IA dans les créations présentées

Ces usages concernent les projets montrés dans le portfolio, en complément de l’aide au développement du site.

**La Cimade — ChatGPT :** génération des photos utilisées dans les bannières. J’ai dirigé le type d’image, le nombre de personnes et leur disposition, puis sélectionné les propositions. Dans le recul sur ce projet, je souhaite pousser davantage le caractère personnel de l’identité et des affiches.

**Smooth — ChatGPT :** adaptation des visuels de lunettes à partir des fichiers SVG fournis par l’enseignante. L’origine est indiquée dans les crédits ; ces rendus ne sont pas des modèles 3D entièrement créés par moi. Le travail présenté comprend mon identité de marque, mon parcours et ma proposition graphique pour le projet.

## Ce que cette utilisation m’a apporté

Le principal apprentissage a été de mieux formuler mes attentes et de juger les propositions. J’ai appris à distinguer une solution qui fonctionne d’une solution qui correspond à ma direction graphique et au parcours que je veux proposer. Les échanges m’ont aidé à avancer, mais le résultat a demandé des choix réguliers et de nombreuses reprises.

Aujourd’hui, les données des projets et leur affichage dans les composants Astro sont les parties que je me sens le plus à l’aise pour expliquer et modifier. Je prépare davantage le fonctionnement du formulaire serveur, du SMTP et de la publication. Pour un prochain projet, je cadrerais les demandes plus précisément dès le départ afin de limiter les allers-retours et de garder plus facilement une continuité entre conception et développement.
