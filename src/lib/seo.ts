import type { Metadata } from "next";

export const siteUrl = "https://speion.com";
export const metadataBase = new URL(siteUrl);

const defaultOgImage = new URL("/images/speion-hero.png", metadataBase).toString();
const defaultOgAlt = "Speion software development and digital transformation services";

export type PageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  openGraph?: Metadata["openGraph"];
  twitter?: Metadata["twitter"];
};

export function pageMetadata({
  title,
  description,
  pathname,
  keywords,
  openGraph,
  twitter,
}: PageMetadataOptions): Metadata {
  const canonical = new URL(pathname, metadataBase).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Speion",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: defaultOgAlt,
        },
      ],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
      ...twitter,
    },
  };
}
