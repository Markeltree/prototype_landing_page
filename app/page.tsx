import ScrollFx from "@/components/ScrollFx";
import { CrawlText } from "@/components/CrawlText";
import { Diagram } from "@/components/Diagrams";
import {
  site,
  hero,
  philosophy,
  whatIs,
  capabilitiesHead,
  capabilities,
  portfolio,
  cta,
  footerLinks,
} from "@/content";

const external = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export default function Home() {
  return (
    <main className="levo-landing">
      <div className="levo-grain" aria-hidden="true" />

      <header className="levo-header">
        <a href="/" className="levo-header__logo" aria-label="Markeltree home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/markeltree-logo.png" alt="Markeltree" width={534} height={120} />
        </a>
        <a
          className="levo-header__cta"
          href={site.bookingUrl}
          {...external(site.bookingUrl)}
        >
          {hero.primaryCta}
        </a>
      </header>

      {/* Hero */}
      <section className="levo-hero" aria-labelledby="hero-title">
        <div className="levo-hero__glow" aria-hidden="true" />
        <div className="hero-in">
          <p className="levo-hero__meta">
            <span className="levo-hero__dot" aria-hidden="true" />
            <span>{site.brand}</span>
            <span className="levo-hero__sep" aria-hidden="true">
              /
            </span>
            <span>{site.location}</span>
          </p>
          <h1 id="hero-title" className="levo-hero__title">
            <span>{hero.titleA}</span>{" "}
            <span className="levo-hero__title-dim">{hero.titleB}</span>
          </h1>
          <p className="levo-hero__lede">{hero.lede}</p>
          <div className="levo-hero__actions">
            <a
              className="levo-btn"
              href={site.bookingUrl}
              {...external(site.bookingUrl)}
            >
              {hero.primaryCta}
            </a>
            <a
              className="levo-hero__textlink"
              href="#leistungen"
              data-lux-target="first-card-end"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="levo-hero__foot" aria-hidden="true">
          <span>{hero.footLeft}</span>
          <span className="levo-hero__scroll">
            Scroll <span />
          </span>
        </div>
      </section>

      {/* Philosophy (pinned, word reveal) */}
      <section
        className="levo-pin levo-philosophy"
        data-pin="true"
        aria-labelledby="philosophy-text"
      >
        <div className="levo-pin__sticky">
          <div className="levo-philosophy__glow" aria-hidden="true" />
          <p className="levo-eyebrow levo-philosophy__label">
            {philosophy.label}
          </p>
          <CrawlText
            id="philosophy-text"
            className="levo-philosophy__text"
            range="0.06,0.86"
            parts={philosophy.text}
          />
          <p className="levo-philosophy__follow">{philosophy.followUp}</p>
          <div className="levo-pinbar">
            <span className="levo-pinbar__fill" data-pinfill="true" />
          </div>
        </div>
      </section>

      {/* What is software prototyping */}
      <section className="levo-whatis" aria-labelledby="whatis-title">
        <h2 id="whatis-title">{whatIs.title}</h2>
        <p>{whatIs.text}</p>
      </section>

      <div id="leistungen" className="levo-leistungen-head">
        <h2>{capabilitiesHead.title}</h2>
        <span className="levo-eyebrow">{capabilitiesHead.eyebrow}</span>
      </div>

      {/* Capability cards (pinned, stacked) */}
      {capabilities.map((c, i) => (
        <section
          key={c.num}
          className="levo-pin levo-card"
          data-pin="true"
          aria-labelledby={`cap-${i}`}
        >
          <div className="levo-card__sticky">
            <div>
              <p className="levo-card__tag">
                <span className="levo-card__num">{c.num}</span>
                <span className="levo-eyebrow">{c.eyebrow}</span>
              </p>
              <h3 id={`cap-${i}`}>{c.title}</h3>
              {c.text && (
                <CrawlText
                  className="levo-card__text"
                  range="0.1,0.78"
                  parts={c.text}
                />
              )}
              {c.points && (
                <ul className="levo-card__points">
                  {c.points.map((pt) => (
                    <li key={pt.b}>
                      <strong>{pt.b}</strong> {pt.t}
                    </li>
                  ))}
                </ul>
              )}
              <a
                className="levo-card__link"
                href={c.link.href}
                {...external(c.link.href)}
              >
                {c.link.label} <span aria-hidden="true">→</span>
              </a>
            </div>
            <Diagram kind={c.diagram} />
          </div>
        </section>
      ))}

      {/* Portfolio */}
      <section id="portfolio" className="levo-work" aria-labelledby="work-title">
        <div className="levo-work__head">
          <div>
            <p className="levo-eyebrow">{portfolio.label}</p>
            <h2 id="work-title">{portfolio.title}</h2>
          </div>
        </div>
        <ul className="levo-work__grid">
          {portfolio.items.map((p) => (
            <li key={p.name}>
              <div className="levo-work__item">
                <span className="levo-work__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={`${p.name} case study`} loading="lazy" width={800} height={500} />
                </span>
                <span className="levo-work__meta">
                  {p.service} · {p.industry}
                </span>
                <span className="levo-work__name">{p.name}</span>
                <span className="levo-work__text">{p.text}</span>
                <span className="levo-work__stat">
                  <strong>{p.stat}</strong> {p.statLabel}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="kontakt" className="levo-cta" aria-labelledby="cta-link">
        <div className="levo-cta__glow" aria-hidden="true" />
        <p className="levo-eyebrow levo-cta__label">{cta.label}</p>
        <a
          id="cta-link"
          className="levo-cta__link"
          href={site.bookingUrl}
          {...external(site.bookingUrl)}
        >
          <span className="levo-cta__chevron" aria-hidden="true">
            &gt;
          </span>
          <span>{cta.command}</span>
          <span className="levo-cta__cursor" aria-hidden="true" />
        </a>
        <p className="levo-cta__note">{cta.note}</p>
        <a className="levo-cta__mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </section>

      <div className="levo-about-teaser">
        <a className="levo-about-teaser__link" href="#">
          <span className="levo-about-teaser__q">{cta.teaserQ}</span>
          <span className="levo-about-teaser__b">
            <span className="levo-about-teaser__wink">{cta.teaserWink}</span>
            <span className="levo-about-teaser__arrow" aria-hidden="true">
              →
            </span>
          </span>
        </a>
      </div>

      <footer className="levo-footer">
        {footerLinks.map((l) => (
          <a key={l.label} href={l.href}>
            {l.label}
          </a>
        ))}
      </footer>

      <ScrollFx />
    </main>
  );
}
