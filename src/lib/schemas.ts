/**
 * Centralized JSON-LD Schema Factory
 * ====================================
 * All structured data for the Speion website is generated from this module
 * to ensure consistency across pages and compliance with Schema.org standards.
 */

import { siteUrl } from "./seo";

// ─── Constants ───────────────────────────────────────────────────────────────

const ORGANIZATION_ID = `${siteUrl}/#organization`;
const WEBSITE_ID = `${siteUrl}/#website`;
const FOUNDER_ID = `${siteUrl}/#founder`;
const PUNE_OFFICE_ID = `${siteUrl}/#pune-office`;
const NASHIK_OFFICE_ID = `${siteUrl}/#nashik-office`;

const LOGO_URL = `${siteUrl}/images/Primary-white.png`;
const EMAIL = "speiongroup@gmail.com";
const PHONE = "+91 77588 66318";

// ─── Organization ────────────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Speion",
    alternateName: ["Speion Group", "Speion Software Development"],
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 512,
      height: 512,
    },
    description:
      "Speion is a premier software development company in Pune and Nashik, India, specializing in custom web applications, mobile apps, AI automation, SaaS platforms, and enterprise software engineering.",
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 10,
    },
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "AI Automation",
      "Custom Software Development",
      "SaaS Development",
      "CRM Development",
      "ERP Development",
      "Machine Learning",
      "Chatbot Development",
      "E-commerce Development",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "sales",
        email: EMAIL,
        availableLanguage: ["English", "Hindi", "Marathi"],
        areaServed: "Worldwide",
      },
    ],
    sameAs: [
      "https://instagram.com/speiongroup",
      "https://facebook.com/Speion",
      "https://linkedin.com/company/speion",
    ],
    founder: {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Sarvesh",
      jobTitle: "Founder & CEO",
      worksFor: { "@id": ORGANIZATION_ID },
    },
  };
}

// ─── WebSite ─────────────────────────────────────────────────────────────────

export function webSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl,
    name: "Speion",
    publisher: { "@id": ORGANIZATION_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/insights?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── LocalBusiness ───────────────────────────────────────────────────────────

export function puneOfficeSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": PUNE_OFFICE_ID,
    name: "Speion — Software Development Company Pune",
    telephone: PHONE,
    email: EMAIL,
    image: LOGO_URL,
    priceRange: "$$",
    url: `${siteUrl}/locations/software-development-pune`,
    parentOrganization: { "@id": ORGANIZATION_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Parklane Life Season Plus, Dhanori",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411015",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5913,
      longitude: 73.8567,
    },
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "State", name: "Maharashtra" },
    ],
  };
}

export function nashikOfficeSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": NASHIK_OFFICE_ID,
    name: "Speion — Web Development Agency Nashik",
    telephone: PHONE,
    email: EMAIL,
    image: LOGO_URL,
    priceRange: "$$",
    url: `${siteUrl}/locations/software-development-nashik`,
    parentOrganization: { "@id": ORGANIZATION_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Nashik" },
      { "@type": "State", name: "Maharashtra" },
    ],
  };
}

// ─── Person (Founder) ────────────────────────────────────────────────────────

export function founderSchema() {
  return {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: "Sarvesh",
    jobTitle: "Founder & CEO",
    worksFor: { "@id": ORGANIZATION_ID },
    image: `${siteUrl}/sarvesh-image.jpeg`,
    knowsAbout: [
      "Software Architecture",
      "Web Development",
      "AI Automation",
      "Enterprise Software Engineering",
      "Mobile App Development",
    ],
    sameAs: [],
  };
}

// ─── BreadcrumbList ──────────────────────────────────────────────────────────

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Service ─────────────────────────────────────────────────────────────────

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

// ─── FAQPage ─────────────────────────────────────────────────────────────────

export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Article ─────────────────────────────────────────────────────────────────

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  image?: string;
}) {
  return {
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    author: {
      "@type": "Person",
      name: opts.author,
    },
    publisher: { "@id": ORGANIZATION_ID },
    image: opts.image || LOGO_URL,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": opts.url,
    },
  };
}

// ─── Graph Builder ───────────────────────────────────────────────────────────

/**
 * Wraps an array of schema objects in a JSON-LD @graph.
 * Use this at the page level to combine multiple schemas.
 */
export function jsonLdGraph(...schemas: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
