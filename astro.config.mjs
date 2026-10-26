import { defineConfig } from 'astro/config';

export default defineConfig({
  // Domain not confirmed yet. Change here and in src/data/site.ts once it is.
  site: 'https://gecko.example',
  trailingSlash: 'always',
  // Styles go inside each page, so a page never shows up unstyled if a separate stylesheet fails to load.
  build: { inlineStylesheets: 'always' },
  i18n: { locales: ['en', 'fr'], defaultLocale: 'en', routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false } },
});
