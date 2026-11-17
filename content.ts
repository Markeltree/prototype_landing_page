// All copy for the landing page lives here. Swap in your own brand, links and text.
// In `crawl` arrays, strings are normal words and { b: "..." } words light up green.

export type Crawl = (string | { b: string })[];

export const site = {
  brand: "Levo Studio",
  location: "Tübingen, Germany",
  title: "Rapid Software Prototyping & Prototype Development Services | Levo Studio",
  description:
    "Rapid software prototyping from Tübingen, Germany. We build a working software prototype in weeks, host it in Europe, and hand over all the code.",
  bookingUrl: "https://calendly.com/markeltree/30min",
  email: "contact@markeltree.com",
};

export const hero = {
  titleA: "Turn Your Idea Into a Working Software Prototype",
  titleB: "in Weeks",
  lede:
    "We build your software prototype and run it for you in Europe. No US cloud. No black boxes. You own all of it.",
  primaryCta: "Talk to an engineer",
  secondaryCta: "See what we build",
  footLeft: "Software built in Germany. Hosted in Europe.",
};

export const philosophy = {
  label: "01 — Philosophy",
  text: [
    "We do rapid software prototyping that stays honest: a working software prototype that is",
    { b: "reliable" }, ",",
    { b: "transparent" }, ",",
    { b: "entirely yours" }, ",",
    "hosted in Europe, and",
    { b: "never a black box" }, ".",
  ] as Crawl,
  followUp:
    "If the idea is good, the prototype becomes the product. If it isn’t, you find out in weeks, not after a year of building.",
};

export const whatIs = {
  title: "What is software prototyping?",
  text:
    "Software prototyping means building an early, working version of your product so you can test it with real users before committing to the full build. A software prototype can be a sketch, a clickable demo, or a live app with a real backend. The goal is to learn what works while changing course is still cheap.",
};

export const capabilitiesHead = { title: "What we build", eyebrow: "Capabilities" };

export type Capability = {
  num: string;
  eyebrow: string;
  title: string;
  text?: Crawl;
  points?: { b: string; t: string }[];
  link: { label: string; href: string };
  diagram: "stack" | "browser" | "pipeline" | "stages" | "grid";
};

export const capabilities: Capability[] = [
  {
    num: "02",
    eyebrow: "Capability",
    title: "Software prototype development",
    text: [
      "SaaS products, internal tools, APIs and the backends behind them, built first as a",
      { b: "working prototype" }, ". Production-grade code from day one, documented on the way in, and handed over",
      { b: "entirely yours" }, ": source, pipeline, runbook. Most prototypes are ready to test in",
      { b: "two to six weeks" }, ".",
    ],
    link: { label: "Scope a prototype", href: "#kontakt" },
    diagram: "stack",
  },
  {
    num: "03",
    eyebrow: "Capability",
    title: "Prototype development services for web",
    text: [
      "Clickable and working web app prototypes that load in",
      { b: "under a second" }, "on real connections. Server-rendered, accessible, measured.",
      { b: "No third-party trackers" }, ", no cookie theatre. Put it in front of real users in the first weeks.",
    ],
    link: { label: "See a build", href: "#kontakt" },
    diagram: "browser",
  },
  {
    num: "04",
    eyebrow: "Capability",
    title: "Managed hosting, privacy-first",
    text: [
      "Your prototype runs on Scaleway in Amsterdam, a European cloud from France. They rent out the building blocks;",
      { b: "we manage everything on top" }, ": database, storage, domains, updates, monitoring, backups.",
      { b: "From idea to operation, in the EU." },
    ],
    link: { label: "See the stack", href: "#kontakt" },
    diagram: "pipeline",
  },
  {
    num: "05",
    eyebrow: "Capability",
    title: "Benefits of rapid software prototyping",
    points: [
      { b: "Lower risk.", t: "Validate demand and usability before you fund the full build." },
      { b: "Faster decisions.", t: "Stakeholders react to something real, not a slide deck." },
      { b: "Lower cost.", t: "Fixing a wrong assumption costs days in a prototype, months in production." },
      { b: "Better requirements.", t: "User feedback replaces guesses, so the final scope is smaller." },
      { b: "No rebuild.", t: "Clean, documented code means the prototype can grow into the product." },
    ],
    link: { label: "Scope a build", href: "#kontakt" },
    diagram: "stages",
  },
  {
    num: "06",
    eyebrow: "Infrastructure",
    title: "One jurisdiction. No US cloud.",
    text: [
      "Your prototype and its data stay under",
      { b: "European law" }, ", with no US parent company behind it. Standby databases, automatic backups.",
      { b: "Amsterdam. Not Virginia." },
    ],
    link: { label: "Status & uptime", href: "#" },
    diagram: "grid",
  },
];

export const cta = {
  label: "07 — Contact",
  command: "talk to an engineer_",
  note: "Reply within one working day, from the person who would write the code.",
  teaserQ: "Curious who’s actually behind Levo Studio?",
  teaserWink: "(a real human)",
};

export const footerLinks = [
  { label: "About", href: "#" },
  { label: "Legal Notice", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Status/Uptime", href: "#" },
];
