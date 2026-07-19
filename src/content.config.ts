import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const interviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/interviews' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    number: z.string().optional(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string(),
    categorySlug: z.string(),
    guestName: z.string(),
    guestRole: z.string(),
    guestProfile: z.string(),
    author: z.string(),
    thumbnail: z.string().optional(),
    mainImage: z.string().optional(),
    mainImageAlt: z.string().default(''),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    afterword: z.string().optional(),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    bookTitle: z.string(),
    bookAuthor: z.string(),
    publisher: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().default(''),
    rating: z.number().min(0).max(5).optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const business = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/business' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    businessName: z.string().optional(),
    businessType: z.string().optional(),
    mainImage: z.string().optional(),
    mainImageAlt: z.string().default(''),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const playlists = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/playlists' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    author: z.string(),
    theme: z.string().optional(),
    serviceUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const movies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/movies' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    author: z.string(),
    movieTitle: z.string(),
    director: z.string().optional(),
    releaseYear: z.number().int().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { interviews, reviews, business, playlists, movies };
