import type { Metadata } from "next";
import HomePage from "./home-page";

const description =
  "MENINGES LABS engineers connected digital systems for business growth: websites, SaaS, applied AI, automation, search intelligence and performance marketing.";

export const metadata: Metadata = {
  title: { absolute: "MENINGES LABS — Digital Engineering & Growth Partner" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "MENINGES LABS — Digital Engineering & Growth Partner",
    description,
    url: "https://meningeslabs.com/",
    images: [
      {
        url: "/images/meninges-labs-ai-agency-social-preview.png",
        width: 1200,
        height: 630,
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
};

export default function Page() {
  return <HomePage />;
}
