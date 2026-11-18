import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "./icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="v2-wrap not-found-inner">
        <p className="v2-eyebrow">
          <i aria-hidden="true" /> Error 404
        </p>
        <h1>
          This page is not part of
          <br />
          <span>the system.</span>
        </h1>
        <p>The address may have changed, or the link may be incomplete. The useful routes are still close by.</p>
        <div className="not-found-actions">
          <Link className="v2-btn v2-btn-primary" href="/">
            Back to home <Icon name="arrow-right" size={16} />
          </Link>
          <Link className="v2-btn v2-btn-ghost" href="/services">
            Explore capabilities <Icon name="arrow-up-right" size={16} />
          </Link>
        </div>
        <div className="not-found-links">
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/hyderabad">Hyderabad</Link>
        </div>
      </div>
    </main>
  );
}
