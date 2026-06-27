import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Layout, PenTool, MousePointer2, Figma, Eye, Users } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "UI/UX Design Services | Digital Product Design | Speion",
  description: "Speion designs stunning, user-centric interfaces and wireframes that ensure high conversion rates, intuitive navigation, and beautiful aesthetics.",
  pathname: "/services/ui-ux-design",
});

export default function UiUxDesignPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-fuchsia-500/30">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <PenTool size={14} className="text-fuchsia-600 dark:text-fuchsia-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Product Design</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Designing Digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-500 dark:from-fuchsia-400 dark:to-purple-400">
                Masterpieces
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              We create stunning, user-centric interfaces rooted in human psychology and behavioral data. From wireframes to high-fidelity prototypes, we design experiences that convert.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Start a Design Sprint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Product Image Showcase */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50 group">
            <Image 
              src="/services/uiux.png" 
              alt="UI/UX Design Studio" 
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
            <div className="w-12 h-[2px] bg-fuchsia-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Users className="w-12 h-12 text-fuchsia-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">UX Research & Strategy</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Great design starts with data. We conduct in-depth user research, competitor analysis, and A/B testing to understand exactly what your users need and how they interact with digital products.
              </p>
              <ul className="space-y-2">
                {['User Personas & Journey Mapping', 'Information Architecture', 'Usability Testing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-fuchsia-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Capability 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Layout className="w-12 h-12 text-fuchsia-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">UI Design (Visuals)</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Crafting pixel-perfect, aesthetically stunning interfaces that align perfectly with your brand identity.
              </p>
            </div>
            
            {/* Capability 3 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <MousePointer2 className="w-12 h-12 text-fuchsia-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Interactive Prototyping</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We build clickable, high-fidelity prototypes in Figma so you can experience the product before engineering begins.
              </p>
            </div>
            
            {/* Capability 4 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <Eye className="w-12 h-12 text-fuchsia-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Design Systems</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl relative z-10">
                We don't just design pages; we build scalable Design Systems. We create comprehensive libraries of reusable components, typography scales, and color tokens to ensure consistency across all your future products.
              </p>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-fuchsia-500/10 to-transparent rounded-tl-[100%] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Design Arsenal</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light">Industry-standard tools for world-class design.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Figma', 'Adobe Creative Cloud', 'Framer', 'Webflow', 'Spline 3D', 'Miro', 'Hotjar', 'Lottie'].map((tech, i) => (
              <div key={i} className="py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-fuchsia-500/50 hover:text-fuchsia-600 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-[2px] bg-fuchsia-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center">The Design Process</h2>
            <div className="w-12 h-[2px] bg-fuchsia-600"></div>
          </div>
          
          <div className="space-y-12">
            {[
              { num: "01", title: "Empathize & Discover", desc: "Understanding the target audience, business goals, and analyzing competitors to find market gaps." },
              { num: "02", title: "Wireframing & UX", desc: "Mapping out the user flow and creating low-fidelity wireframes to establish the structural foundation." },
              { num: "03", title: "Visual Design (UI)", desc: "Applying brand colors, typography, and visual elements to turn wireframes into stunning high-fidelity screens." },
              { num: "04", title: "Prototyping & Testing", desc: "Linking screens together to create an interactive prototype, then testing it with real users to gather feedback." },
              { num: "05", title: "Developer Handoff", desc: "Delivering meticulously organized Figma files and design tokens to the engineering team for a flawless build." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-900 border border-slate-800 group-hover:border-fuchsia-500 group-hover:bg-fuchsia-600 flex items-center justify-center font-display font-bold text-xl transition-all duration-300">
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
