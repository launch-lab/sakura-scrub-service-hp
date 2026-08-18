import type { Metadata } from "next";
import { Kaisei_HarunoUmi, Kaisei_Decol, Fraunces, Klee_One } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/layout/floating-cta";
import { SakuraPetals } from "@/components/effects/sakura-petals";
import { LocalBusinessJsonLd, FaqPageJsonLd, HowToJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { BfcacheReset } from "@/components/effects/bfcache-reset";
import { getSiteUrl, site } from "@/lib/site";

const kaiseiHarunoUmi = Kaisei_HarunoUmi({
  variable: "--font-body-jp",
  // NOTE: "japanese" は日本語 Google Fonts の有効なサブセットだが型定義に含まれていない
  // @ts-expect-error
  subsets: ["latin", "japanese"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

const fraunces = Fraunces({
  variable: "--font-display-en",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const kleeOne = Klee_One({
  variable: "--font-script-jp",
  // @ts-expect-error
  subsets: ["latin", "japanese"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const kaiseiDecol = Kaisei_Decol({
  variable: "--font-decor-jp",
  // @ts-expect-error
  subsets: ["latin", "japanese"],
  weight: ["500", "700"],
  display: "swap",
  preload: false,
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: siteUrl,
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  // NOTE: 調整完了後に削除する
  robots: {
    index: false,
    follow: false,
  },
  // NOTE: app/icon.png / app/apple-icon.png / app/favicon.ico を Next.js が自動検出する
  other: {
    // NOTE: iOS Safari が電話番号・住所を自動でリンク化するのを抑制
    //       (auto-linkify が原因のハイドレーションミスマッチを防ぐ)
    "format-detection": "telephone=no, date=no, email=no, address=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${kaiseiHarunoUmi.variable} ${kaiseiDecol.variable} ${fraunces.variable} ${kleeOne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <BfcacheReset />
        <WebSiteJsonLd />
        <LocalBusinessJsonLd />
        <FaqPageJsonLd />
        <HowToJsonLd />
        <SakuraPetals fixed count={28} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
