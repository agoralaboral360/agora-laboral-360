/* Estado de navegación: página actual y secciones de la portada. */
(() => {
  const links = [...document.querySelectorAll('.site-header .desktop-nav a, .site-header #menu-principal a')];
  const normal = path => path.replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  const path = normal(location.pathname);
  function update() {
    const hash = location.hash || '#inicio';
    let active = links.find(a => { const u = new URL(a.href); return normal(u.pathname) === path && u.hash === hash; });
    if (!active) active = links.find(a => { const u = new URL(a.href); return !u.hash && normal(u.pathname) === path; });
    if (!active) active = links.find(a => { const u = new URL(a.href); const parent = normal(u.pathname); return !u.hash && parent !== '/' && path.startsWith(parent + '/'); });
    links.forEach(a => { a.removeAttribute('aria-current'); if (a === active) a.setAttribute('aria-current', path === '/' ? 'location' : 'page'); });
  }
  window.addEventListener('hashchange', update);
  update();
})();
