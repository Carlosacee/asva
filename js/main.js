const WA_NUMBER = '51961757982';

// Menú móvil
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav.main');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Animación al hacer scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Formulario -> WhatsApp con mensaje listo
const form = document.getElementById('quote-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const lines = [
      'Hola, quisiera solicitar una asesoría con Asval.',
      `Nombre: ${d.get('nombre')}`,
      d.get('empresa') ? `Empresa / negocio: ${d.get('empresa')}` : null,
      `Servicio de interés: ${d.get('servicio')}`,
      d.get('mensaje') ? `Consulta: ${d.get('mensaje')}` : null,
    ].filter(Boolean);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });
}
