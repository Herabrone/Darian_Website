import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { CommandMenu } from "@/components/layout/command-menu";
import { buildMetadata } from "@/lib/seo";
import { personJsonLd } from "@/lib/jsonld";
import { cn } from "@/lib/utils";

import "./globals.css";
import "katex/dist/katex.min.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darianlagman.ca"),
  applicationName: "Darian Lagman",
  authors: [{ name: "Darian Lagman", url: "https://darianlagman.ca" }],
  creator: "Darian Lagman",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  ...buildMetadata({
    title: "Darian Lagman — Full-stack engineer",
    description:
      "Full-stack engineer in Winnipeg, Canada. Building AI-assisted products with real systems underneath.",
  }),
  title: {
    default: "Darian Lagman — Full-stack engineer",
    template: "%s · Darian Lagman",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b36",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable, caveat.variable)}>
      <body className="text-[var(--color-fg-muted)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <CommandMenu />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
