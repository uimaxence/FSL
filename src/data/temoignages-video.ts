// Témoignages vidéo (reels Instagram de clients, de créateurs de contenu et
// de Fenêtres sur Loir). Source unique consommée par
// src/components/sections/TemoignagesVideo.astro.
//
// Fichiers : public/temoignages/<slug>.mp4 (réencodés en 640 px de large,
// les originaux ne sont pas versionnés) + affiche src/assets/temoignages/<slug>.jpg.
//
// `compte` = identifiant Instagram de l'auteur, sans @. Ne le renseigner que
// lorsque l'auteur est certain : sans compte, la carte s'affiche sans crédit.
// Les citations reprennent mot pour mot les sous-titres incrustés des vidéos.

import type { ImageMetadata } from "astro";

import fenetresBois from "../assets/temoignages/fenetres-bois-alexiawhite.jpg";
import voletsLongere from "../assets/temoignages/volets-persiennes-longere.jpg";
import poseLongere from "../assets/temoignages/pose-fenetres-volets-longere.jpg";
import vlogLongere from "../assets/temoignages/vlog-chantier-longere.jpg";
import maisonAngevine from "../assets/temoignages/temoignage-maison-angevine.jpg";
import porteTuffeau from "../assets/temoignages/porte-fenetres-tuffeau.jpg";
import baiesBubendorff from "../assets/temoignages/baies-volets-bubendorff.jpg";
import voletsAvantApres from "../assets/temoignages/volets-persiennes-avant-apres.jpg";
import showroom from "../assets/temoignages/visite-showroom.jpg";

export interface TemoignageVideo {
  slug: string;
  titre: string;
  citation?: string;
  compte?: string;
  /** Durée affichée sur la carte, ex. « 0:48 ». */
  duree: string;
  /** Date de mise en ligne sur le site (AAAA-MM-JJ), pour le balisage VideoObject. */
  misEnLigne: string;
  poster: ImageMetadata;
}

/**
 * Audience des créateurs, affichée à côté de leur compte. Relevé du 02/10/2026
 * sur les profils publics : à rafraîchir de temps en temps (chiffres figés).
 * Pas d'entrée pour @fenetressurloir : on n'affiche que l'audience des créateurs.
 */
export const abonnesInstagram: Record<string, string> = {
  "2boys1house": "578 k",
  _alexiawhite: "182 k",
  iloveseaandsun: "38 k",
  la_famille_belette_renov: "5 600",
};

export const temoignagesVideo: TemoignageVideo[] = [
  {
    slug: "fenetres-bois-alexiawhite",
    titre: "Quatre fenêtres en bois exotique, posées en feuillure",
    citation: "L'équipe a fait un travail hyper minutieux. On les recommande.",
    compte: "_alexiawhite",
    duree: "0:48",
    misEnLigne: "2026-10-02",
    poster: fenetresBois,
  },
  {
    // Même longère que les deux vidéos « volets à persiennes » : jour de pose
    // des fenêtres bois MéO et des persiennes par nos équipes. Citation reprise
    // de la légende du reel (pas de sous-titres incrustés).
    slug: "pose-fenetres-volets-longere",
    titre: "Jour de pose : fenêtres bois et volets à persiennes sur la longère",
    citation: "Quelle joie immense de voir le top départ donné !",
    compte: "iloveseaandsun",
    duree: "0:52",
    misEnLigne: "2026-10-06",
    poster: poseLongere,
  },
  {
    // Story filmée la veille du chantier de l'étage (même longère) : pourquoi
    // changer les fenêtres, œils-de-bœuf sur mesure sur les deux façades.
    // Citation reprise du texte incrusté dans la story.
    slug: "vlog-chantier-longere",
    titre: "La veille du chantier : fenêtres de l'étage et œils-de-bœuf sur mesure",
    citation: "C'est @fenetressurloir qui démarre le bal de ce nouveau chantier.",
    compte: "iloveseaandsun",
    duree: "3:13",
    misEnLigne: "2026-10-07",
    poster: vlogLongere,
  },
  {
    slug: "volets-persiennes-longere",
    titre: "Des volets à persiennes sur une longère en pierre",
    citation: "S'équiper de volets à persiennes amovibles, c'est un vrai plus.",
    compte: "iloveseaandsun",
    duree: "1:29",
    misEnLigne: "2026-10-02",
    poster: voletsLongere,
  },
  {
    // Auteur à confirmer (entretien de clients, probablement tourné par FSL).
    slug: "temoignage-maison-angevine",
    titre: "Des fenêtres à grands carreaux dans une maison angevine",
    citation: "Les fenêtres, je les trouve belles. Puis on se sent bien.",
    duree: "0:39",
    misEnLigne: "2026-10-02",
    poster: maisonAngevine,
  },
  {
    // Auteur à confirmer (2boys1house ou la_famille_belette_renov).
    slug: "porte-fenetres-tuffeau",
    titre: "Porte d'entrée et fenêtres sur une maison en tuffeau",
    citation: "Quelle transformation !",
    duree: "1:07",
    misEnLigne: "2026-10-02",
    poster: porteTuffeau,
  },
  {
    slug: "baies-volets-bubendorff",
    titre: "Baies vitrées et volets roulants Bubendorff",
    compte: "fenetressurloir",
    duree: "0:18",
    misEnLigne: "2026-10-02",
    poster: baiesBubendorff,
  },
  {
    // Même maison que « volets-persiennes-longere » et « pose-fenetres-volets-longere ».
    slug: "volets-persiennes-avant-apres",
    titre: "Volets à persiennes : la façade avant, puis après",
    compte: "iloveseaandsun",
    duree: "0:29",
    misEnLigne: "2026-10-02",
    poster: voletsAvantApres,
  },
  {
    slug: "visite-showroom",
    titre: "Un tour dans notre showroom",
    compte: "fenetressurloir",
    duree: "0:14",
    misEnLigne: "2026-10-02",
    poster: showroom,
  },
];
