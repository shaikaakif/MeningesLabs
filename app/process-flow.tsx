"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Icon } from "./icons";

const steps = [
  {
    title: "Discover",
    summary: "Understand the business before the technology.",
    body: "We map what the business offers, how demand arrives and what is already in place. The useful question is what needs to work better.",
    outputs: ["Business context", "Current systems", "Open questions"],
    kind: "discover",
  },
  {
    title: "Architect",
    summary: "Design the system, scope and responsibilities.",
    body: "Components, data flow, integrations and ownership are defined before anything is built. The scope should be clear enough to price and operate.",
    outputs: ["System map", "Data flow", "Scope & dependencies"],
    kind: "architect",
  },
  {
    title: "Engineer",
    summary: "Build the interface and the machinery behind it.",
    body: "Design and engineering move together. We build the agreed system, test the real journeys and keep accessibility and performance in the foundation.",
    outputs: ["Working interface", "Integrations", "QA & accessibility"],
    kind: "engineer",
  },
  {
    title: "Integrate",
    summary: "Connect the tools your team already uses.",
    body: "CRM, analytics, messaging and automation are connected around agreed rules. Handoffs stay visible and people keep control where it matters.",
    outputs: ["CRM & events", "Automation rules", "Handover"],
    kind: "integrate",
  },
  {
    title: "Optimise",
    summary: "Measure what matters and refine within scope.",
    body: "Once live, the system produces evidence. We review agreed measures, fix friction and define any ongoing support explicitly.",
    outputs: ["Measurement review", "Prioritised fixes", "Support boundaries"],
    kind: "optimise",
  },
];

function Mini({ kind }: { kind: string }) {
  if (kind === "discover") {
    return (
      <div className="pm pm-discover" aria-hidden="true">
        <div className="pm-search">
          <Icon name="search" size={14} />
          <span>what needs to work better?</span>
        </div>
        <div className="pm-questions">
          <span><i />Who is the customer?</span>
          <span><i />Where does demand arrive?</span>
          <span><i />What is already connected?</span>
        </div>
      </div>
    );
  }
  if (kind === "architect") {
    return (
      <div className="pm pm-architect" aria-hidden="true">
        <div className="pm-layer"><span>Experience</span><b>Website · Product</b></div>
        <div className="pm-layer"><span>Logic</span><b>Enquiry · Rules · AI</b></div>
        <div className="pm-layer"><span>Data</span><b>CRM · Events · Records</b></div>
        <div className="pm-spine"><i /><i /><i /></div>
      </div>
    );
  }
  if (kind === "engineer") {
    return (
      <div className="pm pm-engineer" aria-hidden="true">
        <div className="pm-code">
          <span><em>build</em>(&#123;</span>
          <span>&nbsp;&nbsp;interface: <b>clear</b>,</span>
          <span>&nbsp;&nbsp;system: <b>connected</b>,</span>
          <span>&nbsp;&nbsp;motion: <b>useful</b></span>
          <span>&#125;)</span>
        </div>
        <div className="pm-checks">
          <span><Icon name="check" size={13} /> Responsive</span>
          <span><Icon name="check" size={13} /> Accessible</span>
          <span><Icon name="check" size={13} /> Tested</span>
        </div>
      </div>
    );
  }
  if (kind === "integrate") {
    return (
      <div className="pm pm-integrate" aria-hidden="true">
        <span className="pm-node">Enquiry</span>
        <i className="pm-wire" />
        <span className="pm-node">Qualify</span>
        <i className="pm-wire" />
        <span className="pm-node is-human"><Icon name="shield" size={12} /> Approve</span>
        <i className="pm-wire" />
        <span className="pm-node">CRM</span>
      </div>
    );
  }
  return (
    <div className="pm pm-optimise" aria-hidden="true">
      <div className="pm-bars">
        <i style={{ height: "34%" }} />
        <i style={{ height: "54%" }} />
        <i style={{ height: "43%" }} />
        <i style={{ height: "70%" }} />
        <i style={{ height: "86%" }} className="is-accent" />
      </div>
      <div className="pm-opt-foot">
        <span>Agreed measures</span>
        <span>Review &amp; refine</span>
      </div>
    </div>
  );
}

export default function ProcessFlow() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const blocks = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduced) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (Number.isInteger(index)) setActive(index);
        });
      },
      { rootMargin: "-38% 0px -44% 0px", threshold: 0 },
    );
    blocks.current.forEach((block) => {
      if (block) observer.observe(block);
    });
    return () => observer.disconnect();
  }, [reduced]);

  const jump = (index: number) => {
    setActive(index);
    blocks.current[index]?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "center",
    });
  };

  const step = steps[active];

  return (
    <section className="v2-section process-section-v2" id="process">
      <div className="v2-wrap">
        <div className="v2-section-head">
          <p className="v2-eyebrow">
            <i aria-hidden="true" /> How we engineer
          </p>
          <div className="v2-section-head-row">
            <h2 className="v2-h2">
              From constraint
              <br />
              <span>to working system.</span>
            </h2>
            <p className="v2-body">
              Five stages. The work changes with the project; the discipline does not. Scroll to move through the
              sequence.
            </p>
          </div>
        </div>

        <div className="process-v2-grid">
          <div className="process-sticky">
            <span className="process-kicker">Stage {String(active + 1).padStart(2, "0")} / 05</span>
            <div className="process-big">{step.title}</div>
            <p className="process-summary">{step.summary}</p>
            <div className="process-progress" aria-hidden="true">
              <span style={{ width: `${((active + 1) / steps.length) * 100}%` }} />
            </div>
            <div className="process-nav" role="group" aria-label="Jump to a process stage">
              {steps.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={index === active ? "is-active" : index < active ? "is-done" : undefined}
                  aria-pressed={index === active}
                  onClick={() => jump(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="process-blocks">
            {steps.map((item, index) => (
              <div
                key={item.title}
                ref={(element) => {
                  blocks.current[index] = element;
                }}
                data-index={index}
                className={`process-block ${index === active ? "is-active" : ""}`}
                id={`process-${index}`}
              >
                <div className="process-block-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.body}</p>
                <div className="process-block-bottom">
                  <div className="process-tags">
                    {item.outputs.map((output) => (
                      <span key={output}>{output}</span>
                    ))}
                  </div>
                  <Mini kind={item.kind} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
