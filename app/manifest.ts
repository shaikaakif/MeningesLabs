import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MENINGES LABS — Digital Engineering & Growth Partner",
    short_name: "MENINGES LABS",
    description:
      "MENINGES LABS engineers connected digital systems for business growth: websites, SaaS, applied AI, automation, search intelligence and performance marketing.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF4E6",
    theme_color: "#FF7300",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-1024.png", sizes: "1024x1024", type: "image/png", purpose: "any" },
    ],
  };
}
