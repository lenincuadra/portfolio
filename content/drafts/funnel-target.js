// Draft: funnel-target
// Preview (localhost): cases/case-v3.html?slug=funnel-target
// Publicar: node scripts/case-publish.js funnel-target
//
// TODO antes de publicar:
//   - Reemplazar cover: se necesita una imagen de portada (sugerencia: exportar
//     la diana pintada como webp, o capturar un frame del video).
//   - Mover assets a assets/images/funnel-target/ y actualizar rutas.
//   - Confirmar slug final (propuesto: funnel-target).
//   - Decidir si va a cases.json (featured en el hero) y con qué proof.

PORTFOLIO_DATA.en.cases.push({
  "slug": "funnel-target",
  "template": "v3",
  "featured": false,
  "images": {
    "cover": "assets/images/animation-process/funnel-reveal-poster.png"
  },
  "card": {
    "tags": ["Data Visualization", "Motion Design", "Product Design"],
    "title": "A target that reads your job search",
    "excerpt": "Each CV sent is an arrow. Each ring is a stage of the funnel. Built a data-driven animation that makes the shape of a job search readable at a glance."
  },
  "meta": {
    "title": "Funnel Target — A data-driven animation for a job application tracker · Lenin Cuadra",
    "description": "Designed an animation that maps job applications to rings and colors on a target, making the job search funnel readable at a glance before the data table loads."
  },
  "hero": {
    "title": "A target that reads your job search at a glance.",
    "subtitle": "Motion · Data Visualization · cv-builder"
  },
  "quickScan": {
    "role": "Product Designer",
    "team": "Solo",
    "timeline": "1 week",
    "tools": "React · Web Animations API"
  },
  "sections": [
    {
      "id": "section-overview",
      "label": "Overview",
      "h3": "Each CV sent is an arrow; each ring in the target is a stage of the funnel.",
      "content": [
        {
          "type": "body",
          "text": "cv-builder is a personal job application tracker. The table shows every application: company, role, outcome. But reading the shape of a search means scanning rows, one by one."
        },
        {
          "type": "body",
          "text": "I wanted a moment before the table appeared that made the funnel readable at once. The target became that moment."
        }
      ]
    },
    {
      "id": "section-position",
      "label": "The channel",
      "h3": "I chose position before color: the target already had the visual channel I needed.",
      "content": [
        {
          "type": "body",
          "text": "A job search has five stages: sent, responded, interview, offer, referral. A diana has five concentric rings. I mapped them directly: outer to inner, closer to center means further in the process."
        },
        {
          "type": "body",
          "text": "No new visual element needed. The structure was already there."
        },
        {
          "type": "image",
          "src": "assets/images/animation-process/08-funnel-legend-real-app-use-01a29b9-playground.png",
          "ratio": "wide",
          "alt": "Target animation in the playground showing the funnel legend: five rings mapped to five stages, from sent (outer white ring) to referral (inner gold ring)"
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
          "text": "Position mapped the funnel. But with many arrows, the aggregate pattern wasn't immediately readable. You still had to count rings. Color fixed that."
        },
        {
          "type": "body",
          "text": "Every arrow flies in gray, lands, and after a shared pause all arrows paint together, each one taking the color of its ring. That pause is the moment of reading: the pattern is visible before a single row of data appears."
        },
        {
          "type": "image",
          "src": "assets/images/animation-process/11-color-by-ring-73456a9-app.png",
          "ratio": "wide",
          "alt": "Target in the real app after all arrows have painted: outer ring white, moving inward through dark gray, blue, red, gold"
        }
      ]
    },
    {
      "id": "section-feel",
      "label": "Getting it right",
      "h3": "The arrows looked wrong until I looked at a photo of a real target.",
      "content": [
        {
          "type": "body",
          "text": "The first version had the right positions but the angles were off. Each arrow was oriented tangent to its ring, so arrows at the top and bottom of the diana were nearly vertical while side arrows were horizontal. They looked like they came from different directions."
        },
        {
          "type": "body",
          "text": "I looked at a photo of real arrows stuck in a diana. They're almost all horizontal, almost parallel. Not because of physics, but because you shoot from one side. I measured the angles from the photo and used them directly. The arrows went from looking scattered to looking like they all came from the same place."
        },
        {
          "type": "slider",
          "before": {
            "src": "assets/images/animation-process/02-despiral-random-seed-df70dad-playground.png",
            "label": "Before: tangent to the ring",
            "alt": "Arrows at tangent angles — each lands at a different orientation depending on where it hit the circle"
          },
          "after": {
            "src": "assets/images/animation-process/03-rest-angle-horizontal-c81efeb-playground.png",
            "label": "After: angle from the photo",
            "alt": "Arrows nearly horizontal after the fix — all landing at similar angles, like real arrows stuck in a target"
          }
        }
      ]
    },
    {
      "id": "section-result",
      "label": "Result",
      "h3": "One glance at the target reads the shape of your search, with real data.",
      "content": [
        {
          "type": "body",
          "text": "The reveal runs once per session when the table loads. Target appears, arrows fly in gray, land, pause. Then all paint. What you see is your actual funnel: every application you've tracked, mapped to the stage it reached."
        },
        {
          "type": "video",
          "src": "assets/images/animation-process/funnel-reveal.webm",
          "poster": "assets/images/animation-process/funnel-reveal-poster.png",
          "ratio": "wide",
          "controls": false,
          "alt": "The full reveal: target loads, arrows fly in gray, land on their rings, pause, then all paint at once by stage color, followed by the real data table"
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
    "tags": ["Data Visualization", "Motion Design", "Product Design"],
    "title": "Una diana que lee tu búsqueda",
    "excerpt": "Cada CV enviado es una flecha. Cada anillo es una etapa del embudo. Una animación data-driven que hace legible la distribución de tu proceso de un vistazo."
  },
  "meta": {
    "title": "Funnel Target — Animación data-driven para un tracker de búsqueda de trabajo · Lenin Cuadra",
    "description": "Diseñé una animación que mapea postulaciones a anillos y colores en una diana, haciendo legible el embudo de búsqueda de un vistazo antes de que cargue la tabla de datos."
  },
  "hero": {
    "title": "Una diana que lee tu búsqueda de trabajo de un vistazo.",
    "subtitle": "Motion · Data Visualization · cv-builder"
  },
  "quickScan": {
    "role": "Product Designer",
    "team": "Solo",
    "timeline": "1 semana",
    "tools": "React · Web Animations API"
  },
  "sections": [
    {
      "id": "section-overview",
      "label": "Overview",
      "h3": "Cada CV enviado es una flecha; cada anillo de la diana, una etapa del embudo.",
      "content": [
        {
          "type": "body",
          "text": "cv-builder es un tracker personal de búsqueda de trabajo. La tabla muestra cada postulación: empresa, rol, resultado. Pero leer la distribución del proceso implica recorrer filas, una por una."
        },
        {
          "type": "body",
          "text": "Quería un momento antes de que apareciera la tabla que hiciera el embudo legible de golpe. La diana se convirtió en ese momento."
        }
      ]
    },
    {
      "id": "section-position",
      "label": "El canal",
      "h3": "Elegí posición antes que color: la diana ya tenía el canal visual que necesitaba.",
      "content": [
        {
          "type": "body",
          "text": "Una búsqueda de trabajo tiene cinco etapas: enviado, respondido, entrevista, oferta, referido. Una diana tiene cinco anillos concéntricos. Los mapeé directamente: de afuera hacia adentro, más cerca del centro significa más lejos en el proceso."
        },
        {
          "type": "body",
          "text": "Sin necesidad de inventar un canal visual nuevo. La estructura ya estaba ahí."
        },
        {
          "type": "image",
          "src": "assets/images/animation-process/08-funnel-legend-real-app-use-01a29b9-playground.png",
          "ratio": "wide",
          "alt": "Animación de la diana en el playground con la leyenda del funnel: cinco anillos mapeados a cinco etapas, de enviado (anillo exterior blanco) a referido (anillo interior dorado)"
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
          "text": "La posición mapeó el embudo. Pero con muchas flechas, el patrón agregado no era inmediatamente legible. Había que contar anillos. El color lo resolvió."
        },
        {
          "type": "body",
          "text": "Todas las flechas vuelan en gris, aterrizan, y después de una pausa compartida se pintan juntas, cada una tomando el color de su anillo. Esa pausa es el momento de leer: el patrón se ve antes de que aparezca una sola fila de datos."
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
      "id": "section-feel",
      "label": "Ajuste de craft",
      "h3": "Las flechas se veían raras hasta que miré una foto de una diana real.",
      "content": [
        {
          "type": "body",
          "text": "La primera versión tenía las posiciones correctas pero los ángulos estaban mal. Cada flecha se orientaba tangente al anillo donde aterrizaba, así que las del tope y el fondo quedaban casi verticales y las de los costados casi horizontales. Se veía como si vinieran de lugares distintos."
        },
        {
          "type": "body",
          "text": "Busqué una foto de flechas reales clavadas en una diana. Están casi todas horizontales, casi paralelas. No por física, sino porque disparás desde un lado. Medí los ángulos de la foto y los usé directamente. Las flechas pasaron de verse dispersas a verse como si todas vinieran del mismo lugar."
        },
        {
          "type": "slider",
          "before": {
            "src": "assets/images/animation-process/02-despiral-random-seed-df70dad-playground.png",
            "label": "Antes: ángulo tangente al anillo",
            "alt": "Flechas en ángulos tangentes al anillo — cada una aterriza con una orientación distinta según dónde tocó el círculo"
          },
          "after": {
            "src": "assets/images/animation-process/03-rest-angle-horizontal-c81efeb-playground.png",
            "label": "Después: ángulo de la foto",
            "alt": "Flechas casi horizontales después del fix — todas en ángulos similares, como flechas reales clavadas en una diana"
          }
        }
      ]
    },
    {
      "id": "section-result",
      "label": "Resultado",
      "h3": "De un vistazo a la diana se lee la distribución de tu proceso, con datos reales.",
      "content": [
        {
          "type": "body",
          "text": "El reveal corre una vez por sesión cuando carga la tabla. Aparece la diana, las flechas vuelan en gris, aterrizan, pausa. Y todas se pintan. Lo que ves es tu embudo real: cada postulación que enviaste, mapeada a la etapa que alcanzó."
        },
        {
          "type": "video",
          "src": "assets/images/animation-process/funnel-reveal.webm",
          "poster": "assets/images/animation-process/funnel-reveal-poster.png",
          "ratio": "wide",
          "controls": false,
          "alt": "El reveal completo: la diana carga, las flechas vuelan en gris, aterrizan en sus anillos, pausa, y todas se pintan a la vez por color de etapa, seguido de la tabla real de datos"
        }
      ]
    }
  ]
});
