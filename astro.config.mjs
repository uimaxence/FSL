import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.fenetres-sur-loir.fr",
  integrations: [
    sitemap({
      // lastmod = date du build (à défaut d'un historique par page).
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  redirects: {
    "/nos-portes": "/solutions/portes-fenetres",
    "/confort-interieur": "/solutions/confort-interieur",
    "/confort-exterieur": "/solutions/confort-exterieur",
    "/notre-histoire": "/entreprise/notre-histoire",
    "/nos-partenaires": "/partenaires",
    "/nos-realisations": "/realisations",
    "/nos-realisations/[slug]": "/realisations/[slug]",
    "/blog/bien-choisir-ses-fenetres": "/blog/fenetrier-maine-et-loire",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
