import type { NextConfig } from "next";

// Static export so the site can be hosted for free (GitHub Pages).
// BASE_PATH is "/bright-space-services" while the site lives at
// ahmadkhalil7.github.io/bright-space-services, and empty once it moves
// to its own domain (roshancleaning.ca).
const basePath = process.env.BASE_PATH ?? "";
// Full public address of the site, used for SEO (canonical links, sitemap, structured data).
const siteUrl =
  process.env.SITE_URL ?? (basePath ? `https://ahmadkhalil7.github.io${basePath}` : "https://roshancleaning.ca");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_SITE_URL: siteUrl },
};

export default nextConfig;
