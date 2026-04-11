import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { SakuraMark } from "@/components/brand/sakura-mark";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/lib/site";

type Channel = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  heading: string;
  href: string | null;
  note?: string;
};

const channels: Channel[] = [
  {
    icon: Phone,
    label: "phone",
    heading: site.phone,
    href: `tel:${site.phone.replace(/-/g, "")}`,
  },
  {
    icon: Mail,
    label: "email",
    heading: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: CalendarCheck,
    label: "booking",
    heading: "オンライン予約",
    href: null,
    note: "準備中",
  },
  {
    icon: MapPin,
    label: "area",
    heading: "対応エリア",
    href: null,
    note: "調整中",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-ink" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 85% 15%, rgba(229, 0, 106, 0.22) 0%, transparent 50%), radial-gradient(ellipse at 15% 85%, rgba(255, 255, 255, 0.04) 0%, transparent 45%)",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="text-white">
            <p className="flex items-center gap-2 font-accent text-base text-white/60">
              <SakuraMark className="h-3 w-3 text-sakura-400" />
              contact
            </p>
            <h2
              className="mt-6 font-medium leading-[1.05] tracking-display"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
            >
              <span className="font-accent font-normal text-sakura-300">
                お気軽に、
              </span>
              <br />
              ご相談ください
            </h2>
            <p className="mt-7 max-w-md text-sm leading-[1.95] text-white/70 md:text-[15px]">
              お見積もりはすべて無料です。ご質問・ご要望など、どんな小さなことでも
              お気軽にお問い合わせください。原則 1 営業日以内にご返信いたします。
            </p>

            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {channels.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="flex items-center gap-4 py-5">
                    <Icon
                      className="h-4 w-4 shrink-0 text-white/50"
                      aria-hidden
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-accent text-[11px] uppercase tracking-[0.2em] text-white/40">
                        {c.label}
                      </p>
                      <p className="mt-1 truncate text-sm font-medium text-white md:text-base">
                        {c.heading}
                      </p>
                    </div>
                    {c.note && (
                      <span className="shrink-0 text-[11px] text-white/40">
                        {c.note}
                      </span>
                    )}
                  </div>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="block transition hover:bg-white/[0.03]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="rounded-2xl border border-white/15 bg-white/[0.02] p-6 backdrop-blur md:rounded-[2rem] md:p-10">
              <div className="mb-8 flex items-baseline justify-between gap-3">
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
