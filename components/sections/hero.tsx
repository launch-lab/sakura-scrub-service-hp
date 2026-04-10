"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-sakura-gradient" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60 mask-fade-b" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-sakura-500" />
            特許技術による防カビ・レジオネラ対策
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.15] tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            清潔で、
            <span className="relative inline-block">
              <span className="relative z-10">快適</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sakura-100" />
            </span>
            な空間を。
            <br />
            ひとつひとつ、ていねいに。
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            エアコン分解洗浄・浴室配管クリーニング・ハウスクリーニングから、
            企業様施設の定期清掃まで。国が認定した特許技術で、普段のお掃除では落とせない
            汚れとカビを根本から解決します。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-semibold text-background shadow-[var(--shadow-soft)] transition hover:bg-foreground/85"
            >
              無料で見積もりを依頼
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${site.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/80 px-7 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:bg-white"
            >
              <Phone className="h-4 w-4" />
              電話で相談する
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border/70 pt-8">
            <div>
              <dt className="text-xs text-muted">認定特許</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">2<span className="ml-0.5 text-base text-muted">件</span></dd>
            </div>
            <div>
              <dt className="text-xs text-muted">対応メニュー</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">8<span className="ml-0.5 text-base text-muted">種類+</span></dd>
            </div>
            <div>
              <dt className="text-xs text-muted">法人・個人</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">両対応</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)] ring-1 ring-border">
            <Image
              src="/images/works/aircon-cleaning.jpg"
              alt="エアコン分解洗浄の様子"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-4 top-10 hidden rounded-2xl border border-border bg-white/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 text-foreground">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted">国土交通省・経済産業省</p>
                <p className="text-sm font-semibold">認定特許技術</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 right-2 hidden rounded-2xl border border-border bg-white/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur md:block">
            <p className="text-xs text-muted">防カビ技研</p>
            <p className="font-display text-lg font-semibold text-foreground">湯泡美 正規施工店</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
