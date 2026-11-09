import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "../faq-section";

const pageUrl = "https://meningeslabs.com/about";
const shareImage = "/images/meninges-labs-ai-agency-social-preview.png";
const pageDescription = "MENINGES LABS is a digital growth, engineering and intelligence agency — not a medical organisation. Learn who we are, the problems we solve, our approach, and how seven connected capabilities form practical digital systems.";

export const metadata: Metadata = {
  title: { absolute: "About MENINGES LABS — Digital Growth, Engineering & Intelligence Agency" },
  description: pageDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "MENINGES LABS",
    locale: "en_IN",
    title: "About MENINGES LABS — Digital Growth, Engineering & Intelligence Agency",
    description: pageDescription,
    url: pageUrl,
    images: [{ url: shareImage, width: 1200, height: 630, type: "image/png", alt: "MENINGES LABS social preview — AI-powered digital and intelligence agency" }],
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
  { title: "SaaS & Software Development", body: "Custom SaaS platforms, business portals, dashboards, database-backed applications, APIs and integrations engineered around a defined operational need." },
  { title: "Website Engineering", body: "Business websites, landing pages and redesigns with a clear content structure, maintainable front end and considered performance." },
  { title: "Applied AI Solutions", body: "AI assistants and agents configured around approved business information, real system availability and clear escalation paths." },
  { title: "Intelligent Automations", body: "Enquiry response and routing, lead qualification, CRM updates, scheduling, follow-ups and internal workflows that reduce repetitive effort." },
  { title: "Search Intelligence — SEO, AEO & GEO", body: "Technical and on-page SEO, local search, content architecture, structured data, answer engine optimisation and generative engine optimisation." },
  { title: "Performance Marketing", body: "Campaign strategy, Meta and Google advertising, audience and offer planning, creative direction, landing experiences and measurement." },
  { title: "Digital Growth Strategy & Consulting", body: "Digital audits, growth roadmaps, customer journey analysis, analytics and a practical sequence of priorities." },
];

const principles = ["Build", "Acquire", "Convert", "Automate", "Optimise"];

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

      <section className="page-hero about-hero">
        <p className="eyebrow reveal">About MENINGES LABS</p>
        <h1 className="display reveal delay" dangerouslySetInnerHTML={{ __html: "Engineering growth<br/>with <em>intent.</em>" }} />
        <p className="intro reveal delay">MENINGES LABS is a digital growth, engineering and intelligence agency. We build digital products, earn search visibility, create acquisition journeys and design end-to-end automation around how a business actually operates.</p>
        <p className="brand-clarifier"><strong>A note on the name:</strong> MENINGES LABS is a digital agency brand. It is not a medical company and has no affiliation with the anatomical meninges, the membranes that surround the brain and spinal cord.</p>
        <div className="hero-meta"><span>Digital Growth &amp; Intelligence</span><span className="hero-index">THE ARCHITECTURE OF AUTOPILOT</span></div>
      </section>

      <section className="content-section">
        <div className="section-inner">
          <p className="eyebrow">Who we are</p>
          <div>
            <h2 className="display section-title">A connected practice,<br/>not a list of <em>services.</em></h2>
            <p className="section-copy">MENINGES LABS combines software engineering, website development, applied AI, automation, search intelligence, performance marketing and growth consulting. These are capabilities we assemble around a business need — not a fixed package that every client must buy.</p>
            <p className="section-copy">Our work starts with the business: what it offers, who it serves, what is already in place and where the friction sits. Then we scope the smallest useful system that can address the real constraint.</p>
          </div>
        </div>
      </section>

      <section className="content-section surface">
        <div className="section-inner">
          <p className="eyebrow">The problems</p>
          <div>
            <h2 className="display section-title">Growth breaks<br/>between the <em>pieces.</em></h2>
            <p className="section-copy">Most digital problems are not caused by one missing tool. They appear in the gaps between strategy, engineering, discovery, conversion and operations.</p>
          </div>
        </div>
        <div className="about-problem-grid">
          {problems.map((problem, index) => (
            <article key={problem.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3 className="display">{problem.title}</h3>
              <p>{problem.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner">
          <p className="eyebrow">Why we exist</p>
          <div>
            <h2 className="display section-title">Technology should<br/>serve the <em>business.</em></h2>
            <p className="section-copy">Digital growth is often sold as disconnected deliverables: a website here, a campaign there, a chatbot added later. That approach creates activity without a system.</p>
            <p className="section-copy">MENINGES LABS exists to connect those pieces. We believe technology should answer a business problem, fit the way a team works and remain understandable after launch. The goal is not to sell more tools. It is to engineer a clearer path from visibility to enquiry, from enquiry to customer, and from repetitive work to reliable operations.</p>
          </div>
        </div>
      </section>

      <section className="content-section service-list">
        <div className="section-inner">
          <p className="eyebrow">Our capabilities</p>
          <div>
            <h2 className="display section-title">Seven disciplines.<br/>One <em>connected system.</em></h2>
            <p className="section-copy">Each capability can stand alone where that is the right scope. Their value increases when they are designed to work together.</p>
          </div>
        </div>
        <div className="card-grid">
          {capabilities.map((capability, index) => (
            <article className="service-card capability-row" key={capability.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3 className="display">{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section surface">
        <div className="section-inner">
          <p className="eyebrow">How it connects</p>
          <div>
            <h2 className="display section-title">Build. Acquire.<br/>Convert. Automate.<br/><em>Optimise.</em></h2>
            <p className="section-copy">A digital foundation makes the business understandable. Search and paid media create relevant attention. Landing experiences and follow-up turn that attention into conversations. Automation keeps the repetitive parts consistent. Measurement shows what deserves the next investment.</p>
          </div>
        </div>
        <div className="steps">
          {principles.map((principle, index) => (
            <article key={principle}>
              <span>0{index + 1}</span>
              <h3>{principle}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <blockquote>“The Architecture of Autopilot” is our name for connected digital systems: engineering, discovery, conversion and operations designed to work together. It is an ambition, not a promise that a business runs without people or oversight.</blockquote>
        <span>OUR OPERATING PHILOSOPHY</span>
      </section>

      <section className="content-section">
        <div className="section-inner">
          <p className="eyebrow">The person behind it</p>
          <div>
            <h2 className="display section-title">Built with a<br/>founder&rsquo;s <em>hands on it.</em></h2>
            <p className="section-copy">MENINGES LABS was founded by Aakif, who serves as Founder and AI Product Developer. His work centres on software products, applied AI, automation and practical digital systems.</p>
            <Link className="arrow-link" href="/founder">Visit the Founder&rsquo;s Desk <span>↗</span></Link>
          </div>
        </div>
      </section>

      <FAQSection groups={["About Meninges Labs"]} id="faq" />

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
