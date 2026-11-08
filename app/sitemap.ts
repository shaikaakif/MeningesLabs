import type { MetadataRoute } from "next";
import { routes } from "./content";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.filter(({ slug }) => !["work", "insights"].includes(slug)).map(({ slug }) => ({
    url: `https://meningeslabs.com/${slug}`,
  }));
}
