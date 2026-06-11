import { CalendarPlus, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section id="appointment" className="py-24 px-4 sm:px-6 relative bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-rose-50 via-rose-100 to-white dark:from-slate-900 dark:via-rose-950 dark:to-slate-950 border border-rose-200 dark:border-none rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-20 text-center shadow-[0_30px_100px_rgba(225,29,72,0.1)] dark:shadow-[0_30px_100px_rgba(225,29,72,0.25)] relative overflow-hidden group opacity-0 animate-fade-in-up transition-all duration-500">
          
          {/* Decorative faint background shapes */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/20 dark:bg-white/5 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-rose-500/20 dark:bg-rose-500/5 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-rose-600/10 dark:bg-white/20 backdrop-blur-md text-rose-700 dark:text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6 sm:mb-8 border border-rose-600/20 dark:border-none">
              <CalendarPlus size={14} className="text-rose-600 dark:text-rose-200" />
              Free Architecture Audit
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 tracking-tightest leading-tight sm:leading-[1.05]">
              Stop Managing Debt <br className="hidden md:block" /> — <span className="text-rose-600 dark:text-rose-200">Start Engineering ROI.</span>
            </h2>
            <p className="text-slate-700 dark:text-rose-50/90 text-base sm:text-lg md:text-2xl font-light mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
              Secure an elite engineering pod and modernize your architecture today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/contact" className="w-full sm:w-auto bg-rose-600 dark:bg-slate-100 text-white dark:text-rose-900 px-10 py-5 rounded-full font-bold shadow-xl hover:bg-rose-700 dark:hover:bg-white transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 text-lg">
                <CalendarPlus size={22} />
                Book Consultation
              </a>
              <a href="tel:+918237077659" className="w-full sm:w-auto bg-white/50 dark:bg-white/10 backdrop-blur-md border border-rose-200 dark:border-white/20 text-slate-900 dark:text-white px-10 py-5 rounded-full font-bold hover:bg-white/80 dark:hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 text-lg">
                <PhoneCall size={22} />
                Quick Call
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
