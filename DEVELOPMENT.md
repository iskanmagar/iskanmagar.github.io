# Development Guide

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
```

## Scripts

- `npm run dev` — dev server with hot reload
- `npm run build` — production build into `dist/`
- `npm run preview` — preview the production build

## Architecture

Astro static site. **No client framework** — the only browser JS is a ~15-line inline
script for the mobile-menu toggle in `src/components/Navbar.astro`.

### Key files

- **`src/site.config.ts`** — `SITE` (name, url, description), `SOCIAL` links, `NAV`. Single source of truth.
- **`src/layouts/Base.astro`** — `<html>` shell, includes `Seo` + `Navbar` + `Footer`, loads fonts & global CSS.
- **`src/components/seo/Seo.astro`** — per-page title/description/canonical/OG/Twitter/JSON-LD. All URLs derive from `SITE.url`.
- **`src/content/config.ts`** — zod schemas for the `episodes`, `guests`, `hosts`, `blog` collections.
- **`src/styles/global.css`** — Tailwind layers + brand primitives (`.panel`, `.btn-signal`, `.btn-ghost`, `.eyebrow`, `.ticks`).
- **`tailwind.config.mjs`** — brand color tokens (`ink`, `signal`, `magenta`, `amber`, `phosphor`), fonts, keyframes.

### Pages / routes (`src/pages/`)

`index.astro`, `about.astro`, `guests.astro`, `episodes/index.astro`,
`blog/index.astro`, `blog/[slug].astro`, `404.astro`, `rss.xml.ts`.

## Common tasks

### Add content

- **Episode:** new `.json` in `src/content/episodes/` (fields per `config.ts`).
- **Guest:** new `.json` in `src/content/guests/`.
- **Blog post:** new `.md` in `src/content/blog/` with frontmatter `title`, `date`, `publishedAt`, `category`, `preview`. Its URL is `/blog/<filename>/` and it's added to the sitemap + RSS automatically.

### Change brand colors

Edit tokens in `tailwind.config.mjs` under `theme.extend.colors` — components reference the semantic names (`text-signal`, `border-magenta`, `bg-ink`), not raw Tailwind palette colors.

### Regenerate the OG image

Edit `scripts/og-source.svg`, then:

```bash
node --input-type=module -e "import sharp from 'sharp';import{readFileSync}from'node:fs';await sharp(readFileSync('scripts/og-source.svg'),{density:144}).resize(1200,630).png().toFile('public/og/default.png')"
```

### Change social links / handles

Edit `SOCIAL` in `src/site.config.ts` — used by Navbar, Footer, and JSON-LD.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to
GitHub Pages. Repo **Settings → Pages → Source: GitHub Actions**. `public/CNAME` keeps the
`iskanmagar.com` custom domain across deploys.

## Resources

- [Astro Docs](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub Pages](https://docs.github.com/en/pages)
