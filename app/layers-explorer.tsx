"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./icons";

const layers = [
  { slug: "digital-engineering", title: "Digital Engineering", description: "Website, platform and connected data foundations." },
  { slug: "search-intelligence", title: "Search Intelligence", description: "Technical search, useful content and answer visibility." },
  { slug: "performance-marketing", title: "Performance Marketing", description: "Campaigns, landing journeys and agreed measurement." },
  { slug: "ai-automation", title: "AI & Automation", description: "Enquiry handling, CRM and operational workflows." },
  { slug: "growth-intelligence", title: "Growth Intelligence", description: "Diagnosis, priorities and a practical roadmap." },
];

const scope = [
  { slug: "digital-engineering", copy: "Property website and a responsive enquiry journey" },
  { slug: "search-intelligence", copy: "Local search foundations and structured property information" },
  { slug: "performance-marketing", copy: "Meta enquiry campaigns connected to the landing journey" },
  { slug: "ai-automation", copy: "Opted-in enquiry response with real appointment availability" },
  { slug: "growth-intelligence", copy: "Reporting on qualified enquiries and booked visits" },
];

export default function LayersExplorer() {
  const [active, setActive] = useState(() => new Set(layers.map((layer) => layer.slug)));
  const toggle = (slug: string) =>
    setActive((state) => {
      const next = new Set(state);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  return (
    <section className="section layers-section">
      <div className="wrap layers-layout">
        <div className="layers-intro">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            A system you can shape
          </p>
          <h2 className="display section-title">
            One engagement.
            <br />
            Only the layers it <em>needs.</em>
          </h2>
          <p className="section-copy">
            Capabilities are modular. Switch them on or off to see how a scope can change. This real-estate example
            is illustrative, not a fixed package or a client result.
          </p>
        </div>

        <div className="layers-board">
          <div className="layers-list" aria-label="Select capabilities for an illustrative engagement">
            {layers.map((layer, index) => {
              const selected = active.has(layer.slug);
              return (
                <div className={`layer-row ${selected ? "is-active" : ""}`} key={layer.slug}>
                  <span className="layer-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="layer-copy">
                    <b>{layer.title}</b>
                    <small>{layer.description}</small>
                  </div>
                  <button
                    type="button"
                    className="layer-toggle"
                    aria-pressed={selected}
                    aria-label={`${selected ? "Remove" : "Add"} ${layer.title}`}
                    onClick={() => toggle(layer.slug)}
                  >
                    <span />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="layers-scope">
            <div className="layers-scope-head">
              <span className="mono-label">Illustrative scope / Real estate</span>
              <span className="scope-count">{active.size} / {layers.length}</span>
            </div>
            <ul>
              {scope.filter((item) => active.has(item.slug)).map((item) => (
                <li key={item.slug}><Icon name="check" size={14} /> {item.copy}</li>
              ))}
            </ul>
            {active.size === 0 ? <p className="empty-scope">Switch on a capability to build a scope.</p> : null}
            <Link className="btn btn-dark" href="/contact">
              Discuss a system <Icon name="arrow-up-right" size={16} />
            </Link>
            <p className="scope-note">Illustrative example. Actual scope follows discovery and agreed responsibilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
