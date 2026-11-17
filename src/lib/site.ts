// Single source of truth for business details used across the site.
// Change a value here and it updates everywhere.

export const SITE = {
  name: "Roshan Cleaning Services",
  shortName: "Roshan Cleaning",
  tagline: "After-Hours & Short-Notice Office Cleaning",
  meaning: "Roshan means “bright” in Dari, Pashto and Persian.",
  phone: "778-674-0836",
  email: "roshancleaning@gmail.com",
  city: "Burnaby",
  region: "BC",
  serviceAreas: ["Burnaby", "Vancouver", "New Westminster", "Coquitlam"],
  // Leave empty until the quote form is connected (Step 4).
  formspreeEndpoint: "",
} as const;

export const telHref = `tel:+1${SITE.phone.replace(/[^0-9]/g, "")}`;
export const mailHref = `mailto:${SITE.email}`;
