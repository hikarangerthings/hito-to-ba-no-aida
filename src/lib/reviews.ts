import { getCollection, type CollectionEntry } from 'astro:content';

export type Review = CollectionEntry<'reviews'>;

export async function getPublishedReviews() {
  const reviews = await getCollection('reviews', ({ data }) => !data.draft);
  return reviews.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function reviewUrl(review: Review) {
  return `/reviews/${review.data.slug}/`;
}
