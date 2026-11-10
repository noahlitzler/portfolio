# Contrôles qualité du portfolio

Contrôle local du 7 novembre 2026. Le site n’a pas été publié. Cette grille distingue les vérifications faites et les étapes restant à confirmer.

## Accessibilité

| Critère propre au site | Méthode | Résultat / correction |
| --- | --- | --- |
| Un titre principal et une langue explicite | Analyse du HTML compilé | Un h1 et lang=fr sur les 10 pages de contenu contrôlées |
| Images des études de cas | Vérification des références locales et attributs alt ; inspection navigateur | 28 balises image avec alternative, décorations avec alt vide ; aucun fichier référencé absent |
| Menu Chapitres au clavier | Ouverture navigateur, observation du focus, Échap | Dialogue natif, focus initial sur Retour au film, fermeture et retour au bouton déclencheur vérifiés |
| Navigation sur petit écran | Navigateur à 390 px et grand écran à 1728 px | Les sept pages principales ne débordent pas horizontalement ; contrôle supplémentaire à 320 px et correction des affiches de l’accueil |
| Champs de contact | Inspection HTML | Labels, nom et email obligatoires, type email, fieldset/legend pour les radios, autocomplete ; validation native à contrôler avec le lecteur d’écran de Noah |
| Mouvements | Relecture CSS | Bandeau désactivé par prefers-reduced-motion, transitions réduites ; pas de bibliothèque d’animation ajoutée |
| Contrastes et lecteur d’écran | À compléter | Relevé systématique des contrastes et test NVDA/VoiceOver non réalisés ; aucune certification RGAA revendiquée |

## Sobriété et performance

- Images de projets servies en WebP avec srcset et sizes via Astro Image ; exports sources conservés localement.
- Polices auto-hébergées ; sous-ensembles latin existants conservés. Pas de Google Fonts, de widget social ni d’iframe du site tiers.
- Retrait des exports Figma publics inutilisés ; vignettes du menu réduites à 400 × 225 px.
- JavaScript limité au menu natif ; les données de projets sont transformées en HTML au build.
- Le poids total de dist inclut toutes les pages, le CV et plusieurs tailles d’images : il ne représente pas le transfert initial d’une visite. Mesure finale dans le rapport de vérification.
- Lighthouse/PageSpeed et mesures réseau sur le domaine final restent à faire après validation et déploiement. Aucun score inventé.

## Référencement

- Titres et descriptions propres aux pages, HTML français et contenu sémantique : vérifiés dans le build.
- Métadonnées Open Graph ajoutées ; pages Merci, 404 et mentions encore provisoires en noindex.
- robots.txt et sitemap.xml générés. PORTFOLIO_SITE doit contenir l’URL définitive du portfolio au build pour générer les URL absolues, canoniques et entrées du sitemap. Sans domaine, le sitemap reste volontairement vide.
- Ancienne route /projets/sull redirigée vers /projets/derriere-le-prompt.
- Vérification des destinations locales : 189 références href/src contrôlées sans absence sur le build initial de contrôle. Les liens de réseaux sociaux doivent encore être confirmés par Noah.

## Juridique et données

- Page de crédits et confidentialité reliée depuis le footer et le formulaire ; c’est un brouillon local, pas une déclaration de conformité complète.
- Les travaux pédagogiques et la refonte non officielle de La Cimade sont identifiés. Les photos IA de ses bannières sont déclarées.
- Les conditions de reproduction des affiches Miami Vice et Spider-Man, les licences typographiques et la titularité des médias doivent être validées avant publication.
- Le code ne contient ni publicité, ni mesure d’audience, ni stockage de suivi du visiteur. Les polices et médias sont locaux. Le comportement de l’hébergeur sera à vérifier sur le site publié.
- Formulaire statique préparé pour Netlify Forms : nom du formulaire, champ caché form-name, honeypot et route de remerciement présents. La détection du formulaire et les notifications doivent être activées chez l’hébergeur. Aucun envoi réel n’a été effectué.
- À renseigner avec Noah avant ouverture au public : hébergeur et coordonnées légales, identification de l’éditeur selon son statut, destinataires et conservation des messages, fondement du traitement et éventuels transferts.

Sources consultées : [configuration Netlify Forms](https://docs.netlify.com/manage/forms/setup/), [notifications Netlify](https://docs.netlify.com/manage/forms/notifications/), [information des personnes - CNIL](https://www.cnil.fr/fr/exemples-de-formulaire-de-collecte-de-donnees-caractere-personnel).

## Complément de contrôle final

La validation native a été exercée sans envoi : champs nom/email/message vides signalés comme obligatoires ; une adresse invalide produit typeMismatch=true. Le contrôle à 320 px a aussi révélé une contrainte de largeur des cartes de contact et du spécimen Montserrat : colonnes rétractables et taille minimale corrigées, puis nouvelle vérification navigateur.


## Expérience cinéma - contrôles du 8 novembre 2026

- Compilation Astro réussie après intégration. Galerie : affichage des croquis puis des variantes, changement par bouton, fermeture par Échap et restitution du focus observés.
- Comparateur : touches Home et End donnent respectivement 0 % et 100 % ; labels des deux identités corrigés.
- Ambiance sonore : état initial coupé, activation par bouton puis coupure observées. Son synthétisé localement, sans téléchargement externe ; appréciation subjective du volume à valider par Noah.
- Huit routes testées à 320 px après chargement des polices : accueil, projets, les trois études de cas, à propos, contact et merci. Largeur de contenu égale à la largeur disponible, sans débordement détecté ; aucune erreur console observée sur le parcours.
- Le navigateur de contrôle a prefers-reduced-motion actif : les révélations sont visibles et le générique est statique et entièrement lisible ; le bouton de lecture animé est masqué. Le rendu animé complet et la qualité subjective des raccords restent à valider dans un navigateur sans cette préférence.
- L’ouverture ne bloque pas les interactions et sa répétition est limitée par sessionStorage, avec repli si le stockage est indisponible. Le contenu reste accessible sans JS ; le générique est alors statique et les liens d’agrandissement ouvrent les images.
- Le lecteur indique un repère calculé selon la position de lecture, et non une mesure du temps passé. Les scènes sont de vrais liens internes.
- Les transitions natives restent une amélioration progressive ; pas de remplacement du routeur ni de modification du traitement Netlify du formulaire. Aucun envoi de formulaire réalisé.
- Le logo officiel du comparateur est attribué à La Cimade ; les vérifications de droits et mentions avant publication demeurent à valider.


## Contrôle de la refonte éditoriale - version actuelle

Cette section remplace les descriptions antérieures du lecteur inférieur, maintenant retiré.

- Build Astro : réussi, 12 sorties de pages dont deux redirections, plus robots.txt et sitemap.
- Analyse du HTML : 10 pages de contenu, 207 références locales href/src contrôlées sans fichier absent, 39 balises image dotées d’alternatives. L’image vide du dialogue de galerie est un emplacement initial, rempli à l’ouverture ; elle n’est pas un média manquant visible.
- Huit routes contrôlées à 320 px après chargement des polices : accueil, projets, trois études de cas, à propos, contact et merci. Largeur du contenu égale à la largeur disponible (305 px avec scrollbar), sans dépassement.
- Contrôle visuel ordinateur et mobile : correction des marges de titres, des chevauchements et de la proportion des affiches.
- Navigation : un seul menu principal dans un dialogue ; Échap et restitution du focus vérifiés. Les coordonnées et réglages restent dans le menu et le footer. Aucun second menu fixe.
- Bande-annonce : passage à La Cimade par le bouton suivant observé ; Échap restitue le focus au bouton d’ouverture.
- Galerie : image suivante et retour du focus vérifiés ; comparaison à 100 % au clavier observée. Aucune erreur console observée pendant ce parcours.
- Préférence système de mouvement réduit active dans le navigateur de contrôle : les contenus restent visibles. La qualité subjective du mouvement complet reste à apprécier dans le navigateur habituel de Noah.
- Poids du build : 6 391 766 octets, comprenant toutes les routes, le CV et les différentes tailles d’images. Ce total n’est pas le poids initial d’une visite.
- Les étapes externes restent en attente : relecture de Noah, domaine et réception réelle du formulaire, compléments juridiques et droits des références. Aucun message envoyé et aucune publication.


## Version actuelle - 10 novembre 2026

Retour à la base 3509daa proche de la maquette. Les constats concernant la refonte éditoriale décrivent une version désormais archivée. Navigation conservée par un seul menu Chapitres ; progression calculée à partir du défilement, recalculée lors du chargement, du redimensionnement et des changements de hauteur du document. Les fonctionnalités supplémentaires de cinéma et leurs réglages ont été retirés. Les vérifications externes avant publication restent à effectuer.

Contrôles du retour : compilation réussie ; 169 références locales sans fichier absent ; menu ouvert puis fermé avec Échap et retour du focus au bouton ; progression observée de 0 à environ 100 % au défilement jusqu’en bas.


Ajout SULL du 10 novembre : build réussi, logo chargé dans l’aperçu, lien vérifié vers https://sull.clementbertrandportfolio.store/ ; 171 références locales contrôlées sans fichier absent. SULL est un travail complémentaire ; les trois études de cas restent la sélection principale.

