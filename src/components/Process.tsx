"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Search, PenTool, Code2, Rocket, TrendingUp, HeadphonesIcon } from 'lucide-react';

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "We understand your business, goals, and challenges.",
    icon: <Search className="w-6 h-6 text-rose-500" />
  },
  {
    num: "02",
    title: "Design",
    desc: "We create user-centric designs and robust architecture.",
    icon: <PenTool className="w-6 h-6 text-rose-500" />
  },
  {
    num: "03",
    title: "Develop",
    desc: "We build with clean code following best practices.",
    icon: <Code2 className="w-6 h-6 text-rose-500" />
  },
  {
    num: "04",
    title: "Deploy",
    desc: "We deploy securely with zero-downtime transition.",
    icon: <Rocket className="w-6 h-6 text-rose-500" />
  },
  {
    num: "05",
    title: "Scale",
    desc: "We monitor, optimize, and help you scale confidently.",
    icon: <TrendingUp className="w-6 h-6 text-rose-500" />
  },
  {
    num: "06",
    title: "Support",
    desc: "We provide continuous support and drive long-term success.",
    icon: <HeadphonesIcon className="w-6 h-6 text-rose-500" />
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the container for the animated lines
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 70%"]
  });

  return (
    <section className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900 relative z-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          className="max-w-2xl mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-rose-600 dark:text-rose-500 font-bold tracking-wider uppercase text-sm mb-3">
            OUR PROCESS
          </h3>
          <h2 className="text-slate-900 dark:text-white font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            A Proven Process <br />
            That Delivers Success
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative" ref={containerRef}>
          {/* Horizontal dotted background line (visible on lg+) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-[2px] border-t-2 border-dashed border-rose-200 dark:border-rose-900/50 z-0"></div>
          {/* Animated Horizontal Progress Line */}
          <motion.div 
            className="hidden lg:block absolute top-[31px] left-0 h-[4px] bg-rose-500 z-0 origin-left rounded-full shadow-[0_0_15px_rgba(225,29,72,0.5)]"
            style={{ scaleX: scrollYProgress, width: '100%' }}
          />

          {/* Vertical dotted background line (visible on < lg) */}
          <div className="lg:hidden absolute top-0 left-8 sm:left-10 w-[2px] h-full border-l-2 border-dashed border-rose-200 dark:border-rose-900/50 z-0"></div>
          {/* Animated Vertical Progress Line */}
          <motion.div 
            className="lg:hidden absolute top-0 left-[31px] sm:left-[39px] w-[4px] bg-rose-500 z-0 origin-top rounded-full shadow-[0_0_15px_rgba(225,29,72,0.5)]"
            style={{ scaleY: scrollYProgress, height: '100%' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="flex lg:flex-col items-start gap-6 lg:gap-4 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 rounded-full bg-rose-50 dark:bg-rose-500/10 border-4 border-white dark:border-slate-900 flex items-center justify-center relative shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col mt-1 lg:mt-6">
                  <span className="text-slate-400 dark:text-slate-500 font-display font-bold text-lg sm:text-xl mb-1 group-hover:text-rose-500 transition-colors duration-300">
                    {step.num}
                  </span>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg sm:text-xl mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed pr-4 lg:pr-0">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
