# Fenêtres-sur-Loir — Site Astro

Refonte du site fenetres-sur-loir.fr (anciennement Webflow) en Astro 5 + Tailwind v4.

## Stack

- **Astro 5** (statique, zéro JS par défaut)
- **Tailwind CSS v4** (via plugin Vite)
- **TypeScript strict**
- **Content Collections** pour blog & réalisations

## Commandes

```bash
npm install         # installer les dépendances
npm run dev         # serveur de dev sur http://localhost:4321
npm run build       # build production dans dist/
npm run preview     # preview du build
```

## Structure

```
src/
├── layouts/        Layouts (Base, BlogPost)
├── components/
│   ├── ui/         Atomes (Button, Placeholder, Container, SectionHeading)
│   ├── layout/     Header, Footer
│   └── sections/   Sections de page (Hero, Stats, Testimonials...)
├── content/        Content Collections (blog, realisations)
├── pages/          Routes du site
└── styles/         Global CSS + tokens
```

## Assets

Les vraies images/vidéos seront ajoutées plus tard. Tous les visuels sont actuellement remplacés par le composant `<Placeholder />`.

## Tokens de design

Définis dans `src/styles/global.css` (CSS vars) et exposés à Tailwind via `@theme`. Couleurs et police (Poppins) calquées sur le site Webflow d'origine pour conserver la cohérence visuelle.
