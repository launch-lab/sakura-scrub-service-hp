import { site } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    legalName: site.legalName,
    alternateName: site.nameEn,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/images/brand/logo.png`,
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
