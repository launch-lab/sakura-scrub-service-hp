import type { MetadataRoute } from "next";
import { client } from "@/lib/microcms";
import { getSiteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();

  const [serviceIds, newsIds, worksIds] = await Promise.all([
    client.getAllContentIds({ endpoint: "services" }),
    client.getAllContentIds({ endpoint: "news" }),
    client.getAllContentIds({ endpoint: "works" }),
  ]);

  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceIds.map((id) => ({
      url: `${siteUrl}/services/${id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...newsIds.map((id) => ({
      url: `${siteUrl}/news/${id}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...worksIds.map((id) => ({
      url: `${siteUrl}/works/${id}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
