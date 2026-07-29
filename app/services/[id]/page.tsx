import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { client, type ServiceItem } from "@/lib/microcms";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const data = await client.getAllContentIds({ endpoint: "services" });
  return data.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const service = await client.getListDetail<ServiceItem>({
      endpoint: "services",
      contentId: id,
    });
    return {
      title: service.title,
      description: service.description,
    };
  } catch {
    return { title: "サービス詳細" };
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;

  let service: ServiceItem;
  try {
    service = await client.getListDetail<ServiceItem>({
      endpoint: "services",
      contentId: id,
      customRequestInit: { next: { revalidate: 3600 } },
    });
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[900px] px-5 py-24 lg:px-8">
      <Link
        href="/#services"
        className="inline-flex items-center gap-2 font-accent text-sm text-muted transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        施工メニューに戻る
      </Link>

      <article className="mt-12">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-background">
          <Image
            src={service.image.url}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        <h1 className="mt-10 text-3xl font-medium leading-snug text-foreground md:text-4xl lg:text-5xl">
          {service.title}
        </h1>

        <p className="mt-6 text-base leading-[1.9] text-muted md:text-[17px]">
          {service.description}
        </p>

        {(service.price || service.duration) && (
          <dl className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-border p-6 md:grid-cols-2">
            {service.price && (
              <div>
                <dt className="font-accent text-xs uppercase tracking-widest text-subtle">
                  料金目安
                </dt>
                <dd className="mt-2 text-lg font-medium text-foreground">
                  {service.price}
                </dd>
              </div>
            )}
            {service.duration && (
              <div>
                <dt className="font-accent text-xs uppercase tracking-widest text-subtle">
                  所要時間
                </dt>
                <dd className="mt-2 text-lg font-medium text-foreground">
                  {service.duration}
                </dd>
              </div>
            )}
          </dl>
        )}

        {service.body && (
          <div
            className="prose prose-neutral mt-12 max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: service.body }}
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
