import './hoisted.BisqcWCz.js';
function u() {
  const t = document.querySelectorAll('[data-count]'),
    i = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' },
    a = new IntersectionObserver(o => {
      o.forEach(s => {
        if (s.isIntersecting) {
          const e = s.target,
            n = parseInt(e.getAttribute('data-count')),
            c = n / (2e3 / 16);
          let r = 0;
          const d = () => {
            (r += c),
              r < n
                ? ((e.textContent = Math.floor(r)), requestAnimationFrame(d))
                : (e.textContent = n);
          };
          d(), a.unobserve(e);
        }
      });
    }, i);
  t.forEach(o => a.observe(o));
}
document.addEventListener('DOMContentLoaded', () => {
  u();
  const t = document.querySelector('video');
  t &&
    t.addEventListener('loadeddata', () => {
      gtag('event', 'video_start', {
        video_title: 'Hero Background',
        video_duration: t.duration,
      });
    });
});
