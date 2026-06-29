import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Globe, Server, Zap, Layout, Shield, ArrowRight, Code2, Database } from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPostgresql, 
  SiRedis 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Web Development Services | Enterprise Web Apps | Speion",
  description: "Speion engineers high-performance, secure, and scalable web applications using React, Next.js, and modern architectures.",
  pathname: "/services/web-development",
});

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <ServicePageSchema
        serviceName="Web Development"
        serviceDescription="Speion engineers high-performance, secure, and scalable web applications using React, Next.js, and modern architectures."
        pathname="/services/web-development"
        faqs={[
          { question: "How much does a custom website cost in India?", answer: "A custom corporate website built with modern technologies like React and Next.js typically starts at ₹25,000 and can go up to ₹2,00,000+ depending on complexity, number of pages, custom integrations, and whether you need a CMS. Speion provides detailed quotes after a discovery call to understand your specific requirements." },
          { question: "How long does it take to build a custom web application?", answer: "A standard corporate website takes 2-4 weeks. A complex web application with user authentication, dashboards, and third-party integrations typically takes 6-12 weeks. We follow agile sprints with weekly demos so you can track progress in real time." },
          { question: "What technologies does Speion use for web development?", answer: "We specialize in React.js, Next.js, TypeScript, and Tailwind CSS for the frontend. For backends, we use Node.js, PostgreSQL, Redis, and deploy on AWS or Vercel. All our websites are optimized for Core Web Vitals, SEO, and accessibility out of the box." },
        ]}
      />
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Globe size={14} className="text-rose-600 dark:text-rose-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Web Engineering</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              High-Performance <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500 dark:from-rose-500 dark:to-orange-400">
                Web Architectures
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              We engineer fast, secure, and SEO-optimized web experiences that scale to millions of users. From corporate portals to complex SaaS platforms, we build the digital foundation your business needs.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Product Image Showcase */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="relative w-full h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50 group bg-slate-900">
            <Link href="https://panjara-agro.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/portfolio/panjara-agro-hq.png" 
                alt="Panjara Agro Website Portfolio" 
                fill
                quality={100}
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Overlay with Visit Site button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/50 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors">
                  Visit panjara-agro.vercel.app <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities Bento Grid */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-rose-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Layout className="w-12 h-12 text-rose-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Frontend Engineering</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We build highly interactive, pixel-perfect user interfaces using modern frameworks like React and Next.js. Our frontends are optimized for sub-second load times, exceptional Core Web Vitals, and seamless responsiveness across all device types.
              </p>
              <ul className="space-y-2">
                {['Single Page Applications (SPAs)', 'Server-Side Rendering (SSR)', 'Progressive Web Apps (PWAs)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-rose-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Capability 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Database className="w-12 h-12 text-rose-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Backend & APIs</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Robust, scalable, and secure server-side architectures designed to handle heavy traffic and complex business logic using Node.js and Postgres.
              </p>
            </div>
            
            {/* Capability 3 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Shield className="w-12 h-12 text-rose-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Security & Auth</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Enterprise-grade security implementations including OAuth2, JWT, Role-Based Access Control (RBAC), and data encryption.
              </p>
            </div>
            
            {/* Capability 4 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <Zap className="w-12 h-12 text-rose-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Performance Optimization</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl relative z-10">
                Speed is revenue. We audit and optimize web applications for maximum performance, leveraging Edge caching, CDN distribution, image optimization, and code splitting to ensure lightning-fast global delivery.
              </p>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-rose-500/10 to-transparent rounded-tl-[100%] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Technology Stack</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light">We utilize the latest and most stable technologies in the industry.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'React.js', icon: SiReact, color: '#61DAFB' },
              { name: 'Next.js', icon: SiNextdotjs, color: '' },
              { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
              { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
              { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
              { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
              { name: 'Redis', icon: SiRedis, color: '#DC382D' },
              { name: 'AWS', icon: FaAws, color: '#232F3E' }
            ].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="group py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center gap-3 font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-default">
                  <Icon 
                    className="w-6 h-6 text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                    style={{ '--hover-color': tech.color || 'currentColor' } as React.CSSProperties}
                  />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects Portfolio */}
      <section className="py-24 px-4 sm:px-6 bg-slate-100 dark:bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-rose-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MindCare Clinic Project */}
            <div className="group rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-500">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <Image 
                  src="/images/portfolio/mindcare.png" 
                  alt="MindCare Clinic Platform" 
                  fill 
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider rounded-full">Healthcare Platform</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider rounded-full">Next.js</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">MindCare Clinic Portal</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">
                  A high-performance telemedicine and appointment booking platform engineered with HIPAA compliance in mind. Features a custom scalable architecture that handles thousands of daily consultations without latency.
                </p>
                <div className="flex items-center text-rose-600 dark:text-rose-500 font-bold group-hover:gap-4 gap-2 transition-all cursor-pointer">
                  View Case Study <ArrowRight size={18} />
                </div>
              </div>
            </div>

            {/* SaaS Platform Project */}
            <div className="group rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-500">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <Image 
                  src="/images/portfolio/products.png" 
                  alt="SaaS Platform Interface" 
                  fill 
                  className="object-cover object-left-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full">B2B SaaS</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider rounded-full">React</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Enterprise SaaS Dashboard</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">
                  A lightning-fast React application built for managing massive datasets and multi-tenant architectures. Optimized for sub-second data retrieval and features a deeply custom-designed modular component system.
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-500 font-bold group-hover:gap-4 gap-2 transition-all cursor-pointer">
                  View Case Study <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-[2px] bg-rose-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center">Engineering Process</h2>
            <div className="w-12 h-[2px] bg-rose-600"></div>
          </div>
          
          <div className="space-y-12">
            {[
              { num: "01", title: "Discovery & Architecture", desc: "We analyze your business requirements, define the system architecture, and map out the data structures before writing a single line of code." },
              { num: "02", title: "UI/UX Prototyping", desc: "Our design team creates high-fidelity wireframes and interactive prototypes in Figma for your approval." },
              { num: "03", title: "Development Sprints", desc: "Agile development phases where we build the frontend, backend, and integrate APIs, keeping you updated with weekly demos." },
              { num: "04", title: "Rigorous QA & Testing", desc: "Automated unit tests, integration tests, and manual QA to ensure security, performance, and cross-browser compatibility." },
              { num: "05", title: "Deployment & CI/CD", desc: "Seamless launch utilizing automated CI/CD pipelines for zero-downtime deployments." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-900 border border-slate-800 group-hover:border-rose-500 group-hover:bg-rose-600 flex items-center justify-center font-display font-bold text-xl transition-all duration-300">
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
