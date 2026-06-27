import { Activity, ShieldCheck, ChevronRight, Code, Smartphone, Database, Layout, Server, Monitor, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Services() {
  const services = [
    {
      id: "01 / WEB",
      title: "Web Development",
      desc: "High-performance web applications built with React, Next.js, and Node.js. Optimized for speed and Core Web Vitals.",
      icon: <Monitor size={24} strokeWidth={1.5} />,
      image: "/services/web.png",
      expert: "Frontend Engineering Team",
      link: "/services/web-development"
    },
    {
      id: "02 / APP",
      title: "Mobile App Development",
      desc: "High-performance mobile applications compiled to native code for iOS and Android.",
      icon: <Smartphone size={24} strokeWidth={1.5} />,
      image: "/services/app.png",
      expert: "Mobile Engineering Team",
      link: "/services/mobile-app-development"
    },
    {
      id: "03 / SFT",
      title: "Custom Software Development",
      desc: "Architected software solutions built to handle complex business logic and heavy data loads without performance degradation.",
      icon: <Code size={24} strokeWidth={1.5} />,
      image: "/services/software.png",
      expert: "Architecture Team",
      link: "/services/custom-software-development"
    },
    {
      id: "04 / ERP",
      title: "ERP Solutions",
      desc: "Comprehensive Enterprise Resource Planning systems to integrate your operations, supply chain, and HR.",
      icon: <Server size={24} strokeWidth={1.5} />,
      image: "/services/erp.png",
      expert: "Enterprise Solutions Team",
      link: "/services/erp-development"
    },
    {
      id: "05 / UIX",
      title: "UI/UX Design",
      desc: "Stunning, user-centric interfaces and wireframes that ensure high conversion rates and intuitive navigation.",
      icon: <Layout size={24} strokeWidth={1.5} />,
      image: "/services/uiux.png",
      expert: "Design Team",
      link: "/services/ui-ux-design"
    },
    {
      id: "06 / AI",
      title: "AI Automations",
      desc: "Streamline your workflows and operations with custom AI-powered automation solutions to drive efficiency and scale.",
      icon: <Bot size={24} strokeWidth={1.5} />,
      image: "/services/ai.png",
      expert: "AI & Automation Team",
      link: "/services/ai-automations"
    },
    {
      id: "07 / CRM",
      title: "CRM Development",
      desc: "Custom Customer Relationship Management software to track leads, manage sales pipelines, and boost conversions.",
      icon: <Database size={24} strokeWidth={1.5} />,
      image: "/services/crm.png",
      expert: "Data Engineering Team",
      link: "/services/crm-development"
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

        {/* Balanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <Link 
              href={item.link}
              key={idx} 
              className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Preview Header */}
              <div className="h-56 w-full relative overflow-hidden bg-slate-100 dark:bg-slate-950">
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
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-1 relative z-10 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-rose-600 dark:text-rose-500 p-2 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8 flex-1">
                  {item.desc}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
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
          ))}
        </div>
        
        {/* Accreditation Footer */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 flex justify-center">
          <div className="flex flex-wrap justify-center gap-12 text-slate-500 dark:text-slate-500">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-emerald-500/50" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Enterprise Grade Security</span>
            </div>
            <div className="flex items-center gap-3">
              <Activity size={18} className="text-rose-500/50" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">High-Performance Scalability</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
