import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pages, routes } from "../content";
import PageContent, { pageMetadata } from "../page-content";

const customRoutes = ["about", "founder", "brand-assets", "hyderabad"];

export function generateStaticParams() {
  return routes
    .filter((route) => route.slug && !customRoutes.includes(route.slug))
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(slug);
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!pages[slug]) notFound();
  return <PageContent slug={slug} />;
}
