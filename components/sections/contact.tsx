import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sakura-500 via-sakura-600 to-aqua-700" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, white 0%, transparent 40%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="rounded-[2rem] border border-white/20 bg-white/10 p-8 text-white backdrop-blur-xl md:p-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              お気軽に、<br />
              ご相談ください。
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90">
              お見積もりはすべて無料です。ご質問・ご要望など、どんな小さなことでも
              お気軽にお問い合わせください。原則 1 営業日以内にご返信いたします。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a
              href={`tel:${site.phone.replace(/-/g, "")}`}
              className="group flex items-center gap-4 rounded-2xl bg-white/15 p-5 backdrop-blur transition hover:bg-white/25"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-white/80">お電話</p>
                <p className="font-display text-lg font-bold">{site.phone}</p>
              </div>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-4 rounded-2xl bg-white/15 p-5 backdrop-blur transition hover:bg-white/25"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-white/80">メール</p>
                <p className="font-display text-sm font-bold">{site.email}</p>
              </div>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-white/15 p-5 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-white/80">LINE / 予約</p>
                <p className="font-display text-sm font-bold">近日公開予定</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/80">
            <span>受付時間: {site.hours}</span>
            <span>• 見積もり無料</span>
            <span>• 個人 / 法人どちらも歓迎</span>
          </div>
        </div>
      </div>
    </section>
  );
}
