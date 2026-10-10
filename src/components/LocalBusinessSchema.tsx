import React from "react";

type LocalBusinessSchemaProps = {
  name?: string;
  description: string;
  url: string;
  telephone?: string;
  streetAddress?: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
  image?: string;
  geo?: { latitude: number; longitude: number };
  priceRange?: string;
  openingHours?: string[];
  areaServed?: string[];
};

export default function LocalBusinessSchema({
  name = "Speion",
  description,
  url,
  telephone = "+91 77588 66318",
  streetAddress,
  addressLocality,
  addressRegion = "Maharashtra",
  postalCode,
  addressCountry = "IN",
  image = "https://speion.com/images/Primary-white.png",
  geo,
  priceRange = "$$",
  openingHours = ["Mo-Sa 09:00-19:00"],
  areaServed = ["India", "Global"],
}: LocalBusinessSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    image,
    url,
    telephone,
    email: "speiongroup@gmail.com",
    priceRange,
    currenciesAccepted: "INR, USD, EUR, GBP, AED",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      ...(streetAddress && { streetAddress }),
      addressLocality,
      addressRegion,
      ...(postalCode && { postalCode }),
      addressCountry,
    },
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    areaServed: areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    description,
    parentOrganization: {
      "@id": "https://speion.com/#organization",
    },
    sameAs: [
      "https://instagram.com/speiongroup",
      "https://linkedin.com/company/speion",
      "https://facebook.com/Speion",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

