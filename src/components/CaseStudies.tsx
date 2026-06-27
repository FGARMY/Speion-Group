"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white dark:bg-slate-950 z-20">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
        
        {/* Header (Stays sticky) */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl mb-12 sm:mb-16 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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
        </div>

        {/* Scroll Hijacked Horizontal Motion Container */}
        <motion.div style={{ x }} className="flex gap-6 sm:gap-8 px-4 sm:px-6 lg:px-12 ml-0 lg:ml-[calc((100vw-80rem)/2)]">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="w-[85vw] sm:w-[60vw] lg:w-[40vw] flex-shrink-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col gap-8 shadow-sm hover:shadow-2xl hover:shadow-rose-900/10 hover:border-rose-200 dark:hover:border-rose-900/50 transition-all duration-500 group relative overflow-hidden">
              
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="flex flex-col flex-1 relative z-10">
                <span className="text-rose-600 dark:text-rose-500 text-xs font-bold tracking-wider uppercase mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                  {study.category}
                </span>
                <h4 className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-display font-bold mb-4 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {study.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 flex-1">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-auto mb-10 border-t border-slate-100 dark:border-slate-800 pt-8">
                  {study.metrics.map((metric, i) => (
                     <div key={i} className="flex flex-col">
                       <span className="text-slate-900 dark:text-white text-2xl sm:text-3xl font-bold mb-1 tracking-tight">
                         {metric.value}
                       </span>
                       <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-widest">
                         {metric.label}
                       </span>
                     </div>
                  ))}
                </div>

                <Link href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-500 font-bold uppercase text-xs tracking-widest hover:text-rose-700 dark:hover:text-rose-400 transition-colors group/link mt-auto">
                  Explore Case Study
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="h-56 sm:h-64 mt-4 opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-[1.02] relative z-10">
                {study.visual}
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
