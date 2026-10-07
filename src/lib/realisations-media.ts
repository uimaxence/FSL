import type { ImageMetadata } from "astro";

import { temoignagesVideo, type TemoignageVideo } from "../data/temoignages-video";
import precigne1 from "../assets/realisation-precigne-1.png";
import precigne2 from "../assets/realisation-precigne-2.jpg";
import pontsdece1 from "../assets/realisation-pontsdece-1.png";
import pontsdece2 from "../assets/realisation-pontsdece-2.png";
import pontsdece3 from "../assets/realisation-pontsdece-3.jpg";
import seiche1 from "../assets/realisation-seiche-1.png";
import verriere1 from "../assets/verriere-1.png";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";

interface RealisationMedia {
  cover: ImageMetadata;
  gallery: ImageMetadata[];
  /** Vidéos du chantier (reels du carrousel de témoignages), dans l'ordre du frontmatter. */
  videos: TemoignageVideo[];
}

/** Ce qu'il faut d'une entrée de la collection "realisations" pour résoudre ses médias. */
export interface RealisationLike {
  id: string;
  data: { videos?: string[]; ordre?: number; year?: number };
}

const photos: Record<string, Omit<RealisationMedia, "videos">> = {
  precigne: {
    cover: verriere1,
    gallery: [verriere1, precigne2],
  },
  "ponts-de-ce": {
    cover: hero3,
    gallery: [hero3, hero4],
  },
  "seiches-sur-loir": {
    cover: seiche1,
    gallery: [seiche1, hero4],
  },
  angers: {
    cover: pontsdece1,
    gallery: [pontsdece1, pontsdece2, pontsdece3],
  },
};

export function getRealisationMedia(realisation: RealisationLike): RealisationMedia {
  const videos = (realisation.data.videos ?? []).flatMap((slug) => {
    const video = temoignagesVideo.find((t) => t.slug === slug);
    if (!video) console.warn(`[realisations] vidéo inconnue « ${slug} » (${realisation.id})`);
    return video ? [video] : [];
  });

  const images = photos[realisation.id];
  if (images) return { ...images, videos };

  // Sans photos : l'affiche de la première vidéo sert de couverture.
  if (videos.length > 0) return { cover: videos[0].poster, gallery: [], videos };

  return { cover: hero3, gallery: [hero3], videos };
}

/** Ordre d'affichage : `ordre` croissant quand il est renseigné, puis année décroissante. */
export function trierRealisations<T extends RealisationLike>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const oa = a.data.ordre ?? Number.POSITIVE_INFINITY;
    const ob = b.data.ordre ?? Number.POSITIVE_INFINITY;
    if (oa !== ob) return oa - ob;
    return (b.data.year ?? 0) - (a.data.year ?? 0);
  });
}
