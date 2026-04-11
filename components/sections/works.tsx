import Image from "next/image";
import { Reveal } from "@/components/effects/reveal";

const works = [
  {
    src: "/images/works/aircon-cleaning.jpg",
    title: "業務用エアコン分解洗浄",
    tag: "business / aircon",
    index: "01",
  },
  {
    src: "/images/works/bath-cleaning.jpg",
    title: "浴槽・タイル徹底クリーニング",
    tag: "home / bathroom",
    index: "02",
  },
  {
    src: "/images/works/home-aircon.jpg",
    title: "家庭用エアコンクリーニング",
    tag: "home / aircon",
    index: "03",
  },
  {
    src: "/images/works/bath-pipe.jpg",
    title: "追い焚き配管洗浄 ( 湯泡美 )",
    tag: "patent / pipe",
    index: "04",
  },
  {
    src: "/images/works/commercial-aircon.jpg",
    title: "天井埋込型エアコン洗浄",
    tag: "business / ceiling",
    index: "05",
  },
  {
    src: "/images/works/car-interior.jpg",
    title: "社用車内クリーニング",
    tag: "business / car",
    index: "06",
  },
];

export function Works() {
  return (
    <section id="works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 font-accent text-base text-muted">
              <span className="h-1 w-1 rounded-full bg-sakura-500" />
              works
            </p>
            <h2 className="mt-6 text-[40px] font-medium leading-[1.05] tracking-display text-foreground md:text-[72px] lg:text-[92px]">
              施工
              <span className="font-accent font-normal text-sakura-600">
                事例
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base font-normal leading-[1.9] text-muted md:text-[17px]">
              実際の現場写真をご紹介します。ご家庭から法人施設まで、幅広い現場での
              施工実績をご覧ください。
            </p>
          </div>
          <div className="hidden items-center gap-3 text-xs text-muted md:flex">
            <span className="font-accent text-base text-sakura-500">scroll →</span>
          </div>
        </Reveal>
      </div>

      <Reveal direction="left" delay={0.1} className="mt-14">
        <div className="scrollbar-none -mb-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 md:gap-7 lg:px-[max(theme(spacing.8),calc((100vw-80rem)/2))]">
          {works.map((w) => (
            <figure
              key={w.src}
              className="group relative shrink-0 snap-start overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-card)]"
              style={{ width: "min(78vw, 520px)" }}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={w.src}
                  alt={w.title}
                  fill
                  sizes="(max-width: 768px) 78vw, 520px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

                <span className="absolute left-6 top-6 font-accent text-4xl text-white/80 md:text-5xl">
                  {w.index}
                </span>
              </div>

              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 font-accent text-xs text-white backdrop-blur">
                  {w.tag}
                </span>
                <p className="mt-3 text-xl font-medium text-white md:text-2xl">
                  {w.title}
                </p>
              </figcaption>
            </figure>
          ))}

          <div className="shrink-0 snap-start" style={{ width: "1px" }} />
        </div>
      </Reveal>
    </section>
  );
}
