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
- [à compléter : ce que j'ai refait moi-même dans Figma]

### Soutenance maquette

- **Pour quoi faire :** structurer le diaporama, préparer une trame d'oral et des questions probables du jury.
- **Ce que j'ai modifié :** [à compléter]

### Réalisation - mise en place du projet

- **Pour quoi faire :** m'expliquer la création du projet Astro avec Bun, corriger un repo imbriqué, proposer un plan de commits, rédiger un brouillon du README, du journal et de cette déclaration.
- **Code fourni puis relu et compris :** tokens.css, fonts.css, global.css, Base.astro, les 4 pages vides.
- **Ce que j'ai modifié :** [à compléter]

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
- **Ce que j'ai modifié :** [à compléter : ce que j'ai changé moi-même dans ces fichiers, par exemple tailles, couleurs, textes, valeurs d'effets]
## ChatGPT (OpenAI)

- **Étape :** projet La Cimade, bannières.
- **Pour quoi faire :** générer les photos utilisées dans les bannières.
- **Ce que j'ai modifié :** [à compléter : recadrage, retouches, sélection]

Règle : je dois pouvoir expliquer chaque ligne du code du site. Quand une IA m'aide sur du code, je le note ici avec le fichier concerné.