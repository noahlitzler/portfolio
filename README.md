# Portfolio - Noah Litzler

Portfolio de Noah Litzler, étudiant en BUT MMI (parcours création numérique) à l'IUT Nord Franche-Comté, Montbéliard.
Direction artistique, UI/UX, création numérique. En recherche de stage.

Concept : le portfolio est un film. L'accueil est une affiche, chaque projet est une séance avec sa fiche film (pitch, making-of, fiche technique, résultat), et la navigation se fait par chapitres, comme un menu de DVD.

## Projets présentés

1. Vivez l'essentiel - affiches tourisme pour le Pays de Montbéliard (production graphique)
2. La Cimade - refonte du logo (branding)
3. Derrière le prompt - datavisualisation interactive sur l’impact de l’IA, avec Clément Bertrand

## Stack

- Astro - framework, contenus statiques
- CSS natif + variables CSS
- JavaScript natif pour les interactions (menu, timecode au scroll)
- Bun - gestionnaire de paquets et scripts
- Hébergement du portfolio : configuration existante à confirmer, aucune publication pendant cette intégration

Polices : Author (Fontshare), Oswald, Caveat, Courier Prime, auto-hébergées.

## Lancer le projet

```
bun install
bun run dev
bun run build
```

## Documents

- JOURNAL.md - journal de bord semaine par semaine
- IA.md - déclaration d'usage de l'IA
- QUALITE.md - grille de contrôle qualité (à venir)

Maquette : https://www.figma.com/design/jAvCe2R0eTMmsTBlGz5A2E/PORTFOLIO---NOAH-LITZLER

## Comprendre le code avant la soutenance

- src/data/projets.js contient les trois études de cas. Un objet rassemble le titre, les crédits, les médias et les sections : modifier cet objet met à jour liste et fiche.
- src/pages/projets/[slug].astro utilise getStaticPaths pour générer une page HTML par projet au build. Il n’y a pas de base de données ni de back-office.
- Affiche.astro compose les trois affiches ; Visuel.astro passe les exports à Astro Image pour produire les formats et tailles adaptés.
- Entete.astro utilise un dialog HTML natif. showModal ouvre le menu ; close le ferme ; le navigateur assure le confinement du focus et Échap. Le script rend le focus au bouton à la fermeture.
- Les grilles CSS organisent les colonnes ; les media queries réorganisent le storyboard et le menu sur mobile. Les variables de tokens.css portent la palette, les polices et les gouttières.
- Le formulaire utilise les contraintes HTML (required et type=email) et Netlify Forms. Le traitement et les notifications doivent être vérifiés dans Netlify après autorisation de publication.
- Le niveau technique reste celui d’Astro statique avec composants et interactions ciblées. Aucune revendication de contenu dynamique relié à une base de données.

## Avant publication

1. Relire le code et les contenus ; préciser le rôle individuel dans le binôme SAÉ 303.
2. Finaliser les mentions et les droits des médias, puis retirer leur statut provisoire.
3. Configurer PORTFOLIO_SITE avec le domaine réel (https://…). Recompiler et vérifier le sitemap.
4. Valider les profils LinkedIn/Instagram et actualiser leur contenu personnellement.
5. Autoriser explicitement le push et le déploiement, puis tester réception du formulaire, HTTPS et nom de domaine.
6. Compléter les mesures de QUALITE.md et la relecture personnelle de IA.md.

Les commits du 7 novembre sont locaux. Ne pas pousser avant validation de Noah.



## Version actuelle

Le 10 novembre 2026, retour à la présentation proche de la maquette (base 3509daa), avec le menu Chapitres conservé et le filet de progression au défilement. Les fonctionnalités de refonte éditoriale sont archivées dans les sauvegardes. Aucun push ni déploiement n’a été effectué.
