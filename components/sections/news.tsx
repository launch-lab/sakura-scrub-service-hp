import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { SakuraMark } from "@/components/brand/sakura-mark";

// NOTE: 将来 microCMS から取得する想定のダミーデータ。
// 型は CMS レスポンスに寄せておき、差し替え時は fetchNews() 関数で返す形に。
export type NewsEntry = {
  id: string;
  title: string;
  publishedAt: string; // ISO 8601 形式
  thumbnail: string;
  category?: string;
  excerpt?: string;
  href: string;
};

const dummyNews: NewsEntry[] = [
  {
    id: "1",
    title: "春のエアコンクリーニングキャンペーンを開始しました",
    publishedAt: "2026-04-01",
    thumbnail: "/images/works/home-aircon.jpg",
    category: "キャンペーン",
    excerpt:
      "カビが繁殖しやすくなる梅雨前がクリーニングのベストタイミング。春割キャンペーンを期間限定でご提供します。",
    href: "#",
  },
  {
    id: "2",
    title: "追い焚き配管洗浄の施工事例を追加しました",
    publishedAt: "2026-03-22",
    thumbnail: "/images/works/bath-pipe.jpg",
    category: "施工事例",
    href: "#",
  },
  {
    id: "3",
    title: "カビとレジオネラ対策の基礎知識",
    publishedAt: "2026-03-10",
    thumbnail: "/images/works/bath-cleaning.jpg",
    category: "コラム",
    href: "#",
  },
  {
    id: "4",
    title: "業務用エアコンの定期メンテナンス受付中",
    publishedAt: "2026-02-28",
    thumbnail: "/images/works/commercial-aircon.jpg",
    category: "お知らせ",
    href: "#",
  },
];

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${year}.${month}.${day}`;
}

export function News() {
  const [featured, ...rest] = dummyNews;

  return (
    <section id="news" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 font-accent text-base text-muted">
              <SakuraMark className="h-3 w-3 text-sakura-500" />
              news
            </p>
            <h2 className="mt-6 font-accent text-[64px] font-normal leading-[1] tracking-display text-foreground md:text-[96px] lg:text-[120px]">
              <span className="text-sakura-500">N</span>ews
            </h2>
          </div>
          <p className="w-full text-sm leading-[1.95] text-muted md:ml-auto md:w-auto md:whitespace-nowrap md:pb-4 md:text-right md:text-[15px]">
            キャンペーン、施工事例、カビ対策コラムなどの最新情報をお届けします。
          </p>
        </Reveal>

        {/* Featured article - NYT Magazine 方式: 日付を巨大 serif で独立表示 */}
        <Reveal delay={0.1} className="mt-16 md:mt-24">
          <a href={featured.href} className="group block">
            <article className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:gap-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-background ring-1 ring-border">
                <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 font-accent text-xs text-white backdrop-blur">
                  <SakuraMark className="h-2.5 w-2.5 text-sakura-300" />
                  feature
                </span>
              </div>
              <div className="flex flex-col justify-between md:py-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-accent text-xs uppercase tracking-[0.2em] text-subtle">
                      feature story
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    {featured.category && (
                      <span className="text-xs tracking-wide text-sky-500">
                        {featured.category}
                      </span>
                    )}
                  </div>
                  <time
                    dateTime={featured.publishedAt}
                    className="mt-6 block font-accent font-normal leading-[0.9] text-foreground"
                    style={{ fontSize: "clamp(2.6rem, 5.2vw, 4.5rem)" }}
                  >
                    {formatDate(featured.publishedAt)}
                  </time>
                  <h3 className="mt-6 text-2xl font-medium leading-[1.3] text-foreground transition group-hover:text-sakura-500 md:text-3xl">
                    {featured.title}
                  </h3>
                  {featured.excerpt && (
                    <p className="mt-5 text-sm leading-[1.85] text-muted md:text-[15px]">
                      {featured.excerpt}
                    </p>
                  )}
                </div>
                <div className="mt-8 inline-flex items-center gap-2 font-accent text-sm text-foreground md:text-base">
                  続きを読む
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </article>
          </a>
        </Reveal>

        {/* Sub articles */}
        <div className="mt-16 border-t border-border pt-10 md:mt-24 md:pt-14">
          <div className="mb-8 flex items-baseline justify-between">
            <h4 className="font-accent text-sm text-subtle">— more stories</h4>
            <a
              href="#"
              className="font-accent text-sm text-sakura-500 transition hover:text-sakura-600"
            >
              全ての記事を見る →
            </a>
          </div>
          <RevealGroup
            stagger={0.08}
            className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
          >
            {rest.map((entry) => (
              <RevealItem as="article" key={entry.id} className="group">
                <a href={entry.href} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-background ring-1 ring-border">
                    <Image
                      src={entry.thumbnail}
                      alt={entry.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <time
                      dateTime={entry.publishedAt}
                      className="font-accent text-xs text-subtle"
                    >
                      {formatDate(entry.publishedAt)}
                    </time>
                    <span className="h-px flex-1 bg-border" />
                    {entry.category && (
                      <span className="text-[11px] tracking-wide text-sky-500">
                        {entry.category}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-base font-medium leading-snug text-foreground transition group-hover:text-sakura-500 md:text-[17px]">
                    {entry.title}
                  </h3>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
