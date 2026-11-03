// Audit helper (CI only): screenshots, overflow, console errors, broken links, page weight and basics per page.
import { chromium, devices } from 'playwright';
import fs from 'node:fs';
const BASE = process.env.BASE.replace(/\/$/, '');
const pages = ['/en/', '/en/work/', '/en/offers/', '/en/process/', '/en/about/', '/en/contact/', '/en/faq/', '/en/join/', '/en/apply/', '/en/legal/', '/fr/', '/fr/offers/', '/en/nope-404/'];
fs.mkdirSync('out/shots', { recursive: true });
const browser = await chromium.launch();
const report = [];
const links = new Set();
for (const [label, ctxOpts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['mobile', { ...devices['iPhone 13'] }]]) {
  const ctx = await browser.newContext(ctxOpts);
  for (const p of pages) {
    const page = await ctx.newPage();
    const errors = []; let bytes = 0, requests = 0; const failed = [];
    page.on('console', m => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', e => errors.push(String(e)));
    page.on('requestfailed', r => failed.push(r.url()));
    page.on('response', async r => { requests++; try { const h = await r.headerValue('content-length'); bytes += Number(h || 0); } catch {} });
    const t0 = Date.now();
    const res = await page.goto(BASE + p, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => null);
    const loadMs = Date.now() - t0;
    await page.waitForTimeout(1500);
    // Scroll through the page like a visitor so everything that rises into view is shown, then back to the top.
    await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(800);
    const info = await page.evaluate(() => {
      const q = s => document.querySelector(s);
      const lcp = new Promise(r => { let v = 0; new PerformanceObserver(l => { for (const e of l.getEntries()) v = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true }); setTimeout(() => r(v), 300); });
      return lcp.then(lcpMs => ({
        title: document.title, desc: q('meta[name=description]')?.content || '', canonical: q('link[rel=canonical]')?.href || '',
        og: q('meta[property="og:image"]')?.content || '', hreflang: [...document.querySelectorAll('link[rel=alternate][hreflang]')].map(l => l.hreflang),
        h1: [...document.querySelectorAll('h1')].map(h => h.innerText.replace(/\s+/g, ' ').trim()),
        h2: [...document.querySelectorAll('h2')].map(h => h.innerText.replace(/\s+/g, ' ').trim()),
        imgNoAlt: [...document.querySelectorAll('img')].filter(i => !i.hasAttribute('alt')).map(i => i.src),
        videos: [...document.querySelectorAll('video')].map(v => ({ src: v.currentSrc || v.querySelector('source')?.src, preload: v.preload, autoplay: v.autoplay, poster: !!v.poster })),
        overflowX: document.documentElement.scrollWidth > window.innerWidth + 1, scrollW: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight,
        jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => s.textContent.slice(0, 300)),
        smallTap: [...document.querySelectorAll('a,button')].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && (r.height < 32 || r.width < 32); }).length,
        links: [...document.querySelectorAll('a[href]')].map(a => a.href),
        forms: [...document.querySelectorAll('form')].map(f => f.action),
        lcpMs, lang: document.documentElement.lang,
      }));
    }).catch(e => ({ error: String(e) }));
    (info.links || []).forEach(l => links.add(l));
    delete info.links;
    await page.evaluate(() => { document.querySelectorAll('.rv').forEach(e => e.classList.add('in')); document.documentElement.classList.remove('pre'); });
    await page.waitForTimeout(600);
    const name = `${label}${p.replace(/\//g, '_')}`;
    await page.screenshot({ path: `out/shots/${name}.jpg`, type: 'jpeg', quality: 60, fullPage: true }).catch(() => {});
    report.push({ label, path: p, status: res?.status(), loadMs, bytes, requests, errors, failed, ...info });
    await page.close();
  }
  await ctx.close();
}
const broken = [];
for (const l of links) {
  if (!l.startsWith('http')) continue;
  try { const r = await fetch(l, { method: 'GET', redirect: 'follow' }); if (r.status >= 400) broken.push([l, r.status]); } catch (e) { broken.push([l, String(e).slice(0, 80)]); }
}
fs.writeFileSync('out/report.json', JSON.stringify({ base: BASE, report, broken, linkCount: links.size }, null, 2));
await browser.close();
console.log('pages', report.length, 'broken', broken.length);
