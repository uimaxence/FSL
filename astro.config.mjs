import { readdirSync, readFileSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Date réelle de dernière modification de chaque article : la plus récente de
// `date` et `dateModified` dans son en-tête. Elle alimente le `lastmod` du
// sitemap, pour les articles seulement (bilan du 09/11/2026 : 7 guides sur 18
// sans aucune impression Google, sains techniquement, que rien ne signalait
// comme récents).
const DOSSIER_BLOG = new URL("./src/content/blog/", import.meta.url);
const datesArticles = new Map(
  readdirSync(DOSSIER_BLOG)
    .filter((fichier) => fichier.endsWith(".md"))
    .map((fichier) => {
      const entete = readFileSync(new URL(fichier, DOSSIER_BLOG), "utf8").split(/^---\s*$/m)[1] ?? "";
      const dates = [...entete.matchAll(/^\s*(?:date|dateModified):\s*["']?(\d{4}-\d{2}-\d{2})/gm)]
        .map((m) => m[1])
        .sort();
      return [fichier.replace(/\.md$/, ""), dates.at(-1)];
    }),
);

export default defineConfig({
  site: "https://www.fenetres-sur-loir.fr",
  // Forme canonique unique : trailing slash partout (canonical, sitemap et
  // liens internes alignés) — supprime les doublons « /page » vs « /page/ »
  // constatés dans la Search Console.
  trailingSlash: "always",
  integrations: [
    // lastmod absent hors articles : une date de build identique sur toutes
    // les pages est un signal sans valeur (voire trompeur) pour Google. Les
    // articles portent leur vraie date (voir `datesArticles`).
    sitemap({
      // Pages de test (/test-…) : jamais dans le sitemap.
      filter: (page) => !page.includes("/test-"),
      serialize(item) {
        const article = item.url.match(/\/blog\/([^/]+)\/$/);
        const date = article && datesArticles.get(article[1]);
        if (date) item.lastmod = `${date}T00:00:00.000Z`;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
