// Maillage interne géographique.
//
// Les pages communes étaient des culs-de-sac (liées seulement depuis la home et
// /zones-intervention). On calcule ici, pour chaque commune, ses voisines les
// plus proches à vol d'oiseau (haversine sur lat/lng) — un maillage par
// PROXIMITÉ, pas alphabétique.

import { communes, type Commune } from "../data/communes";

function haversineKm(a: Commune, b: Commune): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** Les `n` communes (parmi celles ayant une page) les plus proches de `slug`. */
export function communesVoisines(slug: string, n = 4): Commune[] {
  const cible = communes.find((c) => c.slug === slug);
  if (!cible) return [];
  return communes
    .filter((c) => c.slug !== slug)
    .map((c) => ({ c, d: haversineKm(cible, c) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, n)
    .map((o) => o.c);
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Retrouve la page commune correspondant au lieu d'une réalisation, si elle existe. */
export function communePourLieu(location: string): Commune | null {
  const l = slugify(location);
  return (
    communes.find((c) => c.slug === l) ||
    communes.find((c) => slugify(c.nom) === l) ||
    // tolère « Seiches-sur-Loir » ↔ slug « seiches-sur-le-loir »
    communes.find((c) => c.slug.replace("-le-", "-") === l) ||
    null
  );
}

/** Les plus grandes villes couvertes (pour le maillage des pages solutions). */
export const grandesVilles = [
  { nom: "Angers", slug: "angers" },
  { nom: "Cholet", slug: "cholet" },
  { nom: "Saumur", slug: "saumur" },
];
