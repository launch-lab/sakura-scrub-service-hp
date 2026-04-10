import { CalendarCheck, ClipboardCheck, MessageSquare, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "お問い合わせ",
    body: "お電話・フォーム・LINE からお気軽にご相談ください。ヒアリングのうえ、最適なプランをご提案します。",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "お見積もり",
    body: "現地確認または写真から無料でお見積もりを作成。内容にご納得いただいてからの契約となります。",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "ご予約・日程調整",
    body: "ご都合の良い日時で施工日を確定。法人様の定期契約にも柔軟に対応いたします。",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "施工・アフターケア",
    body: "有資格者が特許技術で丁寧に施工。施工後の防カビコーティングや定期清掃もご相談ください。",
  },
];

export function Flow() {
  return (
    <section id="flow" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua-600">
            Flow
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ご利用の流れ
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            ご相談から施工完了まで、ていねいにサポートいたします。
          </p>
        </div>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.step}
                className="relative rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl font-bold text-sakura-100">
                    {s.step}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sakura-500 text-white shadow-[var(--shadow-card)]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.body}</p>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-sakura-300 to-transparent lg:block"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
