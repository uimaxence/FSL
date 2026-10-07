import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    schema: z
      .union([z.record(z.unknown()), z.array(z.record(z.unknown()))])
      .optional(),
  }),
});

const realisations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/realisations" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    year: z.number().optional(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    description: z.string().optional(),
    /**
     * Vidéos du chantier : slugs de `temoignagesVideo` (src/data/temoignages-video.ts).
     * La première sert de visuel de couverture quand la réalisation n'a pas de photos.
     */
    videos: z.array(z.string()).optional(),
    /** Ordre d'affichage (le plus petit en premier) ; à défaut, tri par année décroissante. */
    ordre: z.number().optional(),
  }),
});

export const collections = { blog, realisations };
