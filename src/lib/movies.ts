import { getCollection, type CollectionEntry } from 'astro:content';

export type MovieArticle = CollectionEntry<'movies'>;
export async function getPublishedMovies() {
  const articles = await getCollection('movies', ({ data }) => !data.draft);
  return articles.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}
export const movieUrl = (article: MovieArticle) => `/movies/${article.data.slug}/`;
