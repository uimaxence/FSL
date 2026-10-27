# 27/10/2026 — Première lecture PostHog et corrections

Période lue : du 30/09 (installation) au 27/10/2026, quatre semaines, filtre
`$host = www.fenetres-sur-loir.fr`. Aucun bot ni agent d'IA compté dans les pages vues.

## Chiffres de référence

| Indicateur | Valeur |
| --- | --- |
| Visiteurs / sessions / pages vues | 710 / 740 / 1 534 |
| Durée moyenne de session | 3 min 23 |
| Taux de rebond | 22 % |
| Sessions avec un contact (appel, e-mail, formulaire) | 31, soit 4,2 % |
| Appels (clics `tel:`) / e-mails / formulaires | 18 / 13 / 8 |
| 14 derniers jours vs 14 précédents | visiteurs −13 %, sessions −13 % |

- **Canaux** : recherche organique 64 %, direct 27 %, referral 7 % (dont 37 auto-référencements,
  voir « pièges »), IA 2 % (16 sessions, toutes ChatGPT via `utm_source=chatgpt.com`, sur les
  guides, 0 rebond, 1 à 2 min de lecture), social 2 %. Une campagne Meta payante
  (`utm_campaign=120230733726990474`, fb/ig paid) a envoyé 5 sessions.
- **Appareils** : mobile 56 %, desktop 43 %. Les guides se lisent sur mobile (guide PVC :
  115 vues mobile pour 31 desktop).
- **Accueil en organique** : 198 sessions, 3,2 pages par session, médiane 110 s, rebond 10 %.
  Parcours accueil → contact : 24 sessions. Appels : en-tête 7, bouton flottant 7, contenu 4.
- **Accueil en direct** : 166 sessions dont 26 % de moins de 10 s sur une page, surtout
  Chrome Android et Windows. Hypothèse : clics « site web » de la fiche Google, qui arrivent
  sans referrer. À vérifier avec le client.
- **Guides** : 241 sessions d'entrée (33 % du site) pour un seul appel. Guide PVC : 158 entrées,
  une page par session, médiane 23 s. Guide oscillo-battant : médiane 119 s.
- **Popup devis** : fermée 320 fois (315 sessions, 43 %), « plus tard » 7 fois, bouton cliqué
  5 fois dont 2 sur `/contact/`. Sur le guide PVC en mobile : 77 fermetures pour ≈ 106 sessions.
- **Web vitals p75** : bons sur toutes les pages à trafic (accueil LCP 1,2 s desktop / 0,8 s
  mobile, INP < 100 ms, CLS ≈ 0). Deux valeurs isolées à peu d'échantillons : réalisation
  longère mobile LCP 8,1 s (5 mesures), porte de garage mobile INP 778 ms (14 mesures).
  Un seul rage click en quatre semaines.
- **Horaires** : appels du lundi au vendredi entre 9 h et 18 h ; le week-end, des pages vues
  mais aucun appel et un formulaire.

## Pièges de lecture

- Les sessions dont le referrer est le site lui-même sont un artefact du mode sans cookie :
  coupure après 30 min d'inactivité, le visiteur reprend son onglet et repart sur une nouvelle
  session. Celles à 0 page vue sur `/contact/` sont des formulaires remplis lentement.
- `$autocapture` est bien collecté même s'il n'apparaît pas dans la liste des événements du
  connecteur ; `elements_chain LIKE '%devis-popup-close%'` mesure les fermetures de la popup.
- Jusqu'à ce jour, les liens internes vers `/contact/` (popup, CTA, boutons) ne déclenchaient
  aucun événement propre.

## Fait le 27/10

1. **Popup devis** (`DevisPopup.astro`, `BaseLayout.astro`) : plus incluse sur `/contact/`,
   `/blog/*`, `/mentions-legales/`, `/politique-cookies/`. Ailleurs, elle n'apparaît que pour un
   visiteur engagé : 20 s de lecture **et** moitié de la page défilée (au lieu de 15 s partout).
   Lecture du stockage protégée (navigation privée).
2. **Encart de fin d'article** (`EncartGuide.astro`) sur tous les articles : variante
   « dépannage » (diagnostic à domicile, agences, appel) quand les tags contiennent dépannage,
   réglage ou SAV, variante « projet » sinon. Bloc `data-zone="fin_de_guide"`.
3. **Suivi des liens internes** (`Analytics.astro`) : `devis_clic` (zone, cible) sur tout lien
   vers `/contact/`, `cta_clic` sur les autres liens d'un bloc `data-zone` ; un ancêtre
   `data-zone` impose sa zone aux événements existants. Liens `#…` et liens vers la page
   courante ignorés.
4. **Réalisations vidéo** : la première affiche (élément LCP sur mobile) est préchargée dans le
   `<head>` via un nouveau slot `head` du layout.

## À vérifier avec le client

- Vers quelle page pointe le lien « site web » de la fiche Google (hypothèse du trafic direct
  court sur l'accueil).
- Qui pilote la campagne Meta payante `120230733726990474` et avec quel objectif.

## Suivi (vers le 10/11)

- Fermetures de la popup (`$autocapture` sur `devis-popup-close`) et `devis_clic` par zone :
  l'objectif est de diviser les fermetures par trois sans perdre de clics.
- `appel_clic` / `devis_clic` / `cta_clic` avec `zone = fin_de_guide` : premier chiffre sur
  l'apport des guides.
- LCP de la réalisation longère en mobile dès qu'il y a plus de 20 mesures.
