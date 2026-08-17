"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  const shouldReduce = useReducedMotion();
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden pt-24 text-white md:pt-32">
      {/* 全幅の背景写真 */}
      <Image
        src="/images/hero.jpg"
        alt="壁掛けエアコンの分解洗浄作業"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover [object-position:28%_50%]"
      />

      {/* 読みやすさのための暗部グラデーション: 下から上、左から右 */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent"
      />

      {/* 微かな桜ピンクのグロウ */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 95%, rgba(229, 0, 106, 0.35) 0%, transparent 45%)",
        }}
      />

      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 32 }}
        animate={shouldReduce ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 md:pb-28 lg:px-8 lg:pb-32"
      >
        <p className="font-accent text-sm text-white/60 md:text-base">
          特許技術による防カビ・レジオネラ対策
        </p>

        <h1 className="mt-6 tracking-display text-white">
          <span
            className="mt-3 flex items-baseline whitespace-nowrap font-medium leading-[1]"
            style={{ fontSize: "clamp(2rem, 9.5vw, 10rem)" }}
          >
            <span className="font-decor font-bold text-sakura-300">桜</span>
            <span className="relative mx-1 inline-block">
              <span className="font-accent relative z-10 font-normal text-white">
                Scrub
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-[0.12em] -z-0 bg-sakura-500/70"
                style={{ height: "0.22em" }}
              />
            </span>
            <span className="text-white">サービス</span>
          </span>
        </h1>

        <p
          className="mt-8 max-w-2xl font-normal italic leading-[1.3] text-white/85"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2.5rem)" }}
        >
          清潔で快適な空間のご提供
        </p>

        <p className="mt-10 max-w-xl text-sm leading-[1.95] text-white/70 md:text-[15px]">
          {site.description}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-ink shadow-[var(--shadow-soft)] transition hover:bg-sakura-100"
          >
            無料で見積もりを依頼
            <ArrowRight
              className="h-4 w-4 transition group-hover:translate-x-1"
              aria-hidden
            />
          </a>
          <a
            href={`tel:${site.phone.replace(/-/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            <Phone className="h-4 w-4" aria-hidden />
            電話で相談する
          </a>
        </div>
      </motion.div>

      {/* 右下の認証ラベル (装飾ではなく情報として残す) */}
      <div className="pointer-events-none absolute bottom-8 right-5 hidden max-w-xs flex-col items-end gap-1 text-right text-white/70 md:flex lg:right-8">
        <p className="font-accent text-[11px] uppercase tracking-[0.2em] text-white/50">
          certifications
        </p>
        <p className="text-xs">国土交通省・経済産業省 認定特許技術</p>
        <p className="text-xs">一般社団法人 防カビ技研 / 湯泡美 正規施工店</p>
      </div>
    </section>
  );
}
