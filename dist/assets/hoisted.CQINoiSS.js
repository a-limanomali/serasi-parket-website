import './hoisted.BisqcWCz.js';
function o(n) {
  (document.getElementById('main-image').src = n),
    document.querySelectorAll('.thumbnail').forEach(e => {
      e.classList.remove('border-primary-500'),
        e.classList.add('border-transparent');
    }),
    event.target.closest('.thumbnail').classList.remove('border-transparent'),
    event.target.closest('.thumbnail').classList.add('border-primary-500');
}
const t = document.getElementById('inquiry-modal'),
  d = document.getElementById('close-inquiry'),
  a = document.getElementById('inquiry-form');
function s() {
  t.classList.remove('hidden'),
    t.classList.add('flex'),
    (document.body.style.overflow = 'hidden');
}
function r() {
  t.classList.add('hidden'),
    t.classList.remove('flex'),
    (document.body.style.overflow = 'auto');
}
d.addEventListener('click', r);
t.addEventListener('click', n => {
  n.target === t && r();
});
a.addEventListener('submit', n => {
  n.preventDefault();
  const e = new FormData(a),
    i = e.get('name');
  e.get('email'),
    e.get('phone'),
    e.get('grade'),
    e.get('requirements'),
    gtag('event', 'generate_lead', {
      currency: 'IDR',
      value: 0,
      product: 'Kayu Jati Premium',
      method: 'product_detail_inquiry',
    }),
    alert(
      `Terima kasih ${i}! Permintaan penawaran Kayu Jati Premium Anda telah diterima. Tim kami akan segera menghubungi Anda.`
    ),
    a.reset(),
    r();
});
window.changeMainImage = o;
window.openInquiry = s;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.thumbnail').classList.add('border-primary-500'),
    document.querySelector('.thumbnail').classList.remove('border-transparent');
});
