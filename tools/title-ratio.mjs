// Measures the headline's widest line and its height, relative to its font size, per language and layout.
import { chromium, devices } from 'playwright';
const BASE = process.env.BASE.replace(/\/$/, '');
const browser = await chromium.launch({ channel: 'chrome' });
for (const [view, opts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['phone', { ...devices['iPhone 13'] }]]) {
  for (const lang of ['en', 'fr']) {
    const page = await (await browser.newContext(opts)).newPage();
    await page.goto(`${BASE}/${lang}/`, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(3500);
    const r = await page.evaluate(() => {
      const h = document.querySelector('#h-title'); h.classList.add('measure');
      const fs = parseFloat(getComputedStyle(h).fontSize);
      const lines = [...h.querySelectorAll('.ln')].filter((l) => l.offsetWidth);
      const wide = Math.max(...lines.map((l) => l.offsetWidth));
      const tall = Math.max(...[...h.querySelectorAll('[data-scene]')].map((b) => b.offsetHeight));
      const box = document.querySelector('.h-tbox');
      return { fs, kw: wide / fs, kh: tall / fs, boxW: box.clientWidth, boxH: box.clientHeight - parseFloat(getComputedStyle(box).paddingTop), lines: lines.map((l) => l.textContent.trim()).join(' / ') };
    });
    console.log(`RATIO ${view} ${lang} kw=${r.kw.toFixed(4)} kh=${r.kh.toFixed(4)} fs=${r.fs.toFixed(1)} box=${r.boxW}x${r.boxH.toFixed(0)} lines: ${r.lines}`);
  }
}
await browser.close();
