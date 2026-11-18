"use client";

import { useState } from "react";
import { Icon } from "./icons";

export default function ContactBrief() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [need, setNeed] = useState("");
  const [sent, setSent] = useState(false);

  const message = [
    "Hello MENINGES LABS!",
    name ? `I'm ${name}.` : "",
    business ? `Business: ${business}.` : "",
    need ? `What needs to work better: ${need}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:info@meningeslabs.com?subject=${encodeURIComponent("Project enquiry — MENINGES LABS")}&body=${encodeURIComponent(message)}`;

  return (
    <form
      className="brief"
      aria-label="Start a project brief"
      onSubmit={(event) => {
        event.preventDefault();
        window.open(`https://wa.me/917671979762?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
        setSent(true);
      }}
    >
      <div className="brief-head">
        <span className="brief-label">
          <i aria-hidden="true" /> Start a brief
        </span>
        <small>No data is stored on this site.</small>
      </div>

      <div className="brief-fields">
        <label>
          <span>Your name</span>
          <input
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Aakif"
          />
        </label>
        <label>
          <span>Business</span>
          <input
            name="business"
            autoComplete="organization"
            value={business}
            onChange={(event) => setBusiness(event.target.value)}
            placeholder="Company or project"
          />
        </label>
        <label className="brief-full">
          <span>What needs to work better?</span>
          <textarea
            name="need"
            required
            rows={3}
            value={need}
            onChange={(event) => setNeed(event.target.value)}
            placeholder="A website, a workflow, search visibility, or a system that connects them…"
          />
        </label>
      </div>

      <div className="brief-actions">
        <button className="v2-btn v2-btn-primary" type="submit">
          Send on WhatsApp <Icon name="arrow-up-right" size={16} />
        </button>
        <a className="brief-mail" href={mailto}>
          <Icon name="mail" size={15} /> Email instead
        </a>
      </div>

      <p className="brief-status" role="status" aria-live="polite">
        {sent
          ? "Your WhatsApp message is ready to send. If the window did not open, use the email link."
          : "A short introduction is enough. We start with the business problem."}
      </p>
    </form>
  );
}
