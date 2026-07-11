import Image from "next/image";

export default function ClientLogos() {
  const logos = [
    { name: "Panjara", src: "/client-logos/panjara.png" },
    { name: "iRA Synergy", src: "/client-logos/irasynergy1.png" },
    { name: "Neurosync", src: "/client-logos/Neruosync.png" },
    { name: "Ekvira", src: "/client-logos/ekvira.png" },
    { name: "MindMesh", src: "/client-logos/mindmesh.png" }
  ];

  return (
    <div className="w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group py-4 md:py-6">

        {/* Animated Track */}
        <div className="flex animate-marquee items-center gap-16 md:gap-24 lg:gap-32 whitespace-nowrap px-8">
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 relative shrink-0 h-8 sm:h-10 md:h-12 lg:h-14">
              <Image
                src={logo.src}
                alt={logo.name}
                width={256}
                height={128}
                className="w-auto h-full object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
