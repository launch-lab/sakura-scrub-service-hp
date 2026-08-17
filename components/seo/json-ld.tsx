import { getSiteUrl, site } from "@/lib/site";

const faqs = [
  {
    q: "見積もりは無料ですか？",
    a: "はい、お見積もりは無料です。お電話またはフォームよりお気軽にご相談ください。現地確認が必要な場合も、出張費は発生しません(対応エリア内)。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "基本の対応エリアは別途お問い合わせください。エリア外でも内容によっては対応可能な場合がございますので、まずはご相談ください。",
  },
  {
    q: "作業時間はどのくらいかかりますか？",
    a: "メニューや汚れ具合により異なりますが、家庭用エアコン 1 台で約 1.5〜2 時間、追い焚き配管洗浄で約 2〜3 時間が目安です。",
  },
  {
    q: "他社と何が違うのですか？",
    a: "国土交通省・経済産業省に認定された 2 つの特許技術(高耐久型防カビ工法、湯泡美)を使用し、汚れの除去だけでなくカビ・レジオネラの再発抑制まで行う点が最大の特長です。",
  },
  {
    q: "法人契約(定期清掃)にも対応していますか？",
    a: "はい、店舗・事務所・施設・社員寮・社用車等の定期清掃やスポット清掃に対応しております。ご要望に合わせたプランをご提案いたします。",
  },
  {
    q: "賃貸退去後のハウスクリーニングは可能ですか？",
    a: "可能です。管理会社様・オーナー様からのご依頼も多数承っております。お気軽にお問い合わせください。",
  },
];

export function LocalBusinessJsonLd() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    legalName: site.legalName,
    alternateName: site.nameEn,
    description: site.description,
    url: siteUrl,
    telephone: site.phone,
    email: site.email,
    image: `${siteUrl}/images/brand/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
      postalCode: site.postalCode,
      addressRegion: "神奈川県",
      addressLocality: "相模原市中央区",
      streetAddress: site.address,
    },
    areaServed: "JP",
    founder: {
      "@type": "Person",
      name: site.representative,
    },
    memberOf: {
      "@type": "Organization",
      name: site.affiliation,
    },
  };

  return (
    <script
      type="application/ld+json"
      // NOTE: JSON-LD は構造化データのため dangerouslySetInnerHTML を使用
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
