// Fails if any page in dist/ links to a page or file of this site that doesn't exist.
import fs from 'node:fs';
import path from 'node:path';
const root = 'dist';
const pages = [];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => { const p = path.join(d, e.name); e.isDirectory() ? walk(p) : p.endsWith('.html') && pages.push(p); });
walk(root);
const redirects = fs.existsSync('public/_redirects') ? fs.readFileSync('public/_redirects', 'utf8').split('\n').map((l) => l.trim().split(/\s+/)[0]).filter((x) => x && !x.startsWith('#')) : [];
const exists = (u) => {
  const clean = decodeURI(u.split('#')[0].split('?')[0]);
  if (!clean || redirects.includes(clean)) return true;
  const f = path.join(root, clean);
  return fs.existsSync(f) && fs.statSync(f).isFile() || fs.existsSync(path.join(f, 'index.html')) || fs.existsSync(f + '.html');
};
const missing = [];
for (const p of pages) {
  const html = fs.readFileSync(p, 'utf8');
  for (const [, u] of html.matchAll(/(?:href|src|poster|data-src)="(\/[^"]*)"/g)) if (!u.startsWith('//') && !exists(u)) missing.push(`${p}: ${u}`);
}
console.log(`${pages.length} pages checked`);
if (missing.length) { console.error([...new Set(missing)].join('\n')); process.exit(1); }
