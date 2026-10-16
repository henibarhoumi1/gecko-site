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
| Contact details, form key, domain | `src/data/site.ts` |
| Brand tokens and font (copied from `gecko/brand/`, v3) | `src/styles/brand.css`, `public/fonts/` |
| Layout and components | `src/styles/site.css`, `src/components/` |

## Before going live

1. Set the domain in `astro.config.mjs` and `src/data/site.ts`.
2. Create a free Web3Forms key for the Gecko inbox and put it in `site.formKey`. Until then the forms open WhatsApp with the answers filled in.
3. Add real ads, results, logos and photos to `src/data/work.ts` and set `PUBLIC_LIVE=1` on the host. Live builds drop every `sample` entry, and a section with nothing real left in it is hidden.
4. Add Heni's photo on the About page.
5. Deploy on Vercel (framework: Astro, output `dist`).
