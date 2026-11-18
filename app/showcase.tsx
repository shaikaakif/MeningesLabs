"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { Icon } from "./icons";

const items = [
  {
    id: "platform",
    label: "SaaS platform",
    number: "01",
    title: "A product interface with a clear job to do.",
    copy: "Dashboards, roles and operational views designed around one workflow — not a wall of disconnected cards.",
    tags: ["Product UI", "Data views", "Roles"],
    href: "/digital-engineering",
  },
  {
    id: "website",
    label: "Business website",
    number: "02",
    title: "A website that explains, qualifies and routes.",
    copy: "The page, the offer and the enquiry path are designed together, so attention has somewhere useful to go.",
    tags: ["Responsive", "Enquiry path", "Content"],
    href: "/digital-engineering",
  },
  {
    id: "ai",
    label: "AI interface",
    number: "03",
    title: "Automation with a person still in the room.",
    copy: "Assistants work from approved information, show their limits and hand consequential decisions to a human.",
    tags: ["Approved sources", "Escalation", "Oversight"],
    href: "/ai-automation",
  },
  {
    id: "workflow",
    label: "Automated workflow",
    number: "04",
    title: "A workflow the team can actually follow.",
    copy: "Triggers, rules and handoffs are visible. The system keeps a record and knows when to stop.",
    tags: ["Triggers", "Rules", "CRM"],
    href: "/ai-automation",
  },
  {
    id: "analytics",
    label: "Analytics",
    number: "05",
    title: "Measurement that answers a decision.",
    copy: "Agreed events and useful definitions, so reporting shows what deserves the next investment.",
    tags: ["Events", "Definitions", "Review"],
    href: "/growth-intelligence",
  },
];

function BrowserBar({ label }: { label: string }) {
  return (
    <div className="pv2-bar">
      <span className="pv2-dots" aria-hidden="true"><i /><i /><i /></span>
      <span className="pv2-url">meningeslabs.com / {label}</span>
      <span className="pv2-live"><i /> Concept</span>
    </div>
  );
}

function PlatformPreview() {
  return (
    <div className="pv2-browser">
      <BrowserBar label="platform" />
      <div className="pv2-app">
        <aside className="pv2-side">
          <span className="pv2-side-brand">ML</span>
          <span className="is-active">Overview</span>
          <span>Enquiries</span>
          <span>Workflows</span>
          <span>Reporting</span>
          <span>Settings</span>
        </aside>
        <div className="pv2-main">
          <div className="pv2-main-top">
            <b>Operations overview</b>
            <span className="pv2-chip">Illustrative data</span>
          </div>
          <div className="pv2-stats">
            <span><small>Open enquiries</small><b>12</b><i>This week</i></span>
            <span><small>Qualified</small><b>08</b><i>Agreed rules</i></span>
            <span><small>Booked</small><b>05</b><i>Confirmed slots</i></span>
          </div>
          <div className="pv2-chart-card">
            <div className="pv2-chart-head"><span>Enquiry flow</span><small>Sample</small></div>
            <div className="pv2-bars">
              <i style={{ height: "36%" }} /><i style={{ height: "52%" }} /><i style={{ height: "44%" }} />
              <i style={{ height: "66%" }} /><i style={{ height: "58%" }} /><i style={{ height: "78%" }} />
              <i style={{ height: "70%" }} /><i style={{ height: "88%" }} className="is-accent" />
            </div>
          </div>
          <div className="pv2-rows">
            <span><i className="pv2-dot is-new" /> New enquiry <b>Route to team</b></span>
            <span><i className="pv2-dot" /> Qualified <b>Draft follow-up</b></span>
            <span><i className="pv2-dot is-done" /> Booked <b>CRM updated</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebsitePreview() {
  return (
    <div className="pv2-browser pv2-browser-web">
      <BrowserBar label="studio" />
      <div className="pv2-web">
        <div className="pv2-web-nav">
          <span className="pv2-web-logo">MENINGES LABS</span>
          <span>Work</span><span>Systems</span><span>About</span>
          <i>Start</i>
        </div>
        <div className="pv2-web-hero">
          <div>
            <small>Digital engineering</small>
            <b>Systems that move the business forward.</b>
            <span className="pv2-web-btn">Start a conversation</span>
          </div>
          <div className="pv2-web-plate">
            <img src="/brand-assets/logos/meninges-labs-monogram-orange.png" alt="" width="828" height="485" />
            <span>Connected by design</span>
          </div>
        </div>
        <div className="pv2-web-strip">
          <span><b>Build</b><small>Product & web</small></span>
          <span><b>Acquire</b><small>Search & paid</small></span>
          <span><b>Automate</b><small>Workflows</small></span>
        </div>
      </div>
      <div className="pv2-phone">
        <span className="pv2-phone-notch" />
        <span className="pv2-phone-logo">ML</span>
        <b>Connected systems.</b>
        <i />
        <i className="short" />
        <span className="pv2-phone-btn">Explore <Icon name="arrow-up-right" size={9} /></span>
      </div>
    </div>
  );
}

function AiPreview() {
  return (
    <div className="pv2-ai">
      <div className="pv2-ai-head">
        <span><Icon name="sparkles" size={15} /> Enquiry assistant</span>
        <span className="pv2-chip">Approved sources</span>
      </div>
      <div className="pv2-chat">
        <div className="pv2-msg is-user">
          <small>New enquiry · 09:42</small>
          <p>Do you build booking systems for clinics?</p>
        </div>
        <div className="pv2-msg is-ai">
          <small>AI draft · sources checked</small>
          <p>
            Yes. A booking flow can be scoped with real availability and a human handoff for exceptions. Would you
            like to share the current process?
          </p>
          <span className="pv2-ai-cite"><Icon name="check" size={12} /> Services · Booking systems</span>
        </div>
        <div className="pv2-approval">
          <span><Icon name="shield" size={14} /> Human review before send</span>
          <div><i>Edit</i><b>Approve</b></div>
        </div>
      </div>
      <div className="pv2-ai-input"><span>Type a reply…</span><i>Send</i></div>
    </div>
  );
}

function WorkflowPreview() {
  return (
    <div className="pv2-flow">
      <div className="pv2-flow-head">
        <span>Enquiry-to-booking</span>
        <span className="pv2-chip">Illustrative flow</span>
      </div>
      <div className="pv2-flow-row">
        <span className="pv2-flow-node"><i>Trigger</i>New enquiry</span>
        <b className="pv2-flow-wire" />
        <span className="pv2-flow-node"><i>Rule</i>Qualify</span>
        <b className="pv2-flow-wire" />
        <span className="pv2-flow-node"><i>AI</i>Draft reply</span>
        <b className="pv2-flow-wire" />
        <span className="pv2-flow-node is-human"><i>Human</i><Icon name="shield" size={13} /> Approve</span>
      </div>
      <div className="pv2-flow-row is-second">
        <span className="pv2-flow-node"><i>Data</i>CRM record</span>
        <b className="pv2-flow-wire" />
        <span className="pv2-flow-node"><i>Check</i>Availability</span>
        <b className="pv2-flow-wire" />
        <span className="pv2-flow-node is-accent"><i>Outcome</i>Book or follow up</span>
      </div>
      <div className="pv2-flow-log">
        <span><i /> 09:42 · Enquiry received</span>
        <span><i /> 09:42 · Qualification passed</span>
        <span><i /> 09:43 · Human approved</span>
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div className="pv2-analytics">
      <div className="pv2-analytics-head">
        <b>Growth review</b>
        <span className="pv2-chip">Sample definitions</span>
      </div>
      <div className="pv2-analytics-grid">
        <div className="pv2-line-chart">
          <span className="pv2-chart-label">Qualified enquiries</span>
          <svg viewBox="0 0 460 200" preserveAspectRatio="none" aria-hidden="true">
            <path className="pv2-gridline" d="M0 40H460M0 100H460M0 160H460" />
            <path className="pv2-area" d="M0 158 C60 150 90 120 140 128 S220 96 270 104 S350 58 400 64 S440 36 460 30 L460 200 L0 200 Z" />
            <path className="pv2-line" d="M0 158 C60 150 90 120 140 128 S220 96 270 104 S350 58 400 64 S440 36 460 30" />
            <circle cx="460" cy="30" r="5" />
          </svg>
          <div className="pv2-axis"><span>Week 1</span><span>Week 4</span><span>Week 8</span></div>
        </div>
        <div className="pv2-analytics-side">
          <span><small>Useful definition</small><b>Qualified enquiry</b><i>Agreed with the team</i></span>
          <span><small>Review rhythm</small><b>Monthly</b><i>Evidence before opinion</i></span>
          <span><small>Next decision</small><b>Fix the drop-off</b><i>Landing → enquiry</i></span>
        </div>
      </div>
      <div className="pv2-analytics-foot">
        <span><i className="pv2-dot" /> Event: enquiry</span>
        <span><i className="pv2-dot" /> Event: qualification</span>
        <span><i className="pv2-dot" /> Event: handoff</span>
      </div>
    </div>
  );
}

function Preview({ id }: { id: string }) {
  if (id === "website") return <WebsitePreview />;
  if (id === "ai") return <AiPreview />;
  if (id === "workflow") return <WorkflowPreview />;
  if (id === "analytics") return <AnalyticsPreview />;
  return <PlatformPreview />;
}

export default function Showcase() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = items[active];

  const select = (index: number) => {
    setActive(index);
    tabs.current[index]?.focus();
  };

  return (
    <section className="v2-section showcase-section" id="showcase">
      <div className="v2-wrap">
        <div className="v2-section-head">
          <p className="v2-eyebrow">
            <i aria-hidden="true" /> Engineering showcase
          </p>
          <div className="v2-section-head-row">
            <h2 className="v2-h2">
              The work behind
              <br />
              <span>the interface.</span>
            </h2>
            <p className="v2-body">
              A closer look at the kinds of systems we design: product surfaces, websites, AI handoffs, workflows and
              measurement. All interfaces are illustrative.
            </p>
          </div>
        </div>

        <div className="showcase-shell">
          <div className="showcase-bar">
            <div className="showcase-tabs" role="tablist" aria-label="Engineering showcase">
              {items.map((entry, index) => (
                <button
                  key={entry.id}
                  ref={(element) => {
                    tabs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`showcase-tab-${index}`}
                  aria-selected={index === active}
                  aria-controls="showcase-panel"
                  tabIndex={index === active ? 0 : -1}
                  className={index === active ? "is-active" : undefined}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => {
                    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                    event.preventDefault();
                    const next = event.key === "ArrowRight" ? (index + 1) % items.length : (index - 1 + items.length) % items.length;
                    select(next);
                  }}
                >
                  {entry.label}
                </button>
              ))}
            </div>
            <span className="showcase-label">Illustrative interfaces · not client work</span>
          </div>

          <div className="showcase-body" id="showcase-panel" role="tabpanel" aria-labelledby={`showcase-tab-${active}`}>
            <div className="showcase-copy">
              <span className="showcase-number">{item.number} / 05</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="cx-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link className="showcase-link" href={item.href}>
                See the capability <Icon name="arrow-up-right" size={16} />
              </Link>
            </div>

            <div className="showcase-stage">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={item.id}
                  className="showcase-frame"
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Preview id={item.id} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
