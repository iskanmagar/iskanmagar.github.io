import { defineCollection, z } from 'astro:content';

const episodes = defineCollection({
  type: 'data',
  schema: z.object({
    ep: z.string(),
    title: z.string(),
    guest: z.string().optional(),
    date: z.string(), // display date, e.g. "11.16.25"
    publishedAt: z.coerce.date().optional(),
    status: z.string().default('ARCHIVED'),
    youtubeUrl: z.string().url().optional(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const guests = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    handle: z.string().optional(),
    role: z.string(),
    companyUrl: z.string().url().optional(),
    company: z.string().optional(),
    country: z.string().optional(),
    followers: z.string().optional(),
    description: z.string(),
    episode: z.string().optional(),
    episodeTitle: z.string().optional(),
    youtubeUrl: z.string().url().optional(),
  }),
});

const hosts = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    title: z.string(),
    bio: z.string(),
    more: z.string().optional(),
    website: z.string().url().optional(),
    twitter: z.string().url().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string().default('JOURNEY'),
    preview: z.string(),
    author: z.string().default('Taha Bouhsine'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { episodes, guests, hosts, blog };
