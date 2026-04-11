export const site = {
  name: "桜scrubサービス",
  legalName: "株式会社桜scrubサービス",
  nameEn: "Sakura Scrub Service",
  tagline: "清潔で快適な空間のご提供",
  taglineEn: "Clean and comfortable space",
  description:
    "桜scrubサービスではエアコン、水まわり、お部屋まわりや事務所・店舗等の清掃・空室の退去後の清掃まで承ります。",
  // NOTE: 将来 microCMS 化予定だが、静的な連絡先はここで一元管理
  url: "https://sakura-scrub.example.com",
  phone: "042-711-7143",
  email: "sakurascrub@gmail.com",
  postalCode: "252-0234",
  address: "神奈川県相模原市中央区共和4丁目5番6号 成洋商事内2F",
  representative: "丸山 雄也",
  affiliation: "一般社団法人抗菌防カビ清掃技術研究所",
  affiliationUrl: "https://bmc-labo.jp/",
  // NOTE: BMC-Labo と湯泡美の監修者。著書名・肩書きは BMC-Labo と
  // 既存の他社掲載例 (dusmel.com / everhousecleaning.com) を参考に構成。
  supervisor: {
    name: "古畑 勝則",
    title: "麻布大学 名誉教授",
    book: "『レジオネラ属菌を知る』",
    honorific: "先生",
  },
} as const;

// NOTE: Vercel の実行環境なら VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL を優先し、
// ローカルや未定義時は site.url のプレースホルダを使う。
// metadataBase / sitemap / robots / JSON-LD の正準 URL として利用
export function getSiteUrl() {
  const prodUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prodUrl) return `https://${prodUrl}`;

  const deployUrl = process.env.VERCEL_URL;
  if (deployUrl) return `https://${deployUrl}`;

  return site.url;
}

export const nav = [
  { href: "#services", label: "サービス" },
  { href: "#news", label: "お知らせ" },
  { href: "#strengths", label: "強み" },
  { href: "#works", label: "施工事例" },
  { href: "#flow", label: "ご利用の流れ" },
  { href: "#faq", label: "よくある質問" },
  { href: "#contact", label: "お問い合わせ" },
] as const;
