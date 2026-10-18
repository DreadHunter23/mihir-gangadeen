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

  nav: { proof: 'SKILLS', universes: 'MÉTHODE', cta: 'CONTACT' },

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

  skills: {
    kicker: 'SKILLS',
    title: 'My Skills',
    copy: [
      'Deux clouds, une plateforme. Sales Cloud en production, Experience Cloud côté portails, Apex et Flows quand le paramétrage ne suffit plus.',
      'Le socle vient du full-stack — Laravel, HTML, CSS — et de la TMA au quotidien, tickets Jira compris. Bilingue français et anglais.'
    ],
    groups: [
      {
        title: 'Salesforce',
        items: [
          { name: 'Sales Cloud', level: 90 },
          { name: 'Apex & Flows', level: 86 },
          { name: 'Experience Cloud', level: 78 },
          { name: 'Agentforce & IA', level: 72 }
        ]
      },
      {
        title: 'Socle & collab',
        items: [
          { name: 'TMA / Jira', level: 88 },
          { name: 'HTML / CSS', level: 82 },
          { name: 'Laravel / PHP', level: 76 }
        ]
      }
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
  }
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

  // 4 · compétences
  set('#skillsKicker', C.skills.kicker);
  set('#skillsTitle', C.skills.title);
  const skillsCopy = $('#skillsCopy');
  if (skillsCopy) skillsCopy.innerHTML = (C.skills.copy || []).map((p) => `<p>${p}</p>`).join('');
  const skillsGroups = $('#skillsGroups');
  if (skillsGroups) {
    let i = 0;
    skillsGroups.innerHTML = (C.skills.groups || []).map((g) =>
      `<div class="skill-group"><h3>${g.title}</h3>` +
      g.items.map((it) => {
        const n = i++;
        return `<div class="skill" style="--i:${n}"><p>${it.name}</p><div class="skill-bar" role="meter" aria-label="${it.name}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${it.level}"><i style="--p:${it.level}%"></i></div></div>`;
      }).join('') +
      `</div>`
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
