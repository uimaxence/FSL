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
];

export const getCommune = (slug: string): Commune | undefined =>
  communes.find((c) => c.slug === slug);

/** Communes groupées par agence de rattachement (hub + footer). */
export const communesParAgence = (agence: AgenceRattachement): Commune[] =>
  communes.filter((c) => c.agence === agence);
