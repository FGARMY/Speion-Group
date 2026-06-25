import Script from "next/script";
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
        }
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
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
