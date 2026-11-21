// Analytics de comportamiento (Mixpanel). Complementa tracker.js, no lo
// reemplaza: tracker.js/go.html avisan la VISITA por mail (EmailJS); esto mide
// qué hace el visitante DESPUÉS (qué case abre, hasta dónde lee, si contacta).
//
// Reglas (ver docs/analytics.md):
// - Solo el ref OPACO viaja como propiedad, nunca el nombre de una empresa.
// - Mismas guardas que tracker.js: sin localhost, sin bots/headless, sin
//   visitas propias (?ref=me marca el navegador como propio, para siempre).
// - Nada se toca en el DOM ni en los handlers existentes: todo es delegación
//   de clicks + IntersectionObserver. Si Mixpanel está bloqueado (adblock), el
//   sitio funciona igual y los eventos se pierden en silencio.
// - Plan de eventos = la tabla EVENTS de abajo; agregar un evento = sumarlo ahí
//   y en docs/analytics.md.
(function () {
  var TOKEN = "4c60206c7e26a42f0b0a4312df7aca3b"; // público por diseño (va al navegador)
  var SELF_KEY = "portfolio_self";

  var EVENTS = {
    PAGE: "Page Viewed",           // page, slug
    CASE_CLICK: "Case Clicked",    // slug, source (grid | hero_proof | case_nav), position
    SECTION: "Section Reached",    // slug, section, section_label, section_index, section_count
    CASE_END: "Case Finished",     // slug (llegó al CTA del final)
    CONTACT: "Contact Clicked",    // channel (email | linkedin | resume), location
    READING_MODE: "Reading Mode Changed", // slug, mode
    LANG: "Language Changed"       // to
  };

  function getParam(name) {
    try { return new URLSearchParams(window.location.search).get(name) || ""; } catch (e) { return ""; }
  }
  function ssGet(k) { try { return sessionStorage.getItem(k) || ""; } catch (e) { return ""; } }
  function lsGet(k) { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } }

  // --- Guardas ---------------------------------------------------------------
  var urlRef = getParam("ref");
  if (urlRef === "me") { try { localStorage.setItem(SELF_KEY, "1"); } catch (e) {} }
  if (urlRef === "notme") { try { localStorage.removeItem(SELF_KEY); } catch (e) {} }

  var host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "") return;
  var BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse|prerender|bingpreview|facebookexternalhit/i;
  if (navigator.webdriver || BOT_UA.test(navigator.userAgent)) return;
  if (lsGet(SELF_KEY)) return;
  if (!TOKEN || TOKEN.indexOf("MIXPANEL") === 0) return;

  // --- Carga de Mixpanel (cola propia hasta que el script esté listo) --------
  var queue = [];
  var ready = false;
  function track(name, props) {
    if (ready) { try { window.mixpanel.track(name, props || {}); } catch (e) {} }
    else queue.push([name, props || {}]);
  }

  // Ref opaco: el de la URL (links orgánicos/estables) o el que dejó go.html.
  // Mismo parseo que tracker.js: "0628r4P" -> "0628r4" (el sufijo es el link).
  function baseRef(ref) {
    var m = /^(\d{4}[a-z][2-9])[PLG]$/.exec(ref);
    return m ? m[1] : ref;
  }
  var ref = urlRef && urlRef !== "notme" ? baseRef(urlRef) : ssGet("portfolio_ref");
  var focus = getParam("focus") || ssGet("portfolio_focus");

  // mixpanel.min.js es el build liviano (~77 KB, grabador aparte, ver abajo) que
  // espera el stub del snippet oficial: un array con __SV y la init en _i.
  // Al cargar reemplaza window.mixpanel por la instancia real y llama loaded().
  window.mixpanel = [];
  window.mixpanel.__SV = 1.2;
  window.mixpanel._i = [[TOKEN, {
    track_pageview: false,
    persistence: "localStorage",
    autocapture: false,
    // Session replay: el build liviano baja el grabador aparte (lazy) solo si
    // record_sessions_percent > 0. Misma versión y CDN que la librería.
    // Por defecto Mixpanel enmascara TODO el texto ("*"); el portfolio es
    // público, así que solo se enmascara lo marcado con data-mp-mask (los
    // inputs se enmascaran siempre igual).
    record_sessions_percent: 100,
    record_mask_text_selector: "[data-mp-mask]",
    recorder_src: "https://cdn.jsdelivr.net/npm/mixpanel-browser@2.65.0/dist/mixpanel-recorder.min.js",
    loaded: function (mp) {
      var supers = { lang: lsGet("portfolio-lang") || "en" };
      if (ref) supers.ref = ref;
      if (focus) supers.focus = focus;
      mp.register(supers);
      if (ref) mp.register_once({ first_ref: ref });
      ready = true;
      queue.forEach(function (q) { mp.track(q[0], q[1]); });
      queue = [];
    }
  }, "mixpanel"]];

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://cdn.jsdelivr.net/npm/mixpanel-browser@2.65.0/dist/mixpanel.min.js";
  document.head.appendChild(s);

  // --- Página ------------------------------------------------------------------
  var path = window.location.pathname;
  var slug = getParam("slug");
  var page = /case-v3\.html$/.test(path) ? "case" : /404/.test(path) ? "404" : "index";
  track(EVENTS.PAGE, page === "case" ? { page: page, slug: slug } : { page: page });

  // --- Clicks (delegados, en captura para no depender de los handlers) -------
  function slugFromHref(href) {
    var m = /[?&]slug=([^&#]+)/.exec(href || "");
    return m ? decodeURIComponent(m[1]) : "";
  }
  function where(el) {
    if (el.closest("#cta")) return "case_cta";
    if (el.closest("footer, .site-footer")) return "footer";
    if (el.closest("header, .site-header, nav")) return "header";
    if (el.closest("#contact")) return "contact";
    if (el.closest(".hero, #hero")) return "hero";
    return page;
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("a, button");
    if (!el) return;
    var href = el.getAttribute("href") || "";
    var id = el.id || "";

    // Contacto
    if (/email/i.test(id) || /^mailto:/.test(href)) {
      return track(EVENTS.CONTACT, { channel: "email", location: where(el) });
    }
    if (/linkedin\.com/.test(href) || el.getAttribute("data-link") === "linkedin") {
      return track(EVENTS.CONTACT, { channel: "linkedin", location: where(el) });
    }
    if (el.getAttribute("data-link") === "resume" || id === "cta-resume" || /\.pdf$/i.test(href)) {
      return track(EVENTS.CONTACT, { channel: "resume", location: where(el) });
    }

    // Case abierto desde el index (grilla o prueba del hero) o desde prev/next
    var target = slugFromHref(href);
    if (target && target !== slug) {
      var source = el.classList.contains("hero__proof-link") ? "hero_proof" : page === "case" ? "case_nav" : "grid";
      var props = { slug: target, source: source };
      if (source === "grid") {
        var links = Array.prototype.filter.call(
          document.querySelectorAll('a[href*="slug="]'),
          function (a) { return !a.classList.contains("hero__proof-link"); }
        );
        var seen = [];
        links.forEach(function (a) { var sl = slugFromHref(a.getAttribute("href")); if (seen.indexOf(sl) < 0) seen.push(sl); });
        var pos = seen.indexOf(target);
        if (pos >= 0) props.position = pos + 1;
      }
      return track(EVENTS.CASE_CLICK, props);
    }

    // Modo de lectura (case-v3)
    if (el.classList.contains("reading-mode__opt") && el.dataset.mode) {
      return track(EVENTS.READING_MODE, { slug: slug, mode: el.dataset.mode });
    }

    // Idioma
    if (el.classList.contains("lang-switch__btn") && el.dataset.lang && el.dataset.lang !== lsGet("portfolio-lang")) {
      if (ready) window.mixpanel.register({ lang: el.dataset.lang });
      return track(EVENTS.LANG, { to: el.dataset.lang });
    }
  }, true);

  // --- Lectura del case: secciones alcanzadas ---------------------------------
  // El renderer pinta las secciones async; se observan cuando aparecen.
  if (page !== "case" || !("IntersectionObserver" in window)) return;
  var reached = {};
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var sec = en.target;
      if (reached[sec.id]) return;
      reached[sec.id] = true;
      io.unobserve(sec);
      if (sec.id === "cta") return track(EVENTS.CASE_END, { slug: slug });
      var all = document.querySelectorAll("#case-v3-content section[id]:not(#cta)");
      track(EVENTS.SECTION, {
        slug: slug,
        section: sec.id,
        section_label: sec.getAttribute("data-toc-label-en") || "",
        section_index: Array.prototype.indexOf.call(all, sec) + 1,
        section_count: all.length
      });
    });
  }, { rootMargin: "0px 0px -60% 0px" });

  function observeSections() {
    document.querySelectorAll("#case-v3-content section[id]").forEach(function (sec) {
      if (!sec.dataset.mpObserved) { sec.dataset.mpObserved = "1"; io.observe(sec); }
    });
  }
  function start() {
    var root = document.getElementById("case-v3-content");
    if (!root) return;
    observeSections();
    new MutationObserver(observeSections).observe(root, { childList: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
