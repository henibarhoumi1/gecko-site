import { chromium } from 'playwright';
const BASE = process.env.BASE.replace(/\/$/, '');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BASE + '/en/', { waitUntil: 'load' });
await page.waitForTimeout(3000);
await page.mouse.move(700, 450);
const top = () => page.evaluate(() => Math.round(document.querySelector('#work').getBoundingClientRect().top));
// a strong flick down: many wheel events in a row
for (let i = 0; i < 14; i++) { await page.mouse.wheel(0, 120); await page.waitForTimeout(16); }
await page.waitForTimeout(2200);
console.log('SNAP strong flick down -> work top', await top());
for (let i = 0; i < 3; i++) { await page.mouse.wheel(0, 120); await page.waitForTimeout(16); }
await page.waitForTimeout(1800);
console.log('SNAP next small scroll moves on -> work top', await top());
for (let i = 0; i < 8; i++) { await page.mouse.wheel(0, -120); await page.waitForTimeout(16); }
await page.waitForTimeout(2200);
console.log('SNAP flick back up -> work top', await top());
for (let i = 0; i < 8; i++) { await page.mouse.wheel(0, -120); await page.waitForTimeout(16); }
await page.waitForTimeout(2200);
console.log('SNAP next flick up leaves it -> work top', await top());
await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(1500);
await page.screenshot({ path: 'out/top.jpg', type: 'jpeg', quality: 55 });
await browser.close();
