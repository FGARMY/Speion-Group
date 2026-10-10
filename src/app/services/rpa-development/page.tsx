import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Cog, Bot, FileText, CheckCircle2, ShieldCheck, ArrowRight, Zap, RefreshCw } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Robotic Process Automation (RPA) Services | Workflow Bots | Speion",
  description: "Speion engineers custom RPA bots and workflow automations that eliminate repetitive data entry, reconcile invoices, and connect legacy software.",
  pathname: "/services/rpa-development",
});

export default function RpaDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-purple-500/30">
      <ServicePageSchema
        serviceName="Robotic Process Automation (RPA)"
        serviceDescription="Speion engineers custom RPA bots and workflow automations that eliminate repetitive data entry, reconcile invoices, and connect legacy software."
        pathname="/services/rpa-development"
        faqs={[
          { question: "What business processes can RPA automate?", answer: "RPA eliminates repetitive human workflows: invoice processing, bank statement reconciliation, multi-system data entry (CRM to ERP), payroll calculations, insurance claims verification, and supplier purchase order generation." },
          { question: "Can RPA connect with software that doesn't have an API?", answer: "Yes. Robotic Process Automation interacts with software through the user interface just like a human operator — navigating desktop screens, copying fields, clicking buttons, and validating outputs without requiring complex API integrations." },
          { question: "How does Speion prevent RPA bots from breaking when UI changes occur?", answer: "We build resilient, hybrid intelligent bots combining computer vision, DOM selectors, and automated retry logic with fallback notifications to ensure operations run 24/7 without silent failures." },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
            <Cog size={14} className="text-purple-600 dark:text-purple-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Process Automation</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto">
            Eliminate Repetitive Work with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
              Intelligent RPA
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Free your team from hours of manual data entry, PDF parsing, and multi-app copying. Speion designs autonomous RPA software bots that execute mission-critical operational tasks 10x faster with 100% precision.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 hover:scale-105 transition-all shadow-lg shadow-purple-600/25">
              Automate Your Workflows
            </Link>
            <a 
              href="https://wa.me/917758866318?text=Hi%20Speion%2C%20I%20want%20to%20automate%20repetitive%20processes%20with%20RPA." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-semibold hover:border-slate-400 transition-all"
            >
              Request Free Automation Audit
            </a>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="relative w-full h-[40vh] md:h-[55vh] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50 group">
            <Image 
              src="/services/ai.png" 
              alt="RPA Process Automation Architecture" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-purple-400">Continuous Execution</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-2">Zero-Error Execution Across Desktop, Web, & Cloud Systems</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              High-ROI Automation Workflows
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Replace costly operational bottlenecks with resilient software robotics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Invoice OCR & Reconciliation",
                desc: "Extract invoice line items from PDFs and emails, validate against POs, and post records directly to ERPs with zero human intervention.",
                icon: <FileText size={24} className="text-purple-600" />,
              },
              {
                title: "Legacy Software Bridge",
                desc: "Automate desktop Windows apps, legacy databases, and terminal screens that lack modern REST APIs.",
                icon: <Cog size={24} className="text-indigo-600" />,
              },
              {
                title: "Cross-System Synchronization",
                desc: "Ensure client data, inventory levels, and order states remain perfectly synchronized across CRMs, ERPs, and spreadsheets.",
                icon: <RefreshCw size={24} className="text-blue-600" />,
              },
              {
                title: "Automated Compliance Audits",
                desc: "Schedule automated system checks, compliance logs, and security report generations that run flawlessly every night.",
                icon: <ShieldCheck size={24} className="text-emerald-600" />,
              },
              {
                title: "Multi-Source Web Scraping",
                desc: "Gather competitor pricing, market intelligence, and government tender notices automatically into structured databases.",
                icon: <Zap size={24} className="text-amber-600" />,
              },
              {
                title: "AI-Augmented Decision Bots",
                desc: "Combine traditional RPA with LLM classification to categorize support tickets, route approvals, and generate tailored replies.",
                icon: <Bot size={24} className="text-purple-600" />,
              },
            ].map((cap, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:-translate-y-1.5 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm">{cap.desc}</p>
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
