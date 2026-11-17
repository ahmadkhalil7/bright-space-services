// Single source of truth for business details used across the site.
// Change a value here and it updates everywhere.

export const SITE = {
  // Public address of the site (set at build time in next.config.ts).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://roshancleaning.ca",
  name: "Roshan Cleaning Services",
  shortName: "Roshan Cleaning",
  tagline: "After-Hours & Short-Notice Office Cleaning",
  meaning: "Roshan means “bright” in Dari, Pashto and Persian.",
  phone: "778-674-0836",
  email: "roshancleaning@gmail.com",
  city: "Burnaby",
  region: "BC",
  serviceAreas: ["Burnaby", "Vancouver", "New Westminster", "Coquitlam"],
  // Paste the code from Google Search Console here (Step 7), e.g. "abc123...".
  googleVerification: "",
  // Quote requests are sent here and forwarded to the email above (FormSubmit, free).
  // Set to "" to fall back to opening a pre-filled text/email instead.
  formEndpoint: "https://formsubmit.co/ajax/roshancleaning@gmail.com",
} as const;

export const telHref = `tel:+1${SITE.phone.replace(/[^0-9]/g, "")}`;
export const mailHref = `mailto:${SITE.email}`;

/** Absolute URL for a path on this site, e.g. abs("/office-cleaning/"). */
export const abs = (path: string) => `${SITE.url}${path}`;
