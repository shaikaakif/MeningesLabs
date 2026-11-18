"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { Icon, type IconName } from "./icons";

const nodes: {
  label: string;
  detail: string;
  icon: IconName;
  x: number;
  y: number;
}[] = [
  { label: "Website", detail: "Publishing & product", icon: "globe", x: 15, y: 16 },
  { label: "Acquisition", detail: "Search & paid media", icon: "chart", x: 81, y: 15 },
  { label: "Leads", detail: "Capture & qualify", icon: "users", x: 11, y: 50 },
  { label: "CRM", detail: "Record & handoff", icon: "database", x: 84, y: 50 },
  { label: "Applied AI", detail: "Draft & decide", icon: "sparkles", x: 21, y: 83 },
  { label: "Operations", detail: "Deliver & follow up", icon: "workflow", x: 75, y: 83 },
];

const links = [
  "M150 99 C 300 99, 350 220, 500 310",
  "M810 93 C 660 93, 640 220, 500 310",
  "M110 310 C 260 310, 360 310, 500 310",
  "M840 310 C 700 310, 620 310, 500 310",
  "M210 515 C 340 500, 400 410, 500 310",
  "M750 515 C 630 500, 590 410, 500 310",
];

export default function ConnectSystem() {
  const shell = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [step, setStep] = useState(6);
  const { scrollYProgress } = useScroll({ target: shell, offset: ["start 82%", "center 38%"] });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (reduced) {
      setStep(6);
      return;
    }
    setStep(Math.max(0, Math.min(6, Math.round(value * 6))));
  });

  const connected = step >= 6;
  const stateLabel = connected ? "Connected system" : step > 0 ? "Connecting system" : "Disconnected work";

  return (
    <section className="v2-section connect-section" id="system">
      <div className="v2-wrap">
        <div className="v2-section-head">
          <p className="v2-eyebrow">
            <i aria-hidden="true" /> The connected-system idea
          </p>
          <div className="v2-section-head-row">
            <h2 className="v2-h2">
              Six working parts.
              <br />
              <span>One business.</span>
            </h2>
            <p className="v2-body">
              A website, acquisition, leads, CRM, AI and operations are usually bought as separate projects. The gaps
              between them become the real constraint.
            </p>
          </div>
        </div>

        <div className="connect-shell" ref={shell}>
          <div className="connect-copy">
            <span className="connect-state" data-connected={connected}>
              <span className="connect-state-dot" aria-hidden="true" />
              {stateLabel}
            </span>
            <p>
              Scroll to bring the parts together. Information starts to move with the work: an enquiry is captured,
              qualified, routed, recorded and measured in one coherent flow.
            </p>
            <ul className="connect-points">
              <li>
                <Icon name="database" size={16} /> One record, not five copies
              </li>
              <li>
                <Icon name="chart" size={16} /> One measurement trail
              </li>
              <li>
                <Icon name="shield" size={16} /> Human control where it matters
              </li>
            </ul>
            <div className="connect-meter" aria-hidden="true">
              <span style={{ width: `${(step / 6) * 100}%` }} />
            </div>
            <small className="connect-hint">{connected ? "System connected" : "Scroll to connect"}</small>
          </div>

          <div className="connect-stage" data-step={step} role="img" aria-label="Illustrative connected business system: website, acquisition, leads, CRM, applied AI and operations connected to one core.">
            <div className="connect-stage-bg" aria-hidden="true" />
            <svg className="connect-lines" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
              {links.map((path) => (
                <path className="connect-line-base" d={path} key={`base-${path}`} />
              ))}
              {links.map((path, index) => (
                <path
                  className={`connect-line-live ${step > index ? "is-live" : ""}`}
                  d={path}
                  key={`live-${path}`}
                />
              ))}
            </svg>

            <div className={`connect-core ${connected ? "is-live" : ""}`}>
              <img
                src="/brand-assets/logos/meninges-labs-monogram-white.png"
                alt=""
                width="828"
                height="485"
              />
              <span>{connected ? "One system" : step > 0 ? "Connecting" : "No backbone"}</span>
            </div>

            {nodes.map((node, index) => (
              <div
                className={`connect-node ${step > index ? "is-live" : ""}`}
                key={node.label}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <span className="connect-node-icon">
                  <Icon name={node.icon} size={17} />
                </span>
                <span className="connect-node-copy">
                  <b>{node.label}</b>
                  <small>{node.detail}</small>
                </span>
                <i className="connect-node-state" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        <div className="connect-rail" aria-hidden="true">
          {["Build", "Acquire", "Convert", "Automate", "Optimise"].map((label, index) => (
            <span key={label} className={step > index ? "is-live" : undefined}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
