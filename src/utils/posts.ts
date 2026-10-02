import type { CollectionEntry } from 'astro:content';
import type { Locale } from '../consts';

export type BlogPost = CollectionEntry<'blog'>;

export function sortPosts(posts: BlogPost[], locale?: Locale) {
  return posts
    .filter((post) => !post.data.draft && (!locale || post.data.lang === locale))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function formatDate(date: Date, locale: Locale = 'en') {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function readingTime(body = '') {
  const chineseCharacters = body.match(/[\u3400-\u9fff]/g)?.length ?? 0;
  const latinWords = body
    .replace(/[\u3400-\u9fff]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(chineseCharacters / 350 + latinWords / 220));
}
