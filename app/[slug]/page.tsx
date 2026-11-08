import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pages, routes } from "../content";
import PageContent from "../page-content";

export function generateStaticParams() {
  return routes.filter((route) => route.slug).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = routes.find((item) => item.slug === slug);
  if (!route) return {};
  const canonical = `/${slug}`;
  const shareImage = "/images/meninges-labs-ai-agency-social-preview.png";
  const title = `${route.title} — MENINGES LABS`;
  const comingSoon = slug === "work" || slug === "insights";
  return {
    title: route.title,
    description: route.description,
    alternates: { canonical },
    robots: { index: !comingSoon, follow: true },
    openGraph: { type: "website", siteName: "MENINGES LABS", locale: "en_IN", title, description: route.description, url: `https://meningeslabs.com${canonical}`, images: [{ url: shareImage, width: 1200, height: 630, alt: "MENINGES LABS — AI-powered digital and intelligence agency" }] },
    twitter: { card: "summary_large_image", title, description: route.description, images: [shareImage] },
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!pages[slug]) notFound();
  return <PageContent slug={slug} />;
}
