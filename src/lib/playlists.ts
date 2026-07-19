import { getCollection, type CollectionEntry } from 'astro:content';

export type PlaylistArticle = CollectionEntry<'playlists'>;
export async function getPublishedPlaylists() {
  const articles = await getCollection('playlists', ({ data }) => !data.draft);
  return articles.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}
export const playlistUrl = (article: PlaylistArticle) => `/playlists/${article.data.slug}/`;
