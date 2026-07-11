import { Activity, ShieldCheck, ChevronRight, Code, Smartphone, Database, Server, Monitor, Bot, ArrowRight, Zap, FolderOpen, Blocks, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import MorphingBlobs from "./MorphingBlobs";

export default function Services() {
  const services = [
    {
      id: "01 / WEB",
      title: "Web Development",
      desc: "Engineered for 95+ Lighthouse Scores and <2s load times. We build highly scalable React and Next.js applications.",
      icon: <Monitor size={24} strokeWidth={1.5} />,
      image: "/services/web.png",
      expert: "Frontend Engineering Team",
      link: "/services/web-development",
      price: "Starts ₹25k+"
    },
    {
      id: "02 / APP",
      title: "Mobile App Development",
      desc: "Native iOS and Android architectures compiling to maximum FPS for buttery-smooth user experiences.",
      icon: <Smartphone size={24} strokeWidth={1.5} />,
      image: "/services/app.png",
      expert: "Mobile Engineering Team",
      link: "/services/mobile-app-development",
      price: "Starts ₹40k+"
    },
    {
      id: "03 / SFT",
      title: "Custom Software Development",
      desc: "Enterprise-grade logic engineered to handle heavy data loads and complex workflows with 99.9% uptime.",
      icon: <Code size={24} strokeWidth={1.5} />,
      image: "/services/software.png",
      expert: "Architecture Team",
      link: "/services/custom-software-development",
      price: "Starts ₹75k+"
    },
    {
      id: "04 / ERP",
      title: "ERP Solutions",
      desc: "Unify your entire supply chain, HR, and operations into one seamless dashboard with real-time analytics.",
      icon: <Server size={24} strokeWidth={1.5} />,
      image: "/services/erp.png",
      expert: "Enterprise Solutions Team",
      link: "/services/erp-development",
      price: "Custom Quote"
    },

    {
      id: "05 / UX",
      title: "UI/UX Design",
      desc: "Pixel-perfect, conversion-optimized interfaces designed in Figma and tailored for seamless user journeys.",
      icon: <Blocks size={24} strokeWidth={1.5} />,
      image: "/services/uiux.png",
      expert: "Design Team",
      link: "/services/ui-ux-design",
      price: "Starts $10+"
    },
    {
      id: "06 / AI",
      title: "AI Automations",
      desc: "Autonomous LLM agents and workflow automations that eliminate manual tasks and reduce operational overhead.",
      icon: <Bot size={24} strokeWidth={1.5} />,
      image: "/services/ai.png",
      expert: "AI & Automation Team",
      link: "/services/ai-automations",
      price: "Starts $25+"
    },
    {
      id: "07 / CRM",
      title: "CRM Development",
      desc: "Custom lead tracking and pipeline management software designed precisely for your sales funnel.",
      icon: <Database size={24} strokeWidth={1.5} />,
      image: "/services/crm.png",
      expert: "Data Engineering Team",
      link: "/services/crm-development",
      price: "Custom Quote"
    },
    {
      id: "08 / SMM",
      title: "Social Media Management",
      desc: "Data-driven organic growth, viral content strategies, and precision ad campaigns to dominate your market.",
      icon: <Share2 size={24} strokeWidth={1.5} />,
      image: "/services/social-media.png",
      expert: "Growth Marketing Team",
      link: "/services/social-media-management",
      price: "Starts $500/mo"
    }
  ];

  return (
    <section id="services" className="pt-24 pb-20 px-4 sm:px-6 bg-[#FAFAFA] dark:bg-[#020617] relative overflow-hidden">
      {/* Morphing Blob Background */}
      <MorphingBlobs hueStart={220} hueEnd={280} opacity={0.06} />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-rose-600"></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-500">
                Capabilities & Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              Engineering Excellence
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              A rigorous overview of our software architecture, development, and design capabilities.
            </p>
          </div>
          
          <div className="md:max-w-sm bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-rose-900/5 dark:shadow-none relative group overflow-hidden shrink-0">
             <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-[60px] -z-10 group-hover:bg-rose-500/20 transition-colors duration-500"></div>
             <div className="flex items-center justify-between mb-6">
               <span className="text-[10px] font-bold uppercase tracking-widest text-rose-600 dark:text-rose-500">CTO&apos;s Memorandum</span>
               <Code size={16} className="text-slate-300 dark:text-slate-700" />
             </div>
             <p className="font-serif italic text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
               &quot;Software architecture is underpinned by meticulous observation and scalable design. Every codebase tells a narrative of innovation that we are committed to perfecting.&quot;
             </p>
             <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
               <div className="text-xs font-bold text-slate-900 dark:text-white">Speion Technical Leadership</div>
             </div>
          </div>
        </div>

        {/* Minimalist Icon Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {services.map((item, idx) => (
            <Link 
              href={item.link}
              key={idx} 
              className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-6 md:p-10 hover:shadow-2xl hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/50 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 relative overflow-hidden z-10"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-xl sm:blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-0 mb-4 sm:mb-8">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6 bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-600 dark:text-rose-500 border border-rose-100 dark:border-rose-800/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shrink-0">
                  {item.icon}
                </div>
                <div className="text-[8px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest border border-slate-100 dark:border-slate-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shrink-0 w-fit">
                  {item.id}
                </div>
              </div>

              <h3 className="text-base sm:text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white mb-2 sm:mb-4 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-[11px] sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6 sm:mb-12 flex-1 line-clamp-3 sm:line-clamp-none">
                {item.desc}
              </p>
              
              <div className="flex items-center text-rose-600 dark:text-rose-500 font-bold text-[9px] sm:text-xs uppercase tracking-widest group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">
                Explore <ArrowRight size={14} className="ml-1 sm:ml-2 sm:w-4 sm:h-4 w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
