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
};

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
          size: 10 + Math.round(Math.random() * 18),
          opacity: 0.4 + Math.random() * 0.55,
          drift: (-40 + Math.random() * 80) * spin,
          hueClass: Math.random() > 0.55 ? "text-sakura-300" : "text-sakura-200",
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
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`h-full w-full drop-shadow-[0_2px_6px_rgba(236,22,131,0.15)] ${p.hueClass}`}
          >
            <path d="M12 2c2 3 5 5 8 5-3 2-5 5-5 8-2-3-5-5-8-5 3-2 5-5 5-8z" />
          </svg>
        </span>
      ))}
    </div>
  );
}
