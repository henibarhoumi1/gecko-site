// Scroll smoothness: wheel-scrolls each page on a 4x slowed CPU and records every frame's duration and long tasks.
import { chromium } from 'playwright';
const BASE = process.env.BASE.replace(/\/$/, '');
const browser = await chromium.launch({ channel: 'chrome' });
for (const path of ['/en/', '/en/work/', '/en/offers/', '/en/process/', '/en/about/', '/fr/faq/']) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  await page.goto(BASE + path, { waitUntil: 'load' });
  await page.waitForTimeout(2000);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  await page.evaluate(() => { const w = window; w.__f = []; w.__lt = 0; let last = performance.now(); const loop = (t) => { w.__f.push(t - last); last = t; requestAnimationFrame(loop); }; requestAnimationFrame(loop); new PerformanceObserver((l) => { for (const e of l.getEntries()) w.__lt += e.duration; }).observe({ type: 'longtask' }); });
  await page.mouse.move(720, 450);
  for (let r = 0; r < 3; r++) { for (let i = 0; i < 25; i++) { await page.mouse.wheel(0, 110); await page.waitForTimeout(16); } await page.waitForTimeout(900); }
  const s = await page.evaluate(() => { const f = window.__f.slice(5).sort((a, b) => a - b); const n = f.length; return { n, p50: f[Math.floor(n * .5)], p95: f[Math.floor(n * .95)], max: f[n - 1], over33: f.filter((x) => x > 33.4).length, over50: f.filter((x) => x > 50).length, longTaskMs: Math.round(window.__lt), y: Math.round(scrollY) }; });
  console.log(`PERF ${path}: frames ${s.n}, median ${s.p50.toFixed(1)} ms, p95 ${s.p95.toFixed(1)} ms, max ${s.max.toFixed(0)} ms, >33ms ${s.over33}, >50ms ${s.over50}, long tasks ${s.longTaskMs} ms, scrolled to ${s.y}`);
  await ctx.close();
}
await browser.close();
