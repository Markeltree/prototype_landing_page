"use client";

import { useEffect } from "react";

// Colours the words fade between while the "crawl" text reveals.
const GREEN = [8, 191, 99];
const WHITE = [255, 255, 255];
const DIM = [78, 78, 74];

const clamp = (v: number) => Math.max(0, Math.min(1, v));

/** Prepare an SVG shape so it can be "drawn" by animating stroke-dashoffset. */
function prepDraw(el: SVGGeometryElement) {
  if (el.dataset.d) return;
  el.dataset.d = "1";
  try {
    const len = el.getTotalLength ? el.getTotalLength() : 0;
    if (len > 0) {
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len);
    } else el.style.opacity = "0";
  } catch {
    el.style.opacity = "0";
  }
}

/** Apply a 0..1 scroll progress to one pinned section. */
function paintSection(section: HTMLElement, t: number) {
  // 1) Word-by-word blur/colour reveal.
  section.querySelectorAll<HTMLElement>("p.crawl").forEach((p) => {
    const [a, b] = (p.dataset.range || "0,1").split(",").map(Number);
    const u = clamp((t - a) / (b - a));
    const words = p.querySelectorAll<HTMLElement>(".w");
    const head = u * (words.length + 2.2);
    words.forEach((w, i) => {
      const x = clamp((head - i) / 2.2);
      const s = x * x * (3 - 2 * x); // smoothstep
      const target = w.dataset.a ? GREEN : WHITE;
      const c = target.map((v, k) => Math.round(DIM[k] + (v - DIM[k]) * s));
      w.style.filter = `blur(${((1 - s) * 8).toFixed(2)}px)`;
      w.style.opacity = (0.22 + 0.78 * s).toFixed(3);
      w.style.color = `rgb(${c[0]},${c[1]},${c[2]})`;
    });
  });

  // 2) SVG line drawing, staggered per element.
  const draws = section.querySelectorAll<SVGGeometryElement>(".draw");
  const n = draws.length;
  draws.forEach((el, i) => {
    const k = clamp((1.5 * t - 0.05 - (i / n) * 0.35) * 2.2);
    const dash = parseFloat(el.style.strokeDasharray);
    if (dash) el.style.strokeDashoffset = (dash * (1 - k)).toFixed(1);
    else el.style.opacity = k.toFixed(2);
  });

  // 3) Progress bar.
  const fill = section.querySelector<HTMLElement>("[data-pinfill]");
  if (fill) fill.style.width = `${(100 * t).toFixed(1)}%`;
}

/** Hero content fades and drifts up as you scroll away. */
function paintHero(scroll: number) {
  const el = document.querySelector<HTMLElement>(".hero-in");
  if (!el) return;
  el.style.opacity = clamp(1 - scroll / (0.85 * window.innerHeight)).toFixed(3);
  el.style.transform = `translateY(${(-0.12 * scroll).toFixed(1)}px)`;
}

export default function ScrollFx() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pins = [...document.querySelectorAll<HTMLElement>("[data-pin]")];

    if (reduced) {
      document.querySelectorAll<HTMLElement>("p.crawl .w").forEach((w) => {
        const c = w.dataset.a ? GREEN : WHITE;
        w.style.filter = "none";
        w.style.opacity = "1";
        w.style.color = `rgb(${c[0]},${c[1]},${c[2]})`;
      });
      document.querySelectorAll<HTMLElement>("[data-pinfill]").forEach((f) => (f.style.width = "100%"));
      return;
    }

    let disposed = false;
    let lenis: import("lenis").default | null = null;
    let gsapRef: typeof import("gsap").gsap | null = null;
    let tick: ((time: number) => void) | null = null;
    let onClick: ((e: MouseEvent) => void) | null = null;
    const triggers: { kill: () => void }[] = [];

    // Paint the initial state synchronously so nothing flashes before libraries load.
    pins.forEach((s) => s.querySelectorAll<SVGGeometryElement>(".draw").forEach(prepDraw));
    pins.forEach((s) => {
      const r = s.getBoundingClientRect();
      const range = r.height - window.innerHeight;
      paintSection(s, range <= 0 ? +(r.top < 0.5 * window.innerHeight) : clamp(-r.top / range));
    });
    paintHero(window.scrollY);

    (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed) return;

      gsapRef = gsap;
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({ duration: 1.1, easing: (x) => 1 - Math.pow(1 - x, 3), autoRaf: false });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time) => lenis?.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      pins.forEach((s) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: s,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (st) => paintSection(s, st.progress),
            onRefresh: (st) => paintSection(s, st.progress),
          }),
        );
      });

      const hero = document.querySelector(".levo-hero");
      if (hero) {
        triggers.push(
          ScrollTrigger.create({
            trigger: hero,
            start: "top top",
            end: "bottom top",
            onUpdate: (st) => paintHero(st.scroll()),
            onRefresh: (st) => paintHero(st.scroll()),
          }),
        );
      }
      ScrollTrigger.refresh();

      // Smooth, distance-aware scrolling for in-page anchor links.
      onClick = (e) => {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
        const a = (e.target as Element | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
        if (!a) return;
        const href = a.getAttribute("href");
        if (!href || href.length < 2) return;

        let y: number;
        if (a.dataset.luxTarget === "first-card-end") {
          const card = document.querySelector<HTMLElement>(".levo-card[data-pin]");
          if (!card) return;
          y = card.getBoundingClientRect().top + window.scrollY + 0.82 * Math.max(0, card.offsetHeight - window.innerHeight);
        } else {
          const target = document.querySelector(href);
          if (!target) return;
          y = target.getBoundingClientRect().top + window.scrollY;
        }
        e.preventDefault();
        const duration = Math.min(8, Math.max(1.5, Math.abs(y - window.scrollY) / 850));
        lenis?.scrollTo(y, { duration, easing: (x) => -(Math.cos(Math.PI * x) - 1) / 2 });
      };
      document.addEventListener("click", onClick);
    })();

    return () => {
      disposed = true;
      if (onClick) document.removeEventListener("click", onClick);
      triggers.forEach((t) => t.kill());
      if (gsapRef && tick) gsapRef.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);

  return null;
}
