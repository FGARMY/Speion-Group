import { useEffect, useRef } from 'react';

/**
 * GlobalMap — SVG world map with animated connection lines
 * Minimal, dark-themed global presence visualization
 */

const CITIES = [
  { name: 'Mumbai', x: 680, y: 280, primary: true },
  { name: 'Dubai', x: 620, y: 250 },
  { name: 'Singapore', x: 760, y: 320 },
  { name: 'London', x: 490, y: 170 },
  { name: 'New York', x: 260, y: 200 },
  { name: 'Tokyo', x: 850, y: 210 },
  { name: 'Sydney', x: 860, y: 400 },
  { name: 'São Paulo', x: 320, y: 370 },
  { name: 'Nairobi', x: 590, y: 320 },
];

const CONNECTIONS = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 3], [2, 5], [3, 4], [4, 7],
  [0, 8], [5, 6], [1, 8],
];

const GlobalMap = () => {
  const svgRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let time = 0;
    const particles = CONNECTIONS.map(() => ({
      progress: Math.random(),
      speed: 0.001 + Math.random() * 0.002,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));

    const animate = () => {
      time++;
      const particleEls = svg.querySelectorAll('.map-particle');
      const pulseEls = svg.querySelectorAll('.city-pulse');

      particles.forEach((p, i) => {
        p.progress += p.speed * p.direction;
        if (p.progress > 1) { p.progress = 0; }
        if (p.progress < 0) { p.progress = 1; }

        const conn = CONNECTIONS[i];
        const from = CITIES[conn[0]];
        const to = CITIES[conn[1]];
        const x = from.x + (to.x - from.x) * p.progress;
        const y = from.y + (to.y - from.y) * p.progress;

        if (particleEls[i]) {
          particleEls[i].setAttribute('cx', x);
          particleEls[i].setAttribute('cy', y);
          const opacity = Math.sin(p.progress * Math.PI) * 0.8;
          particleEls[i].setAttribute('opacity', opacity);
        }
      });

      // Pulse cities
      pulseEls.forEach((el, i) => {
        const scale = 1 + Math.sin(time * 0.03 + i * 0.7) * 0.4;
        const opacity = 0.15 + Math.sin(time * 0.03 + i * 0.7) * 0.1;
        el.setAttribute('r', 8 * scale);
        el.setAttribute('opacity', opacity);
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1000 500"
      className="global-map-svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Simplified world map outline */}
      <path
        className="map-landmass"
        d="
          M220,140 Q240,120 280,125 L320,130 Q340,125 360,135 L380,140 Q390,130 410,128 L440,132 Q460,128 480,135 L500,140
          Q510,135 520,140 L540,145 Q560,140 580,148 L600,152 Q610,145 620,150 L640,155
          Q660,148 680,155 L700,160 Q720,155 740,162 L760,168 Q780,160 800,165 L820,170
          Q840,165 860,172 L880,178 Q890,170 900,175

          M240,180 Q260,175 280,182 L300,188 Q310,195 300,205 L290,215 Q280,225 270,230
          L260,235 Q250,245 240,250 L235,260 Q230,270 225,275 L220,265 Q215,250 220,235
          L225,220 Q228,205 230,195 L235,185 Z

          M320,340 Q340,330 350,340 L360,355 Q370,365 365,380 L355,395 Q345,405 335,400
          L325,390 Q315,375 310,360 L315,350 Z

          M470,155 Q490,150 510,158 L530,165 Q540,175 535,190 L525,210 Q520,225 510,240
          L505,250 Q500,260 490,265 L480,260 Q475,248 478,235 L482,220 Q485,205 483,195
          L478,180 Q475,168 470,155 Z

          M560,160 Q580,155 600,162 L630,170 Q660,175 690,180 L720,188 Q740,195 755,210
          L765,225 Q770,240 768,255 L760,270 Q755,280 745,290 L730,300 Q720,308 708,305
          L695,298 Q680,290 670,280 L660,270 Q650,260 645,248 L640,235 Q635,225 638,215
          L645,200 Q650,188 640,180 L630,175 Q620,170 615,178 L610,190 Q605,200 600,210
          L595,220 Q590,225 582,220 L575,210 Q568,198 565,185 L562,172 Z

          M750,195 Q770,188 790,195 L810,205 Q830,215 845,230 L855,245 Q860,260 855,275
          L845,288 Q835,298 820,300 L805,298 Q790,295 780,285 L770,272 Q762,258 758,242
          L755,225 Q752,210 750,195 Z

          M830,365 Q850,355 870,362 L890,375 Q905,390 900,410 L888,425 Q875,438 858,435
          L842,425 Q830,412 825,395 L822,380 Z
        "
      />

      {/* Connection lines */}
      {CONNECTIONS.map(([from, to], i) => (
        <line
          key={`conn-${i}`}
          x1={CITIES[from].x}
          y1={CITIES[from].y}
          x2={CITIES[to].x}
          y2={CITIES[to].y}
          className="map-connection"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}

      {/* Traveling particles */}
      {CONNECTIONS.map((_, i) => (
        <circle
          key={`particle-${i}`}
          className="map-particle"
          r="2"
          opacity="0"
        />
      ))}

      {/* City nodes */}
      {CITIES.map((city, i) => (
        <g key={`city-${i}`}>
          <circle
            className="city-pulse"
            cx={city.x}
            cy={city.y}
            r="8"
            opacity="0.15"
          />
          <circle
            className={`city-node ${city.primary ? 'city-primary' : ''}`}
            cx={city.x}
            cy={city.y}
            r={city.primary ? 5 : 3}
          />
          <text
            className="city-label"
            x={city.x}
            y={city.y - 14}
            textAnchor="middle"
          >
            {city.name}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default GlobalMap;
