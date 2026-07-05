// =============================================================================
// PORTFOLIO PROFILES — personalización de la primera pantalla por link
//
// Un "perfil" adapta el index a quién mira, SIN ocultar nada (regla: ordenar,
// no ocultar; sin filtros manuales — la decisión está en TODO.md):
//   - featured: qué case ocupa el slot Featured Work (override del flag
//     featured:true de content.js)
//   - order:    orden de la grilla Selected Work (slugs; los que falten van
//     después, en su orden default)
//   - proofs:   qué pruebas del hero preferir (ids de cases.json, en orden;
//     hero.js completa con su random ponderado si falta alguna)
//   - label:    sufijo bilingüe del label "Featured Work · <label>" — hace
//     visible la personalización (efecto "armó una página para nosotros")
//
// CÓMO SE ACTIVA (precedencia, resuelta por resolveActiveProfile()):
//   1. ?focus=<id> en la URL del index (para links directos en outreach)
//   2. ?ref=<empresa> en la URL, mapeado por refToProfile
//   3. sessionStorage 'portfolio_ref' (lo guarda go.html al redirigir), mapeado
//   Sin match → null → el index se comporta exactamente como siempre.
//
// VALIDACIÓN: scripts/case-check.js valida slugs/ids/labels de este archivo.
// Al agregar un perfil o mapear una empresa nueva: editar acá y correr
// node scripts/case-check.js.
// =============================================================================

const PORTFOLIO_PROFILES = {
  profiles: {
    payments: {
      label: { en: "For payment platforms", es: "Para plataformas de pagos" },
      featured: "fintech-ecosystem",
      order: ["no-handoff", "ecommerce-conversion", "telecom-legacy-refactor", "figma-webp-export", "khatu"],
      proofs: ["fintech-ecosystem", "ecommerce-conversion"]
    },
    ai: {
      label: { en: "For AI-forward teams", es: "Para equipos que adoptan IA" },
      featured: "no-handoff",
      order: ["figma-webp-export", "ecommerce-conversion", "fintech-ecosystem", "telecom-legacy-refactor", "khatu"],
      proofs: ["no-handoff", "figma-webp-export"]
    },
    conversion: {
      label: { en: "For growth & e-commerce teams", es: "Para equipos de growth y e-commerce" },
      featured: "ecommerce-conversion",
      order: ["no-handoff", "fintech-ecosystem", "telecom-legacy-refactor", "figma-webp-export", "khatu"],
      proofs: ["ecommerce-conversion", "fintech-ecosystem"]
    }
  },

  // ref (de go.html?ref=<empresa> o index.html?ref=...) → perfil. Minúsculas.
  refToProfile: {
    meli: "payments",
    mercadolibre: "payments",
    mercadopago: "payments",
    uala: "payments",
    pomelo: "payments",
    lemon: "payments",
    brubank: "payments",
    belo: "payments"
  }
};

// Resolver compartido (app.js y hero.js): perfil activo o null.
function resolveActiveProfile() {
  try {
    const P = PORTFOLIO_PROFILES;
    const params = new URLSearchParams(window.location.search);
    let id = params.get('focus');
    if (!id) {
      let ref = params.get('ref');
      if (!ref) { try { ref = sessionStorage.getItem('portfolio_ref'); } catch (e) {} }
      if (ref) id = P.refToProfile[String(ref).toLowerCase()];
    }
    if (id && P.profiles[id]) return Object.assign({ id: id }, P.profiles[id]);
  } catch (e) {}
  return null;
}
