---
name: project-macat
description: "Landing page de MACAT (equipo audiovisual UMA) — ya con contenido real y envío de formularios vía Vercel + Resend, en progreso activo post-demo de julio 2025"
metadata:
  type: project
---

Landing page construida originalmente en julio 2025 como demo para presentar ante profesores de la UMA. Ha pasado de ser una demo con placeholders a un proyecto con contenido real en desarrollo activo (última actualización: 2026-08-13).

**Repo:** `MACAT/` es un repositorio git independiente, no parte del repo Nebulix — tiene su propio remote `origin` → `https://github.com/CurroPG/MACAT.git`.

**Stack:** HTML + CSS custom properties + JS vanilla para el frontend (zero build step). Desde 2026-08-13 también tiene backend: funciones serverless de Vercel en `/api` + `package.json` (dependencia `resend`).

**Ficheros clave:**
- `index.html`, `css/style.css`, `js/main.js` — frontend
- `api/contacto.js`, `api/unete.js`, `api/_utils.js` — funciones serverless (envío de email)
- `macat-landing-context.md` — brief completo del encargo, leer primero si se retoma tras un hueco largo

**Paleta:** acento real de marca `--accent: #E9251F` (rojo claqueta MACAT).

**Contenido real ya en su sitio (ya no son placeholders):**
- Fotos reales del equipo: `imagenes/rocio.jpeg`, `alvarado.jpeg`, `rafatal.jpeg`, `fatima.jpeg`, `ale-gil.jpeg`.
- Fotos reales de evento: `imagenes/1.jpg`–`5.jpg`, `todos.jpg` (galería), `fondo-sobre-nostros.JPG`.
- Fondo del hero: `imagenes/fondo-hero.jpeg` (foto real de estudio/rodaje).
- Foto de Málaga Cinéfila: `imagenes/cinefila.jpeg`.
- Equipo, departamentos, contacto y datos de Málaga Cinéfila: contenido real de la presentación oficial UMA Experience (19 mayo 2026).

**Sigue siendo placeholder/ficticio:** proyectos destacados (Raíces, Huella, Frequencies, Campus Vivo), noticias, timeline de actividad — usan fotos de Unsplash y datos inventados coherentes.

**Bug conocido sin arreglar:** la tarjeta de Noa Fito en la sección Equipo apunta a `public/team/noa-fito.jpg`, ruta que no existe (debería ser `imagenes/...` como el resto) — imagen rota.

**Cambios de la sesión 2026-08-13:**
- Hero simplificado: eliminados el tag "UMA Experience · Universidad de Málaga · 2026", el párrafo descriptivo bajo el titular, y el cronómetro REC de arriba a la derecha (`#timecode`, junto con su `setInterval` en `main.js`). Ahora el hero es solo logo + titular + CTAs, centrado.
- Añadidos separadores de página (filmstrip) entre departamentos→equipo y equipo→colaboradores, reutilizando la clase `.section-divider--light` (blanco→gris-50) que ya existía en el CSS pero no se usaba.
- **Formularios con backend real:** sustituido el JS que solo simulaba el envío por `fetch()` a `/api/contacto` y `/api/unete`. Cada función Node serverless valida (nombre+email obligatorios, regex de email), comprueba un honeypot (`name="web"`, oculto vía `.form__hp`) para anti-spam, y envía el email con el SDK de Resend a `malagacineteam@gmail.com` con `reply-to` al email del formulario. Mensajes de éxito/error se muestran en `.form__status` sin recargar la página.

**Resend:**
- `RESEND_API_KEY` ya está configurada en las variables de entorno de Vercel.
- Todavía no hay dominio propio verificado en Resend → el remitente usa el fallback `onboarding@resend.dev`. Si se verifica un dominio, basta con añadir la env var `RESEND_FROM_EMAIL` en Vercel (formato `"Nombre <email@dominio>"`) — el código ya lo lee automáticamente, no requiere tocar `api/_utils.js`.

**Por hacer:**
- Arreglar la ruta de la foto de Noa Fito.
- Verificar dominio propio en Resend y configurar `RESEND_FROM_EMAIL` cuando esté listo.
- Sustituir Unsplash/placeholders en proyectos, noticias y timeline cuando haya material real.
- Logo/wordmark oficial en SVG (de momento es texto "macat." en CSS).

**Why:** Proyecto real de un equipo audiovisual universitario (UMA Experience), no ya solo una demo puntual — se está profesionalizando de forma incremental (contenido real, backend real de emails).
**How to apply:** antes de tocar el proyecto, comprobar `git log`/`git status` dentro de `MACAT/` (repo propio) y releer `macat-landing-context.md` si ha pasado tiempo.
