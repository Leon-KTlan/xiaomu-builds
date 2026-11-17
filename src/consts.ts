export const SITE = {
  title: '小木同学 Builds',
  description: {
    en: 'Full-stack products and backend systems — built by Leon',
    zh: '由 Leon 构建从界面、接口到部署的全栈产品与后端系统',
  },
  author: 'Leon',
  github: 'https://github.com/Leon-KTlan',
  email: 'lllp100kt@163.com',
  profileRepository: 'https://github.com/Leon-KTlan/Leon-KTlan',
} as const;

export type Locale = 'en' | 'zh';

export function localePath(locale: Locale, path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return locale === 'zh' ? `/zh${normalizedPath}` : normalizedPath;
}
