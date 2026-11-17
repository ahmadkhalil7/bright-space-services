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
  // Quote requests are sent here and forwarded to the email above (FormSubmit, free).
  // Set to "" to fall back to opening a pre-filled text/email instead.
  formEndpoint: "https://formsubmit.co/ajax/roshancleaning@gmail.com",
} as const;

export const telHref = `tel:+1${SITE.phone.replace(/[^0-9]/g, "")}`;
export const mailHref = `mailto:${SITE.email}`;
