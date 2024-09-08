import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    categories: z.array(z.string()),
    // Añade más campos según sea necesario
  }),
});

export const collections = {
  posts: postsCollection,
};