import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteShell from "./site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://meningeslabs.com"),
  title: { default: "MENINGES LABS | AI-Powered Digital & Intelligence Agency", template: "%s — MENINGES LABS" },
  description: "Meninges Labs is an AI-powered digital and intelligence agency building digital products, lead generation systems, and end-to-end automation.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "MENINGES LABS",
    locale: "en_IN",
    title: "MENINGES LABS | AI-Powered Digital & Intelligence Agency",
    description: "Meninges Labs is an AI-powered digital and intelligence agency building digital products, lead generation systems, and end-to-end automation.",
    url: "https://meningeslabs.com/",
    images: [{ url: "/images/meninges-labs-primary-transparent.png", width: 1200, height: 630, alt: "MENINGES LABS primary logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MENINGES LABS | AI-Powered Digital & Intelligence Agency",
    description: "Meninges Labs is an AI-powered digital and intelligence agency building digital products, lead generation systems, and end-to-end automation.",
    images: ["/images/meninges-labs-ai-agency-social-preview.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }, { url: "/images/meninges-labs-favicon.png", type: "image/png", sizes: "64x64" }, { url: "/icon-192.png", type: "image/png", sizes: "192x192" }, { url: "/icon-512.png", type: "image/png", sizes: "512x512" }],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { themeColor: "#F7F0E6", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    { "@context": "https://schema.org", "@type": "Organization", "@id": "https://meningeslabs.com/#organization", name: "MENINGES LABS", url: "https://meningeslabs.com/", description: "Meninges Labs is an AI-powered digital and intelligence agency building digital products, lead generation systems, and end-to-end automation.", logo: "https://meningeslabs.com/images/meninges-labs-ai-digital-intelligence-agency-logo.webp", email: "meningeslabs@gmail.com", telephone: "+91 7671979762", sameAs: ["https://www.instagram.com/meningeslabs/"], contactPoint: { "@type": "ContactPoint", telephone: "+91 7671979762", email: "meningeslabs@gmail.com", contactType: "sales" } },
    { "@context": "https://schema.org", "@type": "WebSite", "@id": "https://meningeslabs.com/#website", name: "MENINGES LABS", url: "https://meningeslabs.com/", publisher: { "@id": "https://meningeslabs.com/#organization" }, inLanguage: "en-IN" },
  ];
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><SiteShell>{children}</SiteShell></body></html>;
}
