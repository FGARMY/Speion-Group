import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "FinTech Software Development | Speion",
  description: "Enterprise FinTech software engineering in Pune & Nashik. We build highly secure payment gateways, neo-banking apps, and blockchain solutions.",
};

export default function FintechIndustryPage() {
  const features = [
    "PCI-DSS Compliant Payment Gateways",
    "Neo-banking & Wallet Applications",
    "Algorithmic Trading Dashboards",
    "Blockchain & Smart Contract Audits",
    "P2P Lending Platforms",
    "High-Frequency Transaction Engines"
  ];

  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
              FinTech & Banking
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">Financial Trust</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light mb-8 leading-relaxed">
              We build scalable, ultra-secure financial applications capable of handling millions of concurrent transactions with zero downtime and absolute data integrity.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10"></div>
             <div className="p-8 text-center relative z-10">
               <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                 <span className="text-4xl text-indigo-600">🏦</span>
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Absolute Consistency</h3>
               <p className="text-slate-500">ACID compliant architectures for enterprise finance</p>
             </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
