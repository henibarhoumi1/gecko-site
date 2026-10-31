import type { APIRoute } from 'astro';

// Points search engines to the sitemap on whatever address the site is built for.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
