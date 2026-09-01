# Optimisation SEO / GEO — 1ᵉʳ septembre 2026

Optimisation menée en croisant l'export Search Console (3 derniers mois, 30/05 → 28/08/2026)
avec une analyse concurrentielle DataForSEO (SERP live Angers/Saumur, volumes Google Ads,
difficulté des mots-clés).

## 1. État des lieux (Search Console, 3 mois)

- **519 clics / 22 069 impressions**, CTR global 2,4 %, position moyenne ~12.
- Les **requêtes marque** (« fenetre sur loir » et variantes) concentrent ~80 % des clics.
- Le trafic hors-marque est quasi nul alors que les impressions existent : le site est
  *vu* mais pas *cliqué* (positions 6-25 sur les requêtes commerciales).
- Mobile convertit 3× mieux que desktop (CTR 4 % vs 1,4 %).
- La page `/menuisier-angers/` est la 1ʳᵉ page hors-home en impressions (5 491) — et
  performe déjà dans les réponses IA (courbe d'impressions en forte hausse depuis fin
  juillet, cf. capture GSC du 01/09).

### Poches d'opportunité identifiées (impressions ÷ position GSC × volume DataForSEO)

| Requête | Impressions GSC | Pos. GSC | Volume/mois | KD |
|---|---|---|---|---|
| menuisier angers | 841 | 17,2 | 880 | 0 |
| menuiserie angers | 345 | 21,1 | 880 | 7 |
| fenetre maine et loire | 511 | **3,4** (CTR 0,2 % !) | — | — |
| fenetre pvc maine et loire | 340 | **5,8** | — | — |
| fenetre pvc 49 | 328 | 10,3 | — | — |
| fenetre 49 | 305 | 14,4 | — | — |
| devis fenetre angers | 232 | 11,3 | 30 | — |
| pose fenetre angers | 188+166 | 6,7-8,9 | 50 | — |
| menuisier saumur | 68 (page : 490) | 12,5 | 210 | 0 |
| porte d'entrée angers | 151 | 20,6 | 50 | 41 |
| baie vitrée / coulissante angers | 91+50+58 | 4-7,6 | 10 | — |

**Difficulté quasi nulle (KD 0-7) sur tout le cluster « menuisier/menuiserie + ville »** :
ces positions sont prenables avec du contenu et de la pertinence locale, sans backlinks.

## 2. Analyse concurrentielle (DataForSEO, SERP live)

### « menuisier angers » (SERP Angers)
Local pack (Angers Design Fenêtres, L'Atelier, Ateliers Michel/Solabaie) + annuaires
(AlloVoisins, Pages Jaunes, Travaux.com, menuisier.info) + menuisiers **d'agencement
intérieur** (Brossard, Atelier Richet, Les Menuisiers Réunis, Atelier Lacour) + offres
d'emploi. **Aucun spécialiste fenêtres/menuiseries extérieures bien positionné en
organique** → l'intention est mixte, la place est à prendre en étant le résultat le plus
pertinent pour « menuisier (poseur de fenêtres) à Angers ».

### « fenetre pvc maine et loire »
Le modèle gagnant est la **page locale produit dédiée** :
- ACB Portes et Fenêtres, pos. 2 avec `/fenetre-pvc-angers/` (title : « Fenêtres PVC à
  Angers, pose par artisan RGE | Devis gratuit »)
- Atlantique Ouvertures avec `/fenetre-angers/`
- Art & Fenêtres avec une page revendeur départementale.

### « menuisier saumur » (SERP Saumur)
Annuaires + petits artisans locaux (Dallancon, G2M, Clin, Cailleaud) aux sites datés.
Concurrence organique faible — cohérent avec KD 0.

### Enseignement clé (mots-clés classés d'ACB, concurrent le plus proche du modèle FSL)
ACB tire l'essentiel de sa visibilité de **2 leviers** :
1. Pages locales produit : `/fenetre-pvc-angers/`, `/fenetre-bois-angers/`, `/store-banne-angers/`.
2. **Articles problème/solution** : leur article « comment débloquer un volet roulant »
   classe sur ~40 requêtes de 90 à 880 recherches/mois (positions 3-15). FSL a déjà
   amorcé ce levier avec l'article condensation (requêtes « condensation fenêtre »
   pos. 16-32 dans GSC) — à répliquer.

## 3. Modifications réalisées

### Pages optimisées (6)

1. **Home (`src/pages/index.astro`)** — pos. 3,4 sur « fenetre maine et loire » avec 0,2 %
   de CTR : title réécrit `Fenêtres sur Loir — Fenêtres sur mesure en Maine-et-Loire (49)`
   (marque en tête car les requêtes marque dominent, mot-clé département ensuite) ; meta
   description orientée clic (RGE, sans sous-traitance, devis 48 h, Angers/Saumur).

2. **`/menuisier-angers/` (`src/data/communes.ts` + template)** — cible menuisier/menuiserie
   angers (880 vol., KD 0-7), pose/devis fenêtre angers, menuiserie aluminium angers.
   Ajouts : paragraphe « entreprise de menuiserie » (pose en rénovation, pavillons
   60-90, menuiserie alu, quartiers), 2 FAQ (prix de pose d'une fenêtre à Angers ;
   couverture de l'agglomération) → 7 questions au FAQPage.

3. **`/menuisier-saumur/` (`src/data/communes.ts`)** — 490 impressions / 0 clic, pos. 13,6,
   KD 0. Ajouts : paragraphe proximité réelle (agence Doué à 18 km, gamme posée dans le
   Saumurois), FAQ « quel menuisier choisir près de Saumur » (format réponse IA).

4. **`/solutions/portes-fenetres/fenetres/`** — la page classe déjà sur « fenêtre pvc
   maine et loire » (~6) et « fenêtre pvc 49 » (~10) : title élargi
   `Fenêtres sur mesure PVC, alu, bois — Angers & Maine-et-Loire`, H1 idem, H2 PVC
   ancré « en Maine-et-Loire », FAQ « prix d'une fenêtre PVC posée » (People Also Ask
   n°1 de la SERP).

5. **`/solutions/portes-fenetres/portes-entree/`** — page la plus faible du cluster
   (pos. 27,7). L'ancien title commençait par la marque (mot-clé au 46ᵉ caractère), H1
   sans mot-clé, **aucune FAQ**. Refonte : title/H1 mot-clé en tête, meta description
   réécrite, 5 FAQ (prix, matériaux, sécurité, aides — factuel : la porte seule n'est
   plus éligible MaPrimeRénov' —, délais) + FAQPage JSON-LD + bloc visible.

6. **`/solutions/portes-fenetres/baies-vitrees/`** — positions déjà bonnes (4-8 sur les
   requêtes baies Angers) : consolidation. FAQ condensation (requêtes « condensation
   baie vitrée » pos. ~25 dans GSC) + maillage vers l'article blog condensation.

Bonus template : le title des **21 pages villes** passe de « — Fenêtres sur mesure » à
« — Fenêtres, portes & volets » (couvre les requêtes « pose fenêtre/porte/volet + ville »).

### Corrections techniques (site entier)

- **Trailing slash unifié** : les canonicals et le sitemap utilisaient `/page/` mais les
  ~120 liens internes (composants, nav, breadcrumbs, littéraux `${slug}`, markdown du
  blog) pointaient vers `/page` → GSC indexait les deux formes séparément (ex.
  `/menuisier-angers/` 5 491 imp. + `/menuisier-angers` 14 imp.). Tous les liens
  internes sont désormais en forme canonique `/page/`, `trailingSlash: "always"` est
  posé dans `astro.config.mjs`, et les cibles des redirections pointent directement
  vers la forme finale (un saut de moins).
- **Sitemap** : suppression du `lastmod` forcé à la date de build (identique sur 65
  pages = signal sans valeur pour Google).
- **JSON-LD** : URLs `agencyUrl`/`communeUrl` alignées sur la forme canonique.

### GEO (optimisation pour les réponses IA)

`/llms.txt` corrigé et enrichi :
- **Suppression des `TODO (à confirmer)` publiés en production** (raison sociale, SIRET) —
  les lignes ne s'affichent que si la donnée existe dans `src/config/business.ts`.
- Ajout de la **note Google agrégée** (4,8/5 sur 145 avis, calculée au build depuis les
  2 fiches GBP).
- Ajout des pages manquantes : entreprise, zones d'intervention, blog **et les 21 pages
  locales « Menuisier à {ville} »** — un LLM interrogé sur « menuisier à Angers » peut
  citer directement la bonne page.

Les FAQ ajoutées (formulation question naturelle + réponse factuelle autoportante avec
chiffres) et les blocs « réponse directe » des pages villes servent le même objectif :
être citable tel quel par ChatGPT/Perplexity/AI Overviews. `robots.txt` autorisait déjà
tous les crawlers IA.

## 4. Reste à faire (recommandations, par priorité)

1. **Côté hébergeur** : rediriger en **301 serveur** http→https, apex→www et
   `/page`→`/page/` (les redirections Astro sont des meta-refresh, insuffisantes pour
   consolider les signaux — GSC montre la home http avec 205 clics et la home https
   avec 227). Vérifier ce que fait déjà l'hébergeur avant d'ajouter des règles.
2. **Compléter `src/config/business.ts`** : SIRET et raison sociale (TODO restants),
   Instagram/LinkedIn — signaux d'entité pour Google ET les LLM.
3. **Articles problème/solution** (le levier n°1 d'ACB) : « volet roulant bloqué que
   faire » (~880 vol. cumulés, FSL est Point Conseil Bubendorff = légitimité maximale),
   « fenêtre qui ferme mal », « remplacer un double vitrage ». 1 article/mois suffit.
4. **Page dédiée `/fenetre-pvc-angers/` ou section renforcée** si les positions
   « fenêtre pvc » plafonnent après 6-8 semaines (le modèle ACB/Atlantique Ouvertures).
5. **Google Business Profile** : les 3 concurrents du local pack « menuisier angers »
   ont 10-22 avis ; FSL en a 145 → travailler la catégorie et les posts GBP de la fiche
   Seiches pour apparaître dans le pack d'Angers (facteur distance défavorable, mais la
   fiche Doué prouve que c'est jouable sur Saumur).
6. **Suivi à J+30/J+60** dans GSC : positions des 6 pages, résorption des doublons
   slash/sans-slash (rapport « Pages » → duplicata), impressions IA de
   `/menuisier-angers/`.

## 5. Données de référence

- Export GSC : `Export SEO/fenetres-sur-loir.fr-Performance-on-Search-2026-09-01/`
- Volumes/KD : DataForSEO (Google Ads search volume + bulk keyword difficulty, France, fr)
- SERP live : DataForSEO SERP advanced, localisation « Angers » et « Saumur », 01/09/2026
