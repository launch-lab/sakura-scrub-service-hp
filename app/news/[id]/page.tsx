import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { client, type NewsItem } from "@/lib/microcms";
import { getSiteUrl, site } from "@/lib/site";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const data = await client.getAllContentIds({ endpoint: "news" });
  return data.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const item = await client.getListDetail<NewsItem>({
      endpoint: "news",
      contentId: id,
    });
    const siteUrl = getSiteUrl();
    return {
      title: item.title,
      description: item.excerpt,
      openGraph: {
        title: `${item.title} | ${site.name}`,
        description: item.excerpt,
        url: `${siteUrl}/news/${id}`,
        siteName: site.name,
        locale: "ja_JP",
        type: "article",
        publishedTime: item.publishedAt,
        images: item.thumbnail?.url
          ? [{ url: item.thumbnail.url, alt: item.title }]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: `${item.title} | ${site.name}`,
        description: item.excerpt,
        images: item.thumbnail?.url ? [item.thumbnail.url] : undefined,
      },
    };
  } catch {
    return { title: "お知らせ" };
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;

  let item: NewsItem;
  try {
    item = await client.getListDetail<NewsItem>({
      endpoint: "news",
      contentId: id,
      customRequestInit: { next: { revalidate: 3600 } },
    });
  } catch {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const publishedDate = item.publishedAt.slice(0, 10);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.excerpt,
    datePublished: item.publishedAt,
    dateModified: item.revisedAt,
    url: `${siteUrl}/news/${id}`,
    image: item.thumbnail?.url,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
    },
  };

  return (
    <main className="mx-auto max-w-[860px] px-5 py-24 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/#news"
        className="inline-flex items-center gap-2 font-accent text-sm text-muted transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        お知らせに戻る
      </Link>

      <article className="mt-12">
        {item.thumbnail?.url && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-background">
            <Image
              src={item.thumbnail.url}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 860px"
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-10 flex items-center gap-4">
          <time
            dateTime={publishedDate}
            className="font-accent text-sm text-subtle"
          >
            {publishedDate.replace(/-/g, ".")}
          </time>
          {item.category && (
            <span className="rounded-full border border-sky-400/40 px-3 py-0.5 font-accent text-xs text-sky-500">
              {item.category}
            </span>
          )}
        </div>

        <h1 className="mt-6 text-3xl font-medium leading-snug text-foreground md:text-4xl">
          {item.title}
        </h1>

        {item.excerpt && (
          <p className="mt-6 text-base leading-[1.9] text-muted md:text-[17px]">
            {item.excerpt}
          </p>
        )}

        {item.body && (
          <div
            className="prose prose-neutral mt-12 max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
        )}

        <div className="mt-16 border-t border-border pt-12 text-center">
          <p className="text-base text-muted">
            ご不明な点・お見積もりはお気軽にご相談ください
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
