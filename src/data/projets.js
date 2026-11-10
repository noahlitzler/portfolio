export const projets = [
  {
    slug: "vivez-l-essentiel",
    numero: "01",
    titre: "Vivez l’essentiel",
    categorie: "Production graphique",
    mots: "Affiche - Série - Typographie",
    seance: "Séance 01 - Vivez l’essentiel",
    presente: "Noah Litzler présente",
    accent: "var(--bleu)",
    timecode: "00:04:21:12",
    progression: 41,
    statut: "Actuellement à l’affiche",
    resume: "Trois affiches pour donner envie de découvrir Montbéliard à travers trois monuments : le château, l’Hôtel Peugeot et le temple.",
    suite: "Séance 01 - Production graphique. Trois affiches pour Pays de Montbéliard Tourisme.",
    legende: "Campagne d’affichage pour Pays de Montbéliard Tourisme - Conception et illustration Noah Litzler - BUT MMI, IUT Nord Franche-Comté",
    credits: [
      ["Un projet de", "Pays de Montbéliard Tourisme"],
      ["Illustration", "Noah Litzler"],
      ["Mise en page", "Noah Litzler"],
      ["Typographie", "Oswald"],
      ["Logiciel", "Affinity"],
      ["Format", "3 affiches 40 × 60 cm"],
      ["Année", "2026"],
    ],
    affiche: { f: "vivez-affiche-1.png", alt: "Affiche « Au cœur de l’histoire » : le château des ducs de Wurtemberg illustré en aplats" },
    visuels: [
      { f: "vivez-affiche-1.png", alt: "Affiche « Au cœur de l’histoire » : le château des ducs de Wurtemberg" },
      { f: "vivez-affiche-2.png", alt: "Affiche « L’âme industrielle » : l’Hôtel Peugeot" },
      { f: "vivez-affiche-3.png", alt: "Affiche « Esprit de lumière » : le temple Saint-Martin" },
    ],
    pitch: {
      texte: "Trois monuments, trois ambiances, une seule campagne :",
      accroche: "« Vivez l’essentiel, au cœur de Montbéliard ».",
    },
    commande: "Pays de Montbéliard Tourisme voulait trois affiches pour faire découvrir la ville par trois monuments : le Château des Ducs de Wurtemberg, l’Hôtel Peugeot et le Temple Saint-Martin, réunis sous une même signature.",
    role: "Projet individuel. J’ai choisi les monuments, illustré les bâtiments en vectoriel, écrit les accroches, composé les affiches et rédigé la note d’intention.",
    makingOf: {
      titre: "Trois décisions, trois plans.",
      plans: [
        { timecode: "00:01:12:04", legende: "Trois monuments, trois récits : le patrimoine, l’industrie, la spiritualité.", image: { f: "vivez-plan-1.png", alt: "Les trois monuments illustrés côte à côte : le château, l’Hôtel Peugeot et le temple" } },
        { timecode: "00:02:12:04", legende: "Le style des affiches de voyage des années 50-60, en aplats et en contre-plongée.", image: { f: "vivez-plan-2.png", alt: "Détail d’une illustration en contre-plongée avec un lampadaire" } },
        { timecode: "00:03:12:04", legende: "Une même grille pour les trois. Seule la couleur change.", image: { f: "vivez-plan-3.png", alt: "La grille commune aux trois affiches : logos en haut et en bas, titre au centre" } },
      ],
    },
    fiche: {
      titre: "Une couleur par monument.",
      couleurs: [
        { nom: "Bleu pétrole", hex: "#4A8CA6" },
        { nom: "Terracotta", hex: "#A04D32" },
        { nom: "Vert kaki", hex: "#8A9A3A" },
        { nom: "Vert nuit", hex: "#2A3E30" },
        { nom: "Crème", hex: "#F3EDE0", clair: true },
      ],
      police: {
        nom: "Oswald",
        lignes: [["Bold", "le mot principal"], ["Regular", "le complément"], ["Light", "la signature"]],
        note: "Illustration vectorielle sur Affinity",
      },
    },
    resultat: {
      titre: "Trois affiches 40 × 60 cm, prêtes à imprimer.",
      images: [
        { f: "vivez-affiche-1.png", alt: "Affiche « Au cœur de l’histoire »" },
        { f: "vivez-affiche-2.png", alt: "Affiche « L’âme industrielle »" },
        { f: "vivez-affiche-3.png", alt: "Affiche « Esprit de lumière »" },
      ],
      legende: "Avec traits de coupe, et une note d’intention d’une page.",
    },
    coupee: {
      titre: "Ce que je referais autrement.",
      correctifs: [["Au coeur", "cœur"], ["L’ame", "l’âme"]],
      texte: "Soigner la typographie jusqu’au bout : écrire « CŒUR » et non « COEUR », utiliser l’apostrophe courbe. Et pousser la contre-plongée sur le temple, resté vu de face.",
    },
  },
  {
    slug: "la-cimade",
    numero: "02",
    titre: "La Cimade",
    categorie: "Branding",
    mots: "Logo - Charte graphique - Association",
    seance: "Séance 02 - Refonte de logo",
    presente: "Noah Litzler présente",
    accent: "var(--orange)",
    timecode: "00:05:36:09",
    progression: 52,
    statut: "Actuellement à l’affiche",
    resume: "La refonte du logo et de l’identité d’une association qui défend les droits des personnes migrantes et réfugiées.",
    suite: "Séance 02 - Branding. La refonte du logo et de l’identité de La Cimade.",
    legende: "Refonte du logo et de la charte graphique de La Cimade - Direction artistique et design graphique Noah Litzler - BUT MMI, IUT Nord Franche-Comté",
    credits: [
      ["Un projet de", "Noah Litzler"],
      ["Pour", "La Cimade"],
      ["Audit", "Noah Litzler"],
      ["Concept", "Noah Litzler"],
      ["Charte", "Noah Litzler"],
      ["Typographie", "Montserrat"],
      ["Outils", "Croquis papier et Figma"],
      ["Année", "2026"],
    ],
    affiche: { f: "cimade-affiche.png", alt: "Symbole de La Cimade sur fond rouge", type: "cimade" },
    visuels: [
      { f: "cimade-logo.svg", alt: "Logo final La Cimade" },
      { f: "cimade-banniere-1.png", alt: "Bannière de la nouvelle identité La Cimade" },
    ],
    pitch: {
      texte: "Donner un symbole fort à une association militante, sans trahir son slogan :",
      accroche: "« L’humanité passe par l’autre ».",
    },
    commande: "L’identité de La Cimade reposait sur la typographie : le nom en rouge, une ligne-chemin et le slogan. Lisible et militante, elle manquait d’un symbole fort et s’adaptait mal au numérique.",
    role: "Projet individuel. J’ai audité le logo existant, comparé Amnesty International, Médecins Sans Frontières et Emmaüs, défini deux axes et un anti-axe, dessiné le logo et rédigé la charte graphique.",
    makingOf: {
      titre: "Trois étapes, trois plans.",
      plans: [
        {
          timecode: "00:01:12:04",
          legende: "Deux axes, un anti-axe : j’ai retenu le lien humain, et écarté le branding commercial.",
          axes: [
            { titre: "Le lien humain", mots: ["Humanité", "Rencontre", "Accueil", "Passage", "Solidarité"], actif: true },
            { titre: "La voix engagée", mots: ["Droits", "Combat", "Justice", "Mobilisation", "Dignité"], actif: false },
          ],
        },
        { timecode: "00:02:12:04", legende: "Chercher à la main : points reliés, cercles, silhouettes. Le cercle s’impose.", image: { f: "cimade-croquis.png", alt: "Planche de croquis au crayon : variations du logo à base de cercles et de silhouettes" } },
        { timecode: "00:03:12:04", legende: "Du cercle au symbole : segments resserrés, extrémités arrondies, dégradé rouge.", image: { f: "cimade-logos.png", alt: "Variantes du logo La Cimade, du cercle de points jusqu’au symbole final" } },
      ],
    },
    fiche: {
      titre: "Rouge, noir, et un cercle.",
      couleurs: [
        { nom: "Rouge engagé", hex: "#D60000", sens: "l’engagement" },
        { nom: "Bordeaux", hex: "#7A0000", sens: "le dégradé" },
        { nom: "Noir", hex: "#000000", sens: "la visibilité, la lisibilité" },
        { nom: "Gris clair", hex: "#F2F2F2", sens: "les fonds", clair: true },
      ],
      police: {
        nom: "Montserrat",
        lignes: [["Bold", "les titres et le nom"], ["Regular", "les textes"]],
        note: "Croquis papier, puis vectorisation sur Figma.",
      },
    },
    resultat: {
      titre: "Une charte graphique complète.",
      images: [
        { f: "cimade-banniere-1.png", alt: "Bannière web « L’humanité passe par l’autre » avec deux femmes souriantes" },
        { f: "cimade-banniere-2.png", alt: "Bannière « Soutenir et accompagner les personnes migrantes et réfugiées »" },
      ],
      legende: "Logo et variantes, zone de protection, usages interdits, couleurs, typographies, univers graphique, publication Instagram et bannières web.",
      note: "Photos des bannières générées par IA (ChatGPT).",
    },
    coupee: {
      titre: "Ce que je referais autrement.",
      correctifs: [["Photos IA", "vraies photos de terrain"], ["Logo figé", "testé avec l’asso"]],
      texte: "Tester le logo auprès de l’association et de son public avant de le figer, et remplacer les visuels générés par IA par de vraies photos de terrain.",
    },
  },
  {
    slug: "derriere-le-prompt", numero: "03", titre: "Derrière le prompt",
    categorie: "Datavisualisation", mots: "Données - Récit - Interaction",
    seance: "Séance 03 - L’énergie invisible", presente: "Litzler & Bertrand présentent",
    accent: "var(--vert-acide)", timecode: "00:06:18:20", progression: 59,
    action: "Explorer les visualisations", statut: "À explorer en ligne", url: "https://sae303-clement-noah-10.netlify.app/",
    resume: "Une expérience interactive pour rendre visible ce qui se cache derrière une requête d’IA : de l’énergie, des machines et des territoires.",
    suite: "Séance 03 - Datavisualisation. Explorer l’énergie invisible de l’intelligence artificielle.",
    legende: "Derrière le prompt - L’énergie invisible - Projet SAÉ 303 réalisé en binôme par Noah Litzler et Clément Bertrand - BUT MMI",
    credits: [["Un projet de", "Noah Litzler et Clément Bertrand"], ["Cadre", "SAÉ 303 - BUT MMI"], ["Format", "Expérience web interactive"], ["Année", "2026"]],
    affiche: { type: "prompt", alt: "Derrière le prompt : l’énergie invisible" }, visuels: [],
    pitch: { texte: "Une réponse s’affiche en quelques secondes. Mais derrière l’écran,", accroche: "l’invisible existe." },
    commande: "Répondre au défi ADEME « L’impact environnemental de l’IA générative » (Open Data University) en rendant les données compréhensibles dans une expérience de datavisualisation. Le parcours aborde la requête, les modèles, la consommation d’énergie et les infrastructures.",
    role: "J’ai réalisé ce projet en binôme avec Clément Bertrand. Notre résultat associe un récit visuel et quatre visualisations interactives.",
    makingOf: { titre: "Des données à une histoire à explorer.", plans: [
      {timecode: "00:01:12:04", titre: "Comprendre", legende: "Distinguer estimations et mesures : les chiffres donnent des ordres de grandeur, pas l’empreinte exacte de chaque prompt.", texte: "Le site explique ses sources et les limites des comparaisons dans une page méthode accessible pendant toute l’expérience."},
      {timecode: "00:02:12:04", titre: "Scénariser", legende: "Quatre chapitres pour passer d’une action quotidienne à ses infrastructures.", texte: "La requête → comparer les modèles → mesurer l’énergie → les infrastructures. Le défilement relie chaque étape ; les chapitres permettent aussi un accès direct."},
      {timecode: "00:03:12:04", titre: "Explorer", legende: "Laisser le visiteur explorer les graphiques et consulter la méthode.", texte: "Le site utilise Astro, des données JSON préfiltrées et des visualisations issues de notre notebook Observable. Les sélecteurs, les changements d’échelle et les cartes permettent une lecture active."}
    ]},
    fiche: {
      titre: "Astro, Observable et des données ouvertes.",
      elements: [
        ["Structure", "Astro organise le récit en quatre temps. Le défilement et les accès directs permettent de parcourir les chapitres."],
        ["Visualisations", "Les fonctions du notebook Observable reçoivent les données JSON préfiltrées et proposent des sélecteurs, des changements d’échelle et des cartes."],
        ["Lecture des données", "Les sources, les unités et les limites des estimations restent accessibles dans la page Méthode."],
      ],
    },
    resultat: {titre: "Une expérience en ligne, quatre visualisations.", images: [], legende: "Le site complet est accessible via le lien ci-dessous, avec ses interactions et sa page méthode."},
    coupee: {titre: "Le regard critique fait partie du projet.", correctifs: [["Un chiffre isolé", "un chiffre contextualisé"]], texte: "Présenter les incertitudes avec les données et conserver un accès clair aux sources : la mise en scène doit aider à comprendre les ordres de grandeur."}
  },
  {
    "slug": "sull",
    "numero": "04",
    "titre": "SULL",
    "categorie": "UX / UI design",
    "mots": "Cinéma - Parcours - Interface",
    "seance": "Séance 04 - Découverte cinéphile",
    "presente": "Litzler & Bertrand présentent",
    "accent": "#A44A5B",
    "timecode": "00:07:04:00",
    "progression": 65,
    "statut": "À explorer en ligne",
    "url": "https://sull.clementbertrandportfolio.store/",
    "action": "Explorer SULL",
    "resume": "Une plateforme de découverte cinématographique : explorer des films, des cinéastes, des mouvements et des musiques, puis prolonger la séance avec la communauté.",
    "suite": "Séance 04 - UX / UI design. Une plateforme pour explorer la culture cinéma.",
    "legende": "SULL - Culture cinéma - Noah Litzler et Clément Bertrand - Audit, personas et storyboard Noah Litzler - BUT MMI",
    "credits": [
      [
        "Un projet de",
        "Noah Litzler et Clément Bertrand"
      ],
      [
        "Audit et personas",
        "Noah Litzler"
      ],
      [
        "Storyboard et maquettes",
        "Noah Litzler"
      ],
      [
        "Conception",
        "Figma"
      ],
      [
        "Format",
        "Plateforme web"
      ],
      [
        "Année",
        "2026"
      ]
    ],
    "affiche": {
      "type": "vitrine",
      "f": "sull-accueil.png",
      "logo": "/sull-logo.svg",
      "alt": "Accueil de SULL : le film 2001, l’Odyssée de l’espace à la une",
      "sousTitre": "La culture cinéma, après la séance.",
      "etiquette": "CULTURE CINÉMA"
    },
    "visuels": [],
    "pitch": {
      "texte": "La découverte ne s’arrête pas au générique.",
      "accroche": "Elle commence avec le prochain film."
    },
    "commande": "Concevoir une expérience pour les cinéphiles qui relie les œuvres à leurs auteurs, à leurs courants et à leurs bandes originales. La version en ligne réunit ces entrées dans une même plateforme, avec une place pour les listes, les critiques et les discussions.",
    "role": "Projet réalisé en binôme avec Clément Bertrand. Ma contribution porte sur l’audit, les personas, le storyboard et les maquettes. Cette étude de cas présente le parcours et l’interface de la version en ligne.",
    "makingOf": {
      "titre": "De l’envie de cinéma au film à découvrir.",
      "plans": [
        {
          "timecode": "00:01:12:04",
          "titre": "Multiplier les portes d’entrée",
          "texte": "Films, réalisateurs, mouvements et musiques : la navigation permet de partir d’une œuvre connue ou d’explorer un autre angle de la culture cinéma.",
          "legende": "L’audit et les personas posent le cadre du parcours ; le storyboard relie les différentes étapes de découverte."
        },
        {
          "timecode": "00:02:12:04",
          "image": {
            "f": "sull-catalogue.png",
            "alt": "Catalogue SULL : titre, recherche et choix du tri avant la grille de films"
          },
          "legende": "Le catalogue regroupe une recherche et un tri. Les cartes associent l’affiche, le titre, le cinéaste et l’année pour situer chaque œuvre."
        },
        {
          "timecode": "00:03:12:04",
          "titre": "Prolonger la séance",
          "texte": "Le site propose aussi des bandes originales, des mouvements cinématographiques et un espace communauté. Les mêmes repères de navigation permettent de passer de la découverte d’un film à un contexte plus large.",
          "legende": "Une identité sombre, des titres expressifs et des informations en chasse fixe font le lien entre les rubriques."
        }
      ]
    },
    "fiche": {
      "titre": "L’image au premier plan, les repères au bon endroit.",
      "couleurs": [
        {
          "nom": "Noir",
          "hex": "#000000",
          "sens": "les fonds de la plateforme"
        },
        {
          "nom": "Crème",
          "hex": "#F5DFBF",
          "sens": "les textes et les repères"
        }
      ],
      "elements": [
        [
          "Typographies",
          "Le Murmure donne leur silhouette aux titres ; Courier Prime accompagne les textes, les métadonnées et les repères."
        ],
        [
          "Organisation",
          "Une navigation commune dessert les films, les cinéastes, les mouvements, les musiques et la communauté."
        ],
        [
          "Livrable",
          "Des maquettes conçues sur Figma et une plateforme consultable en ligne. Les captures montrent la version du 10 novembre 2026."
        ]
      ]
    },
    "resultat": {
      "titre": "Une plateforme cinéphile en ligne.",
      "images": [
        {
          "f": "sull-accueil.png",
          "alt": "Version en ligne de SULL : navigation principale et film à la une"
        },
        {
          "f": "sull-catalogue.png",
          "alt": "Version en ligne de SULL : recherche et tri du catalogue"
        }
      ],
      "legende": "L’accueil met un film à la une, puis déroule des sélections, des cinéastes, des musiques et des mouvements. Le catalogue permet une exploration plus ciblée.",
      "note": "Captures de l’interface SULL. Les images de films appartiennent à leurs ayants droit."
    },
    "coupee": {
      "titre": "Le prochain plan : éprouver la découverte.",
      "correctifs": [
        [
          "Un parcours supposé clair",
          "un parcours observé en test"
        ]
      ],
      "texte": "La prochaine étape serait de faire chercher un film et une bande originale à plusieurs personnes, puis d’observer leurs hésitations. Ce test permettrait de vérifier la lisibilité du catalogue et la compréhension des différentes rubriques."
    }
  },
  {
    "slug": "smooth",
    "numero": "05",
    "titre": "Smooth",
    "categorie": "Design d’expérience",
    "mots": "Identité - Prototype - Tests utilisateurs",
    "seance": "Séance 05 - Le disquaire des lunettes",
    "presente": "Noah Litzler présente",
    "accent": "#F5B700",
    "timecode": "00:08:15:00",
    "progression": 75,
    "statut": "Maquette Figma",
    "url": "https://www.figma.com/design/rnxTTDXSQrr9brFkNyl9Xc/R303?node-id=62-1719",
    "action": "Voir la maquette Figma",
    "resume": "Personnaliser ses lunettes comme on compose un disque : une maquette de boutique à l’univers pop rétro, avec le modèle Billie, un configurateur et un parcours d’achat.",
    "suite": "Séance 05 - Design d’expérience. Smooth, le disquaire des lunettes.",
    "legende": "Smooth - Le disquaire des lunettes - Identité et maquette interactive R303 - Noah Litzler - BUT MMI",
    "credits": [
      [
        "Un projet de",
        "Noah Litzler"
      ],
      [
        "Cadre",
        "R303 - BUT MMI"
      ],
      [
        "Format",
        "Maquette interactive"
      ],
      [
        "Outil",
        "Figma"
      ],
      [
        "Univers",
        "Pop rétro et disquaire"
      ],
      [
        "Année",
        "2026"
      ]
    ],
    "affiche": {
      "type": "vitrine",
      "f": "smooth-billie.png",
      "logo": "/smooth-logo.svg",
      "alt": "Modèle Billie en coloris cerise, visuel issu de la maquette Smooth",
      "sousTitre": "Le disquaire des lunettes.",
      "etiquette": "IDENTITÉ / UX / UI"
    },
    "visuels": [],
    "pitch": {
      "texte": "Choisir une paire de lunettes comme on choisit un vinyle.",
      "accroche": "À chacun son mix."
    },
    "commande": "Imaginer une boutique de lunettes personnalisables pour des étudiants passionnés de musique. Le persona Juan, guitariste pop/rock au budget d’environ 100 euros, donne une direction au projet : un choix personnel, accessible et ancré dans un univers de disquaire.",
    "role": "J’ai conçu l’identité et la maquette Smooth dans le cadre de R303 : brandboard, écrans du parcours et configurateur du modèle Billie. Le fichier Figma documente également les retours de cinq testeurs et les corrections apportées au parcours.",
    "makingOf": {
      "titre": "Une identité, un parcours, puis des retours.",
      "plans": [
        {
          "timecode": "00:01:12:04",
          "titre": "Créer le disquaire des lunettes",
          "texte": "Le nom fait un clin d’œil à Smooth Criminal. Les deux « oo » du logo deviennent une paire de lunettes. Les pochettes, les stickers de prix et le vocabulaire musical construisent un univers pop rétro inspiré des années 80.",
          "legende": "Le brandboard rassemble la mission, le public, le logo, la palette, les typographies et les motifs."
        },
        {
          "timecode": "00:02:12:04",
          "titre": "Composer sa Billie",
          "texte": "La page Composer place l’aperçu de la paire à côté des réglages : monture, verres et gravure. Le visiteur peut changer de vue, consulter le total, conserver son mix et ajouter la paire au sac.",
          "legende": "Le parcours maquetté relie l’accueil, le catalogue, Composer, les favoris, le sac, le paiement et la confirmation."
        },
        {
          "timecode": "00:03:12:04",
          "titre": "Écouter les cinq testeurs",
          "texte": "Le bilan indique que les cinq personnes ont compris le but du site et réussi à utiliser la maquette. Les difficultés concernent surtout l’aperçu de la lunette, la visibilité du sac et certains intitulés.",
          "legende": "Ces retours ont conduit à conserver l’aperçu à côté des réglages, découper la personnalisation en trois étapes et clarifier les boutons."
        }
      ]
    },
    "fiche": {
      "titre": "Une identité pop, une lecture accompagnée.",
      "couleurs": [
        {
          "nom": "Rouge scène",
          "hex": "#D7263D",
          "sens": "les actions et les accents"
        },
        {
          "nom": "Noir ampli",
          "hex": "#141414",
          "sens": "les textes et les contours"
        },
        {
          "nom": "Crème sticker",
          "hex": "#F6EEDC",
          "sens": "le fond principal"
        },
        {
          "nom": "Jaune juke-box",
          "hex": "#F5B700",
          "sens": "les prix et les stickers"
        }
      ],
      "elements": [
        [
          "Typographies",
          "Bungee pour les titres, DM Sans pour les textes et les prix, Space Mono pour les repères. Caveat apporte la note manuscrite."
        ],
        [
          "Confort de lecture",
          "La maquette prévoit un panneau avec taille du texte, contraste, police Atkinson Hyperlegible et réduction des animations."
        ],
        [
          "Livrable",
          "Une identité de marque fictive et une maquette Figma. Le rendu de lunettes et les variantes ci-dessous proviennent du fichier fourni."
        ]
      ]
    },
    "resultat": {
      "titre": "Billie, de la pochette au sac.",
      "images": [
        {
          "f": "smooth-billie.png",
          "alt": "Lunettes Billie cerise en vue trois quarts, visuel de la maquette Smooth",
          "fond": "#F6EEDC"
        },
        {
          "f": "smooth-menthe.png",
          "alt": "Lunettes Billie menthe en vue de face, variante utilisée dans le catalogue Smooth",
          "fond": "#F6EEDC"
        },
        {
          "f": "smooth-noir.png",
          "alt": "Lunettes Billie noires en vue de face, variante utilisée dans le catalogue Smooth",
          "fond": "#F5B700"
        }
      ],
      "legende": "Une même identité traverse la découverte des modèles, la personnalisation et le récapitulatif d’achat. La paire est présentée comme une pochette de disque ; les réglages sont organisés en étapes.",
      "note": "Projet de marque fictive : les écrans de commande et de paiement sont des maquettes, sans vente réelle."
    },
    "coupee": {
      "titre": "Ce que les tests ont fait changer.",
      "correctifs": [
        [
          "Remonter pour revoir la paire",
          "un aperçu à côté des réglages"
        ],
        [
          "Un sac peu visible",
          "Mon sac sur toutes les pages"
        ],
        [
          "Un vocabulaire ambigu",
          "des intitulés plus explicites"
        ]
      ],
      "texte": "Le bilan Figma mentionne aussi une pochette récapitulative de la paire dans le sac. Ces corrections rendent le parcours plus lisible tout en conservant l’univers musical."
    }
  }
];
