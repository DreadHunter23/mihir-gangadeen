/* ═══════════════════════════════════════════════════════════
   MIHIR GANGADEEN — Portfolio « Site Immersif » — content.js
   Seul fichier de contenu : textes + chemins d'images.
   La partie « INJECTION » en bas de fichier est le moteur de
   remplissage du template : ne jamais la modifier.
   ═══════════════════════════════════════════════════════════ */

window.SITE_CONTENT = {

  brand: {
    name: 'Mihir Gangadeen',
    title: 'Mihir Gangadeen — Consultant Salesforce, Maurice',
    description: 'Portfolio de Mihir Gangadeen, consultant Salesforce à Quatre Bornes : Sales Cloud (pipeline, TMA, automatisation) et Experience Cloud (portails, Builder, CMS), Apex et Agentforce. Bilingue français et anglais.',
    kicker: 'MIHIR GANGADEEN — CONSULTANT SALESFORCE, MAURICE',
    copyright: '© 2026 — QUATRE BORNES, MAURICE',
    signature: 'DU FULL-STACK AU CLOUD, DEPUIS L’OCÉAN INDIEN',
    socials: [
      { label: 'LINKEDIN ↗', url: 'https://www.linkedin.com/in/mihir-gangadeen-2b8192237/' }
    ]
  },

  nav: { proof: 'EXPERTISE', universes: 'MÉTHODE', cta: 'CONTACT' },

  hook: {
    line1: 'Du code au métier,',
    line2a: 'une plateforme',
    line2b: 'qui tient.',
    image: 'images/hero.jpg',
    imageAlt: 'Vue aérienne du Morne Brabant et de son lagon, Maurice',
    floaters: [
      'images/fl-01.jpg',
      'images/fl-02.jpg',
      'images/fl-03.jpg',
      'images/fl-04.jpg',
      'images/fl-05.jpg',
      'images/fl-06.jpg',
      'images/fl-07.jpg',
      'images/fl-08.jpg',
      'images/fl-09.jpg',
      'images/fl-10.jpg'
    ]
  },

  positioning: 'Sales Cloud et Experience Cloud',

  manifesto: {
    text: 'Quatre ans à relier le métier et la plateforme, de Laravel à Salesforce. Sales Cloud tient le pipeline en production ; Experience Cloud tend le CRM aux clients et partenaires — une TMA ou une évolution qui [[tient la prod]].'
  },

  proof: {
    layout: 'bento',
    kicker: 'EXPERTISE',
    title: 'Deux clouds, une plateforme.',
    sub: 'Le pipeline des commerciaux, les portails des clients.',
    meta: 'SALES CLOUD — EXPERIENCE CLOUD — APEX — AGENTFORCE',
    features: [
      { size: 'big',  illu: 'illustrations/fe-1.svg', title: 'Sales Cloud', meta: 'LEADS — PIPELINE — FORECAST — TMA' },
      { size: 'tall', illu: 'illustrations/fe-2.svg', title: 'Apex & Flows', meta: 'CLASSES — TRIGGERS — BATCH — AUTOMATION' },
      { size: 'tall', illu: 'illustrations/fe-3.svg', title: 'Experience Cloud', meta: 'PORTAILS — BUILDER — CMS — LWR' },
      { size: 'big',  illu: 'illustrations/fe-4.svg', title: 'Agentforce & IA', meta: 'SPECIALIST — AI ASSOCIATE — CRM' }
    ]
  },

  motto: {
    kicker: 'CE QUI RELIE CHAQUE MISSION',
    words: [
      { word: 'Relier', hint: 'Le métier d’un côté, la plateforme de l’autre.' },
      { word: 'Tenir', hint: 'Une TMA propre, testée, que l’on peut reprendre.' },
      { word: 'Durer', hint: 'Chaque évolution doit encore servir dans un an.' }
    ]
  },

  universes: {
    introA: 'Un',
    introB: 'besoin,',
    introC: '3 étapes.',
    cta: 'Me contacter →',
    image: 'images/universe.jpg',
    items: [
      { name: 'Écouter', meta: 'ÉTAPE — 01', desc: 'J’échange avec les parties prenantes, en français ou en anglais, et je cadre le besoin dans Jira.' },
      { name: 'Construire', meta: 'ÉTAPE — 02', desc: 'Paramétrage Sales Cloud, portail Experience Cloud, Flow ou Apex : je construis ce que le métier a demandé, pas plus.' },
      { name: 'Faire tenir', meta: 'ÉTAPE — 03', desc: 'Recette, mise en production, TMA : la solution reste lisible après la livraison.' }
    ]
  },

  testimonial: {
    kicker: 'SALES CLOUD & EXPERIENCE CLOUD',
    figure: '4',
    unit: 'ANS',
    quote: 'Il prend le ticket, parle au métier, et revient avec une évolution qui ne casse rien en production.',
    author: 'SPONSOR MÉTIER — COMPTE INDUSTRIE'
  },

  objections: {
    items: ['Pas de jargon.', 'Pas d’usine à gaz.', 'Pas de ticket oublié.'],
    finale: 'Juste une plateforme',
    pill: 'qui tient.'
  },

  contact: {
    kicker: 'UN BESOIN À RELIER ?',
    email: 'mihirrgangadeen@gmail.com',
    reassurance: 'RÉPONSE SOUS 48 H — BILINGUE ANGLAIS & FRANÇAIS'
  },

  trail: [
    'images/trail-01.jpg',
    'images/trail-02.jpg',
    'images/trail-03.jpg',
    'images/trail-04.jpg',
    'images/trail-05.jpg',
    'images/trail-06.jpg',
    'images/trail-07.jpg',
    'images/trail-08.jpg',
    'images/trail-09.jpg',
    'images/trail-10.jpg',
    'images/trail-11.jpg',
    'images/trail-12.jpg',
    'images/trail-13.jpg',
    'images/trail-14.jpg',
    'images/trail-15.jpg',
    'images/trail-16.jpg',
    'images/trail-17.jpg',
    'images/trail-18.jpg',
    'images/trail-19.jpg',
    'images/trail-20.jpg'
  ]
};

/* ═══════════════════════════════════════════════════════════
   INJECTION — NE PAS MODIFIER (remplit le DOM avant app.js)
   ═══════════════════════════════════════════════════════════ */
(() => {
  const C = window.SITE_CONTENT;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const set = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };

  document.title = C.brand.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', C.brand.description);

  // chrome
  set('.loader-wordmark', C.brand.name);
  set('.dock-wordmark', C.brand.name);
  set('.dock-link[href="#travaux"]', C.nav.proof);
  set('.dock-link[href="#explorer"]', C.nav.universes);
  set('.dock-cta', C.nav.cta);

  // 1 · accroche
  set('#heroKicker', C.brand.kicker);
  set('#heroLine1', C.hook.line1);
  const hls = $$('#heroLine2 .hl');
  if (hls.length === 2) { hls[0].textContent = C.hook.line2a; hls[1].textContent = C.hook.line2b; }
  const g1 = $('#grow1 img');
  if (g1) { g1.src = C.hook.image; g1.alt = C.hook.imageAlt; }
  $$('.floaters .fl img').forEach((img, i) => { if (C.hook.floaters[i]) img.src = C.hook.floaters[i]; });

  // 2 · positionnement (un span par mot)
  const intro = $('#spotIntro');
  if (intro) intro.innerHTML = C.positioning.split(' ').map((w) => `<span>${w}</span>`).join(' ');

  // 3 · démarche
  const fill = $('#fillText');
  if (fill) {
    fill.innerHTML = C.manifesto.text.replace(
      /\[\[(.+?)\]\]/,
      '<span class="boxed" id="boxedPhrase">$1<svg class="box-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="boxPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>'
    );
  }

  // 4 · preuve : masonry (8 photos) ou bento (4 features big/tall/tall/big)
  const head = $$('.coll-head > *');
  if (head.length === 4) {
    head[0].textContent = C.proof.kicker;
    head[1].textContent = C.proof.title;
    head[2].textContent = C.proof.sub;
    head[3].textContent = C.proof.meta;
  }
  const grid = $('#collGrid');
  if (grid && C.proof.layout === 'bento') {
    grid.className = 'bento-grid';
    grid.innerHTML = C.proof.features.map((f) =>
      `<figure class="card${f.size ? ' b-' + f.size : ''}"><div class="card-img"><img src="${f.illu}" alt="${f.title}"></div><figcaption>${f.title}<span class="mono">${f.meta}</span></figcaption></figure>`
    ).join('');
  } else if (grid) {
    grid.className = 'coll-grid';
    const SPEEDS = [-0.05, 0.06, -0.028, 0.085];
    grid.innerHTML = SPEEDS.map((s, ci) =>
      `<div class="col" data-pspeed="${s}">` +
      C.proof.projects.slice(ci * 2, ci * 2 + 2).map((p) =>
        `<figure class="card"><div class="card-img"><img src="${p.img}" alt="${p.title} — ${p.meta}"></div><figcaption>${p.title}<span class="mono">${p.meta}</span></figcaption></figure>`
      ).join('') + '</div>'
    ).join('');
  }

  // 5 · devise (train de mots-clés)
  set('#mottoKicker', C.motto.kicker);
  const mtrack = $('#mottoTrack');
  if (mtrack) mtrack.innerHTML = C.motto.words.map((w) => `<span class="mw">${w.word}</span>`).join('');

  // 6-7 · processus immersif (visuels posés un à un)
  set('#nw1', C.universes.introA);
  set('#nw2', C.universes.introB);
  set('#nw3', C.universes.introC);
  const g2 = $('#grow2 img');
  if (g2) g2.src = C.universes.image || (C.universes.items[0] || {}).img || g2.src;
  const psteps = $('#psteps');
  if (psteps) {
    psteps.innerHTML = C.universes.items.map((u) =>
      `<div class="pstep"><span class="pstep-meta mono ash">${u.meta}</span><h3>${u.name}</h3><p>${u.desc || ''}</p></div>`
    ).join('');
  }
  const sCta = $('#stepsCtaLink');
  if (sCta) sCta.childNodes[0].textContent = C.universes.cta;

  // 8 · preuve sociale — le chiffre qui frappe
  set('#figKicker', C.testimonial.kicker || '');
  const figM = String(C.testimonial.figure || '').trim().match(/^([^\d.,+-]*[+\u2212-]?)\s*(-?[\d.,]+)/);
  set('#figPre', figM ? figM[1] : '');
  set('#figVal', figM ? figM[2] : '');
  set('#figUnit', C.testimonial.unit || '');
  set('#quoteText', C.testimonial.quote);
  set('#quoteAuthor', C.testimonial.author);

  // 9 · objections
  C.objections.items.forEach((t, i) => set('#fs' + (i + 1), t));
  const fs4 = $('#fs4');
  if (fs4) {
    fs4.innerHTML = `${C.objections.finale} <span class="pill" id="pillPhrase">${C.objections.pill}<svg class="pill-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="pillPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>`;
  }
  $$('#trail img').forEach((img, i) => { img.src = C.trail[i % C.trail.length]; });

  // 10 · conversion
  set('.footer-kicker', C.contact.kicker);
  const mail = $('.footer-mail');
  if (mail) { mail.href = 'mailto:' + C.contact.email; mail.querySelector('.footer-mail-text').textContent = C.contact.email; }
  set('.footer-reassurance', C.contact.reassurance);
  const fname = $('#footerName');
  if (fname) { fname.textContent = C.brand.name; fname.setAttribute('aria-label', C.brand.name); }
  const bottom = $$('.footer-bottom > p');
  if (bottom.length === 3) {
    bottom[0].textContent = C.brand.copyright;
    bottom[1].innerHTML = C.brand.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join('&nbsp;&nbsp;&nbsp;');
    bottom[2].textContent = C.brand.signature;
  }
})();
