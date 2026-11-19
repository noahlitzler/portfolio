# Qualité du portfolio - bilan au 17 novembre 2026

Périmètre : portfolio Astro FR / EN, cinq études de cas, menu Chapitres, carrousel automatique, visionneuse et formulaire Gmail SMTP. Domaine : https://noahlitzler.fr/. Ce bilan distingue les contrôles effectués, les confirmations de Noah et les essais restant à faire. Les mesures ne valent que pour la version et la date indiquées.

Les anciens relevés détaillés ont été sauvegardés hors du dépôt lors du nettoyage du 18 novembre. Les résultats utiles sont synthétisés dans ce fichier. Aucun nouvel audit navigateur complet, build ni envoi de message n’a été réalisé pendant la finalisation documentaire.

## 1. Accessibilité et ergonomie

| Critère retenu pour ce site | Méthode et preuve datée | Résultat / correction / limite |
| --- | --- | --- |
| Menu utilisable au clavier | Essai local du 17 novembre : ouverture, Échap, lecture du focus | Fermeture et retour au bouton Chapitres observés. |
| Carrousel de cinq projets | Essais navigateur du 12 novembre : repères, passage du dernier au premier, flèche clavier et annonce EN ; suivant vers La Cimade le 17 | Commandes fonctionnelles sur ces parcours. Reprise isolée après sortie du focus à recontrôler. |
| Agrandissement des visuels | Essai local du 17 : croquis La Cimade, rotation, Échap, retour du focus | Orientation paysage lisible et focus rendu. Navigation de galerie et taille réelle exercées le 12. |
| Responsive | Viewports CSS de 320, 768 et 1280 px le 12 ; accueil et cinq études à 320 px le 17 | Débordement du formulaire EN puis marges des affiches corrigés. Arrondis d’environ 1 px encore observés sur certaines études. Pas de test tactile sur téléphone physique. |
| Noms accessibles et contrastes | Lighthouse accueil public du 17 avant correction : accessibilité automatique 96 | Contraste du billet VS Code et noms accessibles de liens/repères corrigés ensuite. Nouveau score non mesuré ; audit complet des contrastes non réalisé. |
| Structure et images | Analyse du build du 17 : 25 sorties, 130 images avec alt, un h1 par page de contenu | Aucune référence locale absente. La présence d’alt ne garantit pas sa pertinence ; relecture humaine à terminer. |
| FR / EN | Sélecteur conservant l’étude Smooth exercé le 17 ; essais bilingues le 12 | Langue, liens alternatifs et commandes traduits. Relecture personnelle des traductions encore nécessaire. |
| Sans JavaScript | Relecture HTML/CSS : liens de projets et liens directs vers les images présents | Replis prévus ; essai navigateur avec JavaScript désactivé non effectué. |
| Zoom et lecteur d’écran | Aucun essai complet attesté | À exercer : zoom 200 %, lecture des titres, menu, carrousel et formulaire avec un lecteur d’écran. |
| Animations automatiques | Relevés du 12 : texte défilant 55 s, points fixes ; carrousel automatique | Pas de commande d’arrêt. Noah maintient les effets même avec la préférence système de réduction des mouvements. Limite d’accessibilité assumée ; aucune conformité WCAG/RGAA complète revendiquée. |

## 2. Sobriété et performance

| Critère | Méthode / résultat | Décision et suite |
| --- | --- | --- |
| Médias et polices | Images de projets traitées par Astro Image ; portrait WebP ; médias et polices locaux | Limiter les dépendances réseau externes et utiliser des tailles adaptées. Contrôler les ressources réellement transférées après déploiement. |
| Coût des interactions | Relecture des dépendances et composants | Pas de bibliothèque de carrousel ni d’animation ; CSS et scripts natifs. Des effets continus restent présents et peuvent coûter du calcul. |
| Performance de l’accueil public | Lighthouse mobile, une exécution le 17 avant dernières corrections : performance 64, LCP 2,8 s, CLS 0, transfert 614 KiB | Mesure synthétique variable. Le score ne décrit pas un nouveau déploiement ; réévaluer et examiner les causes avant d’annoncer une amélioration. |
| Bonnes pratiques automatiques | Même rapport : 100 | Indicateur limité au parcours automatisé, pas une validation générale du site. |
| Poids de compilation | Ancien relevé du 13 : 9 762 653 octets client, 583 656 serveur, hors node_modules | Concerne la piste VPS et toutes les pages/tailles. Ne pas confondre avec le transfert initial Netlify. |

Le rapport Lighthouse et les captures de session sont conservés dans le dossier outputs local de travail. Ils ne sont pas tous inclus dans le dépôt remis ; les chiffres utiles sont retranscrits ici.

## 3. Référencement et publication

| Critère | Vérification | État |
| --- | --- | --- |
| Domaine et hébergement | Configuration Astro/Netlify ; HTTP du 17 sur accueil, contact et mentions | Réponses 200 sur noahlitzler.fr. Infomaniak fournit le domaine, Netlify héberge le site. |
| HTTPS et www | Contrôles publics du 16 | HTTPS et redirection vers le domaine sans www vérifiés à cette date. Refaire après la dernière publication. |
| Métadonnées | Analyse du build et Base.astro | Titres, descriptions, URL canoniques, Open Graph, langue et liens alternatifs présents. |
| Robots et sitemap | Lecture du build ; contrôle public du 17 lors de l’audit précédent | Fichiers accessibles ; sitemap de 18 URL de contenu, neuf par langue. Leur présence ne prouve pas une indexation par Google. |
| Liens, CV et 404 | Audit public du 17 : 23 URL FR/EN, CV, robots et sitemap ; vraie 404 vérifiée auparavant | Ressources contrôlées accessibles. Refaire un sondage après le dernier push. |
| Dépôt public | API GitHub consultée le 17 : private=false, branche main | Code consultable et historique réparti depuis octobre. Les changements documentaires actuels ne sont pas encore poussés. |

## 4. Crédits, données et conformité juridique

Cette partie consigne les informations et vérifications du projet ; elle ne constitue pas une certification juridique.

| Critère | Vérification / décision | État et limite |
| --- | --- | --- |
| Informations du site | Mentions légales FR/EN ; page publique accessible le 17 | Éditeur, contact, hébergeur et crédits renseignés. Informations à maintenir si l’hébergement change. |
| Origine des travaux | Études et crédits relus avec les réponses de Noah | Cinq projets scolaires, Cimade non officielle, rôles en binôme explicités. |
| Ressources tierces et IA | Confirmation de Noah le 16 ; mentions et IA.md | SVG Smooth fournis par l’enseignante puis retravaillés avec ChatGPT ; photos des bannières Cimade générées avec ChatGPT. Confirmation de droits conservée, sans prétendre détenir toutes les copies de licences. |
| Références et storyboard | Sources et rendu contrôlés le 12 | Affiches de films retirées du storyboard ; portrait et travaux personnels utilisés. Les captures de projets restent créditées. |
| Formulaire et réception | Confirmation de réception par Noah le 16 après configuration Gmail privée | Contact fonctionnel selon cet essai réel. Aucun nouvel email envoyé pendant cet audit documentaire. |
| Traitement des messages | Mentions et décision de Noah du 17 | Nom, email, type et message pour répondre ; traitement technique par Netlify et Google. Conservation maximale de 12 mois après dernier échange, sauf relation professionnelle en cours ou obligation de conservation ; suppression manuelle par Noah. |
| Protection technique du contact | Relecture de src/lib/contact.js et tests automatisés antérieurs | Validation de l’origine/des champs, taille limitée, champ leurre, limitation des tentatives et SMTP sécurisé. Limitation en mémoire uniquement, réinitialisable et non partagée entre instances. |
| Identifiants | Configuration prévue par variables serveur, fichiers privés ignorés ; analyse du build du 13 | Aucun secret recherché ni recopié pendant cette finalisation. Les tests automatisés remplacent l’envoi SMTP et ne prouvent pas à eux seuls la réception réelle. |

## Vérifications restant à réaliser

- [ ] Relecture personnelle FR / EN, crédits et textes alternatifs.
- [ ] Essai sur téléphone physique, clavier et zoom 200 %.
- [ ] Essai lecteur d’écran et sans JavaScript.
- [ ] Recontrôle ciblé des contrastes et des débordements résiduels.
- [ ] Après validation du dernier push : build publié, parcours FR / EN, 404, CV et contact réel.
- [ ] Nouvelle mesure Lighthouse sur la version finale et transcription des résultats.

Ne cocher ces lignes qu’après exécution. Les neuf tests et le build Netlify réussis du 17 sont des contrôles antérieurs consignés ; cette mise à jour de documents ne les relance pas et ne modifie pas le produit.

## Contrôle après nettoyage du dépôt - 18 novembre 2026

Retrait de 17 fichiers obsolètes (anciens fichiers VPS, documents redondants, exports sans référence et verrouillage npm en double) après sauvegarde externe. Configuration simplifiée pour Netlify ; adaptateur Node et commande de démarrage VPS retirés. Les tests, les notices utiles et les livrables demandés sont conservés.

- Neuf tests automatisés réussis ; aucun email réel envoyé par ces tests.
- Compilation Netlify réussie après retrait de la dépendance VPS.
- Analyse de 25 pages HTML et 659 références locales : aucune ressource manquante.
- Liens locaux des documents restants vérifiés sans destination absente.
- Aucun push ni changement du serveur ou du domaine pendant ce nettoyage.

## Vérification avant publication finale - 18 novembre 2026

- Neuf tests automatisés réussis et compilation Netlify terminée sans erreur.
- Vingt-cinq sorties HTML contrôlées, dont la redirection /sull ; 659 références locales vérifiées sans ressource absente.
- Sur les pages de contenu : un h1, une langue FR/EN cohérente, un titre, une description, une URL canonique et le favicon personnalisé présents.
- Livrables IA.md, JOURNAL.md, QUALITE.md et README.md présents ; verrouillage Bun et configuration Netlify conservés.
- Dernière modification de Base.astro : préchargement de la texture commune déjà utilisée par les pages.
- Ces contrôles ne constituent pas un nouvel essai tactile, lecteur d’écran ou visuel complet, ni un nouvel envoi réel du formulaire. Les limites précédentes restent applicables. La version publique sera contrôlée après le push.

## Correction visuelle du titre et du favicon - 18 novembre 2026

Le rognage du h de Noah a été reproduit dans Chrome : la boîte du texte en dégradé manquait de marge horizontale. Ajout de marges de sécurité au texte et contrôle visuel après chargement des polices à 1280 et 375 px, sans débordement horizontal. Favicon SVG versionné pour renouveler le cache ; ajout d’un ICO personnalisé de secours. Les neuf tests automatisés passent après ces changements.
