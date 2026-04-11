"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50 mask-fade-b" />

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-sakura-500" />
            <span className="text-sm text-foreground/80">
              特許技術による防カビ・レジオネラ対策
            </span>
          </div>

          <h1 className="mt-10 tracking-display text-foreground">
            <span className="block text-base font-medium text-foreground/60 md:text-lg">
              株式会社
            </span>
            <span className="mt-1 block whitespace-nowrap text-[40px] font-medium leading-[1.05] md:text-[64px] lg:text-[80px]">
              <span className="text-sakura-500">桜</span>
              <span className="relative inline-block">
                <span className="relative z-10">scrub</span>
                <span className="absolute inset-x-0 bottom-2 -z-0 h-4 bg-sakura-100 md:h-5" />
              </span>
              サービス
            </span>
          </h1>

          <p className="mt-6 font-script text-[26px] font-normal leading-snug text-foreground md:text-[36px] lg:text-[44px]">
            清潔で快適な空間のご提供
          </p>

          <p className="mt-8 max-w-xl text-base font-normal leading-[1.9] text-muted md:text-[17px]">
            {site.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-cta)] px-7 py-4 text-base font-semibold text-background shadow-[var(--shadow-soft)] transition hover:bg-foreground"
            >
              無料で見積もりを依頼
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${site.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/80 px-7 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:bg-surface"
            >
              <Phone className="h-4 w-4" />
              電話で相談する
            </a>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-10">
            <div>
              <dt className="font-accent text-xs text-subtle">patent</dt>
              <dd className="mt-3 font-accent text-5xl font-normal leading-none text-foreground md:text-6xl">
                2<span className="ml-1 align-top text-sm text-muted">件</span>
              </dd>
            </div>
            <div>
              <dt className="font-accent text-xs text-subtle">menu</dt>
              <dd className="mt-3 font-accent text-5xl font-normal leading-none text-foreground md:text-6xl">
                8<span className="ml-1 align-top text-sm text-muted">種+</span>
              </dd>
            </div>
            <div>
              <dt className="font-accent text-xs text-subtle">client</dt>
              <dd className="mt-3 text-3xl font-medium leading-none text-foreground md:text-4xl">
                両対応
              </dd>
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

          <div className="absolute -left-4 top-10 hidden rounded-2xl border border-border bg-surface/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur md:block">
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

          <div className="absolute -bottom-4 right-2 hidden rounded-2xl border border-border bg-surface/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur md:block">
            <p className="text-xs text-muted">防カビ技研</p>
            <p className="font-display text-lg font-semibold text-foreground">湯泡美 正規施工店</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
