import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MENINGES LABS",
    short_name: "MENINGES LABS",
    description: "Meninges Labs is an AI-powered digital growth, engineering and intelligence agency building digital products, lead generation systems, and end-to-end automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F0E6",
    theme_color: "#F7F0E6",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
  };
}
