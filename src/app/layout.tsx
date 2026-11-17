import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const outfit = localFont({
  src: "./fonts/Outfit.ttf",
  variable: "--font-outfit",
  weight: "100 900",
  display: "swap",
});

// Basic metadata; full SEO setup comes in Step 5.
export const metadata: Metadata = {
  title: `${SITE.name} | Office & Home Cleaning in Burnaby`,
  description:
    "After-hours and short-notice office cleaning, plus home cleaning, in Burnaby, Vancouver, New Westminster and Coquitlam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body className={`${outfit.variable} font-sans antialiased bg-white text-navy`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
