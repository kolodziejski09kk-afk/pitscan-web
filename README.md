# PitScan — web

Web estática (HTML + CSS, sin dependencias) de PitScan OBD2.

Las 4 páginas están en español e inglés: cada una tiene una sección
`id="es"` y otra `id="en"` (clase `l10n`) y el selector «Español / English»
arriba. `lang.js` enseña solo el idioma elegido (por `#es`/`#en` en la
dirección, la última elección o el idioma del navegador) y traduce el menú,
el pie y el título (atributos `data-en`). Sin JavaScript se ven los dos.

- `index.html` — portada con capturas y botón de Google Play.
- `privacidad.html` — política de privacidad.
- `terminos.html` — términos del servicio.
- `soporte.html` — contacto y preguntas frecuentes.
- `lang.js` — cambio de idioma (igual en las 4 páginas).
- `style.css` — colores de la app (`lib/theme.dart`).
- `img/` — icono y capturas (≈1080 × 1654, del móvil, en inglés).

## Pendiente

- Cuando la app esté en Google Play: cambiar el `<span class="play-btn">`
  por el enlace (comentario en `index.html`).

## Publicar

- **GitHub Pages:** subir esta carpeta a un repositorio y activar Pages
  (rama `main`, carpeta raíz). `.nojekyll` evita el procesado de Jekyll.
- **Netlify:** arrastrar la carpeta a app.netlify.com/drop.

URL de la política para Google Play: `https://<dominio>/privacidad.html`.
Términos del servicio: `https://<dominio>/terminos.html`.
