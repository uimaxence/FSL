// Contenu éditorial des pages agences (/agences/[slug]).
// Les données NAP/géo viennent de `AGENCES` (src/data/communes.ts) ; ce fichier
// n'ajoute que le texte propre à chaque page agence + le rattachement des communes.
//
// ⚠️ Contenu factuel uniquement. Ne pas inventer de date d'ouverture ni de chiffre.

import type { AgenceRattachement } from "./communes";

export interface AgenceContenu {
  /** slug d'URL : /agences/<slug> */
  slug: string;
  /** clé de rattachement dans AGENCES */
  cle: AgenceRattachement;
  metaTitle: string;
  metaDescription: string;
  /** rôle de l'agence (siège historique / nouvelle implantation) */
  eyebrow: string;
  /** 2-3 phrases citables (bloc réponse directe) */
  lead: string;
  /** paragraphes de présentation */
  body: string[];
  /** grandes zones couvertes, en clair */
  secteurs: string;
}

export const AGENCES_CONTENU: Record<AgenceRattachement, AgenceContenu> = {
  seiches: {
    slug: "seiches-sur-le-loir",
    cle: "seiches",
    metaTitle:
      "Agence & showroom de Seiches-sur-le-Loir (49) | Fenêtres sur Loir — Menuisier près d'Angers",
    metaDescription:
      "Showroom de 300 m² de Fenêtres sur Loir à Seiches-sur-le-Loir (49140), à 22 km d'Angers. Fenêtres, portes, volets et verrières sur mesure, pose RGE Qualibat. Horaires, plan et devis gratuit.",
    eyebrow: "Siège & showroom historique",
    lead: "Le showroom de Seiches-sur-le-Loir est l'agence historique de Fenêtres sur Loir, ouverte en 2003. Sur 300 m², vous y comparez fenêtres, portes, volets et verrières avant de lancer votre projet. L'agence rayonne sur Angers et le nord du Maine-et-Loire.",
    body: [
      "Implantée au 287 Rue de l'Innovation, à Seiches-sur-le-Loir, notre agence rassemble le showroom, le bureau d'études et les équipes de pose. C'est ici que se conçoivent la plupart de nos chantiers du secteur angevin : prise de mesures, choix des matériaux, étude des aides à la rénovation énergétique.",
      "Le showroom de 300 m² permet de voir et de toucher les menuiseries en situation : gammes PVC, aluminium, bois et mixte bois-alu, volets roulants et battants, portes d'entrée, baies vitrées et verrières d'atelier. Nos conseillers vous reçoivent sur rendez-vous pour étudier votre projet et établir un devis gratuit et détaillé.",
      "Depuis Seiches-sur-le-Loir, nos équipes interviennent à Angers (22 km) et dans tout le nord et le centre du département : Baugéois, Segréen, vallée du Loir et de la Sarthe, agglomération angevine.",
    ],
    secteurs:
      "Angers, Seiches-sur-le-Loir, Tiercé, Durtal, Baugé-en-Anjou, Beaufort-en-Anjou, Segré-en-Anjou Bleu, Le Lion-d'Angers et l'agglomération angevine.",
  },
  doue: {
    slug: "doue-en-anjou",
    cle: "doue",
    metaTitle:
      "Agence de Doué-en-Anjou (49) | Fenêtres sur Loir — Menuisier RGE Saumurois & Choletais",
    metaDescription:
      "Agence Fenêtres sur Loir à Doué-en-Anjou (49700), 7 rue Saint François. Menuisier RGE Qualibat au service du Saumurois, du Choletais et des Mauges : fenêtres, portes, volets sur mesure. Horaires, plan et devis gratuit.",
    eyebrow: "Agence du sud Anjou",
    lead: "L'agence de Doué-en-Anjou rapproche Fenêtres sur Loir du sud du Maine-et-Loire. Elle dessert le Saumurois, le Choletais, les Mauges et le Layon avec la même exigence : pose certifiée RGE Qualibat, sans sous-traitance. Devis gratuit sous 48 h.",
    body: [
      "Située au 7 rue Saint François, à Doué-en-Anjou, cette agence prolonge le savoir-faire de Fenêtres sur Loir vers le sud du département. Elle réduit les distances vers Saumur, Cholet, Chemillé et les Mauges, pour des rendez-vous et une pose plus réactifs.",
      "Fenêtres PVC, aluminium, bois et bois-alu, volets roulants et battants, portes d'entrée, baies vitrées et aménagements extérieurs : toute la gamme de menuiseries sur mesure est disponible, avec l'accompagnement sur les aides à la rénovation énergétique (MaPrimeRénov', primes CEE, éco-PTZ).",
      "Le Saumurois compte de nombreux secteurs patrimoniaux (habitat troglodytique, centres anciens soumis à l'avis des Architectes des Bâtiments de France) : nos équipes adaptent les menuiseries aux contraintes locales tout en améliorant l'isolation.",
    ],
    secteurs:
      "Doué-en-Anjou, Saumur, Cholet, Chemillé-en-Anjou, Beaupréau-en-Mauges, Sèvremoine, Gennes-Val-de-Loire, Longué-Jumelles, Montreuil-Bellay et le Layon.",
  },
};
