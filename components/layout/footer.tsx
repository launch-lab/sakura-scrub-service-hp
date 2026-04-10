import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            src="/images/brand/logo.png"
            alt={site.name}
            width={200}
            height={140}
            className="h-16 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            {site.description}
          </p>
          <p className="mt-6 text-xs text-muted/80">
            {site.affiliation} 所属
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">メニュー</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-sakura-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">お問い合わせ</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aqua-600" />
              <a href={`tel:${site.phone.replace(/-/g, "")}`} className="hover:text-foreground">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-aqua-600" />
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua-600" />
              <span>{site.address}</span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted/80">受付時間: {site.hours}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-display tracking-widest text-aqua-700">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
