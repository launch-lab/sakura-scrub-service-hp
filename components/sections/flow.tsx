import {
  ChartLineUp,
  Handshake,
  Headset,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
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

      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8">
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
          className="mt-16 grid grid-cols-1 divide-y divide-border border-y border-border md:mt-20 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4"
        >
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <RevealItem
                as="li"
                key={s.step}
                className="group flex items-start gap-5 py-8 md:px-6 md:py-10 lg:px-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/15 bg-surface/80">
                  <Icon
                    size={24}
                    weight="fill"
                    className="text-sakura-500"
                    aria-hidden
                  />
                </div>
                <div className="flex-1">
                  <p className="font-accent text-xs text-sakura-500">
                    Step {s.step}
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-foreground md:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.8] text-muted">
                    {s.body}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
