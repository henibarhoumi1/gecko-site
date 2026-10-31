# Gecko website

The public site for Gecko, a video ad studio in Tunis. English and French, static, built with [Astro](https://astro.build).

## Run it

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static files in dist/
```

## Where things live

| What | File |
|---|---|
| Every word on the site (EN and FR) | `src/i18n/strings.ts` |
| Offers and prices (from `gecko/plan/offers-and-pricing.md`) | `src/data/offers.ts` |
| Proof: hero ad, logos, numbers, case studies, ad grid, shoot photos | `src/data/work.ts`, media in `public/work/<slug>/` and `public/team/` |
| Contact details, form key, client portal address | `src/data/site.ts` |
| Brand tokens and font (copied from `gecko/brand/`, v3) | `src/styles/brand.css`, `public/fonts/` |
| Layout and components | `src/styles/site.css`, `src/components/` |

## Hosting

Cloudflare Workers serves `dist/` (see `wrangler.jsonc`) on `gecko-creative.com`. Security headers are in `public/_headers`, redirects in `public/_redirects`.

1. Cloudflare > Workers & Pages > Create > Import a repository > `gecko-site`. Build command `npm run build`, deploy command `npx wrangler deploy`.
2. Build variable `PUBLIC_LIVE=1`: live builds drop every `sample` entry in `src/data/work.ts`, and a section with nothing real left in it is hidden.
3. The worker's Settings > Domains & Routes: add `gecko-creative.com` and `www.gecko-creative.com`.

The client portal is not part of this site: it is the Gecko app (repo `gecko-ops`) on `client.gecko-creative.com`, linked in the footer.

## Still open

- A free Web3Forms key for the Gecko inbox in `site.formKey`. Until then the forms open WhatsApp with the answers filled in.
