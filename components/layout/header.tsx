"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <nav className="hidden items-center gap-8 lg:flex">
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
            <Phone className="h-4 w-4" />
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
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-foreground lg:hidden"
          aria-label="メニューを開く"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-5 mb-4 rounded-2xl border border-border bg-surface/95 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
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
                <Phone className="h-4 w-4" />
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
      )}
    </header>
  );
}
