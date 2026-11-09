import type { MetadataRoute } from "next";
import { routes } from "./content";

const base = "https://meningeslabs.com";

const imagesByPage: Record<string, string[]> = {
  "": [
    `${base}/images/meninges-labs-ai-agency-social-preview.png`,
    `${base}/brand-assets/logos/meninges-labs-primary-logo-transparent.png`,
  ],
  about: [
    `${base}/brand-assets/logos/meninges-labs-primary-logo-transparent.png`,
    `${base}/brand-assets/logos/meninges-labs-logo-with-descriptor-transparent.png`,
  ],
  founder: [`${base}/brand-assets/photography/aakif-founder-meninges-labs-portrait.jpg`],
  "brand-assets": [
    `${base}/brand-assets/logos/meninges-labs-primary-logo-transparent.png`,
    `${base}/brand-assets/logos/meninges-labs-logo-with-descriptor-transparent.png`,
    `${base}/brand-assets/logos/meninges-labs-ml-monogram-transparent.png`,
    `${base}/brand-assets/app-icons/meninges-labs-app-icon-1024x1024.png`,
    `${base}/images/meninges-labs-ai-agency-social-preview.png`,
    `${base}/brand-assets/photography/aakif-founder-meninges-labs-portrait.jpg`,
  ],
  contact: [`${base}/brand-assets/logos/meninges-labs-logo-with-descriptor-transparent.png`],
  hyderabad: [
    `${base}/images/meninges-labs-ai-agency-social-preview.png`,
    `${base}/brand-assets/logos/meninges-labs-primary-logo-transparent.png`,
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const seen = new Set<string>();
  return routes
    .filter(({ noindex }) => !noindex)
    .map<MetadataRoute.Sitemap[number]>(({ slug }) => ({
      url: slug ? `${base}/${slug}` : `${base}/`,
      lastModified: now,
      changeFrequency: slug === "" ? "weekly" : "monthly",
      priority: slug === "" ? 1 : ["about", "founder", "brand-assets", "hyderabad"].includes(slug) ? 0.8 : 0.7,
      images: imagesByPage[slug],
    }))
    .filter(({ url }) => {
      if (seen.has(url)) return false;
      seen.add(url);
      return true;
    });
}
