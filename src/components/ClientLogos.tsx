export default function ClientLogos() {
  const logos = [
    "EnterpriseCo", "GlobalTech", "FinServe", "Quantum", "Nexus", "AcmeCorp", "StarkIndustries", "WayneEnterprises"
  ];

  return (
    <div className="w-full overflow-hidden opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group">

        {/* Gradient fades for edges */}
        <div className="absolute top-0 left-0 w-12 sm:w-24 h-full bg-gradient-to-r from-white dark:from-[#020617] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-12 sm:w-24 h-full bg-gradient-to-l from-white dark:from-[#020617] to-transparent z-10"></div>

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
    </div>
  );
}
