// =============================================================================
// HERO — dynamic "Highlights:" proof line
// Vanilla JS, no dependencies (same style as tracker.js).
//
// SYSTEM RULES (do not break):
//   1. Maximum 2 proofs visible at once.
//   2. Every proof must contain a number or a time delta (enforced in cases.json,
//      not by this script). Curate cases.json accordingly.
//   3. The positioning sentence (.hero__summary-lead — "I design products that
//      move business metrics...") is hardcoded in index.html. THIS SCRIPT NEVER
//      TOUCHES IT. It only rewrites the .hero__summary-recent line.
//   4. Metric tokens inside each proof ("+221%", "2 days", "77 minutos") are
//      auto-wrapped in <strong> (see emphasize()). The emphasis is PERSISTENT:
//      weight + ink only — no marker color, no dissolve animation (emphasis is
//      information, not an event; reduced-motion users only ever see the end
//      state). The static fallback in index.html carries the same <strong>
//      markup by hand, split into leaf spans so the i18n loop can't flatten it.
//
// BEHAVIOR:
//   - On page load: fetch cases.json, keep entries with featured === true.
//   - Pick 2 proofs PER PAGE LOAD via weighted random (weight = metric_value).
//     No timer, no rotation while the page is open — selection is fixed per load.
//   - The pair is constrained to fit 2 lines on desktop: the two longest proofs
//     are never shown together (see CHAR_BUDGET / avoidOverflow). Weighting still
//     drives which proofs surface; only that one overflowing combo is rejected.
//   - Inject into .hero__summary-recent using the active EN/ES language, and
//     keep responding to the EN/ES toggle without a reload (each proof is an <a>
//     carrying its own data-en/data-es, swapped on language change).
//   - Each proof deep-links to its case study (cases/case-v3.html?slug=<id>).
//
// FALLBACK:
//   - If cases.json fails to load, is empty, or yields fewer than 2 usable
//     proofs, the static placeholder already in index.html stays untouched.
//     We never clear the existing content before a valid replacement is ready.
// =============================================================================

(function () {
  'use strict';

  var LANG_KEY = 'portfolio-lang';          // same key app.js uses
  var CASE_TEMPLATE = 'cases/case-v3.html'; // all featured cases use the v3 template
  var MAX_PROOFS = 2;

  function getLang() {
    try {
      return localStorage.getItem(LANG_KEY) || 'en';
    } catch (e) {
      return 'en';
    }
  }

  // Deterministic-per-load weighted sampling WITHOUT replacement.
  // Weight = metric_value (defaults to 1 if missing/invalid).
  function pickWeighted(pool, count) {
    var items = pool.slice();
    var chosen = [];
    while (chosen.length < count && items.length) {
      var total = 0;
      var i;
      for (i = 0; i < items.length; i++) {
        var w = Number(items[i].metric_value);
        total += (isFinite(w) && w > 0) ? w : 1;
      }
      var r = Math.random() * total;
      var acc = 0;
      var idx = items.length - 1;
      for (i = 0; i < items.length; i++) {
        var wi = Number(items[i].metric_value);
        acc += (isFinite(wi) && wi > 0) ? wi : 1;
        if (r <= acc) { idx = i; break; }
      }
      chosen.push(items[idx]);
      items.splice(idx, 1);
    }
    return chosen;
  }

  // Worst-case visible length of a proof = the longer of its EN/ES strings
  // (ES runs longer, so it governs whether the line wraps to a 3rd row).
  function proofLen(p) {
    var en = (p.proof || '').length;
    var es = (p.proof_es || p.proof || '').length;
    return en > es ? en : es;
  }

  // CHAR_BUDGET caps "Highlights: {proof_1} · {proof_2}" at 2 lines on desktop
  // (verified empirically @1440px). Two long proofs together (e.g. no-handoff +
  // figma-webp-export) exceed it and wrap to a 3rd line — this guard prevents
  // that pairing without touching copy or font-size.
  var CHAR_BUDGET = 150;

  function fitsTwoLines(a, b) {
    return proofLen(a) + proofLen(b) <= CHAR_BUDGET;
  }

  // Post-process the weighted pick so the two selected proofs never overflow to
  // a 3rd line. If they would, swap the second for the longest OTHER proof that
  // still fits beside the first (keeps the line as full as possible). If nothing
  // fits, fall back to the shortest available. Weighting still drives which
  // proofs surface; this only rejects the single bad combination.
  function avoidOverflow(chosen, pool) {
    if (chosen.length < 2 || fitsTwoLines(chosen[0], chosen[1])) return chosen;
    var keep = chosen[0];
    var candidates = pool.filter(function (p) {
      return p.id !== keep.id && fitsTwoLines(keep, p);
    });
    if (candidates.length) {
      // Longest fitting candidate → most informative line that still fits.
      candidates.sort(function (x, y) { return proofLen(y) - proofLen(x); });
      chosen[1] = candidates[0];
    }
    return chosen;
  }

  function caseHref(id) {
    return CASE_TEMPLATE + '?slug=' + encodeURIComponent(id);
  }

  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Matches the metric token every proof is curated to contain (rule 2):
  // a number (optional +/-, decimals) plus its attached unit — "%", a
  // multiplier ("3x"), or a following EN/ES time word ("2 days", "77 minutos").
  // Bare counts ("3 surfaces") bold the digit only. Group 1 is the preceding
  // boundary (kept so "Q1" or "v2" never match); group 2 is the metric.
  var METRIC_RE = /(^|[^\w%+\-])([+\-]?\d+(?:[.,]\d+)*(?:%|[x×](?!\w)|\s(?:días?|days?|semanas?|weeks?|meses|mes|months?|años?|years?|horas?|hours?|minutos?|minutes?|mins?|min|segundos?|seconds?|secs?)(?!\w))?)/gi;

  // Wraps metric tokens in <strong> for scan emphasis (system rule 4).
  // Input must already be HTML-escaped (escapeAttr output is digit-free,
  // so entities can never be mistaken for metrics).
  function emphasize(escapedText) {
    return escapedText.replace(METRIC_RE, '$1<strong>$2</strong>');
  }

  // Builds the inner HTML: "Highlights: <a>proof_1</a> · <a>proof_2</a>"
  // Each <a> carries data-en/data-es so the language toggle can swap it in place.
  function buildHtml(proofs, lang) {
    // "Highlights:" is industry terminology — same string in EN and ES.
    var prefix = 'Highlights: ';
    var links = proofs.map(function (p) {
      var en = escapeAttr(p.proof || '');
      var es = escapeAttr(p.proof_es || p.proof || '');
      var text = lang === 'es' ? es : en;
      // data-en/data-es keep the plain text (source of truth for the toggle);
      // the visible text gets its metrics bolded.
      return '<a class="hero__proof-link" href="' + escapeAttr(caseHref(p.id)) +
        '" data-en="' + en + '" data-es="' + es + '">' + emphasize(text) + '</a>';
    });
    // Prefix is itself language-driven, so stamp it with data-en/data-es too.
    var prefixSpan = '<span class="hero__proof-prefix" data-en="Highlights: " ' +
      'data-es="Highlights: ">' + prefix + '</span>';
    // Separator wrapped in its own span with non-breaking spaces so the spacing
    // around "·" never collapses or cramps if the line wraps at that point.
    var separator = '<span class="hero__proof-sep"> · </span>';
    return prefixSpan + links.join(separator);
  }

  function render() {
    var target = document.querySelector('.hero__summary-recent');
    if (!target) return;

    fetch('cases.json', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('cases.json HTTP ' + r.status);
        return r.json();
      })
      .then(function (data) {
        if (!Array.isArray(data)) throw new Error('cases.json is not an array');

        var featured = data.filter(function (c) {
          return c && c.featured === true && c.id && (c.proof || c.proof_es);
        });

        // FALLBACK: not enough material to honor the 2-proof contract → leave
        // the static placeholder exactly as it is.
        if (featured.length < MAX_PROOFS) return;

        // Perfil por link (data/profiles.js): sus proofs van primero, en su
        // orden; si falta alguna en el pool, se completa con el random
        // ponderado de siempre. Sin perfil → comportamiento default intacto.
        var preferred = [];
        if (typeof resolveActiveProfile === 'function') {
          var profile = resolveActiveProfile();
          if (profile && Array.isArray(profile.proofs)) {
            preferred = profile.proofs
              .map(function (id) {
                return featured.filter(function (p) { return p.id === id; })[0];
              })
              .filter(Boolean)
              .slice(0, MAX_PROOFS);
          }
        }
        var rest = featured.filter(function (p) {
          return preferred.indexOf(p) === -1;
        });
        var proofs = preferred.concat(pickWeighted(rest, MAX_PROOFS - preferred.length));
        proofs = avoidOverflow(proofs, featured);
        var lang = getLang();

        // Only now do we replace — the placeholder was never cleared before this.
        target.innerHTML = buildHtml(proofs, lang);
        // Once dynamic, the static data-en/data-es on the <p> would fight the
        // language toggle, so strip them. Per-link data-en/data-es drive i18n now.
        target.removeAttribute('data-en');
        target.removeAttribute('data-es');
      })
      .catch(function () {
        // FALLBACK: any failure (network, parse, empty) → static placeholder stays.
      });
  }

  // Keep the injected proofs in sync with the EN/ES toggle without a reload.
  // app.js writes the new lang to localStorage *before* re-rendering, so reading
  // it on click reflects the language the user just switched to.
  function initLangSync() {
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Defer so app.js has committed the new lang to localStorage first.
        setTimeout(function () {
          var lang = getLang();
          var target = document.querySelector('.hero__summary-recent');
          if (!target) return;
          target.querySelectorAll('[data-en][data-es]').forEach(function (el) {
            var text = lang === 'es' ? el.dataset.es : el.dataset.en;
            // Proof links carry <strong> around their metrics; a textContent
            // write would flatten it (app.js's generic i18n loop just did,
            // synchronously on this same click), so re-apply the wrapping.
            // Everything else (prefix span, fallback leaf segments) is plain.
            if (el.classList.contains('hero__proof-link')) {
              el.innerHTML = emphasize(escapeAttr(text));
            } else {
              el.textContent = text;
            }
          });
        }, 0);
      });
    });
  }

  function init() {
    render();
    initLangSync();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
