# ABQ.Construction

Informational static site for an Albuquerque construction brand concept.

**Domain available for acquisition** → [sales@desertrich.com](mailto:sales@desertrich.com)

## Stack

- **Astro 5** — pure static output (`output: 'static'`)
- **Tailwind CSS 3**
- **TypeScript** (strict)
- **@astrojs/sitemap**
- **Cloudflare Workers Static Assets** (no adapter)
- Hero video via Cloudflare Stream

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build && npx wrangler deploy
```

Cloudflare Worker: `abq-construction-v1` (static assets from `./dist`, plus a small
Worker that 301-redirects `www.abq.construction` and `*.workers.dev` to the apex
host so Google does not treat those URLs as “Alternate page with proper canonical tag”).

After deploy, confirm:
- `https://www.abq.construction/` → **301** → `https://abq.construction/`
- `/insights/`, `/insights/albuquerque-construction/`, `/insights/premium-domain-value/`, `/insights/brand-fit-category-tlds/` return **200**

Then in Google Search Console, validate the “Alternate page with proper canonical tag”
fix and request indexing for the apex URLs you care about.
