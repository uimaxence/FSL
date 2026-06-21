import type { ImageMetadata } from "astro";

// Banque d'images réutilisées pour habiller les pages communes (style magazine).
// Chaque commune reçoit un trio distinct (hero / bandeau / portrait) attribué de
// façon déterministe à partir du slug, pour que les pages ne se ressemblent pas.
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero4 from "../assets/hero-4.jpg";
import hero5 from "../assets/hero-5.jpg";
import murdelumiere1 from "../assets/murdelumiere-1.png";
import verriere1 from "../assets/verriere-1.png";
import porteFenetre3 from "../assets/porte-fenetre-3.png";
import porteFenetre6 from "../assets/porte-fenetre-6-gallandage.png";
import porte1 from "../assets/porte-1-boisalu.png";
import carport1 from "../assets/carport-1.png";
import verriere2 from "../assets/verriere-2.png";
import hero3 from "../assets/hero-3.jpg";
import showroom1 from "../assets/showroom-1.png";
import showroom2 from "../assets/showroom-2.png";
import histoire2 from "../assets/histoire-2.jpg";
import histoire4 from "../assets/histoire-4.jpg";

interface CommuneMedia {
  hero: ImageMetadata;
  band: ImageMetadata;
  portrait: ImageMetadata;
}

const heroPool = [hero1, hero2, hero4, hero5, murdelumiere1, verriere1, porteFenetre3];
const bandPool = [showroom1, porteFenetre6, carport1, porte1, verriere2, hero3, hero4];
const portraitPool = [showroom2, histoire2, histoire4, murdelumiere1, showroom1];

// Hash djb2 — bonne dispersion, stable, build reproductible.
const hash = (s: string) => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h;
};

// Choisit dans un pool en évitant les images déjà retenues sur la même page.
const pick = (pool: ImageMetadata[], idx: number, used: ImageMetadata[]) => {
  const start = ((idx % pool.length) + pool.length) % pool.length; // toujours positif
  for (let k = 0; k < pool.length; k++) {
    const img = pool[(start + k) % pool.length];
    if (!used.includes(img)) return img;
  }
  return pool[start];
};

export function getCommuneMedia(slug: string): CommuneMedia {
  const h = hash(slug);
  const used: ImageMetadata[] = [];
  // décalages non signés (>>>) pour garder des index positifs
  const hero = pick(heroPool, h % heroPool.length, used);
  used.push(hero);
  const band = pick(bandPool, h >>> 8, used);
  used.push(band);
  const portrait = pick(portraitPool, h >>> 4, used);
  return { hero, band, portrait };
}
