"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  
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
    <section id="faq" className="py-16 sm:py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto max-w-3xl">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center tracking-tight">
          Frequently Asked Questions
        </h2>
        
        <div className="flex flex-col border-t border-slate-200 dark:border-slate-800">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            
            return (
              <div key={idx} className="border-b border-slate-200 dark:border-slate-800">
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <h3 className={`font-medium pr-4 transition-colors ${isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'text-black dark:text-white rotate-180' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'max-h-96 pb-6 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
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
