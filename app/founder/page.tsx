import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FluxLines from "../flux-lines";

const pageUrl = "https://meningeslabs.com/founder";
const shareImage = "/images/meninges-labs-ai-agency-social-preview.png";
const portrait = "/brand-assets/photography/aakif-founder-meninges-labs-portrait.jpg";
const pageDescription = "Meet Aakif, founder and AI product developer at MENINGES LABS. A founder's note on software products, applied AI, automation and building practical digital systems.";

export const metadata: Metadata = {
  title: { absolute: "Aakif — Founder & AI Product Developer | MENINGES LABS" },
  description: pageDescription,
  alternates: { canonical: "/founder" },
  openGraph: {
    type: "profile",
    siteName: "MENINGES LABS",
    locale: "en_IN",
    title: "Aakif — Founder & AI Product Developer | MENINGES LABS",
    description: pageDescription,
    url: pageUrl,
    images: [{ url: shareImage, width: 1200, height: 630, type: "image/png", alt: "MENINGES LABS social preview — AI-powered digital and intelligence agency" }],
  },
  twitter: { card: "summary_large_image", title: "Aakif — Founder & AI Product Developer | MENINGES LABS", description: pageDescription, images: [shareImage] },
};

const focusAreas = [
  { title: "Software products", body: "Designing and building SaaS platforms, portals and applications with a defined job to do." },
  { title: "Applied AI", body: "Configuring assistants and agents around approved information, clear limits and human escalation." },
  { title: "Intelligent automation", body: "Connecting enquiries, CRM, scheduling and follow-ups into workflows a team can trust." },
  { title: "Connected systems", body: "Bringing engineering, search, acquisition and measurement into one coherent structure." },
];

export default function FounderPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${pageUrl}#page`,
      url: pageUrl,
      name: "Aakif — Founder & AI Product Developer at MENINGES LABS",
      description: pageDescription,
      isPartOf: { "@id": "https://meningeslabs.com/#website" },
      about: { "@id": "https://meningeslabs.com/#organization" },
      mainEntity: { "@id": "https://meningeslabs.com/#aakif" },
      primaryImageOfPage: { "@type": "ImageObject", url: `https://meningeslabs.com${portrait}`, width: 480, height: 640, caption: "Aakif, founder and AI product developer at MENINGES LABS" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://meningeslabs.com/#aakif",
      name: "Aakif",
      jobTitle: "Founder & AI Product Developer",
      worksFor: { "@id": "https://meningeslabs.com/#organization" },
      url: "https://shaikaakif.com",
      sameAs: ["https://shaikaakif.com"],
      image: { "@type": "ImageObject", url: `https://meningeslabs.com${portrait}`, width: 480, height: 640, caption: "Aakif, founder and AI product developer at MENINGES LABS" },
      description: "Aakif is the founder and AI product developer at MENINGES LABS, working across software products, applied AI and practical digital automation.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://meningeslabs.com/" },
        { "@type": "ListItem", position: 2, name: "Founder", item: pageUrl },
      ],
    },
  ];

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="founder-hero">
        <FluxLines className="founder-flux" colors={["#780000", "#C1121F", "#669BBC"]} speed={0.28} scale={1.5} turbulence={0.9} fluidity={0.1} rimWidth={0.2} sharpness={2.6} shimmer={0.7} glow={0.7} lineWidth={0.8} flowDirection="down" mouseInteraction mouseStrength={0.5} mouseRadius={0.3} mouseDampening={0.18} lightMode transparent opacity={0.42} />
        <div className="founder-copy">
          <p className="eyebrow reveal">The Founder&rsquo;s Desk</p>
          <h1 className="display reveal delay">Aakif</h1>
          <p className="founder-role reveal delay">Founder &amp; AI Product Developer<br/><span>MENINGES LABS</span></p>
          <p className="intro reveal delay">Aakif works at the intersection of software products, applied AI and automation. He founded MENINGES LABS to build digital systems that are useful in practice — not technology for its own sake.</p>
          <a className="portfolio-cta" href="https://shaikaakif.com" target="_blank" rel="noopener noreferrer">Explore My Portfolio <span aria-hidden="true">→</span></a>
        </div>
        <figure className="founder-portrait">
          <Image src={portrait} alt="Aakif, founder and AI product developer at MENINGES LABS, seated in a portrait photograph" width={480} height={640} sizes="(max-width: 680px) 86vw, (max-width: 1100px) 40vw, 420px" priority />
          <figcaption>Aakif · Founder &amp; AI Product Developer, MENINGES LABS</figcaption>
        </figure>
      </section>

      <section className="content-section">
        <div className="section-inner">
          <p className="eyebrow">A founder&rsquo;s note</p>
          <div>
            <h2 className="display section-title">The useful question<br/>is always <em>why.</em></h2>
          </div>
        </div>
        <div className="founder-note">
          <p>I built MENINGES LABS around a simple observation: businesses rarely need more disconnected tools. They need the pieces to work together.</p>
          <p>Most of my time goes into software products, applied AI and automation — the layers where a well-designed system can remove real friction. A website that explains a business clearly. A search foundation that helps the right people find it. An automation that gives a team time back without taking away control. These are different disciplines, but they serve the same outcome: a business that is easier to find, easier to choose and easier to run.</p>
          <p>I am interested in the point where engineering meets usefulness. Not every problem needs AI. Not every business needs every capability. The work should begin with the constraint and end with something that can be operated, measured and improved.</p>
          <p>That is the standard I want MENINGES LABS held to: thoughtful engineering, honest scope and digital systems that earn their place.</p>
          <p className="founder-signature">— Aakif</p>
        </div>
      </section>

      <section className="content-section surface">
        <div className="section-inner">
          <p className="eyebrow">Where I focus</p>
          <div>
            <h2 className="display section-title">Building the layers<br/>that make growth <em>work.</em></h2>
            <p className="section-copy">The founder&rsquo;s desk sits across the same capabilities that MENINGES LABS offers to clients.</p>
          </div>
        </div>
        <div className="founder-focus-grid">
          {focusAreas.map((area, index) => (
            <article key={area.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3 className="display">{area.title}</h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement founder-statement">
        <blockquote>The work should begin with the business problem, not the technology. Everything else follows from that discipline.</blockquote>
        <span>AAKIF · FOUNDER &amp; AI & PRODUCT DEVELOPER</span>
      </section>

      <section className="next-step">
        <div>
          <p className="eyebrow">A useful next step</p>
          <h2 className="display">See the work behind<br/>the agency.</h2>
          <a className="arrow-link" href="https://shaikaakif.com" target="_blank" rel="noopener noreferrer">Explore my portfolio <span>↗</span></a>
          <Link className="arrow-link" href="/about">About MENINGES LABS <span>↗</span></Link>
          <Link className="arrow-link" href="/contact">Start a conversation <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}
