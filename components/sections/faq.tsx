import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";

const faqs = [
  {
    q: "見積もりは無料ですか？",
    a: "はい、お見積もりは無料です。お電話またはフォームよりお気軽にご相談ください。現地確認が必要な場合も、出張費は発生しません（対応エリア内）。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "基本の対応エリアは別途お問い合わせください。エリア外でも内容によっては対応可能な場合がございますので、まずはご相談ください。",
  },
  {
    q: "作業時間はどのくらいかかりますか？",
    a: "メニューや汚れ具合により異なりますが、家庭用エアコン 1 台で約 1.5〜2 時間、追い焚き配管洗浄で約 2〜3 時間が目安です。",
  },
  {
    q: "他社と何が違うのですか？",
    a: "国土交通省・経済産業省に認定された 2 つの特許技術（高耐久型防カビ工法、湯泡美）を使用し、汚れの除去だけでなくカビ・レジオネラの再発抑制まで行う点が最大の特長です。",
  },
  {
    q: "法人契約（定期清掃）にも対応していますか？",
    a: "はい、店舗・事務所・施設・社員寮・社用車等の定期清掃やスポット清掃に対応しております。ご要望に合わせたプランをご提案いたします。",
  },
  {
    q: "賃貸退去後のハウスクリーニングは可能ですか？",
    a: "可能です。管理会社様・オーナー様からのご依頼も多数承っております。お気軽にお問い合わせください。",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-subtle">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            よくある質問
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]">
          <RevealGroup stagger={0.06} className="divide-y divide-border">
            {faqs.map((f) => (
              <RevealItem as="div" key={f.q}>
                <details className="group px-6 py-5 md:px-8 md:py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-start justify-between gap-4">
                    <span className="flex items-start gap-3 font-display text-base font-semibold text-foreground md:text-lg">
                      <span className="font-display text-base font-bold text-subtle">Q.</span>
                      {f.q}
                    </span>
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border transition group-open:rotate-45 group-open:border-foreground group-open:text-foreground">
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 flex gap-3 text-sm leading-relaxed text-muted md:text-[15px]">
                    <span className="font-display text-base font-bold text-subtle">A.</span>
                    <p>{f.a}</p>
                  </div>
                </details>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
