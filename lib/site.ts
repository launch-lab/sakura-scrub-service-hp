export const site = {
  name: "桜scrubサービス",
  legalName: "株式会社桜scrubサービス",
  nameEn: "Sakura Scrub Service",
  tagline: "清潔で快適な空間のご提供",
  taglineEn: "Clean and comfortable space",
  description:
    "桜scrubサービスではエアコン、水まわり、お部屋まわりや事務所・店舗等の清掃・空室の退去後の清掃まで承ります。",
  // NOTE: 仮置きの情報。本番では microCMS から取得予定
  url: "https://sakura-scrub.example.com",
  phone: "000-0000-0000",
  email: "info@sakura-scrub.example.com",
  address: "〒000-0000 住所未設定",
  representative: "丸山 雄也",
  affiliation: "一般社団法人抗菌防カビ清掃技術研究所",
  hours: "9:00 - 18:00（不定休）",
  areas: ["対応エリア調整中"],
} as const;

export const nav = [
  { href: "#services", label: "サービス" },
  { href: "#strengths", label: "強み" },
  { href: "#works", label: "施工事例" },
  { href: "#flow", label: "ご利用の流れ" },
  { href: "#faq", label: "よくある質問" },
  { href: "#contact", label: "お問い合わせ" },
] as const;
