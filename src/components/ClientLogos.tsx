export default function ClientLogos() {
  const logos = [
    "EnterpriseCo", "GlobalTech", "FinServe", "Quantum", "Nexus", "AcmeCorp", "StarkIndustries", "WayneEnterprises"
  ];

  return (
    <section className="py-12 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl mb-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Trusted by Innovative Teams Worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group">

        {/* Gradient fades for edges */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white dark:from-[#020617] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white dark:from-[#020617] to-transparent z-10"></div>

        {/* Animated Track */}
        <div className="flex animate-marquee items-center gap-16 md:gap-32 whitespace-nowrap px-8">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
              <span className="text-xl md:text-2xl font-display font-bold text-slate-800 dark:text-slate-200 tracking-tighter select-none">
                {logo}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
