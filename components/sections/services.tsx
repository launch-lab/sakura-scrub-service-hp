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
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 font-accent text-base text-muted">
              <SakuraMark className="h-3 w-3 text-sakura-500" />
              services
            </p>
            <h2 className="mt-6 text-[40px] font-medium leading-[1.05] tracking-display text-foreground md:text-[56px] lg:text-[72px]">
              施工
              <span className="font-accent font-normal text-sakura-500">
                MENU
              </span>
            </h2>
          </div>
          <p className="w-full text-sm leading-[1.95] text-muted md:ml-auto md:w-auto md:whitespace-nowrap md:pb-4 md:text-right md:text-[15px]">
            企業様・管理会社様への店舗、事務所、社員寮、社用車等のスポット・定期清掃、
            賃貸物件の退去後の清掃も承っております。
          </p>
        </Reveal>

        <RevealGroup
          stagger={0.08}
          className="mt-16 grid grid-cols-2 gap-x-5 gap-y-14 md:mt-28 md:grid-cols-3 md:gap-x-12 md:gap-y-20 lg:gap-x-16 lg:gap-y-24"
        >
          {mainServices.map((s, i) => {
            const index = String(i + 1).padStart(2, "0");
            return (
              <RevealItem as="article" key={s.title} className="group">
                <a href="#contact" className="block">
                  <div className="relative overflow-hidden bg-background">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex items-baseline gap-3">
                    <span
                      aria-hidden
                      className="font-accent text-xs tracking-[0.2em] text-subtle"
                    >
                      {index}
                    </span>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-border"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-medium leading-tight text-foreground transition group-hover:text-[color:var(--color-accent-primary)] md:text-[17px] lg:text-lg">
                    {s.title}
                  </h3>
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-24 md:mt-32">
          <div className="flex items-baseline justify-between gap-4 border-b border-foreground/20 pb-5">
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
                className="flex items-baseline gap-6 border-b border-border py-6 text-foreground/85 md:py-7"
              >
                <span className="font-accent text-xs tracking-[0.2em] text-subtle">
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
