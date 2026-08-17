// Récupère les avis Google des deux agences via l'API Google Places (New)
// et écrit src/data/avis-google.json, consommé au build par src/lib/avis.ts.
//
// Usage :
//   GOOGLE_PLACES_API_KEY=xxx node scripts/fetch-avis-google.mjs
//   (ou `npm run avis:fetch` avec la clé dans .env)
//
// Clé API : console Google Cloud → activer « Places API (New) » → créer une
// clé restreinte à cette API. L'appel « Place Details » avec le champ
// `reviews` relève du SKU Enterprise : 2 requêtes par exécution, largement
// couvert par le palier gratuit mensuel.
//
// Limite connue de l'API : Google ne renvoie que les 5 avis « les plus
// pertinents » par fiche (choisis par Google, non paramétrable) — soit
// jusqu'à 10 avis affichables pour les deux agences. Les agrégats
// (note moyenne, nombre total) sont eux toujours exacts et à jour.
//
// Le site étant statique, relancer ce script puis redéployer pour
// rafraîchir les avis (par ex. avant chaque déploiement, ou via un build
// planifié mensuel côté Vercel).

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../src/data/avis-google.json", import.meta.url));

const PLACES = {
  seiches: "ChIJ4Vy4HMByCEgRhAhUQ-jXGtQ",
  doue: "ChIJ4d1u_CPrB0gR5lxdDvuOcyU",
};

// Charge .env à la racine si la variable n'est pas déjà dans l'environnement.
if (!process.env.GOOGLE_PLACES_API_KEY) {
  try {
    const env = await readFile(fileURLToPath(new URL("../.env", import.meta.url)), "utf8");
    const m = env.match(/^GOOGLE_PLACES_API_KEY=(.+)$/m);
    if (m) process.env.GOOGLE_PLACES_API_KEY = m[1].trim();
  } catch {
    /* pas de .env — on vérifie juste après */
  }
}

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error(
    "✗ GOOGLE_PLACES_API_KEY manquante.\n" +
      "  Ajoutez-la dans .env (racine du projet) ou dans l'environnement :\n" +
      "  GOOGLE_PLACES_API_KEY=xxx npm run avis:fetch",
  );
  process.exit(1);
}

async function fetchPlace(cle, placeId) {
  const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=fr&regionCode=FR`;
  const res = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": "rating,userRatingCount,reviews",
    },
  });
  if (!res.ok) {
    throw new Error(`Places API ${res.status} pour « ${cle} » : ${await res.text()}`);
  }
  const place = await res.json();

  const reviews = (place.reviews ?? [])
    // On n'affiche que les avis positifs et rédigés (les notes sans texte
    // comptent dans l'agrégat mais ne font pas une carte intéressante).
    .filter((r) => (r.rating ?? 0) >= 4 && r.text?.text?.trim())
    .map((r) => ({
      auteur: r.authorAttribution?.displayName ?? "Client Google",
      note: r.rating,
      texte: r.text.text.trim(),
      dateRelative: r.relativePublishTimeDescription ?? null,
      date: r.publishTime?.slice(0, 10) ?? null,
      agence: cle,
    }));

  return {
    rating: place.rating ?? null,
    count: place.userRatingCount ?? 0,
    reviews,
  };
}

console.log("→ Récupération des avis Google (2 fiches)…");
const [seiches, doue] = await Promise.all([
  fetchPlace("seiches", PLACES.seiches),
  fetchPlace("doue", PLACES.doue),
]);

const data = {
  fetchedAt: new Date().toISOString().slice(0, 10),
  note: "Généré par scripts/fetch-avis-google.mjs — ne pas éditer à la main.",
  agences: { seiches, doue },
};

await writeFile(OUT, JSON.stringify(data, null, 2) + "\n", "utf8");

const total = seiches.count + doue.count;
console.log(
  `✓ ${OUT.split("/").pop()} mis à jour : Seiches ${seiches.rating}/5 (${seiches.count} avis, ` +
    `${seiches.reviews.length} textes), Doué ${doue.rating}/5 (${doue.count} avis, ` +
    `${doue.reviews.length} textes) — ${total} avis au total.`,
);
