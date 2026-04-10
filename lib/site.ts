export const site = {
  name: "桜 Scrub サービス",
  nameEn: "Sakura Scrub Service",
  tagline: "Clean and comfortable space",
  description:
    "桜 Scrub サービスは、特許技術を用いた防カビ・レジオネラ対策に強いハウスクリーニング・エアコン分解洗浄の専門業者です。ご家庭から企業様施設まで、清潔で快適な空間をご提供します。",
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
