"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircleQuestion, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);
  
  const faqs = [
    {
      q: "What tech stack does Speion use for development?",
      a: "We are framework-agnostic but specialize in modern, scalable technologies. For web, we use React, Next.js, and Node.js. For mobile, we leverage React Native and Flutter. Our backend systems are typically built on Python, Go, or Node, hosted on AWS or Google Cloud."
    },
    {
      q: "How long does it take to build a custom software application?",
      a: "The timeline depends on the complexity of the project. A basic MVP can take 4-8 weeks, while comprehensive enterprise software or complex SaaS platforms can take 3-6 months. We provide detailed agile sprint timelines before starting any project."
    },
    {
      q: "Do you provide post-launch support and maintenance?",
      a: "Yes, absolutely. We offer comprehensive Service Level Agreements (SLAs) for post-launch maintenance, bug fixes, server scaling, and continuous feature updates to ensure your software remains cutting-edge."
    },
    {
      q: "Can you take over an existing, partially built project?",
      a: "Yes, we frequently rescue and scale existing projects. Our architecture team will first conduct a thorough codebase audit to assess technical debt and security vulnerabilities before proposing a roadmap."
    },
    {
      q: "Do I own the source code after the project is completed?",
      a: "100%. Once the final payment is cleared, all intellectual property, source code, and deployment assets are fully transferred to your organization."
    }
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden z-10 transition-colors duration-500">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-rose-400/10 dark:bg-rose-500/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 dark:opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Sticky Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-rose-100/50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
              <MessageCircleQuestion size={16} className="text-rose-500" />
              FAQ
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-500">Questions?</span><br />
              We Have Answers.
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8">
              Find detailed answers to common questions about our development process, tech stack, and engagement models.
            </p>

            <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0">
                  <HelpCircle size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Still need help?</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    Can't find the answer you're looking for? Please chat to our friendly team.
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold hover:text-rose-700 dark:hover:text-rose-300 transition-colors">
                    Contact our team &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              const formattedNum = (idx + 1).toString().padStart(2, '0');
              
              return (
                <div 
                  key={idx} 
                  className={`group relative overflow-hidden rounded-[2rem] transition-all duration-500 ${
                    isOpen 
                      ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-rose-200 dark:border-rose-500/30 shadow-[0_15px_40px_rgba(225,29,72,0.08)] scale-[1.01]' 
                      : 'bg-white/40 dark:bg-slate-900/20 backdrop-blur-sm border-slate-200 dark:border-slate-800 hover:bg-white/60 dark:hover:bg-slate-900/40'
                  } border`}
                >
                  {/* Subtle active gradient glow */}
                  {isOpen && (
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-indigo-500/5 dark:from-rose-500/10 dark:to-indigo-500/10 pointer-events-none"></div>
                  )}

                  <button 
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full text-left px-6 sm:px-8 py-6 flex items-start gap-4 sm:gap-6 focus:outline-none relative z-10"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-sm sm:text-base font-bold font-display mt-1 transition-colors duration-500 ${isOpen ? 'text-rose-500' : 'text-slate-400 dark:text-slate-500'}`}>
                      {formattedNum}
                    </span>
                    
                    <h3 className={`font-bold text-lg sm:text-xl md:text-2xl flex-1 pr-4 transition-colors duration-500 ${isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                      {faq.q}
                    </h3>
                    
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border ${
                      isOpen 
                        ? 'bg-rose-500 border-rose-500 text-white rotate-180 shadow-md shadow-rose-500/20' 
                        : 'bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 group-hover:border-rose-300 dark:group-hover:border-rose-500/50'
                    }`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`px-6 sm:px-8 overflow-hidden transition-all duration-500 ease-in-out relative z-10 ${
                      isOpen 
                        ? 'max-h-96 pb-8 opacity-100 translate-y-0' 
                        : 'max-h-0 opacity-0 -translate-y-4'
                    }`}
                  >
                    <div className="pl-0 sm:pl-[2.75rem]">
                      <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-base sm:text-lg">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
