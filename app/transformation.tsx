"use client";

import { useState } from "react";
import { Icon } from "./icons";

const nodes = [
  { key: "website", label: "Website", detail: "Publishing & product" },
  { key: "enquiries", label: "Enquiries", detail: "Capture & routing" },
  { key: "campaigns", label: "Campaigns", detail: "Search & paid media" },
  { key: "crm", label: "CRM", detail: "Records & handoffs" },
  { key: "followup", label: "Follow-up", detail: "Booking & reminders" },
  { key: "reporting", label: "Reporting", detail: "Measurement & review" },
];

export default function Transformation() {
  const [connected, setConnected] = useState(true);

  return (
    <section className="section transformation-section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            The connected-system idea
          </p>
          <div className="section-head-copy">
            <h2 className="display section-title">
              Growth breaks between
              <br />
              the <em>pieces.</em>
            </h2>
            <p className="section-copy">
              Websites, campaigns, enquiries, CRM and reporting are usually treated as separate projects. The gaps
              between them become the real constraint. Here is the difference a connected system makes.
            </p>
          </div>
        </div>

        <div className="transform-shell" data-connected={connected}>
          <div className="transform-toolbar">
            <div className="segmented" role="group" aria-label="Compare disconnected and connected systems">
              <button type="button" aria-pressed={!connected} className={!connected ? "is-active" : undefined} onClick={() => setConnected(false)}>
                Disconnected
              </button>
              <button type="button" aria-pressed={connected} className={connected ? "is-active" : undefined} onClick={() => setConnected(true)}>
                Connected
              </button>
            </div>
            <span className="mono-label">Illustrative system · not a live client environment</span>
          </div>

          <div className="transform-map">
            <svg className="transform-lines" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
              <path d="M210 100 C350 100 390 220 500 250" pathLength="1" />
              <path d="M205 250 C330 250 390 250 500 250" pathLength="1" />
              <path d="M210 400 C350 400 390 290 500 250" pathLength="1" />
              <path d="M790 100 C650 100 610 220 500 250" pathLength="1" />
              <path d="M795 250 C670 250 610 250 500 250" pathLength="1" />
              <path d="M790 400 C650 400 610 290 500 250" pathLength="1" />
            </svg>

            <div className="transform-core">
              <img src="/brand-assets/logos/meninges-labs-monogram-white.png" alt="" width="828" height="485" loading="lazy" />
              <span>{connected ? "One connected system" : "No shared backbone"}</span>
            </div>

            <div className="transform-nodes">
              {nodes.map((node, index) => (
                <div className={`transform-node node-${index}`} key={node.key}>
                  <span className="transform-node-icon">
                    <Icon name={node.key === "website" ? "globe" : node.key === "campaigns" ? "chart" : node.key === "crm" ? "database" : node.key === "reporting" ? "file" : node.key === "enquiries" ? "message" : "calendar"} size={17} />
                  </span>
                  <span>
                    <b>{node.label}</b>
                    <small>{node.detail}</small>
                  </span>
                  <i aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <div className="transform-status" aria-live="polite">
            <span className={connected ? "status-pill is-live" : "status-pill"}>
              <span className="live-dot" /> {connected ? "Connected system" : "Disconnected work"}
            </span>
            <p>
              {connected
                ? "Information moves with the work: enquiries are captured, qualified, routed, recorded and measured in one coherent flow."
                : "Each part can work in isolation, but the handoffs, duplicates and missing context cost time and obscure what is actually working."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
