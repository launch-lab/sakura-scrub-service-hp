import { Reveal } from "@/components/effects/reveal";
import { SakuraMark } from "@/components/brand/sakura-mark";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-2xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="flex items-center justify-center gap-2 font-accent text-base text-muted">
            <SakuraMark className="h-3 w-3 text-sakura-500" />
            message
          </p>
          <h2 className="mt-6 text-[40px] font-medium leading-[1.1] tracking-display text-foreground md:text-[64px] lg:text-[80px]">
            ご
            <span className="font-accent font-normal text-sakura-500">
              あいさつ
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 md:mt-20">
          <p className="text-center text-lg leading-[2.1] text-foreground md:text-xl">
            弊社ホームページをご覧いただきまして、
            <br className="hidden md:block" />
            誠にありがとうございます。
          </p>

          <div className="mt-12 space-y-7 text-base leading-[2.15] text-foreground/85 md:text-[17px]">
            <p>
              {site.name}では、普段のお掃除では落とすのが難しいエアコンや換気扇等の
              分解洗浄、水周り等のハウスクリーニングを行っております。
              賃貸物件の退去後の清掃、企業様・管理会社様向けの店舗・事務所・施設・寮などの
              スポット、定期清掃もお受けいたします。
            </p>
            <p>
              弊社は、{site.affiliation}
              に所属しており、カビ対策やレジオネラ対策を日々学び、情報収集・共有をし、
              汚れを起因とした健康被害への対応・予防へ尽力いたします。
            </p>
            <p>
              キレイにすることだけを目的とせず、安心安全な清潔で快適な空間を
              ご提供いたします。カビやレジオネラでお困りの際は、
              ぜひ一度ご相談ください。
            </p>
          </div>

          <div className="mt-16 flex flex-col items-end gap-1 md:mt-20">
            <p className="text-xs tracking-wider text-muted">
              取締役
            </p>
            <p
              className="font-script font-normal leading-none text-foreground"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3rem)" }}
            >
              {site.representative}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
