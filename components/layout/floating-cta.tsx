"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [scrolled, setScrolled] = useState(false);
  const [nearContact, setNearContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // NOTE: Contact セクションが視界に入ったら追従 CTA を隠してフォームと干渉させない
    const target = document.getElementById("contact");
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => setNearContact(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px", threshold: 0 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const visible = scrolled && !nearContact;

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 transition-all duration-500 ease-out md:pb-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-surface/90 p-1.5 shadow-[var(--shadow-soft)] backdrop-blur-xl md:w-auto md:max-w-none">
        <a
          href={`tel:${site.phone.replace(/-/g, "")}`}
          className="group flex flex-1 items-center justify-center gap-2 rounded-full border border-border/60 bg-surface/40 px-4 py-3 text-sm font-medium text-foreground transition hover:bg-surface md:flex-none md:px-5"
        >
          <Phone className="h-4 w-4" />
          <span>電話で相談</span>
        </a>
        <Link
          href="#contact"
          className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-cta)] px-5 py-3 text-sm font-semibold text-background transition hover:bg-foreground md:flex-none"
        >
          無料で見積もり
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
