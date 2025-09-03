import './hoisted.BisqcWCz.js';
const d = document.getElementById('search-products'),
  l = document.getElementById('category-filter'),
  u = document.getElementById('application-filter'),
  y = document.getElementById('products-grid'),
  q = document.getElementById('results-count'),
  p = document.getElementById('no-results');
function i() {
  const e = d.value.toLowerCase(),
    t = l.value,
    n = u.value.toLowerCase(),
    c = document.querySelectorAll('.product-card');
  let a = 0;
  c.forEach(s => {
    const g = s.dataset.name,
      v = s.dataset.category,
      h = s.dataset.applications,
      f = e === '' || g.includes(e),
      E = t === 'Semua Kategori' || v === t,
      I = n === 'semua aplikasi' || h.includes(n);
    f && E && I
      ? ((s.style.display = 'block'), a++)
      : (s.style.display = 'none');
  }),
    (q.textContent = a),
    a === 0
      ? (p.classList.remove('hidden'), (y.style.display = 'none'))
      : (p.classList.add('hidden'), (y.style.display = 'grid')),
    gtag('event', 'search', {
      search_term: e,
      category: t,
      application: n,
      results_count: a,
    });
}
function L() {
  (d.value = ''),
    (l.value = 'Semua Kategori'),
    (u.value = 'Semua Aplikasi'),
    i();
}
d.addEventListener('input', i);
l.addEventListener('change', i);
u.addEventListener('change', i);
const o = document.getElementById('inquiry-modal'),
  B = document.getElementById('close-inquiry'),
  r = document.getElementById('inquiry-form'),
  k = document.getElementById('inquiry-product');
function w(e) {
  (k.value = e),
    o.classList.remove('hidden'),
    o.classList.add('flex'),
    (document.body.style.overflow = 'hidden');
}
function m() {
  o.classList.add('hidden'),
    o.classList.remove('flex'),
    (document.body.style.overflow = 'auto');
}
B.addEventListener('click', m);
o.addEventListener('click', e => {
  e.target === o && m();
});
r.addEventListener('submit', e => {
  e.preventDefault();
  const t = new FormData(r),
    n = t.get('product'),
    c = t.get('name');
  t.get('email'),
    t.get('phone'),
    t.get('requirements'),
    gtag('event', 'generate_lead', {
      currency: 'IDR',
      value: 0,
      product: n,
      method: 'product_inquiry',
    }),
    alert(
      `Terima kasih ${c}! Inquiry Anda untuk ${n} telah diterima. Tim kami akan segera menghubungi Anda.`
    ),
    r.reset(),
    m();
});
window.openInquiry = w;
window.resetFilters = L;
