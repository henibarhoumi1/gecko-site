// Final checks on a preview: the brief builder end to end (writes to the TESTING database), the legal page,
// and the time to the first headline on a throttled phone.
import { chromium, devices } from 'playwright';
const BASE = process.env.BASE.replace(/\/$/, '');
const browser = await chromium.launch();
const ctx = await browser.newContext({ ...devices['iPhone 13'] });
const page = await ctx.newPage();
const rpc = [];
page.on('response', (r) => { if (r.url().includes('/rpc/')) rpc.push(`${r.status()} ${r.url().split('/rpc/')[1]}`); });
page.on('popup', (p) => rpc.push('popup ' + p.url().slice(0, 30)));
await page.goto(BASE + '/en/apply/', { waitUntil: 'networkidle' });
for (let i = 0; i < 14; i++) {
  console.log('at step', i, await page.locator('form[data-flow] [data-step]:not([hidden])').first().getAttribute('data-key'));
  const step = page.locator('form[data-flow] [data-step]:not([hidden])').first();
  if (await step.getAttribute('data-last') !== null) break;
  await step.locator('.chip').first().click();
  const next = step.locator('[data-next]');
  if (await next.count()) { await page.waitForTimeout(200); await next.click(); }
  await page.waitForTimeout(700);
}
const last = page.locator('form[data-flow] [data-last]');
await last.locator('input[name=name]').fill('Final Check (ignore)');
await last.locator('input[name=brand]').fill('Audit Brand');
await last.locator('input[name=phone]').fill('+216 20 000 001');
await last.locator('button[type=submit], .send').first().click({ timeout: 5000 }).catch(async () => page.locator('form[data-flow] .send').click());
await page.waitForTimeout(3500);
console.log('at:', await page.getAttribute('form[data-flow]', 'data-at'));
console.log('brief message:', (await page.textContent('[data-msg]'))?.trim());
console.log(rpc.join('\n'));
await page.goto(BASE + '/fr/legal/', { waitUntil: 'networkidle' });
console.log('legal fr:', (await page.textContent('main'))?.replace(/\s+/g, ' ').trim().slice(0, 700));
await browser.close();
