import rss from '@astrojs/rss';
import { getPublishedInterviews } from '../lib/interviews';

export async function GET(context) {
  const articles = await getPublishedInterviews();
  return rss({
    title: '人と場のあいだ', description: '人が集まる人に、会いにいく。小さなインタビューメディア。', site: context.site,
    items: articles.map(({ data }) => ({ title: data.title, description: data.description, pubDate: data.publishedAt, link: `/interviews/${data.slug}/`, categories: data.tags })),
  });
}
