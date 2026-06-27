import { ArrowRight, Star, Code, Database, Cpu, Sparkles, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClientLogos from "./ClientLogos";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-slate-50 dark:bg-slate-950 flex flex-col justify-center overflow-hidden transition-colors duration-500">

      {/* Background Graphics - Minimalist Cyber Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Wide Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,#000_20%,transparent_100%)]"></div>
        
        {/* Ambient Top Glow highlighting the grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-rose-500/10 dark:bg-rose-500/20 rounded-[100%] blur-[80px]"></div>
      </div>
      <div className="container mx-auto max-w-7xl relative z-10 w-full flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-20 h-full min-h-[100dvh]">

        {/* Centered Content - Fluid Typography */}
        <div className="w-full relative z-20 flex flex-col gap-6 sm:gap-8 text-center items-center justify-center pt-4 sm:pt-6 lg:pt-0 lg:-mt-20">

          <div className="bg-white/50 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-[10px] sm:text-xs md:text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2 rounded-full inline-flex items-center w-fit shadow-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-rose-500 mr-2 sm:mr-3 animate-pulse ring-4 ring-rose-500/20"></span>
            GLOBAL ENTERPRISE SOFTWARE ENGINEERING
            <Sparkles size={12} className="ml-2 text-rose-400 sm:w-3.5 sm:h-3.5" />
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-slate-900 dark:text-white font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-[1.05] tracking-tightest">
              Top Software & Web <br className="hidden sm:block" />
              Development in <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-400">Pune & Nashik</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed font-light mx-auto tracking-wide px-2 sm:px-0">
              Trusted technology partner for scalable web applications, native mobile apps, and ERP integrations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 mt-4 w-full px-2 sm:px-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Link href="/contact" className="w-full sm:w-auto flex justify-center">
              <HoverBorderGradient
                containerClassName="rounded-full w-full sm:w-auto"
                as="div"
                className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-rose-600 text-white font-bold transition-all text-sm sm:text-base text-center flex items-center justify-center gap-2 group"
              >
                Book Free Consultation Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
              </HoverBorderGradient>
            </Link>
            <Link href="/services" className="w-full sm:w-auto flex justify-center mt-2 sm:mt-0">
              <HoverBorderGradient
                containerClassName="rounded-full w-full sm:w-auto"
                as="div"
                className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white font-bold transition-all text-sm sm:text-base text-center"
              >
                Explore Services
              </HoverBorderGradient>
            </Link>
          </div>



        </div>

      </div>


      
      {/* Client Logos - Edge to Edge at Bottom of Hero */}
      <div className="absolute bottom-16 lg:bottom-24 left-0 w-full pb-4 pt-12 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10">
        <ClientLogos />
      </div>

    </section>
  );
}
