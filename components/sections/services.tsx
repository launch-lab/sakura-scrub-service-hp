import Image from "next/image";
import {
  AirVent,
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
  highlight?: boolean;
};

const services: Service[] = [
  {
    title: "家庭用エアコンクリーニング",
    description:
      "分解洗浄で内部のカビ・ホコリ・菌を徹底除去。冷暖房効率が上がり電気代の節約にも。",
    icon: AirVent,
    image: "/images/works/home-aircon.jpg",
    highlight: true,
  },
  {
    title: "業務用エアコンクリーニング",
    description:
      "天井埋込型・吊下型に対応。オフィスや店舗の衛生環境と快適性を維持します。",
    icon: Building2,
    image: "/images/works/commercial-aircon.jpg",
  },
  {
    title: "追い焚き配管洗浄",
    description:
      "特許洗浄剤「湯泡美」を使用。レジオネラ属菌の温床となる生物膜まで分解除去。",
    icon: Bath,
    image: "/images/works/bath-pipe.jpg",
    highlight: true,
  },
  {
    title: "浴室クリーニング",
    description:
      "頑固な水垢・カビ・石鹸カスを根こそぎオフ。新品同様の輝きを取り戻します。",
    icon: Droplets,
    image: "/images/works/bath-cleaning.jpg",
  },
  {
    title: "レンジフード・水回り",
    description:
      "換気扇の油汚れ、トイレ、洗面台など、普段落とせない汚れを分解洗浄します。",
    icon: CookingPot,
  },
  {
    title: "車内クリーニング",
    description:
      "シート・天井・トランクまで。社用車の定期清掃にも対応いたします。",
    icon: Car,
    image: "/images/works/car-interior.jpg",
  },
  {
    title: "防カビコーティング",
    description:
      "特許取得の高耐久型防カビ工法。施工後の長期的な衛生環境をお守りします。",
    icon: ShieldCheck,
  },
  {
    title: "スポット・定期清掃",
    description:
      "店舗・事務所・社員寮・賃貸退去後まで。法人様のニーズに柔軟に対応。",
    icon: Sparkles,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-subtle">
            Services
          </p>
          <h2 className="mt-6 font-display text-[36px] font-bold leading-[1.15] tracking-display text-foreground text-balance md:text-[56px] lg:text-[68px]">
            あらゆる<br className="md:hidden" />お掃除の困りごとに。
          </h2>
          <p className="mt-8 text-base font-normal leading-[1.9] text-muted md:text-[17px]">
            ご家庭の日常清掃から、企業様施設の大規模・定期清掃まで。
            特許技術に裏付けられた品質で、ご依頼いただいたすべての現場に全力で向き合います。
          </p>
        </Reveal>

        <RevealGroup stagger={0.08} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <RevealItem
                as="article"
                key={s.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                {s.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {s.highlight && (
                      <span className="absolute left-4 top-4 rounded-full bg-sakura-500 px-3 py-1 text-[10px] font-semibold tracking-wide text-white">
                        人気
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] bg-background">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-16 w-16 text-foreground/15" />
                    </div>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/5 text-foreground/80">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
