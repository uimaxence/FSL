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
  vite: {
    plugins: [tailwindcss()],
  },
});
