# Bilan du 9 novembre 2026 : Search Console, audience des guides, actions

Sources : exports Search Console du 09/11/2026 (3 derniers mois, du 08/08 au 07/11, recherche
classique et « fonctionnalités d'IA générative »), comparés à ceux du 12/10 ; PostHog filtré sur
`www.fenetres-sur-loir.fr` ; un relevé de positions DataForSEO (voir
`2026-10-01-fenetre-bois-alu-angers.md`).

## 1. La chute d'octobre est effacée

| Période | Clics / jour | Impressions / jour | Impressions IA / jour |
| --- | --- | --- | --- |
| 01 → 07/10 (avant la chute) | 20,9 | 837 | 98 |
| 10 → 18/10 (creux) | 10,6 | 482 | 29 |
| 01 → 07/11 | 23,4 | 1 069 | 219 |

La remontée commence le 24/10, sans retouche des guides. Sur trois mois : 1 118 clics,
55 133 impressions, 5 109 impressions IA (1 934 au 12/10). Mobile : 686 clics, position 8,8 ;
ordinateur : 413 clics, position 17,5.

Côté PostHog, les entrées Google sur les guides passent de 8 (semaine du 12/10) à 93 (semaine du
02/11) ; le site fait 243 sessions par semaine contre 171 au creux.

## 2. Ce qui porte le trafic

| Page | Clics | Impressions | Position | Au 12/10 (clics / impressions) |
| --- | --- | --- | --- | --- |
| `/blog/regler-fenetre-pvc-qui-ferme-mal/` | 204 | 7 009 | 6,6 | 85 / 2 730 |
| `/blog/reinitialiser-volet-roulant-bubendorff/` | 102 | 5 016 | 7,0 | 53 / 2 346 |
| `/blog/joint-fenetre-pvc/` (publié le 12/10) | 21 | 827 | 6,5 | nouveau |
| `/partenaires/meo/` (refondue le 12/10) | 12 | 571 | 7,8 | nouveau |
| `/menuisier-doue-en-anjou/` | 15 | 1 141 | 8,9 | 7 / 471 |

Ces deux guides font 3 335 des 5 109 impressions IA. La fiche Google pointe vers
`http://www.fenetres-sur-loir.fr/?utm_source=gmb` : 80 clics et 1 669 impressions dans la Search
Console, 111 sessions PostHog du 12/10 au 08/11 (109 sur l'accueil). La redirection vers https
conserve le paramètre et le canonical de l'accueil est propre.

## 3. Sept guides sur dix-huit n'ont aucune impression

Aucune impression dans aucun export depuis leur publication :

- `/blog/volet-roulant-bloque-que-faire/` (14/09)
- `/blog/fenetre-oscillo-battant-bloquee/` (30/09)
- `/blog/entretien-volet-roulant/` (30/09)
- `/blog/telecommande-bubendorff-pile-programmation/` (30/09)
- `/blog/isolation-phonique-fenetre/` (30/09)
- `/blog/volet-roulant-qui-grince/` (12/10)
- `/blog/double-ou-triple-vitrage/` (12/10)

Vérifié le 09/11 : pages en 200, canonical sur elles-mêmes, ni `noindex` ni `X-Robots-Tag`,
présentes dans le sitemap, `robots.txt` ouvert. Le maillage n'explique rien : ces guides reçoivent
3 à 11 liens internes, autant que les guides qui marchent (6 et 7), et les deux guides vedettes
pointent déjà vers cinq d'entre eux. Le statut exact (« explorée, actuellement non indexée » ou
« détectée ») n'est lisible que dans l'inspection d'URL de la Search Console.

Conséquence : pas de nouvel article tant que ces sept-là ne sont pas indexés.

## 4. Les pages d'Angers restent en page 2

128 requêtes contenant « angers » : 12 042 impressions, 12 clics. « menuisier angers » 20,7
(19,1 au 12/10), « menuiserie angers » 19,3, « fenetre angers » 17,3. `/menuisier-angers/` :
8 260 impressions, position 18,7 ; `/fenetres-angers/` : 762 impressions, position 18,8 ;
`/fenetres-bois-alu-angers/` : 598 impressions, position 17,8, aucun clic ;
`/volets-roulants-solaires-angers/` : 63 impressions, position 25,7. Saumur stable (14,6), Doué
progresse. Le contenu est en place ; ce qui manque relève de la fiche Google et des liens entrants
(`2026-10-12-demandes-de-liens.md`).

## 5. Les guides n'amènent pas de contact

| Semaine du | Sessions | Entrées sur un guide | Appels | E-mails | Formulaires | Fermetures du popup |
| --- | --- | --- | --- | --- | --- | --- |
| 12/10 | 171 | 17 | 8 | 4 | 3 | 61 |
| 19/10 | 164 | 35 | 3 | 3 | 1 | 72 |
| 26/10 | 252 | 108 | 7 | 5 | 4 | 47 |
| 02/11 | 243 | 118 | 5 | 4 | 1 | 30 |

Le popup devis, restreint le 27/10, est fermé deux à trois fois moins souvent. Depuis le 27/10,
l'encart de fin de guide a reçu un seul clic (`cta_clic`) pour plus de 220 entrées ; les appels
viennent du bouton flottant (9 sur 11), les clics vers le contact du pied de page (8), de l'entête
(5) et du contenu (4). La localisation des visiteurs n'est pas disponible dans PostHog en mode
sans cookie : la part de lecteurs du Maine-et-Loire parmi ceux des guides reste inconnue.

## 6. Fait le 09/11

- **Bandeau de contact en haut des guides** : `EncartGuide` gagne un format `compact`, inséré
  avant le premier intertitre de chaque article (zone d'audience `debut_de_guide`). Il s'adresse
  au lecteur local (« Vous habitez le Maine-et-Loire ? ») et reprend les engagements déjà publiés
  dans l'encart de fin. Texte des articles inchangé (comparé à la production sur 9 guides).
- **Sitemap** : `lastmod` réel pour les articles (la plus récente de `date` et `dateModified`),
  toujours absent des autres pages.
- **Relevé « fenêtre bois alu angers »** consigné : mobile 2ᵉ avec la page cible, ordinateur 30ᵉ.

## 7. À faire

Côté Search Console (accès requis) :

1. Inspection d'URL des sept guides du § 3 : noter le statut, puis « Demander une indexation ».
2. Onglet « Pages » : relever le nombre de pages « explorées, actuellement non indexées ».

Côté client :

3. Fiche Google de Seiches : remplacer `http://` par `https://` dans le lien du site en gardant
   `?utm_source=gmb` ; horaires à aligner avec le site (écart relevé le 12/10).
4. Envoyer les demandes de liens du 12/10 si ce n'est pas fait.

Suivi :

5. Vers le 23/11 : `appel_clic` et `devis_clic` en zone `debut_de_guide`, comparés aux entrées sur
   les guides. Sans clic après deux semaines, le frein est l'audience (lecteurs hors
   département), pas l'emplacement.
6. Début décembre : nouvel export Search Console, état des sept guides.
7. Relevé bois-alu à compléter (2 mesures mobile, 1 ordinateur), puis chaque jeudi.
