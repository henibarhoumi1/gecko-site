import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://hero-black-gecko-site.henibarhoumi1.workers.dev/en/', { waitUntil: 'load' });
await page.waitForTimeout(2500);
await page.evaluate(() => document.querySelector('#work').scrollIntoView());
await page.waitForTimeout(2500);
console.log('PROBE', JSON.stringify(await page.evaluate(() => {
  const r = (el) => { const b = el.getBoundingClientRect(); return [Math.round(b.x), Math.round(b.y), Math.round(b.width), Math.round(b.height)]; };
  const card = document.querySelector('.card'), m = card.querySelector('.c-media'), img = m.querySelector('img');
  const b = m.getBoundingClientRect(); const at = document.elementFromPoint(b.x + b.width / 2, b.y + b.height * .7);
  const cs = getComputedStyle(m);
  return { work: r(document.querySelector('#work')), deck: r(document.querySelector('.deck')), card: r(card), media: r(m), img: r(img), at: at && (at.tagName + '.' + at.className), aspect: cs.aspectRatio, h: cs.height, cardStyle: getComputedStyle(card).maxWidth, op: getComputedStyle(card).opacity, tf: getComputedStyle(card).transform };
})));
await page.screenshot({ path: 'out/probe.jpg', type: 'jpeg', quality: 50 });
await browser.close();
