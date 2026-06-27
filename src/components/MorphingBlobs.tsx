"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface MorphingBlobsProps {
  /** Starting hue in degrees (0-360). Default 240 (blue) */
  hueStart?: number;
  /** Ending hue in degrees (0-360). Default 180 (teal) */
  hueEnd?: number;
  /** Opacity of the blob layer. Default 0.15 */
  opacity?: number;
  /** Extra class names */
  className?: string;
}

export default function MorphingBlobs({
  hueStart = 0,
  hueEnd = 60,
  opacity = 0.12,
  className = "",
}: MorphingBlobsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to hue-rotate degrees
  const hueRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [`${hueStart}deg`, `${hueEnd}deg`]
  );

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* SVG Gooey Filter — makes overlapping blobs merge organically */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <motion.div
        className="absolute inset-0"
        style={{
          filter: "url(#gooey)",
          opacity,
          // @ts-expect-error -- Framer Motion MotionValue works with CSS custom properties
          "--hue": hueRotate,
        }}
      >
        {/* Blob 1 — large, slow drift */}
        <div
          className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full top-[-10%] left-[-5%]"
          style={{
            background: "linear-gradient(135deg, hsl(340, 80%, 55%), hsl(280, 70%, 50%))",
            animation: "morphBlob1 18s ease-in-out infinite alternate, driftBlob1 25s ease-in-out infinite",
            filter: `hue-rotate(var(--hue, 0deg))`,
          }}
        />

        {/* Blob 2 — medium, counter-drift */}
        <div
          className="absolute w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-full bottom-[-5%] right-[-8%]"
          style={{
            background: "linear-gradient(225deg, hsl(260, 75%, 55%), hsl(200, 80%, 50%))",
            animation: "morphBlob2 22s ease-in-out infinite alternate, driftBlob2 30s ease-in-out infinite",
            filter: `hue-rotate(var(--hue, 0deg))`,
          }}
        />

        {/* Blob 3 — small accent, faster morph */}
        <div
          className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full top-[30%] left-[40%]"
          style={{
            background: "linear-gradient(315deg, hsl(310, 70%, 50%), hsl(240, 65%, 55%))",
            animation: "morphBlob3 15s ease-in-out infinite alternate, driftBlob3 20s ease-in-out infinite",
            filter: `hue-rotate(var(--hue, 0deg))`,
          }}
        />
      </motion.div>
    </div>
  );
}
