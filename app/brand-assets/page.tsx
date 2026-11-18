import type { Metadata } from "next";
import Link from "next/link";
import { PageVisual } from "../system-visuals";
import { ClosingCTA, PageHero, SectionHead } from "../ui";
import { Icon } from "../icons";

const pageUrl = "https://meningeslabs.com/brand-assets";
const shareImage = "/images/meninges-labs-ai-agency-social-preview.png";
const pageDescription =
  "Official MENINGES LABS brand assets: orange identity, horizontal lockups, ML monogram, application icon, favicon, social preview and founder portrait.";

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
    images: [{ url: shareImage, width: 1200, height: 630, alt: "MENINGES LABS — digital engineering and growth partner" }],
  },
  twitter: { card: "summary_large_image", title: "MENINGES LABS Brand Assets", description: pageDescription, images: [shareImage] },
};

type Asset = {
  id: string;
  title: string;
  body: string;
  src: string;
  download: string;
  filename: string;
  width: number;
  height: number;
  format: string;
  alt: string;
  layout: "wide" | "symbol" | "square" | "social" | "portrait";
  tone?: "light" | "dark" | "orange";
};

const assets: Asset[] = [
  {
    id: "lockup-ink",
    title: "Primary lockup",
    body: "The horizontal MENINGES LABS lockup in ink. Use this as the default logo on cream, white and other light surfaces.",
    src: "/brand-assets/logos/meninges-labs-lockup-ink.png",
    download: "/brand-assets/logos/meninges-labs-lockup-ink.png",
    filename: "meninges-labs-lockup-ink.png",
    width: 1600,
    height: 217,
    format: "PNG · transparent",
    alt: "MENINGES LABS primary logo in ink: the ML monogram beside the MENINGES LABS wordmark",
    layout: "wide",
    tone: "light",
  },
  {
    id: "lockup-white",
    title: "Reversed lockup",
    body: "The white lockup for ink, photography and other dark surfaces. Do not recolour the primary lockup to create this variant.",
    src: "/brand-assets/logos/meninges-labs-lockup-white.png",
    download: "/brand-assets/logos/meninges-labs-lockup-white.png",
    filename: "meninges-labs-lockup-white.png",
    width: 1600,
    height: 217,
    format: "PNG · transparent",
    alt: "MENINGES LABS reversed logo in white on a dark panel",
    layout: "wide",
    tone: "dark",
  },
  {
    id: "tagline-lockup",
    title: "Lockup with tagline",
    body: "The complete lockup with “Engineering Systems. Elevating Businesses.” set in Allura. Use the tagline as one finished unit, never retyped or split.",
    src: "/brand-assets/logos/meninges-labs-lockup-tagline-white.png",
    download: "/brand-assets/logos/meninges-labs-lockup-tagline-white.png",
    filename: "meninges-labs-lockup-tagline-white.png",
    width: 1800,
    height: 263,
    format: "PNG · transparent",
    alt: "MENINGES LABS lockup with the complete tagline in Allura, set in white on a dark panel",
    layout: "wide",
    tone: "dark",
  },
  {
    id: "ml-monogram",
    title: "ML monogram",
    body: "The standalone ML symbol in orange. Use it where the company name is already established, at small sizes, or as a graphic device.",
    src: "/brand-assets/logos/meninges-labs-monogram-orange.png",
    download: "/brand-assets/logos/meninges-labs-monogram-orange.png",
    filename: "meninges-labs-monogram-orange.png",
    width: 828,
    height: 485,
    format: "PNG · transparent",
    alt: "MENINGES LABS ML monogram in orange",
    layout: "symbol",
    tone: "light",
  },
  {
    id: "app-icon",
    title: "Application icon",
    body: "The white monogram on the orange rounded square. Use for app tiles, avatars, platform profiles and installable web app icons.",
    src: "/brand-assets/app-icons/meninges-labs-app-icon-1024x1024.png",
    download: "/brand-assets/app-icons/meninges-labs-app-icon-1024x1024.png",
    filename: "meninges-labs-app-icon-1024x1024.png",
    width: 1024,
    height: 1024,
    format: "PNG · 1024 × 1024",
    alt: "MENINGES LABS application icon: white ML monogram on a rounded orange square",
    layout: "square",
    tone: "light",
  },
  {
    id: "favicon",
    title: "Favicon",
    body: "The multi-resolution browser icon containing 16, 32, 48, 64, 128 and 256 pixel artwork. Served from the site root as favicon.ico.",
    src: "/images/meninges-labs-favicon.png",
    download: "/favicon.ico",
    filename: "meninges-labs-favicon.ico",
    width: 64,
    height: 64,
    format: "ICO · multi-resolution",
    alt: "MENINGES LABS favicon with the white ML monogram on orange",
    layout: "square",
    tone: "light",
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
    format: "PNG · 1200 × 630",
    alt: "MENINGES LABS social sharing preview with the orange identity and tagline",
    layout: "social",
    tone: "light",
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
    format: "JPEG · 480 × 640",
    alt: "Aakif, founder and AI product developer at MENINGES LABS",
    layout: "portrait",
    tone: "light",
  },
];

const rules = [
  {
    title: "Use the supplied masters",
    body: "Do not redraw, trace, recolour or generate new variants of the monogram or wordmark. Preserve transparency and the original proportions.",
  },
  {
    title: "Protect the clear space",
    body: "Keep a margin of at least half the monogram's height around the lockup. Do not crowd it with text, other marks or the edge of a layout.",
  },
  {
    title: "Choose the right surface",
    body: "Use the ink lockup on cream and white. Use the white lockup on ink, photography and orange. Never place the ink lockup on a busy image.",
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

      <PageHero
        eyebrow="Brand assets · Version 2.0"
        title="The identity,<br/>made <em>available.</em>"
        intro="The official MENINGES LABS logo, ML monogram, application icon, favicon, social preview and founder portrait. Every file below is a production asset used across this website."
        visual={<PageVisual slug="brand-assets" />}
        meta={["Orange identity · Geist + Geist Mono", "Official asset library"]}
      >
        <div className="hero-actions">
          <a className="btn btn-primary" href="#downloads">
            Download assets <Icon name="arrow-right" size={17} />
          </a>
          <a className="btn btn-outline" href="#usage">
            Read usage rules <Icon name="file" size={17} />
          </a>
        </div>
      </PageHero>

      <section className="section asset-section" id="downloads">
        <div className="wrap">
          <SectionHead
            eyebrow="Download"
            title="Use the masters.<br/>Keep the geometry <em>exact.</em>"
            body="These are the current approved files. The ML monogram, wordmark and Allura tagline are one identity — use them as supplied."
          />
          <div className="asset-grid">
            {assets.map((asset) => (
              <article className={`asset-card asset-${asset.layout}`} key={asset.id}>
                <div className={`asset-preview asset-preview-${asset.layout} tone-${asset.tone ?? "light"}`}>
                  <img
                    src={asset.src}
                    alt={asset.alt}
                    width={asset.width}
                    height={asset.height}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="asset-info">
                  <div className="asset-heading">
                    <h3 className="display">{asset.title}</h3>
                    <span className="asset-chip">{asset.format}</span>
                  </div>
                  <p>{asset.body}</p>
                  <div className="asset-actions">
                    <a
                      className="asset-download"
                      href={asset.download}
                      download={asset.filename}
                      aria-label={`Download ${asset.title}`}
                    >
                      Download <Icon name="arrow-up-right" size={15} />
                    </a>
                    <span className="asset-meta">
                      {asset.width} × {asset.height} px
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section asset-usage-section" id="usage">
        <div className="wrap">
          <SectionHead
            eyebrow="Usage notes"
            title="A few rules<br/>that protect the <em>identity.</em>"
            body="The orange is the signature. The monogram is the constant. Everything else stays quiet around them."
          />
          <div className="asset-rules">
            {rules.map((rule, index) => (
              <article key={rule.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{rule.title}</h3>
                <p>{rule.body}</p>
              </article>
            ))}
          </div>
          <div className="asset-colour">
            <div className="asset-swatches" aria-label="Core colour palette">
              <span style={{ background: "#FF7300", color: "#202124" }}><b>Tangerine</b><small>#FF7300</small></span>
              <span style={{ background: "#D92603", color: "#FFFFFF" }}><b>Maximum Red</b><small>#D92603</small></span>
              <span style={{ background: "#FCD92A", color: "#202124" }}><b>Banana Yellow</b><small>#FCD92A</small></span>
              <span style={{ background: "#FBCC98", color: "#202124" }}><b>Peach</b><small>#FBCC98</small></span>
              <span style={{ background: "#FFF4E6", color: "#202124" }}><b>Warm Cream</b><small>#FFF4E6</small></span>
              <span style={{ background: "#FFFFFF", color: "#202124" }}><b>White</b><small>#FFFFFF</small></span>
              <span style={{ background: "#163B2D", color: "#FFF4E6" }}><b>Forest Green</b><small>#163B2D</small></span>
              <span style={{ background: "#14252B", color: "#FFF4E6" }}><b>Deep Navy</b><small>#14252B</small></span>
            </div>
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Type system
              </p>
              <p className="section-copy">
                <strong>Geist</strong> for headings and interface copy. <strong>Geist Mono</strong> for labels,
                metadata and technical notes. <strong>Allura</strong> appears only in the complete tagline lockup —
                never as a decorative heading font.
              </p>
              <a className="text-link" href="/contact">
                Ask about an adaptation <Icon name="arrow-up-right" size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA
        title="Questions about<br/>the identity?"
        body="If a use case is not covered here, ask before adapting the artwork. We would rather supply the right file than see the mark drift."
      />
    </main>
  );
}
