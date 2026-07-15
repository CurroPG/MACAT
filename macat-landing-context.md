# Landing Context — MACAT (Málaga Cinematographic Audiovisual Team)

## 0. Encargo

Landing page demo de una página web para MACAT, un equipo audiovisual universitario nacido en la convocatoria **UMA Experience** de la Universidad de Málaga. Es una demo para presentar mañana ante profesores de la UMA — debe verse pulida, profesional y con mucho impacto visual desde el primer vistazo. A diferencia de una demo genérica, ya tenemos marca real, equipo real y estructura real (sacados de la presentación oficial de MACAT del 19 de mayo de 2026) — usar esos datos siempre que sea posible en vez de placeholders inventados.

Stack sugerido: HTML/CSS/JS puro o React + Tailwind (lo que Claude Code prefiera manejar rápido), mobile-first, con animaciones suaves tipo scroll-reveal. Prioriza velocidad de entrega y pulido visual sobre backend real — es una demo, no necesita formularios funcionales ni CMS.

---

## 0bis. Datos reales de marca (extraídos de la presentación oficial MACAT — 19 mayo 2026)

**Naming completo:** MACAT — Málaga Cinematographic Audiovisual Team.
**Descriptor corto de marca:** "Laboratorio / Incubadora Audiovisual".
**Origen:** proyecto nacido de la convocatoria UMA Experience 2026 de la Universidad de Málaga.

**Redes y contacto reales:**
- Instagram: @macat_uma
- Instagram del cineclub: @malagacinefila
- Email: malagacineteam@gmail.com

**Logotipo:** wordmark "MACAT." en mayúsculas, tipografía de palo muy gruesa/condensada (grotesk bold, tipo display), con un punto final después de "CAT" como firma visual — usarlo también como recurso gráfico suelto (el punto como bullet, como REC, como cierre de frases).

**Concepto de marca (tres pilares, usar tal cual como bloques de "¿qué es MACAT?"):**
1. **Comunidad formativa y colaborativa** — "el crear y aprender cine como experiencia colectiva".
2. **Laboratorio creativo** — "un espacio universitario para experimentar y producir".
3. **Incubadora audiovisual** — "estructura donde las ideas se convierten en proyectos reales".

Tagline corto asociado: **"aprende creando y colaborando"**.

**Paleta de color real** (esto sustituye al placeholder rojo/naranja genérico mencionado más abajo):
- Rojo vivo saturado como color de marca principal (tono claqueta/cine, similar a un rojo puro tipo `#E9251F`–`#F21C1C` — Claude Code debe ajustar el hex exacto si se consigue el archivo de marca, pero debe ser un rojo intenso, no anaranjado ni granate).
- Negro y blanco como base tipográfica y de contraste.
- Gris muy oscuro casi negro (`#1a1a1a` aprox.) como fondo alternativo en secciones tipo "equipo" (se ve en la diapositiva del equipo, fondo oscuro con la palabra "MACAT" gigante en gris apenas visible de fondo).
- Confirma la instrucción original del guión: la sensación general debe seguir siendo luminosa — el rojo se usa como bloque de impacto (portadas de sección, CTAs, acentos), no para teñir toda la web de oscuro.

**Recurso visual recurrente:** texturas de fotograma de cine / tira de celuloide (perforaciones de película 35mm) usadas como separador de sección o fondo decorativo, con tratamiento fotográfico vintage/grano en algunas diapositivas (efecto "found footage" en fotos de archivo, ilustraciones tipo collage/papel reciclado para la diapositiva "qué es MACAT").

---

## 1. Objetivo de la web

No debe sentirse como una web institucional de universidad. Debe transmitir que existe una **comunidad joven, creativa y profesional** haciendo cosas reales dentro de la UMA.

Dos reacciones que debe provocar:
- **Estudiante:** "Quiero formar parte de este equipo."
- **Profesor / institución / empresa:** "Es un proyecto serio, bien organizado, con muchísimo potencial."

En menos de un minuto el visitante debe entender:
1. MACAT desarrolla proyectos audiovisuales reales.
2. Está formado por estudiantes con talento acompañados por profesorado, profesionales y colaboradores del sector.
3. Cualquier estudiante con ganas de aprender y crear puede unirse.

---

## 2. Referencias visuales

- **https://techmalaga.com/** — tono cercano y moderno, hub de comunidad, mezcla de energía/informalidad con secciones bien organizadas (beneficios, testimonios, partners, FAQ en acordeón). Tomar la estructura de "comunidad + organización" pero NO su densidad de bloques ni su estética de asociación empresarial.
- **https://readymag.website/u4143220603/5834689/** — referencia de agencia creativa/portfolio: mucho espacio en blanco, tipografía grande protagonista, transiciones fluidas, sensación editorial/cinematográfica más que corporativa. Esta es la referencia de **layout y sensación**, techmalaga.com es la referencia de **estructura de contenido y cercanía**.
- Inspiración adicional: estudios de producción audiovisual, productoras de cine independiente, agencias creativas internacionales.
- **Evitar activamente:** el estilo institucional típico de páginas universitarias (bloques rectangulares pesados, exceso de cajas, tono formal/burocrático).

---

## 3. Identidad visual

**Personalidad:** cercana, joven, creativa, dinámica, profesional, elegante, minimalista, muy visual.

**Estilo gráfico:**
- Mucho espacio en blanco, diseño limpio.
- Tipografía moderna, sans-serif, con **uso prioritario de minúsculas** en titulares y CTAs (incluso en frases tipo "hacemos cine.").
- Fotografías grandes / vídeo como elemento protagonista (usar placeholders de vídeo o imágenes de stock cinematográficas de alta calidad mientras no hay material real).
- Animaciones suaves, microinteracciones, transiciones fluidas tipo cambio de plano.
- Responsive desde el principio.
- **Nada de** rejillas rígidas de cajas rectangulares pesadas — layout más editorial, asimétrico, con jerarquía tipográfica fuerte.

**Colores:**
- Base: blanco, negro, grises muy claros.
- Acento de marca real: **rojo vivo tipo claqueta** (ver sección 0bis para el hex de referencia) — es el color oficial de MACAT, úsalo con protagonismo en portadas de sección, CTAs y titulares de impacto.
- El negro está presente (viene del logo) pero la sensación general debe ser **luminosa** en la mayoría de la web — el rojo y el negro se reservan para bloques de impacto (hero, cierres de sección, tarjeta de equipo) en vez de teñir toda la página.

**Microinteracciones temáticas (sutiles, nunca recargadas):**
- Botones que se comportan como botones REC.
- Transiciones que recuerdan al cambio entre planos de cámara.
- Detalles opcionales inspirados en: visor de cámara, timecode, enfoque, claqueta, barras de audio, fotogramas.

**Tono de escritura:** cercano, optimista, inspirador, profesional, joven. Nunca institucional. Escribir como comunidad creativa, no como universidad.

---

## 4. Estructura de secciones (orden de la landing)

### 4.1 Hero
- Gran vídeo/imagen de fondo (placeholder cinematográfico: gente rodando, montando cámaras, editando, grabando sonido, trabajando en equipo).
- Mensaje potente encima, en minúsculas, tipo:
  - "hacemos cine."
  - "creamos oportunidades."
  - "construimos comunidad."
- Dos CTAs: **conocer MACAT** / **únete al equipo**.

### 4.2 ¿Qué es MACAT?
Texto corto, pocas frases, mucho impacto visual. Idea base:
> MACAT (Málaga Cinematographic Audiovisual Team) es una comunidad y productora audiovisual universitaria nacida dentro de la convocatoria UMA Experience de la Universidad de Málaga. Conectamos a estudiantes apasionados por el cine, la comunicación y la creación audiovisual para desarrollar proyectos reales, aprender en equipo y generar oportunidades dentro y fuera de la universidad.

### 4.3 Proyectos destacados
Sección alta en la jerarquía, formato portfolio. Cada tarjeta: imagen/vídeo grande, descripción, estado, responsables, participantes. Placeholders de categorías: cortometrajes, documentales, videoclips, cobertura de eventos, proyectos universitarios/externos, festivales, colaboraciones, piezas para empresas e instituciones.

### 4.4 Málaga Cinéfila
Sección propia y muy destacada — el cineclub juvenil de MACAT. Usar la explicación real de la relación entre ambos proyectos (viene tal cual de la presentación oficial, es la mejor forma de explicarlo):

> Málaga Cinéfila es una asociación juvenil que actúa como comunidad joven y difusión en redes, agenda cultural de cineclubs, y punto de entrada a MACAT. No son proyectos enfrentados: se fortalecen mutuamente ("simbiosis").

Contenido real a incluir:
- **Qué harán:** crear su propio cineclub en la Facultad de Ciencias de la Comunicación, con **proyecciones semanales de largometrajes y cortometrajes**.
- **Cita de apertura** (usar tal cual, es una cita real elegida por el equipo, no inventar otra):
  > "Mi tío dice que vivimos el triple de tiempo desde que se inventó el cine, porque las películas nos dan el doble de lo que sacamos en la vida." — Edward Yang
- **Colaboraciones:** con otros proyectos universitarios afines, ejemplo real citado: **Polliwood (Valencia)**.
- **Ejemplo de evento/agenda real** (usar como ejemplo de "próxima proyección" tipo cartel, es contenido auténtico del cineclub, no placeholder):
  - Ciclo: *Historias de otro tiempo* — "Cinema Sideral"
  - 16:30 — *La sombra de nuestros antepasados olvidados*
  - 18:30 — *El estanque del demonio*
  - Lugar: Aula Magna, Facultad de Ciencias de la Comunicación
- Instagram del cineclub: **@malagacinefila**
- CTA grande: **"Entrar en Málaga Cinéfila"** (enlazará a futuro subdominio independiente — para la demo puede ser un enlace ancla o placeholder, o directamente enlazar al Instagram @malagacinefila).

### 4.5 Departamentos / Estructura organizativa
Grid organizado (no pesado) con icono + foto + descripción + coordinador + proyectos asociados por departamento. La presentación oficial divide la estructura en dos bloques claros — respétalos como agrupación visual (dos filas o dos categorías dentro del grid):

**Áreas organizativas / soporte:**
- Redes sociales y marketing
- Eventos y agenda cultural
- Diseño gráfico y comunicación
- Administración y RRHH

**Áreas de producción:**
- Guion, dirección y producción
- Animación, VFX y arte
- Fotografía, edición y sonido
- Podcast, música y actuación

Esta es la lista **real y oficial** de MACAT — sustituye por completo a cualquier lista genérica de departamentos de productora. Puedes ampliar cada bloque con icono + descripción breve, pero no añadas departamentos que no estén en esta lista sin marcarlo claramente como propuesta a futuro.

### 4.6 Equipo

**Equipo real actual (usar estos nombres y cargos tal cual, es el equipo fundador real de MACAT — sección titulada en la presentación oficial como "El equipo, por ahora", conservar ese matiz de "por ahora" porque transmite que el equipo está creciendo):**

*Profesorado mentor:*
- Rocío de la Maya — Profesora mentora
- Alejandro Alvarado — Profesor mentor
- Rafatal — Profesor mentor

*Estudiantes:*
- Noa Fito — Estudiante líder
- Fátima Arjona — Estudiante líder
- Alejandro Gil — Estudiante secretario

En la presentación original aparecen en un grid de fotos circulares sobre fondo oscuro casi negro, con el wordmark "MACAT" gigante en gris muy tenue de fondo (efecto marca de agua) — es un buen recurso visual a replicar para esta sección específica, dejando el resto de la web en tono claro.

Para la demo, usar fotos de stock como placeholder de estas personas reales (marcar internamente que son placeholders a sustituir por las fotos reales), pero los nombres y cargos deben ser los reales de arriba, no inventados.

Estructura ampliable pensando en el crecimiento del equipo:
- **Mentores** (protagonismo especial, ya con nombres reales arriba): foto, nombre, cargo en la UMA, descripción, botones "Perfil UMA" / "Contacto".
- **Junta directiva / estudiantes líderes** (ya con nombres reales arriba): foto, nombre, cargo, descripción breve, redes/contacto.
- **Coordinadores de departamento:** foto, departamento, presentación breve — de momento puede quedar como "próximamente" o con los mismos estudiantes líderes cubriendo varias áreas, ya que el equipo es aún reducido ("por ahora").
- **Colaboradores externos:** espacio para profesionales, empresas, antiguos estudiantes, especialistas invitados — sección preparada para el futuro, puede ir vacía o con placeholder claro de "próximamente".

### 4.7 Colaboradores y patrocinadores
Carrusel de logos, diseño limpio, dos bloques separados:
- Colaboradores (placeholder): Universidad de Málaga, Facultad de Ciencias de la Comunicación, Escuela de Ingenierías Industriales, Contenedor Cultural UMA, Cátedra IKEA, Sala de Cineastas, otros espacios culturales.
- Patrocinadores: sección preparada y fácilmente ampliable, aunque hoy esté vacía o con placeholders genéricos.

### 4.8 Actividad
Timeline visual: rodajes, reuniones, talleres, eventos, estrenos, making of, conferencias, visitas, festivales. Debe transmitir que el proyecto está vivo.

### 4.9 Noticias
Mini blog muy visual con fotografías (placeholder de 3-4 entradas de ejemplo).

### 4.10 Galería
No como álbum simple — sentir como "exposición audiovisual". Fotos, vídeos, making of, behind the scenes, rodajes, eventos.

### 4.11 Únete a MACAT
Página/sección con mucha ilusión. Mensaje clave: **no hace falta experiencia, solo ganas de aprender, crear y trabajar en equipo.** Mostrar: departamentos disponibles, proceso de incorporación, formulario (puede ser no funcional en la demo), FAQ.

### 4.12 Contacto
Simple: formulario, correo, Instagram, ubicación. Datos reales de contacto (usar tal cual, no inventar otros):
- Email: malagacineteam@gmail.com
- Instagram MACAT: @macat_uma
- Instagram Málaga Cinéfila: @malagacinefila
- Ubicación: Facultad de Ciencias de la Comunicación, Universidad de Málaga

### 4.13 Footer
Enlaces rápidos, redes sociales (@macat_uma, @malagacinefila), aviso legal, política de privacidad, contacto (malagacineteam@gmail.com), y mención final:
> Proyecto impulsado dentro de la convocatoria UMA Experience de la Universidad de Málaga. Con el apoyo de las personas mentoras y de las entidades colaboradoras.

---

## 5. Frases inspiradoras (para repartir por la web como elementos de impacto tipográfico)

- "las mejores historias todavía no se han rodado"
- "el talento crece cuando se comparte"
- "nadie hace cine solo"
- "aprender creando"
- "la universidad también puede hacer cine"

---

## 6. Prioridad para la demo de mañana

Dado el plazo (presentación mañana ante profesores), priorizar en este orden:
1. **Hero** + **¿Qué es MACAT?** — primera impresión, tiene que ser impecable.
2. **Proyectos destacados** + **Málaga Cinéfila** — el contenido más "wow".
3. **Departamentos** + **Equipo** (aunque sea con datos placeholder claramente marcados como ejemplo).
4. **Colaboradores/patrocinadores**, **Actividad**, **Únete**, **Contacto**, **Footer** — pueden ir más simples si falta tiempo, pero deben estar presentes para transmitir que el proyecto está completo.
5. Galería y Noticias son las que más se pueden simplificar o dejar como sección placeholder si el tiempo aprieta.

Usar contenido de ejemplo realista SOLO donde no haya dato real disponible (proyectos destacados, galería, noticias, actividad/timeline pueden llevar fotos de stock y descripciones inventadas coherentes). Pero equipo, estructura de departamentos, Málaga Cinéfila, colores de marca y datos de contacto **ya son reales** (sección 0bis y las secciones 4.4, 4.5, 4.6, 4.12) — no sustituir esos por placeholders inventados.
