import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";

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
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-12">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 font-italic-display text-base text-muted">
              <span className="h-1 w-1 rounded-full bg-sakura-500" />
              services
            </p>
            <h2 className="mt-6 text-[40px] font-medium leading-[1.05] tracking-display text-foreground md:text-[64px] lg:text-[80px]">
              クリーニング
              <br />
              <span className="font-italic-display font-normal text-sakura-600">
                メニュー
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-[1.95] text-muted md:max-w-md md:text-[15px]">
            企業様・管理会社様への店舗、事務所、社員寮、社用車等のスポット・定期清掃、
            賃貸物件の退去後の清掃も承っております。
          </p>
        </Reveal>

        <RevealGroup
          stagger={0.08}
          className="mt-14 grid grid-cols-2 gap-5 md:mt-20 md:grid-cols-3 md:gap-7"
        >
          {mainServices.map((s) => (
            <RevealItem as="article" key={s.title} className="group">
              <a href="#contact" className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-background ring-1 ring-border">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
                </div>
                <h3 className="mt-4 px-1 text-base font-medium leading-tight text-foreground transition group-hover:text-sakura-600 md:text-lg lg:text-xl">
                  {s.title}
                </h3>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-20 md:mt-28">
          <div className="flex items-baseline justify-between gap-4 border-b border-foreground/20 pb-4">
            <h3 className="text-lg font-medium text-foreground md:text-xl">
              ハウスクリーニングメニュー
            </h3>
            <span className="font-italic-display text-sm text-subtle">
              house cleaning
            </span>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {houseCleaningMenu.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-5 border-b border-border py-5 text-foreground/85"
              >
                <span className="font-italic-display text-xs text-subtle">
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
