# 30/09/2026 — Quatre articles supplémentaires et redirection de la page salon

## Pourquoi

Les deux guides publiés le 22/09 (« régler une fenêtre PVC qui ferme mal », « réinitialiser un
volet roulant Bubendorff ») ont réuni 81 impressions sur la seule journée du 27/09 dans la
Search Console (filtre « source IA » : 48 et 33 impressions, CTR moyen 1,9 %), soit plus que la
moyenne quotidienne hors marque de tout le site sur 12 mois (≈ 58 impressions/jour). Décision :
prolonger le format « dépannage pas à pas » et ajouter un sujet à intention d'achat.

## Articles publiés

Volumes mensuels France, DataForSEO Labs, relevés le 30/09/2026 (difficulté non renseignée pour
la plupart de ces requêtes).

| Article | Requêtes visées | Vol./mois |
| --- | --- | --- |
| `/blog/fenetre-oscillo-battant-bloquee/` | fenêtre oscillo battant bloquée (590), fenêtre bloquée en oscillo battant (320), poignée de fenêtre bloquée (90) | ≈ 1 000 |
| `/blog/entretien-volet-roulant/` | entretien volet roulant (320), nettoyer volet roulant (320), graisser volet roulant (210) | ≈ 850 |
| `/blog/telecommande-bubendorff-pile-programmation/` | programmer télécommande bubendorff (170), changer pile télécommande bubendorff (140) | ≈ 340 |
| `/blog/isolation-phonique-fenetre/` | isolation phonique fenêtre (720), fenêtre anti bruit (390), vitrage phonique (260) | ≈ 1 370 |

Même gabarit que les articles du 22/09 : schémas LocalBusiness, BlogPosting et FAQPage, tableau
de diagnostic, FAQ reprise en clair, aucun prix.

Sources des procédures Bubendorff : guide d'utilisation (édition mars 2018, entretien p. 6-7,
commande groupée p. 13-15, pile et panne de télécommande p. 18) et FAQ SAV 301, 305 et 306. Les
pages FAQ 309 (entretien) et 310 (intempéries) redirigent vers la catégorie et n'ont pas pu être
lues.

## Sujets écartés

- « volet roulant ne descend plus / ne remonte plus » (≈ 1 200/mois) : déjà couvert par
  `/blog/volet-roulant-bloque-que-faire/`, un second article le cannibaliserait ;
- pannes de porte de garage, porte d'entrée qui frotte : 10 à 50 recherches/mois ;
- « moustiquaire fenêtre sur mesure » (2 400/mois, pic en juin) : à traiter en page produit au
  printemps si le client en vend ;
- « bubendorff sav » (2 900/mois) : requête de marque, navigationnelle.

Second lot possible : double ou triple vitrage et Uw (≈ 880/mois), entretien d'une fenêtre PVC
(≈ 560/mois), avis sur le volet roulant solaire (320/mois).

## Autres changements

- `/salon-habitat-angers-2026/` (salon terminé le 28/09) : page supprimée, 301 vers
  `/solutions/portes-fenetres/portes-entree/` dans `vercel.json`. Le bandeau et l'entrée
  `llms.txt` étaient déjà retirés automatiquement ; `src/config/evenements.ts` et
  `AnnonceBandeau.astro` sont conservés pour un prochain événement.
- `.prose-fsl` : styles ajoutés pour les listes numérotées (le reset Tailwind masquait les
  numéros des étapes) et les tableaux (bordures, défilement horizontal sur mobile). Concerne
  tous les articles.
- Page fenêtres : « classes Acotherm AR3 à AR6 » corrigé en « classes CEKAL AR3 à AR6 » (les
  classes AR sont celles de CEKAL pour le vitrage ; Acotherm classe la fenêtre en AC1 à AC4).
- Maillage : liens vers les nouveaux guides depuis les articles réglage, réinitialisation et
  volet bloqué, depuis la page fenêtres et dans `llms.txt`.

## À suivre

- Vérifier en production que `/salon-habitat-angers-2026/` répond 301 → 200.
- Demander l'inspection d'URL des quatre articles dans la Search Console.
- Relire clics, position et CTR des six guides au suivi de mi-octobre.
