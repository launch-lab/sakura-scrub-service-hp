import { Reveal } from "@/components/effects/reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="flex items-center justify-center gap-2 font-accent text-base text-muted">
            <span className="h-1 w-1 rounded-full bg-sakura-500" />
            message
          </p>
          <h2 className="mt-6 text-[40px] font-medium leading-[1.1] tracking-display text-foreground md:text-[64px] lg:text-[80px]">
            ご
            <span className="font-accent font-normal text-sakura-600">あいさつ</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 rounded-[2rem] border border-border bg-surface/80 p-8 backdrop-blur shadow-[var(--shadow-soft)] md:p-14">
          <p className="font-display text-lg leading-relaxed text-foreground md:text-xl">
            弊社ホームページをご覧いただきまして、誠にありがとうございます。
          </p>

          <div className="mt-8 space-y-6 text-base leading-[1.95] text-muted md:text-[17px]">
            <p>
              {site.name}では、普段のお掃除では落とすのが難しいエアコンや換気扇等の
              分解洗浄、水周り等のハウスクリーニングを行っております。
              賃貸物件の退去後の清掃、企業様・管理会社様向けの店舗・事務所・施設・寮などの
              スポット、定期清掃もお受けいたします。
            </p>
            <p>
              弊社は、<strong className="font-semibold text-foreground">{site.affiliation}</strong>
              に所属しており、カビ対策やレジオネラ対策を日々学び、情報収集・共有をし、
              汚れを起因とした健康被害への対応・予防へ尽力いたします。
            </p>
            <p>
              キレイにすることだけを目的とせず、
              <strong className="font-semibold text-foreground">
                安心安全な清潔で快適な空間
              </strong>
              をご提供いたします。カビやレジオネラでお困りの際は、
              ぜひ一度ご相談ください。
            </p>
          </div>

          <div className="mt-10 flex items-center justify-end gap-4 border-t border-border pt-8">
            <div className="text-right">
              <p className="text-xs text-muted">取締役</p>
              <p className="mt-0.5 font-display text-xl font-bold text-foreground">
                {site.representative}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
