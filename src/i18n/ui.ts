// Single source of truth for every interface string, in both locales.
//
// Keys are flat, dotted, and grouped by area. Values may contain inline HTML
// (rendered with `set:html` at the call site) where the original markup had
// emphasis/coloured spans — those keys are suffixed nowhere special but are
// documented inline. Content-collection prose (project bodies, taglines, …)
// does NOT live here — it lives in the per-locale Markdown files. Only chrome
// and enum display-labels belong in this dictionary.

export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // ---- Nav ----
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.homeAria': 'Jonas Schäfer — home',
    'nav.themeAria': 'Toggle color theme',
    'nav.themeTitle': 'Toggle theme',
    'nav.langAria': 'Switch language',

    // ---- Hero ----
    'hero.coord': '50.92°N 6.36°E · Forschungszentrum Jülich',
    // inline HTML: coloured spans + <strong>
    'hero.lede':
      '<span class="hl-climate">Climate advocate</span> and <span class="hl-energy">PhD candidate</span> developing <strong>building automation and optimal control software</strong> for a more sustainable built environment.',
    'hero.ctaResearch': 'Read the research',
    'hero.ctaContact': 'Get in touch',
    'hero.scroll': 'Scroll',
    'hero.scrollAria': 'Scroll to content',

    // ---- About ----
    'about.label': 'About',
    // inline HTML: <em>
    'about.lead':
      'I work on the <em>optimal operation of buildings</em> — the control systems that decide how a building heats, cools or ventilates itself.',
    // inline HTML: <em>
    'about.body1':
      'Most buildings are run by primitive rules deeply embedded in hardware. My research investigates ways to operate the existing building stock in more energy-efficient and grid-supportive ways using computational approaches. I focus on operation in the cloud, making use of <em>smart device</em> data and predictive algorithms to optimize operation.',
    // inline HTML: coloured span
    'about.body2':
      'Before my PhD, I studied <span class="hl-compute">Computer Science</span> and <span class="hl-compute">Computational Science</span> and was active in the <span class="hl-climate">climate advocacy</span> scene, supporting education work on the climate solutions.',
    'about.facts.field': 'Field',
    'about.facts.fieldValue': 'Energy systems · Internet of Things · Control theory',
    'about.facts.methods': 'Methods',
    'about.facts.methodsValue': 'MPC · ML',
    'about.facts.basedIn': 'Based in',
    'about.facts.basedInValue': 'Germany',
    'about.facts.languages': 'Languages',
    'about.facts.languagesValue': 'German (native) · English (C2) · French (B1+)',

    // ---- Research section ----
    'research.idx': '/ research',
    'research.heading': 'Peer-reviewed',
    'research.emptyBadge': 'In the works',
    'research.emptyText':
      'First work from my PhD is being prepared for publication — check back soon.',

    // ---- Projects (homepage preview) ----
    'projects.idx': '/ projects',
    'projects.heading': 'Projects',
    'projects.browseAll': 'Browse all projects →',
    'card.readMore': 'Read more →',

    // ---- Track labels / copy (shared: homepage + /projects) ----
    'track.energy.label': 'Energy research',
    'track.energy.idx': '/ energy research',
    'track.energy.title': 'Energy research',
    'track.energy.blurb': 'Building energy systems, control and optimal operation.',
    'track.compsci.label': 'Computational science',
    'track.compsci.idx': '/ computational science',
    'track.compsci.title': 'Computational science',
    'track.compsci.blurb': 'Simulation, modelling and machine-learning projects.',
    'track.climate.label': 'Climate & sustainability',
    'track.climate.idx': '/ climate & sustainability',
    'track.climate.title': 'Climate & sustainability',
    'track.climate.blurb':
      'Nonprofit leadership, policy, delegations and sustainability reporting.',

    // ---- Experience section ----
    'experience.idx': '/ experience',
    'experience.heading': 'Experience',
    'experience.viewAria': 'Experience view',
    'experience.details': 'Details',

    // ---- Education section ----
    'education.idx': '/ education',
    'education.heading': 'Education',
    'education.viewAria': 'Education view',
    'education.credential': 'Credential',

    // ---- View toggle ----
    'view.table': 'Table',
    'view.timeline': 'Timeline',
    'view.line': 'Line',

    // ---- Contact ----
    'contact.eyebrow': 'Say hello',
    'contact.title': 'Let’s talk about buildings.',

    // ---- Footer ----
    'footer.note':
      'This website has been largely created with large language models (Anthropic Claude). All content has been human reviewed for accuracy.',
    'footer.allProjects': 'All projects',

    // ---- /projects listing page ----
    'projectsPage.backHome': 'Home',
    'projectsPage.label': 'Projects',
    'projectsPage.heading': 'Projects',
    // inline HTML: coloured <strong> spans + <br>
    'projectsPage.sub':
      'Here I present my work in <strong class="t-energy">energy research</strong>,<br> <strong class="t-compsci">computational science</strong> and <strong class="t-climate">climate &amp; sustainability</strong>.',

    // ---- Project detail page ----
    'project.backProjects': 'Projects',
    'project.visit': 'Visit project',
    'project.prev': '← Previous',
    'project.next': 'Next →',

    // ---- Chips: research status ----
    'status.published': 'published',
    'status.in review': 'in review',
    'status.preprint': 'preprint',
    'status.working paper': 'working paper',
    // ---- Chips: experience kind ----
    'kind.research': 'research',
    'kind.engineering': 'engineering',
    'kind.internship': 'internship',
    'kind.nonprofit': 'nonprofit',
    'kind.freelance': 'freelance',
    // ---- Chips: education kind ----
    'kind.degree': 'degree',
    'kind.certificate': 'certificate',
    'kind.course': 'course',

    // ---- Meta (title/description per page) ----
    'meta.homeTitle': 'Jonas Schäfer',
    'meta.homeDesc':
      'PhD candidate and scientific researcher in the domain of building automation and optimal control of building energy systems.',
    'meta.projectsTitle': 'Projects — Jonas Schäfer',
    'meta.projectsDesc': 'Research and climate projects by Jonas Schäfer.',
  },

  de: {
    // ---- Nav ----
    'nav.about': 'Über mich',
    'nav.research': 'Forschung',
    'nav.projects': 'Projekte',
    'nav.experience': 'Erfahrung',
    'nav.education': 'Ausbildung',
    'nav.contact': 'Kontakt',
    'nav.homeAria': 'Jonas Schäfer — Startseite',
    'nav.themeAria': 'Farbschema umschalten',
    'nav.themeTitle': 'Design umschalten',
    'nav.langAria': 'Sprache wechseln',

    // ---- Hero ----
    'hero.coord': '50.92°N 6.36°E · Forschungszentrum Jülich',
    'hero.lede':
      '<span class="hl-climate">Klimaaktivist</span> und <span class="hl-energy">Doktorand</span>, der <strong>Software zur Gebäudeautomation und optimalen Regelung</strong> für eine nachhaltigere gebaute Umwelt entwickelt.',
    'hero.ctaResearch': 'Zur Forschung',
    'hero.ctaContact': 'Kontakt aufnehmen',
    'hero.scroll': 'Scrollen',
    'hero.scrollAria': 'Zum Inhalt scrollen',

    // ---- About ----
    'about.label': 'Über mich',
    'about.lead':
      'Ich arbeite am <em>optimalen Betrieb von Gebäuden</em> — den Regelungssystemen, die entscheiden, wie ein Gebäude heizt, kühlt oder lüftet.',
    'about.body1':
      'Die meisten Gebäude werden von primitiven Regeln gesteuert, die tief in der Hardware verankert sind. Meine Forschung untersucht, wie sich der bestehende Gebäudebestand mit rechnergestützten Ansätzen energieeffizienter und netzdienlicher betreiben lässt. Mein Fokus liegt auf dem Betrieb in der Cloud, wobei ich Daten von <em>smarten Geräten</em> und prädiktive Algorithmen nutze, um den Betrieb zu optimieren.',
    'about.body2':
      'Vor meiner Promotion habe ich <span class="hl-compute">Informatik und Computational Science</span> studiert und war in der <span class="hl-climate">Klimabewegung</span> aktiv, wo ich Organisationen bei der Bildungsarbeit zu den zentralen Klimalösungen unterstützt habe.',
    'about.facts.field': 'Fachgebiet',
    'about.facts.fieldValue': 'Energiesysteme · Internet der Dinge · Regelungstechnik',
    'about.facts.methods': 'Methoden',
    'about.facts.methodsValue': 'MPC · ML',
    'about.facts.basedIn': 'Standort',
    'about.facts.basedInValue': 'Deutschland',
    'about.facts.languages': 'Sprachen',
    'about.facts.languagesValue':
      'Deutsch (Muttersprache) · Englisch (C2) · Französisch (B1+)',

    // ---- Research section ----
    'research.idx': '/ forschung',
    'research.heading': 'Forschung',
    'research.emptyBadge': 'In Arbeit',
    'research.emptyText':
      'Erste Arbeiten aus meiner Promotion werden gerade zur Veröffentlichung vorbereitet — schau bald wieder vorbei.',

    // ---- Projects (homepage preview) ----
    'projects.idx': '/ projekte',
    'projects.heading': 'Projekte',
    'projects.browseAll': 'Alle Projekte ansehen →',
    'card.readMore': 'Mehr lesen →',

    // ---- Track labels / copy ----
    'track.energy.label': 'Energieforschung',
    'track.energy.idx': '/ energieforschung',
    'track.energy.title': 'Energieforschung',
    'track.energy.blurb': 'Gebäudeenergiesysteme, Regelung und optimaler Betrieb.',
    'track.compsci.label': 'Computational Science',
    'track.compsci.idx': '/ computational science',
    'track.compsci.title': 'Computational Science',
    'track.compsci.blurb': 'Simulation, Modellierung und Machine-Learning-Projekte.',
    'track.climate.label': 'Klima & Nachhaltigkeit',
    'track.climate.idx': '/ klima & nachhaltigkeit',
    'track.climate.title': 'Klima & Nachhaltigkeit',
    'track.climate.blurb':
      'Ehrenamtliche Leitung, Klimakonferenzen und Nachhaltigkeitsberichterstattung.',

    // ---- Experience section ----
    'experience.idx': '/ erfahrung',
    'experience.heading': 'Erfahrung',
    'experience.viewAria': 'Ansicht der Erfahrung',
    'experience.details': 'Details',

    // ---- Education section ----
    'education.idx': '/ ausbildung',
    'education.heading': 'Ausbildung',
    'education.viewAria': 'Ansicht der Ausbildung',
    'education.credential': 'Nachweis',

    // ---- View toggle ----
    'view.table': 'Tabelle',
    'view.timeline': 'Zeitstrahl',
    'view.line': 'Linie',

    // ---- Contact ----
    'contact.eyebrow': 'Sag Hallo',
    'contact.title': 'Sprechen wir über Gebäude.',

    // ---- Footer ----
    'footer.note':
      'Diese Website wurde weitgehend mit großen Sprachmodellen (Anthropic Claude) erstellt. Alle Inhalte wurden von Menschen auf Richtigkeit geprüft.',
    'footer.allProjects': 'Alle Projekte',

    // ---- /projects listing page ----
    'projectsPage.backHome': 'Startseite',
    'projectsPage.label': 'Projekte',
    'projectsPage.heading': 'Projekte',
    'projectsPage.sub':
      'Hier stelle ich meine Arbeit in den Bereichen <strong class="t-energy">Energieforschung</strong>,<br> <strong class="t-compsci">Computational Science</strong> und <strong class="t-climate">Klima &amp; Nachhaltigkeit</strong> vor.',

    // ---- Project detail page ----
    'project.backProjects': 'Projekte',
    'project.visit': 'Projekt besuchen',
    'project.prev': '← Vorheriges',
    'project.next': 'Nächstes →',

    // ---- Chips: research status ----
    'status.published': 'veröffentlicht',
    'status.in review': 'in Begutachtung',
    'status.preprint': 'Preprint',
    'status.working paper': 'Arbeitspapier',
    // ---- Chips: experience kind ----
    'kind.research': 'Forschung',
    'kind.engineering': 'Entwicklung',
    'kind.internship': 'Praktikum',
    'kind.nonprofit': 'Ehrenamt',
    'kind.freelance': 'Freiberuflich',
    // ---- Chips: education kind ----
    'kind.degree': 'Abschluss',
    'kind.certificate': 'Zertifikat',
    'kind.course': 'Kurs',

    // ---- Meta ----
    'meta.homeTitle': 'Jonas Schäfer',
    'meta.homeDesc':
      'Doktorand und wissenschaftlicher Mitarbeiter im Bereich Gebäudeautomation und optimale Regelung von Gebäudeenergiesystemen.',
    'meta.projectsTitle': 'Projekte — Jonas Schäfer',
    'meta.projectsDesc': 'Forschungs- und Klimaprojekte von Jonas Schäfer.',
  },
} as const;

// The English table is the canonical set of keys.
export type UIKey = keyof (typeof ui)['en'];
