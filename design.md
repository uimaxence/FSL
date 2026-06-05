# Design System — Fenêtres-sur-Loir

Ce fichier est la **source unique de vérité** pour le design du site. Le lire avant toute modification visuelle, le mettre à jour après chaque décision design.

---

## 1. Couleurs

| Token CSS               | Hex       | Usage                                                            |
| ----------------------- | --------- | ---------------------------------------------------------------- |
| `--color-bg`            | `#ffffff` | Fond principal                                                   |
| `--color-fg`            | `#1a1b1f` | Texte principal, titres                                          |
| `--color-muted`         | `#6b6b6b` | Texte secondaire                                                 |
| `--color-subtle`        | `#fafafa` | Fond de section alternée                                         |
| `--color-border`        | `#e2e2e2` | Bordures, séparateurs                                            |
| `--color-accent`        | `#6CB1E6` | **Bleu de marque** — CTA, hover liens, accents                   |
| `--color-accent-hover`  | `#4f9bd6` | État hover des éléments accent                                   |
| `--color-tint`          | `#e3f4ff` | Fond tinté clair (cards bleues, badges certifications)           |
| `--color-tint-2`        | `#e4ebf3` | Fond tinté secondaire                                            |
| `--color-logo-frame`    | `#2a2d34` | Cadre sombre du logo                                             |

**Placeholders (couleurs en dur, non tokenisées car spécifiques à ce kit visuel) :**
- Fond : `#e5e7eb`
- Bordure dashed : `#9ca3af`
- Texte label : `#6b7280`

**Règle :** ne jamais coder une couleur en dur dans un composant. Toujours passer par un token. Si un token manque, l'ajouter ici **et** dans `global.css`. Exception : palette des placeholders (cf. §6).

---

## 2. Typographie

Deux familles :
- **Titres (`--font-display`) → Palatino** (stack système : `Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif`). Sert pour tous les `h1`–`h6`.
- **Corps + UI (`--font-body`) → Poppins** (300, 400, 500, 600, 700) chargé via Google Fonts. Sert pour paragraphes, nav, boutons, labels.

Pour mettre l'accent dans un titre (mot-clé fort), utiliser `<strong class="font-bold">`. Ne pas changer de famille à l'intérieur d'un titre.

| Niveau         | Taille                                          | Poids | Notes                       |
| -------------- | ----------------------------------------------- | ----- | --------------------------- |
| `h1`           | `clamp(1.875rem, 3.6vw, 2.375rem)` (~38px max)  | 400   | line-height `1.2`           |
| `h2`           | `clamp(1.625rem, 3vw, 2rem)` (~32px max)        | 400   |                             |
| `h3`           | `clamp(1.25rem, 2vw, 1.5rem)` (~24px max)       | 400   |                             |
| `h4`           | `1.125rem` (18px)                               | 400   |                             |
| Body           | `1rem` / `text-[15px]` en compact               | 400   | Poppins, line-height `1.6`  |
| Nav header     | `text-[14px]`                                   | 500   | Poppins, couleur `--color-fg` |
| Bouton CTA     | `text-[14px]` à `text-[15px]`                   | 500   | Poppins                     |
| Eyebrow / cap  | `text-[11px]`, `tracking-[0.18em]`, uppercase   | 600   | Poppins                     |

---

## 3. Layout & espacement

- **Containers :** `narrow=64rem`, `default=80rem`, `wide=90rem` (via `<Container width="...">`).
- **Padding horizontal :** `px-5` mobile / `sm:px-8` desktop.
- **Sections :** classe utilitaire `.section` = `padding-block: clamp(4rem, 8vw, 7rem)`.
- **Sections compactes :** `.section-tight` = `padding-block: clamp(2.5rem, 5vw, 4rem)`.

### Breakpoints
Tailwind v4 par défaut :
- `sm` : 640px
- `md` : 768px
- `lg` : 1024px — **bascule navigation desktop → mobile**
- `xl` : 1280px
- `2xl` : 1536px

---

## 4. Architecture de navigation

### Top-bar (sur-menu)
- Bandeau fin (h-9), fond `--color-subtle`, bordure bas, **caché en mobile** (`hidden sm:flex`).
- Inséré dans `BaseLayout` AVANT `<Header />`.
- Contenu : statut showroom (🟢/🟠/🔴 calculé en JS selon l'heure : Lun-Ven 9-18h ouvert, Sam sur RDV en orange, sinon fermé) + adresse courte + 📞 téléphone (`tel:`) + 📧 email (`mailto:`, visible ≥ lg).

### Header — 7 chips + logo + CTA
1. **Logo (Accueil)** — clic = `/`
2. **L'entreprise** — drop-down classique → Notre histoire, Notre showroom (ancre)
3. **Nos solutions** — **mega-menu 4 colonnes hybrides** (image + listing) :
   - Chaque colonne = une petite card image (aspect 4/3) cliquable vers le hub + une liste compacte des sous-pages dessous.
   - Card image style "screen reference" : overlay gradient, label blanc souligné bas-gauche, flèche ↗ bas-droite, hover `scale-105`.
   - 4 colonnes :
     - Confort intérieur (image hero) + Murs/Puits de lumière, Verrières
     - Confort extérieur (image carport) + Carports & Marquises, Brise-vues & Claustras
     - Portes (image porte bois-alu) + Porte d'entrée, Porte-fenêtre, Porte de garage, Portes intérieures
     - Fenêtres (image porte-fenêtre) + Fenêtres, Baies vitrées, Volets
   - Colonnes "Portes" et "Fenêtres" pointent toutes deux vers le hub `/solutions/portes-fenetres/`.
4. **Nos partenaires** — drop-down → MéO, Bubendorff, Arcades & Baies, Nos fournisseurs
5. **Réalisations** — page directe
6. **Conseils & Services** — page directe (index du blog)
7. **Contact** — CTA pill bleu "Demandez un rendez-vous"

**Menu mobile** (< 1024px) : burger ouvre un panneau avec `<details>` natifs. La section "Nos solutions" reste **en 4 sous-groupes texte** (Confort intérieur, Confort extérieur, Portes, Fenêtres) pour conserver l'accès rapide à toutes les sous-pages sur petit écran.

**Drop-downs JS** (Header.astro) : un seul registre `data-menu-trigger` ↔ `data-menu-panel` par nom (`entreprise|solutions|partenaires`). Hover + focus pour ouvrir, mouseleave pour fermer avec délai 140ms. ESC ferme tous les panneaux ouverts.

---

## 5. Composants

### Header (`src/components/layout/Header.astro`)
- Sticky en haut, fond blanc, hauteur `h-20` (80px).
- Logo cadre carré `40×40` avec pictogramme blanc sur fond bleu.
- Nav : 6 chips + CTA pill (cf. §4).
- Mega-menu Solutions : pleine largeur, 3 colonnes texte (pas d'images).
- Drop-downs Entreprise/Partenaires : grille 2 colonnes max-width.

### Footer (`src/components/layout/Footer.astro`)
- **Fond sombre `#1a1b1f`** (var `--color-fg`), texte en `white/85`, dégradés `white/55` à `white/70` selon le rôle.
- Décoration : SVG "feuille" placée en bas-gauche, `opacity-[0.06]`, couleur `--color-accent` (cohérent avec le logo).
- **Top grid 5 colonnes** (responsive : 2 cols mobile, 3 cols tablette, 5 cols desktop) :
  - Nos produits · Notre histoire · Nos partenaires · Nos réalisations · Conseils & Services
  - Titre uppercase tracking-[0.16em] cliquable vers le hub, sous-liste en `white/55`.
- **Bande "brand mark"** : énorme titre `Fenêtres-sur-loir` en Palatino italique `clamp(2.5rem, 7vw, 5.5rem)`, à gauche. À droite : copyright + adresse + tél + email.
- **Barre basse** : Mentions légales + Politiques de cookies (liens soulignés) à gauche, icônes réseaux (Facebook, Instagram, LinkedIn) dans cercles `bg-white/5 ring-white/10` à droite.

### Boutons (`src/components/ui/Button.astro`)
- `primary` — pill `bg-accent text-white` + hover plus foncé + micro-translate Y.
- `outline` — bordure fg, fond transparent.
- `ghost` — texte seul, hover passe en accent.
- Forme : `rounded-full px-6 py-3 text-sm font-medium`.
- Flèche ↗ optionnelle (`arrow` prop, défaut `true`).

### Container (`src/components/ui/Container.astro`)
- 3 largeurs : `narrow | default | wide`.
- Centré, padding horizontal responsif.

### Breadcrumb (`src/components/ui/Breadcrumb.astro`)
- Props : `items: { label, href? }[]`. Le dernier item est la page courante (sans href, `aria-current="page"`).
- Rendu sémantique `<nav aria-label="Fil d'Ariane">`.
- **Génère automatiquement** un JSON-LD `BreadcrumbList` (Schema.org).
- Injecté dans le BaseLayout dès que la prop `breadcrumb` est passée — apparaît sous le header dans une bande blanche bordée bas.

### Card (`src/components/ui/Card.astro`)
- **Style overlay** : image en plein cadre (ratio par défaut 3/4 vertical), titre Palatino blanc + description en bas-gauche, bouton pill blanc "Découvrir →".
- Gradient `from-black/80 via-black/30 to-black/10` pour lisibilité du texte sur l'image.
- Hover : image `scale-105` + bouton `translate-x-1` + shadow accentuée.
- Props : `title, description?, href, placeholderLabel, ratio?, image?: ImageMetadata, imageAlt?, ctaLabel?`.
- Fallback `<Placeholder>` si pas d'image fournie.
- Utilisée par `PageHub` (les hubs passent leurs `image` réelles via `cards[].image`).

### PartnerLogoBlock (`src/components/ui/PartnerLogoBlock.astro`)
- Bloc partenaire pour les bandeaux : placeholder logo carré 24×24 + nom + tagline optionnelle.
- Si `href` fourni, devient un lien hover avec micro-translate.

### SchemaJsonLd (`src/components/ui/SchemaJsonLd.astro`)
- Helper qui injecte un ou plusieurs blocs `<script type="application/ld+json">`.
- Accepte `data: object | object[]`.
- Utilisé par `BaseLayout` via la prop `schemaJsonLd`.

### Placeholder (`src/components/ui/Placeholder.astro`)
**Refondu** pour suivre la convention de l'arborescence §4 :
- Props :
  - `ratio: "16-9" | "4-3" | "1-1" | "3-4" | "video" | "auto"`
  - `label: string` — description de l'image attendue (sert d'`aria-label` + texte affiché)
  - `kind: "image" | "video" | "logo"` (défaut `image`) — change l'icône (📷 / 🎥 / 🏷️)
  - `rounded`, `circle` — option de coin/cercle
- Classes BEM-like exposées : `placeholder placeholder--ratio-XX placeholder--{kind}`.
- Style : fond `#e5e7eb`, bordure dashed `#9ca3af`, icône + label centrés en uppercase tracking.

### Stats (`src/components/sections/Stats.astro`)
- Fond `--color-tint`, layout 2 colonnes : phrase d'accroche "Votre entreprise de **menuiserie d'excellence**" (Palatino) à gauche, 3 chiffres (20 ans / +120 / +300 m²) à droite.
- **Compteur animé** (count-up cubic-out, durée 1,6 s) déclenché par `IntersectionObserver` quand la section entre en vue (`threshold: 0.4`). Une seule fois par chargement.
- Pattern réutilisable : `<span data-stat-counter data-target="X">0</span>`. Le prefix/suffix (`+`, ` ans`, ` m²`) est en HTML autour.

### HistoireParallax (`src/components/sections/HistoireParallax.astro`)
- Section haute (180vh) avec enfant `sticky top-0 h-screen`. **8 photos** histoire en absolute (left/width en %), photos **droites** (pas de rotation), `rounded-lg` discret.
- **Animation bottom→top** : chaque photo part en bas hors viewport (`translateY(100vh)`), remonte au scroll, sort par le haut (`translateY(-120vh)`). Speed individuel (`0.85` à `1.4`) + `delay` initial (0–85%) pour échelonner les départs et créer un effet parallax.
- **Texte central sans card** (pas de fond) — le titre h2 est posé directement sur fond blanc, les photos passent par-dessus (ce qui crée l'effet immersif).
- Scroll listener `passive` + `requestAnimationFrame` + `IntersectionObserver` (rootMargin 50%). Respecte `prefers-reduced-motion`.

### ContactForm (`src/components/sections/ContactForm.astro`)
- Fond `--color-tint`, layout 2 cards blanches (`grid lg:grid-cols-[1fr_2fr]`).
- **Card gauche** : pitch tagline "Chez Fenêtres-sur-loir on ne brise pas des cœurs…", 3 bullets (puces accent), logo Qualibat + mention RGE en pied de card.
- **Card droite** : formulaire (Nom/Prénom, Adresse, Tel/Email, Message) avec labels gras + astérisque accent, bouton "Envoyer" rectangle accent.

### VideoSection — mode cinéma (`src/components/sections/VideoSection.astro`)
- Section haute (`180vh`) avec enfant `sticky top-0 h-screen` épinglé pendant le scroll.
- **Centrage visuel** : le frame vidéo est dans un `pt-[80px] sm:pt-[116px]` (compense la hauteur TopBar + Header sticky) pour être centré dans la zone **visible sous le menu**, pas dans le viewport entier.
- **Progression** : `p` (0→1) = `-rect.top / (offsetHeight - vh)`. Onde triangulaire `t = p<0.5 ? p*2 : (1-p)*2`, lissée en ease-in-out cubique `e`.
- **Vidéo** : `transform: scale(e × (1.0 − 0.55) + 0.55)`.
- **Fond** : overlay noir, `opacity = e × 0.96`.
- **Caption** : `opacity = 1 − e`.
- Scroll listener `passive` + `requestAnimationFrame` + `IntersectionObserver` (rootMargin 50%) pour économiser les frames hors-écran.
- Réutilisable via `data-cinema` + `data-cinema-bg|-frame|-caption`.

### TopBar (`src/components/layout/TopBar.astro`)
- Bandeau fin (h-9) **sticky top-0 z-50** au-dessus du header. **Desktop uniquement** (`hidden sm:flex`).
- Header sous-jacent en `sticky sm:top-9 z-40` pour rester sous la TopBar lors du scroll.
- Affiche statut showroom (calcul JS sur l'heure courante), adresse courte, téléphone et email cliquables.
- 3 états : `bg-emerald-500` ouvert (Lun-Ven 9-18h), `bg-amber-500` samedi sur RDV, `bg-rose-500` fermé.
- **Quand le header est en mode `transparent`** (au-dessus du hero), la TopBar adopte le même fond translucide + texte blanc via CSS `body:has(header[data-header-state="transparent"]) [data-topbar]`.

### CTASection (`src/components/sections/CTASection.astro`)
- Bloc CTA "Demander un devis" **réutilisable** sur toute page produit/service.
- Props : `eyebrow?, title?, text?, ctaLabel?, ctaHref?, secondaryLabel?, secondaryHref?, variant?: "tint" | "dark" | "white"`.
- `tint` (défaut) : fond `--color-tint`. `dark` : fond `--color-fg` texte blanc. `white` : fond blanc + ring border.
- Pattern d'usage : un CTASection en bas de chaque page produit, juste après la section "Découvrir aussi".

### CertificationsBanner (`src/components/sections/CertificationsBanner.astro`)
- Bandeau réutilisable "Depuis 2003 · RGE Qualibat · Sur mesure · Menuisier d'Excellence MéO".
- 4 entrées (grid 2×2 mobile, 1×4 desktop) avec icône SVG ronde (calendrier/bouclier/étoile/award) + titre + sous-titre.
- À placer juste après le hero d'une page produit pour ancrer la crédibilité.

### DevisPopup (`src/components/sections/DevisPopup.astro`)
- Pop-up CTA "Demander un devis" qui **slide-in après 15 s** depuis le bas-gauche.
- Position `fixed bottom-4 left-4 z-50`, 360px max, masquable par bouton X ou bouton "Peut-être plus tard".
- **Persistance** :
  - Fermeture définitive (X ou click CTA) → `localStorage.fsl-devis-popup-dismissed=1` (ne réapparaît plus).
  - Fermeture temporaire (Peut-être plus tard) → `sessionStorage` (réapparaît à la prochaine session).
- Animation : `opacity` + `translate-y-4` → `translate-y-0`, transition `500ms ease-out`.
- Inséré globalement dans `BaseLayout` → présent sur **toutes les pages**.
- Prop `delayMs` (défaut 15000) pour ajuster.

### MeoConfiguratorFAB (`src/components/sections/MeoConfiguratorFAB.astro`)
- **Bouton flottant en bas à droite** (`fixed right-4 bottom-4 z-40`), fond `--color-fg`, texte blanc.
- Affiche le logo MéO dans un cercle blanc + label "Configurez votre porte MéO →".
- Lien externe vers `https://www.portemeo.com/Joinery` (le configurateur officiel MéO), avec `target="_blank" rel="noopener noreferrer"`.
- **Affichage conditionnel** dans `BaseLayout` : visible uniquement si `pathname.startsWith('/solutions/portes-fenetres')` ou `pathname.startsWith('/partenaires/meo')`.
- Cohabite avec `DevisPopup` (popup bottom-LEFT, FAB bottom-RIGHT) sans conflit visuel.

### AidsBox (`src/components/sections/AidsBox.astro`)
- Encart "Bénéficiez des aides à la rénovation énergétique" — fond `--color-tint`, bordure accent gauche.
- Liste les dispositifs : MaPrimeRénov', TVA 5,5%, CEE, Crédit d'impôt.
- Lien "documentation aides" (placeholder `#` en attendant PDF officiel).
- Utilisé sur toutes les pages portes + pages produit éligibles RGE.

### Hero (`src/components/sections/Hero.astro`)
- **Image plein écran `hero.png`** via `astro:assets` `<Image>` + double overlay gradient (vertical + horizontal) pour lisibilité.
- `min-height: clamp(640px, 90vh, 920px)`, `margin-top: -80px` (passe sous le header pour effet immersif).
- **Layout** :
  - **Haut-gauche** : pastille Google `★ 4,9 · 87 avis` (lien vers Maps).
  - **Bas-droite** : h1 Palatino + sous-titre + 2 CTA (primary "Demandez un rendez-vous" + outline "Voir nos réalisations").
  - **Très bas** : bandeau logos partenaires sur fond blanc translucide (`bg-white/85 backdrop-blur-md`) — MéO, Bubendorff, Arcades & Baies, DC + séparateur + Qualibat.
- Carry-over avec le **scroll behavior du Header** (le header est `transparent` au-dessus du hero, devient `solid` au-delà de la moitié).

### HistoireParallax (`src/components/sections/HistoireParallax.astro`)

---

## 6. Système d'images & placeholders

**Règle assouplie** (mise à jour) : utiliser une **image réelle** via `astro:assets` + `<Image>` quand elle est disponible dans `src/assets/`. Sinon, fallback sur `<Placeholder>` stylisé avec label descriptif.

### Pattern `astro:assets` + `<Image>` (recommandé dès qu'une image existe)

```astro
---
import { Image } from "astro:assets";
import porte from "../../../assets/porte-7-bois.png";
---
<Image
  src={porte}
  alt="Porte d'entrée bois massif sur mesure MéO installée par Fenêtres sur Loir près d'Angers"
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
  decoding="async"
  format="webp"
  quality={80}
  class="w-full h-auto aspect-[4/3] object-cover"
/>
```

**Règles d'optimisation SEO appliquées systématiquement** :
1. `alt` descriptif **chargé en mots-clés** — convention `{produit} {marque} {matériau} {lieu} par Fenêtres sur Loir`.
2. `width`/`height` natifs auto-injectés par Astro (évite CLS — Core Web Vitals).
3. `loading="eager"` sur le **hero** uniquement (above-the-fold), `loading="lazy"` partout ailleurs.
4. `decoding="async"` toujours.
5. `format="webp"` (compression 25-35% supérieure au PNG/JPG).
6. `quality={80}` — équilibre qualité/poids.
7. `widths` + `sizes` responsive sur hero et grilles produit.
8. Wrapper `<div class="rounded-2xl overflow-hidden ring-1 ring-[var(--color-border)]">` pour cohérence visuelle.

### Pattern `<Placeholder>` (fallback quand pas d'image)

Reste utilisé pour : pages stub, images en attente (modèles MéO Manoir/Phèdre/Apparence, photos showroom, porte de garage sectionnelle, accessoires portes intérieures).

**Label = brief de tournage** : explicite et long (ex. "Photo porte de garage sectionnelle motorisée — gris anthracite avec hublots"). Cela facilite la commande de visuels à un photographe.

### Convention d'usage (Placeholder)
```astro
<Placeholder ratio="16-9" label="Showroom 300 m² Seiches-sur-le-Loir" />
<Placeholder ratio="4-3" kind="video" label="Vidéo making-of MéO" />
<Placeholder ratio="1-1" kind="logo" label="Logo MéO" />
```

### Ratios disponibles
| Token  | Aspect      | Usage typique                         |
| ------ | ----------- | ------------------------------------- |
| `16-9` | `16/9`      | Hero, vidéos, photos panoramiques     |
| `4-3`  | `4/3`       | Cards, vignettes produit              |
| `1-1`  | `1/1`       | Logos, portraits, miniatures galerie  |
| `3-4`  | `3/4`       | Cartes verticales (réalisations)      |
| `video`| alias 16/9  | Pour la lisibilité du code            |
| `auto` | sans ratio  | Conteneur explicite (w/h en classes)  |

### Convention d'`alt` / `label`
Modèle : **`{produit/sujet} {marque si pertinente} {contexte/lieu} par Fenêtres sur Loir`**.

Exemples :
- "Fenêtre bois-aluminium MéO installée à Angers par Fenêtres sur Loir"
- "Volet roulant solaire Bubendorff sur une maison à Durtal"
- "Showroom de 300 m² de Fenêtres sur Loir à Seiches-sur-le-Loir"

---

## 7. Templates de pages (T1 → T8)

L'arborescence §3 prévoit 8 templates mutualisés. **Choix d'implémentation** : seuls les templates réellement répétés (≥ 3 occurrences) sont sortis en composants Astro dans `src/components/templates/`. Les pages uniques (Accueil, Histoire, Réalisations, Contact) composent directement leur markup avec les composants UI.

| Template | Rôle                          | Implémentation                                        |
| -------- | ----------------------------- | ----------------------------------------------------- |
| T1       | Layout global                 | `src/layouts/BaseLayout.astro`                        |
| T2       | Page Accueil                  | Composition directe dans `src/pages/index.astro`      |
| T3       | Page À propos / Histoire      | Composition directe dans `src/pages/entreprise/notre-histoire.astro` |
| **T4**   | **Page Hub catégorie**        | `src/components/templates/PageHub.astro` (5 hubs)     |
| **T5**   | **Page Produit**              | `src/components/templates/PageProduit.astro` (~9 pages) |
| **T6**   | **Page Partenaire**           | `src/components/templates/PagePartenaire.astro` (3 partenaires) |
| T7       | Page Réalisations             | Composition directe dans `src/pages/realisations/index.astro` |
| T8       | Page Contact                  | Composition directe dans `src/pages/contact.astro`    |

### PageHub.astro (T4)
Props : `eyebrow?, title, intro?, heroPlaceholderLabel?, cards[], ctaHref?, ctaLabel?, ctaText?`.

Structure :
1. Bloc intro 2 colonnes (texte + placeholder image)
2. Slot `before-cards` (optionnel — bloc texte intermédiaire)
3. Grille de cards (1/2/3 cols responsive)
4. Slot `after-cards` (optionnel — encart certifications, CTA, etc.)
5. CTA final centré

### PageProduit.astro (T5)
Props : `eyebrow?, title, heroPlaceholderLabel`.

Structure :
1. En-tête (eyebrow + h1)
2. Placeholder hero 16:9
3. Slot par défaut dans un container `.prose-fsl` (max-w-3xl)
4. Styles `.prose-fsl` globaux : titres, paragraphes muted, listes, blockquotes accent, liens soulignés.

### PagePartenaire.astro (T6)
Props : `eyebrow?, title, brand, brandTagline?, heroPlaceholderLabel`.

Structure :
1. En-tête avec logo carré + h1 + tagline
2. Placeholder hero 16:9
3. Slot par défaut dans `.prose-fsl`

---

## 7bis. Header scroll behavior

- État `data-header-state="solid"` par défaut (toutes les pages sans hero).
- Sur la home (présence de `[data-hero-section]`) : état `transparent` au-dessus du hero (fond `rgba(255,255,255,0.05)` + backdrop-blur), bascule en `solid` quand `scrollY > heroHeight / 2`.
- Toggle via JS dans `Header.astro` (scroll listener `passive` + `requestAnimationFrame`).
- Styles CSS dans `global.css` (`header[data-header][data-header-state="…"]`).
- **En mode transparent** :
  - Liens de nav, chevrons, burger mobile → texte **blanc** (hover : accent).
  - TopBar (`body:has(...)`) → fond translucide même style + texte blanc.
  - Mega-menu et drop-downs → fond `rgba(20,22,26,0.85) + backdrop-blur 14px` + texte blanc/blanc-70 pour cohérence visuelle avec le menu.
- Le hero a `margin-top: -80px` (mobile) ou `-116px` (sm+) pour passer sous TopBar+Header (effet immersif).

## 7ter. Mapping images réalisations

`src/lib/realisations-media.ts` mappe chaque `slug` de la collection `realisations` à une `cover` et une `gallery` d'`ImageMetadata`. Utilisé par `realisations/index.astro`, `realisations/[slug].astro` et le composant `RealisationsGrid.astro`. Fallback sur `hero-3.jpg` si slug inconnu.

## 8. SEO / Schema.org

### Métadonnées par page
Chaque page passe à `BaseLayout` :
- `title` — entre 50 et 70 caractères, format `H1 court | Fenêtres sur Loir — descriptif court`
- `description` — entre 140 et 160 caractères, contient le mot-clé principal + zone géographique
- `breadcrumb` (sur niveaux 2/3) — array d'items pour le composant Breadcrumb
- `schemaJsonLd` (recommandé) — objet ou tableau d'objets Schema.org

### Schemas attendus par type de page
| Type page          | Schemas Schema.org                          |
| ------------------ | ------------------------------------------- |
| Accueil            | `LocalBusiness` + `Organization`            |
| Notre histoire     | `Organization` + `LocalBusiness`            |
| Hub Solutions      | `Service`                                   |
| Page Produit       | `Product` (+ `Brand` si pertinent)          |
| Hub Partenaires    | `Organization` (avec `brand[]`)             |
| Page Partenaire    | `Brand` + `Product`                         |
| Réalisations       | `CreativeWork`                              |
| Contact            | `LocalBusiness` + `ContactPoint`            |

### Hiérarchie
- **Un seul `<h1>` par page**. Imposé par le template ou la page elle-même.
- `<h2>` pour les sections principales, `<h3>` pour les sous-sections.
- Breadcrumb auto-injecte un JSON-LD `BreadcrumbList`.

### Canonical & sitemap
- BaseLayout génère automatiquement la balise `<link rel="canonical">` depuis `Astro.url.pathname` et `site`.
- Sitemap auto-généré par `@astrojs/sitemap` (intégration Astro déjà active).

---

## 9. Migration & redirects 301

L'ancienne arborescence (URLs à plat) est redirigée vers la nouvelle via `astro.config.mjs` :

```
/nos-portes              → /solutions/portes-fenetres
/confort-interieur       → /solutions/confort-interieur
/confort-exterieur       → /solutions/confort-exterieur
/notre-histoire          → /entreprise/notre-histoire
/nos-partenaires         → /partenaires
/nos-realisations        → /realisations
/nos-realisations/[slug] → /realisations/[slug]
```

Astro en mode SSG génère des pages HTML avec `<meta http-equiv="refresh">` + canonical pour ces routes — équivalent fonctionnel d'un 301 côté client (à compléter par un 301 côté serveur lors du déploiement si possible).

---

## 10. Iconographie

- Toutes les icônes via SVG inline, `stroke-linecap="round" stroke-linejoin="round"`.
- Épaisseur de trait : `2` (corps), `2.2` (boutons CTA), `2.5` (chevrons de menu).
- Flèche "lien externe / découvrir" : diagonale en haut à droite (↗), pas de cercle autour.
- Icônes réseaux sociaux : remplies (Facebook, LinkedIn) ou stroke (Instagram).

---

## 11. Effets

- **Transitions** : `transition-colors` / `transition-all` avec durée `200ms` par défaut.
- **Hover boutons primaires** : `-translate-y-0.5` + couleur plus foncée.
- **Hover dropdowns** : `opacity` + `visibility` avec transition `200ms`. Fermeture différée 140ms (mouseleave) pour éviter les fermetures involontaires en traversant le gap entre trigger et panel.
- **Ombres** : `shadow-sm` sur boutons, `shadow-md` sur panneaux drop-downs, `shadow-lg` sur cards au hover.

---

## 12. Règles globales

1. **Cohérence > créativité ponctuelle.** Réutiliser les tokens et composants existants avant d'en créer.
2. **Mobile-first** : tester en `< lg` (1024px). Le menu desktop disparaît sous `lg`.
3. **Accessibilité** : tous les liens et boutons doivent avoir un `aria-label` si pas de texte visible. Skip-link `Aller au contenu` injecté par BaseLayout. Contraste AA minimum.
4. **Pas de couleur en dur** dans les composants (sauf palette placeholder §1).
5. **Pas d'image réelle** — uniquement des `<Placeholder>` avec label descriptif.
6. **Mettre à jour ce fichier** après toute évolution structurante du design.
