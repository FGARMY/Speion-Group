"use client";

import { Download, Mail } from "lucide-react";

export default function LeadMagnet() {
  return (
    <div className="mt-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[80px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 dark:bg-rose-900/30 px-3 py-1 rounded-full mb-4">
            <Download size={14} />
            Free Download
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">
            The 2026 Enterprise Software Pricing Guide
          </h3>
          <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">
            Stop guessing your budget. Get our comprehensive 40-page technical breakdown of how much it actually costs to build and scale custom ERP, CRM, and SaaS platforms in 2026.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all placeholder:text-slate-400" 
                placeholder="Enter your corporate email" 
              />
            </div>
            <button 
              type="submit" 
              className="bg-slate-900 dark:bg-rose-600 hover:bg-slate-800 dark:hover:bg-rose-500 text-white font-bold py-3 px-6 rounded-xl transition-colors whitespace-nowrap"
            >
              Get the Guide
            </button>
          </form>
          <p className="text-xs text-slate-400 mt-4 text-center md:text-left">
            By downloading, you agree to our privacy policy. No spam, ever.
          </p>
        </div>
        
        {/* Book / Report Visual */}
        <div className="hidden md:flex w-48 h-64 bg-gradient-to-br from-slate-800 to-slate-950 rounded-r-xl rounded-l-sm border-l-8 border-rose-500 shadow-2xl items-center justify-center relative overflow-hidden shrink-0 transform -rotate-2 hover:rotate-0 transition-transform">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
          <div className="text-center px-4 relative z-10">
            <h4 className="text-white font-display font-bold text-lg leading-tight mb-2">2026 Software<br/>Pricing Guide</h4>
            <div className="w-12 h-1 bg-rose-500 mx-auto"></div>
            <p className="text-slate-400 text-[10px] uppercase tracking-widest mt-4">Speion Group</p>
          </div>
        </div>
      </div>
    </div>
  );
}
