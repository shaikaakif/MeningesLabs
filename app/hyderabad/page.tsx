import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "../faq-section";
import Reveal from "../reveal";
import { PageVisual } from "../system-visuals";
import { ClosingCTA, PageHero, SectionHead } from "../ui";
import { Icon } from "../icons";

const pageUrl = "https://meningeslabs.com/hyderabad";
const shareImage = "/images/meninges-labs-ai-agency-social-preview.png";
const pageDescription =
  "Digital engineering, applied AI, automation, SEO/AEO/GEO and performance marketing for Hyderabad businesses. Remote-first delivery from MENINGES LABS.";

export const metadata: Metadata = {
  title: { absolute: "AI & Digital Growth Services in Hyderabad | MENINGES LABS" },
  description: pageDescription,
  alternates: { canonical: "/hyderabad" },
  openGraph: {
    type: "website",
    siteName: "MENINGES LABS",
    locale: "en_IN",
    title: "AI & Digital Growth Services in Hyderabad | MENINGES LABS",
    description: pageDescription,
    url: pageUrl,
    images: [{ url: shareImage, width: 1200, height: 630, alt: "MENINGES LABS — digital engineering and growth partner in Hyderabad" }],
  },
  twitter: { card: "summary_large_image", title: "AI & Digital Growth Services in Hyderabad | MENINGES LABS", description: pageDescription, images: [shareImage] },
};

const capabilities = [
  {
    title: "Website engineering",
    body: "Business websites, landing pages and redesigns with clear content, responsive layouts and a direct path to enquiry.",
    href: "/digital-engineering",
    icon: "code" as const,
  },
  {
    title: "SaaS & custom software",
    body: "Products, portals, dashboards, applications and integrations built around a defined operational or commercial need.",
    href: "/digital-engineering",
    icon: "database" as const,
  },
  {
    title: "Search intelligence",
    body: "Technical SEO, content architecture, structured data, local relevance and readiness for answer engines and generative search.",
    href: "/search-intelligence",
    icon: "search" as const,
  },
  {
    title: "Performance marketing",
    body: "Meta and Google campaign strategy, creative direction, landing experiences and measurement connected to the same foundation.",
    href: "/performance-marketing",
    icon: "chart" as const,
  },
  {
    title: "Applied AI & automation",
    body: "Enquiry handling, qualification, CRM updates, scheduling and operational workflows with clear rules and human oversight.",
    href: "/ai-automation",
    icon: "workflow" as const,
  },
  {
    title: "Growth intelligence",
    body: "Digital audits, customer-journey analysis, roadmaps and technology decisions grounded in evidence rather than assumptions.",
    href: "/growth-intelligence",
    icon: "compass" as const,
  },
];

const steps = [
  { title: "Enquire", body: "Share the business, the current setup and what needs to work better." },
  { title: "Discover", body: "Review the audience, systems, channels and the constraint worth solving first." },
  { title: "Scope", body: "Agree deliverables, dependencies, responsibilities, costs and measures." },
  { title: "Engineer", body: "Build, integrate, test and hand over the agreed system." },
  { title: "Improve", body: "Review evidence, fix friction and define any ongoing support explicitly." },
];

export default function HyderabadPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#page`,
      url: pageUrl,
      name: "AI & Digital Growth Services in Hyderabad",
      description: pageDescription,
      isPartOf: { "@id": "https://meningeslabs.com/#website" },
      about: { "@id": "https://meningeslabs.com/#organization" },
      mainEntity: { "@id": `${pageUrl}#service` },
      primaryImageOfPage: { "@type": "ImageObject", url: `https://meningeslabs.com${shareImage}`, width: 1200, height: 630 },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Digital engineering, AI and growth services for Hyderabad businesses",
      serviceType: "Website engineering, SaaS, applied AI, automation, SEO, AEO, GEO and performance marketing",
      description: pageDescription,
      provider: { "@id": "https://meningeslabs.com/#organization" },
      areaServed: { "@type": "City", name: "Hyderabad", containedInPlace: { "@type": "State", name: "Telangana" } },
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://meningeslabs.com/" },
        { "@type": "ListItem", position: 2, name: "Hyderabad", item: pageUrl },
      ],
    },
  ];

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        eyebrow="Hyderabad · Digital engineering & growth"
        title="Built for the way<br/>Hyderabad does <em>business.</em>"
        intro="MENINGES LABS works with businesses in Hyderabad and across India. We connect website engineering, SaaS, applied AI, automation, search and performance into systems shaped around the actual work."
        visual={<PageVisual slug="hyderabad" />}
        meta={["Hyderabad, Telangana · Remote-first", "Serving businesses across India"]}
      >
        <p className="callout-note">
          <Icon name="pin" size={18} />
          <span>
            <strong>How we work locally:</strong> remote-first delivery. Meetings can be arranged online or in person
            by prior agreement. There is no walk-in office, public address or Google Business Profile.
          </span>
        </p>
      </PageHero>

      <section className="section editorial-section">
        <div className="wrap editorial-grid">
          <div className="editorial-aside">
            <span className="editorial-number">01</span>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Why Hyderabad
            </p>
          </div>
          <div className="editorial-body">
            <h2 className="display section-title">
              A connected approach
              <br />
              for a competitive <em>market.</em>
            </h2>
            <p className="section-copy">
              Hyderabad businesses often operate across several channels at once: a website, search results, paid
              campaigns, WhatsApp enquiries and internal follow-up. When those pieces are built in isolation, the
              gaps become the constraint.
            </p>
            <p className="section-copy">
              The city has a broad business base across technology, professional services, real estate, architecture,
              healthcare, manufacturing and hospitality. The right scope depends on the specific business, not an
              industry template.
            </p>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section hyderabad-section">
          <div className="wrap">
            <SectionHead
              eyebrow="What we help with"
              title="Capabilities for<br/>Hyderabad <em>businesses.</em>"
              body="Start with one discipline or connect several where they need to work together. Every engagement is scoped around the business, the existing infrastructure and the outcome that matters."
            />
            <div className="hyderabad-grid">
              {capabilities.map((capability) => (
                <Link className="hyderabad-card" href={capability.href} key={capability.title}>
                  <span className="hyderabad-icon">
                    <Icon name={capability.icon} size={20} />
                  </span>
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                  <span className="text-link">
                    Explore <Icon name="arrow-up-right" size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section local-section">
        <div className="wrap local-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Local search, honestly
            </p>
            <h2 className="display section-title">
              Relevance without
              <br />
              invented <em>locations.</em>
            </h2>
          </div>
          <div className="local-copy">
            <p className="section-copy">
              We do not claim a Hyderabad office, a locality address or a Google Business Profile. Local relevance is
              built through accurate service information, clear area-served context, useful content and a consistent
              brand entity.
            </p>
            <p className="section-copy">
              For eligible businesses with real physical locations, local SEO work follows their actual circumstances.
              We avoid creating near-identical pages for every Hyderabad locality; one useful page is better than a
              doorway network.
            </p>
            <div className="local-points">
              <span><Icon name="check" size={15} /> Accurate area-served information</span>
              <span><Icon name="check" size={15} /> No invented addresses or reviews</span>
              <span><Icon name="check" size={15} /> No guaranteed rankings or AI citations</span>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section hyderabad-process-section">
          <div className="wrap">
            <SectionHead
              eyebrow="How projects begin"
              title="A clear sequence.<br/>No assumed <em>scope.</em>"
              body="Discovery, reviews and project updates can run online. Where an in-person meeting is useful, it can be arranged by prior agreement. The discipline stays the same whether the work is local or remote."
            />
            <div className="principle-rail">
              {steps.map((step, index) => (
                <div key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{step.title}</b>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <FAQSection groups={["Hyderabad & local search"]} id="faq" />
      <ClosingCTA
        title="Talk through<br/>the actual need."
        body="A short conversation about the business, the current setup and the constraint is enough to decide whether there is a useful next step."
      />
    </main>
  );
}
