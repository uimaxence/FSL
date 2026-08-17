// Couche d'accès aux avis Google.
//
// Source : src/data/avis-google.json (généré par `npm run avis:fetch`,
// pré-rempli avec les agrégats relevés le 31/07/2026). Ce module :
//  - calcule l'agrégat global pondéré des deux fiches (note + total) ;
//  - fusionne les avis API avec les 4 avis « vitrine » historiques
//    (vrais avis Google, conservés car illustrés de photos de chantier),
//    en dédupliquant par auteur ;
//  - expose les liens fiche / « laisser un avis ».

import data from "../data/avis-google.json";
import { googleBusiness, type AgenceRattachement } from "../config/business";

export interface AvisGoogle {
  auteur: string;
  note: number;
  texte: string;
  /** Ex. « il y a 2 mois » (fourni par l'API, null pour les avis vitrine). */
  dateRelative: string | null;
  /** Localité affichée (avis vitrine uniquement). */
  localisation?: string;
  agence: AgenceRattachement;
}

/** Avis vitrine : vrais avis Google historiques, associés à des photos de chantier. */
export const AVIS_VITRINE: AvisGoogle[] = [
  {
    auteur: "Julien D.",
    localisation: "Seiches, 49400",
    note: 5,
    texte:
      "Une belle équipe, à l'écoute et très professionnelle. Du premier rendez-vous à la pose tout est parfait. N'hésitez pas si vous cherchez une entreprise de qualité pour la réalisation de vos ouvertures.",
    dateRelative: null,
    agence: "seiches",
  },
  {
    auteur: "Guy G.",
    localisation: "Angers, 49800",
    note: 5,
    texte:
      "En 2021, j'ai lancé un beau projet de rénovation de 10 baies vitrées avec volet roulant motorisé et 2 portes d'entrée — l'une côté jardin, l'autre côté rue avec sa marquise — le tout en alu. Le choix du prestataire s'est porté rapidement vers Fenêtres sur Loir avec des critères de sérieux, prix et qualité pour les produits proposés. Le résultat est parfait.",
    dateRelative: null,
    agence: "seiches",
  },
  {
    auteur: "Valérie G.",
    localisation: "Angers, 49800",
    note: 5,
    texte:
      "Vous avez besoin de changer votre porte d'entrée et/ou vos fenêtres, sans aucune hésitation faites appel à Fenêtres sur Loir ! Rosa sera votre conseillère, elle sera à votre écoute et vous donnera des super idées.",
    dateRelative: null,
    agence: "seiches",
  },
  {
    auteur: "Laurent S.",
    localisation: "La Flèche, 49400",
    note: 5,
    texte:
      "Nous avons changé 9 fenêtres, 2 portes-fenêtres et une baie vitrée dans notre maison. Excellents conseils et excellents produits. Une équipe de monteurs très pros qui nous a laissé un chantier très propre. Encore merci pour cette belle réalisation.",
    dateRelative: null,
    agence: "seiches",
  },
];

/** Clé de déduplication : « Julien D. » et « Julien Dupont » → « julien d ». */
function cleAuteur(nom: string): string {
  const mots = nom
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  if (mots.length === 0) return nom.toLowerCase();
  return mots[0] + (mots[1] ? ` ${mots[1][0]}` : "");
}

interface AgenceAvisData {
  rating: number | null;
  count: number;
  reviews: Array<{
    auteur: string;
    note: number;
    texte: string;
    dateRelative: string | null;
    agence: string;
  }>;
}

const agences = data.agences as Record<AgenceRattachement, AgenceAvisData>;
const entries = Object.values(agences).filter((a) => a.rating !== null && a.count > 0);

const total = entries.reduce((s, a) => s + a.count, 0);
const notePonderee = total > 0 ? entries.reduce((s, a) => s + (a.rating ?? 0) * a.count, 0) / total : 0;
/** Note arrondie au dixième (valeur numérique, pour le JSON-LD). */
const note = Math.round(notePonderee * 10) / 10;

/** Agrégat global des deux fiches + liens canoniques. */
export const avisGlobal = {
  note,
  /** Note au format français, ex. « 4,8 ». */
  noteAffichee: note.toFixed(1).replace(".", ","),
  total,
  /** Fiche principale (Seiches) — cible du badge « avis Google ». */
  mapsUrl: googleBusiness.seiches.mapsUrl,
  writeReviewUrl: googleBusiness.seiches.writeReviewUrl,
} as const;

/** Agrégat d'une agence (pour le JSON-LD LocalBusiness). */
export function avisAgence(cle: AgenceRattachement): { note: number; total: number } | null {
  const a = agences[cle];
  if (!a || a.rating === null || a.count === 0) return null;
  return { note: a.rating, total: a.count };
}

/** Avis API + avis vitrine, dédupliqués par auteur, meilleures notes d'abord. */
export const avisGoogle: AvisGoogle[] = (() => {
  const vus = new Set<string>();
  const fusion: AvisGoogle[] = [];
  const api = Object.values(agences).flatMap((a) => a.reviews) as AvisGoogle[];
  // Les avis API passent en premier : plus récents et datés.
  for (const avis of [...api, ...AVIS_VITRINE]) {
    const cle = cleAuteur(avis.auteur);
    if (vus.has(cle)) continue;
    vus.add(cle);
    fusion.push(avis);
  }
  return fusion;
})();
