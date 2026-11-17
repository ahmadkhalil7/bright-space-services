import type { NextConfig } from "next";

// Static export so the site can be hosted for free (GitHub Pages).
// BASE_PATH is "/bright-space-services" while the site lives at
// ahmadkhalil7.github.io/bright-space-services, and empty once it moves
// to its own domain (roshancleaning.ca).
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
