// Live check: visits are counted (no lead is sent).
import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
const rpc = [], errs = [];
page.on('response', (r) => { if (r.url().includes('/rpc/')) rpc.push(`${r.status()} ${r.url().split('/rpc/')[1]}`); });
page.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
for (const p of ['/en/', '/fr/offers/', '/en/contact/']) { await page.goto('https://gecko-site.henibarhoumi1.workers.dev' + p, { waitUntil: 'networkidle' }); await page.waitForTimeout(1000); }
console.log('LIVE rpc', rpc.join(', '));
console.log('LIVE console errors', errs.length, errs.slice(0, 2).join(' | '));
await browser.close();
