// Rows marked data-marquee drift sideways without ever stopping. Scrolling speeds them up and leans the text a
// little, and scrolling back up turns them round. data-marquee holds the resting speed in px/s; data-rev runs a
// row the other way. Each row holds at least two identical copies of its content; the first child is one copy.
const rows = [...document.querySelectorAll<HTMLElement>('[data-marquee]')];
if (rows.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const state = rows.map((el) => ({ el, x: 0, w: 0, speed: Number(el.dataset.marquee) || 40, rev: el.dataset.rev != null ? -1 : 1, on: false }));
  const measure = () => state.forEach((s) => { s.w = (s.el.firstElementChild as HTMLElement).offsetWidth; });
  measure();
  addEventListener('resize', measure);
  addEventListener('load', measure, { once: true });
  const io = new IntersectionObserver((es) => es.forEach((e) => { const s = state.find((x) => x.el === e.target); if (s) s.on = e.isIntersecting; }), { rootMargin: '100px 0px' });
  state.forEach((s) => io.observe(s.el));
  let lastY = scrollY, dir = 1, boost = 0, t0 = performance.now();
  const tick = (t: number) => {
    const dt = Math.min(64, t - t0) / 1000; t0 = t;
    const y = scrollY, dy = y - lastY; lastY = y;
    if (dy) dir = dy > 0 ? 1 : -1;
    // Extra speed follows how fast the page moves, then eases back to the resting speed.
    boost += (Math.min(60, Math.abs(dy)) * 16 - boost) * 0.08;
    const lean = Math.min(1, boost / 600) * 7 * dir;
    for (const s of state) {
      if (!s.on || !s.w) continue;
      s.x -= (s.speed + boost) * dir * s.rev * dt;
      s.x %= s.w; if (s.x > 0) s.x -= s.w;
      s.el.style.transform = `translate3d(${s.x.toFixed(1)}px,0,0) skewX(${(-lean * s.rev).toFixed(2)}deg)`;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
