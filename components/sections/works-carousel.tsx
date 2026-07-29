"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/effects/reveal";
import { SakuraMark } from "@/components/brand/sakura-mark";
import type { WorkCardData } from "./works";

function WorkCard({ work }: { work: WorkCardData }) {
  const { card, aspect } = work.sizeClass;
  return (
    <figure
      className={`group pointer-events-none flex shrink-0 flex-col ${card}`}
    >
      <div
        className={`relative overflow-hidden rounded-[1.25rem] bg-background ${aspect}`}
      >
        <Image
          src={work.src}
          alt={work.title}
          fill
          sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 400px"
          className="object-cover"
          draggable={false}
        />
      </div>
      <figcaption className="mt-5 flex flex-col gap-2 px-1">
        <div className="flex items-center gap-3">
          <span className="font-accent text-sm text-sakura-500">
            {work.index}
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="font-accent text-xs text-subtle">{work.tag}</span>
        </div>
        <h3 className="text-base font-medium leading-tight text-foreground md:text-lg lg:text-xl">
          {work.title}
        </h3>
      </figcaption>
    </figure>
  );
}

export function WorksCarousel({ works }: { works: WorkCardData[] }) {
  // NOTE: 原本 + 複製の 2 セットでドラッグ / 自動スクロールを無限ループ
  const loop = [...works, ...works];

  const shouldReduce = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  useEffect(() => {
    // NOTE: モーション削減指定時は自動スクロールを完全停止してドラッグのみ有効に
    if (shouldReduce) return;

    const el = scrollRef.current;
    if (!el) return;

    let rafId = 0;
    let lastTime = performance.now();
    // NOTE: iOS Safari は scrollLeft のサブピクセル値を無視するため、
    //       累積値が 1px を超えるまで溜めてから整数ぶんだけ加算する
    let accumulator = 0;
    const pxPerMs = 0.05;

    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;

      if (!isDragging.current) {
        accumulator += dt * pxPerMs;
        if (accumulator >= 1) {
          const step = Math.floor(accumulator);
          el.scrollLeft += step;
          accumulator -= step;
        }

        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [shouldReduce]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    if (e.pointerType === "mouse") {
      startX.current = e.clientX;
      startScroll.current = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollRef.current;
    if (!el || !isDragging.current) return;
    const dx = e.clientX - startX.current;
    el.scrollLeft = startScroll.current - dx;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = false;
    if (e.pointerType === "mouse" && el.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <Reveal
      direction="left"
      delay={0.1}
      className="mx-auto mt-14 max-w-[1440px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
    >
      <div
        ref={scrollRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        role="region"
        aria-label="施工事例カルーセル"
        tabIndex={0}
        className="scrollbar-none flex cursor-grab select-none gap-5 overflow-x-auto px-5 active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 md:gap-7 lg:px-8"
        style={{ scrollbarWidth: "none" }}
      >
        {loop.map((w, i) => (
          <WorkCard key={`${w.src}-${i}`} work={w} />
        ))}
      </div>
    </Reveal>
  );
}

export function WorksSectionHeader() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
      <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="flex items-center gap-2 font-accent text-base text-muted">
            <SakuraMark className="h-3 w-3 text-sakura-500" />
            works
          </p>
          <h2 className="mt-6 text-[40px] font-medium leading-[1.05] tracking-display text-foreground md:text-[72px] lg:text-[92px]">
            施工
            <span className="font-accent font-normal text-sakura-500">
              事例
            </span>
          </h2>
        </div>
        <p className="w-full text-sm leading-[1.95] text-muted md:ml-auto md:w-auto md:whitespace-nowrap md:pb-4 md:text-right md:text-[15px]">
          実際の現場写真をご紹介します。ご家庭から法人施設まで、幅広い現場での施工実績をご覧ください。
        </p>
      </Reveal>
    </div>
  );
}
