# 12/10/2026 — Page MéO refondue : le bois-alu expliqué, à transmettre aux clients

## Ce qui a été fait

`/partenaires/meo/` est réécrite de zéro (l'ancien gabarit `PagePartenaire` n'est plus utilisé
pour cette page). Objectif : une page marque qui explique le concept bois-aluminium et la gamme
MéO, que l'équipe peut envoyer à un client intéressé par le bois-alu.

Structure : hero immersif (header transparent, image en parallaxe) → réponse directe + deux
cartes « le fabricant / l'installateur » → chiffres animés → « pourquoi deux matériaux » avec
un rendu en écorché → **coupe animée au défilement** (6 étapes : bois, aluminium, plots,
vitrage, joints, résultat) → six avantages → gamme (fenêtres, baies, portes d'entrée vue
ext./int., verrières) → nuanciers (13 finitions bois, 28 teintes alu) → tableau des
performances fenêtre / baie + entretien → Club des Menuisiers d'Excellence (section sombre,
trophées 2025) → FAQ (9 questions, FAQPage JSON-LD) → bloc « Transmettre cette page » (copier
le lien, e-mail, WhatsApp, impression) → conseils liés → CTA.

Animations : apparition au défilement (`data-reveal`, utilitaire ajouté dans `global.css`,
réutilisable sur tout le site), compteurs, parallaxe du hero, coupe pilotée par
IntersectionObserver. Tout respecte `prefers-reduced-motion`, tout est visible sans
JavaScript et à l'impression (feuille `@media print` dédiée : plus de navigation ni de
boutons flottants, coupe complète).

Fichiers : `src/pages/partenaires/meo.astro`, `src/styles/global.css` (reveal),
`src/pages/llms.txt.ts` (entrée ajoutée), `src/pages/partenaires/index.astro` (texte de la
carte), `src/assets/meo/*.jpg`, `public/og/meo-bois-alu.jpg` (image de partage 1200 × 630).

## Sources MéO utilisées (fenetremeo.com, relevées le 12/10/2026)

Toutes les pages ont été téléchargées en texte brut (pas de résumé WebFetch) :
« L'alliance bois-aluminium », « Les avantages des menuiseries bois-aluminium »,
« Qu'est-ce que l'effet bilame ? », fiches produits fenêtres / baies coulissantes /
verrières & murs rideaux, catalogue portes d'entrée (82 modèles, dix gammes), « À quoi
correspondent les niveaux de performance », « Quel vitrage choisir », « Le lexique »,
« Des menuiseries bois-aluminium à la qualité certifiée », « Conception de nos produits »,
FAQ, « MéO, créateur depuis 1983 », « Menuisiers d'Excellence », « Extension de garantie »,
« Comment améliorer la sécurité… », « Rénovation énergétique… ».

Faits repris, tous publiés par MéO : concept créé en 1983 (entreprise née en 1976, groupe
Liébot depuis 1990, usine de Cugand 2013, marque MéO 2020) ; site de 15 ha, 42 % de
l'énergie autoproduite ; 5 brevets sur la fenêtre ; fenêtre à frappe Uw 1,2 / Sw 0,47 /
TLw 0,58 / 28 dB / A*4 E*7A V*A2 / ouvrant 67 ou 75 mm ; Uw 0,7 en triple (1 vantail) ;
baie coulissante Uw 1,4 / Sw 0,53 / TLw 0,65 / 27 dB / A*4 E*6B V*A2 / ouvrant 57 mm ;
double vitrage 4/20/TBE 4 warm-edge de série, vitrage collé au cadre bois, structure bois
lamellé abouté collé avec placage, assemblage par plots (rupture totale de pont thermique,
pas d'effet bilame) ; 2 essences, 13 finitions (pin blanc peignable), 28 teintes alu
(10 satinées, 11 texturées, 5 sablées, anodisé, ton bois) ; 7 formes, 4 ouvertures,
petits-bois, entrées d'air, blocs-baies Thermobloc / Optibloc / BSO ; baies 2 à 6 vantaux,
galandage, poignée intuitive à 20°, profil de tirage, motorisation Somfy ; verrières
Horizon / Espace / Ciel, épicéa ou chêne, 6 finitions, 26 teintes ; portes : serrure
multipoints, verrous jusqu'à 3 points, rosace de sécurité ; entretien ; certifications
Origine France Garantie, NF (FCBA), PEFC, Qualimarine, CEKAL, A+ ; FDES ; garantie jusqu'à
10 ans ; Club fondé en 2012 ; extension de garantie gratuite sous 14 jours.

Écartés volontairement : les prix « à partir de » du catalogue portes (règle client : aucun
prix sur le site) ; « RE2020 / BBC », « ouvrant caché » (non retrouvés sur fenetremeo.com,
déjà signalés le 01/10) ; la galerie « réalisations signées MéO » avec ses légendes
non vérifiées (Angers, Seiches, Durtal).

## Images

- `src/assets/meo/hero-coin-fenetre.jpg`, `baie-coulissante.jpg`, `facade-tuffeau.jpg`,
  `mur-rideau.jpg`, `profil-ecorche.jpg` : illustrations générées avec fal.ai (modèle
  `fal-ai/nano-banana-pro`, 2K) le 12/10/2026. Textes alternatifs préfixés « Illustration »,
  légende « vue d'artiste, non contractuelle » pour l'écorché. **Jamais à présenter comme des
  chantiers ni à réutiliser dans les réalisations.**
- `porte-1-boisalu.png` / `porte-2-boisalu.png` (vue extérieure alu / vue intérieure bois) :
  visuels MéO déjà dans le dépôt, utilisés pour illustrer le concept sur les portes.
- Le schéma en coupe est un SVG dessiné à la main dans la page (schéma de principe, d'après
  le « concept produit » de la fiche fenêtres) : il ne reproduit pas un plan MéO.

## Contrôles

Build de production OK ; captures ordinateur (1440 × 900) et mobile (390 × 844) : aucune
erreur console, aucune image cassée, pas de débordement horizontal, les six étapes de la
coupe s'activent et construisent les couches dans l'ordre.

## À faire côté client

- Relire le schéma en coupe et les textes des six étapes avec le commercial MéO (ordre des
  couches, vocabulaire), et faire valider la page par MéO avant de la diffuser largement :
  elle cite la marque, ses chiffres et ses certifications.
- Fournir 2 ou 3 photos de chantiers bois-alu réels (avec commune et année) pour remplacer à
  terme les illustrations de la gamme.
- Confirmer que Fenêtres sur Loir souhaite afficher l'extension de garantie MéO sur le site
  (procédure : formulaire MéO dans les 14 jours après le PV).
