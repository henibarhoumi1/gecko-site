import { chromium } from 'playwright';
const browser = await chromium.launch();
for (const [tag, base] of [['new', 'https://smooth-arrival-gecko-site.henibarhoumi1.workers.dev'], ['live', 'https://gecko-site.henibarhoumi1.workers.dev']]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + '/en/', { waitUntil: 'load' });
  await page.waitForTimeout(3000);
  await page.mouse.move(700, 450);
  const top = () => page.evaluate(() => Math.round(document.querySelector('#work').getBoundingClientRect().top));
  const flick = async (n, d) => { for (let i = 0; i < n; i++) { await page.mouse.wheel(0, d); await page.waitForTimeout(16); } await page.waitForTimeout(2200); };
  await flick(9, 120); console.log(`SNAP ${tag} a normal scroll down (9 steps) -> work top ${await top()}`);
  await flick(4, 120); console.log(`SNAP ${tag} scroll on (4 steps) -> work top ${await top()}`);
  await page.close();
}
await browser.close();
