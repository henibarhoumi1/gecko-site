// The word roll: [data-roll] holds stacked words (.w); one has .on. About every 2 seconds the next one cuts in and its
// pink marker draws (CSS: .roll in brand.css). It runs only while on screen. With reduced motion nothing moves: the
// first word stays, marker drawn.
const rolls = [...document.querySelectorAll<HTMLElement>('[data-roll]')];
if (rolls.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const every = 2000;
  const state = rolls.map((el) => {
    const words = [...el.querySelectorAll<HTMLElement>('.w')];
    return { el, words, i: Math.max(0, words.findIndex((w) => w.classList.contains('on'))), timer: 0 };
  });
  const step = (s: (typeof state)[number]) => {
    s.words[s.i].classList.remove('on');
    s.i = (s.i + 1) % s.words.length;
    const w = s.words[s.i];
    // Restart the animation on the word that lands.
    w.style.animation = 'none'; void w.offsetWidth; w.style.animation = '';
    w.classList.add('on');
  };
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    const s = state.find((x) => x.el === e.target)!;
    clearInterval(s.timer);
    if (e.isIntersecting && s.words.length > 1) { s.el.classList.add('live'); s.timer = window.setInterval(() => step(s), every); }
  }));
  state.forEach((s) => io.observe(s.el));
}
