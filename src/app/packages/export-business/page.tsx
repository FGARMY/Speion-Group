import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Export Business Package | Speion",
  description: "Complete technical package for Export Businesses including Premium Website, Product Catalogue, SEO, and WhatsApp Integrations.",
  pathname: "/packages/export-business",
});

export default function ExportBusinessPackage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Globe size={14} className="text-rose-600 dark:text-rose-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Business Package</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
              Export Business <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500 dark:from-rose-500 dark:to-orange-400">
                Package
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mb-12">
              Everything you need to digitize your export business, attract global clients, and manage inquiries seamlessly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Purchase Package - Starts at $600
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">What's Included</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <ul className="space-y-4">
                {['Premium Corporate Website', 'Digital Product Catalogue', 'International SEO Optimization', 'WhatsApp Business Integration', 'Admin Panel to manage products', 'Basic CRM to track leads', 'Professional Email Setup'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={24} className="text-rose-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </main>
  );
}
