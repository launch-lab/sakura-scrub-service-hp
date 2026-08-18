"use client";

import { useEffect } from "react";

// NOTE: bfcache 復元時に Framer Motion の opacity:0 状態が残るバグを防ぐ。
//       pageshow の persisted フラグを検知してリロードする。
export function BfcacheReset() {
  useEffect(() => {
    const handler = (e: PageTransitionEvent) => {
      if (e.persisted) window.location.reload();
    };
    window.addEventListener("pageshow", handler);
    return () => window.removeEventListener("pageshow", handler);
  }, []);
  return null;
}
