import React from "react";

type LocalBusinessSchemaProps = {
  name?: string;
  description: string;
  url: string;
  telephone?: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
  image?: string;
};

export default function LocalBusinessSchema({
  name = "Speion",
  description,
  url,
  telephone = "+91 00000 00000",
  addressLocality,
  addressRegion = "Maharashtra",
  postalCode = "000000",
  addressCountry = "IN",
  image = "https://speion.com/images/logo.png",
}: LocalBusinessSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareOrganization",
    name,
    image,
    url,
    telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
    },
    description,
    sameAs: [
      "https://twitter.com/speion",
      "https://linkedin.com/company/speion",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
