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

Cloudflare project settings:
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
