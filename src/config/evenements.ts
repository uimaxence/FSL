// Événements ponctuels (salons, portes ouvertes…).
//
// Source unique pour le bandeau d'annonce, la page dédiée et le llms.txt.
// Le site est statique : un déploiement peut dater d'avant la fin de
// l'événement. L'affichage est donc gardé deux fois — au build (rien n'est
// rendu après `fin`) et côté client (le bandeau se retire seul).
//
// Infos salon relevées le 15/09/2026 sur habitat-angers.com (informations
// pratiques) et sur la billetterie en ligne.

export const SALON_HABITAT_ANGERS_2026 = {
  id: "salon-habitat-angers-2026",
  nom: "Salon Habitat Angers 2026",
  nomCourt: "Salon Habitat Angers",
  path: "/salon-habitat-angers-2026/",
  /** Bornes ISO 8601, heure de Paris (heure d'été). */
  debut: "2026-09-25T10:00:00+02:00",
  fin: "2026-09-28T18:00:00+02:00",
  datesHumain: "du 25 au 28 septembre 2026",
  datesCourt: "25 → 28 sept.",
  lieu: {
    nom: "Parc des Expositions d'Angers",
    adresse: "3520 route de Paris, Saint-Sylvain-d'Anjou",
    codePostal: "49480",
    ville: "Verrières-en-Anjou",
    telephone: "02 41 93 40 40",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Parc+des+Expositions+d%27Angers+3520+route+de+Paris+49480+Verri%C3%A8res-en-Anjou",
  },
  horaires: [
    { iso: "2026-09-25", jour: "Vendredi 25 septembre", heures: "10h – 20h", gratuit: true },
    { iso: "2026-09-26", jour: "Samedi 26 septembre", heures: "10h – 19h", gratuit: false },
    { iso: "2026-09-27", jour: "Dimanche 27 septembre", heures: "10h – 19h", gratuit: false },
    { iso: "2026-09-28", jour: "Lundi 28 septembre", heures: "10h – 18h", gratuit: true },
  ],
  /** Tarifs de la billetterie en ligne du salon (pas nos tarifs). */
  tarifs: [
    { libelle: "Vendredi et lundi", prix: "Gratuit", detail: "Entrée libre pour tous" },
    { libelle: "Billet 1 jour, samedi ou dimanche", prix: "3 €", detail: "À partir de 16 ans" },
    { libelle: "Tarif étudiant, samedi ou dimanche", prix: "2 €", detail: "Sur justificatif" },
    { libelle: "Moins de 16 ans", prix: "Gratuit", detail: "Accompagnés de leurs parents" },
  ],
  tarifSurPlace: "Tarifs de la billetterie en ligne. Sur place, le billet du samedi ou du dimanche est à 4 €.",
  siteUrl: "https://www.habitat-angers.com/",
  billetterieUrl: "https://www.habitat-angers.com/billetterie-du-edition_salon/",
  jeuConcours: {
    titre: "Une porte d'entrée à gagner",
    lot: "une porte d'entrée sur mesure",
    /** La participation se fait exclusivement sur le stand, pas en ligne. */
    surPlaceUniquement: true,
  },
} as const;

export type Evenement = typeof SALON_HABITAT_ANGERS_2026;

/** Vrai tant que l'événement n'est pas terminé (bandeau, llms.txt). */
export function evenementEnCours(evt: { fin: string }, maintenant: Date = new Date()): boolean {
  return maintenant.getTime() <= new Date(evt.fin).getTime();
}
