import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import { sortPosts } from '../utils/posts';

export async function GET(context) {
  const posts = sortPosts(await getCollection('blog'), 'en');
  return rss({
    title: SITE.title,
    description: SITE.description.en,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/writing/${post.data.path}/`,
      categories: post.data.tags,
    })),
  });
}
