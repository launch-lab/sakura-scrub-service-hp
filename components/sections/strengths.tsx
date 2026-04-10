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
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-subtle">
              Our Strengths
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              キレイにするだけでは、<br />
              終わらせません。
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
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
            <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-[var(--shadow-soft)] md:p-10">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground/70">
                  <Award className="h-3.5 w-3.5" />
                  Patent
                </div>
                <span className="text-xs text-muted">※ 一般社団法人 防カビ技研</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                2 つの特許技術に裏付けられた品質
              </h3>
              <div className="mt-8 space-y-5">
                {patents.map((p) => (
                  <div
                    key={p.number}
                    className="rounded-2xl border border-border bg-background/60 p-5"
                  >
                    <p className="font-display text-xs font-medium uppercase tracking-[0.15em] text-subtle">
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
