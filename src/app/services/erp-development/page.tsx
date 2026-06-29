import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Server, BarChart3, Database, Shield, Globe2, Briefcase } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "ERP Development Services | Custom Enterprise Solutions | Speion",
  description: "Speion builds comprehensive Enterprise Resource Planning (ERP) systems to unify your operations, supply chain, and HR into one powerful dashboard.",
  pathname: "/services/erp-development",
});

export default function ErpDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-cyan-500/30">
      <ServicePageSchema
        serviceName="ERP Development"
        serviceDescription="Speion builds comprehensive Enterprise Resource Planning (ERP) systems to unify your operations, supply chain, and HR into one powerful dashboard."
        pathname="/services/erp-development"
        faqs={[
          { question: "What is a custom ERP system and why do I need one?", answer: "A custom ERP (Enterprise Resource Planning) system unifies your business operations — inventory, HR, accounting, supply chain, manufacturing — into one centralized digital platform. You need a custom ERP when off-the-shelf solutions like SAP or Oracle are too expensive, too complex, or don’t fit your specific business processes." },
          { question: "How long does it take to build a custom ERP?", answer: "A complete custom ERP migration typically takes 6-12 months depending on the complexity of your legacy database and the number of modules required. Speion uses the Strangler Fig Pattern to migrate module by module, ensuring zero operational downtime during the transition." },
          { question: "How much does a custom ERP cost compared to SAP or Oracle?", answer: "Custom ERPs built by Speion eliminate recurring per-seat licensing fees that can cost $100-$300/user/month with SAP or Oracle. Our clients typically save $120,000+ per year in licensing alone. The one-time development cost is structured with milestone-based payments and transparent pricing." },
        ]}
      />
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Server size={14} className="text-cyan-600 dark:text-cyan-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Enterprise Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Unify Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-400">
                Operations
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              Bespoke Enterprise Resource Planning (ERP) software that breaks down data silos. Manage inventory, HR, finance, and supply chain from a single, infinitely scalable platform. Our custom solutions are tailored to your exact workflows, eliminating the bloat of off-the-shelf software and reducing long-term licensing costs while giving you full ownership of your data and IP.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Product Image Showcase */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50 group">
            <Image 
              src="/services/erp.png" 
              alt="ERP Dashboard Analytics" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Bento Grid */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-cyan-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Briefcase className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Centralized Command Center</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Say goodbye to scattered spreadsheets and disconnected apps. We build tailored dashboards that give executives real-time oversight of every department—finance, operations, HR, and sales—all in one place. Make data-driven decisions instantly with custom KPI tracking.
              </p>
              <ul className="space-y-2">
                {['Real-time Analytics', 'Role-based Access Control', 'Automated Reporting'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-cyan-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Capability 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <BarChart3 className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Supply Chain & Inventory</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Track assets from procurement to delivery with precision. Implement automated low-stock alerts, predictive demand forecasting, and vendor management portals to streamline your entire supply chain.
              </p>
            </div>
            
            {/* Capability 3 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Database className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Legacy Migration</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Seamless transition from outdated legacy systems (like older SAP or Oracle instances) to a modern, custom-built, cloud-native ERP. We ensure absolute data integrity and zero operational downtime during the switch.
              </p>
            </div>
            
            {/* Capability 4 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <Globe2 className="w-12 h-12 text-cyan-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Cross-Department Automations</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl relative z-10">
                When a sale closes in the CRM, the ERP automatically updates inventory, generates an invoice in finance, and alerts logistics for shipping. We eliminate manual data entry entirely.
              </p>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-tl-[100%] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Data Stack</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light">Secure, high-throughput technologies for enterprise operations.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Java / Spring Boot', 'Node.js', 'PostgreSQL', 'ElasticSearch', 'RabbitMQ', 'Kafka', 'Redis', 'AWS / Azure'].map((tech, i) => (
              <div key={i} className="py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-cyan-500/50 hover:text-cyan-600 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-[2px] bg-cyan-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center">Implementation Process</h2>
            <div className="w-12 h-[2px] bg-cyan-600"></div>
          </div>
          
          <div className="space-y-12">
            {[
              { num: "01", title: "Business Audit", desc: "We embed ourselves in your operations to understand exactly how each department functions and where the inefficiencies lie." },
              { num: "02", title: "Blueprint & Architecture", desc: "Designing a modular ERP architecture that can grow with your business, focusing on security and compliance." },
              { num: "03", title: "Phased Development", desc: "We build and roll out the ERP in phases (e.g., HR first, then Inventory) to minimize disruption to your daily operations." },
              { num: "04", title: "Data Migration", desc: "Securely transferring terabytes of historical data from your old systems into the new structured database." },
              { num: "05", title: "Onboarding & Support", desc: "Comprehensive training for your staff and ongoing 24/7 technical support to ensure smooth adoption." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-900 border border-slate-800 group-hover:border-cyan-500 group-hover:bg-cyan-600 flex items-center justify-center font-display font-bold text-xl transition-all duration-300">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{step.desc}</p>
                </div>
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
