"use client";

import { useEffect, useState } from "react";

type Props = {
  count?: number;
  className?: string;
  fixed?: boolean;
};

type Petal = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  drift: number;
  hueClass: string;
  variant: number;
  tilt: number;
};

// NOTE: 3 種類の桜の花びら形状。V 字ノッチ付きでリアルな輪郭。viewBox は 0 0 100 100 に統一。
const PETAL_PATHS = [
  // 標準形 — 丸みのある花びら
  "M50 94 C20 88 4 58 13 28 C19 12 32 6 42 18 L50 32 L58 18 C68 6 81 12 87 28 C96 58 80 88 50 94 Z",
  // 細身形 — すらっとした花びら
  "M50 96 C28 90 14 62 19 32 C23 16 34 10 44 22 L50 34 L56 22 C66 10 77 16 81 32 C86 62 72 90 50 96 Z",
  // ふくよか形 — 横に広めの花びら
  "M50 93 C15 88 0 55 10 22 C18 6 33 4 45 18 L50 28 L55 18 C67 4 82 6 90 22 C100 55 85 88 50 93 Z",
];

// NOTE: SSR せずクライアントマウント後にのみ描画し、浮動小数のハイドレーションミスマッチを回避
export function SakuraPetals({ count = 48, className = "", fixed = false }: Props) {
  const [petals, setPetals] = useState<Petal[] | null>(null);

  useEffect(() => {
    // NOTE: React 19 のルールを回避しつつハイドレーション後に 1 度だけ生成する
    const rafId = requestAnimationFrame(() => {
      const generated: Petal[] = Array.from({ length: count }, () => {
        const spin = Math.random() > 0.5 ? 1 : -1;
        const duration = 12 + Math.random() * 16;
        // NOTE: 負の delay でアニメーション途中から開始し、初期位置に溜まらないようにする
        const delay = -Math.random() * duration;
        return {
          left: Math.random() * 100,
          delay,
          duration,
          size: 7 + Math.round(Math.random() * 9),
          opacity: 0.14 + Math.random() * 0.22,
          drift: (-40 + Math.random() * 80) * spin,
          hueClass:
            Math.random() > 0.6 ? "text-sakura-400" : "text-sakura-300",
          variant: Math.floor(Math.random() * PETAL_PATHS.length),
          tilt: -45 + Math.random() * 90,
        };
      });
      setPetals(generated);
    });
    return () => cancelAnimationFrame(rafId);
  }, [count]);

  if (!petals) return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none overflow-hidden ${
        fixed ? "fixed inset-0 z-[5]" : "absolute inset-0"
      } ${className}`}
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            ["--drift" as string]: `${p.drift}px`,
            ["--tilt" as string]: `${p.tilt}deg`,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className={`h-full w-full ${p.hueClass}`}
            style={{ transform: `rotate(${p.tilt}deg)` }}
          >
            <path d={PETAL_PATHS[p.variant]} fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  );
}
