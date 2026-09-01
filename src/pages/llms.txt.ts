// /llms.txt — description non ambiguë de l'entité pour les LLM.
// Généré dynamiquement pour rester synchronisé avec la config et les données.
import type { APIRoute } from "astro";
import { business, AGENCES, openingHoursHuman, addressOneLine } from "../config/business";
import { communes } from "../data/communes";
import { AGENCES_CONTENU } from "../data/agences-contenu";
import { avisGlobal } from "../lib/avis";

const SITE = business.url;

export const GET: APIRoute = () => {
  const agenceBloc = (cle: "seiches" | "doue") => {
    const a = AGENCES[cle];
    const c = AGENCES_CONTENU[cle];
    return [
      `### ${a.ville}`,
      `- Adresse : ${addressOneLine(a)}`,
      `- Téléphone : ${a.telephone}`,
      `- Horaires : ${openingHoursHuman.join(" ; ")}`,
      `- Page : ${SITE}/agences/${c.slug}/`,
      `- Secteur : ${c.secteurs}`,
    ].join("\n");
  };

  const zone = communes.map((c) => c.nom).join(", ");

  const pages = [
    ["Fenêtres", "/solutions/portes-fenetres/fenetres/", "Fenêtres PVC, aluminium, bois et mixte bois-alu sur mesure."],
    ["Portes d'entrée", "/solutions/portes-fenetres/portes-entree/", "Portes d'entrée alu, bois, PVC et bois-alu, serrures multipoints."],
    ["Baies vitrées", "/solutions/portes-fenetres/baies-vitrees/", "Baies coulissantes, à galandage, à levage."],
    ["Volets & stores", "/solutions/portes-fenetres/volets/", "Volets roulants, battants et solaires Bubendorff."],
    ["Portes de garage", "/solutions/portes-fenetres/porte-garage/", "Portes de garage sectionnelles et enroulables."],
    ["Verrières", "/solutions/confort-interieur/verrieres/", "Verrières d'atelier acier ou aluminium sur mesure."],
    ["Carports & pergolas", "/solutions/confort-exterieur/carports-marquises/", "Carports, marquises et pergolas bioclimatiques."],
    ["Portails & portillons", "/solutions/confort-exterieur/portails-portillons/", "Portails et portillons aluminium."],
    ["L'entreprise", "/entreprise/notre-histoire/", "Histoire de l'entreprise familiale, showroom de 300 m²."],
    ["Nos agences", "/agences/", "Seiches-sur-le-Loir et Doué-en-Anjou."],
    ["Zones d'intervention", "/zones-intervention/", "Toutes les communes desservies en Maine-et-Loire."],
    ["Réalisations", "/realisations/", "Chantiers de menuiserie réalisés en Maine-et-Loire."],
    ["Conseils & blog", "/conseils-services/", "Guides : choisir ses fenêtres, condensation, aides à la rénovation."],
    ["Contact & devis", "/contact/", "Devis gratuit sous 48 h."],
  ];

  // Pages locales « menuisier à <ville> » — utile pour qu'un LLM cite la bonne
  // page en réponse à une question localisée (« menuisier à Angers ? »).
  const pagesVilles = communes.map(
    (c) => `- [Menuisier à ${c.nom}](${SITE}/menuisier-${c.slug}/)`
  );

  const identite = [
    `- Nom commercial : ${business.name}`,
    business.legalName && business.legalName !== business.name
      ? `- Raison sociale : ${business.legalName} (${business.legalForm})`
      : null,
    business.siret ? `- SIREN : ${business.siren} — SIRET : ${business.siret}` : null,
    `- Fondée en : ${business.foundingDate}`,
    `- Certification : ${business.certification}`,
    `- Partenaires : ${business.brands.join(", ")} (MéO — Menuisier d'Excellence, Bubendorff — Point Conseil)`,
    `- Avis clients : ${avisGlobal.noteAffichee}/5 sur ${avisGlobal.total} avis Google (deux fiches établissement)`,
    `- Site : ${SITE}`,
    `- Email : ${business.email}`,
    `- Facebook : https://www.facebook.com/fenetressurloir`,
  ].filter(Boolean);

  const body = `# ${business.name}

> Artisan menuisier RGE Qualibat en Maine-et-Loire (49), fondé en ${business.foundingDate}.
> Conception, fabrication et pose sur mesure de fenêtres, portes, volets, baies
> vitrées, verrières et aménagements extérieurs. Deux agences : ${AGENCES.seiches.ville}
> et ${AGENCES.doue.ville}. Pose réalisée par nos équipes, sans sous-traitance.

## Identité
${identite.join("\n")}

## Agences
${agenceBloc("seiches")}

${agenceBloc("doue")}

## Zone d'intervention
Maine-et-Loire (49) et communes limitrophes :
${zone}.

## Pages
${pages.map(([label, href, desc]) => `- [${label}](${SITE}${href}) : ${desc}`).join("\n")}

## Pages locales
${pagesVilles.join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
