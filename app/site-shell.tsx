"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { routes } from "./content";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const activePath = pathname === "/" ? "" : pathname.replace(/^\//, "");
  const footerPages = ["", "services", "industries", "work", "insights", "about", "founder", "contact"];
  const capabilities = ["digital-engineering", "search-intelligence", "performance-marketing", "ai-automation", "growth-intelligence"];

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (open) close.current?.focus();
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const hideMenu = () => { setOpen(false); trigger.current?.focus(); };
  const linkFor = (slug: string) => slug ? `/${slug}` : "/";

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="MENINGES LABS home"><img src="/brand-assets/logos/meninges-labs-primary-logo-transparent.png" alt="MENINGES LABS primary logo" width="1814" height="327" /></Link>
      <nav className="header-links" aria-label="Featured pages">{["services", "industries", "about", "founder", "contact"].map((slug) => <Link href={linkFor(slug)} key={slug} className={slug === "founder" ? "header-founder" : undefined}>{routes.find((route) => route.slug === slug)?.nav}</Link>)}</nav>
      <div className="header-actions"><Link className="header-connect" href="/contact">Connect <span aria-hidden="true">↗</span></Link><button ref={trigger} className="gear-button" aria-label={open ? "Close site navigation" : "Open site navigation"} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a7.7 7.7 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a7.7 7.7 0 0 1-1.7-1l-1.7.6-1.4-2.4L7.3 15a7.6 7.6 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.6a7.7 7.7 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a7.7 7.7 0 0 1 1.7 1l1.7-.6 1.4 2.4-1.4 1.1a7.6 7.6 0 0 1-.1 2Z"/></svg></button></div>
    </header>
    <AnimatePresence>
      {open && <motion.div id="site-navigation" role="dialog" aria-modal="true" aria-label="All pages" className="navigation-overlay" initial={{ opacity: 0, y: reduced ? 0 : -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -8 }} transition={{ type: "spring", stiffness: 170, damping: 23 }} onKeyDown={(event) => {
        if (event.key === "Escape") hideMenu();
        if (event.key === "Tab") { const items = [...event.currentTarget.querySelectorAll<HTMLElement>("button,a")], first = items[0], last = items[items.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } }
      }}>
        <div className="navigation-top"><span className="eyebrow">MENINGES LABS / EXPLORE</span><button ref={close} className="navigation-close" onClick={hideMenu}>Close <span aria-hidden="true">×</span></button></div>
        <div className="navigation-grid">{routes.map((route, index) => { const active = route.slug === activePath; const soon = ["work", "insights"].includes(route.slug); return <Link key={route.slug || "home"} href={linkFor(route.slug)} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}><span className="nav-number">{String(index + 1).padStart(2, "0")}</span><span className="nav-name">{route.nav}</span>{soon && <small>Coming Soon</small>}{active && <motion.i layoutId="current-page" className="nav-active" transition={{ type: "spring", stiffness: 220, damping: 22 }} />}</Link>; })}</div>
        <p className="navigation-note">{routes.length} pages. One connected practice.</p>
      </motion.div>}
    </AnimatePresence>
    {children}
    <footer className="site-footer">
      <div className="footer-main"><div><img className="footer-logo" src="/brand-assets/logos/meninges-labs-logo-with-descriptor-transparent.png" alt="MENINGES LABS — Digital Growth & Intelligence logo" width="1818" height="334"/><p>AI-powered digital products, lead generation, and end-to-end automation.</p></div>
        <div className="footer-pages"><span className="eyebrow">Explore</span>{footerPages.map((slug) => <Link key={slug || "home"} href={linkFor(slug)}>{routes.find((route) => route.slug === slug)?.nav}{["work", "insights"].includes(slug) && <small>Coming Soon</small>}</Link>)}<Link href="/services#faq">FAQs</Link></div>
        <div className="footer-pages"><span className="eyebrow">Capabilities</span>{capabilities.map((slug) => <Link key={slug} href={linkFor(slug)}>{routes.find((route) => route.slug === slug)?.nav}</Link>)}</div>
        <div className="footer-contact"><span className="eyebrow">Connect</span><Link href="/contact">WhatsApp · Phone · Email · Instagram <span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} MENINGES LABS</span><Link href="/brand-assets">Brand assets</Link><span>THE ARCHITECTURE OF AUTOPILOT.</span><a href="#main">Back to top ↑</a></div>
    </footer>
  </>;
}
