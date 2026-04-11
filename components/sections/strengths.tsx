import { ArrowUpRight, Award, FlaskConical, ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { SakuraMark } from "@/components/brand/sakura-mark";
import { site } from "@/lib/site";

const patents = [
  {
    number: "特許第 1451611 号",
    title: "高耐久型防カビ工法",
    description:
      "防カビ施工を 3 つの工程で行う特許技術。単なる除カビで終わらず、再発を長期間抑制します。",
  },
  {
    number: "特許第 2060821 号",
    title: "湯泡美 A 剤・高濃度剤",
    description:
      "レジオネラ属菌の原因となる生物膜に作用する殺菌剤。エアコン・浴槽配管の衛生管理に。",
  },
];

const strengths = [
  {
    icon: ShieldCheck,
    title: "国が認めた特許技術",
    body: "国土交通省・経済産業省認定の防カビ・除菌工法を用いて、根本原因から解決します。",
  },
  {
    icon: FlaskConical,
    title: "レジオネラ対策の専門知識",
    body: "一般社団法人抗菌防カビ清掃技術研究所に所属し、日々最新の衛生対策をアップデート。",
  },
  {
    icon: Award,
    title: "個人宅から法人施設まで",
    body: "ご家庭から店舗・事務所・社員寮・賃貸退去清掃まで、柔軟に対応いたします。",
  },
];

export function Strengths() {
  return (
    <section
      id="strengths"
      className="relative overflow-hidden bg-ink py-28 text-white md:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 85% 10%, rgba(229, 0, 106, 0.3) 0%, transparent 45%), radial-gradient(ellipse at 15% 90%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8">
        <Reveal>
          <p className="flex items-center gap-2 font-accent text-base text-white/50">
            <SakuraMark className="h-3 w-3 text-sakura-400" />
            our strengths
          </p>
          <h2 className="mt-6 max-w-4xl text-[40px] font-medium leading-[1.05] tracking-display text-white md:text-[72px] lg:text-[96px]">
            キレイにする、
            <br />
            <span className="font-accent font-normal text-sakura-300">
              だけじゃない
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          <Reveal direction="up" delay={0.1} className="relative">
            <span
              aria-hidden
              className="block font-accent leading-[0.78] text-[280px] text-white md:text-[420px] lg:text-[520px]"
              style={{ fontWeight: 900 }}
            >
              2
            </span>
            <div className="absolute bottom-4 right-0 text-right md:bottom-10">
              <p className="font-accent text-base text-sakura-300 md:text-lg">
                patents
              </p>
              <p className="mt-1 text-base font-medium leading-tight text-white/80 md:text-lg">
                国土交通省・経済産業省<br />
                認定の特許技術
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center gap-10">
            <Reveal direction="up" delay={0.2}>
              <p className="text-base leading-[1.95] text-white/75 md:text-[17px]">
                カビ対策の特許技術「高耐久型防カビ工法」と、
                それを応用して作られた除菌剤によるレジオネラ症対策のための
                エアコンクリーニングと浴槽の配管クリーニングを行います。
                <br />
                一般のご家庭から企業様・施設様の衛生面、健康面をお守りいたします。
              </p>
            </Reveal>

            <RevealGroup as="ul" stagger={0.12} delay={0.35} className="space-y-6">
              {strengths.map((s) => {
                const Icon = s.icon;
                return (
                  <RevealItem
                    as="li"
                    direction="up"
                    key={s.title}
                    className="flex gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sky-300/30 bg-sky-500/5 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">{s.body}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </div>

        <Reveal delay={0.15} className="mt-20">
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2">
            {patents.map((p) => (
              <div key={p.number} className="bg-ink p-8 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-accent text-xs uppercase text-sky-300">
                    {p.number}
                  </p>
                  <Award className="h-4 w-4 text-sky-300/60" />
                </div>
                <p className="mt-4 text-2xl font-medium text-white md:text-3xl">
                  {p.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-20 md:mt-24">
          <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pt-16">
            <div>
              <p className="font-accent text-xs uppercase tracking-[0.2em] text-sakura-300">
                supervisor
              </p>
              <p className="mt-4 text-sm font-medium text-white/70">
                {site.supervisor.title}
              </p>
              <p
                className="mt-2 font-medium leading-[1.05] text-white"
                style={{ fontSize: "clamp(2rem, 4.2vw, 3rem)" }}
              >
                {site.supervisor.name}
                <span className="ml-2 text-base font-normal text-white/60 md:text-lg">
                  {site.supervisor.honorific}
                </span>
              </p>
              <p className="mt-3 font-accent text-sm text-white/50 md:text-base">
                著書 {site.supervisor.book}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm leading-[1.95] text-white/70 md:text-[15px]">
                弊社が加盟する『{site.affiliation}』(BMC 社) は、
                『レジオネラ属菌を知る』の著書で知られる麻布大学名誉教授
                {site.supervisor.name}
                {site.supervisor.honorific}
                を顧問に迎え、湯泡美の改良とレジオネラ属菌対策の普及活動を
                監修しています。同研究所の研修修了者のみが使用を許された
                特許洗浄剤を用いて、ご家庭から企業様施設までの衛生環境を
                お守りします。
              </p>
              <a
                href={site.affiliationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 self-start font-accent text-sm text-sakura-300 transition hover:text-sakura-200"
              >
                {site.affiliation} 公式サイト
                <ArrowUpRight
                  className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
