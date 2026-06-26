export default function ClientLogos() {
  const logos = [
    "Panjara Agro", "NeroSync", "iRA Synergy", "SkillsParkConsultancy", "EkviraExportHouse", "MindMesh"
  ];

  return (
    <div className="w-full overflow-hidden opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group">

        {/* Gradient fades removed as requested */}

        {/* Animated Track */}
        <div className="flex animate-marquee items-center gap-16 md:gap-32 whitespace-nowrap px-8">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
              <span className="text-2xl md:text-4xl font-display font-bold text-slate-800 dark:text-slate-200 tracking-tighter select-none">
                {logo}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
