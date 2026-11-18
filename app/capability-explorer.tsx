"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { PageVisual } from "./system-visuals";
import { Icon, type IconName } from "./icons";

const capabilities: {
  slug: string;
  number: string;
  title: string;
  summary: string;
  tags: string[];
  icon: IconName;
}[] = [
  {
    slug: "digital-engineering",
    number: "01",
    title: "Digital Engineering",
    summary: "Websites, SaaS products and connected software built around a real job to do.",
    tags: ["Websites", "SaaS", "Applications", "Integrations"],
    icon: "code",
  },
  {
    slug: "search-intelligence",
    number: "02",
    title: "Search Intelligence",
    summary: "Technical SEO, content structure, AEO and GEO built on accurate, crawlable information.",
    tags: ["SEO", "AEO", "GEO", "Structured data"],
    icon: "search",
  },
  {
    slug: "performance-marketing",
    number: "03",
    title: "Performance Marketing",
    summary: "Meta and Google campaigns wired to the landing experience, enquiry path and measurement.",
    tags: ["Meta Ads", "Google Ads", "Landing", "Tracking"],
    icon: "chart",
  },
  {
    slug: "ai-automation",
    number: "04",
    title: "AI & Automation",
    summary: "Enquiry handling, qualification, CRM and follow-up workflows with human approval points.",
    tags: ["AI agents", "Workflows", "CRM", "Oversight"],
    icon: "workflow",
  },
  {
    slug: "growth-intelligence",
    number: "05",
    title: "Growth Intelligence",
    summary: "Audits, journey analysis and roadmaps that turn evidence into a practical sequence.",
    tags: ["Audits", "Roadmaps", "Analytics", "Advisory"],
    icon: "compass",
  },
];

export default function CapabilityExplorer() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = capabilities[active];

  const select = (index: number) => {
    setActive(index);
    tabs.current[index]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = capabilities.length - 1;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      select(index === last ? 0 : index + 1);
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      select(index === 0 ? last : index - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      select(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      select(last);
    }
  };

  return (
    <section className="v2-section cx-section" id="capabilities">
      <div className="v2-wrap">
        <div className="v2-section-head">
          <p className="v2-eyebrow">
            <i aria-hidden="true" /> Connected capabilities
          </p>
          <div className="v2-section-head-row">
            <h2 className="v2-h2">
              Five disciplines.
              <br />
              <span>One connected practice.</span>
            </h2>
            <p className="v2-body">
              Each capability can stand alone. Their value increases when the interface, the enquiry and the
              operation are designed as one system.
            </p>
          </div>
        </div>

        <div className="cx-shell">
          <div className="cx-tabs" role="tablist" aria-label="Capabilities" aria-orientation="vertical">
            {capabilities.map((capability, index) => {
              const selected = index === active;
              return (
                <button
                  key={capability.slug}
                  ref={(element) => {
                    tabs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`cx-tab-${index}`}
                  aria-selected={selected}
                  aria-controls="cx-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`cx-tab ${selected ? "is-active" : ""}`}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                >
                  <span className="cx-tab-icon">
                    <Icon name={capability.icon} size={19} />
                  </span>
                  <span className="cx-tab-copy">
                    <span className="cx-tab-number">{capability.number}</span>
                    <b>{capability.title}</b>
                  </span>
                  <Icon name="arrow-right" size={17} className="cx-tab-arrow" />
                </button>
              );
            })}
          </div>

          <div
            className="cx-panel"
            id="cx-panel"
            role="tabpanel"
            aria-labelledby={`cx-tab-${active}`}
            tabIndex={0}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={item.slug}
                className="cx-panel-inner"
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="cx-panel-head">
                  <span className="cx-panel-number">
                    {item.number} / 05
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>

                <div className="cx-visual">
                  <PageVisual slug={item.slug} />
                </div>

                <div className="cx-panel-foot">
                  <div className="cx-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link className="v2-textlink" href={`/${item.slug}`}>
                    Explore capability <Icon name="arrow-up-right" size={16} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
