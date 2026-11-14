# PitScan — web

Web estática (HTML + CSS, sin dependencias) de PitScan OBD2.

- `index.html` — portada con capturas y botón de Google Play.
- `privacidad.html` — política de privacidad (español `#es` e inglés `#en`).
- `soporte.html` — contacto y preguntas frecuentes.
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
