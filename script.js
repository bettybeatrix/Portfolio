(() => {
  'use strict';
  document.documentElement.classList.add('js');

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const email = 'bettybeatrix09@gmail.com';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeModal = null;
  let lastFocused = null;
  let certificateIndex = 0;
  let toastTimer;

  const escapeHTML = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = (s) => { try { const u = new URL(s); return ['https:', 'http:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } };
  const escapeAttr = escapeHTML;

  function iconArrow() { return '<span class="card-arrow" aria-hidden="true">↗</span>'; }

  function previewHTML(p) {
    if (p.preview === 'store') return `
      <div class="project-preview preview-store" aria-label="Illustrative store dashboard preview">
        <div class="mock-browser"><i></i><i></i><i></i><span>STORE MANAGER • UI CONCEPT</span></div>
        <div class="store-mock">
          <aside class="mock-side"><span class="mock-side-logo">s<span>✳</span></span><span class="mock-side-bar on"></span><span class="mock-side-bar"></span><span class="mock-side-bar short"></span><span class="mock-side-bar"></span></aside>
          <div class="mock-content"><div class="mock-smallcap">OVERVIEW</div><div class="mock-h1">Good morning! <span>✺</span></div><div class="mock-subtitle">Here's what's happening in your store today.</div><div class="mock-stat-grid"><div><small>TODAY'S SALES</small><strong>₱1,280</strong><span>↗ +12%</span></div><div><small>PRODUCTS</small><strong>148</strong><span>In stock</span></div><div><small>LOW STOCK</small><strong>08</strong><span>Need restock</span></div></div><div class="mock-bottom"><div class="mock-chart"><span>SALES OVERVIEW</span><div class="mock-chart-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div><div class="mock-sale"><span>QUICK SALE</span><div class="mock-sale-lines"><i></i><i></i><i></i></div><b>Checkout →</b></div></div></div>
        </div><div class="mock-disclaimer">ILLUSTRATIVE UI • NOT ACTUAL TRANSACTION DATA</div>
      </div>`;
    if (p.preview === 'health') return `
      <div class="project-preview preview-health" aria-label="Illustrative HealthiScan kiosk preview">
        <div class="health-orbit health-orbit-one"></div><div class="health-orbit health-orbit-two"></div>
        <div class="health-mock"><div class="health-top"><span class="health-logo">✳</span><span>healthi<span>scan</span></span><small>HEALTH CENTER PORTAL</small></div><div class="health-content"><span class="health-kicker">WELCOME TO HEALTHISCAN</span><h3>Care starts<br>with <em>clarity.</em></h3><p>Your health, your queue, a simpler visit.</p><div class="health-options"><span>01 <b>Patient identification</b> →</span><span>02 <b>Queue confirmation</b> →</span><span>03 <b>Vital signs review</b> →</span></div></div><div class="health-bottom"><span>BARANGAY GRACEVILLE HEALTH CENTER</span><span>● SYSTEM READY</span></div></div>
        <div class="mock-disclaimer">ILLUSTRATIVE UI • NOT AN APP SCREENSHOT</div>
      </div>`;
    const file = escapeAttr(p.image || '');
    return `<div class="project-preview preview-image"><img src="${file}" alt="${escapeAttr(p.title)} visual design" loading="lazy"><span class="preview-overlay">Explore this project <span aria-hidden="true">↗</span></span></div>`;
  }

  function projectCard(p, i) {
    return `<article class="project-card ${p.featured ? 'featured' : ''} reveal" data-category="${escapeAttr(p.category)}">
      <button type="button" class="project-card-button" data-project="${escapeAttr(p.id)}" aria-label="View details for ${escapeAttr(p.title)}">
        ${previewHTML(p)}
        <div class="project-meta"><span class="project-type">${escapeHTML(p.categoryLabel)}</span><span class="project-number">${String(i + 1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}</span></div>
        <div class="project-card-footer"><div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.subtitle)}</p></div>${iconArrow()}</div>
        <div class="project-tags">${(p.tags || []).slice(0,3).map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>
      </button>
    </article>`;
  }

  function renderProjects(filter = 'all') {
    const grid = $('#projects-grid');
    const shown = projects.filter(p => filter === 'all' || p.category === filter);
    grid.innerHTML = shown.length ? shown.map((p) => projectCard(p,projects.indexOf(p))).join('') : '<p class="no-projects">No projects in this category yet. More coming soon.</p>';
    const count = String(shown.length).padStart(2,'0');
    $('#project-count').textContent = `SHOWING ${count} PROJECT${shown.length === 1 ? '' : 'S'}`;
    $('#all-count').textContent = String(projects.length).padStart(2,'0');
    setupReveal();
  }

  function setupFilters() {
    $('#project-filters').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;
      $$('.filter', $('#project-filters')).forEach(b => { const active = b === btn; b.classList.toggle('active',active); b.setAttribute('aria-pressed',String(active)); });
      renderProjects(btn.dataset.filter);
    });
    $('#projects-grid').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-project]');
      if (btn) openProject(btn.dataset.project);
    });
  }

  function projectModalHTML(p) {
    const links = [
      p.liveUrl && safeURL(p.liveUrl) ? `<a class="button button-primary" href="${escapeAttr(safeURL(p.liveUrl))}" target="_blank" rel="noopener noreferrer">Visit live project ↗</a>` : '',
      p.repoUrl && safeURL(p.repoUrl) ? `<a class="button button-ghost" href="${escapeAttr(safeURL(p.repoUrl))}" target="_blank" rel="noopener noreferrer">View source ↗</a>` : ''
    ].filter(Boolean).join('');
    return `<div class="case-study">
      <div class="case-study-heading"><span class="eyebrow">${escapeHTML(p.categoryLabel)} / ${escapeHTML(p.stage || '')}</span><h2 id="modal-project-title">${escapeHTML(p.title)}</h2><p>${escapeHTML(p.summary)}</p></div>
      <div class="case-study-preview">${previewHTML(p)}</div>
      <div class="case-study-tags">${(p.tags || []).map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>
      <div class="case-study-columns"><div><h3>THE CHALLENGE</h3><p>${escapeHTML(p.challenge)}</p></div><div><h3>MY APPROACH</h3><p>${escapeHTML(p.solution)}</p></div></div>
      <div class="case-study-highlights"><h3>KEY HIGHLIGHTS</h3><ul>${(p.highlights || []).map(x=>`<li><span aria-hidden="true">✳</span>${escapeHTML(x)}</li>`).join('')}</ul></div>
      <div class="case-study-actions">${links}<a class="button button-primary" href="mailto:${email}?subject=${encodeURIComponent('Question about ' + p.title)}">Ask me about this project ↗</a></div>
    </div>`;
  }

  function lockPage(locked) { document.body.classList.toggle('modal-open',locked); }
  function openDialog(modal) {
    if (activeModal) closeDialog();
    lastFocused = document.activeElement;
    activeModal = modal;
    modal.hidden = false;
    lockPage(true);
    const close = $('.close-button',modal);
    if (close) close.focus();
  }
  function closeDialog() {
    if (!activeModal) return;
    activeModal.hidden = true;
    activeModal = null;
    lockPage(false);
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }
  function openProject(id) {
    const p = projects.find(item => item.id === id);
    if (!p) return;
    $('#project-modal-content').innerHTML = projectModalHTML(p);
    openDialog($('#project-modal'));
  }
  function setupDialog() {
    $('#project-modal').addEventListener('click', e => { if (e.target.closest('[data-modal-close]')) closeDialog(); });
    $('#certificate-modal').addEventListener('click', e => { if (e.target.closest('[data-certificate-close]')) closeDialog(); });
    document.addEventListener('keydown', e => {
      if (!activeModal) return;
      if (e.key === 'Escape') { e.preventDefault(); closeDialog(); return; }
      if (activeModal.id === 'certificate-modal' && e.key === 'ArrowRight') { moveCertificate(1); }
      if (activeModal.id === 'certificate-modal' && e.key === 'ArrowLeft') { moveCertificate(-1); }
      if (e.key === 'Tab') {
        const focusable = $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',activeModal).filter(el => el.getClientRects().length);
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length-1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  const certificates = [
    ['assets/responsiveweb.webp','Responsive Web Design'],
    ['assets/beta.webp','JavaScript Algorithms and Data Structures'],
    ['assets/html.webp','HTML Essential Training'],
    ['assets/javascript.webp','JavaScript Essential Training'],
    ['assets/ux.webp','UX Foundations: Interaction Design'],
    ['assets/webdesign.webp','Introduction to Web Design and Development']
  ];
  function showCertificate(i) {
    certificateIndex = (i + certificates.length) % certificates.length;
    $('#certificate-modal-image').src = certificates[certificateIndex][0];
    $('#certificate-modal-image').alt = certificates[certificateIndex][1] + ' certificate';
    $('#certificate-caption').textContent = `${certificateIndex + 1} / ${certificates.length} · ${certificates[certificateIndex][1]}`;
  }
  function moveCertificate(delta) { showCertificate(certificateIndex + delta); }

  
  certificates.push(
    ["assets/cert7.jpg", "Certificate 7"],
    ["assets/cert8.jpg", "Certificate 8"],
    ["assets/cert9.jpg", "Certificate 9"]
  );

  function setupCertificates() {
    $$('.cert-card').forEach(card => card.addEventListener('click', () => { showCertificate(Number(card.dataset.cert)); openDialog($('#certificate-modal')); }));
    $('#cert-prev').addEventListener('click', () => moveCertificate(-1));
    $('#cert-next').addEventListener('click', () => moveCertificate(1));
  }

  let revealObserver;
  function setupReveal() {
    const els = $$('.reveal:not(.is-visible)');
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach(el=>el.classList.add('is-visible')); return; }
    if (!revealObserver) revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    }, { rootMargin: '0px 0px -36px 0px', threshold: .07 });
    els.forEach(el => revealObserver.observe(el));
  }

  function setupNavigation() {
    const header = $('.site-header');
    const toggle = $('#menu-toggle');
    const nav = $('#nav-menu');
    const setMenu = (open) => {
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open',open);
      document.body.classList.toggle('nav-open',open);
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    $$('.nav-item, .nav-cta').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown',e=>{if(e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false);toggle.focus(); }});
    document.addEventListener('click',e => { if (nav.classList.contains('is-open') && !header.contains(e.target)) setMenu(false); });
    const items = $$('.nav-item');
    const sections = ['home','work','about','expertise','certificates','contact'].map(id=>document.getElementById(id));
    let ticking = false;
    const onScroll = () => {
      header.classList.toggle('scrolled',window.scrollY > 22);
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      $('#page-progress').style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
      const point = window.scrollY + window.innerHeight * .4;
      let active = 'home';
      sections.forEach(section => {if (section && section.offsetTop <= point) active = section.id;});
      items.forEach(a => {a.classList.toggle('active',a.getAttribute('href') === '#' + active);});
      ticking = false;
    };
    window.addEventListener('scroll',()=>{if (!ticking) {window.requestAnimationFrame(onScroll);ticking=true;}},{passive:true});
    onScroll();
  }

  function setupAccordion() {
    $$('.expertise-trigger').forEach(btn => btn.addEventListener('click',()=>{
      const wasOpen = btn.getAttribute('aria-expanded') === 'true';
      $$('.expertise-trigger').forEach(other=>{
        const panel = document.getElementById(other.getAttribute('aria-controls'));
        const open = other === btn ? !wasOpen : false;
        other.setAttribute('aria-expanded',String(open));
        other.closest('.expertise-item').classList.toggle('opened',open);
        $('.expertise-plus',other).textContent = open ? '−' : '+';
        panel.hidden = !open;
      });
    }));
  }

  function setupTheme() {
    const btn = $('#theme-toggle');
    let saved;
    try { saved = localStorage.getItem('betty-portfolio-theme'); } catch {}
    const apply = value => {
      const light = value === 'light';
      document.documentElement.dataset.theme = light ? 'light' : 'dark';
      btn.setAttribute('aria-label',`Switch to ${light ? 'dark' : 'light'} theme`);
      document.querySelector('meta[name="theme-color"]').setAttribute('content',light ? '#f6f3ed' : '#101015');
    };
    apply(saved === 'light' ? 'light' : 'dark');
    btn.addEventListener('click',()=>{
      const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(theme);
      try { localStorage.setItem('betty-portfolio-theme',theme); } catch {}
    });
  }

  function setupPointer() {
    if (reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const halo = $('.cursor-halo');
    let x = -200,y=-200,px=-200,py=-200;
    document.addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY;halo.classList.add('is-on');},{passive:true});
    const move=()=>{px+=(x-px)*.15;py+=(y-py)*.15;halo.style.transform=`translate3d(${px}px,${py}px,0) translate(-50%,-50%)`;window.requestAnimationFrame(move);};
    window.requestAnimationFrame(move);
    document.addEventListener('pointerleave',()=>halo.classList.remove('is-on'));
    $$('.magnetic').forEach(el=>{
      el.addEventListener('pointermove',e=>{const b=el.getBoundingClientRect();const dx=(e.clientX-b.left-b.width/2)*.12;const dy=(e.clientY-b.top-b.height/2)*.12;el.style.transform=`translate(${dx}px,${dy}px)`;});
      el.addEventListener('pointerleave',()=>{el.style.transform='';});
    });
  }

  function toast(message) {
    const el=$('#toast');el.textContent=message;el.classList.add('show');
    window.clearTimeout(toastTimer);toastTimer=window.setTimeout(()=>el.classList.remove('show'),3000);
  }

  function setupContact() {
    $('#copy-email').addEventListener('click', async()=>{
      try { await navigator.clipboard.writeText(email);toast('Email address copied!'); }
      catch { toast('You can email me at ' + email); }
    });
    $('#contact-form').addEventListener('submit', e=>{
      e.preventDefault();
      const form=e.currentTarget;
      if (!form.reportValidity()) return;
      const name=$('#contact-name').value.trim();
      const from=$('#contact-address').value.trim();
      const message=$('#contact-message').value.trim();
      if (!name || !from || !message) return;
      const subject=encodeURIComponent('Portfolio inquiry from ' + name);
      const body=encodeURIComponent(`Hi Betty,\n\n${message}\n\nFrom: ${name}\nEmail: ${from}`);
      const link=`mailto:${email}?subject=${subject}&body=${body}`;
      window.location.href=link;
      toast('Your email app should open with the message ready.');
    });
  }

  document.addEventListener('DOMContentLoaded',()=>{
    $('#year').textContent = String(new Date().getFullYear());
    setupTheme();
    renderProjects();
    setupFilters();
    setupDialog();
    setupCertificates();
    setupNavigation();
    setupAccordion();
    setupContact();
    setupReveal();
    setupPointer();
  });
})();
