import PageContent from "./page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "MENINGES LABS | AI-Powered Digital Agency & Digital Growth" },
  description: "MENINGES LABS is an AI-powered digital growth agency for Hyderabad businesses: SaaS, websites, applied AI, automation and search-led growth.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MENINGES LABS | AI-Powered Digital Agency & Digital Growth",
    description: "MENINGES LABS is an AI-powered digital growth agency for Hyderabad businesses: SaaS, websites, applied AI, automation and search-led growth.",
    url: "https://meningeslabs.com/",
    images: [{ url: "/images/meninges-labs-ai-agency-social-preview.png", width: 1200, height: 630, alt: "MENINGES LABS — AI-powered digital agency for SaaS, websites, applied AI and digital growth" }],
  },
  twitter: { card: "summary_large_image", title: "MENINGES LABS | AI-Powered Digital Agency & Digital Growth", description: "MENINGES LABS is an AI-powered digital growth agency for Hyderabad businesses: SaaS, websites, applied AI, automation and search-led growth.", images: ["/images/meninges-labs-ai-agency-social-preview.png"] },
};

export default function HomePage() {
  return <PageContent slug="" />;
}
