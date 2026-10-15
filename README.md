# 小木同学 Builds

Personal engineering site for Leon / [@Leon-KTlan](https://github.com/Leon-KTlan).

> Make agents show their work.<br>
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

## Article comments

Article pages use Waline. Chinese and English versions share one discussion through their `translationKey`. Visitors can comment without an account, but must provide a display name and email. Comments require approval; email notifications are not configured.

The Waline server is a separate Vercel project using [`waline-server/`](waline-server/) as its root directory. To enable comments:

1. Deploy that directory to Vercel and attach a Neon Postgres database. Initialize its tables with the [Waline PostgreSQL schema](https://waline.js.org/en/guide/get-started/) before redeploying the server.
2. Register the administrator at `<Waline server URL>/ui/register` **before** opening comments to visitors. The first registered account becomes the administrator.
3. In the Waline project's environment settings, set `SECURE_DOMAINS` to the blog host and the Waline server host (comma-separated, without `https://`). The versioned server config enables `COMMENT_AUDIT=true`; the server hook also rejects missing names or invalid emails.
4. Set `PUBLIC_WALINE_SERVER_URL` to the Waline server's HTTPS URL in the blog's Vercel project, then redeploy the blog. For local development, put the same value in an untracked `.env` file (see `.env.example`). Without this value, article pages display a closed-comments message.

No SMTP variables are needed. Email addresses are not verified and no reply notifications are sent. Back up the Neon database before changing comment providers or the Waline schema. Keep database credentials only in the Waline server's environment settings, never in the blog's `PUBLIC_` variables.

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

The article comments add a browser-side Waline client and a separate Waline/Neon service. The main blog remains statically generated and does not use external fonts or analytics.
