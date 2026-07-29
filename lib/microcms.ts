import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type MicroCMSImage = {
  url: string;
  width: number;
  height: number;
};

export type NewsItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  category: string;
  thumbnail: MicroCMSImage;
  excerpt?: string;
  body?: string;
};

export type WorkItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  image: MicroCMSImage;
  category: { fieldId: string };
  subcategory: { fieldId: string };
  size: { fieldId: string };
};

export type ServiceItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  image: MicroCMSImage;
  description: string;
  price?: string;
  duration?: string;
  body?: string;
};
