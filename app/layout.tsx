import type { Metadata, Viewport } from "next";
import "@fontsource/geist/400.css";
import "@fontsource/geist/500.css";
import "@fontsource/geist/600.css";
import "@fontsource/geist/700.css";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/500.css";
import "@fontsource/allura/400.css";
import "./globals.css";
import "./experience.css";
import SiteShell from "./site-shell";

const description =
  "MENINGES LABS engineers connected digital systems for business growth: websites, SaaS, applied AI, automation, search intelligence and performance marketing.";

export const metadata: Metadata = {
  metadataBase: new URL("https://meningeslabs.com"),
  applicationName: "MENINGES LABS",
  title: {
    default: "MENINGES LABS — Digital Engineering & Growth Partner",
    template: "%s — MENINGES LABS",
  },
  description,
  authors: [{ name: "Aakif", url: "https://shaikaakif.com" }],
  creator: "Aakif",
  publisher: "MENINGES LABS",
  keywords: [
    "MENINGES LABS",
    "Meninges Labs",
    "digital engineering partner",
    "digital growth partner Hyderabad",
    "AI systems agency",
    "SaaS development",
    "website development Hyderabad",
    "SEO AEO GEO services",
    "performance marketing Hyderabad",
    "AI automation agency",
    "growth intelligence consulting",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "MENINGES LABS",
    locale: "en_IN",
    title: "MENINGES LABS — Digital Engineering & Growth Partner",
    description,
    url: "https://meningeslabs.com/",
    images: [
      {
        url: "/images/meninges-labs-ai-agency-social-preview.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "MENINGES LABS — engineering connected digital systems for business growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MENINGES LABS — Digital Engineering & Growth Partner",
    description,
    images: ["/images/meninges-labs-ai-agency-social-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32 48x48 64x64 128x128 256x256" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF4E6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://meningeslabs.com/#organization",
      name: "MENINGES LABS",
      alternateName: ["Meninges Labs", "MENINGES LABS Digital Engineering & Growth"],
      url: "https://meningeslabs.com/",
      description,
      disambiguatingDescription:
        "MENINGES LABS is a digital engineering and growth partner. It is not a medical organisation and is not affiliated with the anatomical meninges, medicine or healthcare research.",
      slogan: "Engineering Systems. Elevating Businesses.",
      logo: {
        "@type": "ImageObject",
        "@id": "https://meningeslabs.com/#logo",
        url: "https://meningeslabs.com/brand-assets/logos/meninges-labs-lockup-orange.png",
        contentUrl: "https://meningeslabs.com/brand-assets/logos/meninges-labs-lockup-orange.png",
        width: 1800,
        height: 600,
        caption: "MENINGES LABS primary logo",
      },
      image: {
        "@type": "ImageObject",
        url: "https://meningeslabs.com/images/meninges-labs-ai-agency-social-preview.png",
        width: 1200,
        height: 630,
        caption: "MENINGES LABS — digital engineering and growth partner",
      },
      founder: { "@id": "https://meningeslabs.com/#aakif" },
      email: "info@meningeslabs.com",
      telephone: "+91 7671979762",
      sameAs: ["https://www.instagram.com/meningeslabs/"],
      areaServed: [
        { "@type": "City", name: "Hyderabad", containedInPlace: { "@type": "State", name: "Telangana" } },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "SaaS and software development",
        "Website engineering",
        "Applied AI solutions",
        "Intelligent automation",
        "Search intelligence",
        "SEO, AEO and GEO",
        "Performance marketing",
        "Digital growth strategy and consulting",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 7671979762",
        email: "info@meningeslabs.com",
        contactType: "sales",
        availableLanguage: "English",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://meningeslabs.com/#aakif",
      name: "Aakif",
      jobTitle: "Founder & AI Product Developer",
      worksFor: { "@id": "https://meningeslabs.com/#organization" },
      url: "https://shaikaakif.com",
      sameAs: ["https://shaikaakif.com"],
      image: {
        "@type": "ImageObject",
        url: "https://meningeslabs.com/brand-assets/photography/aakif-founder-meninges-labs-portrait.jpg",
        width: 480,
        height: 640,
        caption: "Aakif, founder and AI product developer at MENINGES LABS",
      },
      description:
        "Aakif is the founder and AI product developer at MENINGES LABS, working across software products, applied AI and practical digital automation.",
      knowsAbout: ["Software products", "Applied AI", "Digital automation", "Digital growth systems"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://meningeslabs.com/#website",
      name: "MENINGES LABS",
      alternateName: "Meninges Labs",
      url: "https://meningeslabs.com/",
      publisher: { "@id": "https://meningeslabs.com/#organization" },
      inLanguage: "en-IN",
    },
  ];

  return (
    <html lang="en-IN">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
