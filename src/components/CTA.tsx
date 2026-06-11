import { CalendarPlus, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section id="appointment" className="py-24 px-4 sm:px-6 relative bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-teal-500 dark:from-blue-900 dark:via-blue-800 dark:to-teal-900 rounded-[3rem] p-10 md:p-20 text-center shadow-[0_30px_100px_rgba(59,130,246,0.25)] relative overflow-hidden group opacity-0 animate-fade-in-up transition-all duration-500">
          
          {/* Decorative faint background shapes */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/20 dark:bg-white/5 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-400/20 dark:bg-teal-400/5 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-8">
              <CalendarPlus size={14} className="text-teal-100" />
              Free Architecture Audit
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tightest leading-[1.05]">
              Accelerate Your Business <br className="hidden md:block" /> — <span className="text-teal-200">Scale Now.</span>
            </h2>
            <p className="text-blue-50/90 text-lg md:text-2xl font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Expert software engineering and business automation is just a click away. Partner with the top 1%.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/contact" className="w-full sm:w-auto bg-white dark:bg-slate-100 text-blue-900 px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-slate-50 dark:hover:bg-white transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 text-lg">
                <CalendarPlus size={22} />
                Book Consultation
              </a>
              <a href="tel:+918237077659" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 text-lg">
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
