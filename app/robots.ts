import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all search engines and legitimate crawlers
      {
        userAgent: "*",
        allow: "/",
      },

      // Google Search and AI
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },

      // Bing Search
      {
        userAgent: "Bingbot",
        allow: "/",
      },

      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },

      // OpenAI / ChatGPT
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },

      // Anthropic / Claude
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Claude-User",
        allow: "/",
      },
    ],

    sitemap: "https://meningeslabs.com/sitemap.xml",
    host: "https://meningeslabs.com",
  };
}