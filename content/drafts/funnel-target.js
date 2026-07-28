// Draft: funnel-target
// Preview (localhost): cases/case-v3.html?slug=funnel-target
// Publicar: node scripts/case-publish.js funnel-target
//
// ASSETS — estado por sección (actualizar cuando se prepare cada uno)
// cover        assets/images/funnel-target/cover.webp              [PENDIENTE: capturar diana pintada en la app — no usar el poster del video]
// s-insight    assets/images/funnel-target/funnel-legend.webp       [PENDIENTE: renombrar + convertir 08-...-playground.png]
// s-color      assets/images/funnel-target/color-rings.webp         [PENDIENTE: renombrar + convertir 11-...-app.png]
// s-result     assets/images/funnel-target/reveal.{webm,mp4}        [PENDIENTE: mover desde animation-process/]
// s-scale      —                                                     [no necesita imagen]
//
// TODO antes de publicar:
//   - Completar los assets de arriba y actualizar las rutas del draft.
//   - Confirmar slug final (propuesto: funnel-target).
//   - Decidir si va a cases.json y con qué proof text.

PORTFOLIO_DATA.en.cases.push({
  "slug": "funnel-target",
  "template": "v3",
  "featured": false,
  "images": {
    "cover": "assets/images/animation-process/funnel-reveal-poster.png"
  },
  "card": {
    "tags": ["Data Visualization", "Motion Design", "AI Tooling"],
    "title": "A loading animation that became a funnel",
    "excerpt": "Started as a visual experiment for a job tracker. Ended up as an interactive data viz: each CV is an arrow, each ring is a stage, one glance reads the distribution of your search."
  },
  "meta": {
    "title": "Funnel Target — From animation experiment to interactive data viz · Lenin Cuadra",
    "description": "A loading animation for a personal job tracker that became a data visualization: arrows map applications to funnel stages, color communicates the outcome at a glance."
  },
  "hero": {
    "title": "A loading animation that became a funnel.",
    "subtitle": "Motion · Data Visualization · cv-builder"
  },
  "quickScan": {
    "role": "Product Designer",
    "team": "Solo",
    "timeline": "1 week",
    "tools": "React · Web Animations API · Quiver AI"
  },
  "sections": [
    {
      "id": "section-overview",
      "label": "Overview",
      "h3": "The diana started as a loading animation. Halfway through, it became a funnel.",
      "content": [
        {
          "type": "body",
          "text": "cv-builder is a personal job application tracker. When data loads, there's a brief moment before the table appears with nothing to show yet. I built a diana animation to fill that gap: arrows flying in, one per CV sent."
        },
        {
          "type": "body",
          "text": "Assets generated with Quiver AI, movement with browser-native APIs, zero new dependencies. What I didn't plan was what the diana would communicate once the real data arrived."
        }
      ]
    },
    {
      "id": "section-insight",
      "label": "The insight",
      "h3": "Five rings, five stages: the diana already had the visual channel I needed.",
      "content": [
        {
          "type": "body",
          "text": "A job search has five stages: sent, responded, interview, offer, referral. A diana has five concentric rings. Closer to center means further in the process. I mapped them directly: no new visual element needed, the structure was already there."
        },
        {
          "type": "image",
          "src": "assets/images/animation-process/08-funnel-legend-real-app-use-01a29b9-playground.png",
          "ratio": "wide",
          "alt": "Diana animation showing the funnel legend: five rings mapped to five stages, from sent (outer white ring) to referral (inner gold ring)"
        }
      ]
    },
    {
      "id": "section-color",
      "label": "Color",
      "h3": "In flight every arrow is gray; on landing, each one takes the color of the ring it hit.",
      "content": [
        {
          "type": "body",
          "text": "Position alone mapped the funnel. But with many arrows, the pattern wasn't immediately readable. You still had to count rings. Color sealed it."
        },
        {
          "type": "body",
          "text": "Every arrow flies gray, lands, pauses. Then all paint at once. That pause is the moment of reading: the color pattern is visible before a single row of data appears."
        },
        {
          "type": "image",
          "src": "assets/images/animation-process/11-color-by-ring-73456a9-app.png",
          "ratio": "wide",
          "alt": "Diana in the real app after all arrows have painted: outer ring white, moving inward through dark gray, blue, red, gold"
        }
      ]
    },
    {
      "id": "section-result",
      "label": "Result",
      "h3": "One glance at the diana reads the shape of your search, with real data.",
      "content": [
        {
          "type": "body",
          "text": "The reveal runs once per session when the table loads. What you see isn't a demo: it's your actual funnel, every application mapped to the stage it reached. After the animation, the table takes over."
        },
        {
          "type": "video",
          "src": "assets/images/animation-process/funnel-reveal.webm",
          "poster": "assets/images/animation-process/funnel-reveal-poster.png",
          "ratio": "wide",
          "controls": false,
          "alt": "The full reveal: diana loads, arrows fly in gray, land on their rings, pause, all paint at once by stage color, then the real data table appears"
        }
      ]
    },
    {
      "id": "section-scale",
      "label": "Scalability",
      "h3": "The visual can be replaced. The logic survives.",
      "content": [
        {
          "type": "body",
          "text": "The aesthetic isn't final. The current assets are functional but have room to grow, and I'm not fully satisfied with how it looks."
        },
        {
          "type": "body",
          "text": "The component is built for that: data logic and visual layer are decoupled. Replace the diana with a different design, keep the ring structure, and the mapping holds. The system is ready for a better version of itself."
        }
      ]
    }
  ]
});

PORTFOLIO_DATA.es.cases.push({
  "slug": "funnel-target",
  "template": "v3",
  "featured": false,
  "images": {
    "cover": "assets/images/animation-process/funnel-reveal-poster.png"
  },
  "card": {
    "tags": ["Data Visualization", "Motion Design", "AI Tooling"],
    "title": "Una animación de loading que se convirtió en un embudo",
    "excerpt": "Empezó como un experimento visual para un tracker de trabajo. Terminó como una data viz interactiva: cada CV es una flecha, cada anillo es una etapa, un vistazo lee la distribución de tu búsqueda."
  },
  "meta": {
    "title": "Funnel Target — De experimento de animación a data viz interactiva · Lenin Cuadra",
    "description": "Una animación de loading para un tracker personal de trabajo que se convirtió en una visualización de datos: flechas mapean postulaciones a etapas del embudo, el color comunica el resultado de un vistazo."
  },
  "hero": {
    "title": "Una animación de loading que se convirtió en un embudo.",
    "subtitle": "Motion · Data Visualization · cv-builder"
  },
  "quickScan": {
    "role": "Product Designer",
    "team": "Solo",
    "timeline": "1 semana",
    "tools": "React · Web Animations API · Quiver AI"
  },
  "sections": [
    {
      "id": "section-overview",
      "label": "Overview",
      "h3": "La diana empezó como una animación de loading. A mitad del camino, se convirtió en un embudo.",
      "content": [
        {
          "type": "body",
          "text": "cv-builder es un tracker personal de búsqueda de trabajo. Cuando los datos cargan, hay un momento breve antes de que aparezca la tabla en el que no hay nada que mostrar. Construí una animación de diana para llenar ese hueco: flechas entrando en vuelo, una por cada CV enviado."
        },
        {
          "type": "body",
          "text": "Assets generados con Quiver AI, movimiento con APIs nativas del browser, cero dependencias nuevas. Lo que no planeé fue lo que la diana terminaría comunicando cuando llegaran los datos reales."
        }
      ]
    },
    {
      "id": "section-insight",
      "label": "El insight",
      "h3": "Cinco anillos, cinco etapas: la diana ya tenía el canal visual que necesitaba.",
      "content": [
        {
          "type": "body",
          "text": "Una búsqueda de trabajo tiene cinco etapas: enviado, respondido, entrevista, oferta, referido. Una diana tiene cinco anillos concéntricos. Más cerca del centro significa más lejos en el proceso. Los mapeé directamente: sin necesidad de inventar un canal visual nuevo, la estructura ya estaba ahí."
        },
        {
          "type": "image",
          "src": "assets/images/animation-process/08-funnel-legend-real-app-use-01a29b9-playground.png",
          "ratio": "wide",
          "alt": "Animación de la diana mostrando la leyenda del funnel: cinco anillos mapeados a cinco etapas, de enviado (anillo exterior blanco) a referido (anillo interior dorado)"
        }
      ]
    },
    {
      "id": "section-color",
      "label": "Color",
      "h3": "En vuelo todas las flechas son grises; al aterrizar, cada una toma el color del anillo que tocó.",
      "content": [
        {
          "type": "body",
          "text": "La posición sola mapeó el embudo. Pero con muchas flechas, el patrón no era inmediatamente legible. Había que contar anillos. El color lo selló."
        },
        {
          "type": "body",
          "text": "Todas las flechas vuelan en gris, aterrizan, pausa. Y todas se pintan a la vez. Esa pausa es el momento de leer: el patrón de colores es visible antes de que aparezca una sola fila de datos."
        },
        {
          "type": "image",
          "src": "assets/images/animation-process/11-color-by-ring-73456a9-app.png",
          "ratio": "wide",
          "alt": "Diana en la app real después de que todas las flechas se pintaron: anillo exterior blanco, hacia adentro gris oscuro, azul, rojo, dorado"
        }
      ]
    },
    {
      "id": "section-result",
      "label": "Resultado",
      "h3": "De un vistazo a la diana se lee la distribución de tu búsqueda, con datos reales.",
      "content": [
        {
          "type": "body",
          "text": "El reveal corre una vez por sesión cuando carga la tabla. Lo que ves no es un demo: es tu embudo real, cada postulación mapeada a la etapa que alcanzó. Después de la animación, la tabla toma la posta."
        },
        {
          "type": "video",
          "src": "assets/images/animation-process/funnel-reveal.webm",
          "poster": "assets/images/animation-process/funnel-reveal-poster.png",
          "ratio": "wide",
          "controls": false,
          "alt": "El reveal completo: la diana carga, las flechas vuelan en gris, aterrizan en sus anillos, pausa, todas se pintan a la vez por color de etapa, y luego aparece la tabla real de datos"
        }
      ]
    },
    {
      "id": "section-scale",
      "label": "Escalabilidad",
      "h3": "El visual se puede reemplazar. La lógica sobrevive.",
      "content": [
        {
          "type": "body",
          "text": "La estética no es definitiva. Los assets actuales son funcionales pero tienen margen para mejorar, y no estoy completamente satisfecho con cómo luce."
        },
        {
          "type": "body",
          "text": "El componente está construido para eso: la lógica de datos y la capa visual están desacopladas. Reemplazá la diana con otro diseño, mantenés la estructura de anillos, y el mapeo sigue funcionando. El sistema está listo para una versión mejor de sí mismo."
        }
      ]
    }
  ]
});
