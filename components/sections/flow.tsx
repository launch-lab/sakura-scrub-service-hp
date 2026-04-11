import {
  ChartLineUp,
  Handshake,
  Headset,
  UsersThree,
  type Icon,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { SakuraMark } from "@/components/brand/sakura-mark";

type Step = {
  icon: Icon;
  step: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    icon: Headset,
    step: "01",
    title: "お問い合わせ",
    body: "まずはお問い合わせフォームまたはお電話からご連絡ください。",
  },
  {
    icon: UsersThree,
    step: "02",
    title: "ヒアリング・ご提案",
    body: "清掃箇所をヒアリングし、最適な施工プランをご提案します。",
  },
  {
    icon: ChartLineUp,
    step: "03",
    title: "お見積り",
    body: "ご提案した施工プランに基づいてお見積りを作成します。",
  },
  {
    icon: Handshake,
    step: "04",
    title: "施工",
    body: "熟練スタッフが丁寧に施工します。",
  },
];

export function Flow() {
  return (
    <section
      id="flow"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sakura-100 to-sakura-50" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 15%, rgba(255, 255, 255, 0.75) 0%, transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(229, 0, 106, 0.1) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-2 font-accent text-base text-muted">
            <SakuraMark className="h-3 w-3 text-sakura-500" />
            flow
          </p>
          <h2 className="mt-6 text-[36px] font-medium leading-[1.1] tracking-display text-foreground md:text-[56px] lg:text-[68px]">
            施工までの
            <span className="font-accent font-normal text-sakura-500">
              ながれ
            </span>
          </h2>
        </Reveal>

        <RevealGroup
          as="ol"
          stagger={0.12}
          className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 md:mt-24 md:grid-cols-4 md:gap-6 lg:gap-10"
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isLast = i === steps.length - 1;
            return (
              <RevealItem
                as="li"
                key={s.step}
                direction="up"
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex items-baseline gap-3 font-accent text-xl font-normal text-foreground md:text-2xl lg:text-[28px]">
                  <span className="text-sakura-500">\</span>
                  <span>
                    Step{" "}
                    <span className="text-[1.6em] leading-none">{s.step}</span>
                  </span>
                  <span className="text-sakura-500">/</span>
                </div>

                <div className="mt-6 flex h-32 w-32 items-center justify-center rounded-full border border-border bg-surface shadow-[var(--shadow-card)] md:h-36 md:w-36">
                  <Icon size={64} weight="fill" className="text-sky-500" />
                </div>

                {!isLast && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-[-10px] top-[104px] hidden text-sakura-500 md:block lg:right-[-16px] lg:top-[116px]"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M4 2 L12 8 L4 14 Z" />
                    </svg>
                  </span>
                )}

                <h3 className="mt-6 text-lg font-medium text-sakura-500 md:text-xl">
                  {s.title}
                </h3>

                <p className="mt-3 w-full rounded-lg border border-border bg-surface/90 p-4 text-left text-xs leading-relaxed text-muted md:text-[13px]">
                  {s.body}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
