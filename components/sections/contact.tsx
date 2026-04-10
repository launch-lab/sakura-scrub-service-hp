import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-ink" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 85% 15%, rgba(236, 22, 131, 0.18) 0%, transparent 45%), radial-gradient(ellipse at 15% 85%, rgba(255, 255, 255, 0.04) 0%, transparent 45%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal className="text-white">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Contact
          </p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            お気軽に、
            <br />
            ご相談ください。
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70">
            お見積もりはすべて無料です。ご質問・ご要望など、どんな小さなことでも
            お気軽にお問い合わせください。原則 1 営業日以内にご返信いたします。
          </p>
        </Reveal>

        <RevealGroup stagger={0.1} delay={0.2} className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
          <RevealItem>
            <a
              href={`tel:${site.phone.replace(/-/g, "")}`}
              className="group flex h-full items-center gap-4 bg-ink p-6 transition hover:bg-white/[0.03]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/70">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-wider text-white/40">Phone</p>
                <p className="mt-0.5 font-display text-base font-semibold text-white">
                  {site.phone}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-white/40 transition group-hover:translate-x-1 group-hover:text-white" />
            </a>
          </RevealItem>

          <RevealItem>
            <a
              href={`mailto:${site.email}`}
              className="group flex h-full items-center gap-4 bg-ink p-6 transition hover:bg-white/[0.03]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/70">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-wider text-white/40">Email</p>
                <p className="mt-0.5 font-display text-sm font-semibold text-white">
                  {site.email}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-white/40 transition group-hover:translate-x-1 group-hover:text-white" />
            </a>
          </RevealItem>

          <RevealItem>
            <div className="flex h-full items-center gap-4 bg-ink p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/70">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-wider text-white/40">LINE / 予約</p>
                <p className="mt-0.5 font-display text-sm font-semibold text-white/60">近日公開予定</p>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
          <span>受付時間 : {site.hours}</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>見積もり無料</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>個人 / 法人どちらも歓迎</span>
        </div>
      </div>
    </section>
  );
}
