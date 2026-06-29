import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
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
      
      {/* TechBadges section */}
      <div className="py-12 bg-slate-50 dark:bg-slate-950">
        <TechBadges />
      </div>
      
      <Packages />
      
      {/* Banner Strip */}
      <div className="w-full bg-slate-900 dark:bg-slate-800 text-white py-6 md:py-8 overflow-hidden flex items-center justify-center border-y border-slate-800 dark:border-slate-700 shadow-inner">
        <p className="text-base md:text-xl lg:text-2xl font-display font-bold tracking-[0.2em] uppercase text-center flex items-center gap-4">
          <span className="text-slate-100">Develop It Once</span>
          <span className="text-rose-500">|</span> 
          <span className="text-slate-100">Develop It From The Best</span>
        </p>
      </div>
      
      <Process />

      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
