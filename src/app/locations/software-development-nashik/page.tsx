import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { MapPin, Building2, TrendingUp, Users } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Company in Nashik | Top IT Agency | Speion",
  description: "Speion is the leading software development company in Nashik. We build custom software, web applications, and mobile apps for local businesses and startups.",
  pathname: "/locations/software-development-nashik",
});

export default function NashikLocationPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <LocalBusinessSchema
        addressLocality="Nashik"
        postalCode="422001"
        url="https://speion.com/locations/software-development-nashik"
        description={metadata.description ?? "Speion is a premium software development company in Nashik."}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            <MapPin size={14} className="text-teal-300" />
            Nashik Operations
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
            Top Software Development Company in <span className="text-teal-300">Nashik</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Empowering Nashik's growing IT ecosystem. We partner with local manufacturers, wineries, and startups to build custom digital solutions that scale globally.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Local Expertise", desc: "We understand the unique challenges faced by Nashik-based manufacturing and agriculture businesses.", icon: <Building2 size={24} /> },
              { title: "On-Site Consultations", desc: "Based right here in Maharashtra, our team can visit your facility for in-depth technical audits.", icon: <Users size={24} /> },
              { title: "Digital Transformation", desc: "We help traditional businesses modernize their operations with custom ERP and CRM solutions.", icon: <TrendingUp size={24} /> },
            ].map((feat, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl group hover:-translate-y-2 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{feat.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
