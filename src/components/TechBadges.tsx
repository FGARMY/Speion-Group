import React from "react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiGooglecloud, 
  SiPostgresql, 
  SiDocker, 
  SiTypescript 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function TechBadges() {
  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "" }, // Adapts to theme
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "AWS", icon: FaAws, color: "#232F3E" }, // Dark grey for AWS
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
  ];

  return (
    <div className="w-full overflow-hidden opacity-0 animate-fade-in-up mt-8" style={{ animationDelay: '1.2s' }}>
      <div className="text-center mb-6">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Powered By Industry Standards
        </p>
      </div>
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group py-4">

        {/* Animated Track - Reversed direction from client logos for visual interest */}
        <div className="flex animate-marquee-reverse items-center gap-12 md:gap-24 whitespace-nowrap px-8">
          {[...technologies, ...technologies, ...technologies].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div key={idx} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 gap-3 group/tech cursor-default">
                <Icon 
                  className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 text-slate-400 dark:text-slate-500 group-hover/tech:!text-[var(--hover-color)]"
                  style={{ '--hover-color': tech.color || 'currentColor' } as React.CSSProperties}
                />
                <span className="text-xl md:text-2xl font-display font-semibold text-slate-700 dark:text-slate-300 tracking-tight select-none">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
