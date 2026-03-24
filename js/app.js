// =============================================================================
// PORTFOLIO APP
// Handles: language detection, i18n rendering, index + case page population.
// =============================================================================

(function () {
  'use strict';

  const LANG_KEY = 'portfolio-lang';

  // --- Language helpers -------------------------------------------------------

  function getLang() {
    return localStorage.getItem(LANG_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
  }

  function getContent(lang) {
    const l = lang || getLang();
    const data = PORTFOLIO_DATA[l];
    // Fallback to EN if ES cases are empty
    if (l === 'es' && (!data.cases || data.cases.length === 0)) {
      return { ...PORTFOLIO_DATA.en, site: data.site, home: data.home };
    }
    return data;
  }

  // --- DOM helpers ------------------------------------------------------------

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  function setAttr(id, attr, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.setAttribute(attr, value);
  }

  function setAll(selector, value) {
    document.querySelectorAll(selector).forEach(el => {
      if (value != null) el.textContent = value;
    });
  }

  function setAllAttr(selector, attr, value) {
    document.querySelectorAll(selector).forEach(el => {
      if (value != null) el.setAttribute(attr, value);
    });
  }

  // --- Site-wide elements (header/footer on every page) ----------------------

  function renderSiteWide(content) {
    const { site } = content;

    // Header logo
    setAll('.site-header__logo', site.designerName);
    setAllAttr('.site-header__logo', 'aria-label', site.designerName + ' — home');

    // Footer
    setAll('.site-footer__brand', site.designerName);
    setAll('.site-footer__role', site.role);
    setAllAttr('a[data-link="linkedin"]', 'href', site.linkedinUrl);
    const resumeUrl = resolveAssetUrl(
      typeof site.resumeUrl === 'object'
        ? (site.resumeUrl[getLang()] || site.resumeUrl.en)
        : site.resumeUrl
    );
    setAllAttr('a[data-link="resume"]', 'href', resumeUrl);

    // <html lang>
    document.documentElement.lang = site.lang;

    // Footer year
    const fy = document.getElementById('footer-year');
    if (fy) fy.textContent = new Date().getFullYear();
  }

  // --- Language toggle -------------------------------------------------------

  function updateLangUI(lang) {
    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('lang-switch__btn--active', isActive);
      btn.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  function initLangToggle() {
    const lang = getLang();
    updateLangUI(lang);

    document.querySelectorAll('.lang-switch__btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const newLang = btn.dataset.lang;
        if (newLang === getLang()) return;
        setLang(newLang);
        window.location.reload();
      });
    });
  }

  // --- Tag helpers ------------------------------------------------------------

  function buildTags(tags) {
    return tags.map(t => `<span class="tag">${t}</span>`).join('');
  }

  // --- INDEX PAGE ------------------------------------------------------------

  function renderIndex(content) {
    const { home, cases, site } = content;

    // Meta
    document.title = site.designerName + ' — Product Designer';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', site.designerName + ' — Product Designer portfolio.');

    // Hero
    setText('hero-eyebrow',    home.hero.eyebrow);
    setText('hero-first-name', home.hero.firstName);
    setText('hero-last-name',  home.hero.lastName);
    setText('hero-role',       home.hero.role);
    setText('hero-summary',    home.hero.summary);

    // Work
    setText('work-heading', home.work.heading);

    // Case grid
    const grid = document.getElementById('case-grid');
    if (grid && cases.length) {
      grid.innerHTML = cases.map((c, i) => {
        const delay = i > 0 ? ` reveal-delay-${i}` : '';
        return `
          <article class="case-card reveal${delay}">
            <a href="cases/case.html?slug=${c.slug}" class="case-card__image" aria-label="${c.card.title} — view case study">
              <img src="" alt="${c.card.title}" loading="lazy" />
              <span aria-hidden="true">[Hero Image]</span>
            </a>
            <div class="case-card__body">
              <div class="case-card__tags">${buildTags(c.card.tags)}</div>
              <h3 class="case-card__title">${c.card.title}</h3>
              <p class="case-card__excerpt">${c.card.excerpt}</p>
              <a href="cases/case.html?slug=${c.slug}" class="case-card__cta">
                Read Case Study
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </article>`;
      }).join('');

      // Re-observe new reveal elements
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
        });
      }, { threshold: 0.08 });
      grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    // About
    setText('about-heading', home.about.heading);
    if (home.about.paragraphs) {
      home.about.paragraphs.forEach((p, i) => setText('about-p' + (i + 1), p));
    }
    const skillsEl = document.getElementById('about-skills');
    if (skillsEl && home.about.skills) {
      skillsEl.innerHTML = home.about.skills.map(s => `<span class="tag">${s}</span>`).join('');
    }

    // Contact
    setText('contact-heading', home.contact.heading);
    setText('contact-body',    home.contact.body);
    const emailLink = document.getElementById('contact-email');
    if (emailLink) {
      emailLink.href = 'mailto:' + site.email;
      emailLink.textContent = site.email;
    }
    setAttr('contact-linkedin', 'href', site.linkedinUrl);
  }

  // --- CASE PAGE -------------------------------------------------------------

  function getCaseSlug() {
    return new URLSearchParams(window.location.search).get('slug');
  }

  function renderCase(content) {
    const slug = getCaseSlug();
    if (!slug) { showCaseNotFound(); return; }

    const caseData = content.cases.find(c => c.slug === slug);
    if (!caseData) { showCaseNotFound(); return; }

    // Meta
    document.title = caseData.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', caseData.meta.description);

    // Hero
    const heroTags = document.getElementById('case-hero-tags');
    if (heroTags) heroTags.innerHTML = caseData.hero.tags.map(t => `<span class="case-hero__tag">${t}</span>`).join('');
    setText('case-title',   caseData.hero.title);
    setText('case-summary', caseData.hero.summary);

    // Quick Scan
    setText('qs-role',     caseData.quickScan.role);
    setText('qs-team',     caseData.quickScan.team);
    setText('qs-timeline', caseData.quickScan.timeline);
    setText('qs-tools',    caseData.quickScan.tools);

    // Overview
    setText('overview-subheading', caseData.overview.subheading);
    const ovTags = document.getElementById('overview-tags');
    if (ovTags) ovTags.innerHTML = buildTags(caseData.overview.tags);
    setText('overview-body1', caseData.overview.body1);
    setText('overview-body2', caseData.overview.body2);

    // Problem
    setText('problem-heading',   caseData.problem.heading);
    setText('problem-body',      caseData.problem.body);
    setText('problem-quote',     '"' + caseData.problem.quote + '"');
    setText('problem-quote-attr', caseData.problem.quoteAttr);

    // Constraints
    setText('constraints-heading', caseData.constraints.heading);
    const constraintsGrid = document.getElementById('constraints-grid');
    if (constraintsGrid) {
      constraintsGrid.innerHTML = caseData.constraints.items.map((item, i) => {
        const delay = i > 0 ? ` reveal-delay-${i}` : '';
        return `
          <div class="metric-card reveal${delay}">
            <p class="metric-card__value">${item.value}</p>
            <p class="metric-card__label">${item.label}</p>
            <p class="metric-card__note">${item.note}</p>
          </div>`;
      }).join('');
    }

    // Role
    setText('role-subheading', caseData.role.subheading);
    setText('role-body1',      caseData.role.body1);
    setText('role-body2',      caseData.role.body2);

    // Process
    setText('process-heading', caseData.process.heading);
    const stepsEl = document.getElementById('process-steps');
    if (stepsEl) {
      stepsEl.innerHTML = caseData.process.steps.map((step, i) => `
        <div class="process-step reveal">
          <span class="process-step__number" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <div class="process-step__content">
            <p class="process-step__phase">${step.phase}</p>
            <h3 class="process-step__title">${step.title}</h3>
            <p class="process-step__body">${step.body}</p>
          </div>
        </div>`).join('');
    }

    // Key Decisions
    setText('decisions-heading', caseData.decisions.heading);
    const decisionsEl = document.getElementById('decisions-list');
    if (decisionsEl) {
      decisionsEl.innerHTML = caseData.decisions.items.map((d, i) => `
        <div class="decision-block reveal">
          <p class="decision-block__number">Decision ${String(i + 1).padStart(2, '0')}</p>
          <h3 class="decision-block__title">${d.title}</h3>
          <p class="decision-block__body">${d.body}</p>
        </div>`).join('');
    }

    // Impact
    setText('impact-heading',    caseData.impact.heading);
    setText('impact-statement',  caseData.impact.statement);
    const impactGrid = document.getElementById('impact-grid');
    if (impactGrid) {
      impactGrid.innerHTML = caseData.impact.metrics.map((m, i) => {
        const delay = i > 0 ? ` reveal-delay-${i}` : '';
        return `
          <div class="metric-card reveal${delay}">
            <p class="metric-card__value">${m.value}</p>
            <p class="metric-card__label">${m.label}</p>
            <p class="metric-card__note">${m.note}</p>
          </div>`;
      }).join('');
    }

    // Learnings
    setText('learnings-heading', caseData.learnings.heading);
    const learningsEl = document.getElementById('learnings-list');
    if (learningsEl) {
      learningsEl.innerHTML = caseData.learnings.items.map(item =>
        `<p class="section__body">${item}</p><hr class="section__divider" />`
      ).join('');
    }

    // Case Navigation
    const prevLink = document.getElementById('case-nav-prev');
    const nextLink = document.getElementById('case-nav-next');
    if (prevLink && caseData.nav.prev) {
      prevLink.href = 'case.html?slug=' + caseData.nav.prev.slug;
      setText('case-nav-prev-title', caseData.nav.prev.title);
    }
    if (nextLink && caseData.nav.next) {
      nextLink.href = 'case.html?slug=' + caseData.nav.next.slug;
      setText('case-nav-next-title', caseData.nav.next.title);
    }

    // Build TOC from data-toc-label sections
    buildTOC();

    // Re-observe reveal elements
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // --- Table of Contents ----------------------------------------------------

  function buildTOC() {
    const sections = document.querySelectorAll('[data-toc-label]');
    if (!sections.length) return;

    const nav = document.getElementById('toc-nav');
    if (!nav) return;

    const title = document.createElement('span');
    title.className = 'toc-nav__title';
    title.textContent = 'Contents';

    const list = document.createElement('ul');
    list.className = 'toc-nav__list';

    sections.forEach(section => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.className        = 'toc-nav__link';
      a.href             = '#' + section.id;
      a.textContent      = section.dataset.tocLabel;
      a.dataset.tocTarget = section.id;
      li.appendChild(a);
      list.appendChild(li);
    });

    nav.appendChild(title);
    nav.appendChild(list);

    initScrollSpy(sections);
  }

  function initScrollSpy(sections) {
    let currentId = null;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const newId = entry.target.id;
        if (newId === currentId) return;
        currentId = newId;
        document.querySelectorAll('.toc-nav__link').forEach(l => l.classList.remove('is-active'));
        const active = document.querySelector(`.toc-nav__link[data-toc-target="${newId}"]`);
        if (active) active.classList.add('is-active');
      });
    }, {
      // Section is "active" when it enters the top 30% of the viewport
      rootMargin: '-15% 0px -65% 0px',
      threshold: 0,
    });

    sections.forEach(s => observer.observe(s));
  }

  function showCaseNotFound() {
    const main = document.getElementById('main-content');
    if (main) main.innerHTML = '<div class="container" style="padding:8rem 0;text-align:center"><p>Case study not found.</p><a href="../index.html">← Back to work</a></div>';
  }

  // --- Theme & mobile nav (shared) -------------------------------------------

  function initTheme() {
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('theme-dark');
    }
    if (toggle) {
      toggle.addEventListener('click', () => {
        const dark = html.classList.toggle('theme-dark');
        localStorage.setItem('theme', dark ? 'dark' : 'light');
      });
    }
  }

  function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('primary-nav');
    if (navToggle && nav) {
      navToggle.addEventListener('click', () => {
        const open = nav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', open);
        navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
    }
  }

  // --- Index nav scroll-spy --------------------------------------------------

  function initIndexNavSpy() {
    const navLinks = document.querySelectorAll('.site-header__nav-link');
    if (!navLinks.length) return;

    // Click: mark the clicked link active immediately
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('site-header__nav-link--active'));
        link.classList.add('site-header__nav-link--active');
      });
    });

    // Scroll: update active link based on which section is in view
    const sections = document.querySelectorAll('main section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href') || '';
          const matches = href === '#' + id || href.endsWith('#' + id);
          link.classList.toggle('site-header__nav-link--active', matches);
        });
      });
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  }

  // --- Boot ------------------------------------------------------------------

  // Resolves root-relative asset paths (e.g. "assets/cv/file.pdf")
  // to work correctly from both index.html and cases/case.html
  function resolveAssetUrl(url) {
    if (!url || url.startsWith('http') || url.startsWith('/')) return url;
    return isIndexPage() ? url : '../' + url;
  }

  function isIndexPage() {
    // Matches index.html or root /
    const path = window.location.pathname;
    return path.endsWith('index.html') || path.endsWith('/') || !path.includes('/cases/');
  }

  function init() {
    initTheme();
    initMobileNav();
    initLangToggle();

    const lang    = getLang();
    const content = getContent(lang);

    renderSiteWide(content);

    if (isIndexPage()) {
      renderIndex(content);
      initIndexNavSpy();
    } else {
      renderCase(content);
    }
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
