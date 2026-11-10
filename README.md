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

Cloudflare Worker: `abq-construction-v1` (static assets from `./dist`).

After deploy, confirm these previously 404ing routes return 200:
- `/insights/`
- `/insights/albuquerque-construction/`
- `/insights/premium-domain-value/`
- `/insights/brand-fit-category-tlds/`

Then request re-indexing in Google Search Console for those URLs.
