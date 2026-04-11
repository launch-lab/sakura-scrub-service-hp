"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // NOTE: モバイルメニュー開放時の a11y 処理
  // - Esc キーで閉じる
  // - focus を最初の要素に移動
  // - body のスクロールを固定
  // - 閉じるときはトグルボタンへフォーカスを戻す
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    // NOTE: cleanup 時に ref.current が差し変わっている可能性を避けるため
    //       effect 実行時点の参照をキャプチャしておく
    const toggle = toggleRef.current;
    const firstFocusable = panel?.querySelector<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])",
    );
    firstFocusable?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
      if (e.key === "Tab" && panel) {
        const focusable = Array.from(
          panel.querySelectorAll<HTMLElement>(
            "a, button, [tabindex]:not([tabindex='-1'])",
          ),
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      // 閉じたあとはトグルボタンへフォーカスを戻す
      toggle?.focus();
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/85 backdrop-blur-xl shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src="/images/brand/logo.png"
            alt={site.name}
            width={180}
            height={120}
            priority
            className="h-12 w-auto md:h-14"
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phone.replace(/-/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-cta)] px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-foreground"
          >
            無料見積もり
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-foreground lg:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls={panelId}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Menu className="h-6 w-6" aria-hidden />
          )}
        </button>
      </div>

      <div
        id={panelId}
        ref={panelRef}
        aria-label="モバイルメニュー"
        className={cn("lg:hidden", open ? "block" : "hidden")}
        // NOTE: 閉じている間は inert でフォーカスやスクリーンリーダーから除外
        inert={!open}
      >
        <div className="mx-5 mb-4 rounded-2xl border border-border bg-surface/95 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
          <nav aria-label="モバイルナビゲーション" className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground/90 transition hover:bg-foreground/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
            <a
              href={`tel:${site.phone.replace(/-/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[var(--color-cta)] py-3 text-center text-sm font-semibold text-background"
            >
              無料見積もり
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
