import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteShell from "./site-shell";

export const metadata: Metadata = {
  title: { default: "MENINGES LABS — Digital Growth & Intelligence", template: "%s — MENINGES LABS" },
  description: "Connected digital growth infrastructure, engineered around your business needs.",
  icons: { icon: "/brand/favicon.ico" },
};

export const viewport: Viewport = { themeColor: "#F7F0E6", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
