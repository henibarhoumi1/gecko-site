// Viewport frames while scrolling the home page, as a visitor sees it (desktop and phone).
import { chromium, devices } from 'playwright';
import fs from 'node:fs';
const BASE = process.env.BASE.replace(/\/$/, '');
fs.mkdirSync('out/frames', { recursive: true });
const browser = await chromium.launch();
for (const [label, opts, step] of [['desktop', { viewport: { width: 1440, height: 900 } }, 450], ['mobile', { ...devices['iPhone 13'] }, 420]]) {
  const page = await (await browser.newContext(opts)).newPage();
  await page.goto(BASE + '/en/', { waitUntil: 'load' });
  await page.waitForTimeout(3500);
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0, i = 0; y < Math.min(H, 6000); y += step, i++) {
    await page.mouse.wheel(0, i ? step : 0);
    await page.waitForTimeout(1300);
    await page.screenshot({ path: `out/frames/${label}_${String(i).padStart(2, '0')}.jpg`, type: 'jpeg', quality: 55 });
  }
}
await browser.close();
