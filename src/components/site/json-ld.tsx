import { SITE, abs } from "@/lib/site";

/** Structured data that tells Google who the business is and where it works. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const BUSINESS_ID = `${SITE.url}/#business`;

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: SITE.name,
  description:
    "After-hours and short-notice office cleaning, plus home cleaning, in Burnaby and Greater Vancouver.",
  url: abs("/"),
  logo: abs("/roshan-logo.png"),
  image: abs("/og-image.png"),
  telephone: `+1-${SITE.phone}`,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: "CA",
  },
  areaServed: SITE.serviceAreas.map((name) => ({ "@type": "City", name })),
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "After-hours office cleaning", url: abs("/office-cleaning/") } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home cleaning", url: abs("/home-cleaning/") } },
  ],
};

export function serviceJsonLd(name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: abs(path),
    provider: { "@id": BUSINESS_ID },
    areaServed: SITE.serviceAreas.map((n) => ({ "@type": "City", name: n })),
  };
}
