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
