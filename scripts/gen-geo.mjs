// Génère src/data/communes-geo.ts : TOUTES les communes du 49 + contour,
// projetées sur viewBox 1000x782, simplifiées (Douglas-Peucker).
import { writeFileSync } from "node:fs";

const BASE = "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements/49-maine-et-loire";
const VIEW_W = 1000, VIEW_H = 782;

// france-geojson omet l'article : on réaligne sur les slugs d'URL existants.
const SLUG_FIX = {
  "hauts-d-anjou": "les-hauts-d-anjou",
  "lion-d-angers": "le-lion-d-angers",
  "ponts-de-ce": "les-ponts-de-ce",
};
const slugify = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

async function getJSON(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
}

const featuresOf = (g) =>
  g.type === "FeatureCollection" ? g.features
  : g.type === "Feature" ? [g]
  : [{ geometry: g }];

const communesGeo = featuresOf(await getJSON(`${BASE}/communes-49-maine-et-loire.geojson`));
const depGeo = featuresOf(await getJSON(`${BASE}/departement-49-maine-et-loire.geojson`));

// --- bbox global (sur le contour départemental) -------------------------
let lonMin = Infinity, lonMax = -Infinity, latMin = Infinity, latMax = -Infinity;
const scanCoords = (coords) => {
  if (typeof coords[0] === "number") {
    const [lon, lat] = coords;
    if (lon < lonMin) lonMin = lon; if (lon > lonMax) lonMax = lon;
    if (lat < latMin) latMin = lat; if (lat > latMax) latMax = lat;
  } else coords.forEach(scanCoords);
};
depGeo.forEach((f) => scanCoords(f.geometry.coordinates));

const sx = VIEW_W / (lonMax - lonMin);
const sy = VIEW_H / (latMax - latMin);
const project = ([lon, lat]) => [
  (lon - lonMin) * sx,
  (latMax - lat) * sy,
];

// --- Douglas-Peucker ----------------------------------------------------
function rdp(pts, eps) {
  if (pts.length < 3) return pts;
  let dmax = 0, idx = 0;
  const [ax, ay] = pts[0], [bx, by] = pts[pts.length - 1];
  const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy) || 1;
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i];
    const d = Math.abs((px - ax) * dy - (py - ay) * dx) / len;
    if (d > dmax) { dmax = d; idx = i; }
  }
  if (dmax > eps) {
    const left = rdp(pts.slice(0, idx + 1), eps);
    const right = rdp(pts.slice(idx), eps);
    return left.slice(0, -1).concat(right);
  }
  return [pts[0], pts[pts.length - 1]];
}

const round = (n) => Math.round(n * 10) / 10;

// Convertit une géométrie (Polygon/MultiPolygon) en path SVG + centroïde
function geomToPath(geom, eps) {
  const polys = geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates;
  let d = "";
  let cxSum = 0, cySum = 0, cN = 0, bestArea = 0, bestC = null;
  for (const poly of polys) {
    // anneau extérieur uniquement (poly[0]) — on ignore les trous (rare ici)
    const ring = poly[0].map(project);
    let simp = rdp(ring, eps);
    if (simp.length < 4) simp = ring;
    // path
    d += simp.map((p, i) => `${i === 0 ? "M" : "L"}${round(p[0])} ${round(p[1])}`).join(" ") + " Z ";
    // aire + centroïde du polygone (pour placer le label sur le plus grand)
    let area = 0, cx = 0, cy = 0;
    for (let i = 0; i < simp.length - 1; i++) {
      const [x0, y0] = simp[i], [x1, y1] = simp[i + 1];
      const cross = x0 * y1 - x1 * y0;
      area += cross; cx += (x0 + x1) * cross; cy += (y0 + y1) * cross;
    }
    area *= 0.5;
    if (Math.abs(area) > 1e-6) { cx /= 6 * area; cy /= 6 * area; }
    if (Math.abs(area) > bestArea) { bestArea = Math.abs(area); bestC = [cx, cy]; }
  }
  return { d: d.trim(), cx: round(bestC[0]), cy: round(bestC[1]) };
}

// --- contour départemental ---------------------------------------------
const depPath = depGeo
  .map((f) => geomToPath(f.geometry, 0.8).d)
  .join(" ");

// --- communes -----------------------------------------------------------
const entries = communesGeo
  .map((f) => {
    const nom = f.properties.nom;
    const rawSlug = slugify(nom);
    const slug = SLUG_FIX[rawSlug] ?? rawSlug;
    const { d, cx, cy } = geomToPath(f.geometry, 0.7);
    return { slug, nom, d, cx, cy };
  })
  .sort((a, b) => a.slug.localeCompare(b.slug));

// --- écriture du .ts ----------------------------------------------------
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
let out = `// Polygones de TOUTES les communes du Maine-et-Loire (49), projetés sur la
// même grille que le contour départemental (viewBox 0 0 1000 782).
// Source : france-geojson, simplifié par Douglas-Peucker.
// Généré par scripts/gen-geo.mjs — ne pas éditer à la main.

export interface CommuneGeo { nom: string; d: string; cx: number; cy: number; }

/** Contour complet du Maine-et-Loire, même projection que les communes. */
export const depPath =
  "${esc(depPath)}";

export const communesGeo: Record<string, CommuneGeo> = {
`;
for (const e of entries) {
  out += `  "${e.slug}": { nom: "${esc(e.nom)}", cx: ${e.cx}, cy: ${e.cy}, d: "${esc(e.d)}" },\n`;
}
out += `};\n`;

writeFileSync("src/data/communes-geo.ts", out);
console.log(`communes: ${entries.length}`);
console.log(`bbox lon[${lonMin},${lonMax}] lat[${latMin},${latMax}]`);
console.log(`file bytes: ${out.length}`);
// vérif alignement : angers doit être ~ (498, 305) comme l'ancienne data
const angers = entries.find((e) => e.slug === "angers");
console.log(`angers cx/cy = ${angers?.cx}, ${angers?.cy}`);
