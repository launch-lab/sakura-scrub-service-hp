import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { SakuraMark } from "@/components/brand/sakura-mark";

const mainServices = [
  { title: "家庭用エアコンクリーニング", image: "/images/works/home-aircon.jpg" },
  { title: "業務用エアコンクリーニング", image: "/images/works/commercial-aircon.jpg" },
  { title: "防カビコーティング", image: "/images/works/aircon-cleaning.jpg" },
  { title: "追い焚き配管洗浄", image: "/images/works/bath-pipe.jpg" },
  { title: "循環式浴槽配管洗浄", image: "/images/works/bath-cleaning.jpg" },
  { title: "車内クリーニング", image: "/images/works/car-interior.jpg" },
];

const houseCleaningMenu = [
  "レンジフードクリーニング",
  "浴室クリーニング",
  "トイレクリーニング",
  "洗面台クリーニング",
  "窓サッシクリーニング",
  "お部屋周りクリーニング",
  "バルコニー、外周りクリーニング",
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-end md:gap-16">
          <div className="shrink-0">
            <p className="flex items-center gap-2 font-accent text-base text-muted">
              <SakuraMark className="h-3 w-3 text-sakura-500" />
              services
            </p>
            <h2 className="mt-6 text-[40px] font-medium leading-[1.05] tracking-display text-foreground md:text-[56px] lg:text-[72px]">
              施工
              <span className="font-accent font-normal text-sakura-500">
                メニュー
              </span>
            </h2>
          </div>
          <p className="w-full text-sm leading-[1.95] text-muted md:flex-1 md:pb-4 md:text-[15px]">
            企業様・管理会社様への店舗、事務所、社員寮、社用車等のスポット・定期清掃、
            賃貸物件の退去後の清掃も承っております。
          </p>
        </Reveal>

        <RevealGroup
          stagger={0.08}
          className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-24 md:grid-cols-3 md:gap-x-10 md:gap-y-16"
        >
          {mainServices.map((s, i) => {
            const index = String(i + 1).padStart(2, "0");
            const isSky = i % 2 === 1;
            const tilt = [-1.2, 0.8, -0.6, 1.3, -1.0, 0.7][i] ?? 0;

            return (
              <RevealItem as="article" key={s.title} className="group relative">
                <a href="#contact" className="block">
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -top-6 left-0 z-20 font-accent text-5xl leading-none md:-top-8 md:text-6xl lg:-top-10 lg:text-7xl ${
                      isSky ? "text-sky-500" : "text-sakura-500"
                    }`}
                  >
                    {index}
                  </span>

                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-background transition-transform duration-500 ease-out group-hover:!rotate-0"
                    style={{ transform: `rotate(${tilt}deg)` }}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                    <div
                      className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 ${
                        isSky ? "ring-2 ring-sky-300/70" : "ring-2 ring-sakura-300/70"
                      } ring-inset rounded-[1.5rem]`}
                    />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-3 px-1">
                    <h3 className="text-base font-medium leading-tight text-foreground transition group-hover:text-sakura-500 md:text-lg lg:text-xl">
                      {s.title}
                    </h3>
                    <span
                      aria-hidden
                      className={`mt-1 h-px flex-1 translate-y-2 ${
                        isSky ? "bg-sky-300/60" : "bg-sakura-300/60"
                      }`}
                    />
                  </div>
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-20 md:mt-28">
          <div className="flex items-baseline justify-between gap-4 border-b border-foreground/20 pb-4">
            <h3 className="text-lg font-medium text-foreground md:text-xl">
              ハウスクリーニングメニュー
            </h3>
            <span className="font-accent text-sm text-sky-500">
              house cleaning
            </span>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {houseCleaningMenu.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-5 border-b border-border py-5 text-foreground/85"
              >
                <span className="font-accent text-xs text-sky-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base md:text-[17px]">{item}</span>
              </li>
            ))}
          </ol>
        </Reveal>

      </div>
    </section>
  );
}
