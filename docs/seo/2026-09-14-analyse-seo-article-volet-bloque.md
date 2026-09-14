# Analyse SEO & actions — 14 septembre 2026

Point SEO mené en croisant l'export Search Console **12 mois** (jusqu'au 03/09/2026, dossier
`Export SEO/fenetres-sur-loir.fr-Performance-on-Search-2026-09-05/`) avec DataForSEO
(mots-clés classés, volumes Google Ads France, difficulté, intention de recherche, SERP live
France / Angers). Objectif : choisir **un article** et **une ou deux pages** à optimiser
aujourd'hui, en vérifiant l'intention de recherche avant d'écrire.

Les optimisations du 01/09 (home, `/menuisier-angers/`, `/menuisier-saumur/`, fenêtres,
portes d'entrée, baies) datent de 14 jours : trop tôt pour les mesurer, elles n'ont pas été
retouchées.

## 1. État des lieux (GSC, 12 mois)

- ~92 % des clics vont à la home sur des requêtes marque. Hors marque : 3 clics sur
  « menuisier angers » (906 impressions, pos. 17,6), 0 clic sur tout le reste.
- Poches d'impressions sans clic (positions 8-25) : cluster « fenêtre 49 / pvc 49 / pvc
  maine et loire » (≈ 2 000 imp., page fenêtres, optimisée le 01/09) ; « menuiserie angers »
  (395) ; « devis / pose fenêtre angers » (≈ 700 cumulées).
- **Porte de garage** : « porte de garage angers » 156 imp. pos. 49,5 ; « porte de garage 49 »
  120 pos. 55,6 ; « … maine et loire » 110 pos. 60 ; « portes de garage angers » 88 pos. 30,6 ;
  « porte de garage corzé » 68 pos. 15 → **≈ 540 impressions en page 3-6**, page
  `/porte-garage/` à 103 imp. pos. 44. Et l'ancienne URL `/fr/16/…portes-de-garage-sectionnelles`
  reçoit encore **495 impressions (pos. 49,9) en 404**.
- **Volets** : la page `/volets/` ne sort que sur 27 impressions. Requêtes réparation autour
  de Doué (« réparateur / réparation / dépannage volet roulant doué-en-anjou » : 91 + 84 + 64
  imp., pos. 14-29) et « volet roulant électrique angers » (20 imp., pos. 32).
- Anciennes URL `/fr/NN/` (14) et 7 URL plates du site précédent : toutes en **404**
  (vérifié par curl le 14/09), cumul ≈ 2 000 impressions/an.
- Article existant « PVC, alu ou bois-alu » : positions 44-54 sur « fenêtre pvc ou alu »
  (720 rech./mois) et « fenêtre alu ou pvc » (480), KD 1 → sous-exploité (cf. § 5).
- Article condensation : pos. 16-33 sur un mot-clé très saisonnier (« condensation fenêtre » :
  390 en sept., **8 100 en novembre**, 3 600 en décembre).

## 2. Données DataForSEO

### Mots-clés classés (base DataForSEO, France)
13 mots-clés seulement dans la base : marque (pos. 1), « fenetre(s) angers » pos. 20-27
(`/menuisier-angers/`), « menuisier 49 » pos. 7, « fenêtre(s) cholet » pos. 12-14,
« menuisier / menuiserie doué la fontaine » pos. 10-13. La base sous-estime le site par
rapport à GSC (positions 8-15 sur des dizaines de requêtes locales à volume < 50).

### Cluster « volet roulant bloqué » (France, volumes mensuels)

| Mot-clé | Volume | KD | Intention (DataForSEO) |
|---|---|---|---|
| volet roulant ne remonte plus / qui ne remonte plus | 720 | 0 | informationnelle |
| volet roulant électrique bloqué | 590 | 0 | mixte |
| volet roulant bloqué en haut | 590 | — | informationnelle |
| volet roulant bloqué | 480 | 0 | mixte |
| volet roulant ne descend plus | 480 | 0 | mixte |
| volet roulant bloqué en bas | 480 | — | mixte |
| réinitialiser volet roulant bubendorff | 480 | — | navigationnelle |
| volet roulant bubendorff bloqué | 260 | — | navigationnelle |
| volet roulant manuel bloqué | 140 | — | mixte |
| débloquer / comment débloquer un volet roulant | 140 + 140 | 0 | informationnelle |
| volet roulant bloqué dans le caisson | 110 | — | informationnelle |
| volet roulant bloqué au milieu | 90 | — | mixte |
| volet roulant solaire ne fonctionne plus | 90 | — | informationnelle |

≈ **4 800 recherches/mois** cumulées, difficulté nulle, volume stable toute l'année (léger
pic en janvier). À côté : « réparation volet roulant » 9 900/mois (KD 24, intention
commerciale — FSL n'est pas un réparateur toutes marques, on ne le vise qu'indirectement) et
« condensateur volet roulant » 4 400 (achat de pièce, hors cible).

**Vérification d'intention sur la SERP live « volet roulant bloqué » (France)** : carrousel
vidéo, AI Overview, 6 « autres questions » (qu'est-ce qui peut bloquer / ne veut plus remonter /
électrique se bloque / ne veut pas descendre / baisser un volet électrique bloqué / pannes
fréquentes), puis 7 guides « problème → solution » : boutiques de pièces (volet-system,
store-volet, brico-volet), réseaux de dépannage (mesdepanneurs, removo, allo-volet-service) et
**un artisan menuisier local, SAS Riffault, en position 2**. L'intention est clairement
informationnelle « comment réparer soi-même », avec une intention secondaire « à qui faire
appel ». Un artisan avec un guide complet peut prendre le top 3 : c'est exactement le profil de
FSL, avec en plus la légitimité Point Conseil Bubendorff sur les requêtes « bubendorff bloqué /
réinitialiser » (740 rech./mois) que personne ne traite localement.

### Pages locales candidates

| Mot-clé | Volume | KD | SERP locale (Angers) |
|---|---|---|---|
| porte de garage angers | 70 (pic 390 en sept.) | 0 | pack local (Komilfo, Fermetal, Metal 2000) + pages produit localisées Janneau, Fermetures Angevines, Monsieur Store, Ateliers Michel, Lorenove, Novoferm, PM Fermetures, AL Menuiseries, Atelier Richet, Ouvrard. PAA 100 % prix/aides. |
| porte de garage maine et loire | 50 | — | idem |
| volet roulant angers / volets roulants angers | 90 + 90 | 0 | pack local de réparateurs (Dokteur Store, Repar'Stores, Store Solutions) + Repar'Stores, Removo, Monsieur Store, AlloVoisins, Janneau, Art & Fenêtres, page Point Conseil bubendorff.com. PAA : prix moyen, déductible des impôts, durée de vie. |
| porte de garage sur mesure | 1 900 | 26 | national |
| porte de garage isolante | 590 | — | national, saisonnier (1 300 en janv.) |

Autres constats utiles pour la suite : « réglage fenêtre pvc » 1 000/mois + « fenêtre qui
ferme mal » 70 (KD 0) ; « prix fenêtre pvc » 2 400 (KD 5) ; « prix pose fenêtre » 480 (KD 13) ;
« volet roulant solaire prix » 2 900 (KD 21) ; « volet roulant solaire avis » 320 (KD 0).

## 3. Décisions

1. **Article : « Volet roulant bloqué : que faire ? »** — cluster le plus large à KD 0,
   intention vérifiée sur la SERP, légitimité maximale (Point Conseil Bubendorff), maillage
   naturel vers la page volets et la page partenaire. Recommandation n°3 du rapport du 01/09.
2. **Page 1 : `/solutions/portes-fenetres/porte-garage/`** — plus gros écart entre
   impressions (≈ 540 + 495 sur l'URL 404) et position (30-60), KD 0, SERP tenue par des pages
   produit locales de niveau modeste, aucune FAQ ni prix sur notre page.
3. **Page 2 : `/solutions/portes-fenetres/volets/`** — page d'atterrissage de l'article,
   quasi invisible (27 imp.), sans FAQ, avec une phrase obsolète (« une agence ouvrira à
   Doué »).
4. **Redirections 301** des 21 anciennes URL en 404 (recommandation n°1 du 01/09, restée
   ouverte) : indissociable de l'optimisation porte de garage (495 impressions à récupérer).

## 4. Modifications réalisées

### Article `src/content/blog/volet-roulant-bloque-que-faire.md` (≈ 3 500 mots)
- Title/H1 « Volet roulant bloqué : que faire ? Causes et solutions », slug
  `/blog/volet-roulant-bloque-que-faire/`.
- Structure calquée sur les requêtes : diagnostic en tableau, électrique (6 vérifications :
  piles, disjoncteur, thermique, condensateur, fins de course, attaches), ne remonte plus
  (bloqué en bas), ne descend plus (bloqué en haut / caisson), bloqué au milieu, manuel
  (sangle, manivelle, treuil), **solaire et Bubendorff (batterie, réinitialisation)**, quand
  appeler un pro et réparer ou remplacer, entretien, bloc local Angers/Seiches/Doué, FAQ.
  **Aucun prix affiché** (choix client du 14/09).
- 6 FAQ reprenant les « autres questions » de la SERP (bloc visible + FAQPage JSON-LD),
  BlogPosting + LocalBusiness comme les autres articles.
- Liens : page volets, partenaire Bubendorff, `/menuisier-angers/`, agences, zones, aides 2026,
  contact.
- Liens entrants ajoutés : page volets (section dédiée + FAQ), page partenaire Bubendorff
  (paragraphe SAV), liste Conseils (automatique), `/llms.txt`.

### Page porte de garage (réécriture)
- Title `Porte de garage à Angers (49) — Sectionnelle, enroulable, latérale | Fenêtres sur Loir`
  (mot-clé + ville en tête, brand en fin), H1 « Porte de garage sur mesure à Angers et en
  Maine-et-Loire… », meta description réécrite (installateur depuis 2003, 49, devis gratuit).
- Nouvelle section **aides et TVA** honnête (pas de MaPrimeRénov'/CEE/5,5 % pour une porte de
  garage, TVA 10 % rénovation). Pas de prix affichés.
- Nouvelle section **zone d'intervention** avec liens vers `/menuisier-angers/`, Saumur, Cholet,
  zones.
- **6 FAQ** (de quoi dépend le prix, aides/impôts, sectionnelle vs enroulable, motoriser
  l'existant, délais, hors Angers) en bloc visible + FAQPage JSON-LD ; `areaServed` + `serviceType` sur le Service.
- Suppression du composant `AidsBox` (listait MaPrimeRénov', TVA 5,5 %, CEE, crédit d'impôt :
  **faux pour une porte de garage**) et de la conclusion qui promettait « peut-être des aides ».
- « Découvrir aussi » enrichi (portails, carports, volets).

### Page volets (réécriture partielle)
- Title `Volets roulants à Angers & Maine-et-Loire — Solaires, électriques, battants | Point
  Conseil Bubendorff`, H1 « Volets roulants à Angers et en Maine-et-Loire : … ».
- Nouvelle section **« Volet roulant bloqué ou en panne : que faire ? »** → guide + périmètre
  SAV explicite (volets Bubendorff posés par FSL ; diagnostic/remplacement pour les autres).
- **6 FAQ** (de quoi dépend le prix, durée de vie, aides/impôts, solaire vs électrique, volet
  bloqué, durée de pose) + FAQPage JSON-LD. Pas de prix affichés.
- Section aides corrigée : TVA 10 % rénovation pour des volets seuls ; 5,5 % « sous
  conditions » en travaux induits avec des fenêtres (formulation prudente).
- Phrase obsolète sur l'ouverture de l'agence de Doué remplacée par un lien vers
  `/agences/doue-en-anjou/` ; liens vers `/menuisier-angers/`, `/menuisier-saumur/`.

### 4 bis. Article condensation rafraîchi (14/09, même URL)
Données : « condensation fenêtre » et « condensation sur les fenêtres » 1 600/mois en moyenne
mais **8 100 en novembre**, 3 600 en décembre ; secondaires « condensation fenêtre intérieur »
(390, 2 900 en nov.), « moisissure fenêtre » (390), « humidité fenêtre » (320), « condensation
velux » (320), « buée fenêtre » (260), « condensation fenêtre chambre » (170), « condensation
fenêtre double vitrage » (170), « film anti condensation fenêtre » (140), « entrée d'air fenêtre
réglementation » (170). SERP : AI Overview + vidéos + 6 « autres questions » (éviter la
condensation, pourquoi, quelle température, buée le matin, signes d'une maison trop humide,
dormir fenêtre ouverte), puis Janneau, Écohabitation, Internorm, 4B, Fenetre24, Habitatpresto.
Ajouts : tableau de diagnostic, sections « chambre le matin », « température et hygrométrie »,
« VMC et entrées d'air : réglementation », « PVC / alu / bois », « baies vitrées, portes-fenêtres
et fenêtres de toit », « film, absorbeur, déshumidificateur », « moisissures » ; FAQ passée de
4 à 8 questions (PAA) ; `dateModified` 14/09 et mention visible de la mise à jour ; liens vers
baies vitrées, puits de lumière, `/menuisier-angers/`. Article passé d'environ 1 650 à 2 900 mots.

### Redirections `vercel.json` (301 serveur)
- 14 patterns `/fr/NN/(.*)` → page thématique la plus proche (portes de garage ×2, volets ×2,
  `/menuisier-angers/`, confort extérieur ×2, confort intérieur, notre histoire, article
  PVC/alu, article condensation, conseils ×2, mentions légales).
- 7 URL plates (`/porte-de-garage`, `/porte-dentree`, `/porte-dinterieure`, `/porte-fenetre`,
  `/puits-de-lumieres`, `/verrieres`, `/pieces-a-vivre`), déclarées avec et sans slash final
  pour ne pas dépendre de l'ordre d'application de `trailingSlash`.
- Les ≈ 30 redirections Astro (meta-refresh) restent en place : à migrer dans `vercel.json`
  lors d'un prochain point (non bloquant, elles fonctionnent).

### Divers
- `/llms.txt` : descriptions « Portes de garage » et « Conseils & blog » enrichies.
- Build vérifié : 66 pages, aucun avertissement, tous les liens internes en forme `/page/`,
  FAQPage valides sur les 3 pages, article dans le sitemap.

## 5. Reste à faire (par priorité)

1. **Valider le périmètre SAV** décrit (volets Bubendorff posés par FSL uniquement). Les prix
   ont été retirés de tout le contenu du 14/09 à la demande du client : ne pas en réintroduire.
2. **Après déploiement** : vérifier par curl que `/fr/16/…` et `/porte-de-garage` répondent
   301 → page cible (et non 404), puis demander l'inspection d'URL dans GSC pour
   `/blog/volet-roulant-bloque-que-faire/`, `/porte-garage/` et `/volets/`.
3. ~~Rafraîchir l'article condensation avant le pic de novembre~~ **Fait le 14/09** (voir
   § 4 bis). Suivre sa position sur « condensation fenêtre » et « condensation fenêtre
   intérieur » à partir de mi-octobre.
4. **Article n°2 (octobre)** : « Régler une fenêtre PVC qui ferme mal » — « réglage fenêtre
   pvc » 1 000/mois, « fenêtre qui ferme mal » 70, KD 0, même mécanique problème → solution.
5. **Renforcer l'article PVC/alu/bois-alu** : pos. 44-54 sur 1 200 rech./mois à KD 1. Title
   commençant par « Fenêtre PVC ou alu », tableau comparatif, FAQ « pvc ou alu prix ».
6. Google Business Profile : catégorie et posts sur la fiche de Seiches pour le pack local
   « menuisier angers » (inchangé depuis le 01/09).
7. **Suivi J+30 (mi-octobre)** dans GSC : positions de `/porte-garage/` sur « porte de garage
   angers/49 », impressions de l'article sur le cluster « volet bloqué », disparition des URL
   `/fr/` du rapport Pages.

## 6. Données de référence

- Export GSC 12 mois : `Export SEO/fenetres-sur-loir.fr-Performance-on-Search-2026-09-05/`
- DataForSEO (14/09/2026) : keyword overview / bulk KD / search intent (France, fr),
  keyword suggestions « volet roulant », SERP live « volet roulant bloqué » (France),
  « porte de garage angers » et « volet roulant angers » (Angers).
