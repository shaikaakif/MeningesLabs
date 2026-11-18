import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "../faq-section";
import Reveal from "../reveal";
import { PageVisual } from "../system-visuals";
import { ClosingCTA, PageHero, SectionHead, Statement } from "../ui";
import { Icon } from "../icons";

const pageUrl = "https://meningeslabs.com/about";
const shareImage = "/images/meninges-labs-ai-agency-social-preview.png";
const pageDescription =
  "MENINGES LABS is a digital engineering and growth partner — not a medical organisation. Learn how we connect software, AI, automation, search and growth into practical systems.";

export const metadata: Metadata = {
  title: { absolute: "About MENINGES LABS — Digital Engineering & Growth Partner" },
  description: pageDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "MENINGES LABS",
    locale: "en_IN",
    title: "About MENINGES LABS — Digital Engineering & Growth Partner",
    description: pageDescription,
    url: pageUrl,
    images: [{ url: shareImage, width: 1200, height: 630, alt: "MENINGES LABS — digital engineering and growth partner" }],
  },
  twitter: { card: "summary_large_image", title: "About MENINGES LABS", description: pageDescription, images: [shareImage] },
};

const problems = [
  { title: "Fragmented digital work", body: "A website, search, paid media and automation are often treated as separate projects. The gaps between them become the problem." },
  { title: "Weak digital foundations", body: "Unclear structure, slow pages and inconsistent content make every later acquisition or automation effort harder." },
  { title: "Invisible expertise", body: "Search engines and answer engines cannot surface a business whose information is unclear, unstructured or difficult to verify." },
  { title: "Leaky acquisition journeys", body: "Campaign traffic is wasted when the offer, landing experience, follow-up and measurement do not connect." },
  { title: "Repetitive operations", body: "Enquiries, qualification, scheduling and follow-ups consume time that should go to higher-value work." },
  { title: "Unclear priorities", body: "Activity without a diagnosis, sequence or measurement plan makes it difficult to know what to improve next." },
];

const capabilities = [
  { title: "SaaS & software development", body: "Custom platforms, portals, dashboards, applications, APIs and integrations engineered around a defined operational need." },
  { title: "Website engineering", body: "Business websites, landing pages and redesigns with clear content structure, maintainable front ends and considered performance." },
  { title: "Applied AI solutions", body: "Assistants and agents configured around approved business information, real system availability and clear escalation paths." },
  { title: "Intelligent automation", body: "Enquiry response, qualification, CRM updates, scheduling and follow-ups that reduce repetitive effort." },
  { title: "Search intelligence", body: "Technical and on-page SEO, local search, content architecture, structured data, AEO and GEO." },
  { title: "Performance marketing", body: "Campaign strategy, Meta and Google advertising, creative direction, landing experiences and measurement." },
  { title: "Growth consulting", body: "Digital audits, customer-journey analysis, analytics and a practical sequence of priorities." },
];

export default function AboutPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${pageUrl}#page`,
      url: pageUrl,
      name: "About MENINGES LABS",
      description: pageDescription,
      isPartOf: { "@id": "https://meningeslabs.com/#website" },
      about: { "@id": "https://meningeslabs.com/#organization" },
      primaryImageOfPage: { "@type": "ImageObject", url: `https://meningeslabs.com${shareImage}`, width: 1200, height: 630 },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://meningeslabs.com/" },
        { "@type": "ListItem", position: 2, name: "About", item: pageUrl },
      ],
    },
  ];

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="About MENINGES LABS"
        title="Engineering growth<br/>with <em>intent.</em>"
        intro="MENINGES LABS is a digital engineering and growth partner. We connect software, applied AI, automation, search and performance around the way a business actually operates."
        visual={<PageVisual slug="about" />}
        meta={["Digital engineering & growth", "Hyderabad, India · Remote-first"]}
      >
        <p className="callout-note">
          <Icon name="shield" size={18} />
          <span>
            <strong>A note on the name:</strong> MENINGES LABS is a digital engineering brand. It is not a medical
            company and has no affiliation with the anatomical meninges.
          </span>
        </p>
      </PageHero>

      <section className="section editorial-section">
        <div className="wrap editorial-grid">
          <div className="editorial-aside">
            <span className="editorial-number">01</span>
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />Who we are</p>
          </div>
          <div className="editorial-body">
            <h2 className="display section-title">A connected practice,<br/>not a list of <em>services.</em></h2>
            <p className="section-copy">
              MENINGES LABS combines software engineering, website development, applied AI, automation, search
              intelligence, performance marketing and growth consulting. These are capabilities we assemble around
              a business need — not a fixed package every client must buy.
            </p>
            <p className="section-copy">
              Our work starts with the business: what it offers, who it serves, what is already in place and where
              the friction sits. Then we scope the smallest useful system that can address the real constraint.
            </p>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section problem-section">
          <div className="wrap">
            <SectionHead
              eyebrow="The problems"
              title="Growth breaks between<br/>the <em>pieces.</em>"
              body="Most digital problems are not caused by one missing tool. They appear in the gaps between strategy, engineering, discovery, conversion and operations."
            />
            <div className="problem-grid">
              {problems.map((problem, index) => (
                <article key={problem.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{problem.title}</h3>
                  <p>{problem.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section editorial-section is-warm">
        <div className="wrap editorial-grid">
          <div className="editorial-aside">
            <span className="editorial-number">02</span>
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />Why we exist</p>
          </div>
          <div className="editorial-body">
            <h2 className="display section-title">Technology should<br/>serve the <em>business.</em></h2>
            <p className="section-copy">
              Digital growth is often sold as disconnected deliverables: a website here, a campaign there, a
              chatbot added later. That approach creates activity without a system.
            </p>
            <p className="section-copy">
              MENINGES LABS exists to connect those pieces. Technology should answer a business problem, fit the
              way a team works and remain understandable after launch. The goal is a clearer path from visibility
              to enquiry, from enquiry to customer, and from repetitive work to reliable operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section capability-list-section">
        <div className="wrap">
          <SectionHead
            eyebrow="Our capabilities"
            title="Seven disciplines.<br/>One <em>connected system.</em>"
            body="Each capability can stand alone where that is the right scope. Their value increases when they are designed to work together."
          />
          <div className="capability-list">
            {capabilities.map((capability, index) => (
              <article key={capability.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section principle-section">
        <div className="wrap">
          <SectionHead
            eyebrow="How it connects"
            title="Build. Acquire. Convert.<br/>Automate. <em>Optimise.</em>"
            body="A digital foundation makes the business understandable. Search and paid media create relevant attention. Landing experiences and follow-up turn attention into conversations. Automation keeps the repetitive parts consistent. Measurement shows what deserves the next investment."
          />
          <div className="principle-rail">
            {["Build", "Acquire", "Convert", "Automate", "Optimise"].map((principle, index) => (
              <div key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{principle}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Statement
        quote="“The Architecture of Autopilot” is our name for connected digital systems: engineering, discovery, conversion and operations designed to work together. It is an ambition, not a promise that a business runs without people or oversight."
        attribution="Our operating philosophy"
        variant="orange"
      />

      <section className="section founder-link-section">
        <div className="wrap founder-link">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />The person behind it</p>
            <h2 className="display section-title">Built with a founder&rsquo;s<br/><em>hands on it.</em></h2>
            <p className="section-copy">
              MENINGES LABS was founded by Aakif, who serves as Founder and AI Product Developer. His work centres
              on software products, applied AI, automation and practical digital systems.
            </p>
            <Link className="btn btn-dark" href="/founder">Visit the Founder&rsquo;s Desk <Icon name="arrow-up-right" size={17} /></Link>
          </div>
          <div className="founder-link-card">
            <img src="/brand-assets/photography/aakif-founder-meninges-labs-portrait.jpg" alt="Aakif, founder and AI product developer at MENINGES LABS" width="480" height="640" loading="lazy" />
            <span>Aakif · Founder &amp; AI Product Developer</span>
          </div>
        </div>
      </section>

      <FAQSection groups={["About Meninges Labs"]} id="faq" />
      <ClosingCTA />
    </main>
  );
}
