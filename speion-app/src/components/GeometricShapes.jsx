import { useEffect, useRef } from 'react';

/**
 * GeometricShapes — Floating SVG shapes with slow drift and rotation
 * Renders circles, squares, hexagons with parallax depth
 */
const shapes = [
  { type: 'circle', size: 40, x: '10%', y: '20%', delay: 0, speed: 12, rotation: 0 },
  { type: 'square', size: 24, x: '85%', y: '15%', delay: 1, speed: 18, rotation: 45 },
  { type: 'circle', size: 16, x: '70%', y: '70%', delay: 2, speed: 14, rotation: 0 },
  { type: 'square', size: 32, x: '20%', y: '75%', delay: 0.5, speed: 20, rotation: 15 },
  { type: 'hexagon', size: 28, x: '90%', y: '50%', delay: 1.5, speed: 16, rotation: 30 },
  { type: 'circle', size: 12, x: '50%', y: '10%', delay: 0.8, speed: 22, rotation: 0 },
  { type: 'square', size: 18, x: '30%', y: '55%', delay: 2.2, speed: 15, rotation: 60 },
  { type: 'hexagon', size: 20, x: '60%', y: '85%', delay: 1.2, speed: 17, rotation: 90 },
];

const HexPath = ({ size }) => {
  const r = size / 2;
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return `${r + r * Math.cos(angle)},${r + r * Math.sin(angle)}`;
  }).join(' ');
  return <polygon points={points} />;
};

const GeometricShapes = ({ className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const mx = (e.clientX - rect.left - cx) / cx; // -1 to 1
      const my = (e.clientY - rect.top - cy) / cy;

      const els = containerRef.current.querySelectorAll('.geo-shape');
      els.forEach((el, i) => {
        const depth = (i % 3 + 1) * 3; // 3-9px parallax
        const tx = mx * depth;
        const ty = my * depth;
        el.style.setProperty('--parallax-x', `${tx}px`);
        el.style.setProperty('--parallax-y', `${ty}px`);
      });
    };

    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div ref={containerRef} className={`geometric-shapes ${className}`}>
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="geo-shape"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            animationDuration: `${shape.speed}s`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          <svg
            viewBox={`0 0 ${shape.size} ${shape.size}`}
            width={shape.size}
            height={shape.size}
            className="geo-svg"
            style={{
              animationDuration: `${shape.speed * 3}s`,
              transform: `rotate(${shape.rotation}deg)`,
            }}
          >
            {shape.type === 'circle' && (
              <circle cx={shape.size / 2} cy={shape.size / 2} r={shape.size / 2 - 1} />
            )}
            {shape.type === 'square' && (
              <rect x="1" y="1" width={shape.size - 2} height={shape.size - 2} rx="3" />
            )}
            {shape.type === 'hexagon' && <HexPath size={shape.size} />}
          </svg>
        </div>
      ))}
    </div>
  );
};

export default GeometricShapes;
