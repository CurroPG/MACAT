---
name: project-macat
description: Landing page demo para MACAT (Málaga Cinematographic Audiovisual Team), equipo audiovisual universitario UMA, para presentar a profesores de la Universidad de Málaga
metadata:
  type: project
---

Landing page demo construida en julio 2025 para presentar ante profesores de la UMA.

**Stack:** HTML + CSS custom properties + vanilla JS (zero build step, abre directo en el navegador).

**Ubicación:** `MACAT/` — proyecto aislado y portable, sin dependencias de otros proyectos del repo Nebulix.

**Ficheros:**
- `MACAT/index.html` — HTML completo (~1100 líneas, 13 secciones)
- `MACAT/css/style.css` — CSS (~700 líneas, variables de diseño en `:root`)
- `MACAT/js/main.js` — JS vanilla (nav scroll, timecode, scroll-reveal, FAQ, lightbox, forms)

**Paleta:** blanco/negro/grises claros + acento `--accent: #E9251F` (rojo de marca real MACAT, actualizado 2026-07-15 desde el placeholder `#E63329`).
Cambiar variable `--accent` en `:root` para actualizar todo el color de marca.

**Secciones implementadas (en orden):**
Hero → Qué es MACAT → Proyectos → Málaga Cinéfila → Departamentos → Equipo (mentores/estudiantes/coordinadores "próximamente"/externos "próximamente") → Colaboradores → Actividad timeline → Noticias → Galería → Únete (FAQ + formulario) → Contacto → Footer

**Imágenes:** Unsplash vía URL directa (no hay assets locales — todo es CDN).

**Contenido real (actualizado 2026-07-15 desde `macat-landing-context.md`, presentación oficial MACAT 19 mayo 2026):**
- Equipo real: mentores Rocío de la Maya, Alejandro Alvarado, Rafatal; estudiantes Noa Fito y Fátima Arjona (líderes), Alejandro Gil (secretario). Fotos siguen siendo placeholders de stock.
- 8 departamentos reales (4 soporte + 4 producción), sustituyeron a la lista genérica de 20 departamentos ficticios.
- Málaga Cinéfila: contenido real de "simbiosis", cita de Edward Yang, cartel del ciclo "Cinema Sideral" y colaboración con Polliwood (Valencia).
- Contacto/footer real: email `malagacineteam@gmail.com`, Instagram `@macat_uma` y `@malagacinefila`.

**Sigue siendo placeholder (sin dato real todavía):** proyectos destacados (Raíces, Huella, Frequencies, Campus Vivo — incluyen créditos ficticios tipo "Dir. Carlos Moreno" como contenido de ejemplo, no confundir con el equipo real de la sección Equipo), galería, noticias, timeline de actividad.

**Por hacer cuando haya material real:**
- Sustituir imágenes de Unsplash por fotos reales del equipo
- Conectar formularios a un backend (Formspree, EmailJS o similar)
- Añadir logo/wordmark oficial en SVG (de momento es texto "macat." en CSS)
- Confirmar hex exacto de marca si aparece un archivo de identidad oficial (de momento `#E9251F` es una aproximación fiel a la paleta descrita en la presentación)

**Why:** Demo para reunión comercial/institucional con profesores UMA — prioridad: impacto visual inmediato.
**How to apply:** si se retoma este proyecto, leer `MACAT/macat-landing-context.md` primero para contexto completo.
