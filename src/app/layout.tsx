import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "JAGUARDEVS | Sites, sistemas e automações para sua empresa",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "JAGUARDEVS | Soluções digitais sob medida",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/brand/jaguardevs-share.jpg", width: 1600, height: 800, alt: "JAGUARDEVS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAGUARDEVS | Soluções digitais sob medida",
    description: siteConfig.description,
    images: ["/brand/jaguardevs-share.jpg"],
  },
  icons: { icon: "/brand/jaguardevs-symbol.png", apple: "/brand/jaguardevs-symbol.png" },
};

export const viewport: Viewport = { themeColor: "#080c12", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsapp.number}`,
    areaServed: { "@type": "Country", name: "Brazil" },
    description: siteConfig.description,
  };

  return (
    <html lang="pt-BR" className={`${sora.variable} ${manrope.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
