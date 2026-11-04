// Full audit (CI only): every route in EN and FR at phone, tablet and desktop. Screenshots after revealing
// content, axe accessibility results, console errors, failed requests, overflow and focus visibility.
import { chromium, devices } from 'playwright';
import fs from 'node:fs';
const BASE = process.env.BASE.replace(/\/$/, '');
const axeSrc = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const routes = ['', 'work/', 'offers/', 'process/', 'about/', 'contact/', 'faq/', 'join/', 'apply/', 'legal/'];
const views = [['phone', { ...devices['iPhone 13'] }], ['tablet', { ...devices['iPad (gen 7)'] }], ['desktop', { viewport: { width: 1440, height: 900 } }]];
fs.mkdirSync('out/shots', { recursive: true });
const browser = await chromium.launch();
const out = [];
for (const lang of ['en', 'fr']) for (const [vname, opts] of views) {
  const ctx = await browser.newContext(opts);
  for (const r of [...routes, 'zz-missing/']) {
    const page = await ctx.newPage();
    const errors = [], failed = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('response', (res) => { if (res.status() >= 400 && !res.url().endsWith('zz-missing/')) failed.push(`${res.status()} ${res.url()}`); });
    page.on('requestfailed', (q) => failed.push(`failed ${q.url()}`));
    const t0 = Date.now();
    const res = await page.goto(`${BASE}/${lang}/${r}`, { waitUntil: 'load', timeout: 60000 }).catch(() => null);
    await page.waitForTimeout(1500);
    await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((z) => setTimeout(z, 80)); } scrollTo(0, 0); });
    await page.evaluate(() => { document.querySelectorAll('.rv').forEach((e) => e.classList.add('in')); });
    await page.waitForTimeout(700);
    const info = await page.evaluate(() => ({
      title: document.title, desc: document.querySelector('meta[name=description]')?.content,
      h1: [...document.querySelectorAll('h1')].map((h) => h.innerText.replace(/\s+/g, ' ').trim()),
      overflow: document.documentElement.scrollWidth - innerWidth,
      wide: [...document.querySelectorAll('body *')].filter((e) => { const b = e.getBoundingClientRect(); return b.width && b.right > innerWidth + 2 && getComputedStyle(e).position !== 'fixed'; }).slice(0, 5).map((e) => e.tagName + '.' + [...e.classList].join('.')),
    }));
    let axe = [];
    if (vname !== 'tablet') {
      await page.addScriptTag({ content: axeSrc });
      axe = await page.evaluate(async () => (await window.axe.run(document, { resultTypes: ['violations'] })).violations.map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, ex: v.nodes.slice(0, 2).map((n) => n.target.join(' ') + ' | ' + (n.failureSummary || '').split('\n')[1]) })));
    }
    // keyboard: tab 8 times, record whether the focused element has a visible outline
    const focus = [];
    if (vname === 'desktop') for (let i = 0; i < 8; i++) { await page.keyboard.press('Tab'); focus.push(await page.evaluate(() => { const e = document.activeElement; if (!e) return 'none'; const s = getComputedStyle(e); return `${e.tagName}:${(e.textContent || '').trim().slice(0, 18)}:${s.outlineStyle !== 'none' && s.outlineWidth !== '0px' ? 'outline' : s.boxShadow !== 'none' ? 'shadow' : 'NONE'}`; })); }
    const name = `${lang}_${vname}_${r.replace(/\//g, '') || 'home'}`;
    await page.screenshot({ path: `out/shots/${name}.jpg`, type: 'jpeg', quality: 50, fullPage: true }).catch(() => {});
    out.push({ name, status: res?.status(), ms: Date.now() - t0, errors, failed: [...new Set(failed)], focus, axe, ...info });
    await page.close();
  }
  await ctx.close();
}
fs.writeFileSync('out/full.json', JSON.stringify(out, null, 1));
await browser.close();
console.log('done', out.length);
