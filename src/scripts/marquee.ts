// Rows marked data-marquee drift sideways at a steady speed and never react to scrolling. data-marquee holds the
// speed in px/s; data-rev runs a row the other way. Each row holds at least two identical copies of its content;
// the first child is one copy. Rows off screen pause.
const rows = [...document.querySelectorAll<HTMLElement>('[data-marquee]')];
if (rows.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const state = rows.map((el) => ({ el, x: 0, w: 0, speed: Number(el.dataset.marquee) || 40, rev: el.dataset.rev != null ? -1 : 1, on: false }));
  const measure = () => state.forEach((s) => { s.w = (s.el.firstElementChild as HTMLElement).offsetWidth; });
  measure();
  addEventListener('resize', measure);
  addEventListener('load', measure, { once: true });
  document.fonts?.ready.then(measure);
  const io = new IntersectionObserver((es) => es.forEach((e) => { const s = state.find((x) => x.el === e.target); if (s) s.on = e.isIntersecting; }), { rootMargin: '100px 0px' });
  state.forEach((s) => io.observe(s.el));
  let t0 = performance.now();
  const tick = (t: number) => {
    const dt = Math.min(64, t - t0) / 1000; t0 = t;
    for (const s of state) {
      if (!s.on || !s.w) continue;
      s.x -= s.speed * s.rev * dt;
      s.x %= s.w; if (s.x > 0) s.x -= s.w;
      s.el.style.transform = `translate3d(${s.x.toFixed(1)}px,0,0)`;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
