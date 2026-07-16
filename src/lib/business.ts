import { getCollection, type CollectionEntry } from 'astro:content';

export type BusinessArticle = CollectionEntry<'business'>;

export async function getPublishedBusinessArticles() {
  const articles = await getCollection('business', ({ data }) => !data.draft);
  return articles.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function businessUrl(article: BusinessArticle) {
  return `/business/${article.data.slug}/`;
}
