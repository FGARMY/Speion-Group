import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Code2, ArrowRight, CheckCircle2, TrendingUp, Users, Target, Database, Network, ShieldCheck, Zap } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPostgresql, SiDocker, SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Enterprise Transformation Package | Speion",
  description: "Complete technical package for Enterprises including Custom ERP/CRM, Cloud Migration, and AI Automations.",
  pathname: "/packages/enterprise-transformation",
});

export default function EnterpriseTransformationPackage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Code2 size={14} className="text-indigo-600 dark:text-indigo-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Business Package</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Enterprise <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-500 dark:to-purple-400">
                Transformation
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              Full-scale digital modernization for legacy businesses. We replace fragmented, outdated systems with a unified, cloud-native architecture and custom AI workflows.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience / Business Value */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Eliminate <span className="text-indigo-500">Inefficiency</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Legacy systems slow down operations and leak revenue through manual data entry and fragmented tools. This package consolidates your entire operation into a single source of truth.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0 mt-1">
                    <Zap size={16} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">AI Automation</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Automate repetitive tasks like data entry, report generation, and customer support.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 mt-1">
                    <Database size={16} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Data Consolidation</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Migrate off Excel spreadsheets into a secure, centralized cloud database.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Ideal For:</h3>
               <ul className="space-y-4 relative z-10">
                 {['Established Manufacturing Firms', 'Large-Scale Supply Chain Operators', 'Traditional Financial Services', 'Corporate Healthcare Networks', 'Multi-location Retail Chains'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                     <Target size={18} className="text-indigo-500 shrink-0" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features Bento Grid */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">The Enterprise Suite</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">A comprehensive technical overhaul for your organization.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Network className="w-10 h-10 text-indigo-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Custom ERP / CRM System</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Off-the-shelf software rarely fits perfectly. We build a bespoke ERP/CRM tailored exactly to your internal workflows, ensuring 100% operational alignment.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Custom Business Logic', 'Multi-department Dashboards', 'Granular Role-Based Access', 'Real-time Analytics & Reporting'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-indigo-500"/> {f}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Code2 className="w-10 h-10 text-indigo-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Legacy Modernization</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Safe, zero-downtime migration from outdated on-premise systems to scalable cloud infrastructure.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-10 h-10 text-indigo-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Security</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">End-to-end encryption, SOC2 compliant architecture, and regular penetration testing.</p>
            </div>

            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Dedicated Engineering Team</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">You don't just get software; you get a partner.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-purple-500" size={20}/> Dedicated Project Manager & Lead Architect</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-purple-500" size={20}/> 24/7 Priority Support SLA</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-purple-500" size={20}/> Comprehensive Staff Training & Onboarding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6 bg-slate-100 dark:bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Cloud Architecture</h2>
            <p className="text-slate-600 dark:text-slate-400">Scalable, resilient, and highly available infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { name: 'Next.js', icon: SiNextdotjs, color: '' },
              { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
              { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
              { name: 'AWS', icon: FaAws, color: '#232F3E' },
              { name: 'Docker', icon: SiDocker, color: '#2496ED' },
              { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' }
            ].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="group py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center gap-3 font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-default">
                  <Icon 
                    className="w-6 h-6 text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                    style={{ '--hover-color': tech.color || 'currentColor' } as React.CSSProperties}
                  />
                  <span className="hidden md:inline">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Transformation Roadmap</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">A phased approach to modernize your enterprise with zero disruption.</p>
          </div>
          
          <div className="space-y-8">
            {[
              { week: "Phase 1 (Month 1)", title: "Discovery & Blueprinting", desc: "Deep dive into your current operations, bottleneck identification, and architectural blueprinting." },
              { week: "Phase 2 (Months 2-3)", title: "Core System Development", desc: "Building the custom ERP/CRM foundation, databases, and primary user interfaces." },
              { week: "Phase 3 (Month 4)", title: "Data Migration & Integrations", desc: "Securely transferring legacy data and connecting third-party APIs or external tools." },
              { week: "Phase 4 (Month 5)", title: "Beta Testing & Training", desc: "Rolling out the system to a pilot team, gathering feedback, and conducting company-wide training." },
              { week: "Phase 5 (Month 6)", title: "Full Launch & SLA Support", desc: "Organization-wide launch followed by continuous monitoring and 24/7 technical support." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 shrink-0 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm text-center">
                  {step.week}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
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
