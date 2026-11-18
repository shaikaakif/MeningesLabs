import type { MetadataRoute } from "next";
import { routes } from "./content";

const base = "https://meningeslabs.com";
const social = `${base}/images/meninges-labs-ai-agency-social-preview.png`;
const lockupOrange = `${base}/brand-assets/logos/meninges-labs-lockup-orange.png`;
const lockupWhite = `${base}/brand-assets/logos/meninges-labs-lockup-white.png`;
const taglineLockup = `${base}/brand-assets/logos/meninges-labs-lockup-tagline-orange.png`;
const monogram = `${base}/brand-assets/logos/meninges-labs-monogram-orange.png`;
const appIcon = `${base}/brand-assets/app-icons/meninges-labs-app-icon-1024x1024.png`;
const portrait = `${base}/brand-assets/photography/aakif-founder-meninges-labs-portrait.jpg`;

const imagesByPage: Record<string, string[]> = {
  "": [social, lockupOrange, appIcon],
  services: [monogram, lockupOrange],
  "digital-engineering": [lockupOrange],
  "search-intelligence": [lockupOrange],
  "performance-marketing": [lockupOrange],
  "ai-automation": [lockupOrange],
  "growth-intelligence": [lockupOrange],
  industries: [social],
  hyderabad: [social, monogram],
  about: [taglineLockup, lockupOrange, portrait],
  founder: [portrait, social],
  "brand-assets": [lockupOrange, lockupWhite, taglineLockup, monogram, appIcon, social],
  contact: [lockupOrange],
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
      priority: slug === "" ? 1 : ["about", "founder", "hyderabad"].includes(slug) ? 0.8 : 0.7,
      images: imagesByPage[slug],
    }))
    .filter(({ url }) => {
      if (seen.has(url)) return false;
      seen.add(url);
      return true;
    });
}
