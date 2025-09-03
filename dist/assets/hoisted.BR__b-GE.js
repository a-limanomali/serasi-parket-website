import './hoisted.BisqcWCz.js';
document
  .getElementById('contact-form')
  .addEventListener('submit', function (n) {
    n.preventDefault();
    const e = new FormData(this),
      a = e.get('name');
    e.get('email'), e.get('phone');
    const t = e.get('inquiry_type');
    e.get('message');
    const i = [];
    e.getAll('wood_types').forEach(s => i.push(s)),
      gtag('event', 'generate_lead', {
        currency: 'IDR',
        value: 0,
        method: 'contact_form',
        inquiry_type: t,
        wood_types: i.join(','),
      }),
      alert(
        `Terima kasih ${a}! Pesan Anda telah terkirim. Tim kami akan menghubungi Anda dalam 24 jam ke depan.`
      ),
      this.reset();
  });
function o(n) {
  const e = n.nextElementSibling,
    a = n.querySelector('svg');
  e.classList.contains('hidden')
    ? (document.querySelectorAll('.bg-white .hidden').forEach(t => {
        t !== e &&
          (t.classList.add('hidden'),
          t.previousElementSibling
            .querySelector('svg')
            .classList.remove('rotate-180'));
      }),
      e.classList.remove('hidden'),
      a.classList.add('rotate-180'))
    : (e.classList.add('hidden'), a.classList.remove('rotate-180'));
}
window.toggleFAQ = o;
