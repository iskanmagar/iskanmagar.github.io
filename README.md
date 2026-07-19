# iskanmagar.com

**Iskanmagar Broadcast Network** — a retro-broadcast site for stories, podcasts, and transmissions from underrepresented, multilingual builders creating at the edge of technology, creativity, and community.

Statically rendered with **Astro** + **Tailwind CSS**. Ships **zero framework JavaScript** — every page is full HTML for fast loads and complete SEO/crawlability.

## 🚀 Stack

- **Astro 5** — static output, per-page `<head>`/SEO, content collections
- **Tailwind CSS 3** — brand token design system (see `tailwind.config.mjs`)
- **Self-hosted fonts** via `@fontsource` (Space Grotesk, JetBrains Mono, Press Start 2P) — no render-blocking Google Fonts
- **`astro:assets`** — responsive WebP image optimization
- **`@astrojs/sitemap`** + **`@astrojs/rss`** — auto sitemap & podcast/blog feed
- Deployed to **GitHub Pages** via GitHub Actions, served at `https://iskanmagar.com`

## 📦 Install & Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## 🏗️ Build

```bash
npm run build      # → ./dist  (sitemap, rss, optimized images, robots.txt, CNAME)
npm run preview
```

## 📁 Project Structure

```
├─ astro.config.mjs          # site: https://iskanmagar.com, integrations
├─ tailwind.config.mjs       # brand color/type tokens
├─ public/                   # CNAME, robots.txt, favicon.svg, logo.svg, og/
├─ scripts/og-source.svg     # source for the generated OG image
└─ src/
   ├─ site.config.ts         # SITE constants, SOCIAL links, NAV (single source of truth)
   ├─ content/               # episodes / guests / hosts / blog collections (+ config.ts)
   ├─ assets/                # images optimized at build (taha-host.jpg)
   ├─ components/            # Navbar, Footer, Hero, *Card, SectionHeading, seo/Seo.astro
   ├─ layouts/Base.astro     # html shell + SEO + nav/footer
   ├─ styles/global.css      # Tailwind + brand primitives (.panel, .btn-*, etc.)
   └─ pages/                 # index, about, guests, episodes, blog/[slug], 404, rss.xml
```

## ✏️ Editing content

- **New episode:** add a JSON file under `src/content/episodes/`
- **New guest:** add a JSON file under `src/content/guests/`
- **New blog post:** add a Markdown file under `src/content/blog/` (frontmatter: `title`, `date`, `publishedAt`, `category`, `preview`)

Schemas are enforced in `src/content/config.ts`.

## 🔎 SEO notes

- Canonical domain is **`iskanmagar.com`** (set once in `src/site.config.ts` / `astro.config.mjs`).
- Per-page title/description/canonical/OG + JSON-LD are handled by `src/components/seo/Seo.astro`.
- To regenerate the OG image after editing `scripts/og-source.svg`:
  ```bash
  node --input-type=module -e "import sharp from 'sharp';import{readFileSync}from'node:fs';await sharp(readFileSync('scripts/og-source.svg'),{density:144}).resize(1200,630).png().toFile('public/og/default.png')"
  ```

## 🚢 Deployment

Push to `main` → GitHub Actions builds and deploys to Pages. In repo **Settings → Pages**, set **Source: GitHub Actions**. The `public/CNAME` file keeps the `iskanmagar.com` custom domain on every deploy.

## 👨‍💻 Author

Hosted by **Taha Bouhsine** — [tahabouhsine.com](https://www.tahabouhsine.com)
