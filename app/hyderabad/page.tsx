import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "../faq-section";

const pageUrl = "https://meningeslabs.com/hyderabad";
const shareImage = "/images/meninges-labs-ai-agency-social-preview.png";
const pageDescription = "AI-powered digital growth for Hyderabad businesses: websites, SaaS, applied AI, automation, SEO/AEO/GEO and performance marketing. Remote-first.";

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
    images: [{ url: shareImage, width: 1200, height: 630, type: "image/png", alt: "MENINGES LABS — AI-powered digital growth services for businesses in Hyderabad" }],
  },
  twitter: { card: "summary_large_image", title: "AI & Digital Growth Services in Hyderabad | MENINGES LABS", description: pageDescription, images: [shareImage] },
};

const capabilities = [
  { title: "Website design & development", body: "Business websites, landing pages and redesigns with clear content, responsive layouts and a straightforward path to enquiry.", href: "/digital-engineering" },
  { title: "SaaS & custom software", body: "Products, portals, dashboards, applications and integrations built around a defined operational or commercial need.", href: "/digital-engineering" },
  { title: "SEO, AEO & GEO", body: "Technical SEO, content architecture, structured data, local relevance and AI-search readiness for Google, answer engines and generative tools.", href: "/search-intelligence" },
  { title: "Performance marketing", body: "Meta and Google campaign strategy, creative direction, landing experiences and measurement connected to the same digital foundation.", href: "/performance-marketing" },
  { title: "Applied AI & automation", body: "Enquiry handling, lead qualification, CRM updates, scheduling and operational workflows with clear rules and human oversight.", href: "/ai-automation" },
  { title: "Growth consulting", body: "Digital audits, customer-journey analysis, growth roadmaps and technology decisions grounded in evidence rather than assumptions.", href: "/growth-intelligence" },
];

const steps = ["Enquire", "Discover", "Scope", "Deliver", "Measure"];

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
      name: "AI-powered digital growth services for Hyderabad businesses",
      serviceType: "Digital growth, website engineering, SaaS, applied AI, automation, SEO, AEO, GEO and performance marketing",
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

      <section className="page-hero">
        <p className="eyebrow reveal">Hyderabad · Digital Growth &amp; Intelligence</p>
        <h1 className="display reveal delay" dangerouslySetInnerHTML={{ __html: "AI-powered digital growth,<br/>built for <em>Hyderabad.</em>" }} />
        <p className="intro reveal delay">MENINGES LABS works with businesses in Hyderabad and across India. We combine website engineering, SaaS, applied AI, automation, search intelligence and performance marketing into practical digital systems.</p>
        <p className="brand-clarifier"><strong>How we work locally:</strong> We operate remote-first. Meetings can be arranged online or in person by prior agreement. MENINGES LABS does not list a customer-facing office, walk-in address or Google Business Profile.</p>
        <div className="hero-meta"><span>Hyderabad, Telangana · Remote-first</span><span className="hero-index">SERVING HYDERABAD &amp; INDIA</span></div>
      </section>

      <section className="content-section">
        <div className="section-inner">
          <p className="eyebrow">Why Hyderabad</p>
          <div>
            <h2 className="display section-title">A connected approach<br/>for a competitive <em>market.</em></h2>
            <p className="section-copy">Hyderabad businesses often operate across several channels at once: a website, search results, paid campaigns, WhatsApp enquiries and internal follow-up. We look at how those pieces connect, then scope the work that removes the most useful constraint.</p>
            <p className="section-copy">The city has a broad business base across technology, professional services, real estate, architecture, healthcare, manufacturing and hospitality. The right scope depends on the specific business, not an industry template.</p>
          </div>
        </div>
      </section>

      <section className="content-section surface">
        <div className="section-inner">
          <p className="eyebrow">What we help with</p>
          <div>
            <h2 className="display section-title">Capabilities for<br/>Hyderabad <em>businesses.</em></h2>
            <p className="section-copy">Start with one service or connect several where they need to work together. Every engagement is scoped around the business, the existing infrastructure and the outcome that matters.</p>
          </div>
        </div>
        <div className="card-grid">
          {capabilities.map((capability, index) => (
            <article className="service-card" key={capability.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3 className="display">{capability.title}</h3>
              <p>{capability.body}</p>
              <Link className="arrow-link" href={capability.href}>Explore <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner">
          <p className="eyebrow">Local search, honestly</p>
          <div>
            <h2 className="display section-title">Relevance without<br/>invented <em>locations.</em></h2>
            <p className="section-copy">We do not claim a Hyderabad office, a locality address or a Google Business Profile. Local relevance is built through accurate service information, clear area-served context, useful content and a consistent brand entity.</p>
            <p className="section-copy">For eligible businesses with real physical locations, local SEO work would follow their actual circumstances. We avoid creating near-identical pages for every Hyderabad locality; one useful page is better than a doorway network.</p>
          </div>
        </div>
      </section>

      <section className="content-section surface">
        <div className="section-inner">
          <p className="eyebrow">How projects begin</p>
          <div>
            <h2 className="display section-title">A clear sequence.<br/>No assumed <em>scope.</em></h2>
            <p className="section-copy">Discovery, design reviews and project updates can run online. Where an in-person meeting is useful, it can be arranged by prior agreement. The process stays the same whether the work is local or remote.</p>
          </div>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <article key={step}>
              <span>0{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <FAQSection groups={["Hyderabad & local search"]} id="faq" />

      <section className="next-step">
        <div>
          <p className="eyebrow">A useful next step</p>
          <h2 className="display">Talk through<br/>the actual need.</h2>
          <Link className="arrow-link" href="/contact">Contact Meninges Labs <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}
