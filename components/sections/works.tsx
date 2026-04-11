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

function WorkCard({ work }: { work: (typeof works)[number] }) {
  return (
    <figure className="group flex w-[300px] shrink-0 flex-col md:w-[360px]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-background">
        <Image
          src={work.src}
          alt={work.title}
          width={400}
          height={500}
          sizes="360px"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="mt-5 flex flex-col gap-2 px-1">
        <div className="flex items-center gap-3">
          <span className="font-accent text-sm text-sakura-500">
            {work.index}
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="font-accent text-xs text-subtle">{work.tag}</span>
        </div>
        <h3 className="text-lg font-medium leading-tight text-foreground md:text-xl">
          {work.title}
        </h3>
      </figcaption>
    </figure>
  );
}

export function Works() {
  // NOTE: 原本 + 複製の 2 セットで無限ループ。1 セット分ぶんを -50% 移動するだけで連続する
  const loop = [...works, ...works];

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
              <span className="font-accent font-normal text-sakura-500">
                事例
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base font-normal leading-[1.9] text-muted md:text-[17px]">
              実際の現場写真をご紹介します。ご家庭から法人施設まで、幅広い現場での
              施工実績をご覧ください。
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal
        direction="left"
        delay={0.1}
        className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      >
        <div className="animate-marquee flex gap-6 md:gap-8">
          {loop.map((w, i) => (
            <WorkCard key={`${w.src}-${i}`} work={w} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
