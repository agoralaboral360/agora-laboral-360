const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const toast = document.querySelector('#demo-toast');

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

function demoNotice(event) {
  event.preventDefault();
  toast.classList.add('show');
  window.clearTimeout(window.demoTimer);
  window.demoTimer = window.setTimeout(() => toast.classList.remove('show'), 3200);
}

document.querySelectorAll('.js-whatsapp, .js-phone').forEach(link => link.addEventListener('click', demoNotice));
document.querySelector('#quote-form').addEventListener('submit', demoNotice);
document.querySelector('#year').textContent = new Date().getFullYear();
