# Mon utilisation de l’IA pour le portfolio

J’ai utilisé Claude, ChatGPT et Codex pendant ce projet. Je m’en suis servi pour débloquer des problèmes et avancer dans mon travail. J’ai construit l’essentiel de la maquette moi-même, choisi principalement seul les couleurs et les polices dans Figma, et codé une partie de la structure, des styles et de petites interactions JavaScript.

Mon idée était de faire découvrir mes projets comme des films, avec leurs affiches et leurs coulisses. Cette idée venait de moi, puis je l’ai développée avec l’IA. Je vérifiais surtout les propositions dans le navigateur et je faisais mes retours. Quand je ne comprenais pas une correction, je demandais des explications avant de continuer.

## Claude — travailler la maquette et préparer la première soutenance

**Quand et pour quoi faire**

J’ai surtout utilisé Claude pendant la conception de la maquette et la préparation de la première soutenance. Il m’a aidé à explorer des présentations, améliorer certains écrans et structurer la façon de présenter le projet. Au démarrage de l’intégration, il m’a aussi accompagné sur le projet Astro et les premières pages, comme décrit dans les premières étapes du journal.

**Ce que j’ai choisi, corrigé ou rejeté**

Je n’ai pas gardé les présentations des projets qui me semblaient trop génériques ou trop éloignées de mon univers. Une version organisée comme un scénario était trop longue et peu claire. J’ai préféré une fiche de film avec un pitch, un making-of, une fiche technique, le résultat et une scène coupée.

Après les retours des professeurs, j’ai repris la navigation, mis mon nom davantage en avant et revu les textes trop petits. Le besoin d’un vrai menu a été le retour qui a le plus changé mon approche : le concept visuel devait aussi permettre de se repérer facilement.

## ChatGPT — comprendre et résoudre des problèmes de code

**Quand et pour quoi faire**

En dehors de Codex, j’ai utilisé ChatGPT pour obtenir des explications et résoudre des problèmes de code. Les interactions JavaScript qui ne fonctionnaient pas comme prévu étaient les blocages qui me gênaient le plus. L’aide me servait à comprendre une correction et à pouvoir continuer sur le projet.

**Comment je vérifiais les réponses**

Je regardais le résultat dans le navigateur pour voir si le comportement correspondait à ce que je voulais. Si une explication ou une correction n’était pas claire, je demandais des précisions. Je ne peux pas attribuer précisément chaque ancienne ligne de code à un échange ChatGPT : les usages que je déclare ici correspondent à mon accompagnement sur les blocages, sans lui attribuer artificiellement des fichiers entiers.

## Codex — intégrer, améliorer et vérifier le site

**Quand et pour quoi faire**

J’ai utilisé Codex pendant l’intégration et les nombreuses reprises du site en novembre. L’aide a porté sur les composants Astro, les études de cas, le menu, le carrousel, les animations, la visionneuse, les versions mobile et anglaise, les métadonnées et le formulaire. Codex a aussi aidé à préparer la publication, réaliser des contrôles et mettre à jour les documents.

Les principales parties concernées sont les composants HeroAccueil, CarrouselProjets, Entete, Bandeau et Visionneuse, les données dans src/data/projets.js, le gabarit des études dans src/pages/projets/[slug].astro, la traduction dans src/i18n et le middleware, ainsi que la route /api/contact et src/lib/contact.js. Cette aide comprenait de la production de code et des corrections, pas seulement des conseils.

**Ce que j’ai fait reprendre**

- J’ai refusé des présentations de projets trop génériques ou peu personnelles.
- J’ai signalé que certaines premières améliorations ne faisaient pas assez ressentir le cinéma.
- J’ai demandé de revoir la double navigation, puis de revenir à une version plus proche de ma maquette, en conservant le menu et la progression.
- J’ai fait reprendre plusieurs fois l’accueil, mon nom et les affiches, jusqu’à obtenir quelque chose qui me ressemble davantage.
- J’ai demandé un carrousel pour les projets, puis son retour sous ma présentation personnelle.
- J’ai précisé que les points lumineux devaient rester fixes et que seuls les textes des bandeaux devaient défiler.
- J’ai demandé de retirer les affiches de films du storyboard et d’y remettre mes propres contenus.
- J’ai fourni les dates, les rôles dans les projets et mes remarques personnelles sur ce que je pourrais améliorer.
- J’ai choisi Gmail SMTP plutôt que Netlify Forms et saisi moi-même les identifiants en privé. J’ai ensuite confirmé la réception d’un message.

**Figma et documents de rendu**

J’ai demandé à Codex de rapprocher la maquette du site final, en gardant une sauvegarde. Les anciennes pages desktop et mobile sont archivées. Author n’étant pas disponible pour l’édition par le connecteur, j’ai accepté Inter provisoirement dans les copies actualisées et prévu de remettre Author moi-même. Le site garde Author.

Codex a proposé une première version du journal et de cette déclaration, mais je les trouvais trop impersonnels. J’ai demandé de les reprendre à partir de mes réponses à des questions sur mon travail, mes difficultés et mes décisions. La rédaction de ces deux fichiers est donc elle aussi assistée par l’IA ; mon expérience et mes réponses en sont la base.

## IA dans les projets présentés

Ces usages concernent les créations montrées dans le portfolio, et pas uniquement le développement du site.

- **La Cimade :** j’ai utilisé ChatGPT pour générer les photos des bannières. J’ai dirigé le type d’image, le nombre de personnes et leur disposition, puis sélectionné les propositions. Avec le recul, je voudrais aussi pousser des affiches avec une identité moins réalisée avec l’IA et plus personnelle.
- **Smooth :** les fichiers SVG des lunettes étaient fournis par l’enseignante, puis retravaillés avec ChatGPT. Je ne présente pas ces visuels comme des modèles 3D que j’aurais créés moi-même. Les crédits du portfolio précisent cette origine.

## Ce que je comprends et ce que je dois encore préparer

Aujourd’hui, les données des projets et leur affichage dans les composants Astro sont les parties que je me sens le plus capable d’expliquer et de modifier seul. Je dois encore préparer davantage le formulaire côté serveur, Gmail SMTP et la publication pour la soutenance. Je ne considère pas qu’un code qui fonctionne prouve automatiquement que j’en maîtrise toutes les parties.

Les tests automatisés et contrôles réalisés avec Codex sont détaillés dans QUALITE.md. Ils ne remplacent ni mes essais dans le navigateur ni ma compréhension du code. Certains essais restent ouverts, notamment sur téléphone physique et avec un lecteur d’écran.

Ce projet m’a surtout appris à mieux exprimer mes attentes et à juger les propositions de l’IA. J’ai travaillé régulièrement pour obtenir un résultat personnel, avec beaucoup de retours sur les détails visuels. Sur un prochain projet, je cadrerais mieux mes demandes dès le départ pour limiter les allers-retours.
