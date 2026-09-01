const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
  nav.classList.toggle('open', !open);
});

document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const whatsappUrl = 'https://wa.me/56992232623?text=';
document.querySelectorAll('.js-whatsapp').forEach(link => {
  if (link.getAttribute('href') === '#contacto') {
    link.setAttribute('href', whatsappUrl + encodeURIComponent('Hola Mario, necesito información sobre un servicio eléctrico.'));
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
  }
});

document.querySelectorAll('.js-phone').forEach(link => link.setAttribute('href', 'tel:+56992232623'));

document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hola Mario, mi nombre es ${data.get('nombre')}.\nComuna: ${data.get('comuna')}.\nTipo de trabajo: ${data.get('problema')}.\nDetalle: ${data.get('mensaje') || 'Sin detalle adicional.'}`;
  window.open(whatsappUrl + encodeURIComponent(message), '_blank', 'noopener');
});

document.querySelector('#year').textContent = new Date().getFullYear();
