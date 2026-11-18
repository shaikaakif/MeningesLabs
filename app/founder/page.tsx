import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "../faq-section";
import Reveal from "../reveal";
import { ClosingCTA, PageHero, SectionHead, Statement } from "../ui";
import { Icon } from "../icons";

const pageUrl = "https://meningeslabs.com/founder";
const shareImage = "/images/meninges-labs-ai-agency-social-preview.png";
const portrait = "/brand-assets/photography/aakif-founder-meninges-labs-portrait.jpg";
const pageDescription =
  "Meet Aakif, founder and AI product developer at MENINGES LABS. A founder’s note on software products, applied AI, automation and building practical digital systems.";

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
    images: [{ url: shareImage, width: 1200, height: 630, alt: "MENINGES LABS — digital engineering and growth partner" }],
  },
  twitter: { card: "summary_large_image", title: "Aakif — Founder & AI Product Developer | MENINGES LABS", description: pageDescription, images: [shareImage] },
};

const focusAreas = [
  {
    title: "Software products",
    body: "Designing and building SaaS platforms, portals and applications with a defined job to do — and a scope the team can operate after launch.",
    icon: "code" as const,
  },
  {
    title: "Applied AI",
    body: "Configuring assistants and agents around approved information, clear limits and an escalation path that keeps a person in control.",
    icon: "sparkles" as const,
  },
  {
    title: "Intelligent automation",
    body: "Connecting enquiries, CRM, scheduling and follow-ups into workflows a team can trust, with the repetitive parts handled consistently.",
    icon: "workflow" as const,
  },
  {
    title: "Connected systems",
    body: "Bringing engineering, search, acquisition, conversion and measurement into one coherent structure rather than a stack of disconnected tools.",
    icon: "layers" as const,
  },
];

const notes = [
  "Businesses rarely need more disconnected tools. They need the pieces to work together.",
  "A website that explains the business clearly. A search foundation that helps the right people find it. An automation that gives a team time back without taking away control. These are different disciplines, but they serve the same outcome: a business that is easier to find, easier to choose and easier to run.",
  "Not every problem needs AI. Not every business needs every capability. The work should begin with the constraint and end with something that can be operated, measured and improved.",
  "That is the standard I want MENINGES LABS held to: thoughtful engineering, honest scope and digital systems that earn their place.",
];

function FounderVisual() {
  return (
    <div className="pv pv-founder">
      <figure className="founder-portrait-card">
        <Image
          src={portrait}
          alt="Aakif, founder and AI product developer at MENINGES LABS"
          width={480}
          height={640}
          sizes="(max-width: 880px) 84vw, 420px"
          priority
        />
        <figcaption>
          <b>Aakif</b>
          <span>Founder &amp; AI Product Developer</span>
        </figcaption>
      </figure>
      <span className="founder-chip founder-chip-a">
        <Icon name="code" size={15} /> Software products
      </span>
      <span className="founder-chip founder-chip-b">
        <Icon name="sparkles" size={15} /> Applied AI
      </span>
      <span className="founder-chip founder-chip-c">
        <Icon name="workflow" size={15} /> Automation
      </span>
    </div>
  );
}

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
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `https://meningeslabs.com${portrait}`,
        width: 480,
        height: 640,
        caption: "Aakif, founder and AI product developer at MENINGES LABS",
      },
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
      image: {
        "@type": "ImageObject",
        url: `https://meningeslabs.com${portrait}`,
        width: 480,
        height: 640,
        caption: "Aakif, founder and AI product developer at MENINGES LABS",
      },
      description:
        "Aakif is the founder and AI product developer at MENINGES LABS, working across software products, applied AI and practical digital automation.",
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

      <PageHero
        eyebrow="The Founder's Desk"
        title="A founder’s hands<br/>on the <em>system.</em>"
        intro="Aakif works at the intersection of software products, applied AI and automation. He founded MENINGES LABS to build digital systems that are useful in practice — not technology for its own sake."
        visual={<FounderVisual />}
        meta={["Founder & AI Product Developer", "MENINGES LABS · Hyderabad, India"]}
      >
        <div className="hero-actions">
          <a className="btn btn-dark" href="https://shaikaakif.com" target="_blank" rel="noopener noreferrer">
            Explore the portfolio <Icon name="arrow-up-right" size={17} />
          </a>
          <Link className="btn btn-outline" href="/about">
            About the practice <Icon name="arrow-right" size={17} />
          </Link>
        </div>
      </PageHero>

      <section className="section founder-note-section">
        <div className="wrap editorial-grid">
          <div className="editorial-aside">
            <span className="editorial-number">01</span>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              A founder&rsquo;s note
            </p>
          </div>
          <div className="editorial-body">
            <h2 className="display section-title">
              The useful question
              <br />
              is always <em>why.</em>
            </h2>
            <p className="lead founder-lede">
              I built MENINGES LABS around a simple observation: businesses rarely need more disconnected tools.
              They need the pieces to work together.
            </p>
            <div className="founder-note">
              {notes.slice(1).map((note) => (
                <p key={note}>{note}</p>
              ))}
              <p className="founder-signature">— Aakif</p>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section focus-section">
          <div className="wrap">
            <SectionHead
              eyebrow="Where I focus"
              title="Building the layers<br/>that make growth <em>work.</em>"
              body="The founder’s desk sits across the same capabilities MENINGES LABS offers to clients. The work changes with the problem; the standard does not."
            />
            <div className="problem-grid focus-grid">
              {focusAreas.map((area, index) => (
                <article key={area.title}>
                  <div className="focus-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="deliverable-icon">
                      <Icon name={area.icon} size={19} />
                    </span>
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Statement
        quote="The work should begin with the business problem, not the technology. Everything else follows from that discipline."
        attribution="Aakif · Founder & AI Product Developer"
        variant="orange"
      />

      <section className="section founder-link-section">
        <div className="wrap founder-link">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Continue the thread
            </p>
            <h2 className="display section-title">
              See the thinking
              <br />
              behind the <em>practice.</em>
            </h2>
            <p className="section-copy">
              Read how the capabilities connect, or start with the business problem that brought you here. Either
              path begins with a useful conversation.
            </p>
          </div>
          <div className="founder-links">
            <a className="founder-link-row" href="https://shaikaakif.com" target="_blank" rel="noopener noreferrer">
              <span>Portfolio</span>
              <small>shaikaakif.com</small>
              <Icon name="arrow-up-right" size={18} />
            </a>
            <Link className="founder-link-row" href="/about">
              <span>About MENINGES LABS</span>
              <small>How the practice works</small>
              <Icon name="arrow-up-right" size={18} />
            </Link>
            <Link className="founder-link-row" href="/services">
              <span>Capabilities</span>
              <small>Five connected disciplines</small>
              <Icon name="arrow-up-right" size={18} />
            </Link>
            <Link className="founder-link-row" href="/contact">
              <span>Start a conversation</span>
              <small>Talk through the actual need</small>
              <Icon name="arrow-up-right" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection groups={["About Meninges Labs"]} limit={5} />
      <ClosingCTA />
    </main>
  );
}
