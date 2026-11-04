import { chromium, devices } from 'playwright';
const BASE = process.env.BASE.replace(/\/$/, '');
const browser = await chromium.launch({ channel: 'chrome', args: ['--autoplay-policy=no-user-gesture-required'] });
for (const [label, opts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['phone', { ...devices['iPhone 13'] }]]) {
  const page = await (await browser.newContext(opts)).newPage();
  page.on('pageerror', (e) => console.log('REEL pageerror', String(e)));
  await page.goto(BASE + '/en/', { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  await page.evaluate(() => document.querySelector('#work').scrollIntoView());
  await page.waitForTimeout(3000);
  const state = () => page.evaluate(() => [...document.querySelectorAll('#work .card')].map((c) => { const v = c.querySelector('video'); const b = c.querySelector('.c-media'); return `${b.getAttribute('aria-pressed')}|${v.muted ? 'muted' : 'SOUND'}|${(v.getAttribute('src') || '').split('/').pop()}|t=${v.currentTime.toFixed(1)}|op=${getComputedStyle(b).opacity}`; }).join('  '));
  console.log(`REEL ${label} before`, await state());
  if (label === 'desktop') { await page.hover('#work .card:nth-child(2) .c-media'); await page.waitForTimeout(600); console.log('REEL desktop while hovering card 2 (opacity of card 1):', await page.evaluate(() => getComputedStyle(document.querySelector('#work .card .c-media')).opacity)); }
  await page.click('#work .card:nth-child(1) .c-media'); await page.waitForTimeout(3500);
  console.log(`REEL ${label} after click 1`, await state());
  await page.click('#work .card:nth-child(3) .c-media'); await page.waitForTimeout(3500);
  console.log(`REEL ${label} after click 3`, await state());
  await page.click('#work .card:nth-child(3) .c-media'); await page.waitForTimeout(1500);
  console.log(`REEL ${label} after click 3 again`, await state());
  console.log(`REEL ${label} viewer open?`, await page.evaluate(() => !!document.querySelector('dialog[open], .viewer.open, [data-viewer].open')));
  await page.screenshot({ path: `out/reels_${label}.jpg`, type: 'jpeg', quality: 55 });
}
await browser.close();
