import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://speion.com/#organization",
        "name": "Speion",
        "alternateName": ["Speion Software Development"],
        "url": "https://speion.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://speion.com/images/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Speion is a global enterprise software engineering and digital transformation partner.",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91 77588 66318",
            "contactType": "sales",
            "email": "speiongorup@gmail.com",
            "availableLanguage": ["English", "Hindi", "Marathi"],
            "areaServed": "Worldwide"
          }
        ],
        "sameAs": [
          "https://instagram.com/speiongroup",
          "https://facebook.com/Speion",
          "https://linkedin.com/company/speion"
        ],
        "founder": {
          "@type": "Person",
          "@id": "https://speion.com/#founder",
          "name": "Speion Founder",
          "jobTitle": "Founder & CEO"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://speion.com/#pune-office",
        "name": "Speion — Top Software Development Company Pune",
        "telephone": "+91 77588 66318",
        "email": "speiongorup@gmail.com",
        "image": "https://speion.com/images/logo.png",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Parklane Life Season Plus, Dhanori",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411015",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://speion.com/#nashik-office",
        "name": "Speion — Top Web Development Agency Nashik",
        "telephone": "+91 77588 66318",
        "email": "speiongorup@gmail.com",
        "image": "https://speion.com/images/logo.png",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nashik",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "areaServed": ["Nashik", "Maharashtra"]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://speion.com/#maharashtra-office",
        "name": "Speion — Software Development Company Maharashtra",
        "telephone": "+91 77588 66318",
        "email": "speiongorup@gmail.com",
        "image": "https://speion.com/images/logo.png",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Maharashtra",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "areaServed": ["Maharashtra", "Pune", "Nashik"]
      }
    ]
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <WhyUs />
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-teal-500 font-bold mb-3">Local software development</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Local offices in Nashik, Pune and Maharashtra
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover our city-specific software development services for startups, enterprises, and manufacturing businesses across Maharashtra.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/locations/software-development-nashik" className="group block rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg hover:-translate-y-1 transition">
              <p className="text-sm uppercase tracking-[0.35em] text-teal-500 font-bold mb-3">Nashik</p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Software Development Company Nashik</h3>
              <p className="text-slate-600 dark:text-slate-400">Custom software, ERP, and digital transformation for Nashik businesses.</p>
            </Link>
            <Link href="/locations/software-development-pune" className="group block rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg hover:-translate-y-1 transition">
              <p className="text-sm uppercase tracking-[0.35em] text-teal-500 font-bold mb-3">Pune</p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Software Development Company Pune</h3>
              <p className="text-slate-600 dark:text-slate-400">Enterprise-grade app development and SaaS engineering in Pune.</p>
            </Link>
            <Link href="/locations/software-development-maharashtra" className="group block rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg hover:-translate-y-1 transition">
              <p className="text-sm uppercase tracking-[0.35em] text-teal-500 font-bold mb-3">Maharashtra</p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Software Development Company Maharashtra</h3>
              <p className="text-slate-600 dark:text-slate-400">State-wide custom software services for Maharashtra enterprises.</p>
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
