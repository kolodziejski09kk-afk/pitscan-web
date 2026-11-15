// Idioma de la web (español / inglés). Igual en las 4 páginas.
// - Cada página tiene una sección id="es" lang="es" y otra id="en" lang="en".
// - Se ve solo la del idioma elegido; sin JavaScript se ven las dos.
// - Elección: #es / #en en la dirección > la última elegida > el idioma
//   del navegador (español si empieza por "es"; si no, inglés).
// - Los textos comunes (menú, pie, título) llevan data-en con el inglés.
(function () {
  var root = document.documentElement;

  function fromHash() {
    var h = location.hash.slice(1);
    return h === 'es' || h === 'en' ? h : null;
  }
  function saved() {
    try { return localStorage.getItem('pitscan-lang'); } catch (e) { return null; }
  }
  function save(l) {
    try { localStorage.setItem('pitscan-lang', l); } catch (e) { /* sin guardar */ }
  }
  function browser() {
    var n = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
    return n.toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
  }

  var hashLang = fromHash();
  var lang = hashLang || saved() || browser();
  if (lang !== 'es' && lang !== 'en') lang = 'es';
  // Un enlace con #es o #en también cuenta como elección.
  if (hashLang) save(hashLang);

  // Antes de pintar: así no se ve un idioma y luego el otro.
  root.classList.add('js');
  root.setAttribute('data-lang', lang);
  root.lang = lang;

  function apply(l) {
    lang = l;
    root.setAttribute('data-lang', l);
    root.lang = l;
    var els = document.querySelectorAll('[data-en]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (!el.hasAttribute('data-es')) el.setAttribute('data-es', el.textContent);
      el.textContent = el.getAttribute(l === 'en' ? 'data-en' : 'data-es');
    }
    var meta = document.querySelector('meta[name="description"]');
    if (meta && meta.hasAttribute('data-en')) {
      if (!meta.hasAttribute('data-es')) meta.setAttribute('data-es', meta.content);
      meta.content = meta.getAttribute(l === 'en' ? 'data-en' : 'data-es');
    }
    var links = document.querySelectorAll('.lang-switch a');
    for (var j = 0; j < links.length; j++) {
      var on = links[j].getAttribute('href') === '#' + l;
      if (on) links[j].setAttribute('aria-current', 'true');
      else links[j].removeAttribute('aria-current');
    }
  }

  function choose(l) {
    save(l);
    apply(l);
    if (history.replaceState) history.replaceState(null, '', '#' + l);
    window.scrollTo(0, 0);
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(lang);
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('.lang-switch a');
      if (!a) return;
      var l = a.getAttribute('href').slice(1);
      if (l !== 'es' && l !== 'en') return;
      e.preventDefault();
      choose(l);
    });
  });

  // #es y #en son el principio de la página: sin bajar por el ancla.
  window.addEventListener('load', function () {
    if (hashLang) setTimeout(function () { window.scrollTo(0, 0); }, 0);
  });

  window.addEventListener('hashchange', function () {
    var l = fromHash();
    if (l && l !== lang) { save(l); apply(l); window.scrollTo(0, 0); }
  });
})();
