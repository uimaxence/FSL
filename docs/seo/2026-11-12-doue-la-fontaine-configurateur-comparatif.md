# 12/11/2026 — Doué-la-Fontaine, configurateur MéO, comparatif PVC / bois-alu

## Constat (relevés DataForSEO du 12/11/2026, Google France, depuis Saumur)

- On cherche « menuisier doué la fontaine » et « menuiserie doué la fontaine » (70 recherches
  par mois chacune, probablement le même groupe de requêtes). Aucun volume mesuré pour
  « doué en anjou », « fenêtre / porte d'entrée / volet roulant doué la fontaine ».
- « menuisier doué la fontaine », ordinateur : pack local = trois artisans de Doué (fiches à
  16, 12 et 1 avis). Résultats naturels : un artisan local 1ᵉʳ, un second 2ᵉ, un annuaire 3ᵉ,
  **Fenêtres sur Loir 4ᵉ** avec `/menuisier-doue-en-anjou/`.
- « menuiserie doué la fontaine », mobile : Fenêtres sur Loir absente des huit premiers
  résultats naturels (annuaires et registre des entreprises occupent la page), mais **citée
  dans l'aperçu IA** de Google avec adresse, téléphone et prestations.
- Fiche Google de l'agence de Doué : 9 avis, note 5 (`src/data/avis-google.json`). Elle
  n'apparaît dans aucun des deux packs locaux relevés.
- La page FSL ne contenait « Doué-la-Fontaine » qu'une fois (liste des quartiers) : title, H1
  et texte parlaient de « Doué-en-Anjou ».

## Fait sur le site

**Doué**
- `src/data/communes.ts` : nouveaux champs facultatifs `nomUsuel`, `seoTitle`, `h1` ; fiche
  Doué réécrite (ancien nom dans le title, le H1, l'intro ; quatre paragraphes ; dix communes
  déléguées et quartiers ; quatre questions).
- `src/pages/menuisier-[ville].astro` : title et H1 imposables, bouton « Appeler l'agence »
  avec le 07 66 52 24 00 dans le hero de Doué, deux cartes (comparatif, configurateur), bloc
  réponse des communes-agences enrichi (adresse, téléphone, Menuisier d'Excellence MéO).
- `src/data/agences-contenu.ts` et `src/pages/agences/[slug].astro` : « Doué-la-Fontaine » dans
  le title, la description et le texte ; la page agence fait désormais un lien vers la page
  ville de sa propre commune (elle n'en faisait aucun).

**Configurateur MéO** (`https://www.portemeo.com/`, constante `MEO_CONFIGURATEUR_URL`)
- Bouton « Configurer ma porte » dans l'en-tête à partir de 1440 px, entrée dans le
  méga-menu « Portes », bouton en bas du menu mobile.
- Bouton flottant des pages portes et fenêtres et de la page MéO : il ouvrait le catalogue,
  il ouvre le configurateur.
- Page portes d'entrée : bouton dans le hero, encart sombre sous les modèles (`#configurateur`,
  zone d'audience `configurateur_porte`). Le lien mort `meomenuiserie.com` est remplacé.
- Page MéO : bouton « Configurer ma porte » dans le bloc portes d'entrée.
- Le configurateur refuse l'affichage en iframe : toujours un lien, nouvel onglet. Les clics
  remontent dans PostHog en `lien_sortant_clic`, domaine `www.portemeo.com`.

**Comparatif** : nouvelle page `/fenetre-pvc-ou-bois-alu/` (tableau en 13 critères, « lequel
choisir », la pose, configurateur, agences, six questions, bloc de partage, feuille
d'impression sur trois pages). Liens depuis le menu, la page de Doué, la page bois-alu
d'Angers, le guide PVC / alu et `llms.txt`.

**Au passage** : l'en-tête débordait de l'écran entre 1024 et 1166 px (143 px à 1024) ;
navigation resserrée et libellé court « Rendez-vous » entre 1024 et 1279 px.

## Règles tenues

- Aucun concurrent nommé ni visé sur le site : comparatif de matériaux uniquement.
- Le PVC est décrit honnêtement (Fenêtres sur Loir en pose). Faits bois-alu : ceux déjà
  relevés sur fenetremeo.com les 01/10 et 12/10. Aucun prix.
- Non vérifié par moi, repris du site : horaires, « showroom » de Doué, durée de vie du PVC
  (25 à 35 ans, guide du 15/07).

## Reste à faire hors site (le levier principal du pack local)

1. Avis Google de la fiche de Doué : 9 aujourd'hui, 12 à 16 pour les fiches du pack.
2. Fiche de Doué : catégorie principale « Menuisier », « Doué-la-Fontaine » dans la
   description, lien du site vers `/menuisier-doue-en-anjou/?utm_source=gmb` en https,
   photos de l'agence et de chantiers du Saumurois.
3. Annuaires qui occupent la page : fiche PagesJaunes de l'agence de Doué (catégorie
   menuiserie, adresse et téléphone identiques au site).
4. Chantiers réels à Doué et autour (commune, année, photos) pour la page ville.

## Suivi

Relever les deux requêtes vers le 26/11 et le 10/12 (ordinateur et mobile), et les clics
`lien_sortant_clic` vers `www.portemeo.com` dans PostHog.
