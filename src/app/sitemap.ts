import type { MetadataRoute } from "next";
import { abs } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: abs("/"), changeFrequency: "monthly", priority: 1 },
    { url: abs("/office-cleaning/"), changeFrequency: "monthly", priority: 0.9 },
    { url: abs("/home-cleaning/"), changeFrequency: "monthly", priority: 0.9 },
  ];
}
