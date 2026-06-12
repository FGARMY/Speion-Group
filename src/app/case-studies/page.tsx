import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Case Studies | Speion Software Development",
  description: "Explore our portfolio of scalable web apps, mobile applications, and enterprise software solutions built by Speion.",
};

export default function CaseStudiesPage() {
  const projects = [
    {
      title: "FinTech Mobile Banking App",
      client: "Global Financial Services",
      challenge: "The client's legacy mobile app suffered from high latency, frequent crashes, and couldn't scale beyond 100k users. Security compliance was also a major concern.",
      solution: "We engineered a cloud-native, microservices architecture using Node.js and a highly optimized React Native frontend. Implemented end-to-end encryption and biometric auth.",
      results: "Achieved 99.99% uptime, successfully scaled to handle 1M+ daily active users without performance degradation, and reduced transaction latency by 60%.",
      tech: ["React Native", "Node.js", "AWS", "PostgreSQL", "Redis"],
    },
    {
      title: "Enterprise ERP System Modernization",
      client: "Manufacturing Corp",
      challenge: "A fragmented, 15-year-old on-premise ERP system was causing operational bottlenecks, data silos, and massive maintenance overhead across 12 global facilities.",
      solution: "Architected a custom, unified cloud ERP platform using Next.js for a rapid, edge-cached frontend and Python/FastAPI for high-throughput data processing.",
      results: "Unified 12 facilities under one data model, eliminated $120k/yr in legacy licensing fees, and improved data query speeds by 400%.",
      tech: ["Next.js", "Python", "Google Cloud", "MongoDB", "Docker"],
    },
    {
      title: "Healthcare SaaS Telemedicine Platform",
      client: "MedTech Innovations",
      challenge: "Required a scalable, highly secure platform capable of handling real-time HD video streaming between doctors and patients while strictly adhering to HIPAA compliance.",
      solution: "Developed a distributed system leveraging WebRTC for peer-to-peer video, Go for concurrent connection handling, and advanced AES-256 encryption for patient records.",
      results: "Platform successfully facilitated 50,000+ secure tele-consultations in its first quarter, with zero security breaches and crystal-clear low-latency video.",
      tech: ["React", "Go", "WebRTC", "AWS HIPAA Cloud", "Kubernetes"],
    }
  ];

  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Work</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Deep dives into how we've architected scalable, mission-critical systems for global enterprises.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-xl">
                <div className="mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 block uppercase tracking-widest">{project.client}</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  <div>
                    <h4 className="text-slate-900 dark:text-slate-100 font-bold mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center text-xs">1</span>
                      The Challenge
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-slate-100 font-bold mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs">2</span>
                      The Architecture
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-slate-100 font-bold mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xs">3</span>
                      The Results
                    </h4>
                    <p className="text-slate-900 dark:text-white font-medium leading-relaxed text-sm">{project.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
