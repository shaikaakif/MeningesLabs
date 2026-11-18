import Link from "next/link";
import type { Metadata } from "next";
import { contactDetails, pages, routes, socialLinks } from "./content";
import FAQSection from "./faq-section";
import ContactBrief from "./contact-brief";
import LayersExplorer from "./layers-explorer";
import Reveal from "./reveal";
import { PageVisual } from "./system-visuals";
import { ClosingCTA, Deliverables, PageHero, RelatedLinks, SectionHead, Statement } from "./ui";
import { Icon } from "./icons";

export function pageMetadata(slug: string): Metadata {
  const route = routes.find((item) => item.slug === slug);
  if (!route) return {};
  const canonical = `/${slug}`;
  const shareImage = "/images/meninges-labs-ai-agency-social-preview.png";
  const title = `${route.title} — MENINGES LABS`;
  return {
    title: route.title,
    description: route.description,
    alternates: { canonical },
    robots: { index: route.noindex !== true, follow: true },
    openGraph: {
      type: "website",
      siteName: "MENINGES LABS",
      locale: "en_IN",
      title,
      description: route.description,
      url: `https://meningeslabs.com${canonical}`,
      images: [{ url: shareImage, width: 1200, height: 630, alt: "MENINGES LABS — engineering connected digital systems for business growth" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: route.description,
      images: [shareImage],
    },
  };
}

function ContactOptions() {
  return (
    <section className="section contact-section">
      <div className="wrap">
        <SectionHead
          eyebrow="Direct lines"
          title="Choose the channel that works."
          body="No gatekeeping. Use a direct channel, or send a short brief below. Either way, we start with the business problem."
        />
        <div className="contact-grid">
          <a className="contact-card contact-whatsapp" href={contactDetails.whatsapp} target="_blank" rel="noreferrer">
            <span className="contact-icon"><Icon name="message" size={22} /></span>
            <span><b>WhatsApp</b><small>Message ready to send</small></span>
            <Icon name="arrow-up-right" size={18} />
          </a>
          <a className="contact-card" href={contactDetails.tel}>
            <span className="contact-icon"><Icon name="phone" size={22} /></span>
            <span><b>Call</b><small>{contactDetails.phone}</small></span>
            <Icon name="arrow-up-right" size={18} />
          </a>
          <a className="contact-card" href={contactDetails.email}>
            <span className="contact-icon"><Icon name="mail" size={22} /></span>
            <span><b>Email</b><small>info@meningeslabs.com</small></span>
            <Icon name="arrow-up-right" size={18} />
          </a>
          {socialLinks.map((social) => (
            <a className="contact-card" href={social.href} key={social.label} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Icon name="instagram" size={22} /></span>
              <span><b>{social.label}</b><small>Follow along</small></span>
              <Icon name="arrow-up-right" size={18} />
            </a>
          ))}
        </div>
        <p className="contact-note">
          <Icon name="pin" size={15} /> Remote-first from Hyderabad, India. In-person meetings can be arranged by
          prior agreement. No walk-in office or public address.
        </p>
        <div className="contact-brief-wrap">
          <ContactBrief />
        </div>
      </div>
    </section>
  );
}

export default function PageContent({ slug }: { slug: string }) {
  const page = pages[slug];
  if (!page) return null;
  const route = routes.find((item) => item.slug === slug);
  const url = `https://meningeslabs.com${slug ? `/${slug}` : "/"}`;
  const pageName = (route?.title ?? "MENINGES LABS").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const isService = ["digital-engineering", "search-intelligence", "performance-marketing", "ai-automation", "growth-intelligence"].includes(slug);
  const routeIndex = String(routes.findIndex((item) => item.slug === slug) + 1).padStart(2, "0");
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": isService ? "Service" : "WebPage",
      "@id": `${url}#page`,
      url,
      name: pageName,
      description: route?.description,
      isPartOf: { "@id": "https://meningeslabs.com/#website" },
      ...(isService
        ? {
            provider: { "@id": "https://meningeslabs.com/#organization" },
            serviceType: pageName,
            areaServed: [{ "@type": "City", name: "Hyderabad" }, { "@type": "Country", name: "India" }],
          }
        : { about: { "@id": "https://meningeslabs.com/#organization" } }),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://meningeslabs.com/" },
        ...(slug ? [{ "@type": "ListItem", position: 2, name: pageName, item: url }] : []),
      ],
    },
  ];

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        visual={<PageVisual slug={slug} />}
        meta={[page.label, `MENINGES LABS / ${routeIndex}`]}
      >
        {slug === "contact" ? (
          <div className="hero-actions">
            <a className="btn btn-primary" href={contactDetails.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp us <Icon name="arrow-up-right" size={17} />
            </a>
            <a className="btn btn-outline" href={contactDetails.email}>
              Email the team <Icon name="mail" size={17} />
            </a>
          </div>
        ) : null}
        {page.statusItems?.length ? (
          <div className="status-tags">
            {page.statusItems.map((item) => (
              <span key={item}>{item} <b>In preparation</b></span>
            ))}
          </div>
        ) : null}
      </PageHero>

      {slug === "contact" ? <ContactOptions /> : null}

      {page.sections.map((section, index) => (
        <Reveal key={section.title}>
          <section className={`section editorial-section ${index % 2 === 1 ? "is-warm" : ""}`}>
            <div className="wrap editorial-grid">
              <div className="editorial-aside">
                <span className="editorial-number">{String(index + 1).padStart(2, "0")}</span>
                <p className="eyebrow">
                  <span className="eyebrow-dot" aria-hidden="true" />
                  {section.eyebrow}
                </p>
              </div>
              <div className="editorial-body">
                <h2 className="display section-title">{section.title}</h2>
                <p className="section-copy">{section.body}</p>
                {slug === "services" && index === 1 && page.steps?.length ? (
                  <div className="step-chips">
                    {page.steps.map((step, stepIndex) => (
                      <span key={step}><i>{String(stepIndex + 1).padStart(2, "0")}</i>{step}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        </Reveal>
      ))}

      {slug === "services" ? <LayersExplorer /> : null}

      {page.cards?.length ? <Deliverables cards={page.cards} eyebrow={slug === "services" ? "The five divisions" : "What the work can include"} /> : null}

      {slug === "work" || slug === "insights" ? (
        <section className="section status-section">
          <div className="wrap">
            <div className="status-panel">
              <span className="status-icon"><Icon name={slug === "work" ? "layers" : "file"} size={24} /></span>
              <div>
                <h2 className="display">This section is being prepared properly.</h2>
                <p>
                  {slug === "work"
                    ? "We will publish project work, testimonials and client results only when the details are approved for sharing and supported by clear evidence. No placeholder projects are presented as completed work."
                    : "This space is reserved for reviewed writing on engineering, search, paid growth and automation. No placeholder articles are presented as published work."}
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {page.related?.length ? <RelatedLinks slugs={page.related} /> : null}

      {page.quote ? (
        <Statement
          quote={page.quote}
          attribution={page.quoteBy ?? "MENINGES LABS"}
          variant={slug === "about" ? "orange" : "dark"}
        />
      ) : null}

      {page.faqGroups?.length ? <FAQSection groups={page.faqGroups} limit={slug === "contact" ? 6 : undefined} id={slug === "services" ? "faq" : undefined} /> : null}

      {slug !== "contact" ? <ClosingCTA /> : null}
    </main>
  );
}
