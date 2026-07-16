import { getCollection, type CollectionEntry } from 'astro:content';

export type Interview = CollectionEntry<'interviews'>;

export async function getPublishedInterviews() {
  const articles = await getCollection('interviews', ({ data }) => !data.draft);
  return articles.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function articleUrl(article: Interview) {
  return `/interviews/${article.data.slug}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(date);
}
