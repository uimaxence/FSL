// Données des communes ciblées pour le SEO local.
// Source unique consommée par :
//  - src/pages/menuisier-[ville].astro (génération des pages)
//  - src/components/sections/ZonesMap.astro (pins de la carte + JSON-LD geo)
//  - src/pages/zones-intervention/index.astro (hub / maillage interne)
//
// ⚠️ Anti-doorway : chaque commune DOIT garder un contenu réellement unique
// (intro rédigée à la main, quartiers réels, contexte ABF, FAQ propre).
// Ne jamais générer une intro mécanique « Menuisier à {nom} ».

export type AgenceRattachement = "seiches" | "doue";

export interface Agence {
  nom: string;
  adresse: string;
  codePostal: string;
  ville: string;
  lat: number;
  lng: number;
  telephone: string;
}

export interface CommuneFaq {
  question: string;
  reponse: string;
}

export interface Commune {
  /** slug d'URL : /menuisier-<slug> */
  slug: string;
  nom: string;
  codePostal: string;
  /** coordonnées réelles — pin carte + GeoCoordinates JSON-LD */
  lat: number;
  lng: number;
  /** agence la plus proche (rattachement NAP) */
  agence: AgenceRattachement;
  /** distance routière approx. depuis l'agence de rattachement (km) */
  distanceKm: number;
  /** balise <title> dédiée (unique par commune) */
  metaTitle: string;
  /** meta description dédiée (unique par commune) */
  metaDescription: string;
  /** 2-4 phrases UNIQUES affichées en lead du hero */
  intro: string;
  /** paragraphes de corps (contexte bâti local, anti-duplication) */
  body: string[];
  /** quartiers / communes déléguées réellement desservis */
  quartiers?: string[];
  /** secteur soumis à l'avis de l'Architecte des Bâtiments de France */
  abf?: boolean;
  abfNote?: string;
  /** slugs de réalisations à proximité (collection "realisations") */
  realisationSlugs?: string[];
  /** 2-3 Q/R locales — alimente aussi le FAQPage JSON-LD */
  faq?: CommuneFaq[];
}

export const AGENCES: Record<AgenceRattachement, Agence> = {
  seiches: {
    nom: "Seiches-sur-le-Loir",
    adresse: "287 Rue de l'Innovation",
    codePostal: "49140",
    ville: "Seiches-sur-le-Loir",
    lat: 47.5739,
    lng: -0.3536,
    telephone: "02 41 77 04 08",
  },
  doue: {
    nom: "Doué-en-Anjou",
    adresse: "7 rue Saint François",
    codePostal: "49700",
    ville: "Doué-en-Anjou",
    lat: 47.1936,
    lng: -0.2772,
    telephone: "02 41 77 04 08",
  },
};

export const communes: Commune[] = [
  {
    slug: "angers",
    nom: "Angers",
    codePostal: "49000",
    lat: 47.4784,
    lng: -0.5632,
    agence: "seiches",
    distanceKm: 22,
    metaTitle: "Menuisier à Angers (49) — Fenêtres, portes & volets sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Artisan menuisier RGE à Angers : fenêtres, portes d'entrée, volets et baies vitrées sur mesure. Devis gratuit, pose certifiée, intervention dans tous les quartiers angevins.",
    intro:
      "À Angers, Fenêtres sur Loir accompagne aussi bien les maisons de schiste du centre que les pavillons des quartiers résidentiels. Nos équipes interviennent sur toute l'agglomération, du remplacement de fenêtres en rénovation au neuf.",
    body: [
      "Angers conjugue un cœur de ville classé et de larges secteurs pavillonnaires de la seconde moitié du XXᵉ siècle. Cette double réalité guide nos préconisations : menuiseries aluminium fines et vitrages à contrôle solaire pour les immeubles, blocs bois-alu MéO pour les maisons de caractère de la Doutre.",
      "Nous gérons l'ensemble des démarches, y compris les déclarations préalables de travaux auprès de la Ville d'Angers et la coordination avec l'Architecte des Bâtiments de France dans le périmètre du site patrimonial remarquable.",
    ],
    quartiers: ["La Doutre", "La Madeleine", "Belle-Beille", "Monplaisir", "Saint-Léonard", "Justices"],
    abf: true,
    abfNote:
      "Le centre historique d'Angers (site patrimonial remarquable, abords de la cathédrale et du château) impose l'avis de l'ABF : nous adaptons les profilés, teintes et petits-bois en conséquence.",
    realisationSlugs: ["angers", "ponts-de-ce"],
    faq: [
      {
        question: "Intervenez-vous en secteur protégé dans le centre d'Angers ?",
        reponse:
          "Oui. Dans le périmètre du site patrimonial remarquable, nous montons le dossier de déclaration préalable et proposons des menuiseries conformes aux prescriptions de l'ABF (teintes, partitions, matériaux).",
      },
      {
        question: "Quel délai pour un devis fenêtres à Angers ?",
        reponse:
          "Nous nous déplaçons sous quelques jours pour la prise de mesures et remettons un devis gratuit sous 48 h. Depuis notre agence de Seiches-sur-le-Loir, Angers est à une vingtaine de minutes.",
      },
    ],
  },
  {
    slug: "les-ponts-de-ce",
    nom: "Les Ponts-de-Cé",
    codePostal: "49130",
    lat: 47.4244,
    lng: -0.5247,
    agence: "seiches",
    distanceKm: 26,
    metaTitle: "Menuisier aux Ponts-de-Cé (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Pose de fenêtres, portes et volets sur mesure aux Ponts-de-Cé. Artisan RGE, conseil énergétique adapté aux maisons de bord de Loire. Devis gratuit sous 48 h.",
    intro:
      "Aux Ponts-de-Cé, le bâti longe la Loire et l'Authion : maisons de tuffeau, longères et constructions récentes cohabitent. Nous y avons mené plusieurs rénovations complètes de menuiseries.",
    body: [
      "La proximité du fleuve impose une attention particulière à l'étanchéité et à la ventilation. Nous privilégions des menuiseries à rupture de pont thermique et des vitrages adaptés à l'exposition, pour des maisons souvent anciennes et humides.",
      "De Sorges à Saint-Aubin, nous intervenons sur les trois communes historiques des Ponts-de-Cé, en rénovation comme en remplacement à l'identique.",
    ],
    quartiers: ["Sorges", "Saint-Aubin", "La Chesnaie", "Centre-ville"],
    realisationSlugs: ["ponts-de-ce"],
    faq: [
      {
        question: "Faites-vous le remplacement de fenêtres à l'identique sur maison ancienne ?",
        reponse:
          "Oui, c'est fréquent aux Ponts-de-Cé. Nous reproduisons les partitions et proportions d'origine tout en gagnant en isolation, ce qui préserve le cachet des maisons de bord de Loire.",
      },
    ],
  },
  {
    slug: "seiches-sur-le-loir",
    nom: "Seiches-sur-le-Loir",
    codePostal: "49140",
    lat: 47.5739,
    lng: -0.3536,
    agence: "seiches",
    distanceKm: 0,
    metaTitle: "Menuisier à Seiches-sur-le-Loir (49) — Notre showroom 300 m² | Fenêtres sur Loir",
    metaDescription:
      "Notre showroom de 300 m² est à Seiches-sur-le-Loir : fenêtres, portes, volets et verrières grandeur nature. Conseil sur place et pose RGE dans toute la vallée du Loir.",
    intro:
      "Seiches-sur-le-Loir, c'est chez nous : notre showroom de 300 m² y présente fenêtres, portes, volets et verrières grandeur nature. Autant dire que nous connaissons chaque rue de la commune et de la vallée du Loir.",
    body: [
      "Être implantés à Seiches nous permet d'intervenir très vite sur la commune et les bourgs voisins de la vallée du Loir. Prise de mesures, dépannage, SAV : tout part de notre atelier local.",
      "Venez toucher les matières et comparer les gammes au showroom avant de décider — c'est le meilleur moyen de choisir des menuiseries adaptées à votre maison.",
    ],
    quartiers: ["Centre-bourg", "Matheflon", "Montreuil-sur-Loir"],
    realisationSlugs: ["seiches-sur-loir"],
    faq: [
      {
        question: "Peut-on visiter le showroom sans rendez-vous ?",
        reponse:
          "Oui, notre showroom de Seiches-sur-le-Loir est ouvert du lundi au vendredi et le samedi matin. Pour un conseil approfondi sur un projet précis, un rendez-vous reste préférable.",
      },
    ],
  },
  {
    slug: "avrille",
    nom: "Avrillé",
    codePostal: "49240",
    lat: 47.5113,
    lng: -0.5897,
    agence: "seiches",
    distanceKm: 25,
    metaTitle: "Menuisier à Avrillé (49) — Fenêtres, portes & volets | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes d'entrée et volets roulants sur mesure à Avrillé. Artisan menuisier RGE, idéal pour la rénovation énergétique des pavillons angevins. Devis gratuit.",
    intro:
      "Avrillé, au nord d'Angers, est marquée par un habitat pavillonnaire des années 1960-1990. C'est le terrain idéal pour la rénovation énergétique : remplacement de fenêtres simple vitrage et motorisation des volets.",
    body: [
      "Sur ces pavillons, nous proposons surtout des fenêtres PVC ou aluminium à haute performance thermique et des volets roulants Bubendorff, souvent éligibles aux aides à la rénovation.",
      "Notre équipe gère le passage du simple au double, voire triple vitrage, sans modifier la maçonnerie existante grâce à la pose en rénovation.",
    ],
    quartiers: ["La Croix-Cadeau", "Le Bois du Roy", "Centre"],
    faq: [
      {
        question: "Le remplacement de volets roulants est-il éligible aux aides ?",
        reponse:
          "La motorisation et le remplacement de volets améliorent l'isolation : selon votre situation, certains dispositifs sont mobilisables. Nous faisons le point lors du devis, étant certifiés RGE.",
      },
    ],
  },
  {
    slug: "trelaze",
    nom: "Trélazé",
    codePostal: "49800",
    lat: 47.4467,
    lng: -0.4561,
    agence: "seiches",
    distanceKm: 20,
    metaTitle: "Menuisier à Trélazé (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Pose de fenêtres, portes et baies vitrées sur mesure à Trélazé. Artisan RGE pour la rénovation des maisons d'ardoisiers comme pour le neuf. Devis gratuit sous 48 h.",
    intro:
      "Ancienne capitale de l'ardoise, Trélazé mêle maisons ouvrières en schiste et lotissements récents. Nous adaptons nos menuiseries à ces deux patrimoines très différents.",
    body: [
      "Sur les maisons d'ardoisiers, souvent étroites et hautes, nous travaillons des fenêtres aux proportions soignées pour conserver le caractère des façades en schiste.",
      "Dans les quartiers neufs des Plaines et de la Quantinière, nous installons plutôt de larges baies coulissantes et des portes d'entrée contemporaines.",
    ],
    quartiers: ["Le Petit-Bois", "La Quantinière", "Les Plaines", "Centre"],
    faq: [
      {
        question: "Posez-vous de grandes baies vitrées sur les maisons neuves de Trélazé ?",
        reponse:
          "Oui. Sur les constructions récentes, nous installons des baies coulissantes ou à galandage de grande dimension, avec vitrage à contrôle solaire pour le confort d'été.",
      },
    ],
  },
  {
    slug: "beaucouze",
    nom: "Beaucouzé",
    codePostal: "49070",
    lat: 47.4736,
    lng: -0.6248,
    agence: "seiches",
    distanceKm: 28,
    metaTitle: "Menuisier à Beaucouzé (49) — Fenêtres, portes & volets | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Beaucouzé : fenêtres, portes et volets posés par un artisan RGE. Rénovation et neuf à l'ouest d'Angers. Devis gratuit et conseil personnalisé.",
    intro:
      "À l'ouest d'Angers, Beaucouzé est une commune résidentielle dynamique où le pavillon individuel domine. Nous y intervenons surtout pour de la rénovation de confort et de l'amélioration thermique.",
    body: [
      "Les maisons de Beaucouzé, souvent bien orientées, se prêtent à l'agrandissement des ouvertures : transformation de fenêtres en portes-fenêtres, création de baies vers le jardin.",
      "Nous travaillons aussi avec les particuliers du secteur sur la sécurisation des accès (portes d'entrée multipoints, volets motorisés).",
    ],
    quartiers: ["Le Buisson", "La Gemmetrie", "Centre"],
    faq: [
      {
        question: "Peut-on transformer une fenêtre en porte-fenêtre à Beaucouzé ?",
        reponse:
          "Oui, c'est une demande courante. Nous vérifions la faisabilité (linteau, allège) puis réalisons l'agrandissement de l'ouverture et la pose de la nouvelle menuiserie.",
      },
    ],
  },
  {
    slug: "tierce",
    nom: "Tiercé",
    codePostal: "49125",
    lat: 47.6181,
    lng: -0.4647,
    agence: "seiches",
    distanceKm: 9,
    metaTitle: "Menuisier à Tiercé (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Artisan menuisier à Tiercé, à deux pas de notre showroom : fenêtres, portes, volets et verrières sur mesure. Intervention rapide, pose RGE, devis gratuit sous 48 h.",
    intro:
      "Tiercé est à moins de dix minutes de notre showroom de Seiches : autant dire l'une de nos communes de prédilection. Nous y intervenons rapidement, en rénovation comme en neuf.",
    body: [
      "Cette proximité immédiate facilite tout : prise de mesures sous quelques jours, suivi de chantier réactif et SAV de proximité.",
      "Le long de la vallée du Loir, nous y posons aussi bien des fenêtres bois pour les maisons anciennes que des verrières d'intérieur pour les rénovations contemporaines.",
    ],
    quartiers: ["Centre-bourg", "Gare", "Pont-Bertrand"],
    faq: [
      {
        question: "Sous quel délai intervenez-vous à Tiercé ?",
        reponse:
          "Tiercé étant tout proche de notre agence de Seiches-sur-le-Loir, nous nous déplaçons très rapidement pour la prise de mesures, et le suivi de chantier est particulièrement réactif.",
      },
    ],
  },
  {
    slug: "durtal",
    nom: "Durtal",
    codePostal: "49430",
    lat: 47.6711,
    lng: -0.2447,
    agence: "seiches",
    distanceKm: 15,
    metaTitle: "Menuisier à Durtal (49) — Fenêtres, portes & volets | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Durtal : fenêtres, portes et volets posés par un artisan RGE. Respect du caractère des maisons de la vallée du Loir. Devis gratuit.",
    intro:
      "Durtal, dominée par son château Renaissance, possède un bourg ancien aux nombreuses maisons de tuffeau. Nous y soignons particulièrement le respect des façades historiques.",
    body: [
      "Aux abords du château et dans le centre ancien, nous proposons des menuiseries bois ou bois-alu reprenant les partitions traditionnelles, pour gagner en confort sans dénaturer le bâti.",
      "En périphérie, sur les maisons plus récentes, nous installons des solutions PVC et aluminium plus économiques, adaptées à la rénovation énergétique.",
    ],
    quartiers: ["Centre ancien", "Les Portes du Loir", "Gouis"],
    abf: true,
    abfNote:
      "Les abords du château de Durtal et de l'église placent une partie du bourg en périmètre protégé : nous adaptons les menuiseries aux prescriptions patrimoniales.",
    faq: [
      {
        question: "Quelles menuiseries pour une maison de tuffeau à Durtal ?",
        reponse:
          "Sur le tuffeau, nous recommandons souvent des menuiseries bois ou bois-aluminium aux fines partitions, qui respectent l'esthétique d'origine tout en améliorant nettement l'isolation.",
      },
    ],
  },
  {
    slug: "bauge-en-anjou",
    nom: "Baugé-en-Anjou",
    codePostal: "49150",
    lat: 47.5447,
    lng: -0.1019,
    agence: "seiches",
    distanceKm: 22,
    metaTitle: "Menuisier à Baugé-en-Anjou (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Pose de fenêtres, portes et volets sur mesure à Baugé-en-Anjou. Artisan RGE attentif au patrimoine de la cité historique. Devis gratuit et conseil personnalisé.",
    intro:
      "Cité de caractère organisée autour de son château et de son célèbre hôtel-Dieu, Baugé-en-Anjou demande un vrai soin patrimonial. Nous y conjuguons respect du bâti ancien et performance thermique.",
    body: [
      "Le centre historique de Baugé impose des menuiseries discrètes et bien proportionnées. Nous privilégions le bois et le bois-alu, avec petits-bois et teintes validés en secteur protégé.",
      "Baugé-en-Anjou regroupe de nombreuses communes déléguées : nous intervenons sur l'ensemble du territoire, des bourgs ruraux aux maisons de ville.",
    ],
    quartiers: ["Baugé", "Le Vieil-Baugé", "Pontigné", "Saint-Martin-d'Arcé"],
    abf: true,
    abfNote:
      "La cité historique de Baugé (château, hôtel-Dieu, abords des monuments) relève de l'avis de l'ABF : choix des matériaux, teintes et partitions sont étudiés en conséquence.",
    faq: [
      {
        question: "Intervenez-vous dans tout Baugé-en-Anjou, y compris les communes déléguées ?",
        reponse:
          "Oui, nous couvrons l'ensemble de la commune nouvelle, du centre historique de Baugé aux bourgs comme Le Vieil-Baugé ou Pontigné.",
      },
    ],
  },
  {
    slug: "beaufort-en-anjou",
    nom: "Beaufort-en-Anjou",
    codePostal: "49250",
    lat: 47.4389,
    lng: -0.2236,
    agence: "seiches",
    distanceKm: 18,
    metaTitle: "Menuisier à Beaufort-en-Anjou (49) — Fenêtres, portes & volets | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Beaufort-en-Anjou : fenêtres, portes et baies vitrées posées par un artisan RGE. Rénovation et neuf en vallée de l'Authion. Devis gratuit.",
    intro:
      "Au cœur de la vallée maraîchère de l'Authion, Beaufort-en-Anjou mêle bourg ancien et lotissements récents. Nous y intervenons pour tout type de menuiserie, du remplacement à la création d'ouvertures.",
    body: [
      "Le secteur, plat et bien exposé, se prête aux grandes baies vitrées ouvrant sur le jardin. Nous proposons des coulissants à seuil plat, confortables et accessibles.",
      "Sur le bâti ancien du centre, dominé par le tuffeau, nous restons sur des menuiseries sobres respectant l'architecture locale.",
    ],
    quartiers: ["Beaufort", "Gée", "Centre"],
    faq: [
      {
        question: "Posez-vous des baies vitrées à seuil plat à Beaufort-en-Anjou ?",
        reponse:
          "Oui. Les baies coulissantes à seuil plat sont idéales pour les maisons de plain-pied du secteur : elles offrent une continuité entre intérieur et jardin et facilitent l'accessibilité.",
      },
    ],
  },
  {
    slug: "doue-en-anjou",
    nom: "Doué-en-Anjou",
    codePostal: "49700",
    lat: 47.1936,
    lng: -0.2772,
    agence: "doue",
    distanceKm: 0,
    metaTitle: "Menuisier à Doué-en-Anjou (49) — Notre nouvelle agence | Fenêtres sur Loir",
    metaDescription:
      "Notre nouvelle agence de menuiserie est à Doué-en-Anjou : fenêtres, portes, volets et baies sur mesure, pose RGE. Conseil de proximité dans le Saumurois et le Layon.",
    intro:
      "Doué-en-Anjou accueille notre nouvelle agence : c'est notre point d'ancrage pour tout le sud du département. Cité des roses et terre de troglodytes, elle a un bâti de tuffeau qui mérite des menuiseries soignées.",
    body: [
      "Depuis notre agence douessine, nous rayonnons sur le Saumurois et la vallée du Layon. La proximité change tout : conseil, prise de mesures et SAV au plus près de chez vous.",
      "Le tuffeau, très présent à Doué, appelle des menuiseries respectueuses des teintes claires et des proportions traditionnelles, tout en apportant le confort thermique d'aujourd'hui.",
    ],
    quartiers: ["Doué-la-Fontaine", "Montfort", "Les Verchers-sur-Layon", "Forges"],
    faq: [
      {
        question: "Quelles sont les coordonnées de l'agence de Doué-en-Anjou ?",
        reponse:
          "Notre agence se situe au 7 rue Saint François, 49700 Doué-en-Anjou. Vous pouvez nous joindre au 02 41 77 04 08 pour un rendez-vous ou un devis gratuit.",
      },
    ],
  },
  {
    slug: "saumur",
    nom: "Saumur",
    codePostal: "49400",
    lat: 47.2603,
    lng: -0.0769,
    agence: "doue",
    distanceKm: 18,
    metaTitle: "Menuisier à Saumur (49) — Fenêtres, portes & volets sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Artisan menuisier à Saumur : fenêtres, portes et volets sur mesure, pose RGE. Expertise du bâti de tuffeau et des contraintes ABF en ville d'art et d'histoire. Devis gratuit.",
    intro:
      "Saumur, ville d'art et d'histoire dominée par son château, est l'un des secteurs les plus exigeants du département sur le plan patrimonial. Le tuffeau y est partout, et l'ABF veille sur les façades.",
    body: [
      "Dans le centre de Saumur et les abords des monuments, chaque menuiserie est étudiée pour respecter les prescriptions de l'Architecte des Bâtiments de France : matériaux, teintes, petits-bois et systèmes d'ouverture.",
      "Sur les coteaux et le bâti troglodytique du Saumurois, nous proposons des solutions sur mesure adaptées à des ouvertures rarement standard.",
    ],
    quartiers: ["Centre-ville", "Bagneux", "Saint-Hilaire-Saint-Florent", "Nantilly", "Les Ponts"],
    abf: true,
    abfNote:
      "Saumur est une ville d'art et d'histoire : le château, l'église Saint-Pierre et les nombreux monuments placent une grande partie de la ville en périmètre ABF, avec des prescriptions strictes sur les menuiseries.",
    faq: [
      {
        question: "Mes fenêtres à Saumur doivent-elles respecter des règles ABF ?",
        reponse:
          "Dans une large partie de Saumur, oui. Nous maîtrisons ces contraintes : nous montons le dossier et proposons des menuiseries conformes aux exigences de l'ABF, sans renoncer au confort thermique.",
      },
      {
        question: "Travaillez-vous sur des ouvertures non standard du bâti troglodytique ?",
        reponse:
          "Oui. Le sur-mesure est notre métier : nous relevons précisément chaque ouverture atypique des coteaux saumurois pour fabriquer des menuiseries parfaitement ajustées.",
      },
    ],
  },
  {
    slug: "brissac-loire-aubance",
    nom: "Brissac Loire Aubance",
    codePostal: "49320",
    lat: 47.3556,
    lng: -0.4447,
    agence: "doue",
    distanceKm: 22,
    metaTitle: "Menuisier à Brissac Loire Aubance (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Brissac Loire Aubance : fenêtres, portes et volets posés par un artisan RGE. Vignoble de l'Aubance, bâti de tuffeau, abords du château. Devis gratuit.",
    intro:
      "Au pays du vignoble de l'Aubance et du plus haut château de France, Brissac Loire Aubance réunit de nombreux bourgs viticoles. Nous y intervenons sur un bâti ancien de tuffeau comme sur les maisons récentes.",
    body: [
      "Les abords du château de Brissac et les centres-bourgs anciens demandent des menuiseries respectueuses : nous y privilégions le bois et le bois-alu aux teintes sobres.",
      "Cette commune nouvelle regroupe une dizaine de villages : nous couvrons l'ensemble du territoire, de Brissac-Quincé à Saint-Saturnin-sur-Loire.",
    ],
    quartiers: ["Brissac-Quincé", "Vauchrétien", "Saint-Saturnin-sur-Loire", "Les Alleuds"],
    abf: true,
    abfNote:
      "Les abords du château de Brissac et certains centres-bourgs placent une partie de la commune en périmètre protégé, avec avis de l'ABF sur les menuiseries.",
    faq: [
      {
        question: "Couvrez-vous tous les villages de Brissac Loire Aubance ?",
        reponse:
          "Oui, nous intervenons sur l'ensemble de la commune nouvelle, de Brissac-Quincé aux bourgs viticoles voisins comme Vauchrétien ou Saint-Saturnin-sur-Loire.",
      },
    ],
  },
  {
    slug: "segre-en-anjou-bleu",
    nom: "Segré-en-Anjou Bleu",
    codePostal: "49500",
    lat: 47.6889,
    lng: -0.8722,
    agence: "seiches",
    distanceKm: 48,
    metaTitle: "Menuisier à Segré-en-Anjou Bleu (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure à Segré-en-Anjou Bleu. Artisan RGE pour la rénovation des maisons de schiste de l'Anjou bleu. Devis gratuit sous 48 h.",
    intro:
      "Au nord-ouest du département, Segré-en-Anjou Bleu tire son nom du schiste ardoisier qui colore ses maisons. Ce bâti minéral, parfois ancien, gagne beaucoup à une rénovation des menuiseries.",
    body: [
      "Sur les maisons de schiste de l'Anjou bleu, nous remplaçons des fenêtres souvent vétustes par des menuiseries performantes, en conservant les proportions des façades.",
      "Commune nouvelle étendue, Segré-en-Anjou Bleu compte de nombreux bourgs ruraux que nous desservons pour la rénovation comme pour le neuf.",
    ],
    quartiers: ["Segré", "Sainte-Gemmes-d'Andigné", "Noyant-la-Gravoyère", "Le Bourg-d'Iré"],
    faq: [
      {
        question: "Segré est-elle dans votre zone d'intervention ?",
        reponse:
          "Oui. Bien que située au nord-ouest du département, Segré-en-Anjou Bleu fait partie de notre zone d'intervention. Nous organisons les déplacements pour la prise de mesures et la pose en conséquence.",
      },
    ],
  },
  {
    slug: "saint-barthelemy-d-anjou",
    nom: "Saint-Barthélemy-d'Anjou",
    codePostal: "49124",
    lat: 47.4741,
    lng: -0.4826,
    agence: "seiches",
    distanceKm: 18,
    metaTitle: "Menuisier à Saint-Barthélemy-d'Anjou (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure à Saint-Barthélemy-d'Anjou. Artisan RGE pour la rénovation des pavillons de l'est angevin. Devis gratuit sous 48 h.",
    intro:
      "Accolée à Angers à l'est, Saint-Barthélemy-d'Anjou mêle zones pavillonnaires, le parc et le château de Pignerolle et le quartier d'activités. Nous y intervenons surtout en rénovation de maisons des années 1970-1990.",
    body: [
      "Sur les pavillons barthélemois, nous remplaçons fréquemment des menuiseries d'origine par des fenêtres PVC ou aluminium performantes, avec volets roulants motorisés, dans le cadre de rénovations énergétiques.",
      "La proximité immédiate d'Angers nous permet d'enchaîner prise de mesures et pose sans délai, du quartier de la Chambre aux abords du parc de Pignerolle.",
    ],
    quartiers: ["La Chambre", "Pignerolle", "Le Pin", "La Goducière"],
    faq: [
      {
        question: "Posez-vous des volets roulants solaires à Saint-Barthélemy-d'Anjou ?",
        reponse:
          "Oui. Sur les pavillons existants, le volet roulant solaire évite de gros travaux électriques : il s'installe sans saignée et améliore l'isolation, souvent dans le cadre d'une rénovation énergétique.",
      },
    ],
  },
  {
    slug: "verrieres-en-anjou",
    nom: "Verrières-en-Anjou",
    codePostal: "49112",
    lat: 47.5182,
    lng: -0.4746,
    agence: "seiches",
    distanceKm: 14,
    metaTitle: "Menuisier à Verrières-en-Anjou (49) — Fenêtres, portes & volets | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Verrières-en-Anjou (Pellouailles-les-Vignes, Saint-Sylvain-d'Anjou). Artisan RGE, neuf et rénovation. Devis gratuit et conseil de proximité.",
    intro:
      "Née du regroupement de Pellouailles-les-Vignes et Saint-Sylvain-d'Anjou, Verrières-en-Anjou est une commune résidentielle en plein essor au nord-est d'Angers, sur l'axe de Seiches. Autant dire l'une de nos zones les plus proches.",
    body: [
      "Les nombreux lotissements récents de Verrières appellent surtout des baies coulissantes, des portes d'entrée contemporaines et des volets motorisés que nous posons en neuf comme en remplacement.",
      "Située entre Angers et notre showroom de Seiches, la commune bénéficie de délais d'intervention très courts pour la prise de mesures comme pour le SAV.",
    ],
    quartiers: ["Pellouailles-les-Vignes", "Saint-Sylvain-d'Anjou", "La Croix-Cadeau"],
    faq: [
      {
        question: "Intervenez-vous sur les maisons neuves des lotissements de Verrières-en-Anjou ?",
        reponse:
          "Oui, c'est fréquent. Sur les constructions récentes, nous installons baies coulissantes, portes d'entrée aluminium et volets roulants en neuf, en coordination avec votre calendrier de chantier.",
      },
    ],
  },
  {
    slug: "loire-authion",
    nom: "Loire-Authion",
    codePostal: "49800",
    lat: 47.4695,
    lng: -0.3734,
    agence: "seiches",
    distanceKm: 16,
    metaTitle: "Menuisier à Loire-Authion (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et baies vitrées sur mesure à Loire-Authion (Andard, Brain-sur-l'Authion, La Daguenière…). Artisan RGE en vallée de l'Authion. Devis gratuit sous 48 h.",
    intro:
      "Entre Loire et Authion, à l'est d'Angers, Loire-Authion regroupe plusieurs bourgs maraîchers : Andard, Brain-sur-l'Authion, La Bohalle, La Daguenière, Bauné, Corné. Un territoire plat et bien exposé, idéal pour les grandes ouvertures.",
    body: [
      "Sur ces maisons de plain-pied, nous installons volontiers des baies coulissantes à seuil plat ouvrant sur le jardin, avec vitrage à contrôle solaire pour le confort d'été dans cette plaine très ensoleillée.",
      "La proximité de la Loire et de l'Authion impose une vigilance sur l'étanchéité : nous privilégions des menuiseries à rupture de pont thermique et des seuils adaptés aux secteurs parfois inondables.",
    ],
    quartiers: ["Andard", "Brain-sur-l'Authion", "La Bohalle", "La Daguenière", "Bauné", "Corné"],
    faq: [
      {
        question: "Couvrez-vous tous les bourgs de Loire-Authion ?",
        reponse:
          "Oui, nous intervenons sur l'ensemble de la commune nouvelle, d'Andard à Corné en passant par Brain-sur-l'Authion et La Bohalle, en rénovation comme en construction neuve.",
      },
    ],
  },
  {
    slug: "bouchemaine",
    nom: "Bouchemaine",
    codePostal: "49080",
    lat: 47.4288,
    lng: -0.6241,
    agence: "seiches",
    distanceKm: 28,
    metaTitle: "Menuisier à Bouchemaine (49) — Fenêtres, portes & volets | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Bouchemaine, à la confluence Maine-Loire. Artisan RGE attentif aux maisons de mariniers de La Pointe. Devis gratuit et conseil personnalisé.",
    intro:
      "À la confluence de la Maine et de la Loire, Bouchemaine séduit par son hameau de mariniers de La Pointe et ses maisons tournées vers l'eau. Nous y soignons des menuiseries qui respectent ce cadre patrimonial et fluvial.",
    body: [
      "Le long des quais et à La Pointe, le bâti ancien demande des fenêtres aux proportions justes : nous travaillons souvent le bois ou le bois-alu pour conserver le caractère des maisons de bord de Loire.",
      "Sur les coteaux résidentiels de Pruniers et de La Chambre, nous posons aussi des baies vitrées profitant des vues sur la confluence et des volets adaptés à l'exposition.",
    ],
    quartiers: ["La Pointe", "Pruniers", "Le Bourg", "La Chambre"],
    faq: [
      {
        question: "Quelles menuiseries pour une maison de mariniers à La Pointe de Bouchemaine ?",
        reponse:
          "Sur ces maisons de bord de Loire, nous recommandons des fenêtres bois ou bois-aluminium à fines partitions, qui préservent le cachet du hameau tout en apportant un vrai confort thermique et phonique.",
      },
    ],
  },
  {
    slug: "sainte-gemmes-sur-loire",
    nom: "Sainte-Gemmes-sur-Loire",
    codePostal: "49130",
    lat: 47.4296,
    lng: -0.5702,
    agence: "seiches",
    distanceKm: 27,
    metaTitle: "Menuisier à Sainte-Gemmes-sur-Loire (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure à Sainte-Gemmes-sur-Loire. Artisan RGE en bord de Loire, au sud d'Angers. Devis gratuit, pose certifiée, conseil personnalisé.",
    intro:
      "Au sud d'Angers, Sainte-Gemmes-sur-Loire borde le fleuve et la zone maraîchère de la Baumette. Entre maisons de bourg et pavillons résidentiels, nous y menons rénovations et remplacements de menuiseries.",
    body: [
      "Le secteur, proche de la Loire, appelle une attention à l'humidité et à la ventilation : nous proposons des menuiseries performantes avec entrées d'air maîtrisées et vitrages adaptés.",
      "Sur les maisons tournées vers le fleuve, nous agrandissons fréquemment les ouvertures pour profiter de la lumière et des vues, avec baies coulissantes et portes-fenêtres sur mesure.",
    ],
    quartiers: ["Le Bourg", "La Baumette", "Port-Thibault", "Le Petit-Claye"],
    faq: [
      {
        question: "Faites-vous l'agrandissement d'ouvertures à Sainte-Gemmes-sur-Loire ?",
        reponse:
          "Oui. Nous vérifions la faisabilité technique (linteau, allège) puis transformons fenêtres en portes-fenêtres ou créons des baies coulissantes pour ouvrir la maison vers le jardin ou la Loire.",
      },
    ],
  },
  {
    slug: "murs-erigne",
    nom: "Mûrs-Érigné",
    codePostal: "49610",
    lat: 47.3948,
    lng: -0.5529,
    agence: "seiches",
    distanceKm: 28,
    metaTitle: "Menuisier à Mûrs-Érigné (49) — Fenêtres, portes & volets | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Mûrs-Érigné, dans la vallée de l'Aubance au sud d'Angers. Artisan RGE, rénovation et neuf. Devis gratuit et conseil personnalisé.",
    intro:
      "Au sud d'Angers, dans la vallée de l'Aubance, Mûrs-Érigné associe coteaux boisés, bourgs anciens et lotissements récents autour des Ponts-de-Cé voisins. Nous y intervenons sur des biens très variés.",
    body: [
      "Sur les maisons de coteau et le bâti ancien des bords de l'Aubance, nous soignons des menuiseries bois ou aluminium discrètes, bien intégrées au relief et à la végétation.",
      "Dans les quartiers pavillonnaires, la demande porte surtout sur la rénovation énergétique : passage au double vitrage, motorisation des volets et portes d'entrée mieux isolées.",
    ],
    quartiers: ["Mûrs", "Érigné", "La Roche", "Le Grand-Launay"],
    faq: [
      {
        question: "Sous quel délai obtenir un devis à Mûrs-Érigné ?",
        reponse:
          "Nous nous déplaçons sous quelques jours pour la prise de mesures et remettons un devis gratuit sous 48 h, en rénovation comme pour un projet de construction neuve.",
      },
    ],
  },
  {
    slug: "chalonnes-sur-loire",
    nom: "Chalonnes-sur-Loire",
    codePostal: "49290",
    lat: 47.3496,
    lng: -0.7729,
    agence: "seiches",
    distanceKm: 35,
    metaTitle: "Menuisier à Chalonnes-sur-Loire (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure à Chalonnes-sur-Loire, en val de Loire (UNESCO) et coteaux du Layon. Artisan RGE. Devis gratuit sous 48 h.",
    intro:
      "Aux portes du vignoble du Layon et au bord de la Loire inscrite à l'UNESCO, Chalonnes-sur-Loire mêle bourg de tuffeau, maisons de vignerons et habitat de bord de fleuve. Un bâti qui mérite des menuiseries soignées.",
    body: [
      "Dans le centre ancien et sur les maisons de vignerons des coteaux, nous privilégions des fenêtres bois ou bois-alu reprenant les partitions traditionnelles, respectueuses du paysage ligérien.",
      "En bord de Loire, l'enjeu est l'isolation et l'étanchéité face à l'humidité : nous installons des menuiseries performantes et des volets adaptés aux secteurs exposés.",
    ],
    quartiers: ["Le Bourg", "Chalonnes", "Saint-Maurille", "La Basse-Île"],
    faq: [
      {
        question: "Le bord de Loire à Chalonnes impose-t-il des contraintes particulières ?",
        reponse:
          "Le val de Loire est un paysage classé : nous veillons à des menuiseries cohérentes avec le bâti ligérien et, en secteur inondable, à des seuils et matériaux adaptés. Nous faisons le point lors du devis.",
      },
    ],
  },
  {
    slug: "saint-georges-sur-loire",
    nom: "Saint-Georges-sur-Loire",
    codePostal: "49170",
    lat: 47.4031,
    lng: -0.7537,
    agence: "seiches",
    distanceKm: 32,
    metaTitle: "Menuisier à Saint-Georges-sur-Loire (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Saint-Georges-sur-Loire, à l'ouest d'Angers près du château de Serrant. Artisan RGE, rénovation et neuf. Devis gratuit et conseil.",
    intro:
      "À l'ouest d'Angers, sur l'axe vers Nantes et à deux pas du château de Serrant, Saint-Georges-sur-Loire est un bourg dynamique entouré de communes rurales. Nous y intervenons en rénovation comme en neuf.",
    body: [
      "Le bourg ancien, marqué par l'ancienne abbaye et le tuffeau, demande des menuiseries sobres et bien proportionnées que nous réalisons sur mesure.",
      "Dans les lotissements et hameaux environnants, nous posons surtout des fenêtres PVC ou aluminium performantes, des portes d'entrée sécurisées et des volets motorisés.",
    ],
    quartiers: ["Le Bourg", "La Possonnière", "Serrant", "Coulaines"],
    faq: [
      {
        question: "Intervenez-vous sur les communes rurales autour de Saint-Georges-sur-Loire ?",
        reponse:
          "Oui. Depuis cet axe à l'ouest d'Angers, nous desservons les bourgs voisins pour la prise de mesures, la pose et le SAV, en rénovation comme en construction neuve.",
      },
    ],
  },
  {
    slug: "mauges-sur-loire",
    nom: "Mauges-sur-Loire",
    codePostal: "49410",
    lat: 47.3435,
    lng: -0.9351,
    agence: "seiches",
    distanceKm: 42,
    metaTitle: "Menuisier à Mauges-sur-Loire (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure à Mauges-sur-Loire (Saint-Florent-le-Vieil, Le Mesnil-en-Vallée…). Artisan RGE, patrimoine ligérien. Devis gratuit.",
    intro:
      "Étendue le long de la Loire, Mauges-sur-Loire réunit onze communes déléguées, de Saint-Florent-le-Vieil et sa célèbre butte au Mesnil-en-Vallée. Un territoire ligérien au bâti de schiste et de tuffeau.",
    body: [
      "Sur la butte de Saint-Florent-le-Vieil, autour de l'abbatiale, nous proposons des menuiseries discrètes respectant le caractère historique du site et son panorama sur la Loire.",
      "Dans les bourgs et la vallée maraîchère, nous remplaçons des fenêtres souvent anciennes par des modèles performants, en bois, PVC ou aluminium selon le caractère de chaque maison.",
    ],
    quartiers: ["Saint-Florent-le-Vieil", "Le Mesnil-en-Vallée", "Montjean-sur-Loire", "La Pommeraye"],
    abf: true,
    abfNote:
      "La butte et l'abbatiale de Saint-Florent-le-Vieil, dans un site ligérien remarquable, placent une partie du bourg en périmètre protégé : nous adaptons matériaux, teintes et partitions aux prescriptions patrimoniales.",
    faq: [
      {
        question: "Intervenez-vous dans toutes les communes déléguées de Mauges-sur-Loire ?",
        reponse:
          "Oui, nous couvrons l'ensemble du territoire, de Saint-Florent-le-Vieil à Montjean-sur-Loire et La Pommeraye, en organisant nos déplacements pour la prise de mesures et la pose.",
      },
    ],
  },
  {
    slug: "montrevault-sur-evre",
    nom: "Montrevault-sur-Èvre",
    codePostal: "49110",
    lat: 47.2494,
    lng: -1.0204,
    agence: "seiches",
    distanceKm: 48,
    metaTitle: "Menuisier à Montrevault-sur-Èvre (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Montrevault-sur-Èvre, dans les Mauges. Artisan RGE pour la rénovation des maisons de schiste et le neuf. Devis gratuit sous 48 h.",
    intro:
      "Au cœur des Mauges, le long de la vallée de l'Èvre, Montrevault-sur-Èvre rassemble une dizaine de bourgs ruraux au bâti souvent ancien. Nous y accompagnons rénovations et constructions neuves.",
    body: [
      "Sur les maisons de schiste et de tuffeau des bourgs maugeois, nous remplaçons les menuiseries vétustes par des modèles performants, en conservant les proportions des façades.",
      "Dans les nombreux lotissements et zones pavillonnaires, la demande porte sur la rénovation énergétique : double vitrage, volets motorisés et portes d'entrée mieux isolées.",
    ],
    quartiers: ["Montrevault", "Saint-Pierre-Montlimart", "Le Fuilet", "Chaudron-en-Mauges"],
    faq: [
      {
        question: "Les Mauges font-elles partie de votre zone d'intervention ?",
        reponse:
          "Oui. Bien que situées à l'ouest du département, les communes des Mauges comme Montrevault-sur-Èvre font partie de notre zone : nous organisons les déplacements pour la prise de mesures et la pose.",
      },
    ],
  },
  {
    slug: "oree-d-anjou",
    nom: "Orée-d'Anjou",
    codePostal: "49270",
    lat: 47.3042,
    lng: -1.2135,
    agence: "seiches",
    distanceKm: 58,
    metaTitle: "Menuisier à Orée-d'Anjou (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure à Orée-d'Anjou (Champtoceaux, Drain, Liré…), à la pointe ouest du département. Artisan RGE. Devis gratuit.",
    intro:
      "À la pointe ouest du Maine-et-Loire, face à la Loire et aux portes de la Loire-Atlantique, Orée-d'Anjou réunit Champtoceaux, Drain, Liré et leurs voisines. Un balcon sur le fleuve au bâti de caractère.",
    body: [
      "À Champtoceaux, le promontoire et ses points de vue sur la Loire demandent des menuiseries soignées : nous travaillons des fenêtres bien proportionnées, respectueuses du panorama et du bâti ancien.",
      "Dans les bourgs viticoles et les hameaux, nous remplaçons fenêtres et volets vétustes par des solutions performantes adaptées à chaque maison, en bois, PVC ou aluminium.",
    ],
    quartiers: ["Champtoceaux", "Drain", "Liré", "Saint-Laurent-des-Autels"],
    faq: [
      {
        question: "Orée-d'Anjou, à l'extrême ouest, est-elle desservie ?",
        reponse:
          "Oui, elle fait partie de notre zone d'intervention. Compte tenu de la distance, nous organisons les déplacements de manière groupée pour la prise de mesures et la pose, sans surcoût pour vous.",
      },
    ],
  },
  {
    slug: "le-lion-d-angers",
    nom: "Le Lion-d'Angers",
    codePostal: "49220",
    lat: 47.6340,
    lng: -0.7517,
    agence: "seiches",
    distanceKm: 32,
    metaTitle: "Menuisier au Lion-d'Angers (49) — Fenêtres, portes & volets | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure au Lion-d'Angers, sur l'Oudon et près du haras national de l'Isle-Briand. Artisan RGE, rénovation et neuf. Devis gratuit sous 48 h.",
    intro:
      "Au nord-ouest d'Angers, sur les rives de l'Oudon et près du haras national de l'Isle-Briand, Le Lion-d'Angers est un bourg vivant entouré de campagne. Nous y intervenons en rénovation comme en neuf.",
    body: [
      "Le centre ancien, en bord d'Oudon, demande des menuiseries respectueuses du bâti : fenêtres bois ou bois-alu aux partitions traditionnelles pour les maisons de caractère.",
      "Dans les lotissements et les fermes rénovées des environs, nous posons des fenêtres performantes, de grandes baies vitrées et des volets motorisés selon les projets.",
    ],
    quartiers: ["Le Bourg", "L'Isle-Briand", "Andigné", "La Ferrière-de-Flée"],
    faq: [
      {
        question: "Travaillez-vous sur les fermes et longères rénovées autour du Lion-d'Angers ?",
        reponse:
          "Oui, c'est une demande fréquente. Le sur-mesure nous permet d'équiper des ouvertures atypiques de longères et fermes anciennes avec des menuiseries parfaitement ajustées et bien isolées.",
      },
    ],
  },
  {
    slug: "les-hauts-d-anjou",
    nom: "Les Hauts-d'Anjou",
    codePostal: "49330",
    lat: 47.6970,
    lng: -0.5499,
    agence: "seiches",
    distanceKm: 12,
    metaTitle: "Menuisier aux Hauts-d'Anjou (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure aux Hauts-d'Anjou (Châteauneuf-sur-Sarthe, Champigné…), tout près de notre showroom de Seiches. Artisan RGE. Devis sous 48 h.",
    intro:
      "Sur les bords de Sarthe, à quelques minutes de notre showroom de Seiches, Les Hauts-d'Anjou réunit Châteauneuf-sur-Sarthe, Champigné et leurs voisines. C'est l'une de nos communes les plus proches.",
    body: [
      "Cette grande proximité facilite tout : prise de mesures rapide, suivi de chantier réactif et SAV de proximité, du bourg de Châteauneuf aux hameaux de Champigné.",
      "Sur le bâti ancien des bords de Sarthe comme dans les lotissements récents, nous adaptons fenêtres, portes et volets au caractère de chaque maison, en rénovation comme en neuf.",
    ],
    quartiers: ["Châteauneuf-sur-Sarthe", "Champigné", "Contigné", "Marigné"],
    faq: [
      {
        question: "Sous quel délai intervenez-vous aux Hauts-d'Anjou ?",
        reponse:
          "Les Hauts-d'Anjou étant tout proches de notre agence de Seiches-sur-le-Loir, nous nous déplaçons très rapidement pour la prise de mesures, et le suivi de chantier y est particulièrement réactif.",
      },
    ],
  },
  {
    slug: "ombree-d-anjou",
    nom: "Ombrée d'Anjou",
    codePostal: "49420",
    lat: 47.7232,
    lng: -1.1086,
    agence: "seiches",
    distanceKm: 58,
    metaTitle: "Menuisier à Ombrée d'Anjou (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Ombrée d'Anjou (Pouancé, Combrée, Le Tremblay…), à la pointe nord-ouest du département. Artisan RGE pour le bâti de schiste. Devis gratuit.",
    intro:
      "À la pointe nord-ouest du département, aux confins de la Mayenne et de la Loire-Atlantique, Ombrée d'Anjou réunit Pouancé, Combrée, Le Tremblay et d'autres bourgs de l'Anjou bleu, terre de schiste et d'étangs.",
    body: [
      "Sur les maisons de schiste de Pouancé et des bourgs voisins, parfois anciennes, nous remplaçons des menuiseries vétustes par des modèles performants tout en respectant les façades minérales.",
      "Commune nouvelle très étendue, Ombrée d'Anjou compte de nombreux villages ruraux que nous desservons pour la rénovation comme pour le neuf, en organisant des déplacements groupés.",
    ],
    quartiers: ["Pouancé", "Combrée", "Le Tremblay", "La Prévière"],
    faq: [
      {
        question: "Ombrée d'Anjou, à l'extrême nord-ouest, fait-elle partie de votre zone ?",
        reponse:
          "Oui. Malgré la distance depuis nos agences, Ombrée d'Anjou fait partie de notre zone d'intervention : nous regroupons les déplacements pour la prise de mesures et la pose afin de rester efficaces.",
      },
    ],
  },
  {
    slug: "noyant-villages",
    nom: "Noyant-Villages",
    codePostal: "49490",
    lat: 47.5111,
    lng: 0.1027,
    agence: "seiches",
    distanceKm: 30,
    metaTitle: "Menuisier à Noyant-Villages (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure à Noyant-Villages, à la pointe est du département (Baugeois). Artisan RGE, rénovation et neuf. Devis gratuit sous 48 h.",
    intro:
      "À la pointe est du Maine-et-Loire, aux portes de la Touraine et du Baugeois forestier, Noyant-Villages réunit une douzaine de bourgs ruraux. Un territoire boisé au bâti traditionnel que nous connaissons bien.",
    body: [
      "Sur les longères et maisons anciennes du Baugeois, nous travaillons des menuiseries sur mesure, souvent en bois, qui respectent les proportions et le caractère rural des façades.",
      "Dans les bourgs et hameaux, nous remplaçons fenêtres et volets anciens par des solutions performantes et nous équipons les constructions neuves de baies et portes contemporaines.",
    ],
    quartiers: ["Noyant", "Vernantes", "Méon", "Genneteil"],
    faq: [
      {
        question: "Noyant-Villages, à l'est du département, est-elle desservie ?",
        reponse:
          "Oui, ce secteur du Baugeois fait partie de notre zone d'intervention. Nous organisons les déplacements depuis Seiches-sur-le-Loir pour la prise de mesures, la pose et le SAV.",
      },
    ],
  },
  {
    slug: "cholet",
    nom: "Cholet",
    codePostal: "49300",
    lat: 47.0358,
    lng: -0.8750,
    agence: "doue",
    distanceKm: 55,
    metaTitle: "Menuisier à Cholet (49) — Fenêtres, portes & volets sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Artisan menuisier à Cholet : fenêtres, portes d'entrée, volets et baies vitrées sur mesure, pose RGE. Rénovation énergétique des pavillons choletais. Devis gratuit.",
    intro:
      "Deuxième ville du département, au sud des Mauges, Cholet est une cité largement reconstruite et entourée de vastes quartiers pavillonnaires. C'est un terrain de choix pour la rénovation énergétique des fenêtres et volets.",
    body: [
      "Sur les pavillons choletais des années 1950-1990, nous remplaçons les menuiseries d'origine par des fenêtres PVC ou aluminium à haute performance, souvent éligibles aux aides à la rénovation.",
      "Dans les programmes neufs et les extensions, nous installons de larges baies coulissantes et des portes d'entrée contemporaines, avec vitrage à contrôle solaire pour le confort d'été.",
    ],
    quartiers: ["Centre-ville", "Le Bordage", "La Girardière", "Le Val de Moine"],
    faq: [
      {
        question: "Le remplacement de mes fenêtres à Cholet est-il éligible aux aides ?",
        reponse:
          "Selon votre situation, le passage à des menuiseries performantes peut ouvrir droit à certains dispositifs d'aide à la rénovation énergétique. Étant certifiés RGE, nous faisons le point précis lors du devis.",
      },
    ],
  },
  {
    slug: "chemille-en-anjou",
    nom: "Chemillé-en-Anjou",
    codePostal: "49120",
    lat: 47.2211,
    lng: -0.6964,
    agence: "doue",
    distanceKm: 33,
    metaTitle: "Menuisier à Chemillé-en-Anjou (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Chemillé-en-Anjou, capitale des plantes médicinales. Artisan RGE, rénovation et neuf dans les Mauges. Devis gratuit sous 48 h.",
    intro:
      "Au nord des Mauges, sur l'axe Angers-Cholet, Chemillé-en-Anjou — capitale des plantes médicinales — regroupe treize communes déléguées. Un vaste territoire rural que nous desservons depuis notre agence de Doué.",
    body: [
      "Sur le bâti ancien de schiste et de tuffeau des bourgs maugeois, nous posons des menuiseries respectueuses des façades, en bois, bois-alu ou aluminium selon le caractère des maisons.",
      "Dans les nombreux lotissements de Chemillé et des bourgs voisins, la demande porte surtout sur la rénovation énergétique et l'équipement des constructions neuves.",
    ],
    quartiers: ["Chemillé", "Melay", "Neuvy-en-Mauges", "La Tourlandry"],
    faq: [
      {
        question: "Couvrez-vous toutes les communes déléguées de Chemillé-en-Anjou ?",
        reponse:
          "Oui, nous intervenons sur l'ensemble de la commune nouvelle, de Chemillé aux bourgs voisins comme Melay ou Neuvy-en-Mauges, en rénovation comme en construction neuve.",
      },
    ],
  },
  {
    slug: "beaupreau-en-mauges",
    nom: "Beaupréau-en-Mauges",
    codePostal: "49600",
    lat: 47.2028,
    lng: -0.9844,
    agence: "doue",
    distanceKm: 48,
    metaTitle: "Menuisier à Beaupréau-en-Mauges (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure à Beaupréau-en-Mauges. Artisan RGE pour la rénovation du bâti maugeois et le neuf. Devis gratuit et conseil personnalisé.",
    intro:
      "Au cœur des Mauges, dominée par son château surplombant l'Èvre, Beaupréau-en-Mauges réunit dix communes déléguées. Un territoire à la fois historique et dynamique où nous intervenons largement.",
    body: [
      "Aux abords du château et dans les centres-bourgs anciens, nous proposons des menuiseries discrètes et bien proportionnées, en bois ou bois-alu, respectueuses du bâti maugeois.",
      "Dans les zones pavillonnaires et les bourgs en développement, nous posons des fenêtres performantes, des baies coulissantes et des volets motorisés, en rénovation comme en neuf.",
    ],
    quartiers: ["Beaupréau", "Andrezé", "Gesté", "Jallais"],
    faq: [
      {
        question: "Intervenez-vous dans toutes les communes déléguées de Beaupréau-en-Mauges ?",
        reponse:
          "Oui, nous couvrons l'ensemble de la commune nouvelle, de Beaupréau à Gesté ou Jallais, en organisant nos déplacements pour la prise de mesures et la pose.",
      },
    ],
  },
  {
    slug: "sevremoine",
    nom: "Sèvremoine",
    codePostal: "49230",
    lat: 47.0878,
    lng: -1.0968,
    agence: "doue",
    distanceKm: 62,
    metaTitle: "Menuisier à Sèvremoine (49) — Fenêtres & portes sur mesure | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Sèvremoine (Saint-Macaire-en-Mauges, Montfaucon-Montigné…), au sud-ouest des Mauges. Artisan RGE, rénovation et neuf. Devis gratuit.",
    intro:
      "À la pointe sud-ouest du département, aux confins de la Vendée et de la Loire-Atlantique, Sèvremoine réunit dix communes déléguées autour de Saint-Macaire-en-Mauges. Un bassin de vie dynamique et industrieux.",
    body: [
      "Sur le bâti de schiste des bourgs maugeois et les nombreuses maisons individuelles, nous remplaçons les menuiseries vétustes par des modèles performants adaptés à chaque façade.",
      "Dans ce secteur en pleine croissance, nous équipons aussi de nombreuses constructions neuves de baies coulissantes, portes d'entrée contemporaines et volets motorisés.",
    ],
    quartiers: ["Saint-Macaire-en-Mauges", "Montfaucon-Montigné", "Le Longeron", "Torfou"],
    faq: [
      {
        question: "Sèvremoine, à l'extrême sud-ouest, fait-elle partie de votre zone ?",
        reponse:
          "Oui, elle fait partie de notre zone d'intervention. Compte tenu de la distance depuis nos agences, nous organisons les déplacements de façon groupée pour la prise de mesures et la pose.",
      },
    ],
  },
  {
    slug: "gennes-val-de-loire",
    nom: "Gennes-Val-de-Loire",
    codePostal: "49350",
    lat: 47.3424,
    lng: -0.2352,
    agence: "doue",
    distanceKm: 24,
    metaTitle: "Menuisier à Gennes-Val-de-Loire (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure à Gennes-Val-de-Loire (Cunault, Les Rosiers, Le Thoureil…). Artisan RGE, patrimoine ligérien et ABF. Devis gratuit.",
    intro:
      "Entre Loire et coteaux, sur la rive sud du fleuve inscrit à l'UNESCO, Gennes-Val-de-Loire réunit Gennes, Cunault, Les Rosiers-sur-Loire et Le Thoureil. Un territoire de tuffeau, de troglodytes et de patrimoine roman.",
    body: [
      "Autour du prieuré de Cunault et dans les bourgs ligériens, nous proposons des menuiseries soignées, en bois ou bois-alu, respectueuses d'un cadre patrimonial exceptionnel.",
      "Sur les maisons de tuffeau et les habitations troglodytiques des coteaux, le sur-mesure s'impose : nous relevons précisément chaque ouverture atypique pour fabriquer des menuiseries parfaitement ajustées.",
    ],
    quartiers: ["Gennes", "Cunault", "Les Rosiers-sur-Loire", "Le Thoureil"],
    abf: true,
    abfNote:
      "Le prieuré de Cunault et le site ligérien inscrit à l'UNESCO placent une partie de la commune en périmètre protégé : matériaux, teintes et partitions sont étudiés selon les prescriptions de l'ABF.",
    faq: [
      {
        question: "Travaillez-vous sur les habitations troglodytiques de Gennes-Val-de-Loire ?",
        reponse:
          "Oui. Les ouvertures du bâti troglodytique sont rarement standard : notre savoir-faire du sur-mesure nous permet de relever et fabriquer des menuiseries parfaitement adaptées à chaque ouverture.",
      },
    ],
  },
  {
    slug: "longue-jumelles",
    nom: "Longué-Jumelles",
    codePostal: "49160",
    lat: 47.3961,
    lng: -0.1092,
    agence: "doue",
    distanceKm: 28,
    metaTitle: "Menuisier à Longué-Jumelles (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Longué-Jumelles, en vallée de l'Authion près de Saumur. Artisan RGE, rénovation et neuf. Devis gratuit sous 48 h.",
    intro:
      "Dans la plaine maraîchère de l'Authion, entre Angers et Saumur, Longué-Jumelles est un bourg actif entouré de cultures et de pépinières. Un secteur plat et ensoleillé propice aux grandes ouvertures.",
    body: [
      "Sur les maisons de plain-pied du secteur, nous installons volontiers des baies coulissantes à seuil plat et des portes-fenêtres ouvrant largement sur le jardin.",
      "Dans le bourg ancien et les hameaux, nous remplaçons fenêtres et volets vétustes par des solutions performantes, avec une attention à l'étanchéité dans cette vallée parfois humide.",
    ],
    quartiers: ["Longué", "Jumelles", "Le Vieil-Baugé", "Saint-Philbert"],
    faq: [
      {
        question: "Posez-vous des baies à seuil plat à Longué-Jumelles ?",
        reponse:
          "Oui. Sur les maisons de plain-pied de la plaine de l'Authion, les baies coulissantes à seuil plat sont idéales : elles offrent une continuité entre intérieur et jardin et facilitent l'accessibilité.",
      },
    ],
  },
  {
    slug: "allonnes",
    nom: "Allonnes",
    codePostal: "49650",
    lat: 47.3069,
    lng: 0.0081,
    agence: "doue",
    distanceKm: 28,
    metaTitle: "Menuisier à Allonnes (49) — Fenêtres, portes & volets | Fenêtres sur Loir",
    metaDescription:
      "Fenêtres, portes et volets sur mesure à Allonnes, à l'est de Saumur près du lac de Rillé. Artisan RGE, rénovation et neuf. Devis gratuit et conseil personnalisé.",
    intro:
      "À l'est de Saumur, aux portes de la Touraine et près des étangs, Allonnes est un bourg rural entouré de plaines et de forêts. Nous y intervenons en rénovation comme pour les constructions neuves.",
    body: [
      "Sur les maisons anciennes du bourg, en tuffeau, nous soignons des menuiseries bien proportionnées qui respectent l'architecture locale tout en améliorant nettement l'isolation.",
      "Dans les lotissements et les maisons récentes, nous posons des fenêtres performantes, de larges baies vitrées et des volets motorisés selon les projets.",
    ],
    quartiers: ["Le Bourg", "Les Loges", "Préban", "La Brèche"],
    faq: [
      {
        question: "Allonnes, à l'est du département, est-elle dans votre zone ?",
        reponse:
          "Oui, ce secteur à l'est de Saumur fait partie de notre zone d'intervention. Nous organisons nos déplacements pour la prise de mesures, la pose et le SAV depuis notre agence de Doué-en-Anjou.",
      },
    ],
  },
  {
    slug: "montreuil-bellay",
    nom: "Montreuil-Bellay",
    codePostal: "49260",
    lat: 47.1295,
    lng: -0.1246,
    agence: "doue",
    distanceKm: 16,
    metaTitle: "Menuisier à Montreuil-Bellay (49) — Fenêtres & portes | Fenêtres sur Loir",
    metaDescription:
      "Menuiseries sur mesure à Montreuil-Bellay, cité médiévale du Saumurois. Artisan RGE attentif au patrimoine et aux contraintes ABF. Devis gratuit sous 48 h.",
    intro:
      "Au sud de Saumur, dominant le Thouet, Montreuil-Bellay est l'une des plus belles cités médiévales d'Anjou, avec son château, ses remparts et son bâti de tuffeau. Un patrimoine qui exige des menuiseries soignées.",
    body: [
      "Dans la ville close et aux abords du château, chaque menuiserie est étudiée pour respecter les prescriptions de l'Architecte des Bâtiments de France : matériaux, teintes, petits-bois et systèmes d'ouverture.",
      "Sur le tuffeau du Saumurois, nous privilégions le bois et le bois-alu aux fines partitions, qui préservent l'esthétique historique tout en apportant le confort thermique d'aujourd'hui.",
    ],
    quartiers: ["La Ville Close", "Le Faubourg", "Méron", "Le Coudray-Macouard"],
    abf: true,
    abfNote:
      "Le château, les remparts et la ville close de Montreuil-Bellay placent une grande partie de la cité en périmètre ABF : nous montons le dossier et proposons des menuiseries conformes aux prescriptions patrimoniales.",
    faq: [
      {
        question: "Mes fenêtres à Montreuil-Bellay doivent-elles respecter des règles ABF ?",
        reponse:
          "Dans la ville close et aux abords du château, oui. Nous maîtrisons ces contraintes : nous constituons le dossier et proposons des menuiseries conformes aux exigences de l'ABF, sans renoncer au confort.",
      },
    ],
  },
];

export const getCommune = (slug: string): Commune | undefined =>
  communes.find((c) => c.slug === slug);

/** Communes groupées par agence de rattachement (hub + footer). */
export const communesParAgence = (agence: AgenceRattachement): Commune[] =>
  communes.filter((c) => c.agence === agence);
