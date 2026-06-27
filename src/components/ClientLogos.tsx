import Image from "next/image";

export default function ClientLogos() {
  const logos = [
    { name: "Panjara", src: "/client-logos/panjara.png", scale: "scale-[2.0]" },
    { name: "iRA Synergy", src: "/client-logos/irasynergy1.png", scale: "scale-75" },
    { name: "Neurosync", src: "/client-logos/Neruosync.png", scale: "scale-[2.0]" },
    { name: "Ekvira", src: "/client-logos/ekvira.png", scale: "scale-150" },
    { name: "MindMesh", src: "/client-logos/mindmesh.png", scale: "scale-[2.0]" }
  ];

  return (
    <div className="w-full overflow-hidden opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group">

        {/* Gradient fades removed as requested */}

        {/* Animated Track */}
        <div className="flex animate-marquee items-center gap-12 md:gap-20 whitespace-nowrap px-8">
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className={`flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 relative h-12 md:h-16 w-32 md:w-48 ${logo.scale || 'scale-100'}`}>
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain transition-transform duration-300"
                sizes="(max-width: 768px) 128px, 192px"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
