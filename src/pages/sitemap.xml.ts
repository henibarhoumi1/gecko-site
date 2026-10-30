import type { APIRoute } from 'astro';
import { locales } from '../i18n/strings';
import { cases } from '../data/work';

// Every public page, each listed with its English and French versions so Google pairs them.
const pages = ['', 'work', 'process', 'offers', 'about', 'faq', 'contact', 'apply', 'join', ...cases.filter((c) => !c.sample).map((c) => `work/${c.slug}`)];

export const GET: APIRoute = ({ site }) => {
  const url = (lang: string, p: string) => new URL(`/${lang}/${p ? `${p}/` : ''}`, site).href;
  const entries = pages.flatMap((p) => locales.map((lang) => `  <url>\n    <loc>${url(lang, p)}</loc>\n${locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, p)}"/>`).join('\n')}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', p)}"/>\n  </url>`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
