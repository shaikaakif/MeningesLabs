import Link from "next/link";
import BrandFilm from "./brand-film";
import CapabilityExplorer from "./capability-explorer";
import ConnectSystem from "./connect-system";
import ContactCTA from "./contact-cta";
import FAQSection from "./faq-section";
import ProcessFlow from "./process-flow";
import Showcase from "./showcase";
import { WorkVisual } from "./system-visuals";
import { Icon } from "./icons";

const work = [
  {
    kind: "workflow" as const,
    tag: "Concept demonstration",
    number: "01",
    title: "Enquiry-to-booking system",
    body: "Website enquiry, qualification, human-approved response, CRM record and follow-up in one visible path.",
    href: "/ai-automation",
    link: "See AI & automation",
  },
  {
    kind: "platform" as const,
    tag: "Concept interface",
    number: "02",
    title: "Responsive product shell",
    body: "A browser and mobile composition showing how a product interface stays clear across screen sizes.",
    href: "/digital-engineering",
    link: "See digital engineering",
  },
  {
    kind: "search" as const,
    tag: "Illustrative model",
    number: "03",
    title: "Search visibility structure",
    body: "Pages, entities and answers organised so search engines and AI systems can understand the business.",
    href: "/search-intelligence",
    link: "See search intelligence",
  },
];

export default function HomePage() {
  const url = "https://meningeslabs.com/";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: "MENINGES LABS — Digital Engineering & Growth Partner",
      description:
        "MENINGES LABS engineers connected digital systems for business growth: websites, SaaS, applied AI, automation, search intelligence and performance marketing.",
      isPartOf: { "@id": "https://meningeslabs.com/#website" },
      about: { "@id": "https://meningeslabs.com/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://meningeslabs.com/images/meninges-labs-ai-agency-social-preview.png",
        width: 1200,
        height: 630,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: url }],
    },
  ];

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="v2-hero">
        <div className="v2-hero-grid-bg" aria-hidden="true" />
        <div className="v2-wrap v2-hero-grid">
          <div className="v2-hero-copy">
            <p className="v2-eyebrow">
              <i aria-hidden="true" /> Digital engineering · AI systems · growth
            </p>
            <h1 className="v2-hero-title">
              Engineering the
              <br />
              systems behind
              <br />
              <span>growth.</span>
            </h1>
            <p className="v2-hero-lede">
              Technology, intelligence and automation. Connected into systems that help a business operate, compete
              and evolve.
            </p>
            <div className="v2-hero-actions">
              <Link className="v2-btn v2-btn-primary" href="#contact">
                Start a conversation <Icon name="arrow-up-right" size={17} />
              </Link>
              <Link className="v2-btn v2-btn-ghost" href="#capabilities">
                Explore capabilities <Icon name="arrow-right" size={17} />
              </Link>
            </div>
            <div className="v2-hero-proof">
              <span><b>Build</b> product &amp; web</span>
              <span><b>Acquire</b> search &amp; paid</span>
              <span><b>Automate</b> the repeatable</span>
            </div>
          </div>

          <div className="v2-hero-visual">
            <span className="v2-orbit v2-orbit-a" aria-hidden="true" />
            <span className="v2-orbit v2-orbit-b" aria-hidden="true" />
            <div className="v2-hero-media">
              <div className="v2-hero-media-head">
                <span><i className="v2-live-dot" /> MENINGES LABS / Brand film</span>
                <span className="mono">00:51</span>
              </div>
              <BrandFilm compact />
            </div>
            <div className="v2-hero-chip v2-chip-system">
              <span className="v2-chip-icon"><Icon name="layers" size={16} /></span>
              <span>
                <b>One connected practice</b>
                <small>Software · search · AI · growth</small>
              </span>
            </div>
            <div className="v2-hero-chip v2-chip-flow">
              <span className="v2-flow-line">
                <i /> Enquiry <em /> Qualified <em /> CRM
              </span>
              <small>Human approval where it matters</small>
            </div>
          </div>
        </div>

        <div className="v2-wrap v2-hero-rail">
          {["Build", "Acquire", "Convert", "Automate", "Optimise"].map((item, index) => (
            <span key={item}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              {item}
            </span>
          ))}
          <small>One connected practice</small>
        </div>
      </section>

      <ConnectSystem />
      <CapabilityExplorer />
      <ProcessFlow />
      <Showcase />

      <section className="v2-section work-v2" id="work">
        <div className="v2-wrap">
          <div className="v2-section-head">
            <p className="v2-eyebrow">
              <i aria-hidden="true" /> Selected experiments
            </p>
            <div className="v2-section-head-row">
              <h2 className="v2-h2">
                Work, without
                <br />
                <span>invented proof.</span>
              </h2>
              <p className="v2-body">
                Client case studies are being prepared. Until they are approved and supported by evidence, these
                concept demonstrations show how we think about the systems behind the work.
              </p>
            </div>
          </div>

          <div className="work-v2-grid">
            {work.map((item) => (
              <article className="work-v2-card" key={item.title}>
                <div className="work-v2-visual">
                  <WorkVisual kind={item.kind} />
                </div>
                <div className="work-v2-body">
                  <div className="work-v2-meta">
                    <span>{item.number}</span>
                    <span>{item.tag}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <Link className="v2-textlink" href={item.href}>
                    {item.link} <Icon name="arrow-up-right" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="work-v2-note">
            <Icon name="shield" size={16} /> Project stories, testimonials and results are published only with client
            permission and verifiable context.
          </p>
        </div>
      </section>

      <section className="v2-film" id="film">
        <div className="v2-film-bg" aria-hidden="true" />
        <div className="v2-wrap v2-film-grid">
          <div className="v2-film-copy">
            <p className="v2-eyebrow is-light">
              <i aria-hidden="true" /> The brand film
            </p>
            <h2>
              Fifty-one seconds.
              <br />
              <span>One connected idea.</span>
            </h2>
            <p>
              A short visual introduction to MENINGES LABS: disconnected websites, marketing and manual processes
              becoming one coordinated system.
            </p>
            <ul className="v2-film-points">
              <li><Icon name="check" size={15} /> No spoken narration</li>
              <li><Icon name="check" size={15} /> Sound off by default</li>
              <li><Icon name="check" size={15} /> Visual transcript available</li>
            </ul>
            <Link className="v2-textlink is-light" href="/about">
              Read how we think <Icon name="arrow-up-right" size={16} />
            </Link>
          </div>
          <div className="v2-film-player">
            <BrandFilm />
          </div>
        </div>
      </section>

      <section className="v2-philosophy">
        <div className="v2-wrap">
          <div className="v2-philosophy-top">
            <span>Operating idea</span>
            <span>ML / Architecture of Autopilot</span>
          </div>
          <blockquote>
            We don&rsquo;t just build digital tools.
            <br />
            <span>We engineer the system around the work.</span>
          </blockquote>
          <div className="v2-philosophy-foot">
            <p>
              Engineering, discovery, conversion and operations designed to work together. It is an ambition, not a
              promise that a business runs without people or oversight.
            </p>
            <Link className="v2-btn v2-btn-light" href="/about">
              How we think <Icon name="arrow-up-right" size={17} />
            </Link>
          </div>
          <div className="v2-philosophy-rail" aria-hidden="true">
            {["Build", "Acquire", "Convert", "Automate", "Optimise"].map((item, index) => (
              <span key={item}><i>{String(index + 1).padStart(2, "0")}</i>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection groups={["About Meninges Labs"]} limit={6} />
      <ContactCTA />
    </main>
  );
}
