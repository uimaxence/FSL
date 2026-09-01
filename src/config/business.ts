// Source UNIQUE des informations d'entreprise (NAP, identité, réseaux, horaires).
//
// ⚠️ Plus aucune adresse / téléphone / email en dur dans un composant :
// tout consomme ce fichier (ou `AGENCES` pour les données géo par agence).
//
// Les données géographiques par agence (adresse, CP, coordonnées, tél) vivent
// dans src/data/communes.ts (`AGENCES`) car elles alimentent aussi la carte et
// les pages communes. Ce fichier les réexporte et ajoute la couche « entité ».

import { AGENCES, type Agence, type AgenceRattachement } from "../data/communes";

export const SITE_URL = "https://www.fenetres-sur-loir.fr";

/** Convertit un numéro français « 02 41 77 04 08 » en E.164 « +33241770408 ». */
export function toE164(fr: string): string {
  const digits = fr.replace(/[^\d+]/g, "");
  return digits.startsWith("0") ? "+33" + digits.slice(1) : digits;
}

/** Identité de l'entreprise (niveau Organization). */
export const business = {
  name: "Fenêtres sur Loir",
  // Registre (vérifié le 01/09/2026 sur recherche-entreprises.api.gouv.fr) :
  // « Fenêtres sur Loir » est le nom commercial de la SARL JERELI.
  legalName: "JERELI",
  legalForm: "SARL",
  url: SITE_URL,
  foundingDate: "2003",
  email: "contacts@fenetres-sur-loir.fr",
  priceRange: "€€",
  logo: `${SITE_URL}/logo-FSL.png`,
  image: `${SITE_URL}/og.jpg`,
  siren: "444792618",
  siret: "44479261800035" as string | null,
  certification: "RGE Qualibat",
  brands: ["MéO", "Bubendorff", "Arcades & Baies"],
} as const;

/**
 * Fiches Google Business Profile par agence.
 * Place IDs relevés le 31/07/2026 (fiches revendiquées, actives).
 * Ces IDs alimentent le script `npm run avis:fetch` et les liens avis du site.
 */
export const googleBusiness = {
  seiches: {
    placeId: "ChIJ4Vy4HMByCEgRhAhUQ-jXGtQ",
    cid: "15283765677997164676",
    /** Fiche Google Maps (tous les avis). */
    mapsUrl: "https://www.google.com/maps?cid=15283765677997164676",
    /** Formulaire « Laisser un avis » pré-ouvert. */
    writeReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJ4Vy4HMByCEgRhAhUQ-jXGtQ",
  },
  doue: {
    placeId: "ChIJ4d1u_CPrB0gR5lxdDvuOcyU",
    cid: "2698657810653994214",
    mapsUrl: "https://www.google.com/maps?cid=2698657810653994214",
    writeReviewUrl:
      "https://search.google.com/local/writereview?placeid=ChIJ4d1u_CPrB0gR5lxdDvuOcyU",
  },
} as const;

/** Profils sociaux. `null` = pas de profil réel → non rendu, non injecté en sameAs. */
export const social = {
  facebook: "https://www.facebook.com/fenetressurloir",
  instagram: "https://www.instagram.com/fenetressurloir/" as string | null,
  linkedin: "https://www.linkedin.com/company/fen%C3%AAtres-sur-loir/" as string | null,
} as const;

/** URLs de profils réellement renseignés — pour le champ `sameAs` des schémas. */
export const sameAs: string[] = [social.facebook, social.instagram, social.linkedin].filter(
  (u): u is string => Boolean(u),
);

/** Horaires showroom (identiques aux deux agences). Format machine (schema.org). */
export const openingHoursSpec = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "12:00",
  },
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "14:00",
    closes: "18:30",
  },
  { dayOfWeek: ["Saturday"], opens: "09:00", closes: "12:00" },
] as const;

/** Horaires en clair (affichage). */
export const openingHoursHuman = [
  "Lun – Ven : 9h – 12h / 14h – 18h30",
  "Sam : 9h – 12h",
] as const;

/** Agence de contact principale (siège / showroom historique). */
export const mainAgence = AGENCES.seiches;

/** PostalAddress schema.org pour une agence. */
export function postalAddress(a: Agence) {
  return {
    "@type": "PostalAddress",
    streetAddress: a.adresse,
    postalCode: a.codePostal,
    addressLocality: a.ville,
    addressRegion: "Maine-et-Loire",
    addressCountry: "FR",
  };
}

/** Adresse formatée sur une ligne : « 287 Rue de l'Innovation, 49140 Seiches-sur-le-Loir ». */
export function addressOneLine(a: Agence): string {
  return `${a.adresse}, ${a.codePostal} ${a.ville}`;
}

/** openingHoursSpecification schema.org (tableau prêt à insérer). */
export const openingHoursSpecification = openingHoursSpec.map((s) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [...s.dayOfWeek],
  opens: s.opens,
  closes: s.closes,
}));

export { AGENCES, type Agence, type AgenceRattachement };
