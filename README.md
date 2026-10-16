# Gecko website

The public site for Gecko, an ad creative studio in Tunis. English and French, static, built with [Astro](https://astro.build).

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
| Case studies | `src/data/work.ts`, media in `public/work/<slug>/` |
| Contact details, form key, domain, partner slots | `src/data/site.ts` |
| Brand tokens, fonts, glass (from `gecko/brand/`, direction 02) | `src/styles/brand.css`, `public/fonts/` |
| Layout and components | `src/styles/site.css`, `src/components/` |

## Before going live

1. Set the domain in `astro.config.mjs` and `src/data/site.ts`.
2. Create a free Web3Forms key for the Gecko inbox and put it in `site.formKey`. Until then the form tells visitors to use WhatsApp.
3. Add real case studies to `src/data/work.ts` and set `PUBLIC_LIVE=1` on the host so the placeholder examples are hidden.
4. Add Heni's photo on the About page.
5. Deploy on Vercel (framework: Astro, output `dist`).
