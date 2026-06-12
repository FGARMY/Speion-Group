import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import TrustBar from "@/components/TrustBar";
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
        "@id": "https://speion-group.vercel.app/#organization",
        "name": "Speion",
        "alternateName": ["Speion Software Development"],
        "url": "https://speion-group.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://speion-group.vercel.app/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Speion is a global enterprise software engineering and digital transformation partner.",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91 77588 66318",
            "contactType": "sales",
            "email": "speiongroup@gmail.com",
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
          "@id": "https://speion-group.vercel.app/#founder",
          "name": "Speion Founder",
          "jobTitle": "Founder & CEO"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://speion-group.vercel.app/#pune-office",
        "name": "Speion — Global Engineering Hub Pune",
        "telephone": "+91 77588 66318",
        "email": "speiongroup@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Parklane Life Season Plus, Dhanori",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411015",
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
      <TrustBar />
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
