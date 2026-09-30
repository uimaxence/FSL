import type { ImageMetadata } from "astro";

import fallback from "../assets/histoire-3.jpg";
import devantureDoue from "../assets/deventure_doué.png";

// Photo d'un article : vignette de la page Conseils et photo principale.
// Convention : un fichier `src/assets/blog/<slug de l'article>.jpg`.
// Ces visuels sont des illustrations générées (Higgsfield, 30/09/2026), pas des
// chantiers Fenêtres sur Loir : ne pas les réutiliser comme « réalisations ».
const fichiers = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/blog/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

const illustrations: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(fichiers).map(([chemin, module]) => [
    chemin.split("/").pop()!.replace(/\.[a-z]+$/, ""),
    module.default,
  ]),
);

const alts: Record<string, string> = {
  "aides-changer-fenetres-2026":
    "Échantillon de fenêtre PVC, calculatrice et documents sur une table de cuisine",
  "changer-fenetres-avant-hiver":
    "Fenêtre aluminium donnant sur un jardin aux couleurs d'automne",
  "condensation-fenetres-causes-solutions":
    "Gouttes de condensation sur le bas d'un vitrage au petit matin",
  "entretien-volet-roulant":
    "Main gantée nettoyant à l'éponge les lames d'un volet roulant en aluminium",
  "fenetre-oscillo-battant-bloquee":
    "Main sur la poignée d'une fenêtre PVC, tournée vers le haut en position soufflet",
  "fenetre-pvc-alu-bois-alu":
    "Trois angles de fenêtre côte à côte : PVC blanc, aluminium gris anthracite et bois-alu",
  "fenetres-bois-alu-meo":
    "Grandes fenêtres bois-alu à l'intérieur en chêne dans un séjour contemporain",
  "fenetrier-maine-et-loire":
    "Maison angevine en tuffeau et toit d'ardoise aux fenêtres rénovées",
  "isolation-phonique-fenetre":
    "Séjour calme derrière une grande fenêtre donnant sur un boulevard et son tramway",
  "regler-fenetre-pvc-qui-ferme-mal":
    "Main réglant la paumelle d'une fenêtre PVC avec une clé Allen",
  "reinitialiser-volet-roulant-bubendorff":
    "Télécommande pointée vers un volet roulant arrêté à mi-hauteur",
  "telecommande-bubendorff-pile-programmation":
    "Télécommande de volet roulant ouverte, pile bouton et petit tournevis",
  "volet-roulant-bloque-que-faire":
    "Volet roulant bloqué de travers à mi-hauteur sur une façade",
};

// Photos réelles, prioritaires sur les illustrations.
const photos: Record<string, BlogCover> = {
  "ouverture-agence-menuiserie-doue-en-anjou": {
    image: devantureDoue,
    alt: "Devanture de l'agence Fenêtres sur Loir à Doué-en-Anjou",
  },
};

export interface BlogCover {
  image: ImageMetadata;
  alt: string;
}

export function getBlogCover(slug: string, titre: string): BlogCover {
  if (photos[slug]) return photos[slug];
  const image = illustrations[slug];
  return image ? { image, alt: alts[slug] ?? titre } : { image: fallback, alt: titre };
}
