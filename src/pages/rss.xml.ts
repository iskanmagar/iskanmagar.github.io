import rss from '@astrojs/rss';
import { getPublishedPosts } from '@/lib/blog';
import { SITE } from '@/site.config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${SITE.shortName} — Transmissions`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.preview,
      pubDate: post.data.publishedAt,
      link: `/blog/${post.slug}`,
      categories: [post.data.category],
      author: post.data.author,
    })),
    customData: `<language>${SITE.lang}</language>`,
  });
}
