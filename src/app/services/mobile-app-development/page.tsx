import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Smartphone, Cpu, Zap, Layout, Shield, Globe } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Mobile App Development Services | iOS & Android | Speion",
  description: "Speion develops native and cross-platform mobile applications for iOS and Android with maximum FPS, sleek design, and robust backends.",
  pathname: "/services/mobile-app-development",
});

export default function MobileAppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <ServicePageSchema
        serviceName="Mobile App Development"
        serviceDescription="Speion develops native and cross-platform mobile applications for iOS and Android with maximum FPS, sleek design, and robust backends."
        pathname="/services/mobile-app-development"
        faqs={[
          { question: "Should I choose React Native or Flutter for my mobile app?", answer: "We recommend React Native when your organization already has a React web ecosystem and you want to share business logic across platforms. We recommend Flutter for highly graphical, UI-heavy applications that require pixel-perfect rendering across fragmented Android devices. Both produce native-quality apps — Speion helps you choose based on your specific needs." },
          { question: "How much does mobile app development cost in India?", answer: "A basic MVP mobile app (3-5 screens, auth, basic API) starts at ₹75,000. Full-featured mobile apps with real-time features, push notifications, payment integrations, and offline support typically range from ₹2,00,000 to ₹8,00,000. Enterprise apps with complex backends can exceed ₹10,00,000." },
          { question: "Do you build for both iOS and Android?", answer: "Yes. We primarily use React Native and Flutter which allow us to build for both iOS and Android from a single codebase, reducing development time by 40-60% compared to building two separate native apps. The result is indistinguishable from fully native applications." },
        ]}
      />
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-rose-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Smartphone size={14} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Mobile Engineering</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Native Mobile <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500 dark:from-indigo-400 dark:to-rose-400">
                Experiences
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              We compile to native architectures for iOS and Android, ensuring maximum FPS, buttery-smooth animations, and a premium feel that retains users and drives app store conversions.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Discuss Your App
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
              src="/services/app.png" 
              alt="Mobile App Interface" 
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
            <div className="w-12 h-[2px] bg-indigo-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Smartphone className="w-12 h-12 text-indigo-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cross-Platform & Native</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Whether you need a high-performance cross-platform app built in React Native or Flutter, or a purely native iOS (Swift) and Android (Kotlin) application, we deliver codebases that scale.
              </p>
              <ul className="space-y-2">
                {['React Native & Flutter', 'Swift / Objective-C', 'Kotlin / Java'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-indigo-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Capability 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Cpu className="w-12 h-12 text-indigo-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Hardware Integration</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Deep device integration including Bluetooth LE, Camera APIs, GPS/Location services, and biometric authentication.
              </p>
            </div>
            
            {/* Capability 3 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Layout className="w-12 h-12 text-indigo-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">App UI/UX</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Stunning interfaces designed specifically for touch. We adhere to Apple Human Interface Guidelines and Material Design principles.
              </p>
            </div>
            
            {/* Capability 4 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <Globe className="w-12 h-12 text-indigo-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Offline-First Architecture</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl relative z-10">
                We build resilient applications that work seamlessly even when the user drops connectivity. Utilizing local databases (SQLite, WatermelonDB) and intelligent background syncing to ensure data integrity at all times.
              </p>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-tl-[100%] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Mobile Stack</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light">Industry-standard tools for reliable mobile deployment.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)', 'Firebase', 'GraphQL', 'Redux / Zustand', 'Fastlane CI/CD'].map((tech, i) => (
              <div key={i} className="py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-indigo-500/50 hover:text-indigo-600 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-[2px] bg-indigo-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center">Engineering Process</h2>
            <div className="w-12 h-[2px] bg-indigo-600"></div>
          </div>
          
          <div className="space-y-12">
            {[
              { num: "01", title: "App Strategy", desc: "Defining user personas, feature roadmaps, and deciding between native vs. cross-platform based on business goals." },
              { num: "02", title: "Prototyping & Flow", desc: "Creating tactile prototypes so you can feel the app on your own device before development begins." },
              { num: "03", title: "Agile Engineering", desc: "Building the app incrementally while integrating complex backend APIs and third-party SDKs." },
              { num: "04", title: "TestFlight & QA", desc: "Releasing beta versions via TestFlight and Google Play Console for rigorous field testing and bug squashing." },
              { num: "05", title: "App Store Launch", desc: "We handle the entire submission process, ensuring compliance with Apple and Google store guidelines." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-900 border border-slate-800 group-hover:border-indigo-500 group-hover:bg-indigo-600 flex items-center justify-center font-display font-bold text-xl transition-all duration-300">
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
