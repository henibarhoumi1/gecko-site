// Rows marked data-marquee drift sideways at a steady speed and never react to scrolling. data-marquee holds the
// speed in px/s; data-rev runs a row the other way. Each row holds at least two identical copies of its content;
// the first child is one copy.
// The motion is a CSS animation (the browser runs it on its compositor, off the main thread, so it never competes with
// scrolling). This script only measures one copy and sets the distance and duration; it runs again on resize and once
// the font has loaded. Rows off screen are paused.
const rows = [...document.querySelectorAll<HTMLElement>('[data-marquee]:not([data-mq])')];
if (rows.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const measure = () => rows.forEach((el) => {
    const w = (el.firstElementChild as HTMLElement).offsetWidth;
    if (!w) return;
    const speed = Number(el.dataset.marquee) || 40;
    el.style.setProperty('--mq-w', `${-w}px`);
    el.style.setProperty('--mq-t', `${(w / speed).toFixed(2)}s`);
    el.classList.add('mq');
  });
  rows.forEach((el) => { el.dataset.mq = ''; if (el.dataset.rev != null) el.classList.add('mq-rev'); });
  measure();
  let rt = 0;
  addEventListener('resize', () => { clearTimeout(rt); rt = window.setTimeout(measure, 150); });
  addEventListener('load', measure, { once: true });
  document.fonts?.ready.then(measure);
  const io = new IntersectionObserver((es) => es.forEach((e) => (e.target as HTMLElement).classList.toggle('mq-off', !e.isIntersecting)), { rootMargin: '100px 0px' });
  rows.forEach((el) => io.observe(el));
}
