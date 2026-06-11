import { ArrowRight, Star, Code, Database, Cpu, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-slate-50 dark:bg-slate-950 flex flex-col justify-center overflow-hidden transition-colors duration-500">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      {/* Animated Light Leaks */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse duration-[10000ms]"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Floating Tech Particles */}
      <div className="absolute top-[15%] left-[5%] text-rose-500/20 animate-float pointer-events-none hidden lg:block" style={{ animationDelay: '0s' }}>
        <Code size={48} />
      </div>
      <div className="absolute top-[60%] left-[40%] text-red-500/20 animate-float pointer-events-none hidden lg:block" style={{ animationDelay: '2s' }}>
        <Cpu size={32} />
      </div>
      <div className="absolute top-[20%] right-[15%] text-rose-400/20 animate-float pointer-events-none hidden lg:block" style={{ animationDelay: '4s' }}>
        <Database size={40} />
      </div>
      
      {/* Decorative Crosses */}
      <div className="absolute top-[25%] left-[12%] text-slate-900/10 dark:text-white/5 font-light text-6xl pointer-events-none select-none opacity-50">+</div>
      <div className="absolute bottom-[35%] left-[30%] text-slate-900/5 dark:text-white/5 font-light text-4xl pointer-events-none select-none opacity-30">+</div>

      <div className="container mx-auto max-w-7xl relative z-10 w-full flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-20 h-full min-h-[100dvh]">
          
        {/* Centered Content - Fluid Typography */}
        <div className="w-full relative z-20 flex flex-col gap-6 sm:gap-8 text-center items-center justify-center pt-4 sm:pt-6 lg:pt-0 lg:-mt-20">
          
          <div className="bg-white/50 dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-[10px] sm:text-xs md:text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2 rounded-full inline-flex items-center w-fit shadow-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-rose-500 mr-2 sm:mr-3 animate-pulse ring-4 ring-rose-500/20"></span>
            #1 SOFTWARE ENGINEERING FIRM IN PUNE
            <Sparkles size={12} className="ml-2 text-rose-400 sm:w-3.5 sm:h-3.5" />
          </div>
 
          <div className="flex flex-col gap-4 sm:gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-slate-900 dark:text-white font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-[1.05] tracking-tightest">
              Enterprise-grade <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-400">software</span> engineering.
            </h1>
            
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed font-light mx-auto tracking-wide px-2 sm:px-0">
              We design, build, and deploy robust digital architectures. Partner with us for complex web applications, ERP integrations, and high-performance native mobile apps.
            </p>
          </div>
  
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 mt-4 w-full px-4 sm:px-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Link href="/contact" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-rose-600 border border-rose-500 text-white font-bold hover:bg-rose-500 transition-all shadow-2xl text-base text-center flex items-center justify-center gap-2 group transform active:scale-95">
              Start Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
            </Link>
            <Link href="/services" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-white/10 transition-all text-base text-center hover:shadow-lg">
              Explore Services
            </Link>
          </div>
 
          {/* Optimized Social Proof Badge for all backgrounds */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="flex -space-x-4 overflow-hidden p-0.5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="inline-block h-12 w-12 rounded-full ring-2 ring-rose-500 dark:ring-rose-600 bg-white/20 backdrop-blur-md overflow-hidden flex items-center justify-center relative">
                  <Image 
                    src={`https://i.pravatar.cc/150?u=medical-user-${i}`} 
                    alt={`Client avatar ${i}`} 
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center justify-start gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="text-slate-900 dark:text-white font-bold ml-1 text-sm tracking-tight">4.9/5.0</span>
              </div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] leading-none mt-1.5">Trusted by 50+ Global Clients</p>
            </div>
          </div>

        </div>


      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-50 text-slate-900 dark:text-white animate-bounce pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>

    </section>
  );
}
