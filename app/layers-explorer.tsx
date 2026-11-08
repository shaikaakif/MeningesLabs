"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const layers = [
  { slug: "digital-engineering", title: "Digital Engineering", description: "Websites, platforms and integrations." },
  { slug: "search-intelligence", title: "Search Intelligence", description: "Technical search, local discovery and useful content." },
  { slug: "performance-marketing", title: "Performance Marketing", description: "Paid campaigns, landing journeys and measurement." },
  { slug: "ai-automation", title: "AI & Automation", description: "Enquiry handling, CRM and operational workflows." },
  { slug: "growth-intelligence", title: "Growth Intelligence", description: "Audits, analysis and practical priorities." },
];
const example = [
  { slug: "digital-engineering", copy: "Property website and campaign pages" },
  { slug: "search-intelligence", copy: "Local search foundations" },
  { slug: "performance-marketing", copy: "Meta enquiry campaigns" },
  { slug: "ai-automation", copy: "Opted-in enquiry response and real appointment availability" },
  { slug: "growth-intelligence", copy: "Reporting on qualified enquiries and booked visits" },
];

export default function LayersExplorer() {
  const [active, setActive] = useState(() => new Set(layers.map((layer) => layer.slug)));
  const reduce = useReducedMotion();
  const toggle = (slug: string) => setActive((state) => { const next = new Set(state); next.has(slug) ? next.delete(slug) : next.add(slug); return next; });
  return <section className="layer-explorer" aria-labelledby="layers-title">
    <div className="layer-intro"><p className="eyebrow">A system you can shape</p><h2 className="display" id="layers-title">One engagement.<br/><em>Only the layers it needs.</em></h2><p>Switch capabilities on or off to see how the scope changes. This real-estate example is illustrative, not a fixed package.</p></div>
    <div className="layer-assembly" aria-label="Select the capabilities for an engagement">
      <div className="layer-stack">{layers.map((layer, index) => { const selected = active.has(layer.slug); return <motion.div className={`layer-row ${selected ? "is-active" : ""}`} key={layer.slug} animate={{ x: reduce ? 0 : selected ? (index % 2 ? 10 : -6) : (index % 2 ? 42 : -42), opacity: selected ? 1 : .42, scale: selected ? 1 : .97 }} transition={{ type: "spring", stiffness: 120, damping: 20 }}>
        <span className="layer-number">0{index + 1}</span><div className="layer-copy"><b>{layer.title}</b><small>{layer.description}</small></div><button type="button" className="layer-toggle" aria-pressed={selected} aria-label={`${selected ? "Remove" : "Add"} ${layer.title}`} onClick={() => toggle(layer.slug)}><span/></button>
      </motion.div>; })}</div>
      <div className="assembled-example"><span className="eyebrow">Illustrative / Real estate</span><ul>{example.filter((item) => active.has(item.slug)).map((item) => <li key={item.slug}>{item.copy}</li>)}</ul>{active.size === 0 ? <p className="empty-scope">Switch on a layer to build a scope.</p> : <Link href="/contact" className="arrow-link">Discuss a system <span>↗</span></Link>}</div>
    </div>
  </section>;
}
