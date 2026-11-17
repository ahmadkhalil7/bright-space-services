import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { QuickQuote } from "@/components/site/quick-quote";
import { JsonLd, businessJsonLd } from "@/components/site/json-ld";

const outfit = localFont({
  src: "./fonts/Outfit.woff2",
  variable: "--font-outfit",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE.url}/`),
  title: {
    default: `${SITE.name} | After-Hours Office & Home Cleaning in Burnaby`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "After-hours and short-notice office cleaning, plus home cleaning, in Burnaby, Vancouver, New Westminster and Coquitlam. Free quotes.",
  applicationName: SITE.name,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: SITE.name,
    url: "./",
    images: [{ url: "og-image.png", width: 1200, height: 630, alt: `${SITE.name}: after-hours office cleaning and home cleaning` }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
  ...(SITE.googleVerification ? { verification: { google: SITE.googleVerification } } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body className={`${outfit.variable} font-sans antialiased bg-white text-navy pb-20 md:pb-0`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <QuickQuote />
        <JsonLd data={businessJsonLd} />
      </body>
    </html>
  );
}
