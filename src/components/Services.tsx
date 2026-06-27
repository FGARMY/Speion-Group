import { Activity, ShieldCheck, ChevronRight, Code, Smartphone, Database, Server, Monitor, Bot, ArrowRight, Zap, FolderOpen, Blocks } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

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
      id: "06 / AI",
      title: "AI Automations",
      desc: "Autonomous LLM agents and workflow automations that eliminate manual tasks and reduce operational overhead.",
      icon: <Bot size={24} strokeWidth={1.5} />,
      image: "/services/ai.png",
      expert: "AI & Automation Team",
      link: "/services/ai-automations",
      price: "Starts ₹40k+"
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
    }
  ];

  return (
    <section id="services" className="pt-24 pb-20 px-4 sm:px-6 bg-[#FAFAFA] dark:bg-[#020617] relative">
      <div className="container mx-auto max-w-7xl">
        
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
               <span className="text-[10px] font-bold uppercase tracking-widest text-rose-600 dark:text-rose-500">CTO's Memorandum</span>
               <Code size={16} className="text-slate-300 dark:text-slate-700" />
             </div>
             <p className="font-serif italic text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
               "Software architecture is underpinned by meticulous observation and scalable design. Every codebase tells a narrative of innovation that we are committed to perfecting."
             </p>
             <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
               <div className="text-xs font-bold text-slate-900 dark:text-white">Speion Technical Leadership</div>
             </div>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
          {services.map((item, idx) => {
            // Determine column span for bento layout
            let spanClass = "";
            if (idx === 0) spanClass = "md:col-span-2 lg:col-span-2";      // Web (Wide)
            else if (idx === 1) spanClass = "md:col-span-1 lg:col-span-1"; // App (Square)
            else if (idx === 2) spanClass = "md:col-span-1 lg:col-span-1"; // Software (Square)
            else if (idx === 3) spanClass = "md:col-span-2 lg:col-span-2"; // ERP (Wide)
            else if (idx === 4) spanClass = "md:col-span-2 lg:col-span-2"; // AI (Wide)
            else if (idx === 5) spanClass = "md:col-span-1 lg:col-span-1"; // CRM (Square)
            
            return (
            <Link 
              href={item.link}
              key={idx} 
              className={`group flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/50 transition-all duration-500 hover:-translate-y-2 ${spanClass}`}
            >
              {/* Image Preview Header */}
              <div className="h-40 sm:h-48 w-full relative overflow-hidden bg-slate-100 dark:bg-slate-950">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* ID Badge */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-sm z-10">
                  <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">
                    {item.id}
                  </span>
                </div>

                {/* Pricing Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/50 shadow-sm z-10 flex items-center gap-1">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 relative z-10 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-rose-600 dark:text-rose-500 p-2 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-4 flex-1">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mb-1">
                      Lead Division
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {item.expert}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-rose-600 group-hover:border-rose-600 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
        
        {/* Accreditation / Metrics Footer */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 flex justify-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <Zap size={20} className="text-rose-500" />
              <span className="text-sm font-bold uppercase tracking-wider">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-3">
              <FolderOpen size={20} className="text-rose-500" />
              <span className="text-sm font-bold uppercase tracking-wider">20+ Completed Projects</span>
            </div>
            <div className="flex items-center gap-3">
              <Blocks size={20} className="text-rose-500" />
              <span className="text-sm font-bold uppercase tracking-wider">10+ Technologies</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
