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


  function setAllAttr(selector, attr, value) {
    document.querySelectorAll(selector).forEach(el => {
      if (value != null) el.setAttribute(attr, value);
    });
  }

  function renderCellValue(id, value) {
    const el = document.getElementById(id);
    if (!el || value == null) return;
    const parts = value.split(' · ').filter(Boolean);
    if (parts.length > 1) {
      el.innerHTML = '<ul class="quick-scan__list">' +
        parts.map(p => `<li>${p}</li>`).join('') + '</ul>';
    } else {
      el.textContent = value;
    }
  }

  function buildProcessStep(index, title, body, phase) {
    const num = String(index + 1).padStart(2, '0');
    const phaseHtml = phase ? `<p class="process-step__phase">${phase}</p>` : '';
    const titleHtml = title ? `<h3 class="process-step__title">${title}</h3>` : '';
    return `
      <div class="process-step reveal">
        <span class="process-step__number" aria-hidden="true">${num}</span>
        <div class="process-step__content">
          ${phaseHtml}
          ${titleHtml}
          <p class="process-step__body">${body}</p>
        </div>
      </div>`;
  }

  // --- Site-wide elements (header/footer on every page) ----------------------

  function renderSiteWide(content) {
    const { site, ui } = content;

    // Footer links (href)
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

    // UI strings (nav, footer labels)
    if (ui) {
      setText('nav-work',      ui.nav.work);
      setText('nav-about',     ui.nav.about);
      setText('nav-contact',   ui.nav.contact);
      setText('footer-work',   ui.footer.work);
      setText('footer-about',  ui.footer.about);
      setText('footer-linkedin', ui.footer.linkedin);
      setText('footer-resume', ui.footer.resume);
      setText('footer-built',  ui.footer.builtWith);
      setText('hero-cta',      ui.hero.cta);
      setText('hero-scroll',   ui.hero.scroll);
      setText('label-featured', ui.case.featuredLabel);
      setText('label-grid',    ui.case.gridLabel);
      setText('fc-cta-label',  ui.case.readMore);
      setText('label-about',   ui.nav.about);
      setText('label-contact', ui.nav.contact);
    }
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
        updateLangUI(newLang);
        const content = getContent(newLang);
        renderSiteWide(content);
        if (isIndexPage()) {
          renderIndex(content);
        } else {
          renderCase(content);
        }
      });
    });
  }

  // --- Tag helpers ------------------------------------------------------------

  function buildTags(tags) {
    return tags.map(t => `<span class="tag">${t}</span>`).join('');
  }

  function buildMetricCard(item, i) {
    const delay = i > 0 ? ` reveal-delay-${i}` : '';
    return `
      <div class="metric-card reveal${delay}">
        <p class="metric-card__value">${item.value}</p>
        <p class="metric-card__label">${item.label}</p>
        <p class="metric-card__note">${item.note}</p>
      </div>`;
  }

  // --- INDEX PAGE ------------------------------------------------------------

  function renderIndex(content) {
    const { home, cases, site, ui } = content;
    const readMoreLabel = (ui && ui.case.readMore) || 'Read Case Study';

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

    // Featured case
    const featured = cases.find(c => c.featured);
    if (featured) {
      const fcTags = document.getElementById('fc-tags');
      if (fcTags) fcTags.innerHTML = buildTags(featured.card.tags);
      setText('featured-case-title', featured.card.title);
      setText('fc-excerpt', featured.card.excerpt);
      const fcCta = document.getElementById('fc-cta');
      if (fcCta) fcCta.href = 'cases/case-v2.html?slug=' + featured.slug;
      const fcScreens = document.getElementById('fc-screens');
      if (fcScreens && featured.images && featured.images.screens) {
        fcScreens.innerHTML = featured.images.screens.map(s => {
          const url = resolveAssetUrl(s.src);
          const isVideo = s.src.endsWith('.mp4') || s.src.endsWith('.webm');
          const media = isVideo
            ? `<video src="${url}" ${s.poster ? `poster="${resolveAssetUrl(s.poster)}"` : ''} autoplay loop muted playsinline></video>`
            : `<img src="${url}" alt="${s.label}" loading="lazy" />`;
          return `<div class="fc-screen">${media}<p class="fc-screen__label">${s.label}</p></div>`;
        }).join('');
      }
    }

    // Case grid — secondary cases only (non-featured)
    const secondaryCases = cases.filter(c => !c.featured);
    const grid = document.getElementById('case-grid');
    if (grid && secondaryCases.length) {
      grid.innerHTML = secondaryCases.map((c, i) => {
        const delay = i > 0 ? ` reveal-delay-${i}` : '';
        return `
          <article class="case-card reveal${delay}">
            <a href="cases/case-v2.html?slug=${c.slug}" class="case-card__image" aria-label="${c.card.title} — view case study">
              <img src="${c.images ? resolveAssetUrl(c.images.cover) : ''}" alt="${c.card.title}" loading="lazy" />
            </a>
            <div class="case-card__body">
              <div class="case-card__tags">${buildTags(c.card.tags)}</div>
              <h3 class="case-card__title">${c.card.title}</h3>
              <p class="case-card__excerpt">${c.card.excerpt}</p>
              <a href="cases/case-v2.html?slug=${c.slug}" class="case-card__cta">
                ${readMoreLabel}
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
    setText('about-excerpt', home.about.homeExcerpt || (home.about.paragraphs && home.about.paragraphs[0]) || '');
    const skillsEl = document.getElementById('about-skills');
    if (skillsEl && home.about.skills) {
      skillsEl.innerHTML = home.about.skills.map(s => `<span class="tag">${s}</span>`).join('');
    }

    // About — Venn center label
    setText('venn-center-label', home.about.vennCenter || '');

    // Contact
    setText('contact-heading', home.contact.heading);
    setText('contact-body',    home.contact.body);
    const emailLink = document.getElementById('contact-email');
    if (emailLink) {
      emailLink.href = 'mailto:' + site.email;
      const emailLabel = document.getElementById('contact-email-label');
      if (emailLabel) emailLabel.textContent = site.email;
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

    // Section labels (i18n)
    const lang = getLang();
    document.querySelectorAll('.section__label[data-label-es]').forEach(el => {
      el.textContent = (lang === 'es') ? el.dataset.labelEs : (el.dataset.labelEn || el.textContent);
    });

    // Meta
    document.title = caseData.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', caseData.meta.description);

    // Hero
    const heroTags = document.getElementById('case-hero-tags');
    if (heroTags) heroTags.innerHTML = caseData.hero.tags.map(t => `<span class="case-hero__tag">${t}</span>`).join('');
    setText('case-title',   caseData.hero.title);
    setText('case-summary', caseData.hero.summary);
    if (caseData.images) {
      setAttr('case-hero-img', 'src', resolveAssetUrl(caseData.images.hero));
      setAttr('case-hero-img', 'alt', caseData.hero.title);
    }

    // Quick Scan
    setText('qs-role',     caseData.quickScan.role);
    renderCellValue('qs-team',     caseData.quickScan.team);
    setText('qs-timeline', caseData.quickScan.timeline);
    renderCellValue('qs-tools',    caseData.quickScan.tools);
    // Compact bar (in header)
    const compactRole = document.getElementById('qs-compact-role');
    if (compactRole) {
      const parts = caseData.quickScan.role.split(' — ').filter(Boolean);
      if (parts.length > 1) {
        compactRole.innerHTML = '<ul class="quick-scan__list">' + parts.map(p => `<li>${p}</li>`).join('') + '</ul>';
      } else {
        compactRole.textContent = caseData.quickScan.role;
      }
    }
    setText('qs-compact-title', caseData.hero.title);

    // Overview
    setText('overview-heading', caseData.overview.subheading);

    const overviewSteps = document.getElementById('overview-steps');
    if (overviewSteps) {
      overviewSteps.innerHTML = [caseData.overview.body1, caseData.overview.body2]
        .map((body, i) => buildProcessStep(i, null, body)).join('');
    }
    if (caseData.images && caseData.images.overviewImage) {
      const ovImgWrap = document.getElementById('overview-img-wrap');
      const ovImg     = document.getElementById('overview-img');
      if (ovImgWrap && ovImg) {
        ovImg.src = resolveAssetUrl(caseData.images.overviewImage);
        ovImgWrap.style.display = '';
      }
    }

    // Problem
    setText('problem-heading',   caseData.problem.heading);
    const problemSteps = document.getElementById('problem-steps');
    if (problemSteps) {
      problemSteps.innerHTML = buildProcessStep(0, null, caseData.problem.body);
    }
    setText('problem-quote',     '"' + caseData.problem.quote + '"');
    setText('problem-quote-attr', caseData.problem.quoteAttr);

    // Constraints
    setText('constraints-heading', caseData.constraints.heading);
    const constraintsGrid = document.getElementById('constraints-grid');
    if (constraintsGrid) {
      constraintsGrid.innerHTML = caseData.constraints.items.map(buildMetricCard).join('');
    }

    // Role
    setText('role-heading', caseData.role.subheading);
    const roleSteps = document.getElementById('role-steps');
    if (roleSteps) {
      roleSteps.innerHTML = [caseData.role.body1, caseData.role.body2]
        .map((body, i) => buildProcessStep(i, null, body)).join('');
    }

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

    // Process images
    if (caseData.images) {
      setAttr('process-img1', 'src', resolveAssetUrl(caseData.images.process1));
      setAttr('process-img2', 'src', resolveAssetUrl(caseData.images.process2));
    }

    // Demos (videos)
    if (caseData.images && caseData.images.demos) {
      const demosGrid = document.getElementById('demos-grid');
      if (demosGrid) {
        demosGrid.innerHTML = caseData.images.demos.map((d, i) => `
          <figure class="demo-figure reveal${i > 0 ? ' reveal-delay-' + i : ''}">
            <div class="image-block image-block--wide">
              <video
                src="${resolveAssetUrl(d.src)}"
                ${d.poster ? `poster="${resolveAssetUrl(d.poster)}"` : ''}
                autoplay loop muted playsinline controls
                aria-label="${d.label}"
              ></video>
            </div>
            ${d.label ? `<figcaption class="demo-figure__caption">${d.label}</figcaption>` : ''}
          </figure>`).join('');
        // Observe new reveal elements
        const obs = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
          });
        }, { threshold: 0.05 });
        demosGrid.querySelectorAll('.reveal').forEach(el => obs.observe(el));
      }
    }

    // Key Decisions
    setText('decisions-heading', caseData.decisions.heading);
    const decisionsEl = document.getElementById('decisions-list');
    if (decisionsEl) {
      decisionsEl.innerHTML = caseData.decisions.items
        .map((d, i) => buildProcessStep(i, d.title, d.body)).join('');
    }

    // Decisions image
    if (caseData.images) {
      setAttr('decisions-img', 'src', resolveAssetUrl(caseData.images.decisions));
    }

    // Impact
    setText('impact-heading',    caseData.impact.heading);
    setText('impact-statement',  caseData.impact.statement);
    const impactGrid = document.getElementById('impact-grid');
    if (impactGrid) {
      impactGrid.innerHTML = caseData.impact.metrics.map(buildMetricCard).join('');
    }

    // Learnings
    setText('learnings-heading', caseData.learnings.heading);
    const learningsEl = document.getElementById('learnings-list');
    if (learningsEl) {
      learningsEl.innerHTML = caseData.learnings.items
        .map((item, i) => buildProcessStep(i, null, item)).join('');
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
    buildTOC(getLang());

    // Re-observe reveal elements
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // --- Table of Contents ----------------------------------------------------

  function buildTOC(lang) {
    const sections = document.querySelectorAll('[data-toc-label]');
    if (!sections.length) return;

    const nav = document.getElementById('toc-nav');
    if (!nav) return;

    const title = document.createElement('span');
    title.className = 'toc-nav__title';
    title.textContent = lang === 'es' ? 'Tabla de Contenido' : 'Table of Contents';

    const list = document.createElement('ul');
    list.className = 'toc-nav__list';

    sections.forEach(section => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.className         = 'toc-nav__link';
      a.href              = '#' + section.id;
      a.dataset.tocTarget = section.id;

      const labelSpan = document.createElement('span');
      labelSpan.className   = 'toc-nav__link-label';
      labelSpan.textContent = (lang === 'es' && section.dataset.tocLabelEs) ? section.dataset.tocLabelEs : section.dataset.tocLabel;
      a.appendChild(labelSpan);

      const h2 = section.querySelector('h2');
      if (h2) {
        const subtitleSpan = document.createElement('span');
        subtitleSpan.className   = 'toc-nav__link-subtitle';
        subtitleSpan.textContent = h2.textContent.trim();
        a.appendChild(subtitleSpan);
      }

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

  function updateFavicon(isDark) {
    const color = isDark ? '#f0ede8' : '#1a1916';
    const svg = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.0562 10.6851C26.2012 10.6851 27.2552 10.8419 28.2173 11.1548C29.1793 11.4676 30.0235 11.9248 30.7495 12.5269C31.4756 13.123 32.0597 13.8583 32.5024 14.7319C32.786 15.2914 32.998 15.9032 33.1387 16.5669C32.0171 17.0669 28.314 18.7451 28.314 18.7451C28.314 18.7451 28.3494 18.1471 28.314 17.7339C28.2785 17.3207 28.1842 16.9453 28.0308 16.6089C27.8833 16.2727 27.677 15.9836 27.4116 15.7417C27.1519 15.4938 26.8353 15.3042 26.4634 15.1743C26.0916 15.0387 25.6697 14.9712 25.1978 14.9712C24.3714 14.9712 23.6717 15.1714 23.0991 15.5728C22.5325 15.9741 22.1013 16.5497 21.8062 17.2993C21.5169 18.049 21.3726 18.9498 21.3726 20.0005C21.3726 21.1101 21.5198 22.04 21.8149 22.7896C22.1159 23.5331 22.5502 24.0934 23.1167 24.4712C23.6834 24.8431 24.3657 25.0298 25.1626 25.0298C25.617 25.0298 26.0243 24.973 26.3843 24.8608C26.7443 24.7428 27.0572 24.5743 27.3228 24.356C27.5882 24.1377 27.804 23.8756 27.9692 23.5688C28.1399 23.257 28.5134 22.0743 28.3149 21.2642L33.1704 23.4351C33.06 23.9166 32.8916 24.4043 32.6616 24.897C32.2898 25.6878 31.7613 26.4195 31.0767 27.0923C30.3978 27.7593 29.5567 28.2963 28.5532 28.7036C27.5498 29.1109 26.3842 29.3149 25.0562 29.3149C23.7751 29.3149 22.5393 29.2248 21.5171 28.6802C20.3657 28.0668 19.9389 27.399 19.8823 25.9712C19.8434 24.9883 19.8823 24.356 19.8823 24.356H17.4028C17.3865 24.3324 16.3082 22.7682 16.3081 20.0005C16.3081 17.2114 16.6979 16.2812 17.4771 14.8999C18.2562 13.5129 19.3063 12.4646 20.6284 11.7563C21.9507 11.0421 23.427 10.6851 25.0562 10.6851Z" fill="' + color + '"/><path d="M12.0171 12.0669V25.1001H19.0845V29.0669H6.82959V10.9331L12.0171 12.0669Z" fill="' + color + '"/></svg>';
    const url = 'data:image/svg+xml,' + encodeURIComponent(svg);
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/svg+xml';
    link.href = url;
  }

  function initTheme() {
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      html.classList.add('theme-dark');
    }
    updateFavicon(isDark);
    if (toggle) {
      toggle.addEventListener('click', () => {
        const dark = html.classList.toggle('theme-dark');
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        updateFavicon(dark);
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

  function initFactsBar() {
    const bar     = document.getElementById('case-facts-bar');
    const header  = document.querySelector('.site-header');
    const compact = document.getElementById('site-header-compact');
    if (!bar || !header) return;
    const hero = document.querySelector('.case-hero');
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      const scrolled = !entry.isIntersecting;
      bar.classList.toggle('quick-scan--compact', scrolled);
      header.classList.toggle('site-header--case-scrolled', scrolled);
      if (compact) compact.setAttribute('aria-hidden', scrolled ? 'false' : 'true');
    }, { threshold: 0, rootMargin: '-64px 0px 0px 0px' });

    observer.observe(hero);
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
      initFactsBar();
    }
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
