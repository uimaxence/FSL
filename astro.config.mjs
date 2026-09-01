import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.fenetres-sur-loir.fr",
  // Forme canonique unique : trailing slash partout (canonical, sitemap et
  // liens internes alignés) — supprime les doublons « /page » vs « /page/ »
  // constatés dans la Search Console.
  trailingSlash: "always",
  integrations: [
    // lastmod volontairement absent : une date de build identique sur toutes
    // les pages est un signal sans valeur (voire trompeur) pour Google.
    sitemap(),
  ],
  redirects: {
    // Cibles avec trailing slash : évite un second saut de redirection
    // vers la forme canonique.
    "/nos-portes": "/solutions/portes-fenetres/",
    "/confort-interieur": "/solutions/confort-interieur/",
    "/confort-exterieur": "/solutions/confort-exterieur/",
    "/notre-histoire": "/entreprise/notre-histoire/",
    "/nos-partenaires": "/partenaires/",
    "/nos-realisations": "/realisations/",
    "/nos-realisations/[slug]": "/realisations/[slug]",
    "/blog/bien-choisir-ses-fenetres": "/blog/fenetrier-maine-et-loire/",

    // Anti-cannibalisation : l'article blog visait le même mot-clé que la page
    // ville « menuisier cholet ». Contenu fusionné dans la page, URL redirigée.
    "/blog/menuisier-cholet": "/menuisier-cholet/",

    // Élagage SEO (juil. 2026) : 16 communes à volume nul, éloignées des agences,
    // sans page dédiée. Anciennes URL redirigées vers le hub des zones.
    "/menuisier-brissac-loire-aubance": "/zones-intervention/",
    "/menuisier-segre-en-anjou-bleu": "/zones-intervention/",
    "/menuisier-chalonnes-sur-loire": "/zones-intervention/",
    "/menuisier-saint-georges-sur-loire": "/zones-intervention/",
    "/menuisier-mauges-sur-loire": "/menuisier-cholet/",
    "/menuisier-montrevault-sur-evre": "/menuisier-cholet/",
    "/menuisier-oree-d-anjou": "/zones-intervention/",
    "/menuisier-le-lion-d-angers": "/zones-intervention/",
    "/menuisier-les-hauts-d-anjou": "/zones-intervention/",
    "/menuisier-ombree-d-anjou": "/zones-intervention/",
    "/menuisier-noyant-villages": "/zones-intervention/",
    "/menuisier-chemille-en-anjou": "/menuisier-cholet/",
    "/menuisier-beaupreau-en-mauges": "/menuisier-cholet/",
    "/menuisier-sevremoine": "/menuisier-cholet/",
    "/menuisier-longue-jumelles": "/zones-intervention/",
    "/menuisier-allonnes": "/menuisier-saumur/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
