"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
    <section id="faq" className="py-24 px-4 sm:px-6 bg-white dark:bg-[#020617] relative transition-colors duration-500">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 block"></span>
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            Find answers to common questions about our development process, tech stack, and pricing.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
                  isOpen 
                    ? 'bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-500/30 shadow-[0_10px_30px_rgba(59,130,246,0.06)] scale-[1.01]' 
                    : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left px-6 md:px-8 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  <h3 className={`font-bold text-lg md:text-xl transition-colors duration-500 ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isOpen 
                      ? 'bg-blue-600 text-white rotate-180' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen 
                      ? 'max-h-96 pb-8 opacity-100 translate-y-0' 
                      : 'max-h-0 opacity-0 -translate-y-4'
                  }`}
                >
                  <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-base md:text-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
