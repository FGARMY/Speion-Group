import { Activity, ShieldCheck, ChevronRight, Code, Smartphone, Database, Layout, Server, Monitor } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "01 / WEB",
      title: "Web Development",
      desc: "High-performance web applications built with React, Next.js, and Node.js. Optimized for speed and Core Web Vitals.",
      icon: <Monitor size={40} strokeWidth={1} />,
      accent: "text-slate-950",
      expert: "Frontend Engineering Team",
      tag: "Web Apps",
      className: "lg:col-span-2 lg:row-span-1",
      delay: "0.1s",
      link: "/services/web-development"
    },
    {
      id: "02 / APP",
      title: "Mobile App Development",
      desc: "High-performance mobile applications compiled to native code for iOS and Android.",
      icon: <Smartphone size={40} strokeWidth={1} />,
      accent: "text-slate-950",
      expert: "Mobile Engineering Team",
      tag: "iOS & Android",
      className: "lg:col-span-1 lg:row-span-2",
      delay: "0.2s",
      link: "/services/mobile-app-development",
      extra: (
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Tech Stack</span>
          </div>
          <p className="font-serif italic text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            "We compile to native C++ and Objective-C using React Native and Flutter for maximum FPS."
          </p>
        </div>
      )
    },
    {
      id: "03 / SFT",
      title: "Custom Software Development",
      desc: "Architected software solutions built to handle complex business logic and heavy data loads without performance degradation.",
      icon: <Code size={40} strokeWidth={1} />,
      accent: "text-slate-950",
      expert: "Architecture Team",
      tag: "Custom Code",
      className: "lg:col-span-1 lg:row-span-1",
      delay: "0.3s",
      link: "/services/custom-software-development"
    },
    {
      id: "04 / ERP",
      title: "ERP Solutions",
      desc: "Comprehensive Enterprise Resource Planning systems to integrate your operations, supply chain, and HR.",
      icon: <Server size={40} strokeWidth={1} />,
      accent: "text-blue-950",
      expert: "Enterprise Solutions Team",
      tag: "Business Automation",
      className: "lg:col-span-1 lg:row-span-1",
      delay: "0.4s",
      link: "/services/erp-development"
    },
    {
      id: "05 / CRM",
      title: "CRM Development",
      desc: "Custom Customer Relationship Management software to track leads, manage sales pipelines, and boost conversions.",
      icon: <Database size={40} strokeWidth={1} />,
      accent: "text-blue-950",
      expert: "Data Engineering Team",
      tag: "Sales Optimization",
      className: "lg:col-span-1 lg:row-span-1",
      delay: "0.5s",
      link: "/services/crm-development"
    },
    {
      id: "06 / UIX",
      title: "UI/UX Design",
      desc: "Stunning, user-centric interfaces and wireframes that ensure high conversion rates and intuitive navigation.",
      icon: <Layout size={40} strokeWidth={1} />,
      accent: "text-blue-950",
      expert: "Design Team",
      tag: "User Experience",
      className: "lg:col-span-2 lg:row-span-1 flex-row items-center gap-12",
      delay: "0.6s",
      link: "/services/ui-ux-design"
    }
  ];

  return (
    <section id="services" className="py-40 px-4 sm:px-6 bg-[#fafafa] dark:bg-[#020617] relative overflow-hidden grain-texture transition-colors duration-500">
      
      {/* Background - Discrete Registry Grid */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#e11d48 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header - Architecture Style */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-32 gap-16 opacity-0 animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-slate-900 dark:bg-rose-400"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-900/40 dark:text-rose-400/60">Capabilities & Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-slate-950 dark:text-slate-100 leading-[0.95] tracking-tight mb-8">
              Engineering <br /> Excellence
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
              <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-light max-w-md leading-relaxed">
                A rigorous overview of our software architecture, development, and design capabilities.
              </p>
            </div>
          </div>
          
          <div className="lg:w-[400px] relative">
            <div className="speion-border bg-white dark:bg-slate-900/50 dark:backdrop-blur-xl p-8 speion-shadow rounded-sm relative dark:border-slate-800">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">CTO's Memorandum</span>
                <Code size={16} className="text-slate-200 dark:text-slate-700" />
              </div>
              <p className="font-serif italic text-slate-800 dark:text-slate-300 leading-relaxed text-base mb-6">
                "Software architecture is underpinned by meticulous observation and scalable design. Every codebase tells a narrative of innovation that we are committed to perfecting."
              </p>
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-1">Authenticated By</div>
                <div className="text-sm font-bold text-slate-950 dark:text-rose-400">Speion Technical Leadership</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid - "Architecture File" Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 dark:bg-slate-800 speion-border overflow-hidden rounded-sm shadow-2xl shadow-slate-950/5 relative dark:border-slate-800">
          {services.map((item, idx) => (
            <Link 
              href={item.link}
              key={idx} 
              className={`group relative overflow-hidden bg-white dark:bg-slate-900 p-10 transition-all duration-700 opacity-0 animate-fade-in-up flex flex-col hover:z-10 ${item.className}`}
              style={{ animationDelay: item.delay }}
            >
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-sm opacity-0 animate-fade-in-up" style={{ animationDelay: `calc(${item.delay} + 0.2s)` }}>
                    {item.id}
                  </span>
                  <div className="text-slate-300 dark:text-slate-700 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-all duration-500 w-10 h-10 opacity-0 animate-scale-in group-hover:scale-110" style={{ animationDelay: `calc(${item.delay} + 0.3s)` }}>
                    {item.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-slate-950 dark:text-slate-100 mb-6 leading-[1.1] pr-8 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-500 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed mb-8 max-w-sm group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">{item.desc}</p>
                  {item.extra && item.extra}
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase font-bold text-slate-300 dark:text-slate-700 tracking-[0.2em] mb-2 group-hover:text-red-600 transition-colors">Lead Division</span>
                    <span className="text-xs font-serif italic text-slate-900 dark:text-slate-200">{item.expert}</span>
                  </div>
                  <div className="w-10 h-10 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-700 group-hover:bg-slate-950 dark:group-hover:bg-slate-800 group-hover:text-white dark:group-hover:text-rose-400 group-hover:border-slate-950 dark:group-hover:border-slate-700 transition-all duration-500 rounded-full">
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Accreditation Footer */}
        <div className="mt-32 flex flex-col items-center justify-center gap-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="h-[1px] w-24 bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex flex-wrap justify-center gap-12 text-slate-300 dark:text-slate-700">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-teal-500/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] dark:text-slate-600">Enterprise Grade Security</span>
            </div>
            <div className="flex items-center gap-3">
              <Activity size={18} className="text-slate-200 dark:text-slate-800" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] dark:text-slate-600">High-Performance Scalability</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
