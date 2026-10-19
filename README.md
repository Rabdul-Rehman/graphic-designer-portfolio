# Graphic Designer Portfolio

React + Vite portfolio website.

## Local development

```bash
npm install
npm run dev
```

## Cloudflare Workers Git builds

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

`wrangler.jsonc` configures static asset deployment from `dist`.
