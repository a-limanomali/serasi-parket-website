import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    scientificName: z.string(),
    description: z.string(),
    images: z.array(z.string()),
    specifications: z.record(z.string()),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    applications: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
      })
    ),
    grades: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        characteristics: z.array(z.string()),
      })
    ),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  products: productsCollection,
  blog: blogCollection,
};
