import Image from "next/image";

export default function ClientLogos() {
  const logos = [
    { name: "Panjara", src: "/client-logos/panjara.png", width: "w-40 md:w-64" },
    { name: "iRA Synergy", src: "/client-logos/irasynergy1.png", width: "w-28 md:w-40" },
    { name: "Neurosync", src: "/client-logos/Neruosync.png", width: "w-40 md:w-64" },
    { name: "Ekvira", src: "/client-logos/ekvira.png", width: "w-32 md:w-48" },
    { name: "MindMesh", src: "/client-logos/mindmesh.png", width: "w-40 md:w-64" }
  ];

  return (
    <div className="w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group py-2 md:py-4">

        {/* Animated Track */}
        <div className="flex animate-marquee items-center gap-16 md:gap-24 whitespace-nowrap px-8">
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className={`flex items-center justify-center opacity-50 md:hover:opacity-100 transition-opacity duration-300 md:grayscale md:hover:grayscale-0 relative shrink-0 ${logo.width}`}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={256}
                height={128}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
