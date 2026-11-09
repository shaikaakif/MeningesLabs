import Link from "next/link";
import { contactDetails, pages, routes, socialLinks } from "./content";
import FAQSection from "./faq-section";
import HeroReel from "./hero-reel";
import LayersExplorer from "./layers-explorer";
import ServiceDiagram from "./service-diagram";
import FluxLines from "./flux-lines";

export default function PageContent({ slug }: { slug: string }) {
  const page = pages[slug];
  if (!page) return null;
  const route = routes.find((item) => item.slug === slug);
  const url = `https://meningeslabs.com${slug ? `/${slug}` : "/"}`;
  const pageName = (route?.title ?? "MENINGES LABS").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const isService = ["digital-engineering", "search-intelligence", "performance-marketing", "ai-automation", "growth-intelligence"].includes(slug);
  const schema = [
    { "@context": "https://schema.org", "@type": isService ? "Service" : "WebPage", "@id": `${url}#page`, url, name: pageName, description: route?.description, isPartOf: { "@id": "https://meningeslabs.com/#website" }, ...(isService ? { provider: { "@id": "https://meningeslabs.com/#organization" }, serviceType: pageName, areaServed: [{ "@type": "City", name: "Hyderabad" }, { "@type": "Country", name: "India" }] } : { about: { "@id": "https://meningeslabs.com/#organization" } }) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meningeslabs.com/" }, ...(slug ? [{ "@type": "ListItem", position: 2, name: pageName, item: url }] : [])] },
  ];
  return <main id="main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    {slug === "" ? <section className="home-hero">
      <FluxLines className="home-flux" colors={["#780000", "#C1121F", "#669BBC"]} speed={0.35} scale={1.6} turbulence={1} fluidity={0.1} rimWidth={0.2} sharpness={2.5} shimmer={0.8} glow={0.8} lineWidth={1} flowDirection="down" mouseInteraction mouseStrength={0.7} mouseRadius={0.35} mouseDampening={0.15} clickSwirl intro lightMode transparent opacity={0.76} />
      <div className="home-copy"><p className="eyebrow reveal">{page.eyebrow}</p><h1 className="display reveal delay" dangerouslySetInnerHTML={{ __html: page.title }} /><p className="intro reveal delay">{page.intro}</p><div className="home-actions"><Link href="/contact" className="contact-cta">Discuss a project <span aria-hidden="true">↗</span></Link><Link href="/hyderabad" className="arrow-link">Digital growth in Hyderabad <span aria-hidden="true">↗</span></Link></div><span className="home-index">01 / {routes.length}&nbsp;&nbsp;—&nbsp;&nbsp;The Architecture of Autopilot</span></div>
      <HeroReel />
      <p className="home-rail">Build <i/> Acquire <i/> Convert <i/> Automate <i/> Optimise</p>
    </section> : <section className="page-hero">
      <p className="eyebrow reveal">{page.eyebrow}</p><h1 className="display reveal delay" dangerouslySetInnerHTML={{ __html: page.title }} /><p className="intro reveal delay">{page.intro}</p>
      <div className="hero-meta"><span>{page.label}</span><span className="hero-index">{String(routes.findIndex((route) => route.slug === slug) + 1).padStart(2, "0")} / {routes.length}</span></div>
      {page.statusItems && <div className="coming-soon-tags">{page.statusItems.map((item) => <span key={item}>{item} <b>Coming Soon</b></span>)}</div>}
    </section>}
    {slug === "contact" && <section className="contact-options"><div><p className="eyebrow">Direct lines</p><h2 className="display">Choose how<br/>to reach us.</h2><p className="section-copy">No forms. Pick the channel that works for you.</p></div><div className="contact-actions">
      <a className="contact-action contact-whatsapp" href={contactDetails.whatsapp} target="_blank" rel="noreferrer"><span><b>WhatsApp</b><small>Message ready to send</small></span><i aria-hidden="true">↗</i></a>
      <a className="contact-action" href={contactDetails.tel}><span><b>Call now</b><small>{contactDetails.phone}</small></span><i aria-hidden="true">↗</i></a>
      <a className="contact-action" href={contactDetails.email}><span><b>Email</b><small>info@meningeslabs.com</small></span><i aria-hidden="true">↗</i></a>
      {socialLinks.map((social) => <a className="contact-action" href={social.href} key={social.label} target="_blank" rel="noreferrer"><span><b>{social.label}</b><small>Follow along</small></span><i aria-hidden="true">↗</i></a>)}
    </div></section>}
    {slug && <ServiceDiagram slug={slug} />}
    {page.sections.map((section, index) => <section className={`content-section ${index % 2 ? "surface" : ""}`} key={section.title}>
      <div className="section-inner"><p className="eyebrow">{section.eyebrow}</p><div><h2 className="display section-title">{section.title}</h2><p className="section-copy">{section.body}</p></div></div>
      {!!page.steps?.length && index === 1 && <div className="steps">{page.steps.map((step, i) => <article key={step}><span>0{i + 1}</span><h3>{step}</h3></article>)}</div>}
    </section>)}
    {slug === "services" && <LayersExplorer />}
    {!!page.cards?.length && <section className="content-section service-list"><div className="section-inner"><p className="eyebrow">{slug === "" ? "Connected practice" : "In scope"}</p><div><h2 className="display section-title">{slug === "" ? "Build a system that fits." : "Areas of work"}</h2><p className="section-copy">Start with the need. Define the work. Connect the pieces that belong together.</p></div></div><div className="card-grid">{page.cards.map((card, i) => <article className="service-card" key={card.title}><span>{card.number ?? String(i + 1).padStart(2, "0")}</span><h3 className="display">{card.title}</h3><p>{card.body}</p>{card.href && <Link className="arrow-link" href={card.href}>Explore <span>↗</span></Link>}</article>)}</div></section>}
    {!!page.related?.length && <section className="content-section related-section"><div className="section-inner"><p className="eyebrow">Related</p><div><h2 className="display section-title">Keep exploring.</h2><p className="section-copy">Useful next pages for the work around this capability.</p></div></div><div className="related-links">{page.related.map((relatedSlug) => { const relatedRoute = routes.find((item) => item.slug === relatedSlug); if (!relatedRoute) return null; return <Link key={relatedSlug} href={relatedSlug ? `/${relatedSlug}` : "/"}><span>{relatedRoute.nav}</span><i aria-hidden="true">↗</i></Link>; })}</div></section>}
    {page.faqGroups && <FAQSection groups={page.faqGroups} limit={slug === "contact" ? 6 : undefined} id={slug === "services" ? "faq" : undefined} />}
    {page.quote && <section className="statement"><blockquote>{page.quote}</blockquote><span>{page.quoteBy}</span></section>}
    {slug !== "contact" && slug !== "" && <section className="next-step"><div><p className="eyebrow">A useful next step</p><h2 className="display">Talk through<br/>the actual need.</h2><Link className="arrow-link" href="/contact">Contact Meninges Labs <span>↗</span></Link></div></section>}
    {slug === "" && <section className="home-contact"><p className="eyebrow">When you’re ready</p><h2 className="display">Let’s make the pieces<br/>work <em>together.</em></h2><Link href="/contact" className="contact-cta">Start a conversation <span>↗</span></Link></section>}
  </main>;
}
