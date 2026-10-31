import { defineConfig } from 'astro/config';

export default defineConfig({
  // The live address, used for canonical links, the sitemap and share previews.
  site: 'https://gecko-creative.com',
  trailingSlash: 'always',
  // Styles go inside each page, so a page never shows up unstyled if a separate stylesheet fails to load.
  build: { inlineStylesheets: 'always' },
  // Pages load in the background as soon as a link is hovered or touched, so the next page is ready on click.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  experimental: { clientPrerender: true },
  // The old "get filmed" page now lives inside the hiring page.
  redirects: { '/en/creators/': '/en/join/', '/fr/creators/': '/fr/join/' },
  i18n: { locales: ['en', 'fr'], defaultLocale: 'en', routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false } },
});
