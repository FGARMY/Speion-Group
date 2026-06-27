import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    category: "FINTECH",
    title: "NextGen Banking Platform",
    description: "A digital banking platform built for performance, security, and growth.",
    metrics: [
      { value: "↑ 65%", label: "Growth in Users" },
      { value: "99.99%", label: "System Uptime" }
    ],
    visual: (
      <div className="w-full h-full bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 flex flex-col justify-between border border-slate-100 dark:border-slate-800 relative overflow-hidden">
         <div className="flex items-center gap-2 mb-2">
           <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
             <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
           </div>
           <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
         </div>
         <div className="text-xl sm:text-2xl font-bold dark:text-white mb-4">$3,642,215.00</div>
         <div className="flex-1 relative w-full overflow-hidden rounded-lg mt-auto flex items-end">
           <svg viewBox="0 0 100 40" className="w-full h-24 stroke-indigo-500 fill-indigo-500/20" preserveAspectRatio="none">
             <path d="M0,40 L0,30 C10,20 20,40 30,25 C40,10 50,30 60,15 C70,0 80,20 100,5 L100,40 Z" />
           </svg>
         </div>
      </div>
    )
  },
  {
    category: "HEALTHCARE",
    title: "HealthPlus Platform",
    description: "A comprehensive healthcare platform for patient management and analytics.",
    metrics: [
      { value: "↑ 40%", label: "Operational Efficiency" },
      { value: "↑ 35%", label: "Patient Engagement" }
    ],
    visual: (
      <div className="w-full h-full bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 flex flex-col justify-between border border-slate-100 dark:border-slate-800">
         <div className="space-y-3">
           {[1, 2, 3].map((i) => (
             <div key={i} className="flex items-center gap-3">
               <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700"></div>
               <div className="flex-1">
                 <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded mb-1.5"></div>
                 <div className="h-1.5 w-2/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
               </div>
             </div>
           ))}
         </div>
         <div className="flex items-end gap-1.5 h-16 mt-6 justify-between px-2">
            <div className="w-full bg-indigo-500/40 rounded-t-sm h-[30%]"></div>
            <div className="w-full bg-indigo-500/60 rounded-t-sm h-[70%]"></div>
            <div className="w-full bg-indigo-500/80 rounded-t-sm h-[50%]"></div>
            <div className="w-full bg-indigo-500 rounded-t-sm h-[90%]"></div>
            <div className="w-full bg-indigo-500/70 rounded-t-sm h-[60%]"></div>
            <div className="w-full bg-indigo-500/50 rounded-t-sm h-[40%]"></div>
            <div className="w-full bg-indigo-500/90 rounded-t-sm h-[85%]"></div>
         </div>
      </div>
    )
  },
  {
    category: "E-COMMERCE",
    title: "RetailGo Marketplace",
    description: "A scalable marketplace connecting sellers and customers seamlessly.",
    metrics: [
      { value: "↑ 70%", label: "Sales Growth" },
      { value: "↑ 55%", label: "Customer Retention" }
    ],
    visual: (
      <div className="w-full h-full bg-slate-50 dark:bg-slate-900/50 rounded-xl p-3 grid grid-cols-2 gap-2 border border-slate-100 dark:border-slate-800">
         {[1,2,3,4,5,6].map(i => (
           <div key={i} className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center p-3">
             <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 mb-2"></div>
             <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded mb-1"></div>
             <div className="h-1.5 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
           </div>
         ))}
      </div>
    )
  }
];

export default function CaseStudies() {
  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-slate-950 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-rose-600 dark:text-rose-500 font-bold tracking-wider uppercase text-sm mb-3">
              CASE STUDIES
            </h3>
            <h2 className="text-slate-900 dark:text-white font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Real Results. <br />
              Real Impact.
            </h2>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold hover:text-rose-700 dark:hover:text-rose-400 transition-colors group">
            View all case studies
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-8 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all group">
              
              <div className="flex flex-col flex-1">
                <span className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wider uppercase mb-3">
                  {study.category}
                </span>
                <h4 className="text-slate-900 dark:text-white text-xl sm:text-2xl font-bold mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {study.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto mb-8">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-slate-900 dark:text-white text-xl sm:text-2xl font-bold mb-1">
                        {metric.value}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-semibold hover:text-rose-700 dark:hover:text-rose-400 transition-colors group/link mt-auto">
                  View Case Study
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="h-48 sm:h-56 mt-4 opacity-90 group-hover:opacity-100 transition-opacity">
                {study.visual}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
