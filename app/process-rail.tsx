"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Icon } from "./icons";

const steps = [
  {
    number: "01",
    title: "Discover",
    summary: "Understand the business before touching the technology.",
    body: "We learn what the business offers, who it serves, how enquiries arrive and what is already in place. The useful question is not “what should we build?” but “what needs to work better?”",
    outputs: ["Business and audience context", "Current tool and data review", "A short list of open questions"],
  },
  {
    number: "02",
    title: "Diagnose",
    summary: "Find the constraint worth solving first.",
    body: "We look across visibility, acquisition, conversion, operations and measurement. The goal is to identify the most useful constraint, not to prescribe a service before the problem is understood.",
    outputs: ["Constraint map", "Priority sequence", "Measures worth tracking"],
  },
  {
    number: "03",
    title: "Architect",
    summary: "Design the system, scope and responsibilities.",
    body: "We define the components, data flow, integrations, dependencies, ownership and acceptance criteria. The scope should be clear enough to price, build and operate.",
    outputs: ["System and data-flow design", "Scope, dependencies and exclusions", "Delivery and approval plan"],
  },
  {
    number: "04",
    title: "Engineer",
    summary: "Build, integrate, test and deploy.",
    body: "Design and engineering move together. We build the agreed system, connect the relevant tools, test the real journeys and hand over something the team can understand and operate.",
    outputs: ["Working product or system", "Integration and QA checks", "Handover and documentation"],
  },
  {
    number: "05",
    title: "Improve",
    summary: "Measure what matters and refine within scope.",
    body: "Once live, the system produces evidence. We review agreed measures, fix friction and improve the parts that are working. Ongoing support is scoped explicitly rather than assumed.",
    outputs: ["Measurement review", "Prioritised improvements", "Agreed support boundaries"],
  },
];

export default function ProcessRail() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const step = steps[active];

  const select = (index: number) => setActive(index);

  return (
    <section className="section process-section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            How we engineer
          </p>
          <div className="section-head-copy">
            <h2 className="display section-title">
              From business problem
              <br />
              to <em>working system.</em>
            </h2>
            <p className="section-copy">
              A five-stage engagement sequence. The exact work changes with the project; the discipline does not.
            </p>
          </div>
        </div>

        <div className="process-shell">
          <div className="process-tabs" role="tablist" aria-label="Engagement process" aria-orientation="vertical">
            {steps.map((item, index) => (
              <button
                key={item.number}
                type="button"
                role="tab"
                id={`process-tab-${index}`}
                aria-selected={active === index}
                aria-controls="process-panel"
                tabIndex={active === index ? 0 : -1}
                className={active === index ? "is-active" : undefined}
                onClick={() => select(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                    event.preventDefault();
                    const next = (index + 1) % steps.length;
                    select(next);
                    document.getElementById(`process-tab-${next}`)?.focus();
                  }
                  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    const next = (index - 1 + steps.length) % steps.length;
                    select(next);
                    document.getElementById(`process-tab-${next}`)?.focus();
                  }
                }}
              >
                <span>{item.number}</span>
                <b>{item.title}</b>
                <i aria-hidden="true" />
              </button>
            ))}
          </div>

          <div className="process-panel" id="process-panel" role="tabpanel" aria-labelledby={`process-tab-${active}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step.number}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="process-panel-head">
                  <span className="process-big-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.summary}</p>
                  </div>
                </div>
                <p className="process-body">{step.body}</p>
                <ul className="process-outputs">
                  {step.outputs.map((output) => (
                    <li key={output}>
                      <Icon name="check" size={15} /> {output}
                    </li>
                  ))}
                </ul>
                <div className="process-diagram" aria-hidden="true">
                  {steps.map((item, index) => (
                    <span key={item.number} className={index === active ? "is-active" : index < active ? "is-done" : undefined}>
                      <i />
                      {item.number}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
