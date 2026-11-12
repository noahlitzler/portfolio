# Français / anglais

Le français reste à la racine ; les mêmes pages existent sous /en/. Les noms des projets, les images des créations, les captures des sites tiers et le PDF du CV restent dans leur langue d’origine. Le téléchargement du CV est marqué « French » dans la version anglaise.

## Principe à expliquer

1. src/pages/en/[...page].astro utilise getStaticPaths pour les mêmes pages et les cinq projets. Il réutilise les composants existants plutôt que de maintenir deux mises en page.
2. Base.astro fournit la langue du document et les liens de référencement vers les deux versions. Entete.astro construit les deux destinations du sélecteur ; les liens sont de vrais liens HTML.
3. src/i18n/en.js associe chaque texte français à une traduction anglaise écrite explicitement. Il n’y a aucun service de traduction externe et aucun téléchargement de dictionnaire côté navigateur.
4. Le middleware Astro traduit la réponse HTML anglaise pendant la génération statique et en développement. Le petit parcours HTML distingue les textes, les attributs éditoriaux et les balises ; il laisse scripts, styles, identifiants, valeurs de formulaire et fichiers d’images intacts. Il préfixe les liens internes de navigation avec /en, en excluant les liens du sélecteur FR / EN.
5. Les rares textes construits dans le navigateur (annonces du carrousel et erreurs du formulaire) utilisent document.documentElement.lang.

Le choix est conservé pendant la navigation grâce aux liens localisés. Aucune redirection automatique selon le navigateur, ni cookie de préférence, n’est ajouté.

## Modifier un texte

Modifier le texte français à son emplacement actuel, puis sa correspondance dans src/i18n/en.js. Une phrase absente du dictionnaire bloque la compilation anglaise : elle ne laisse pas discrètement un paragraphe français au milieu de la version anglaise. Les noms propres et mots déjà anglais autorisés sont listés dans traduire.js.

Lancer npm test, puis npm run build. Contrôler les deux versions sur ordinateur et mobile si la longueur du texte change. Les tests couvrent notamment les entités HTML, les attributs contenant un signe >, les liens de navigation et le contenu des scripts/styles.

Cette solution reste statique : elle n’ajoute ni base de données, ni back-office, ni framework client. Noah doit encore relire et savoir expliquer ce traitement avant sa soutenance.

Référence utilisée : [middleware Astro](https://docs.astro.build/en/guides/middleware/).
