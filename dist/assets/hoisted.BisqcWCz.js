const n = document.getElementById('mobile-menu-button'),
  o = document.getElementById('mobile-menu');
n &&
  o &&
  n.addEventListener('click', () => {
    o.classList.toggle('hidden');
  });
let a = 0;
const s = document.getElementById('header');
window.addEventListener('scroll', () => {
  let e = window.pageYOffset || document.documentElement.scrollTop;
  e > a && e > 100
    ? (s.style.transform = 'translateY(-100%)')
    : (s.style.transform = 'translateY(0)'),
    e > 50
      ? s.classList.add('bg-white/95', 'backdrop-blur-sm')
      : s.classList.remove('bg-white/95', 'backdrop-blur-sm'),
    (a = e);
});
document
  .getElementById('footer-newsletter-form')
  ?.addEventListener('submit', function (e) {
    e.preventDefault();
    const t = this.email.value;
    gtag('event', 'newsletter_signup', { method: 'footer', email: t }),
      alert('Terima kasih! Anda telah berlangganan newsletter kami.'),
      this.reset();
  });
const l = document.getElementById('whatsapp-fab');
if (l) {
  let e = window.scrollY;
  window.addEventListener('scroll', () => {
    const t = window.scrollY;
    t > e && t > 100
      ? (l.classList.add('scale-0'), l.classList.remove('scale-100'))
      : (l.classList.add('scale-100'), l.classList.remove('scale-0')),
      (e = t);
  });
}
