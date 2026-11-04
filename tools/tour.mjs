import { chromium, devices } from 'playwright';
const BASE = process.env.BASE.replace(/\/$/, '');
const browser = await chromium.launch({ channel: 'chrome' });
for (const [label, opts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['phone', { ...devices['iPhone 13'] }]]) {
  const page = await (await browser.newContext(opts)).newPage();
  page.on('pageerror', (e) => console.log('TOUR pageerror', String(e)));
  await page.goto(BASE + '/en/', { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  await page.evaluate(() => { const s = document.querySelector('#workspace'); scrollTo(0, s.getBoundingClientRect().top + scrollY - 40); });
  const st = () => page.evaluate(() => { const li = [...document.querySelectorAll('#workspace [data-step]')]; const tab = document.querySelector('#workspace [data-ws-tab][aria-selected="true"]'); return `on=${li.findIndex((l) => l.classList.contains('on'))} tab=${tab?.textContent.trim()} height=${Math.round(document.querySelector('#workspace').getBoundingClientRect().height)} screen=${innerHeight}`; });
  await page.waitForTimeout(800); console.log(`TOUR ${label} start`, await st());
  await page.screenshot({ path: `out/tour_${label}_a.jpg`, type: 'jpeg', quality: 60 });
  await page.waitForTimeout(5000); console.log(`TOUR ${label} +5s`, await st());
  await page.waitForTimeout(4700); console.log(`TOUR ${label} +10s`, await st());
  await page.screenshot({ path: `out/tour_${label}_b.jpg`, type: 'jpeg', quality: 60 });
  await page.click('#workspace [data-step]:nth-child(5) button'); await page.waitForTimeout(6000); console.log(`TOUR ${label} clicked step 5, +6s`, await st());
}
await browser.close();
