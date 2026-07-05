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
//   1. ?focus=<id> en la URL del index (links directos en outreach)
//   2. sessionStorage 'portfolio_focus' (lo guarda go.html si el link trackeado
//      traía &focus= — es LA vía para links con código opaco; los genera
//      scripts/new-link.js)
//   3. ?ref=<...> en la URL o sessionStorage 'portfolio_ref', mapeado por
//      refToProfile (solo para refs que se quieran mapear acá)
//   Sin match → null → el index se comporta exactamente como siempre.
//
// PRIVACIDAD: este archivo es PÚBLICO (GitHub Pages). NO mapear nombres de
// empresas target en refToProfile: delata a quién se está aplicando (la misma
// razón por la que los refs de tracking son códigos opacos y el registro está
// gitignoreado). La personalización de links trackeados viaja como &focus=
// en el link de go.html, que solo revela la industria del perfil.
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

  // ref → perfil, en minúsculas. VACÍO a propósito: mapear una empresa acá la
  // publica (ver PRIVACIDAD en el header). Para links trackeados usar &focus=
  // en la URL de go.html (scripts/new-link.js los arma).
  refToProfile: {}
};

// Resolver compartido (app.js y hero.js): perfil activo o null.
function resolveActiveProfile() {
  try {
    const P = PORTFOLIO_PROFILES;
    const params = new URLSearchParams(window.location.search);
    let id = params.get('focus');
    if (!id) { try { id = sessionStorage.getItem('portfolio_focus'); } catch (e) {} }
    if (!id) {
      let ref = params.get('ref');
      if (!ref) { try { ref = sessionStorage.getItem('portfolio_ref'); } catch (e) {} }
      if (ref) id = P.refToProfile[String(ref).toLowerCase()];
    }
    if (id && P.profiles[id]) return Object.assign({ id: id }, P.profiles[id]);
  } catch (e) {}
  return null;
}
