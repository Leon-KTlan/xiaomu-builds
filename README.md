# 小木同学 Builds

Personal engineering site for Leon / [@Leon-KTlan](https://github.com/Leon-KTlan).

> Make agents show their work.  
> 让智能体展示它如何得出答案。

The site presents selected AI Agent and backend work through architecture, engineering decisions, evaluation evidence, and explicit scope boundaries. It is built with Astro and Markdown and published as a static site.

## Routes

- `/` — English home
- `/zh/` — 中文首页
- `/projects/` and `/zh/projects/` — selected work
- `/projects/reviewable-runtime/` — anonymized flagship case
- `/writing/` and `/zh/writing/` — bilingual engineering notes

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm run preview
```

## Publishing an article

English and Chinese articles live in separate folders and share the same `translationKey` and `path`:

```text
src/content/blog/en/example.md
src/content/blog/zh/example.md
```

Frontmatter:

```yaml
---
title: "Article title"
description: "SEO and archive summary"
lang: en
path: "article-path"
translationKey: "article-path"
publishedAt: 2026-10-02
tags: [AI Agents, Backend]
category: engineering
featured: false
draft: false
---
```

Chinese drafts may be published first. Add the reviewed English counterpart within seven days so the public site remains bilingual.

## Evidence policy

- Private work is anonymized and never links the source repository.
- Public claims must map to inspectable source, tests, or an explicitly dated evaluation snapshot.
- Offline and synthetic metrics are labeled as such and are not presented as production user impact.
- Known failures remain visible beside successful metrics.

## Stack and deployment

- Astro content collections
- Markdown articles
- Static HTML output
- GitHub Actions build check
- Vercel preview and production deployment

No client framework, database, analytics, or external font request is required.
