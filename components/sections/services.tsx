import Image from "next/image";
import {
  AirVent,
  ArrowUpRight,
  Bath,
  Building2,
  Car,
  CookingPot,
  Droplets,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  tag?: string;
};

// NOTE: Featured = 大カード、他はコンパクトリスト表示にする editorial レイアウト
const featured: Service = {
  title: "追い焚き配管洗浄",
  description:
    "特許洗浄剤「湯泡美」を使用した、レジオネラ属菌の温床となる生物膜まで分解する配管洗浄。一般のお掃除では決して届かない領域まで、根本から解決します。",
  icon: Bath,
  image: "/images/works/bath-pipe.jpg",
  tag: "特許洗浄 / 湯泡美",
};

const services: Service[] = [
  {
    title: "家庭用エアコンクリーニング",
    description:
      "分解洗浄で内部のカビ・ホコリ・菌を徹底除去。冷暖房効率が上がり電気代の節約にも。",
    icon: AirVent,
    image: "/images/works/home-aircon.jpg",
    tag: "home",
  },
  {
    title: "業務用エアコンクリーニング",
    description:
      "天井埋込型・吊下型に対応。オフィス・店舗の衛生環境と快適性を維持。",
    icon: Building2,
    image: "/images/works/commercial-aircon.jpg",
    tag: "business",
  },
  {
    title: "浴室クリーニング",
    description:
      "頑固な水垢・カビ・石鹸カスを根こそぎオフ。新品同様の輝きへ。",
    icon: Droplets,
    image: "/images/works/bath-cleaning.jpg",
    tag: "bathroom",
  },
  {
    title: "レンジフード・水回り",
    description:
      "換気扇の油汚れ、トイレ、洗面台など、普段落とせない汚れを分解洗浄。",
    icon: CookingPot,
    tag: "kitchen",
  },
  {
    title: "車内クリーニング",
    description:
      "シート・天井・トランクまで。社用車の定期清掃にも対応。",
    icon: Car,
    image: "/images/works/car-interior.jpg",
    tag: "car",
  },
  {
    title: "防カビコーティング",
    description:
      "特許取得の高耐久型防カビ工法。施工後の長期的な衛生をお守りします。",
    icon: ShieldCheck,
    image: "/images/works/aircon-cleaning.jpg",
    tag: "coating",
  },
  {
    title: "スポット・定期清掃",
    description:
      "店舗・事務所・社員寮・賃貸退去後まで。法人様のニーズに柔軟対応。",
    icon: Sparkles,
    tag: "business",
  },
];

export function Services() {
  const FeaturedIcon = featured.icon;

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-2 font-italic-display text-base text-muted">
            <span className="h-1 w-1 rounded-full bg-sakura-500" />
            services
          </p>
          <h2 className="mt-6 text-[40px] font-medium leading-[1.08] tracking-display text-foreground text-balance md:text-[64px] lg:text-[80px]">
            <span className="font-italic-display font-normal text-sakura-600">
              あらゆる
            </span>
            お掃除の困りごとに
          </h2>
          <p className="mt-8 max-w-xl text-base font-normal leading-[1.9] text-muted md:text-[17px]">
            ご家庭の日常清掃から、企業様施設の大規模・定期清掃まで。
            特許技術に裏付けられた品質で、ご依頼いただいたすべての現場に全力で向き合います。
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Reveal direction="up" className="relative lg:h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-card)]">
              <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:flex-1">
                <Image
                  src={featured.image!}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-8 text-white md:p-10 lg:p-12">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 font-italic-display text-xs backdrop-blur">
                      <span className="h-1 w-1 rounded-full bg-sakura-400" />
                      featured
                    </span>
                    <span className="font-italic-display text-sm text-white/70">
                      {featured.tag}
                    </span>
                  </div>
                  <div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                      <FeaturedIcon className="h-5 w-5" />
                    </div>
                    <h3 className="max-w-md text-3xl font-medium leading-tight md:text-4xl lg:text-5xl">
                      {featured.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
                      {featured.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <RevealGroup stagger={0.08} delay={0.1} className="grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-border bg-border">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <RevealItem
                  as="article"
                  key={s.title}
                  className="group relative flex items-stretch gap-5 bg-surface p-4 transition hover:bg-background md:p-5"
                >
                  <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-2xl bg-background md:h-[96px] md:w-[96px]">
                    {s.image ? (
                      <>
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          sizes="96px"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <Icon className="h-7 w-7 text-foreground/20" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-base font-medium text-foreground md:text-[17px]">
                        {s.title}
                      </h3>
                      <span className="font-italic-display text-xs text-subtle">
                        {s.tag}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-[1.65] text-muted">
                      {s.description}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-2 h-4 w-4 shrink-0 text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
