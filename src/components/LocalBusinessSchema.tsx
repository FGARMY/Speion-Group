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
  telephone = "+91 77588 66318",
  addressLocality,
  addressRegion = "Maharashtra",
  postalCode,
  addressCountry = "IN",
  image = "https://speion.com/images/Primary-white.png",
}: LocalBusinessSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    image,
    url,
    telephone,
    email: "speiongroup@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressRegion,
      ...(postalCode && { postalCode }),
      addressCountry,
    },
    description,
    parentOrganization: {
      "@id": "https://speion.com/#organization",
    },
    sameAs: [
      "https://instagram.com/speiongroup",
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

