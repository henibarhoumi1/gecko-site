// Films page loads in real Chrome and measures how dark the top 80 px is in every frame, to catch a black bar.
import { chromium, devices } from 'playwright';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const BASE = process.env.BASE.replace(/\/$/, '');
fs.mkdirSync('out/vid', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const scenarios = {
  fresh: async (p) => { await p.goto(BASE + '/en/'); await p.waitForTimeout(2500); },
  reloadWork: async (p) => { await p.goto(BASE + '/en/'); await p.waitForTimeout(2000); await p.evaluate(() => scrollTo(0, document.querySelector('#work').getBoundingClientRect().top + scrollY + 200)); await p.waitForTimeout(1200); await p.reload(); await p.waitForTimeout(2500); },
  reloadDeep: async (p) => { await p.goto(BASE + '/en/offers/'); await p.waitForTimeout(1500); await p.evaluate(() => scrollTo(0, 2500)); await p.waitForTimeout(1200); await p.reload(); await p.waitForTimeout(2500); },
  navigate: async (p) => { await p.goto(BASE + '/en/'); await p.waitForTimeout(2000); const l = p.locator('header a[href="/en/offers/"]').first(); if (await l.isVisible()) { await l.hover(); await p.waitForTimeout(900); await l.click(); } else { await p.goto(BASE + '/en/offers/'); } await p.waitForTimeout(2500); },
  freshWork: async (p) => { await p.goto(BASE + '/en/work/'); await p.waitForTimeout(2500); },
};
for (const [view, opts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['phone', { ...devices['iPhone 13'] }]]) {
  for (const [name, run] of Object.entries(scenarios)) {
    const size = opts.viewport ?? { width: 390, height: 664 };
    const ctx = await browser.newContext({ ...opts, recordVideo: { dir: 'out/vid/tmp', size } });
    const page = await ctx.newPage();
    await run(page).catch((e) => console.log('VID err', name, String(e).slice(0, 120)));
    const vpath = await page.video().path();
    await ctx.close();
    const tag = `${view}_${name}`;
    const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', vpath, '-vf', `crop=iw:80:0:0,format=gray`, '-f', 'rawvideo', '-'], { maxBuffer: 1 << 28 });
    const w = size.width, fr = w * 80, n = Math.floor(raw.length / fr);
    let worst = 0, at = -1; const series = [];
    for (let i = 0; i < n; i++) { let dark = 0; for (let j = i * fr; j < (i + 1) * fr; j++) if (raw[j] < 50) dark++; const f = dark / fr; series.push(f.toFixed(2)); if (f > worst) { worst = f; at = i; } }
    console.log(`VID ${tag}: frames ${n}, darkest top strip ${(worst * 100).toFixed(0)}% at frame ${at}; series ${series.join(' ')}`.slice(0, 900));
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', vpath, '-vf', `select=lt(n\\,48),scale=${view === 'desktop' ? 360 : 180}:-1,tile=8x6`, '-frames:v', '1', `out/vid/${tag}.jpg`]);
  }
}
fs.rmSync('out/vid/tmp', { recursive: true, force: true });
await browser.close();
