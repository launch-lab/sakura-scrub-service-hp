import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { SakuraMark } from "@/components/brand/sakura-mark";

type Step = {
  step: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    step: "01",
    title: "お問い合わせ",
    body: "まずはお問い合わせフォームまたはお電話からご連絡ください。",
  },
  {
    step: "02",
    title: "ヒアリング・ご提案",
    body: "清掃箇所をヒアリングし、最適な施工プランをご提案します。",
  },
  {
    step: "03",
    title: "お見積り",
    body: "ご提案した施工プランに基づいてお見積りを作成します。",
  },
  {
    step: "04",
    title: "施工",
    body: "熟練スタッフが丁寧に施工します。",
  },
];

export function Flow() {
  return (
    <section id="flow" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 font-accent text-base text-muted">
              <SakuraMark className="h-3 w-3 text-sakura-500" />
              flow
            </p>
            <h2 className="mt-6 text-[36px] font-medium leading-[1.1] tracking-display text-foreground md:text-[56px] lg:text-[68px]">
              施工までの
              <span className="font-accent font-normal text-sakura-500">
                ながれ
              </span>
            </h2>
          </div>
          <p className="w-full text-sm leading-[1.95] text-muted md:ml-auto md:w-auto md:whitespace-nowrap md:pb-4 md:text-right md:text-[15px]">
            ご相談から施工完了まで、ていねいにサポートいたします。
          </p>
        </Reveal>

        <RevealGroup
          as="ol"
          stagger={0.1}
          className="mt-20 grid grid-cols-1 border-t border-foreground/15 md:mt-28 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <RevealItem
              as="li"
              key={s.step}
              className="relative flex flex-col border-b border-foreground/15 px-0 pb-12 pt-10 md:border-r md:px-10 md:py-14 md:last:border-r-0 lg:px-12 lg:py-16 [&:nth-child(2)]:md:border-r-0 [&:nth-child(2)]:lg:border-r"
            >
              <span
                className="font-accent font-normal leading-none text-foreground/15"
                style={{ fontSize: "clamp(4rem, 7vw, 7.5rem)" }}
                aria-hidden
              >
                {s.step}
              </span>
              <p className="mt-1 font-accent text-xs uppercase tracking-[0.2em] text-sakura-500">
                Step {s.step}
              </p>
              <h3 className="mt-4 text-xl font-medium leading-tight text-foreground md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.9] text-muted md:text-[13px]">
                {s.body}
              </p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-0 top-1/2 hidden h-[1px] w-6 -translate-y-1/2 translate-x-3 bg-foreground/20 lg:block"
                />
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
