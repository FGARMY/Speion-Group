import Script from "next/script";
import {
  jsonLdGraph,
  serviceSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/schemas";
import { siteUrl } from "@/lib/seo";

type ServicePageSchemaProps = {
  serviceName: string;
  serviceDescription: string;
  pathname: string;
  faqs?: { question: string; answer: string }[];
};

/**
 * Renders JSON-LD for a service page: Service + BreadcrumbList + optional FAQPage.
 * Drop this into any service page alongside the main content.
 */
export default function ServicePageSchema({
  serviceName,
  serviceDescription,
  pathname,
  faqs,
}: ServicePageSchemaProps) {
  const url = `${siteUrl}${pathname}`;

  const schemas: Record<string, unknown>[] = [
    serviceSchema({
      name: serviceName,
      description: serviceDescription,
      url,
    }),
    breadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "Services", url: `${siteUrl}/services` },
      { name: serviceName, url },
    ]),
  ];

  if (faqs && faqs.length > 0) {
    schemas.push(faqPageSchema(faqs));
  }

  return (
    <Script
      id={`service-schema-${pathname.replace(/\//g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdGraph(...schemas)),
      }}
    />
  );
}
