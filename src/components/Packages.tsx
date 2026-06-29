import { ShieldCheck, Code, Server, Globe, Zap, Blocks, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import MorphingBlobs from "./MorphingBlobs";

export default function Packages() {
  const packages = [
    {
      id: "01 / EXPORT",
      title: "Export Business Package",
      desc: "Premium Website, Product Catalogue, SEO, WhatsApp Inquiry, Admin Panel, CRM, Email Setup.",
      icon: <Globe size={24} strokeWidth={1.5} />,
      link: "/packages/export-business",
      price: "Starts at $600"
    },
    {
      id: "02 / SAAS",
      title: "SaaS Startup MVP",
      desc: "React/Next.js Frontend, Node.js Backend, User Auth, Stripe Setup, Admin Dashboard.",
      icon: <Server size={24} strokeWidth={1.5} />,
      link: "/packages/saas-startup-mvp",
      price: "Starts at $3,500"
    },
    {
      id: "03 / E-COM",
      title: "E-Commerce & Retail",
      desc: "Custom Next.js Storefront, ERP Lite, Payment Gateways, Abandoned Cart Automations.",
      icon: <Zap size={24} strokeWidth={1.5} />,
      link: "/packages/ecommerce-retail",
      price: "Starts at $1,500"
    },
    {
      id: "04 / HEALTH",
      title: "Healthcare Clinic Portal",
      desc: "Appointment Booking, Patient CRM, Telemedicine Setup, HIPAA Compliant Infrastructure.",
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      link: "/packages/healthcare-clinic",
      price: "Starts at $1,200"
    },
    {
      id: "05 / AGENCY",
      title: "Real Estate & Agency",
      desc: "Property Listings, Lead Gen Funnels, Agent CRM, Map Integrations.",
      icon: <Blocks size={24} strokeWidth={1.5} />,
      link: "/packages/real-estate-agency",
      price: "Starts at $1,000"
    },
    {
      id: "06 / ENTERPRISE",
      title: "Enterprise Transformation",
      desc: "Full Custom ERP/CRM, Cloud Migration, Advanced AI Automations, Dedicated Engineering Team.",
      icon: <Code size={24} strokeWidth={1.5} />,
      link: "/packages/enterprise-transformation",
      price: "Custom Quote"
    }
  ];

  return (
    <section id="packages" className="pt-24 pb-20 px-4 sm:px-6 bg-[#FAFAFA] dark:bg-[#020617] relative overflow-hidden">
      {/* Morphing Blob Background */}
      <MorphingBlobs hueStart={120} hueEnd={180} opacity={0.06} />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-rose-600"></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-500">
                Ready-to-Deploy Products
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              Business Packages
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Skip the guesswork. Choose an all-inclusive technical package designed specifically for your industry&apos;s growth.
            </p>
          </div>
          
          <div className="md:max-w-sm bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-rose-900/5 dark:shadow-none relative group overflow-hidden shrink-0">
             <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-[60px] -z-10 group-hover:bg-rose-500/20 transition-colors duration-500"></div>
             <div className="flex items-center justify-between mb-6">
               <span className="text-[10px] font-bold uppercase tracking-widest text-rose-600 dark:text-rose-500">CTO&apos;s Memorandum</span>
               <Code size={16} className="text-slate-300 dark:text-slate-700" />
             </div>
             <p className="font-serif italic text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
               &quot;We&apos;ve standardized our most successful enterprise architectures into accessible, scalable products. You get Silicon Valley tech at predictable costs.&quot;
             </p>
             <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
               <div className="text-xs font-bold text-slate-900 dark:text-white">Speion Technical Leadership</div>
             </div>
          </div>
        </div>

        {/* Minimalist Icon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((item, idx) => (
            <Link 
              href={item.link}
              key={idx} 
              className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 sm:p-10 hover:shadow-2xl hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden z-10"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-600 dark:text-rose-500 border border-rose-100 dark:border-rose-800/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shrink-0">
                  {item.icon}
                </div>
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest border border-slate-100 dark:border-slate-800 px-3 py-1 rounded-full shrink-0">
                  {item.id}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-12 flex-1">
                {item.desc}
              </p>
              
              <div className="flex items-center text-rose-600 dark:text-rose-500 font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                Explore Package <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
