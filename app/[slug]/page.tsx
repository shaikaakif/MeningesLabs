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
  return { title: route.title, description: route.description };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!pages[slug]) notFound();
  return <PageContent slug={slug} />;
}
