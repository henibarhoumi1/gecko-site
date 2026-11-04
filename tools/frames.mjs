// Scroll frames of the home page, old (live) vs new (preview), desktop and phone; plus how far one must scroll
// before the first reel is fully on screen.
import { chromium, devices } from 'playwright';
import fs from 'node:fs';
fs.mkdirSync('out/frames', { recursive: true });
const sites = [['new', 'https://hero-black-gecko-site.henibarhoumi1.workers.dev']];
const browser = await chromium.launch();
for (const [tag, base] of sites) for (const [label, opts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['phone', { ...devices['iPhone 13'] }]]) {
  const page = await (await browser.newContext(opts)).newPage();
  await page.goto(base + '/en/', { waitUntil: 'load' });
  await page.waitForTimeout(3500);
  const vh = await page.evaluate(() => innerHeight);
  const step = Math.round(vh / 4);
  let found = null;
  for (let i = 0; i <= 9; i++) {
    if (i) { await page.mouse.wheel(0, step); }
    await page.waitForTimeout(900);
    const vis = await page.evaluate(() => { const c = document.querySelector('.card .c-media'); if (!c) return 0; const r = c.getBoundingClientRect(); return r.top >= 0 && r.bottom <= innerHeight && getComputedStyle(c.closest('.card')).opacity > 0.9 ? 1 : 0; });
    if (vis && found === null) found = await page.evaluate(() => scrollY);
    await page.screenshot({ path: `out/frames/${tag}_${label}_${i}.jpg`, type: 'jpeg', quality: 50 });
  }
  // snap test: from the top, one scroll of 70% of a screen, then rest
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(800);
  await page.mouse.wheel(0, Math.round(vh * .7)); await page.waitForTimeout(2000);
  console.log(`SNAP ${label}: work top after resting = ${await page.evaluate(() => Math.round(document.querySelector('#work').getBoundingClientRect().top))}`);
  await page.mouse.wheel(0, Math.round(vh * .2)); await page.waitForTimeout(2000);
  console.log(`SNAP2 ${label}: after a small extra scroll = ${await page.evaluate(() => Math.round(document.querySelector('#work').getBoundingClientRect().top))}`);
  console.log(`RESULT ${tag} ${label}: first reel fully visible after ${found} px of scroll (screen ${vh} px)`);
}
await browser.close();
