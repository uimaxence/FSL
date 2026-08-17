// Constructeurs de JSON-LD partagés.
//
// Objectif : un graphe d'entité unique et relié (@graph + @id) plutôt que des
// blocs Organization/LocalBusiness dupliqués et isolés. Toutes les pages
// pointent vers les mêmes @id, ce qui permet aux moteurs (et aux LLM) de
// consolider l'entité « Fenêtres sur Loir ».

import {
  AGENCES,
  business,
  sameAs,
  SITE_URL,
  toE164,
  postalAddress,
  openingHoursSpecification,
  type AgenceRattachement,
} from "../config/business";
import { communes, type Commune } from "../data/communes";
import { AGENCES_CONTENU } from "../data/agences-contenu";
import { avisAgence } from "./avis";
import { googleBusiness } from "../config/business";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function agencyUrl(cle: AgenceRattachement): string {
  return `${SITE_URL}/agences/${AGENCES_CONTENU[cle].slug}`;
}
export function agencyId(cle: AgenceRattachement): string {
  return `${agencyUrl(cle)}#business`;
}

const rgeCredential = {
  "@type": "EducationalOccupationalCredential",
  credentialCategory: "certification",
  name: "RGE Qualibat",
};

/** Nœud Organization (entité racine). */
export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    logo: { "@type": "ImageObject", url: business.logo },
    image: business.image,
    foundingDate: business.foundingDate,
    email: business.email,
    telephone: toE164(AGENCES.seiches.telephone),
    address: postalAddress(AGENCES.seiches),
    areaServed: { "@type": "AdministrativeArea", name: "Maine-et-Loire" },
    sameAs,
    brand: business.brands.map((b) => ({ "@type": "Brand", name: b })),
    knowsAbout: [
      "Menuiserie",
      "Fenêtres sur mesure",
      "Portes d'entrée",
      "Volets roulants",
      "Baies vitrées",
      "Verrières",
      "Rénovation énergétique",
    ],
    hasCredential: rgeCredential,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: toE164(AGENCES.seiches.telephone),
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "French",
    },
  };
}

/** Nœud WebSite. */
export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: business.url,
    name: business.name,
    inLanguage: "fr-FR",
    publisher: { "@id": ORG_ID },
  };
}

/** Nœud d'une agence (LocalBusiness / HomeAndConstructionBusiness), relié à l'Organization. */
export function agencyNode(cle: AgenceRattachement) {
  const a = AGENCES[cle];
  const communesAgence = communes.filter(
    (c) => c.agence === cle && c.slug !== AGENCES_CONTENU[cle].slug,
  );
  // Note Google réelle de la fiche (src/data/avis-google.json).
  // Google n'affiche plus d'étoiles en SERP pour les avis « self-serving »
  // sur LocalBusiness, mais l'agrégat reste lu par Bing et les LLM (GEO)
  // et consolide l'entité. La fiche Google Maps est ajoutée en sameAs.
  const avis = avisAgence(cle);
  return {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": agencyId(cle),
    name: `Fenêtres sur Loir — Agence de ${a.ville}`,
    description: AGENCES_CONTENU[cle].metaDescription,
    url: agencyUrl(cle),
    image: business.image,
    logo: business.logo,
    telephone: toE164(a.telephone),
    email: business.email,
    priceRange: business.priceRange,
    parentOrganization: { "@id": ORG_ID },
    address: postalAddress(a),
    geo: { "@type": "GeoCoordinates", latitude: a.lat, longitude: a.lng },
    openingHoursSpecification,
    areaServed: communesAgence.map((c) => ({ "@type": "City", name: c.nom })),
    hasCredential: rgeCredential,
    sameAs: [...sameAs, googleBusiness[cle].mapsUrl],
    ...(avis && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avis.note,
        reviewCount: avis.total,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };
}

/** Graphe complet du site : Organization + WebSite + les deux agences. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), agencyNode("seiches"), agencyNode("doue")],
  };
}

/** Question/réponse pour le FAQPage. */
export interface FaqEntry {
  question: string;
  reponse: string;
}

/**
 * Graphe d'une page commune : Organization + agence de rattachement +
 * Service (provider → l'agence, areaServed → la ville) + FAQPage éventuel.
 */
export function communeGraph(commune: Commune, faq: FaqEntry[] = []) {
  const communeUrl = `${SITE_URL}/menuisier-${commune.slug}`;
  const service = {
    "@type": "Service",
    "@id": `${communeUrl}#service`,
    serviceType: "Pose et remplacement de menuiseries sur mesure",
    name: `Menuisier à ${commune.nom}`,
    description: commune.metaDescription,
    provider: { "@id": agencyId(commune.agence) },
    areaServed: {
      "@type": "City",
      name: commune.nom,
      address: {
        "@type": "PostalAddress",
        postalCode: commune.codePostal,
        addressLocality: commune.nom,
        addressRegion: "Maine-et-Loire",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: commune.lat, longitude: commune.lng },
    },
  };

  const graph: Array<Record<string, unknown>> = [
    organizationNode(),
    agencyNode(commune.agence),
    service,
  ];

  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${communeUrl}#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.reponse },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Graphe minimal : Organization seule (pages « entité » : histoire, contact…). */
export function organizationGraph(extra: Array<Record<string, unknown>> = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), ...extra],
  };
}
