import { chromium, devices } from 'playwright';
import fs from 'node:fs';
const BASE = process.env.BASE.replace(/\/$/, '');
fs.mkdirSync('out/shots', { recursive: true });
const browser = await chromium.launch();
for (const [label, opts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['mobile', { ...devices['iPhone 13'] }]]) {
  const ctx = await browser.newContext(opts);
  for (const p of ['/fr/services/ramadan-campaigns/', '/en/services/video-ads/', '/en/']) {
    const page = await ctx.newPage();
    await page.goto(BASE + p, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('.rv').forEach((e) => e.classList.add('in')));
    await page.waitForTimeout(800);
    const full = p !== '/en/';
    if (!full) await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForTimeout(600);
    await page.screenshot({ path: `out/shots/${label}${p.replace(/\//g, '_')}.jpg`, type: 'jpeg', quality: 55, fullPage: full });
  }
}
await browser.close();
