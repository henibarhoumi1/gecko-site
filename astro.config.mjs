import { defineConfig } from 'astro/config';

export default defineConfig({
  // The live address, used for canonical links, the sitemap, share previews and Google. gecko-creative.com isn't
  // registered yet, so until it is the site names the address it actually lives on; otherwise Google and link
  // previews (WhatsApp, Instagram) look for pages and pictures on a domain that doesn't exist. Once the domain is
  // live, set the build variable SITE_URL=https://gecko-creative.com in Cloudflare (or change the default here).
  site: process.env.SITE_URL || 'https://gecko-site.henibarhoumi1.workers.dev',
  trailingSlash: 'always',
  // Styles go inside each page, so a page never shows up unstyled if a separate stylesheet fails to load.
  build: { inlineStylesheets: 'always' },
  // Pages load in the background as soon as a link is hovered or touched, so the next page is ready on click.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  experimental: { clientPrerender: true },
  // The old "get filmed" page now lives inside the hiring page.
  redirects: { '/en/creators/': '/en/join/', '/fr/creators/': '/fr/join/' },
  // Where the site sends briefs and counts (src/scripts/intake.ts): the live database only for builds of main.
  vite: { define: { 'import.meta.env.PUBLIC_INTAKE': JSON.stringify(process.env.WORKERS_CI_BRANCH === 'main' || process.env.PUBLIC_INTAKE === 'live' ? 'live' : 'testing') } },
  i18n: { locales: ['en', 'fr'], defaultLocale: 'en', routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false } },
});
