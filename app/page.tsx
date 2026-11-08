import PageContent from "./page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Digital & Intelligence Agency",
  description: "Meninges Labs is an AI-powered digital and intelligence agency building digital products, lead generation systems, and end-to-end automation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MENINGES LABS | AI-Powered Digital & Intelligence Agency",
    description: "Meninges Labs is an AI-powered digital and intelligence agency building digital products, lead generation systems, and end-to-end automation.",
    url: "https://meningeslabs.com/",
    images: [{ url: "/images/meninges-labs-ai-agency-social-preview.png", width: 1200, height: 630, alt: "MENINGES LABS — AI-powered digital and intelligence agency, digital products, lead generation, and end-to-end automation" }],
  },
  twitter: { card: "summary_large_image", title: "MENINGES LABS | AI-Powered Digital & Intelligence Agency", description: "Meninges Labs is an AI-powered digital and intelligence agency building digital products, lead generation systems, and end-to-end automation.", images: ["/images/meninges-labs-ai-agency-social-preview.png"] },
};

export default function HomePage() {
  return <PageContent slug="" />;
}
