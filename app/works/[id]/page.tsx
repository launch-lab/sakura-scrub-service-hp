import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { client, type WorkItem } from "@/lib/microcms";
import { getSiteUrl, site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const data = await client.getAllContentIds({ endpoint: "works" });
  return data.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const item = await client.getListDetail<WorkItem>({
      endpoint: "works",
      contentId: id,
    });
    const siteUrl = getSiteUrl();
    const pageUrl = `${siteUrl}/works/${id}`;
    const description = `${site.name}の施工事例：${item.title}`;
    return {
      title: item.title,
      description,
      alternates: { canonical: pageUrl },
      openGraph: {
        title: `${item.title} | 施工事例 | ${site.name}`,
        description,
        url: pageUrl,
        siteName: site.name,
        locale: "ja_JP",
        type: "website",
        images: item.image?.url
          ? [{ url: item.image.url, alt: item.title, width: item.image.width, height: item.image.height }]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: `${item.title} | 施工事例 | ${site.name}`,
        description,
        images: item.image?.url ? [item.image.url] : undefined,
      },
    };
  } catch {
    return { title: "施工事例" };
  }
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;

  let item: WorkItem;
  try {
    item = await client.getListDetail<WorkItem>({
      endpoint: "works",
      contentId: id,
      customRequestInit: { next: { revalidate: 3600 } },
    });
  } catch {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const category = item.category?.fieldId ?? "";
  const subcategory = item.subcategory?.fieldId ?? "";
  const description = `${site.name}の施工事例：${item.title}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: item.title,
    description,
    url: `${siteUrl}/works/${id}`,
    image: item.image?.url,
    datePublished: item.publishedAt,
    dateModified: item.revisedAt,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
    },
  };

  return (
    <main className="mx-auto max-w-[900px] px-5 py-24 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", item: siteUrl },
          { name: "施工事例", item: `${siteUrl}/#works` },
          { name: item.title },
        ]}
      />

      <Link
        href="/#works"
        className="inline-flex items-center gap-2 font-accent text-sm text-muted transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        施工事例に戻る
      </Link>

      <article className="mt-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-background sm:aspect-[16/10]">
          <Image
            src={item.image.url}
            alt={item.title}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {category && (
            <span className="rounded-full border border-sakura-400/40 px-3 py-0.5 font-accent text-xs text-sakura-500">
              {category}
            </span>
          )}
          {subcategory && (
            <span className="rounded-full border border-border px-3 py-0.5 font-accent text-xs text-subtle">
              {subcategory}
            </span>
          )}
        </div>

        <h1 className="mt-6 text-3xl font-medium leading-snug text-foreground md:text-4xl lg:text-5xl">
          {item.title}
        </h1>

        <div className="mt-16 border-t border-border pt-12 text-center">
          <p className="text-base text-muted">
            同じようなご状況でお困りではありませんか？お気軽にご相談ください
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${site.phone.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-sakura-500 px-8 py-3 font-medium text-white transition hover:bg-sakura-600"
            >
              {site.phone}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 font-medium text-foreground transition hover:border-foreground"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
