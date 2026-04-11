import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { SakuraMark } from "@/components/brand/sakura-mark";

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
    a: "国土交通省・経済産業省に認定された 2 つの特許技術(高耐久型防カビ工法、湯泡美)を使用し、汚れの除去だけでなくカビ・レジオネラの再発抑制まで行う点が最大の特長です。",
  },
  {
    q: "法人契約(定期清掃)にも対応していますか？",
    a: "はい、店舗・事務所・施設・社員寮・社用車等の定期清掃やスポット清掃に対応しております。ご要望に合わせたプランをご提案いたします。",
  },
  {
    q: "賃貸退去後のハウスクリーニングは可能ですか？",
    a: "可能です。管理会社様・オーナー様からのご依頼も多数承っております。お気軽にお問い合わせください。",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 font-accent text-base text-muted">
              <SakuraMark className="h-3 w-3 text-sakura-500" />
              question
            </p>
            <h2 className="mt-6 text-[36px] font-medium leading-[1.1] tracking-display text-foreground md:text-[56px] lg:text-[68px]">
              <span className="font-accent font-normal text-sakura-500">
                よくある
              </span>
              ご質問
            </h2>
          </div>
          <p className="w-full text-sm leading-[1.95] text-muted md:ml-auto md:w-auto md:whitespace-nowrap md:pb-4 md:text-right md:text-[15px]">
            お客さまからよくいただくご質問をまとめました。
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <RevealGroup
            as="dl"
            stagger={0.06}
            className="mt-16 border-t border-foreground/15 md:mt-24"
          >
            {faqs.map((f, i) => {
              const number = String(i + 1).padStart(2, "0");
              return (
                <RevealItem as="div" key={f.q} className="border-b border-border">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="relative flex cursor-pointer list-none items-baseline gap-6 py-7 pr-10 md:gap-8 md:py-9">
                      <span
                        aria-hidden
                        className="font-accent text-xs tracking-[0.2em] text-subtle md:text-sm"
                      >
                        {number}
                      </span>
                      <dt className="flex-1 text-base font-medium leading-[1.6] text-foreground md:text-lg lg:text-xl">
                        {f.q}
                      </dt>
                      <span
                        aria-hidden
                        className="absolute right-0 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-foreground/60 transition group-open:rotate-45 group-open:text-sakura-500 md:h-6 md:w-6"
                      >
                        <svg
                          viewBox="0 0 12 12"
                          className="h-full w-full"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                        >
                          <path d="M6 1v10M1 6h10" />
                        </svg>
                      </span>
                    </summary>
                    <dd className="flex gap-6 pb-8 pl-0 text-sm leading-[1.95] text-muted md:gap-8 md:pb-10 md:text-[15px]">
                      <span
                        aria-hidden
                        className="font-accent text-xs tracking-[0.2em] text-subtle md:text-sm"
                      >
                        {"—".repeat(1)}
                      </span>
                      <p className="flex-1 max-w-2xl">{f.a}</p>
                    </dd>
                  </details>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
