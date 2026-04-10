import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";

const works = [
  {
    src: "/images/works/aircon-cleaning.jpg",
    title: "業務用エアコン分解洗浄",
    tag: "業務用",
  },
  {
    src: "/images/works/bath-cleaning.jpg",
    title: "浴槽・タイル徹底クリーニング",
    tag: "浴室",
  },
  {
    src: "/images/works/home-aircon.jpg",
    title: "家庭用エアコンクリーニング",
    tag: "家庭用",
  },
  {
    src: "/images/works/bath-pipe.jpg",
    title: "追い焚き配管洗浄 (湯泡美)",
    tag: "配管",
  },
  {
    src: "/images/works/commercial-aircon.jpg",
    title: "天井埋込型エアコン洗浄",
    tag: "業務用",
  },
  {
    src: "/images/works/car-interior.jpg",
    title: "社用車内クリーニング",
    tag: "車内",
  },
];

export function Works() {
  return (
    <section id="works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 font-italic-display text-base text-muted">
              <span className="h-1 w-1 rounded-full bg-sakura-500" />
              works
            </p>
            <h2 className="mt-6 text-[40px] font-medium leading-[1.05] tracking-display text-foreground md:text-[72px] lg:text-[92px]">
              施工
              <span className="font-italic-display font-normal text-sakura-600">事例</span>
            </h2>
            <p className="mt-6 text-base font-normal leading-[1.9] text-muted md:text-[17px]">
              実際の現場写真をご紹介します。ご家庭から法人施設まで、幅広い現場での
              施工実績をご覧ください。
            </p>
          </div>
          <p className="text-xs text-muted">
            ※ 今後、ブログ・事例ページから詳細を随時追加予定
          </p>
        </Reveal>

        <RevealGroup stagger={0.1} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {works.map((w, i) => (
            <RevealItem
              as="figure"
              key={w.src}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)] ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-square md:aspect-[4/3.4]" : "aspect-square"}`}>
                <Image
                  src={w.src}
                  alt={w.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/15 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-flex items-center rounded-full bg-surface/90 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/80 backdrop-blur">
                  {w.tag}
                </span>
                <p className="mt-2 font-display text-sm font-semibold text-white md:text-base">
                  {w.title}
                </p>
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
