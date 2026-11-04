import { chromium, devices } from 'playwright';
import fs from 'node:fs';
const BASE = process.env.BASE.replace(/\/$/, '');
fs.mkdirSync('out/shots', { recursive: true });
const browser = await chromium.launch();
for (const [v, opts] of [['phone', { ...devices['iPhone 13'] }], ['phonese', { ...devices['iPhone SE'] }], ['tablet', { ...devices['iPad (gen 7)'] }], ['desktop', { viewport: { width: 1440, height: 900 } }]]) {
  const ctx = await browser.newContext(opts);
  for (const lang of ['en', 'fr']) {
    const page = await ctx.newPage();
    await page.goto(`${BASE}/${lang}/`, { waitUntil: 'load' });
    await page.waitForTimeout(4500);
    await page.screenshot({ path: `out/shots/${lang}_${v}.jpg`, type: 'jpeg', quality: 60 });
  }
}
await browser.close();
