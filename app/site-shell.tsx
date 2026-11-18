"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { contactDetails, socialLinks } from "./content";
import { Icon, type IconName } from "./icons";

const capabilities: { slug: string; label: string; copy: string; icon: IconName }[] = [
  { slug: "digital-engineering", label: "Digital Engineering", copy: "Websites, SaaS and connected software.", icon: "code" },
  { slug: "search-intelligence", label: "Search Intelligence", copy: "SEO, AEO and GEO foundations.", icon: "search" },
  { slug: "performance-marketing", label: "Performance Marketing", copy: "Campaigns wired to the enquiry path.", icon: "chart" },
  { slug: "ai-automation", label: "AI & Automation", copy: "Workflows with human oversight.", icon: "workflow" },
  { slug: "growth-intelligence", label: "Growth Intelligence", copy: "Diagnosis, priorities and roadmaps.", icon: "compass" },
];

const nav = [
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/insights", label: "Insights" },
];

const menuGroups = [
  {
    label: "Capabilities",
    links: [
      { href: "/services", label: "All capabilities", note: "The connected practice" },
      ...capabilities.map((item) => ({ href: `/${item.slug}`, label: item.label, note: item.copy })),
    ],
  },
  {
    label: "Company",
    links: [
      { href: "/about", label: "About", note: "The practice and the idea" },
      { href: "/founder", label: "Founder's Desk", note: "A note from Aakif" },
      { href: "/work", label: "Work", note: "Concept studies" },
      { href: "/insights", label: "Insights", note: "Writing in preparation" },
    ],
  },
  {
    label: "Focus & contact",
    links: [
      { href: "/industries", label: "Industries", note: "Where the work fits" },
      { href: "/hyderabad", label: "Hyderabad", note: "Local context, remote-first" },
      { href: "/contact", label: "Contact", note: "Start a conversation" },
      { href: "/brand-assets", label: "Brand Assets", note: "The approved identity" },
    ],
  },
];

const processSteps = ["Discover", "Architect", "Engineer", "Integrate", "Optimise"];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [megaOpen, setMegaOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const isCapability = capabilities.some((item) => `/${item.slug}` === pathname);

  useEffect(() => {
    setMegaOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!megaOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (!megaRef.current?.contains(event.target as Node)) setMegaOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMegaOpen(false);
        megaButton.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [megaOpen]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    if (menuOpen) closeButton.current?.focus();
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButton.current?.focus();
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="sh-header">
        <div className="v2-wrap sh-inner">
          <Link className="sh-brand" href="/" aria-label="MENINGES LABS home">
            <img
              className="sh-brand-plate"
              src="/brand-assets/logos/meninges-labs-lockup-orange.png"
              alt="MENINGES LABS"
              width="1800"
              height="600"
            />
          </Link>

          <nav className="sh-nav" aria-label="Primary">
            <div className="sh-mega-wrap" ref={megaRef}>
              <button
                ref={megaButton}
                type="button"
                className={`sh-link sh-mega-trigger ${megaOpen ? "is-open" : ""}`}
                aria-expanded={megaOpen}
                aria-controls="services-mega"
                aria-current={pathname === "/services" || isCapability ? "page" : undefined}
                onClick={() => setMegaOpen((value) => !value)}
              >
                Services
                <Icon name="chevron-down" size={14} className="sh-chevron" />
              </button>

              <AnimatePresence>
                {megaOpen ? (
                  <motion.div
                    id="services-mega"
                    className="sh-mega"
                    initial={reduced ? false : { opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="v2-wrap sh-mega-inner">
                      <div className="sh-mega-main">
                        <p className="sh-mega-label">Capabilities / 05</p>
                        <div className="sh-mega-grid">
                          {capabilities.map((item, index) => (
                            <Link className="sh-mega-link" href={`/${item.slug}`} key={item.slug}>
                              <span className="sh-mega-icon">
                                <Icon name={item.icon} size={19} />
                              </span>
                              <span className="sh-mega-copy">
                                <span className="sh-mega-number">{String(index + 1).padStart(2, "0")}</span>
                                <b>{item.label}</b>
                                <small>{item.copy}</small>
                              </span>
                              <Icon name="arrow-up-right" size={16} />
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="sh-mega-feature">
                        <span className="sh-mega-label">How we work</span>
                        <b>From a business constraint to a connected system.</b>
                        <ol className="sh-mega-process">
                          {processSteps.map((step, index) => (
                            <li key={step}>
                              <span>{String(index + 1).padStart(2, "0")}</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                        <Link className="sh-mega-all" href="/services">
                          Explore the practice <Icon name="arrow-right" size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {nav.map((item) => (
              <Link
                className="sh-link"
                href={item.href}
                key={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="sh-actions">
            <Link className="v2-btn v2-btn-primary sh-cta" href="/contact">
              Start a conversation <Icon name="arrow-up-right" size={16} />
            </Link>
            <button
              ref={menuButton}
              type="button"
              className="sh-menu-trigger"
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Icon name="menu" size={18} />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="site-navigation"
            className="sh-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Explore MENINGES LABS"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onKeyDown={(event) => {
              if (event.key === "Escape") closeMenu();
              if (event.key !== "Tab") return;
              const items = [...event.currentTarget.querySelectorAll<HTMLElement>("a,button")];
              const first = items[0];
              const last = items[items.length - 1];
              if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
              } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
              }
            }}
          >
            <div className="v2-wrap sh-overlay-top">
              <Link className="sh-overlay-brand" href="/" onClick={() => setMenuOpen(false)} aria-label="MENINGES LABS home">
                <img
                  src="/brand-assets/logos/meninges-labs-lockup-white.png"
                  alt="MENINGES LABS"
                  width="1600"
                  height="217"
                />
              </Link>
              <button ref={closeButton} type="button" className="sh-overlay-close" onClick={closeMenu}>
                Close <Icon name="close" size={18} />
              </button>
            </div>

            <div className="v2-wrap sh-overlay-body">
              <div className="sh-overlay-nav">
                {menuGroups.map((group) => (
                  <div className="sh-overlay-group" key={group.label}>
                    <p className="sh-overlay-label">{group.label}</p>
                    {group.links.map((link) => (
                      <Link
                        href={link.href}
                        key={link.href}
                        className="sh-overlay-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>{link.label}</span>
                        <small>{link.note}</small>
                        <Icon name="arrow-up-right" size={18} />
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <aside className="sh-overlay-side">
                <img
                  className="sh-overlay-mark"
                  src="/brand-assets/logos/meninges-labs-monogram-orange.png"
                  alt=""
                  width="828"
                  height="485"
                />
                <p className="sh-overlay-tagline">Engineering Systems.<br />Elevating Businesses.</p>
                <div className="sh-overlay-contact">
                  <a href={contactDetails.email}>info@meningeslabs.com</a>
                  <a href={contactDetails.tel}>{contactDetails.phone}</a>
                  <a href={socialLinks[0].href} target="_blank" rel="noreferrer">
                    Instagram <Icon name="arrow-up-right" size={13} />
                  </a>
                </div>
                <Link className="v2-btn v2-btn-primary" href="/contact" onClick={() => setMenuOpen(false)}>
                  Start a conversation <Icon name="arrow-up-right" size={16} />
                </Link>
              </aside>
            </div>

            <div className="v2-wrap sh-overlay-foot">
              <span>Hyderabad, India · Remote-first</span>
              <span>MENINGES LABS © {new Date().getFullYear()}</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {children}

      <footer className="sh-footer">
        <div className="v2-wrap sh-footer-top">
          <div className="sh-footer-brand">
            <img
              className="sh-footer-lockup"
              src="/brand-assets/logos/meninges-labs-lockup-tagline-white.png"
              alt="MENINGES LABS — Engineering Systems. Elevating Businesses."
              width="1800"
              height="263"
              loading="lazy"
            />
            <p>
              A digital engineering and growth partner connecting software, applied AI, automation, search and
              performance around the way a business actually works.
            </p>
            <span className="sh-footer-location">
              <Icon name="pin" size={15} /> Hyderabad, India · Remote-first
            </span>
          </div>

          <div className="sh-footer-col">
            <p>Explore</p>
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/work">Work</Link>
            <Link href="/insights">Insights</Link>
          </div>

          <div className="sh-footer-col">
            <p>Capabilities</p>
            {capabilities.map((item) => (
              <Link href={`/${item.slug}`} key={item.slug}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="sh-footer-col">
            <p>Company</p>
            <Link href="/about">About</Link>
            <Link href="/founder">Founder</Link>
            <Link href="/hyderabad">Hyderabad</Link>
            <Link href="/brand-assets">Brand assets</Link>
          </div>

          <div className="sh-footer-col sh-footer-contact">
            <p>Start a conversation</p>
            <a href={contactDetails.email}>info@meningeslabs.com</a>
            <a href={contactDetails.tel}>{contactDetails.phone}</a>
            <a href={socialLinks[0].href} target="_blank" rel="noreferrer">
              Instagram <Icon name="arrow-up-right" size={12} />
            </a>
            <Link className="sh-footer-cta" href="/contact">
              Discuss a project <Icon name="arrow-up-right" size={15} />
            </Link>
          </div>
        </div>

        <div className="v2-wrap sh-footer-bottom">
          <span>© {new Date().getFullYear()} MENINGES LABS</span>
          <span className="sh-footer-motto">Engineering Systems. Elevating Businesses.</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
