import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Code2, Cpu, Network, Layout, Shield, Server } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Custom Software Development Company in Pune | Speion",
  description: "Speion architects and develops scalable custom software, SaaS platforms, and enterprise solutions for global businesses using React, Node, and cloud infrastructure.",
  pathname: "/services/custom-software-development",
});

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-emerald-500/30">
      <ServicePageSchema
        serviceName="Custom Software Development"
        serviceDescription="Speion architects custom software solutions built to handle complex business logic, heavy data loads, and enterprise integrations."
        pathname="/services/custom-software-development"
        faqs={[
          { question: "What is custom software development and when do I need it?", answer: "Custom software development is the process of designing, building, and deploying software tailored specifically to your business processes. You need it when off-the-shelf solutions cannot handle your unique workflows, when you need full control over your IP, or when you want to eliminate recurring SaaS licensing fees that scale with your team size." },
          { question: "How much does custom software development cost in India?", answer: "Custom software projects start at ₹75,000 for MVPs and can scale to ₹10,00,000+ for enterprise-grade applications. The cost depends on complexity, number of integrations, user roles, and the tech stack required. Speion provides transparent, milestone-based pricing with no hidden costs." },
          { question: "Do I own the source code after the project is completed?", answer: "100%. Once the final milestone payment is cleared, all intellectual property, source code, deployment assets, and documentation are fully transferred to your organization. There is no vendor lock-in and no recurring licensing fees." },
        ]}
      />
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Code2 size={14} className="text-emerald-600 dark:text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Software Engineering</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Architecting <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
                Complex Logic
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              We design and build custom software systems from the ground up. Tailored exactly to your operational workflows, eliminating bottlenecks, and ensuring infinite scalability.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Consult an Architect
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Citable AI Answer Block */}
      <section aria-label="About our Custom Software Services" className="px-4 sm:px-6 pb-12">
        <div className="container mx-auto max-w-4xl text-center bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Speion for Custom Software Development?</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
            Speion is a premier custom software development company based in Pune, India, dedicated to architecting highly scalable, enterprise-grade digital products. Unlike agencies that rely on rigid templates, Speion engineers framework-agnostic, bespoke software solutions tailored entirely to complex business logic. Our full-stack engineering team specializes in modernizing legacy systems, building high-performance SaaS platforms, and deploying resilient cloud infrastructure on AWS and Google Cloud. By leveraging cutting-edge technologies like Next.js, Node.js, and Python, we ensure that every application we build delivers rapid load times, ironclad security, and seamless scalability. From initial MVP scoping and UX/UI design to post-launch DevOps maintenance, Speion acts as an end-to-end technical partner for startups and enterprises seeking to eliminate technical debt and accelerate their digital transformation.
          </p>
        </div>
      </section>

      {/* Real Product Image Showcase */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50 group">
            <Image 
              src="/services/software.png" 
              alt="Custom Software Architecture" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Bento Grid */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-emerald-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Server className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Systems</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We replace outdated legacy software with modern, cloud-native enterprise systems that streamline your entire operation without sacrificing data integrity.
              </p>
              <ul className="space-y-2">
                {['Microservices Architecture', 'Legacy System Modernization', 'Data Migration Strategies'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Capability 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Network className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">API Integrations</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Connecting disparate third-party tools (Payment Gateways, ERPs, CRMs) into a single unified dashboard via custom APIs.
              </p>
            </div>
            
            {/* Capability 3 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Shield className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data Security</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Implementing rigorous compliance standards (SOC2, HIPAA) with end-to-end encryption for your most sensitive business data.
              </p>
            </div>
            
            {/* Capability 4 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <Cpu className="w-12 h-12 text-emerald-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">High-Availability Infrastructure</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl relative z-10">
                Downtime is not an option. We design fault-tolerant systems deployed on AWS or GCP using Kubernetes, ensuring your software remains online and performant during massive traffic spikes.
              </p>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-[100%] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Tech Stack</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light">Robust, scalable, and battle-tested technologies.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Python / Django', 'Go (Golang)', 'Node.js', 'Java / Spring', 'PostgreSQL', 'MongoDB', 'Docker / K8s', 'AWS / GCP'].map((tech, i) => (
              <div key={i} className="py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-emerald-500/50 hover:text-emerald-600 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-[2px] bg-emerald-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center">Engineering Process</h2>
            <div className="w-12 h-[2px] bg-emerald-600"></div>
          </div>
          
          <div className="space-y-12">
            {[
              { num: "01", title: "Business Logic Mapping", desc: "We sit down with your stakeholders to document every rule, edge case, and operational workflow that the software needs to handle." },
              { num: "02", title: "System Architecture", desc: "Designing the database schemas, API contracts, and infrastructure diagrams to ensure future-proof scalability." },
              { num: "03", title: "Iterative Development", desc: "Writing clean, documented, and test-driven code. We deliver modules iteratively so you can test functionality early." },
              { num: "04", title: "Load & Security Testing", desc: "Simulating heavy user loads and performing penetration testing to ensure the system is rock solid." },
              { num: "05", title: "Deployment & Training", desc: "Smooth rollout with legacy data migration, combined with documentation and training for your internal teams." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-900 border border-slate-800 group-hover:border-emerald-500 group-hover:bg-emerald-600 flex items-center justify-center font-display font-bold text-xl transition-all duration-300">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{step.desc}</p>
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
