import Link from "next/link";
import type { ReactNode } from "react";
import { routes } from "./content";
import type { Card } from "./content";
import { Icon } from "./icons";

export function SectionHead({
  eyebrow,
  title,
  body,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`section-head ${tone === "dark" ? "is-dark" : ""}`}>
      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        {eyebrow}
      </p>
      <div className="section-head-copy">
        <h2 className="display section-title" dangerouslySetInnerHTML={{ __html: title }} />
        {body ? <p className="section-copy">{body}</p> : null}
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  visual,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  visual?: ReactNode;
  meta?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-grid">
        <div className="page-hero-copy">
          <p className="eyebrow reveal">
            <span className="eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="display page-title reveal delay" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="lead reveal delay-2">{intro}</p>
          {children}
          {meta?.length ? (
            <div className="page-meta">
              {meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}
        </div>
        {visual ? <div className="page-hero-visual reveal delay-2">{visual}</div> : null}
      </div>
    </section>
  );
}

const cardIcons = ["code", "search", "chart", "workflow", "compass"] as const;

export function Deliverables({ cards, eyebrow = "In scope" }: { cards: Card[]; eyebrow?: string }) {
  return (
    <section className="section deliverables-section">
      <div className="wrap">
        <SectionHead
          eyebrow={eyebrow}
          title="What the work can include."
          body="Every engagement is scoped around the business need. These are the common building blocks, not a mandatory bundle."
        />
        <div className="deliverable-grid">
          {cards.map((card, index) => (
            <article className="deliverable" key={card.title}>
              <div className="deliverable-top">
                <span className="mono-number">{card.number ?? String(index + 1).padStart(2, "0")}</span>
                <span className="deliverable-icon">
                  <Icon name={cardIcons[index % cardIcons.length]} size={19} />
                </span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {card.href ? (
                <Link className="text-link" href={card.href}>
                  Explore <Icon name="arrow-up-right" size={15} />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({ slugs }: { slugs: string[] }) {
  const items = slugs
    .map((slug) => routes.find((route) => route.slug === slug))
    .filter((route): route is (typeof routes)[number] => Boolean(route));
  if (!items.length) return null;
  return (
    <section className="section related-section">
      <div className="wrap">
        <SectionHead
          eyebrow="Keep exploring"
          title="The next useful page."
          body="Follow the connections between capabilities, local context and the people behind the work."
        />
        <div className="related-list">
          {items.map((route) => (
            <Link key={route.slug || "home"} href={route.slug ? `/${route.slug}` : "/"}>
              <span className="related-index">{String(routes.findIndex((item) => item.slug === route.slug) + 1).padStart(2, "0")}</span>
              <span className="related-name">{route.nav}</span>
              <span className="related-desc">{route.description}</span>
              <Icon name="arrow-up-right" size={18} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClosingCTA({
  title = "Let’s engineer the next useful system.",
  body = "Tell us what needs to work better. We will start with the business problem, then define a practical path forward.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section closing-section">
      <div className="wrap">
        <div className="closing">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Start a conversation
            </p>
            <h2 className="display" dangerouslySetInnerHTML={{ __html: title }} />
            <p>{body}</p>
          </div>
          <div className="closing-actions">
            <Link className="btn btn-primary" href="/contact">
              Discuss a project <Icon name="arrow-up-right" size={18} />
            </Link>
            <a className="closing-link" href="mailto:info@meningeslabs.com">
              info@meningeslabs.com
            </a>
            <a className="closing-link" href="tel:+917671979762">
              +91 7671979762
            </a>
          </div>
          <div className="closing-mark" aria-hidden="true">
            <img src="/brand-assets/logos/meninges-labs-monogram-white.png" alt="" width="828" height="485" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Statement({
  quote,
  attribution,
  variant = "dark",
}: {
  quote: string;
  attribution: string;
  variant?: "dark" | "orange";
}) {
  return (
    <section className="section statement-section">
      <div className="wrap">
        <div className={`statement statement-${variant}`}>
          <blockquote>{quote}</blockquote>
          <span>{attribution}</span>
        </div>
      </div>
    </section>
  );
}
