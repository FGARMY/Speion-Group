import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechBadges from "@/components/TechBadges";
import Process from "@/components/Process";

import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import {
  jsonLdGraph,
  organizationSchema,
  webSiteSchema,
  puneOfficeSchema,
  nashikOfficeSchema,
  founderSchema,
} from "@/lib/schemas";

export default function Home() {
  const jsonLd = jsonLdGraph(
    organizationSchema(),
    webSiteSchema(),
    puneOfficeSchema(),
    nashikOfficeSchema(),
    founderSchema(),
  );

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Services />
      
      {/* TechBadges section moved below Services */}
      <div className="py-12 bg-slate-50 dark:bg-slate-950">
        <TechBadges />
      </div>
      
      <Process />

      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
