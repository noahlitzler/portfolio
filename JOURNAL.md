# Journal de bord - Portfolio S3

Une entrée par semaine : ce que j'ai fait, ce qui a coincé, ce que j'ai décidé.

## Semaine 1 - 7 au 11 septembre - Positionnement

* Fait : note de positionnement (1 page). Cible : agences créatives, studios de design, agences digitales et startups, pour un poste de directeur artistique ou UX/UI designer.
* Message en 30 secondes : je transforme une idée en univers visuel et en expérience numérique cohérente.
* Ce qui me distingue : le portfolio est lui-même une création, avec une identité forte (culture graphique, cinéma, numérique, design éditorial).
* Décidé : 3 études de cas. Vivez l'essentiel (affiches), Sull (UX/UI, en binôme avec Clément Bertrand), La Cimade (logo).
* Coincé : Etablir un plan d'action cohérent au vu de temps disponible et des besoins de ma maquette pour avoir le rendu le plus personnel en codant.

## Semaine 2 - 14 au 18 septembre - Recherche graphique

* Fait : moodboard final, présenté dans une télé vintage. Concept : "mon portfolio est un film".
* Fait : deux pistes écartées, sous forme d'anti-moodboards : une trop cyberpunk, une trop minimaliste.
* Pourquoi écartées : Car elle ne me correspondait plus trop, c'était du vu et revu, le côté minimaliste était trop simple et fade tandis que le côté cyberpunk me faisant partir dans tout les sens.
* Décidé : palette (ébène, crème, un accent par projet : bleu, vert acide, orange ; rose pour les annotations, jaune pour les sous-titres) et typos (Author, Oswald, Caveat).

## Semaine 3 - 21 au 25 septembre - Maquette Figma

* Fait : écrans desktop (1728 px) et mobile (440 px) : accueil, projets, 3 fiches projets, à propos, contact.
* Coincé : les pages projets faisaient trop "IA" et "cheap" à côté du reste. Version "scénario" testée, trop longue et peu claire.
* Décidé : format "fiche film" pour les projets (pitch, making-of, fiche technique, résultat, scène coupée).
* Fait : refonte de l'affiche Cimade, logo moins déformé.

## Semaine 4 - 28 septembre au 2 octobre - Vérifications et soutenance

* Fait : vérification du prototype (liens, textes qui débordent, mobile). Plus aucune bordure arrondie, tirets courts partout.
* Fait : diapo de soutenance, technologies prévues (Astro, CSS natif, JS, GitHub + hébergement), niveau technique visé : 2.
* 1er octobre : soutenance maquette.

## Semaine 5 - 5 au 9 octobre - Retours et démarrage

* Retours des profs :

  * éviter "Portfolio" en titre d'accueil ;
  * il manque un menu ;
  * des textes inutiles ("inspiré de Vice City") ;
  * des textes trop petits.
* Corrigé dans la maquette :

  * mon nom en titre, avec une tagline et "en recherche de stage" ;
  * menu "chapitres" façon DVD, avec un timecode et une barre de progression ;
  * références Miami Vice / Spider-Verse retirées de l'accueil ;
  * textes agrandis.
* Fait : repo GitHub, init Astro (template vide), variables CSS, polices auto-hébergées.
* Décidé : Bun à la place de npm, parce que il est plus rapide, plus léger et intègre nativement un gestionnaire de paquets.
* Coincé : projet Astro créé dans un sous-dossier du repo, avec deux dépôts git imbriqués. Réglé en remontant le projet à la racine.

## Semaine 6 - 12 au 16 octobre - Pause

* Pas d'avancée sur le portfolio : priorité aux autres projets (SAÉ dataviz "Derrière le prompt", TP configurateur de baskets, R303).
* Décidé : reprendre la semaine suivante par la mise en ligne, pour travailler ensuite directement sur la version publiée.

## Semaine 7 - 19 au 23 octobre - Reprise

* Retard de 2 semaines sur le calendrier indicatif (intégration prévue d'octobre à mi-novembre).
* Décidé : mise en ligne d'abord (domaine + hébergement), puis menu chapitres, puis contenus des 3 projets.


## Semaine 8 - 26 au 30 octobre - Intégration

* Fait : header (chapitres, timecode fixe par page, barre de progression, bouton CHAPITRES), footer précédent / suivant, accueil complet (hero en demi-teinte, bandeau défilant, présentation avec portrait en WebP, quatre scènes, séances à l'affiche), page Contact avec formulaire (Netlify Forms) et page de remerciement.
* Fait : QUALITE.md créé, avec les 4 parties (accessibilité, sobriété, SEO, juridique).
* Mesuré : poids du build 749 Ko avant, 312 Ko après passage des polices en sous-ensemble latin (51 fichiers contre 19). Portrait : 680 Ko en PNG, 96 à 295 Ko en WebP selon la largeur.
* Coincé : un bloc de commandes lancé deux fois a dupliqué des données dans index.astro (erreur "parcours déjà déclaré"). Réglé avec une commande de réparation, vérifiée par le build (6 titres h2, 6 billets d'outils). Lighthouse a échoué une première fois à cause d'un argument PowerShell mal découpé, corrigé en mettant les arguments entre guillemets.
* Décidé : prendre les 7 écrans desktop exportés de Figma comme référence unique du code.
* Reste à faire : pages Projets et séances, À propos, mentions légales, SEO, déploiement final.

## 7 novembre 2026 - séance d’intégration assistée par Codex

- Sauvegarde ZIP de l’état de départ et commit local des modifications déjà présentes.
- Conservation d’Astro, du CSS natif, des variables et des polices existantes.
- Récupération des visuels Figma et optimisation WebP par Astro.
- Intégration du storyboard À propos et du menu des chapitres, avec présentation mobile spécifique.
- Présentation de trois projets : Vivez l’essentiel, La Cimade et Derrière le prompt, en troisième position.
- Nouvelle affiche typographique pour Derrière le prompt et lien vers le projet en ligne.
- Améliorations : navigation clavier du menu, page 404, métadonnées de partage, génération conditionnelle des URL canoniques et du sitemap.
- Contrôles locaux consignés dans QUALITE.md. Aucun push, aucune publication.
- Limites : domaine du portfolio non fourni ; réception Netlify non testée ; informations légales et répartition du travail en binôme à confirmer.
- À faire par Noah : relire et comprendre le code, valider les textes et visuels, puis autoriser le push et la publication.

### Présence professionnelle - proposition à valider

LinkedIn sert à présenter mon profil, mon stage recherché et mes études de cas aux agences et studios.
Instagram est adapté à mon parcours création numérique : il permet de montrer affiches, identités et recherches visuelles.
Les deux profils sont liés depuis le contact et le menu mobile.
Je dois harmoniser leur bio, leur portrait et leurs liens avec le portfolio, puis publier des extraits des trois projets.
Ces mises à jour n’ont pas été effectuées par Codex ; cette justification est une proposition à relire, pas une attestation d’action.


## 8 novembre 2026 - expérience cinéma

- Sauvegardes des sources ZIP et de l’historique Git bundle avant les modifications.
- Ouverture courte sur l’accueil, jouée une fois par session ; la navigation reste disponible.
- Raccords entre affiches et études de cas avec les transitions natives ; navigation classique en secours.
- Lecteur fixe : liens de sections, position actuelle, barre et repère de lecture estimé, distinct d’un temps réel passé sur le site.
- Galerie plein écran au clavier et comparateur de logo avec curseur natif. Les notes de montage réemploient les limites déjà décrites dans les projets.
- Générique avec lecture/pause et contact séparé ; confirmation présentée comme un billet.
- Son de projecteur synthétisé, volontaire, désactivé au changement de page et quand l’onglet est masqué.
- Contrôles de mouvement et prise en compte du réglage système ; vérification responsive à 320 px.
- Commits locaux ; aucun push ni déploiement. package-lock.json apparu après l’installation npm de Noah est conservé, sans être ajouté aux commits de cette intervention.


### 8 novembre - refonte après validation de la direction artistique

- Décision : une seule navigation globale, par Chapitres ; suppression de la barre inférieure signalée comme redondante.
- Accueil : composition avec nom monumental et détail d’illustration, puis programmation en trois grands plans.
- Projets : illustration claire pour Vivez l’essentiel, rouge pour La Cimade, bleu nuit pour Derrière le prompt ; sections des études de cas structurées en actes.
- À propos : storyboard conservé et parcours détaillé déplacé depuis l’accueil pour alléger l’entrée.
- Galerie, comparaison et bande-annonce conservées ; réglages du son et des effets rangés dans le menu.
- Contrôles : compilation réussie ; références locales présentes ; huit routes sans dépassement horizontal à 320 px ; interactions principales exercées sans envoi de formulaire.
- Sauvegardes avant modification et commits locaux. Aucun push ni déploiement.


## 10 novembre 2026 - retour à la maquette

Décision de Noah : reprendre la version plus proche de la maquette, conserver le menu actuel et la barre de progression au scroll. La version éditoriale est sauvegardée et son historique conservé. Les trois projets, dont Derrière le prompt en troisième position, et leurs contenus de la version maquette restent présents.


### 10 novembre - quatrième projet

SULL ajouté comme travail complémentaire, avec accès au site fourni. Les trois études de cas détaillées restent la sélection principale conformément au cahier des charges. Le cinquième projet sera renseigné quand Noah l’aura fourni.


### 10 novembre — une programmation de cinq études de cas

Nouvelle consigne de Noah : retirer la limite « trois projets », réunir tous les travaux et les détailler de la même manière. Cette consigne remplace le regroupement précédent. Smooth (R303, Figma) rejoint SULL et les trois premiers projets. Même ordre sur l’accueil et la programmation, même structure de détail, navigation suivante circulaire sur cinq projets. Sauvegarde préalable : portfolio-avant-cinq-projets.zip et .bundle. Publication réservée à la validation de Noah.


## 12 novembre 2026 — ajustements après relecture du sujet

- Clarification de la consigne : l’enseignant a indiqué en cours que davantage de projets étaient bienvenus ; les cinq études détaillées sont conservées.
- Positionnement précisé : design graphique et direction artistique. Stage du 29 mars au 4 juin 2027, Haut-Rhin, Bâle, Porrentruy et alentours.
- Cadre scolaire, dates et contributions renseignés à partir des réponses de Noah.
- Recul personnel précisé : ombres pour les affiches, affiches Cimade plus personnelles, identité Smooth davantage rétro et Michael Jackson ; satisfaction exprimée pour SULL et Derrière le prompt.
- Retours visuels : accueil jugé trop fade, souhait d’un carrousel, bandeaux entièrement défilants, storyboard trop volumineux et affiches de films à retirer.
- Réalisation assistée : composition d’ouverture avec créations, lumière et mouvement ; carrousel natif de cinq affiches avec contrôles ; texte et points animés ; storyboard resserré autour du portrait et des créations.
- Documents complémentaires : persona issu du dossier SULL ; captures réelles des graphiques de Derrière le prompt ; liens vers le dossier, le notebook et la réutilisation data.gouv.fr.
- Crédits Smooth corrigés : SVG de l’enseignante puis adaptation avec ChatGPT.
- Domaine confirmé : noahlitzler.fr, nom de domaine uniquement chez Infomaniak ; hébergement à configurer, aucune mise en ligne.
- Sauvegarde ZIP et bundle, commits locaux, contrôles dans QUALITE.md. Réseaux professionnels et préparation orale restent à poursuivre personnellement.


### 12 novembre — affiner les mouvements après essai

Noah apprécie la nouvelle composition et demande des points fixes, seuls les textes des bandes devant défiler. Il souhaite des animations automatiques sans bouton d’activation, et des effets plus travaillés sur le nom et les affiches. Décisions : supprimer les commandes, remplacer le décalage bleu/rose par une apparition et un balayage lumineux, ajouter relief et reflets aux créations. Le travail a repris après une interruption du contrôle automatique liée à une limite d’utilisation. Sauvegarde ZIP et bundle, compilation et contrôle ordinateur, commits locaux. Essai mobile interrompu par le navigateur ; contrôle à reprendre. Aucun push ni déploiement.

12 novembre — finition de l’accueil : encart jaune « Une idée. Tout un univers. » retiré à la demande de Noah pour dégager les affiches.


### 12 novembre — finitions fonctionnelles et version bilingue

Noah approuve les améliorations proposées et demande le choix français / anglais. Le carrousel est déplacé directement après l’accueil. Les images des études s’agrandissent, les crédits se lisent en grille, les blancs sont resserrés et les repères mobiles gagnent en lisibilité. Dates et zone du stage apparaissent tôt sur mobile. Le nom conserve son effet avec un contour plus présent ; les affiches partagent une durée de 12 s.

Le sélecteur FR / EN conserve la page en cours. Les cinq études, textes de navigation, légendes et métadonnées possèdent une version anglaise statique. Les travaux et le CV restent dans leur langue d’origine. Aucun moteur de traduction externe. Configuration Netlify et gestion d’envoi préparées ; le formulaire reste fermé tant que le service n’est pas activé, avec email direct disponible. Publication et test de réception sont réservés à la validation de Noah.

Contrôles : quatre tests de traduction, compilation de 25 sorties, 24 pages et 636 références locales sans erreur ; essais navigateur mobile/tablette/ordinateur, correction du formulaire anglais à 320 px. Sauvegarde portfolio-avant-finitions-et-langues-12nov.zip / .bundle ; commits locaux, aucun push. Les contrôles détaillés et limites sont consignés dans QUALITE.md.

12 novembre — croquis La Cimade : présentation paysage et orientation de lecture corrigées uniquement pour cette planche, dans la page et la visionneuse. Source originale conservée, sauvegarde des composants, build réussi et contrôle ordinateur/mobile à 320 px, sans dépassement. Commit local, aucun push.
