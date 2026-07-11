import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import CookieBanner from "@/components/CookieBanner";
import FloatingContact from "@/components/FloatingContact";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { metadataBase as siteMetadataBase } from "@/lib/seo";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadataBase = siteMetadataBase;

export const metadata: Metadata = {
  title: "Global Software & Web Development Agency | Speion",
  description: "Leading global enterprise software and web development agency. We build high-performance websites, custom software, scalable mobile apps, and AI systems.",
  keywords: ["Software Development Company Pune", "Web Development Agency Nashik", "Global Software Engineering", "Enterprise Software Development", "Custom Software Solutions", "Speion", "Top IT Company in Pune", "Mobile App Developers Nashik"],
  alternates: {
    canonical: new URL("/", siteMetadataBase).toString(),
  },
  openGraph: {
    title: "Speion | Global Software & Web Development Agency",
    description: "Custom software, web & app development, AI automation, and SaaS solutions by Speion.",
    type: "website",
    locale: "en_IN",
    siteName: "Speion",
    url: "https://speion.com",
    images: [
      {
        url: "https://speion.com/images/Primary-white.png",
        width: 1200,
        height: 630,
        alt: "Speion software development and digital transformation services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speion | Global Software & Web Development Agency",
    description: "Enterprise-grade custom software, web, and mobile app development.",
    images: ["https://speion.com/images/Primary-white.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GsOgzhOvSR_-jxMcRvRqCEFr5AyZmC4EmGqQyX7bfUQ",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Speion",
  "url": "https://speion.com",
  "logo": "https://speion.com/images/Primary-white.png",
  "description": "Global enterprise software, web development, custom CRM, ERP, and AI automation agency.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "areaServed": ["India", "USA", "UK", "UAE", "Australia", "Canada"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development for Enterprise"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development & Design Agency"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automations & Consulting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CRM & ERP Custom Software Solutions"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} font-sans scroll-smooth`}
    >
      <body className="antialiased bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Invisible SEO Keywords for Screen Readers & Crawlers */}
        <div className="sr-only">
          <h1>Top Web Development Company in Pune</h1>
          <h1>Best Custom Software Agency for Startups</h1>
          <h1>Affordable App Development Services India</h1>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:shadow-2xl"
          >
            Skip to Content
          </a>
          <div id="main-content" className="w-full overflow-x-hidden flex flex-col min-h-screen">
            {children}
          </div>
          <FloatingContact />
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
