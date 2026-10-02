export const SITE = {
  title: '小木同学 Builds',
  description: {
    en: 'Traceable, inspectable AI agents and backend systems — built by Leon.',
    zh: '由 Leon 构建可运行、可追溯、可审阅的智能体与后端系统。',
  },
  author: 'Leon',
  github: 'https://github.com/Leon-KTlan',
  profileRepository: 'https://github.com/Leon-KTlan/Leon-KTlan',
} as const;

export type Locale = 'en' | 'zh';

export function localePath(locale: Locale, path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return locale === 'zh' ? `/zh${normalizedPath}` : normalizedPath;
}
