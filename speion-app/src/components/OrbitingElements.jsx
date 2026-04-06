import { useEffect, useRef } from 'react';

/**
 * OrbitingElements — Physical moving shapes, strings, and connectors
 * Creates tangible motion with orbiting dots, drifting lines, and rotating shapes
 */
const OrbitingElements = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouse = (e) => {
      const rect = el.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      el.style.setProperty('--mx', mx);
      el.style.setProperty('--my', my);
    };

    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div ref={containerRef} className="orbiting-elements">
      {/* Orbiting dots — circular path */}
      <div className="orbit-ring orbit-ring-1">
        <div className="orbit-dot" />
      </div>
      <div className="orbit-ring orbit-ring-2">
        <div className="orbit-dot orbit-dot-sm" />
      </div>
      <div className="orbit-ring orbit-ring-3">
        <div className="orbit-dot orbit-dot-lg" />
      </div>

      {/* Drifting lines / strings */}
      <svg className="drift-strings" viewBox="0 0 1440 800" preserveAspectRatio="none">
        <path className="drift-string drift-string-1" d="M-50,200 Q300,180 500,250 T900,200 T1500,230" />
        <path className="drift-string drift-string-2" d="M-50,500 Q200,520 450,470 T850,510 T1500,480" />
        <path className="drift-string drift-string-3" d="M-50,650 Q350,630 600,680 T1000,640 T1500,670" />
      </svg>

      {/* Floating shapes that physically move */}
      <div className="phys-shape phys-cross phys-1" />
      <div className="phys-shape phys-ring phys-2" />
      <div className="phys-shape phys-diamond phys-3" />
      <div className="phys-shape phys-dot-cluster phys-4">
        <span /><span /><span />
      </div>
      <div className="phys-shape phys-bracket phys-5">&lt;/&gt;</div>
      <div className="phys-shape phys-ring phys-6" />
      <div className="phys-shape phys-cross phys-7" />
      <div className="phys-shape phys-diamond phys-8" />
    </div>
  );
};

export default OrbitingElements;
