import Link from "next/link";
import { Icon, type IconName } from "./icons";

const capabilities: {
  slug: string;
  number: string;
  title: string;
  copy: string;
  tags: string[];
  icon: IconName;
}[] = [
  {
    slug: "digital-engineering",
    number: "01",
    title: "Digital Engineering",
    copy: "Websites, SaaS products, custom software and integrations engineered around the work the business needs to do.",
    tags: ["Websites", "SaaS", "Applications", "Integrations"],
    icon: "code",
  },
  {
    slug: "search-intelligence",
    number: "02",
    title: "Search Intelligence",
    copy: "Technical SEO, content structure, AEO and GEO built on accurate, crawlable information.",
    tags: ["SEO", "AEO", "GEO", "Structured data"],
    icon: "search",
  },
  {
    slug: "performance-marketing",
    number: "03",
    title: "Performance Marketing",
    copy: "Meta and Google campaigns connected to the landing experience, enquiry path and measurement.",
    tags: ["Meta Ads", "Google Ads", "Landing pages", "Tracking"],
    icon: "chart",
  },
  {
    slug: "ai-automation",
    number: "04",
    title: "Applied AI & Automation",
    copy: "Enquiry handling, qualification, CRM, scheduling and follow-up workflows with human approval points.",
    tags: ["AI agents", "Workflows", "CRM", "Human oversight"],
    icon: "workflow",
  },
  {
    slug: "growth-intelligence",
    number: "05",
    title: "Growth Intelligence",
    copy: "Audits, journey analysis, roadmaps and technology decisions grounded in evidence rather than assumptions.",
    tags: ["Audits", "Roadmaps", "Analytics", "Advisory"],
    icon: "compass",
  },
];

function BrowserMock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`browser-mock ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <div className="browser-bar">
        <span className="browser-dots"><i /><i /><i /></span>
        <span className="browser-url">meningeslabs.com / platform</span>
        <span className="browser-status">Concept</span>
      </div>
      <div className="browser-body">
        <div className="browser-nav">
          <span className="mini-mark">ML</span>
          <span>Work</span><span>Systems</span><span>Contact</span>
        </div>
        <div className="browser-hero">
          <span className="mini-kicker">Connected by design</span>
          <strong>Digital products with a job to do.</strong>
          <div className="mini-button">Start a project <Icon name="arrow-up-right" size={10} /></div>
        </div>
        <div className="browser-tiles">
          <span><b>Platform</b><small>Product interface</small></span>
          <span><b>Portal</b><small>Customer access</small></span>
          <span><b>Integration</b><small>Connected data</small></span>
        </div>
      </div>
    </div>
  );
}

export function HeroSystem() {
  return (
    <div className="hero-stage" aria-label="Illustrative connected system with four interface panels around the MENINGES LABS monogram">
      <span className="stage-label">Illustrative system</span>
      <div className="stage-glow" aria-hidden="true" />
      <svg className="stage-lines" viewBox="0 0 620 620" aria-hidden="true">
        <path d="M310 310 C230 250 210 180 170 130" />
        <path d="M310 310 C400 250 440 190 470 135" />
        <path d="M310 310 C220 370 180 430 155 485" />
        <path d="M310 310 C400 380 445 430 470 490" />
        <circle cx="310" cy="310" r="116" />
        <circle cx="310" cy="310" r="174" />
      </svg>

      <div className="stage-orbit" aria-hidden="true">
        <span /><span /><span />
      </div>

      <div className="stage-core">
        <img src="/brand-assets/logos/meninges-labs-monogram-white.png" alt="" width="828" height="485" />
        <span>ML / CORE</span>
      </div>

      <article className="stage-card stage-card-a">
        <div className="stage-card-head">
          <span className="stage-icon"><Icon name="code" size={15} /></span>
          <span>Digital platform</span>
          <i className="live-dot" />
        </div>
        <div className="stage-browser">
          <div className="stage-browser-bar"><i /><i /><i /><span /></div>
          <div className="stage-browser-body">
            <span className="skeleton s1" /><span className="skeleton s2" /><span className="skeleton s3" />
          </div>
        </div>
        <p>Interfaces and products</p>
      </article>

      <article className="stage-card stage-card-b">
        <div className="stage-card-head">
          <span className="stage-icon"><Icon name="search" size={15} /></span>
          <span>Search visibility</span>
        </div>
        <div className="stage-search">
          <span>digital engineering hyderabad</span>
          <Icon name="search" size={13} />
        </div>
        <div className="stage-search-rows">
          <span /><span /><span />
        </div>
        <div className="stage-chips"><span>Pages</span><span>Entities</span><span>Answers</span></div>
      </article>

      <article className="stage-card stage-card-c">
        <div className="stage-card-head">
          <span className="stage-icon"><Icon name="workflow" size={15} /></span>
          <span>Enquiry workflow</span>
        </div>
        <div className="stage-flow">
          <span>Enquiry</span><i /><span>Qualify</span><i /><span className="is-approval">Approval</span><i /><span>CRM</span>
        </div>
        <p>Human oversight built in</p>
      </article>

      <article className="stage-card stage-card-d">
        <div className="stage-card-head">
          <span className="stage-icon"><Icon name="chart" size={15} /></span>
          <span>Measurement</span>
        </div>
        <div className="stage-events">
          <span><i /> Visit</span><span><i /> Enquiry</span><span><i /> Handoff</span><span><i /> Follow-up</span>
        </div>
        <p>Event trail, not vanity metrics</p>
      </article>
    </div>
  );
}

function SearchMock() {
  return (
    <div className="mini-search" aria-hidden="true">
      <div className="mini-search-bar"><Icon name="search" size={14} /><span>digital engineering partner</span><kbd>↵</kbd></div>
      <div className="mini-search-results">
        <span className="mini-result"><i>01</i><b>Owned pages</b><small>Clear service and company information</small></span>
        <span className="mini-result"><i>02</i><b>Structured answers</b><small>Useful facts, entities and relationships</small></span>
        <span className="mini-result"><i>03</i><b>Local context</b><small>Accurate area-served information</small></span>
      </div>
      <div className="mini-entities"><span>Entity</span><span>Schema</span><span>Answer</span></div>
    </div>
  );
}

function CampaignMock() {
  const rows = ["Offer", "Campaign", "Landing", "Qualified enquiry", "Measurement"];
  return (
    <div className="mini-flow" aria-hidden="true">
      {rows.map((row, index) => (
        <div className="mini-flow-row" key={row}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <b>{row}</b>
          {index < rows.length - 1 ? <Icon name="arrow-right" size={13} /> : <Icon name="check" size={13} />}
        </div>
      ))}
      <p>Illustrative path · no performance claims</p>
    </div>
  );
}

function AutomationMock() {
  return (
    <div className="mini-workflow" aria-hidden="true">
      <span className="mini-node">Enquiry</span>
      <i />
      <span className="mini-node">Qualify</span>
      <i />
      <span className="mini-node">AI draft</span>
      <i />
      <span className="mini-node is-human"><Icon name="shield" size={12} /> Human approval</span>
      <i />
      <span className="mini-node">CRM</span>
    </div>
  );
}

function GrowthMock() {
  const items = [
    { label: "Visibility", value: "Now", top: "18%", left: "16%" },
    { label: "Conversion", value: "Now", top: "30%", left: "58%" },
    { label: "Automation", value: "Next", top: "62%", left: "28%" },
    { label: "Measurement", value: "Later", top: "70%", left: "66%" },
  ];
  return (
    <div className="mini-matrix" aria-hidden="true">
      <span className="axis-y">Impact</span>
      <span className="axis-x">Effort</span>
      <div className="matrix-grid">
        {items.map((item) => (
          <span key={item.label} style={{ top: item.top, left: item.left }}>
            <i />
            <b>{item.label}</b>
            <small>{item.value}</small>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CapabilityBento() {
  return (
    <section className="section capability-section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Connected capabilities
          </p>
          <div className="section-head-copy">
            <h2 className="display section-title">
              Five disciplines.
              <br />
              One <em>connected practice.</em>
            </h2>
            <p className="section-copy">
              Each capability can stand alone where that is the right scope. Their value increases when they are
              designed to work together.
            </p>
          </div>
        </div>

        <div className="bento">
          {capabilities.map((capability, index) => (
            <article className={`cap-card cap-${capability.slug} cap-index-${index}`} key={capability.slug}>
              <div className="cap-top">
                <span className="cap-number">{capability.number}</span>
                <span className="cap-icon"><Icon name={capability.icon} size={20} /></span>
              </div>
              <h3>{capability.title}</h3>
              <p className="cap-copy">{capability.copy}</p>
              <div className="cap-visual">
                {capability.slug === "digital-engineering" ? <BrowserMock /> : null}
                {capability.slug === "search-intelligence" ? <SearchMock /> : null}
                {capability.slug === "performance-marketing" ? <CampaignMock /> : null}
                {capability.slug === "ai-automation" ? <AutomationMock /> : null}
                {capability.slug === "growth-intelligence" ? <GrowthMock /> : null}
              </div>
              <div className="cap-tags">
                {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <Link className="cap-link" href={`/${capability.slug}`}>
                Explore capability <Icon name="arrow-up-right" size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityMap() {
  const points = [
    { label: "Engineering", x: "8%", y: "12%" },
    { label: "Search", x: "68%", y: "8%" },
    { label: "Marketing", x: "76%", y: "62%" },
    { label: "Automation", x: "12%", y: "68%" },
    { label: "Growth", x: "43%", y: "82%" },
  ];
  return (
    <div className="pv pv-map" aria-label="Illustrative capability map">
      <svg viewBox="0 0 520 440" aria-hidden="true">
        <path d="M120 90 L260 220 L390 75" />
        <path d="M390 75 L420 300 L260 220" />
        <path d="M420 300 L320 375 L260 220" />
        <path d="M320 375 L125 325 L260 220" />
        <path d="M125 325 L120 90" />
      </svg>
      <span className="pv-core">ML</span>
      {points.map((point) => (
        <span className="pv-node" key={point.label} style={{ left: point.x, top: point.y }}>{point.label}</span>
      ))}
      <span className="pv-note">Illustrative relationship map</span>
    </div>
  );
}

function EngineeringVisual() {
  return (
    <div className="pv pv-engineering">
      <BrowserMock />
      <div className="pv-phone" aria-hidden="true">
        <span className="pv-phone-notch" />
        <span className="pv-phone-kicker">MENINGES LABS</span>
        <b>Connected systems.</b>
        <span className="pv-phone-line" />
        <span className="pv-phone-line short" />
        <span className="pv-phone-button">Start <Icon name="arrow-up-right" size={10} /></span>
      </div>
      <div className="pv-code" aria-hidden="true">
        <span><i>build</i>(&#123;</span>
        <span>&nbsp;&nbsp;interface: <em>clear</em>,</span>
        <span>&nbsp;&nbsp;system: <em>connected</em></span>
        <span>&#125;)</span>
      </div>
      <span className="pv-label">Concept interface · not client work</span>
    </div>
  );
}

function SearchVisual() {
  return (
    <div className="pv pv-search">
      <div className="pv-search-bar"><Icon name="search" size={17} /><span>search and answer visibility</span></div>
      <div className="pv-search-grid">
        <div className="pv-answer">
          <span className="pv-label-inline">Structured answer</span>
          <b>Clear business information, organised for retrieval.</b>
          <span className="pv-answer-line" /><span className="pv-answer-line" /><span className="pv-answer-line short" />
        </div>
        <div className="pv-entity-list">
          <span><i /> Technical health</span>
          <span><i /> Content structure</span>
          <span><i /> Local context</span>
          <span><i /> Structured data</span>
          <span><i /> AEO &amp; GEO</span>
        </div>
      </div>
      <div className="pv-search-foot">
        <span>Discoverability</span><Icon name="arrow-right" size={14} /><span>Understanding</span><Icon name="arrow-right" size={14} /><span>Answer visibility</span>
      </div>
      <span className="pv-label">Illustrative model · no ranking claims</span>
    </div>
  );
}

function CampaignVisual() {
  return (
    <div className="pv pv-campaign">
      <div className="pv-campaign-loop">
        {["Offer", "Audience", "Creative", "Landing", "Enquiry", "Measure"].map((item, index) => (
          <span key={item} className={index === 4 ? "is-accent" : undefined}>
            <i>{String(index + 1).padStart(2, "0")}</i>
            {item}
          </span>
        ))}
      </div>
      <div className="pv-campaign-panels">
        <div><span className="pv-label-inline">Campaign</span><b>Meta &amp; Google</b><small>Strategy and media management</small></div>
        <div><span className="pv-label-inline">Landing</span><b>Offer to enquiry</b><small>Connected conversion path</small></div>
        <div><span className="pv-label-inline">Measure</span><b>Agreed events</b><small>Client-funded ad spend</small></div>
      </div>
      <span className="pv-label">Illustrative flow · results depend on the market</span>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="pv pv-automation">
      <div className="pv-workflow">
        <span className="pv-flow-node">New enquiry<i>Trigger</i></span>
        <span className="pv-flow-arrow"><Icon name="arrow-right" size={15} /></span>
        <span className="pv-flow-node">Qualification<i>Rules</i></span>
        <span className="pv-flow-arrow"><Icon name="arrow-right" size={15} /></span>
        <span className="pv-flow-node">AI draft<i>Approved sources</i></span>
        <span className="pv-flow-arrow"><Icon name="arrow-right" size={15} /></span>
        <span className="pv-flow-node is-human"><Icon name="shield" size={15} /> Human approval<i>Escalation</i></span>
        <span className="pv-flow-arrow"><Icon name="arrow-right" size={15} /></span>
        <span className="pv-flow-node">CRM + follow-up<i>Actual availability</i></span>
      </div>
      <div className="pv-guardrails">
        <span><Icon name="check" size={13} /> Approved information</span>
        <span><Icon name="check" size={13} /> Consent &amp; permissions</span>
        <span><Icon name="check" size={13} /> Human handoff</span>
        <span><Icon name="check" size={13} /> Monitoring</span>
      </div>
      <span className="pv-label">Illustrative workflow · not a live client system</span>
    </div>
  );
}

function GrowthVisual() {
  return (
    <div className="pv pv-growth">
      <div className="pv-growth-board">
        <div className="pv-growth-col"><span>Now</span><b>Fix the constraint</b><small>Visibility · conversion</small></div>
        <div className="pv-growth-col"><span>Next</span><b>Connect the flow</b><small>Automation · handoffs</small></div>
        <div className="pv-growth-col"><span>Later</span><b>Measure &amp; refine</b><small>Reporting · support</small></div>
      </div>
      <div className="pv-growth-axes" aria-hidden="true">
        <span>Impact</span><i /><span>Effort</span>
      </div>
      <span className="pv-label">Illustrative diagnostic board</span>
    </div>
  );
}

function IndustriesVisual() {
  const sectors = [
    { name: "Real estate", icon: "globe" as const },
    { name: "Architecture", icon: "layers" as const },
    { name: "Healthcare", icon: "shield" as const },
    { name: "Manufacturing", icon: "database" as const },
    { name: "Hospitality", icon: "calendar" as const },
  ];
  return (
    <div className="pv pv-industries">
      <div className="pv-industry-grid">
        {sectors.map((sector) => (
          <span key={sector.name}><Icon name={sector.icon} size={18} />{sector.name}</span>
        ))}
        <span className="pv-industry-more">+ different contexts</span>
      </div>
      <span className="pv-label">Potential areas of fit · not a client list</span>
    </div>
  );
}

function HyderabadVisual() {
  return (
    <div className="pv pv-hyderabad">
      <div className="pv-city">
        <span className="pv-city-label"><Icon name="pin" size={15} /> Hyderabad</span>
        <span className="pv-city-core">ML</span>
        <span className="pv-city-node n1">Website</span>
        <span className="pv-city-node n2">Search</span>
        <span className="pv-city-node n3">Enquiries</span>
        <span className="pv-city-node n4">Operations</span>
        <span className="pv-city-node n5">Measurement</span>
        <svg viewBox="0 0 520 380" aria-hidden="true">
          <circle cx="260" cy="190" r="92" />
          <circle cx="260" cy="190" r="150" />
          <path d="M260 190 L100 80 M260 190 L420 85 M260 190 L445 290 M260 190 L90 300 M260 190 L260 350" />
        </svg>
      </div>
      <div className="pv-city-foot">
        <span>Remote-first delivery</span>
        <span>Meetings by prior agreement</span>
        <span>No walk-in office</span>
      </div>
      <span className="pv-label">Local context · accurate, not invented</span>
    </div>
  );
}

function AboutVisual() {
  const layers = ["Build", "Acquire", "Convert", "Automate", "Optimise"];
  return (
    <div className="pv pv-about">
      <div className="pv-layers">
        {layers.map((layer, index) => (
          <span key={layer} style={{ transform: `translate(${index * 14}px, ${index * -12}px)` }}>
            <i>{String(index + 1).padStart(2, "0")}</i>{layer}
          </span>
        ))}
      </div>
      <div className="pv-about-core"><img src="/brand-assets/logos/meninges-labs-monogram-white.png" alt="" width="828" height="485" /></div>
      <span className="pv-label">Five connected layers · one operating system</span>
    </div>
  );
}

function InsightsVisual() {
  return (
    <div className="pv pv-insights">
      <div className="pv-paper">
        <span className="pv-paper-label">MENINGES LABS / INSIGHTS</span>
        <b>Useful writing is being prepared.</b>
        <span className="pv-paper-line" /><span className="pv-paper-line" /><span className="pv-paper-line short" />
        <span className="pv-paper-tag">Reviewed · sourced · practical</span>
      </div>
      <span className="pv-label">No placeholder articles published</span>
    </div>
  );
}

function ContactVisual() {
  return (
    <div className="pv pv-contact">
      <div className="pv-contact-card">
        <span className="pv-label-inline">Start with the problem</span>
        <b>What needs to work better?</b>
        <span className="pv-contact-line" /><span className="pv-contact-line short" />
        <div className="pv-contact-channels">
          <span><Icon name="message" size={15} /> WhatsApp</span>
          <span><Icon name="mail" size={15} /> Email</span>
          <span><Icon name="phone" size={15} /> Call</span>
        </div>
      </div>
      <span className="pv-label">Verified contact details only</span>
    </div>
  );
}

function BrandVisual() {
  return (
    <div className="pv pv-brand">
      <div className="pv-brand-plate"><img src="/brand-assets/logos/meninges-labs-lockup-white.png" alt="" width="1600" height="217" /></div>
      <div className="pv-brand-icons">
        <img src="/brand-assets/app-icons/meninges-labs-app-icon-192x192.png" alt="" width="96" height="96" />
        <img src="/brand-assets/logos/meninges-labs-monogram-orange.png" alt="" width="96" height="96" />
      </div>
      <span className="pv-label">Current approved identity</span>
    </div>
  );
}

export function PageVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "services": return <CapabilityMap />;
    case "digital-engineering": return <EngineeringVisual />;
    case "search-intelligence": return <SearchVisual />;
    case "performance-marketing": return <CampaignVisual />;
    case "ai-automation": return <AutomationVisual />;
    case "growth-intelligence": return <GrowthVisual />;
    case "industries": return <IndustriesVisual />;
    case "hyderabad": return <HyderabadVisual />;
    case "about": return <AboutVisual />;
    case "insights": return <InsightsVisual />;
    case "contact": return <ContactVisual />;
    case "brand-assets": return <BrandVisual />;
    default: return <CapabilityMap />;
  }
}

export function WorkVisual({ kind }: { kind: "workflow" | "platform" | "search" }) {
  if (kind === "workflow") return <AutomationVisual />;
  if (kind === "search") return <SearchVisual />;
  return <EngineeringVisual />;
}
