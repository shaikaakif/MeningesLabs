import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://meningeslabs.com/brand-assets";
const shareImage = "/images/meninges-labs-ai-agency-social-preview.png";
const pageDescription = "Official MENINGES LABS brand assets: primary logo, descriptor lockup, ML monogram, application icon, favicon, social preview and founder portrait. Preview and download each file.";

export const metadata: Metadata = {
  title: { absolute: "Brand Assets — MENINGES LABS Logos, Monogram & App Icons" },
  description: pageDescription,
  alternates: { canonical: "/brand-assets" },
  openGraph: {
    type: "website",
    siteName: "MENINGES LABS",
    locale: "en_IN",
    title: "Brand Assets — MENINGES LABS Logos, Monogram & App Icons",
    description: pageDescription,
    url: pageUrl,
    images: [{ url: shareImage, width: 1200, height: 630, type: "image/png", alt: "MENINGES LABS social preview — AI-powered digital and intelligence agency" }],
  },
  twitter: { card: "summary_large_image", title: "MENINGES LABS Brand Assets", description: pageDescription, images: [shareImage] },
};

const assets = [
  {
    id: "primary-logo",
    title: "Primary logo",
    body: "The horizontal MENINGES LABS lockup with the ML monogram. Use this as the default website and document logo.",
    src: "/brand-assets/logos/meninges-labs-primary-logo-transparent.png",
    download: "/brand-assets/logos/meninges-labs-primary-logo-transparent.png",
    filename: "meninges-labs-primary-logo-transparent.png",
    width: 1814,
    height: 327,
    format: "PNG · transparent",
    alt: "MENINGES LABS primary logo: burgundy ML monogram beside the MENINGES LABS wordmark",
    layout: "wide",
  },
  {
    id: "descriptor-logo",
    title: "Logo with descriptor",
    body: "The primary lockup with the Digital Growth & Intelligence descriptor. Use where space allows a fuller company signature.",
    src: "/brand-assets/logos/meninges-labs-logo-with-descriptor-transparent.png",
    download: "/brand-assets/logos/meninges-labs-logo-with-descriptor-transparent.png",
    filename: "meninges-labs-logo-with-descriptor-transparent.png",
    width: 1818,
    height: 334,
    format: "PNG · transparent",
    alt: "MENINGES LABS logo with the descriptor Digital Growth & Intelligence beneath the wordmark",
    layout: "wide",
  },
  {
    id: "ml-monogram",
    title: "ML monogram",
    body: "The standalone geometric ML symbol. Use it where the company name is already established or at small sizes.",
    src: "/brand-assets/logos/meninges-labs-ml-monogram-transparent.png",
    download: "/brand-assets/logos/meninges-labs-ml-monogram-transparent.png",
    filename: "meninges-labs-ml-monogram-transparent.png",
    width: 695,
    height: 427,
    format: "PNG · transparent",
    alt: "MENINGES LABS ML monogram, a burgundy geometric symbol",
    layout: "symbol",
  },
  {
    id: "app-icon",
    title: "Application icon",
    body: "The square ML monogram on Papaya Whip. Use for app tiles, avatars and platform profiles.",
    src: "/brand-assets/app-icons/meninges-labs-app-icon-1024x1024.png",
    download: "/brand-assets/app-icons/meninges-labs-app-icon-1024x1024.png",
    filename: "meninges-labs-app-icon-1024x1024.png",
    width: 1024,
    height: 1024,
    format: "PNG · square",
    alt: "MENINGES LABS application icon: burgundy ML monogram on a Papaya Whip background",
    layout: "square",
  },
  {
    id: "favicon",
    title: "Favicon",
    body: "The multi-resolution browser icon, containing 16, 32, 48 and 256 pixel artwork. Served from the site root as favicon.ico.",
    src: "/favicon.ico",
    download: "/favicon.ico",
    filename: "meninges-labs-favicon.ico",
    width: 256,
    height: 256,
    format: "ICO · multi-resolution",
    alt: "MENINGES LABS favicon with the burgundy ML monogram",
    layout: "square",
  },
  {
    id: "social-preview",
    title: "Social sharing preview",
    body: "The 1200 × 630 Open Graph image used when MENINGES LABS links are shared on social platforms and messaging apps.",
    src: "/images/meninges-labs-ai-agency-social-preview.png",
    download: "/brand-assets/social/meninges-labs-social-preview-1200x630.png",
    filename: "meninges-labs-social-preview-1200x630.png",
    width: 1200,
    height: 630,
    format: "PNG",
    alt: "MENINGES LABS social preview: AI-powered digital and intelligence agency with the ML monogram on a cream background",
    layout: "social",
  },
  {
    id: "founder-portrait",
    title: "Founder portrait",
    body: "The official portrait of Aakif, Founder and AI Product Developer, used on the Founder's Desk.",
    src: "/brand-assets/photography/aakif-founder-meninges-labs-portrait.jpg",
    download: "/brand-assets/photography/aakif-founder-meninges-labs-portrait.jpg",
    filename: "aakif-founder-meninges-labs-portrait.jpg",
    width: 480,
    height: 640,
    format: "JPEG",
    alt: "Aakif, founder and AI product developer at MENINGES LABS, seated in a portrait photograph",
    layout: "portrait",
  },
];

export default function BrandAssetsPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${pageUrl}#page`,
      url: pageUrl,
      name: "MENINGES LABS Brand Assets",
      description: pageDescription,
      isPartOf: { "@id": "https://meningeslabs.com/#website" },
      about: { "@id": "https://meningeslabs.com/#organization" },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: assets.map((asset, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "ImageObject",
            name: asset.title,
            description: asset.alt,
            url: `https://meningeslabs.com${asset.src}`,
            contentUrl: `https://meningeslabs.com${asset.src}`,
            width: asset.width,
            height: asset.height,
            creator: { "@id": "https://meningeslabs.com/#organization" },
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://meningeslabs.com/" },
        { "@type": "ListItem", position: 2, name: "Brand Assets", item: pageUrl },
      ],
    },
  ];

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="page-hero">
        <p className="eyebrow reveal">Brand assets</p>
        <h1 className="display reveal delay" dangerouslySetInnerHTML={{ __html: "The identity,<br/>made <em>available.</em>" }} />
        <p className="intro reveal delay">The official MENINGES LABS logo, ML monogram, application icon, favicon, social preview and founder portrait. Each file below is the production version used across this website.</p>
        <div className="hero-meta"><span>Digital Growth &amp; Intelligence</span><span className="hero-index">OFFICIAL ASSET LIBRARY</span></div>
      </section>

      <section className="content-section brand-assets-section">
        <div className="section-inner">
          <p className="eyebrow">Download</p>
          <div>
            <h2 className="display section-title">Use the masters.<br/>Keep the geometry <em>exact.</em></h2>
            <p className="section-copy">Do not redraw, trace, recolour or generate variants of the logo. Use the supplied files, preserve transparency where present, and keep clear space around the mark.</p>
          </div>
        </div>
        <div className="brand-assets-grid">
          {assets.map((asset) => (
            <article className={`brand-asset-card asset-${asset.layout}`} key={asset.id}>
              <div className={`asset-preview preview-${asset.layout}`}>
                {/* Plain img keeps the exact original file and transparency intact. */}
                <img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" decoding="async" />
              </div>
              <div className="asset-details">
                <h3 className="display">{asset.title}</h3>
                <p>{asset.body}</p>
                <p className="asset-meta">{asset.format} · {asset.width} × {asset.height} px</p>
                <a className="asset-download" href={asset.download} download={asset.filename} aria-label={`Download ${asset.title}`}>{asset.format.startsWith("ICO") ? "Download ICO" : "Download file"} <span aria-hidden="true">↓</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section surface">
        <div className="section-inner">
          <p className="eyebrow">Usage notes</p>
          <div>
            <h2 className="display section-title">A few rules<br/>that protect the <em>identity.</em></h2>
            <p className="section-copy">The logo is burgundy on a warm light background. Place it on Papaya Whip, Warm Cream or another compatible light surface. For dark backgrounds, use a separately approved reversed version rather than recolouring these files.</p>
            <p className="section-copy">Keep the monogram and wordmark proportional. Do not stretch, rotate, outline or add effects. At favicon and app-icon sizes, use the supplied square artwork rather than the horizontal lockup.</p>
          </div>
        </div>
      </section>

      <section className="next-step">
        <div>
          <p className="eyebrow">Questions about usage</p>
          <h2 className="display">Ask before<br/>you adapt.</h2>
          <Link className="arrow-link" href="/contact">Contact Meninges Labs <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}
