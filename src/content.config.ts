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
  }),
});

export const collections = { blog, realisations };
