import type { ImageMetadata } from "astro";

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
}

const map: Record<string, RealisationMedia> = {
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

export function getRealisationMedia(slug: string): RealisationMedia {
  return map[slug] ?? { cover: hero3, gallery: [hero3] };
}
