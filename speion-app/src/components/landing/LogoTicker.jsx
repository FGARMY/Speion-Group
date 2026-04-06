import { motion } from 'framer-motion';

const logos = [
  { name: "APEX", sub: "PRECISION", style: "brand-ekvira" },
  { name: "INDIGO", sub: "HERITAGE", style: "brand-neurosync" },
  { name: "ORBIT", sub: "LOGISTICS", style: "brand-panjara" },
  { name: "PANJARA ARGO", sub: "COMMERCE", style: "brand-panjara" },
  { name: "EKVIRA", sub: "EXPORT HOUSE", style: "brand-ekvira" },
  { name: "NEUROSYNC", sub: "QUANTUM AI", style: "brand-neurosync" },
  { name: "SWARM", sub: "AI SYSTEMS", style: "brand-swarm" },
  { name: "RAVAGER", sub: "HOSTING", style: "brand-ravager" },
  { name: "PARKGATE", sub: "PARKING AI", style: "brand-parkgate" },
  { name: "GYAANCHAND", sub: "E-LEARNING", style: "brand-gyaanchand" }
];

const TickerRow = ({ items, duration, reverse = false }) => (
  <motion.div
    className="ticker-track"
    animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    {[...items, ...items].map((logo, i) => (
      <div key={i} className={`logo-item ${logo.style}`}>
        <div className="logo-brand-wrap">
          <span className="logo-main">{logo.name}</span>
          {logo.sub && <span className="logo-sub">{logo.sub}</span>}
        </div>
        <div className="logo-glow"></div>
      </div>
    ))}
  </motion.div>
);

const LogoTicker = () => {
  // Split logos for variety across rows
  const group1 = [...logos].sort(() => Math.random() - 0.5);
  const group2 = [...logos].sort(() => Math.random() - 0.5);

  return (
    <div className="logo-ticker-section">
      <div className="ticker-container multi-row">
        <TickerRow items={group1} duration={35} />
        <TickerRow items={group2} duration={25} reverse={true} />
        {/* Gradient masking for smooth fade edges */}
        <div className="ticker-mask mask-left"></div>
        <div className="ticker-mask mask-right"></div>
      </div>
    </div >
  );
};

export default LogoTicker;
