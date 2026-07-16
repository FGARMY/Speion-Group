import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import CTA from "@/components/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies | Speion Software Development",
  description: "Explore our portfolio of scalable web apps, mobile applications, and enterprise software solutions built by Speion.",
  pathname: "/case-studies",
});

export default function CaseStudiesPage() {
  const projects = [
    {
      title: "Ira Synergy Corporate Platform",
      client: "Ira Synergy",
      slug: "ira-synergy-corporate-website",
      challenge: "The client needed to securely showcase proprietary manufacturing hardware designs and solutions across 6 complex verticals to government evaluators without exposing IP to competitors.",
      solution: "Engineered a lightning-fast SSR Next.js architecture coupled with a custom inline security layer (dynamic watermarking, DevTools guard, keyboard event blocking).",
      results: "Delivered the complete full-stack platform in 3 days, securing all proprietary IP while establishing a premium, enterprise-grade brand presence.",
      tech: ["Next.js", "React", "Node.js", "Content Protection", "Tailwind CSS"],
    },
    {
      title: "FinTech Mobile Banking App",
      client: "Global Financial Services",
      challenge: "The client&apos;s legacy mobile app suffered from high latency, frequent crashes, and couldn't scale beyond 100k users. Security compliance was also a major concern.",
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
              Deep dives into how we&apos;ve architected scalable, mission-critical systems for global enterprises.
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
                {'slug' in project && project.slug && (
                  <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <Link href={`/case-studies/${project.slug}`} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-colors">
                      Read Full Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  </div>
                )}
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
