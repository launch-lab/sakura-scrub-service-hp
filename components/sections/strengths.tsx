import { Award, FlaskConical, ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";

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
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal direction="up">
            <p className="flex items-center gap-2 font-italic-display text-base text-muted">
              <span className="h-1 w-1 rounded-full bg-sakura-500" />
              our strengths
            </p>
            <h2 className="mt-6 text-[36px] font-medium leading-[1.1] tracking-display text-foreground md:text-[56px] lg:text-[68px]">
              キレイにする、<br />
              <span className="font-italic-display font-normal text-sakura-600">
                だけじゃない
              </span>
            </h2>
            <p className="mt-8 text-base font-normal leading-[1.9] text-muted md:text-[17px]">
              桜 Scrub サービスが目指すのは「清潔で快適な空間」の提供です。
              見た目のキレイさだけでなく、カビ・レジオネラ菌といった目に見えない汚れまで
              特許技術で根本から解決。お客様の健康と安全をお守りします。
            </p>

            <RevealGroup as="ul" stagger={0.12} delay={0.2} className="mt-10 space-y-5">
              {strengths.map((s) => {
                const Icon = s.icon;
                return (
                  <RevealItem as="li" direction="up" key={s.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foreground text-background shadow-[var(--shadow-card)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </Reveal>

          <Reveal direction="left" delay={0.15} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 shadow-[var(--shadow-soft)] md:p-12">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground/70">
                  <Award className="h-3 w-3" />
                  Patent
                </div>
                <span className="text-[11px] uppercase tracking-wider text-subtle">
                  防カビ技研
                </span>
              </div>

              <div className="mt-10 flex items-end gap-6">
                <span
                  className="font-italic-display leading-[0.78] text-foreground text-[200px] md:text-[260px]"
                  style={{ fontWeight: 900 }}
                  aria-hidden
                >
                  2
                </span>
                <div className="pb-10">
                  <p className="font-italic-display text-sm text-sakura-600">
                    patents
                  </p>
                  <p className="mt-2 text-lg font-medium leading-tight text-foreground md:text-xl">
                    認定された<br />
                    特許技術
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-px rounded-2xl bg-border">
                {patents.map((p) => (
                  <div
                    key={p.number}
                    className="bg-surface p-5 first:rounded-t-2xl last:rounded-b-2xl"
                  >
                    <p className="font-display text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
                      {p.number}
                    </p>
                    <p className="mt-2 font-display text-lg font-bold text-foreground">
                      {p.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
