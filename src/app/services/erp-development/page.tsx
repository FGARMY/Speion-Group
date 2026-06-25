import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Server, Settings, Database } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "ERP Solutions & Development | Speion Enterprise Software",
  description: "Custom ERP development in Pune. Integrate your supply chain, HR, finance, and operations into a single scalable platform.",
  pathname: "/services/erp-development",
});

export default function ERPPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            <Server size={14} className="text-teal-300" />
            Enterprise Resource Planning
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
            Unified <span className="text-teal-300">Business Operations</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Break down data silos. We build comprehensive ERP systems that integrate your finance, human resources, supply chain, and manufacturing operations into a single source of truth.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Supply Chain Management", desc: "Track inventory in real-time, optimize logistics, and forecast demand automatically.", icon: <Database size={24} /> },
              { title: "HR & Payroll Integration", desc: "Automate timesheets, manage employee data, and streamline complex payroll calculations.", icon: <Settings size={24} /> },
              { title: "Real-time Analytics", desc: "Custom dashboards that give executives a top-down view of company performance instantly.", icon: <Server size={24} /> },
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

      {/* Value Prop */}
      <section className="py-20 px-4 sm:px-6 bg-slate-100 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Benefits of a Custom ERP</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Eliminate Data Silos",
              "Reduce Operational Costs",
              "Automate Reporting",
              "Improve Data Security",
              "Enhance Collaboration",
              "Scalable with Business Growth"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-teal-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
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
