import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/lib/site";

const channels = [
  {
    icon: Phone,
    label: "phone",
    heading: site.phone,
    href: `tel:${site.phone.replace(/-/g, "")}`,
    note: site.hours,
    accent: "sky" as const,
  },
  {
    icon: Mail,
    label: "email",
    heading: site.email,
    href: `mailto:${site.email}`,
    note: "24 時間受付",
    accent: "sakura" as const,
  },
  {
    icon: MessageCircle,
    label: "line / booking",
    heading: "近日公開",
    href: null,
    note: "LINE 予約準備中",
    accent: "sakura" as const,
  },
  {
    icon: MapPin,
    label: "area",
    heading: "対応エリア調整中",
    href: null,
    note: "まずはご相談ください",
    accent: "sky" as const,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-ink" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 85% 15%, rgba(236, 22, 131, 0.22) 0%, transparent 50%), radial-gradient(ellipse at 15% 85%, rgba(255, 255, 255, 0.04) 0%, transparent 45%)",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="text-white">
            <p className="flex items-center gap-2 font-accent text-base text-white/60">
              <span className="h-1 w-1 rounded-full bg-sakura-400" />
              contact
            </p>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-display md:text-6xl lg:text-[76px]">
              <span className="font-accent font-normal text-sakura-300">
                お気軽に、
              </span>
              <br />
              ご相談ください
            </h2>
            <p className="mt-8 max-w-md text-base leading-[1.9] text-white/70 md:text-[17px]">
              お見積もりはすべて無料です。ご質問・ご要望など、どんな小さなことでも
              お気軽にお問い合わせください。原則 1 営業日以内にご返信いたします。
            </p>

            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
              {channels.map((c) => {
                const Icon = c.icon;
                const accentClass =
                  c.accent === "sky"
                    ? "border-sky-300/40 text-sky-300"
                    : "border-sakura-300/40 text-sakura-300";
                const content = (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="font-accent text-xs text-white/40">
                        {c.label}
                      </span>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border ${accentClass}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="mt-4 text-base font-medium text-white">{c.heading}</p>
                    <p className="mt-1 text-xs text-white/50">{c.note}</p>
                  </>
                );

                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="flex h-full flex-col bg-ink p-5 transition hover:bg-white/[0.04]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex h-full flex-col bg-ink p-5">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="rounded-[2rem] border border-white/15 bg-white/[0.02] p-8 backdrop-blur md:p-10">
              <div className="mb-8 flex items-baseline justify-between">
                <p className="font-accent text-sm text-sakura-300">
                  お問い合わせフォーム
                </p>
                <p className="font-accent text-xs text-white/40">
                  — send us a message
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
