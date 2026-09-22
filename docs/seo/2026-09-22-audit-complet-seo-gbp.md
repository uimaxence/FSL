# Audit SEO complet — 22 septembre 2026

Audit à 360° de fenetres-sur-loir.fr mené le 22/09/2026, huit jours après le point du 14/09.
Il ne refait pas les optimisations précédentes (voir `2026-09-01-optimisation-seo-geo.md` et
`2026-09-14-analyse-seo-article-volet-bloque.md`) : il dresse l'état complet du site, des deux
fiches Google Business Profile et de l'environnement concurrentiel, puis propose un plan
d'action priorisé. Aucune modification du site n'a été faite dans le cadre de cet audit.

## Sources et méthode

| Axe | Outil | Détail |
|---|---|---|
| Positions, concurrents, mots-clés | DataForSEO Labs (France, fr) | rank overview, historique 6 mois, mots-clés classés (FSL + 3 concurrents), keyword overview de 61 requêtes cibles, pages pertinentes, concurrents de domaine |
| SERP du jour | DataForSEO SERP live (desktop) | « menuisier angers », « fenetre angers », « porte de garage angers » (Angers) ; « fenetre pvc maine et loire », « volet roulant bloqué », `site:` (France) ; « menuisier saumur », « menuisier doué la fontaine » (Saumur) |
| Netlinking | DataForSEO Backlinks | résumé, domaines référents, ancres, backlinks (1/domaine), rank et spam score de 14 domaines locaux, intersections |
| Fiches Google | DataForSEO Business Data | 2 fiches FSL + 19 fiches concurrentes (catégories « installation de fenêtres » et « charpentier/menuisier » à 25 km d'Angers), packs locaux des SERP |
| Technique | Crawl maison des 66 URL du sitemap, `curl` prod, DataForSEO OnPage (4 pages), Lighthouse desktop (2 pages) | title, description, H1, canonical, robots, alt, JSON-LD, mots, liens internes entrants |
| Search Console | export 12 mois (au 03/09/2026) | marque vs hors marque, pages normalisées |
| GEO | DataForSEO AI Optimization | base de mentions LLM (ChatGPT) + 4 réponses live (ChatGPT gpt-5-mini web, Perplexity sonar) |

Limites : PageSpeed Insights mobile n'a pas pu être lancé (quota API journalier épuisé),
seul Lighthouse desktop est disponible ; l'endpoint DataForSEO « keywords for site » a renvoyé
des requêtes génériques sans rapport (météo, le bon coin…) et n'a pas été exploité.

## 1. Synthèse

**Ce qui va bien**
- Technique saine : 66 pages en 200, canonical et trailing slash cohérents, 308 http→https /
  apex→www / slash natifs, `vercel.json` du 14/09 **vérifié en prod** (les 21 anciennes URL
  redirigent bien vers leur cible, plus aucun 404). Lighthouse desktop 96-98 en performance,
  100 en SEO et bonnes pratiques. `robots.txt`, sitemap et `llms.txt` corrects.
- Données structurées complètes (Organization, 2 LocalBusiness, Service, FAQPage, BreadcrumbList,
  BlogPosting, AggregateRating) sans erreur de parsing.
- Les optimisations de septembre commencent à être vues : DataForSEO ne comptait que
  **2 mots-clés classés en juillet, 6 en août, 12 aujourd'hui** (9 nouveaux). La page fenêtres est
  **5ᵉ en organique sur « fenêtre pvc maine et loire »** et la fiche Seiches est **2ᵉ du pack local**
  sur cette même requête.
- Fiche Google de Seiches très solide : 4,8/5 sur 139 avis, contre 10 à 22 avis pour les trois
  fiches du pack « menuisier angers ».
- Perplexity cite déjà Fenêtres sur Loir (3ᵉ sur 4 entreprises) pour « menuisier fenêtres RGE
  Angers », avec `/menuisier-angers/` comme source.

**Ce qui bloque**
- **Dépendance à la marque** : sur 12 mois, 589 clics marque contre **32 clics hors marque pour
  21 083 impressions** (CTR 0,15 %). Le site est vu en page 1-2 mais pas cliqué.
- **Aucune page produit localisée** alors que les concurrents qui prennent les places
  (Atlantique Ouvertures, ACB, AL Menuiseries) le font avec `/fenetre-angers/`,
  `/installation-portail/`, `/installation-portes-garage/`.
- **Fiches Google sous-exploitées** : catégories incomplètes (Doué n'a qu'une catégorie),
  services génériques voire hors sujet (« clôtures », « dressings »), description sans mot-clé
  ni ville, lien site en `http://` sans suivi, aucune fiche ne propose « devis en ligne ».
  Doué : 8 avis et 19 photos, invisible sur Saumur.
- **Netlinking faible et pollué** : 54 domaines référents, rank 15/100 (au niveau des artisans
  locaux), mais **une vingtaine de liens spam** apparus depuis janvier 2026 (ancre « High
  Quality Dofollow Backlinks DA 50 PA 40 Premium PBN… », spam score 50-70).
- **On-page perfectible** : 37 titles de plus de 65 caractères (jusqu'à 102), 31 meta
  descriptions de plus de 165 caractères (jusqu'à 254), H1 de la home sans mot-clé, image
  hero sans `alt`, 30 redirections Astro encore en 200 + meta-refresh, HTML de la home à
  281 Ko dont 149 Ko de SVG inline.
- **GEO** : 0 mention dans la base ChatGPT ; ChatGPT ne cite pas FSL (Angers ni Saumur), et
  l'article « volet roulant bloqué » n'est pas encore cité sur la requête Bubendorff.

**Cinq actions à plus fort levier** (détail § 8)
1. Refaire les deux fiches Google (catégories, services, attributs, liens UTM, description,
   posts salon) et lancer la collecte d'avis à Doué : 0 développement, effet en 2-4 semaines.
2. Créer `/fenetres-angers/` (≈ 2 400 impressions/an déjà captées par `/menuisier-angers/`
   en positions 9-27) et localiser « Angers » dans les titles/H1 des pages portails et carports.
3. Migrer les 30 redirections Astro en 301 `vercel.json`, raccourcir les 15 pires titles /
   descriptions, corriger l'alt du hero et le H1 de la home.
4. Article dédié « Réinitialiser un volet roulant Bubendorff » (740 recherches/mois, requêtes
   navigationnelles que personne ne traite localement) + article « régler une fenêtre PVC ».
5. Netlinking propre : récupérer les liens des mentions sans lien (Écho de la Baie, Rives de
   Blues), annuaires RGE (Qualibat, France Rénov', argile.ai), presse locale autour du salon.

## 2. Visibilité organique

### 2.1 Search Console, 12 mois (au 03/09/2026)

| | Clics | Impressions | CTR |
|---|---|---|---|
| Requêtes marque (« fenêtre(s) sur/du Loir », « jereli ») | 589 | 4 568 | 12,9 % |
| Requêtes hors marque | 32 | 21 083 | 0,15 % |

Poches d'impressions hors marque (page qui sort, position moyenne) :

| Requête | Imp. | Pos. | Page |
|---|---|---|---|
| fenetre maine et loire / fenêtre maine-et-loire | 1 130 + 112 | 3,9 | home |
| menuisier angers / menuiserie angers / menuisier à angers | 906 + 395 + 141 | 17,6-21 | /menuisier-angers/ |
| fenetre pvc maine et loire / fenetre pvc 49 / fenetre 49 | 695 + 676 + 694 | 8,5-12,4 | /fenetres/ |
| volets et menuiseries 49 | 566 | 7,9 | home |
| fenêtre angers / fenetre angers / fenetre sur mesure a angers | 344 + 333 + 187 | 22-27 | /menuisier-angers/ |
| devis / pose / changer fenetre angers | 271 + 217 + 184 + 142 + 162 | 6,9-18,6 | /menuisier-angers/ |
| fenetre pvc angers / fenetre aluminium à angers / menuiserie aluminium angers | 264 + 101 + 186 | 16-24 | /menuisier-angers/ |
| porte de garage angers / 49 / maine et loire | 156 + 120 + 110 | 49-60 | /porte-garage/ (réécrite le 14/09) |
| menuisier cholet / fenetre saumur / porte d'entrée angers | 176 / 175 / 174 | 18,6 / 29,9 / 19,9 | pages villes, portes d'entrée |
| portail alu maine et loire | 172 | 24,7 | portails |

Lecture : environ **2 400 impressions/an de requêtes « fenêtre + Angers »** atterrissent sur la
page ville `/menuisier-angers/` en positions 9-27. C'est le cas d'école d'une page produit
localisée manquante (§ 3).

### 2.2 Base DataForSEO (France, septembre 2026)

Historique : avril 7 mots-clés classés → juillet **2** → août 6 → septembre **12** (9 nouveaux).
Trafic organique estimé ≈ 546 visites/mois dont 535 sur la marque.

| Mot-clé | Vol./mois | KD | Pos. | Page |
|---|---|---|---|---|
| fenêtres sur loir / fenetres sur loir | 880 + 880 | — | 1 | home |
| menuisier angers / menuiserie angers | 880 + 880 | 6 | 26 | /menuisier-angers/ |
| menuisier cholet / menuiserie cholet | 480 + 480 | — | 16 / 18 | /menuisier-cholet/ |
| fenetres angers / fenetre angers | 140 + 140 | 4-7 | 20 / 27 | /menuisier-angers/ |
| menuisier 49 / menuiserie 49 | 90 + 90 | — | 7 / 18 | /menuisier-angers/ |
| menuisier / menuiserie doué la fontaine | 70 + 70 | — | 13 / 10 | /menuisier-doue-en-anjou |
| fenêtre(s) cholet (4 variantes) | 70 ×4 | — | 12-14 | /menuisier-cholet/ |

Les positions DataForSEO sont plus pessimistes que la GSC (échantillonnage national), mais
l'ordre est le même : Angers en page 2-3, Cholet et Doué en page 2, département en page 1.

### 2.3 SERP du jour (22/09/2026)

| Requête (localisation) | Pack local | Organique | FSL |
|---|---|---|---|
| menuisier angers (Angers) | l'atelier (4,8/18), Fenêtre & Confort Janneau (5/20), Ateliers Michel (4,9/10) | Brossard, AlloVoisins, menuisier.info, Atelier Richet, Menuisiers Réunis, France Travail, Janneau, Indeed, Travaux.com, Atelier Lacour | absent du top 10 (base : 26) |
| fenetre angers (Angers) | Fenêtre & Confort, Rénov' Fermetures, Fenêtres d'Anjou | **Atlantique Ouvertures `/fenetre-angers/`**, Bouvet, Art & Fenêtres, PagesJaunes, **ACB**, Arnaud Ménard, Lorenove, 123pages, **FSL 9ᵉ** (`/menuisier-angers/`), Janneau | 9ᵉ |
| fenetre pvc maine et loire (France) | Fenêtrier de l'Anjou, **FSL 2ᵉ** (4,8/139), RT Renov' | Bouvet, ACB `/fenetre-pvc-angers/`, Art & Fenêtres, PagesJaunes, **FSL 5ᵉ** (`/fenetres/`), Dutertre, arti-fenetrepvc, Lorenove, Isoclar, Atlantique Ouvertures | pack 2ᵉ + organique 5ᵉ |
| porte de garage angers (Angers) | Metal 2000, Fermetal, Komilfo (4,3/203) | Fenêtres d'Anjou, Fermetures Angevines, Lorenove, Ateliers Michel, Novoferm, Monsieur Store, PM Fermetures, AL Menuiseries, Atelier Richet, Eldo | absent (page réécrite il y a 8 jours) |
| volet roulant bloqué (France) | — (vidéos, PAA, shorts) | volet-system, mesdepanneurs, **SAS Riffault**, allo-volet-service, brico-volet, removo, reparstores | absent (article publié il y a 8 jours) |
| menuisier saumur (Saumur) | Pabam, Isoclar Saumur, Cailleaud, Clin, AR Menuiserie (Arcades & Baies Saumur), Octopus | Dallancon, G2M, Travaux.com, PagesJaunes, Art & Fenêtres, Clin, Cailleaud, Janneau, AlloVoisins, Facebook Clin | absent |
| menuisier doué la fontaine (Saumur) | Davy Julien (4,7/16), Vinconeau-Delaunay (4,6/12), Fouquet (5/5), **FSL Doué 4ᵉ** (5/8), Guillet, Hersard | Janneau, menuisier.info, Guillet, Travaux.com, **FSL 5ᵉ** | pack 4ᵉ + organique 5ᵉ |

Enseignements :
- Sur « menuisier angers », l'intention est mixte (agencement, emploi, annuaires). Le pack local
  est tenu par des fiches **situées dans Angers** avec 10-20 avis. La fiche Seiches (22 km) ne
  peut pas y entrer sur la distance ; le levier reste l'organique (`/menuisier-angers/`, pos. 17-26).
- Sur « fenêtre + Angers », les deux premiers organiques sont des **pages produit locales**
  dédiées. FSL y répond avec une page ville générique : 9ᵉ.
- Sur le département (« fenêtre pvc maine et loire »), FSL est déjà bien placé partout
  (pack + organique) : à consolider, pas à retravailler.
- Le pack « porte de garage angers » est occupé par des dépanneurs de rideaux métalliques :
  c'est l'organique qui compte, et les pages qui sortent sont toutes des pages dédiées.
- Doué : la fiche entre dans le pack (4ᵉ) avec 8 avis face à 5-16 avis. **10 avis de plus la
  mettraient dans le top 3.**

### 2.4 Concurrents

Les « concurrents de domaine » calculés par DataForSEO sont surtout des annuaires (PagesJaunes,
menuisier.info, 118712, Mappy, Travaux.com, StarOfService, AlloVoisins) plus Janneau et Art &
Fenêtres. Les concurrents artisans réellement comparables :

| Domaine | Rank liens (0-100) | Spam | Mots-clés classés | Ce qui marche chez eux |
|---|---|---|---|---|
| **fenetres-sur-loir.fr** | **15** | 29 | 12-16 | marque, département |
| lesateliersmichel.fr | 14 | 51 | 48 | guides « quel escalier / parquet / porte de garage choisir », pages portail et fenêtres Angers (pos. 6-19) |
| al-menuiseries.com | 17 | 43 | 16 | pages service dédiées : stores angers 3ᵉ, portail angers 6ᵉ, pergola angers 7ᵉ, **porte de garage angers 5ᵉ**, installation portail 2ᵉ |
| sas-riffault.fr | 10 | — | 208 | **un seul article** « volet roulant bloqué » classé sur ~60 requêtes de 260 à 1 900 rech./mois (pos. 2-5) |
| fenetres-anjou-49.fr (Janneau) | 28 | — | — | pages produit par ville |
| atelier-richet.com | 31 | 22 | — | pages `/porte-de-garage-sectionnelle/angers` |
| atelierlacour.fr / menuiserie-brossard.com | 19 / 23 | — | — | home optimisée « menuisier à Angers » |
| clin-menuiserie.fr | 30 | — | — | Saumur |

FSL est au niveau d'autorité des artisans qui le devancent : l'écart n'est pas le netlinking,
c'est l'absence de pages dédiées et de contenu problème/solution.

## 3. Mots-clés : volumes actualisés (DataForSEO, France, sept. 2026)

### 3.1 Local

| Mot-clé | Vol. | KD | Pic | CPC | Page FSL actuelle |
|---|---|---|---|---|---|
| menuisier angers / menuiserie angers | 880 | 6 | mars 1 600 | 1,84 € | /menuisier-angers/ |
| menuisier cholet / menuiserie cholet | 480 | — | mars 720 (-56 %/an) | 2,76 € | /menuisier-cholet/ |
| menuisier saumur / menuiserie saumur | 210 | — | mars 320 | 2,81 € | /menuisier-saumur/ |
| fenetre angers | 140 | 4 | sept. 480 | 6,84 € | aucune page dédiée |
| **portail angers** | 140 | — | sept. 390 | **12,63 €** | portails (title non localisé Angers en tête) |
| pergola angers | 140 | — | sept. 480 | 4,53 € | aucune (service à confirmer) |
| store banne angers | 110 | — | sept. 390 | 3,72 € | aucune (service à confirmer) |
| volet roulant angers | 90 | — | sept. 320 | 5,11 € | volets (localisée le 14/09) |
| menuisier 49 | 90 | — | mars 320 | 1,65 € | /menuisier-angers/ (pos. 7) |
| porte de garage angers | 70 | — | sept. 390 (**+100 %/an**) | 2,43 € | porte-garage (réécrite 14/09) |
| menuiserie aluminium angers | 70 | — | mars 210 | **9,26 €** | aucune |
| carport angers | 70 | — | sept. 320 | 2,37 € | carports-marquises |
| fenetre cholet / fenetre saumur | 70 / 50 | — | sept. 390 / 260 | 6,40 € / 5,07 € | pages villes |
| menuisier doué la fontaine | 70 | — | fév. 90 | 3,09 € | /menuisier-doue-en-anjou/ |
| pose fenetre angers / fenetre pvc angers / porte d'entrée angers | 50 / 50 / 50 | — / — / 41 | sept. | 4,30 € / — / 4,80 € | /menuisier-angers/, portes-entree |
| veranda angers | 50 | — | mars 140 | 8,30 € | aucune (service absent) |

Saisonnalité nette : **pics en mars et en septembre** (× 2 à × 3). Les pages locales doivent
être en place avant février pour le prochain pic.

### 3.2 Produit et informationnel (national, à traiter par les pages solutions et le blog)

| Mot-clé | Vol. | KD | Pic | Levier |
|---|---|---|---|---|
| porte d'entrée sur mesure | 1 900 | **1** | sept. 2 900 | page portes d'entrée (title actuel ne contient pas « sur mesure » en tête) |
| condensation fenêtre | 1 600 | — | **nov. 8 100** | article rafraîchi le 14/09 : suivre |
| réglage fenêtre pvc | 1 000 | — | nov. 1 600 | article n°2 (prévu) |
| fenetre bois alu | 880 | — | sept. 1 600 | article MéO existant (1 500 mots, sans BlogPosting) |
| fenêtre pvc ou alu | 720 | **1** | mars 1 000 | article comparatif (1 083 mots, pos. 44-54) à renforcer |
| réinitialiser volet roulant bubendorff + bubendorff bloqué | 480 + 260 | — | — | **article dédié** (voir § 7) |
| verrière intérieure | 1 300 | 20 | janv. 1 600 | page verrières |
| baie vitrée coulissante | 8 100 | 6 | août 9 900 | page baies (déjà bien placée localement) |
| fenetre de toit / puits de lumière | 9 900 / 6 600 | 7 / — | — | page puits de lumière (742 mots) |
| carport alu / carport bois | 6 600 / 22 200 | 12 / — | mars-mai | page carports (675 mots) |
| porte d'entrée alu / pvc | 8 100 / 8 100 | 8 / — | mars | page portes d'entrée |

## 4. Fiches Google Business Profile

### 4.1 État des deux fiches (base DataForSEO, actualisée par les SERP du jour)

| | Seiches-sur-le-Loir | Doué-en-Anjou |
|---|---|---|
| Nom | Fenêtres sur Loir | Fenêtres sur Loir - Doué-en-Anjou |
| Catégorie principale | Menuisier (`woodworker`) | Menuisier |
| Catégories secondaires | Fenêtres en aluminium, Fournisseur de portes de garage | **aucune** |
| Note / avis | 4,8 / **139** (123 ×5, 3 ×4, 3 ×3, 6 ×1) | 5,0 / **8** |
| Photos | 72 | 19 |
| Adresse | 287 Rue de L'innovation, 49140 Seiches-sur-le-Loir (= site) | 7 Rue Saint-François, 49700 Doué-en-Anjou (= site) |
| Téléphone | +33 2 41 77 04 08 (= site) | +33 7 66 52 24 00 (= site) |
| Lien site | `http://www.fenetres-sur-loir.fr/` | `https://www.fenetres-sur-loir.fr/` (home, pas la page agence) |
| Horaires | Lun-ven 9h-12h / 14h-18h30, sam 9h-12h (= site) | idem |
| Services déclarés | « Fencing construction », « Wardrobe construction », « Installation » (pose bois/alu, PVC, alu, bois), « Dépannage de menuiserie » | Installation, Rénovation menuiseries, Installations de menuiseries, SAV menuiseries, Dépannage menuiseries |
| Attributs | accès PMR (parking, entrée, sièges, WC), services sur place ; **« devis en ligne » et « rendez-vous en ligne » non renseignés** | parking PMR seulement |
| Description | « Depuis janvier 2003… réhabilitation des menuiseries extérieures… » : aucun produit nommé, aucune ville, ni RGE, ni MéO/Bubendorff | idem, orientée « nouveau magasin » |
| Sujets d'avis détectés par Google | poseur (19), remplacement de fenêtres (8), volets (5), rénovation (5), délais (5), qualité de pose (4), terrasse/pergola (7), baies (4) | équipe (2), porte (4) |
| Revendiquée | oui | oui |

NAP : cohérent entre site, `llms.txt`, JSON-LD et fiches. Un mobile `07 77 92 71 14` circule
dans les annuaires (source « backlinks » de DataForSEO) sans être sur le site : à vérifier et
harmoniser sur les annuaires si ce numéro n'est plus utilisé.

Dans la GSC, l'URL `http://www.fenetres-sur-loir.fr/?utm_source=gmb` cumule 2 211 impressions
et 66 clics sur 12 mois : le lien de la fiche a été (ou est) en `http` avec un paramètre UTM
non standard. Le canonical absorbe le doublon, mais le suivi Analytics est brouillé.

### 4.2 Ce que font les fiches qui prennent les packs

Catégories les plus fréquentes chez les 19 fiches concurrentes autour d'Angers : Service
d'installation de fenêtres (9), Fournisseur de fenêtres (5), Fournisseur de portes (5),
Menuiserie (5), Constructeur de carports et pergolas (4), Fournisseur de portes de garage (3),
Fenêtres en aluminium (3), Magasin de fenêtres en PVC (3). Fenêtre & Confort Janneau (1ᵉʳ du pack
« fenetre angers » avec 20 avis) cumule Menuisier + Fenêtres en aluminium + Menuiserie +
Magasin de fenêtres en PVC. Les gros volumes d'avis (Isoclar 249, À Ciel Ouvert 262, Komilfo
203) sont des enseignes ; parmi les artisans, FSL est déjà premier en nombre d'avis.

### 4.3 Recommandations fiches (à faire par le client ou avec son accès)

Seiches-sur-le-Loir :
1. **Catégories secondaires** à ajouter : Service d'installation de fenêtres, Fournisseur de
   fenêtres, Fournisseur de portes, Constructeur de carports et pergolas, Magasin de fenêtres en
   PVC, Menuiserie. Garder « Menuisier » en principale.
2. **Services** : supprimer « clôtures » et « dressings » (suggestions automatiques hors métier) ;
   créer un service par produit avec une description de 2 lignes : fenêtres PVC / alu / bois-alu
   MéO, portes d'entrée, volets roulants Bubendorff (Point Conseil), baies vitrées, portes de
   garage, portails alu, carports et marquises, verrières et puits de lumière, SAV volets
   Bubendorff posés par FSL. Sans prix (règle client).
3. **Attributs** : activer « Devis en ligne » et « Rendez-vous en ligne » (le formulaire du site
   les permet), « Entreprise identifiée comme ... » selon les options proposées.
4. **Description** (750 caractères) : nommer les produits, « Angers », « Maine-et-Loire »,
   « Saumur », RGE Qualibat, MéO Menuisier d'Excellence, Point Conseil Bubendorff, depuis 2003,
   pose sans sous-traitance, deux agences.
5. **Lien site** : `https://www.fenetres-sur-loir.fr/?utm_source=google&utm_medium=organic&utm_campaign=gbp-seiches`
   ; lien « Rendez-vous » vers `/contact/` avec le même UTM.
6. **Posts** : 1 post cette semaine sur le Salon Habitat Angers (25-28/09, jeu-concours porte
   d'entrée), puis 2 posts/mois (réalisation, conseil saisonnier lié à un article du blog).
7. **Photos** : ajouter 10 photos de chantiers récents avec légende produit + commune ;
   photo de couverture = façade du showroom.
8. **Questions-réponses** : poser et répondre soi-même à 5 questions issues des FAQ du site
   (zone d'intervention, délais, aides, matériaux, SAV).
9. **Avis** : demander systématiquement l'avis en fin de chantier (QR code
   `search.google.com/local/writereview?placeid=ChIJ4Vy4HMByCEgRhAhUQ-jXGtQ` sur le PV de
   réception) ; répondre aux 6 avis à 1 étoile s'ils ne le sont pas. Objectif : + 4 avis/mois
   (rythme actuel ≈ 2).

Doué-en-Anjou :
1. **Catégories** : ajouter Service d'installation de fenêtres, Fenêtres en aluminium,
   Fournisseur de portes, Fournisseur de portes de garage, Menuiserie.
2. **Lien site** vers `https://www.fenetres-sur-loir.fr/agences/doue-en-anjou/?utm_source=google&utm_medium=organic&utm_campaign=gbp-doue`.
3. **Avis** : priorité absolue, objectif 20 avis avant fin 2026 (QR code
   `…writereview?placeid=ChIJ4d1u_CPrB0gR5lxdDvuOcyU`, à mettre sur les devis de l'agence).
4. **Photos** : passer de 19 à 40 (showroom, équipe, chantiers du Saumurois nommés).
5. **Description** : mentionner Saumur, Doué-en-Anjou, Montreuil-Bellay, Gennes, Cholet,
   « agence ouverte en 2026 », mêmes labels.
6. Services et attributs : reproduire Seiches.

## 5. Technique et on-page

### 5.1 Vérifié en production le 22/09

- `http://`, apex et `/page` sans slash : 308 vers `https://www.…/page/` (Vercel natif).
- `fsl-iota.vercel.app` : 308 vers le domaine (pas d'indexation du preview).
- Redirections `vercel.json` du 14/09 : `/fr/16/…` → `/solutions/portes-fenetres/porte-garage/`,
  `/fr/27/…` → `/solutions/confort-exterieur/`, `/fr/40/…` → `/entreprise/notre-histoire/`,
  `/porte-de-garage` → porte-garage, `/verrieres` → verrières : **toutes en 308 → 200**, en
  deux sauts (ajout du slash puis redirection). Acceptable ; on peut déclarer les sources avec
  slash en premier dans `vercel.json` pour n'avoir qu'un saut.
- **Redirections Astro encore en 200 + meta-refresh** : `/notre-histoire/` (295 impressions GSC),
  `/nos-realisations/`, `/blog/menuisier-cholet/` (171 imp.), `/menuisier-beaupreau-en-mauges/`
  (38 imp.), `/nos-realisations/angers/` et les 16 anciennes communes. Google continue de les
  indexer (`site:` remonte encore `/menuisier-tierce`, `/partenaires`, `/partenaires/meo` sans
  slash). À migrer en 301 dans `vercel.json`.
- Sitemap : 66 URL, pas de `lastmod` (choix), `/test-cachet/` exclu, `/salon-habitat-angers-2026/`
  présent (à rediriger après le 28/09).
- `llms.txt` : 79 lignes, identité complète (SIREN/SIRET, avis agrégés, réseaux, agences).
- `robots.txt` : tous les crawlers IA autorisés, sitemap déclaré.
- En-têtes : HSTS présent ; pas de CSP ni de `X-Content-Type-Options` (hors SEO, pour mémoire).

### 5.2 Performance

| Page (Lighthouse 13.4, desktop) | Perf. | Access. | BP | SEO | LCP | Poids |
|---|---|---|---|---|---|---|
| Home | 96 | 96 | 100 | 100 | 1,24 s | 1,27 Mo |
| /menuisier-angers/ | 98 | 96 | 100 | 100 | 1,07 s | 0,82 Mo |

DataForSEO OnPage : score 97/100 sur home, Angers, fenêtres ; 95 sur l'article volet (title trop
long). Deux feuilles de style bloquantes, CLS 0.

Le HTML de la home pèse **281 Ko**, dont **149 Ko de SVG inline** (135 SVG ; la carte du
département seule fait 111 Ko). Passer la carte en `<img src="….svg">` ou la simplifier
(précision des tracés) diviserait le HTML par deux et améliorerait le mobile.

PageSpeed mobile n'a pas pu être mesuré (quota). À faire manuellement sur
pagespeed.web.dev pour home, `/menuisier-angers/` et un article, et lire le rapport
« Signaux Web essentiels » de la GSC.

### 5.3 Crawl des 66 pages

- 66 × 200, canonical = URL, 1 H1 par page, `og:image` partout, aucun `noindex`, tous les liens
  internes en forme `/page/` (aucun lien sans slash restant).
- **Titles > 65 caractères : 37 pages** (Google coupe vers 60). Les pires :

| Long. | Page | Title actuel | Proposition (≤ 60) |
|---|---|---|---|
| 102 | /volets/ | Volets roulants à Angers & Maine-et-Loire — Solaires, électriques, battants \| Point Conseil Bubendorff | Volets roulants à Angers & 49 — Point Conseil Bubendorff |
| 99 | /confort-exterieur/ | Confort extérieur sur mesure \| Portails, carports, marquises, brise-vues — Fenêtres sur Loir Angers | Portails, carports, brise-vues sur mesure — Angers (49) |
| 97 | /partenaires/bubendorff/ | Bubendorff — Point Conseil à Angers \| Volets roulants solaires et électriques — Fenêtres sur Loir | Bubendorff — Point Conseil volets roulants à Angers |
| 97 | /carports-marquises/ | Carports & Marquises sur mesure \| Fenêtres sur Loir — Protégez-vous des intempéries près d'Angers | Carport et marquise sur mesure à Angers (49) |
| 93 | /blog/ouverture-agence…/ | Menuiserie à Doué-en-Anjou : Fenêtres sur Loir ouvre sa nouvelle agence ! — Fenêtres sur Loir | Nouvelle agence menuiserie à Doué-en-Anjou — Fenêtres sur Loir |
| 92 | /realisations/ | Nos réalisations \| Fenêtres sur Loir — Projets menuiserie à Angers et dans le Maine-et-Loire | Réalisations menuiserie — Angers & Maine-et-Loire |
| 91 | /agences/seiches-sur-le-loir/ | Agence & showroom de Seiches-sur-le-Loir (49) \| Fenêtres sur Loir — Menuisier près d'Angers | Showroom de Seiches-sur-le-Loir (49) — Fenêtres sur Loir |
| 91 | /blog/fenetres-bois-alu-meo/ | Fenêtres bois-alu MéO à Angers & Doué-en-Anjou \| Menuisier d'Excellence — Fenêtres sur Loir | Fenêtres bois-alu MéO à Angers — Menuisier d'Excellence |
| 87 | /portails-portillons/ | Portails & Portillons aluminium sur mesure \| Fenêtres sur Loir — Angers & Doué-en-Anjou | Portail aluminium sur mesure à Angers (49) — Portillons |
| 86 | /agences/doue-en-anjou/ | Agence de Doué-en-Anjou (49) \| Fenêtres sur Loir — Menuisier RGE Saumurois & Choletais | Agence de Doué-en-Anjou (49) — Menuisier RGE Saumurois |
| 86 | /porte-garage/ | Porte de garage à Angers (49) — Sectionnelle, enroulable, latérale \| Fenêtres sur Loir | Porte de garage à Angers (49) — Sectionnelle, enroulable |
| 84 | /porte-fenetre/ | Porte-fenêtre sur mesure \| Fenêtres sur Loir — Spécialiste depuis 2003 près d'Angers | Porte-fenêtre sur mesure PVC, alu, bois — Angers (49) |
| 82 | /portes-interieures/ | Portes intérieures sur mesure \| Faites le choix de Fenêtres sur Loir près d'Angers | Portes intérieures sur mesure — Angers & Maine-et-Loire |
| 81 | /solutions/portes-fenetres/ | Fenêtres sur Loir : expert portes & fenêtres sur mesure depuis 2003 près d'Angers | Portes & fenêtres sur mesure — Angers & Maine-et-Loire |
| 80 | /entreprise/notre-histoire/ | Notre histoire \| Fenêtres sur Loir — Menuisier à Seiches-sur-le-Loir depuis 2003 | Notre histoire — Menuisier à Seiches-sur-le-Loir depuis 2003 |

  Les articles de blog (71-85) peuvent garder le suffixe « — Fenêtres sur Loir » : Google
  affiche le nom du site séparément. Le title de `/blog/fenetrier-maine-et-loire/` contient
  deux fois « Fenêtres sur Loir ».
- **Meta descriptions > 165 caractères : 31 pages** (articles volet 254 et condensation 253,
  salon 227, agence Doué 218, volets 216, portails 209, confort extérieur 204, agences 200,
  porte de garage 195…). Mentions légales (46) et cookies (50) trop courtes, sans enjeu.
- **H1 de la home** : « Fenêtres sur Loir habille depuis plus de 20 ans les plus belles maisons
  du Maine-et-Loire. » — aucun mot-clé métier. Proposition : « Fenêtres, portes et volets sur
  mesure en Maine-et-Loire depuis 2003 » en H1, l'accroche actuelle en sous-titre.
- **Images** : le hero de la home (image LCP) a un `alt` vide ; le logo MéO sur les 8 pages
  solutions a un `alt` vide (mettre « MéO — Menuisier d'Excellence ») ; l'oiseau décoratif est en
  `aria-hidden`, correct.
- **JSON-LD** : 3 articles sans `BlogPosting` (`fenetrier-maine-et-loire`, `fenetres-bois-alu-meo`,
  `ouverture-agence…`). Rappel : depuis 2023 Google n'affiche plus les extraits FAQ pour les
  sites commerciaux ; le balisage FAQPage reste utile pour les IA, pas pour la SERP.
- **Contenu** : pages réalisations à 449-480 mots, puits de lumière 742, carports 675, brise-vues
  684 ; article PVC/alu 1 083 mots pour 1 200 recherches/mois à KD 1.

### 5.4 Maillage interne (liens contextuels hors header, nav et footer)

| Page | Liens entrants contextuels |
|---|---|
| /agences/seiches-sur-le-loir/ | 1 |
| /blog/fenetrier-maine-et-loire/, /blog/ouverture-agence…/ | 1 |
| /agences/doue-en-anjou/, /blog/changer-fenetres-avant-hiver/, /realisations/precigne/ | 2 |
| /entreprise/notre-histoire/, /partenaires/, /solutions/confort-interieur/ | 1 (mais présents dans le menu) |
| articles condensation, volet bloqué, PVC/alu | 3-4 |
| pages villes | 5-10 |
| /menuisier-angers/ | 18 |
| fenêtres, portes d'entrée, baies, volets | 27-32 |
| /contact/ | 66 |

Les deux pages agences (celles qui portent le LocalBusiness et le lien fiche Google) et les
articles sont les moins liés. Actions : bloc « Votre agence » avec lien vers la page agence sur
chaque page ville (l'AgenceProche existe mais pointe-t-il vers `/agences/…/` ?), bloc « Nos
conseils » (3 derniers articles) sur les pages solutions, liens croisés entre articles.

## 6. Netlinking

Résumé DataForSEO : **54 domaines référents** (19 en nofollow), 83 backlinks, 70 pages
référentes, rank 94/1000 (15/100), spam score 29, premier lien vu en octobre 2021. Les liens
pointent quasi tous vers la home.

Liens de valeur (à conserver et à dupliquer) : fenetremeo.com (9 pages, dofollow, ancre
« Fenêtres sur Loir »), bni-anjou-croissance.fr (fiche membre), habitat-angers.com (exposant),
allorelais.fr, espace-competition.com et fc-pellouailles-corze.com (sponsoring), eldo.com,
argile.ai (annuaire RGE), cee.fr, fournisseur.tel, angers.maville.com et mavilleenpoche.fr
(nofollow), gowork.fr, woxup.fr.

**Spam** : une vingtaine de domaines apparus entre janvier et septembre 2026, dont 12 avec
l'ancre « High Quality Dofollow Backlinks DA 50 PA 40 Premium PBN Network Service
fenetres-sur-loir.fr… » (kernelpanicpodcast.com, fashionclothingnews.com, fittyfoody.com,
uncledspizza.com, quotesblom.com, plurio.shop, theforbestimes.com, betwinnermirror.com,
betulcrime.com, bazerdaily.com, ggmap.us.com, homesforsaleoldgreenwichct.com) et une dizaine de
sites « info domaine » (way2check.cv, ready.pro, anchorurl.cloud, buzzshrink.website,
global-rank.pages.dev, screenshots.wiki, quero.party, sites.jake.eu, five.co.in, sergechel.info,
globalecommerce.org, getwebsiteworth.com). C'est du spam automatique qui vise tous les domaines
(FSL n'a rien acheté). Google ignore ce type de liens ; **pas de désaveu** sauf action manuelle
signalée dans la GSC. À surveiller trimestriellement.

Mentions sans lien (DataForSEO Content Analysis) : interview de Nicolas Chéné sur
**lechodelabaie.fr** (2022, domaine rank 275 — le plus fort lien possible du dossier),
rivesdeblues.com (page partenaires 2026), associationdavid.org (expo-vente 2022),
guide-des-menuisiers.fr (fiche). Demander l'ajout d'un lien.

Opportunités (par ordre de facilité) :
1. Annuaires officiels : Qualibat (certificat public, utilisé comme source par ChatGPT),
   France Rénov' (annuaire RGE), CAPEB / FFB 49, CMA 49, réseau Arcades & Baies
   (page magasin), Bubendorff (localisateur Point Conseil), MéO (déjà).
2. Presse locale autour du salon et de l'agence de Doué : Ouest-France, Courrier de l'Ouest,
   Angers Mag, Saumur Kiosque (communiqué + photo).
3. Partenariats déjà existants sans lien : clubs sponsorisés, Rives de Blues, associations.
4. Fournisseurs : pages « nos revendeurs » de Bubendorff / Arcades & Baies / fabricants de
   portails et carports.

## 7. GEO — visibilité dans les réponses IA

- Base de mentions LLM DataForSEO (ChatGPT) : **0 mention** de fenetres-sur-loir.fr.
- Tests live du 22/09 :

| Question | Modèle | FSL cité ? | Qui est cité, avec quelles sources |
|---|---|---|---|
| Menuisier RGE pour remplacer mes fenêtres à Angers, 4 entreprises | Perplexity sonar | **oui, 3ᵉ/4** (source `/menuisier-angers/`) | Ateliers Michel, ACB, FSL, So'Menuiserie ; sources annexes : AlloVoisins, pro-rge.fr, argile.ai, rdvartisans.fr, lemenuisier.fr |
| idem | ChatGPT gpt-5-mini + web | non | Camut Perrot, Angers Design Fenêtres (via **certificat Qualibat PDF**), Isoclar, AMTD |
| Menuisier RGE près de Saumur / Doué pour fenêtres + porte d'entrée | ChatGPT gpt-5-mini + web | non | MVD Menuiserie, Jérôme Guillet, JRS Menuiserie |
| Volet Bubendorff bloqué en haut, que faire, qui contacter en 49 | Perplexity sonar | non | bubendorff.com (FAQ SAV), lecoindemaison.fr, storemenuiserie.com, volet-tech.fr, metallerie-grand-paris.com, HBHS ; réponse générique « contactez votre revendeur Bubendorff » |

Enseignements : les IA s'appuient sur (1) les pages locales qui répondent explicitement
« menuisier RGE à Angers », (2) les annuaires RGE (Qualibat, pro-rge.fr, argile.ai, rdvartisans),
(3) pour Bubendorff, des articles **dédiés à la marque**. L'article généraliste « volet roulant
bloqué » ne suffit pas pour la requête « Bubendorff bloqué ».

Actions GEO :
1. Publier le numéro de certificat Qualibat et le lien vers le certificat public dans
   `business.ts`, `llms.txt`, la page notre-histoire et les JSON-LD (`hasCredential`).
2. Article dédié « Volet roulant Bubendorff bloqué ou à réinitialiser : la procédure Point
   Conseil » (480 + 260 rech./mois, aucun artisan local dessus) avec les procédures officielles
   (coupure 7 s / 10-15 s / 7 s, remise des fins de course) et le périmètre SAV de FSL.
3. Page Doué et page Saumur : bloc de réponse directe « Fenêtres sur Loir est un menuisier RGE
   installé à Doué-en-Anjou, à 18 km de Saumur… » (le bloc existe sur Angers, le dupliquer).
4. S'inscrire / vérifier la fiche sur pro-rge.fr, argile.ai, rdvartisans.fr, lemenuisier.fr,
   guide-des-menuisiers.fr (sources citées).

## 8. Plan d'action priorisé

### Lot A — sans développement, cette semaine (client + accès GBP)
1. Fiches Google Seiches et Doué : § 4.3 en intégralité (catégories, services, attributs,
   description, liens UTM, post salon, photos, Q&R). Effort : 2 h. Effet : 2-4 semaines.
2. QR codes avis sur devis / PV de réception, objectif + 4 avis/mois Seiches, 20 avis Doué
   avant fin 2026.
3. Demander un lien à L'Écho de la Baie, Rives de Blues, clubs sponsorisés ; vérifier les
   inscriptions Qualibat / France Rénov' / Arcades & Baies / Bubendorff.
4. Communiqué de presse salon + jeu-concours (Ouest-France, Courrier de l'Ouest, Angers Mag).

### Lot B — corrections techniques et on-page (½ à 1 jour de dev)
1. Migrer les ~30 redirections Astro vers `vercel.json` (301), retirer le bloc `redirects` de
   `astro.config.mjs` ; déclarer les sources avec et sans slash.
2. Titles : appliquer le tableau § 5.3 (15 pages) ; le template villes est bon.
3. Descriptions : ramener à 150-160 caractères les 12 pages au-dessus de 190.
4. Home : H1 avec mot-clé, `alt` sur le hero, carte SVG en fichier externe (HTML 281 → ~130 Ko).
5. `alt` du logo MéO sur les pages solutions ; `BlogPosting` sur les 3 articles qui n'en ont pas.
6. Maillage : lien vers `/agences/…/` depuis chaque page ville, bloc « Nos conseils » sur les
   pages solutions, liens croisés entre articles.
7. Après le 28/09 : `/salon-habitat-angers-2026/` → compte-rendu ou 301 vers portes d'entrée.
8. Mesurer PageSpeed mobile et lire le rapport Signaux Web essentiels de la GSC.

### Lot C — contenu (octobre-novembre)
1. **`/fenetres-angers/`** (1 200 mots, FAQ, réalisations angevines, liens vers la page fenêtres
   départementale et `/menuisier-angers/`) : la page fenêtres reste la page « Maine-et-Loire »,
   la nouvelle page prend « fenêtre / pose / devis / pvc / alu + Angers » (≈ 2 400 imp./an
   déjà visibles). Modèle : Atlantique Ouvertures et ACB.
2. Portails et carports : « Angers » en tête de title/H1 + section zone d'intervention + FAQ
   (portail angers 140 rech., CPC 12,6 € ; carport angers 70). Pergolas et stores bannes :
   **à confirmer avec le client** avant toute page (140 + 110 rech./mois).
3. Article « Réinitialiser un volet roulant Bubendorff » (§ 7) et article « Régler une fenêtre
   PVC qui ferme mal » (1 000 rech./mois).
4. Renforcer l'article PVC / alu / bois-alu (720 + 480 rech./mois, KD 1, pos. 44-54) : tableau
   comparatif, FAQ, 2 000 mots, title commençant par « Fenêtre PVC ou alu ».
5. Page portes d'entrée : viser « porte d'entrée sur mesure » (1 900 rech./mois, KD 1) dans le
   title et le H1, en plus d'Angers.
6. Page Saumur : renforcer (patrimoine, ABF, réalisations saumuroises) et lier depuis la page
   agence Doué ; c'est la seule voie, la fiche Doué ne peut pas entrer dans le pack de Saumur.

### Lot D — suivi
- **Mi-octobre (J+30 du 14/09)** : positions de `/porte-garage/`, de l'article volet bloqué, de
  `/menuisier-angers/` ; disparition des URL `/fr/` et sans slash du rapport Pages GSC.
- **Début novembre** : article condensation (pic à 8 100 rech.) ; fiches GBP (vues, appels,
  itinéraires avant/après).
- **Janvier** : pages locales en place avant le pic de mars ; recontrôle backlinks spam.
- Indicateurs : clics hors marque / mois (32 sur 12 mois aujourd'hui), avis Doué, nombre de
  mots-clés classés DataForSEO (12), citations IA (relancer les 4 prompts du § 7).

## 9. Données de référence

- GSC : `Export SEO/fenetres-sur-loir.fr-Performance-on-Search-2026-09-05/` (12 mois).
- DataForSEO (22/09/2026) : Labs rank overview / historical / ranked keywords (FSL,
  lesateliersmichel.fr, al-menuiseries.com, sas-riffault.fr) / keyword overview 61 requêtes /
  competitors domain / relevant pages ; Backlinks summary / referring domains / anchors /
  backlinks / bulk ranks (14 domaines) / spam score / competitors ; Business Data listings
  (2 fiches FSL, 19 concurrentes) ; SERP live 8 requêtes ; OnPage instant pages (4) ; Lighthouse
  desktop (2) ; AI Optimization LLM mentions + 4 réponses live.
- Crawl et scripts d'analyse : scratchpad de session (`crawl.py`, `process2.py`, `inlinks.py`).

## 10. Réalisation des lots B et C (22/09/2026, même jour)

Commits `238503d` (lot B) et `1c0cb35` (lot C) sur `main`, build vérifié (71 pages, 0 lien
interne cassé, JSON-LD valides, sitemap 69 URL dont les 3 nouvelles, aucun prix ajouté).

### Lot B — fait
- **Redirections** : les ~30 redirections Astro (200 + meta-refresh) sont migrées dans
  `vercel.json` en 301 serveur, déclarées avec et sans slash (79 règles au total) ; le bloc
  `redirects` d'`astro.config.mjs` est retiré. **À vérifier par curl après déploiement** :
  `/notre-histoire`, `/nos-realisations/angers`, `/blog/menuisier-cholet`,
  `/menuisier-beaupreau-en-mauges` doivent répondre 308 → cible en 200.
- **Titles** : 30 pages ramenées sous 60-62 caractères (propositions du § 5.3 appliquées,
  marque en fin ou omise). Restent au-dessus de 65 : deux pages villes au nom long
  (Saint-Barthélemy-d'Anjou, Sainte-Gemmes-sur-Loire, template) et la page salon (temporaire).
- **Descriptions** : toutes les pages ramenées sous 160 caractères, sauf la page salon
  (temporaire) et la page de test.
- **Home** : H1 « Fenêtres, portes et volets sur mesure en Maine-et-Loire, depuis 2003 »,
  l'accroche de marque passe en sous-titre ; `alt` descriptif sur l'image hero.
- **Carte SVG** : tracés arrondis à l'entier, contour départemental émis une fois
  (`<defs>`/`<use>`) : HTML de la home **281 → 236 Ko**. L'externalisation complète en
  fichier a été écartée : la carte est interactive (survol, liens communes) et les styles
  Astro sont scopés ; le gain restant (≈ 60 Ko de tracés) demanderait une injection
  côté client, à revoir si le mobile le justifie.
- **Maillage** : lien « Découvrir l'agence » vers `/agences/…/` depuis les 21 pages villes ;
  composant `ConseilsLies` (3 guides) sur fenêtres, portes d'entrée, volets, baies, porte de
  garage et la nouvelle page Angers ; bloc « À lire aussi » (3 articles par tags communs) au
  pied de chaque article.
- **Blog** : `BlogPosting` ajouté aux 3 articles qui n'en avaient pas ; le suffixe
  « — Fenêtres sur Loir » n'est plus ajouté aux titles de plus de 42 caractères (Google
  affiche le nom du site séparément) ; titres des articles MéO, fenêtrier et Doué raccourcis.
- Phrase obsolète « une seconde agence à Doué-en-Anjou ouvrira prochainement » corrigée sur
  la page fenêtres.
- **Non fait** : redirection de `/salon-habitat-angers-2026/` (après le 28/09) ; mesure
  PageSpeed mobile (quota API) — à faire à la main sur pagespeed.web.dev.

### Lot C — fait
- **`/fenetres-angers/`** : 1 800 mots, bloc réponse directe, bâti angevin par quartier
  (site patrimonial remarquable, pavillons 1960-1990, copropriétés, extensions), matériaux,
  rénovation vs dépose totale, parcours devis, aides, 6 FAQ + FAQPage, réalisations Angers et
  Ponts-de-Cé, liens vers les 6 communes voisines et l'agence de Seiches. JSON-LD : graphe
  Organization + agence + Service (`areaServed` City Angers) + FAQPage. Liée depuis
  `/menuisier-angers/` (carte « Fenêtres à Angers » + encart), la page fenêtres, l'article
  PVC/alu et `llms.txt`.
- **Portails** : title « Portail aluminium sur mesure à Angers (49) — Portillons », H1
  localisé, sections urbanisme (déclaration préalable, PLU, ABF) et zone d'intervention,
  5 FAQ + FAQPage, « Découvrir aussi ». **Carports** : title « Carports, marquises et
  pergolas sur mesure à Angers (49) », section pergolas bioclimatiques (réalisation Angers),
  5 FAQ (permis, alu/bois, bioclimatique, dimensions, fixation) + FAQPage.
- **Article « Réinitialiser un volet roulant Bubendorff bloqué : pas à pas »** (2 100 mots) :
  vérifications, coupure secteur, procédure d'urgence volet radio bloqué ouvert (7 s / 10 s
  × 3), réinitialisation des fins de course (OFF 7 s / ON 15 s…, et séquence émetteur pour
  les moteurs radio), volet solaire, télécommande perdue (reproduction à l'identique depuis
  2007). Sources : FAQ SAV Bubendorff sav-303 et sav-304, citées et liées. 6 FAQ.
- **Article « Régler une fenêtre PVC qui ferme mal »** (1 900 mots) : tableau symptôme →
  réglage, outils, paumelle basse, décalage latéral, compression (galets excentriques),
  oscillo-battant décroché, quand remplacer. 6 FAQ.
- **Article PVC / alu / bois-alu** : title « Fenêtre PVC ou alu (ou bois-alu) : que choisir
  en 2026 ? », 1 083 → 2 000 mots, réponse courte en tête, tableau comparatif à 10 critères,
  section Uw, entretien et durée de vie, couleurs, ABF, budget relatif (sans prix), FAQ 3 → 6,
  `dateModified` 22/09.
- **Portes d'entrée** : section « Pourquoi une porte d'entrée sur mesure ? » + FAQ dédiée
  (requête nationale 1 900 rech./mois, KD 1).
- **Saumur** : corps passé de 3 à 4 paragraphes (centre ancien et quais, communes déléguées
  et troglodytes, quartiers pavillonnaires), 7 quartiers, note ABF précisée, FAQ 3 → 5.
- **Non fait** : pages pergolas et stores bannes (à confirmer avec le client).

### À surveiller
- Indexation des 3 nouvelles URL (inspection d'URL GSC après déploiement).
- Mi-octobre : positions de `/fenetres-angers/` sur « fenêtre / pose / devis fenêtre
  angers », de l'article Bubendorff sur « réinitialiser volet roulant bubendorff », de
  l'article PVC/alu sur « fenêtre pvc ou alu ».
