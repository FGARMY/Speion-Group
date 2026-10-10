import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { MessageSquareCode, Bot, Zap, Globe2, ShieldCheck, ArrowRight, Smartphone, RefreshCw } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "AI Chatbot Development Services | WhatsApp & Web AI Bots | Speion",
  description: "Speion engineers enterprise AI chatbots for WhatsApp, web, and internal tools with contextual RAG memory, CRM sync, and automated lead capture.",
  pathname: "/services/chatbot-development",
});

export default function ChatbotDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-emerald-500/30">
      <ServicePageSchema
        serviceName="AI Chatbot Development"
        serviceDescription="Speion engineers enterprise AI chatbots for WhatsApp, web, and internal tools with contextual RAG memory, CRM sync, and automated lead capture."
        pathname="/services/chatbot-development"
        faqs={[
          { question: "Can the chatbot integrate with WhatsApp Business?", answer: "Yes. We build official WhatsApp Business Cloud API chatbots that handle customer inquiries 24/7, qualify leads, send rich product catalogs, and seamlessly hand off hot leads to human agents." },
          { question: "How does the chatbot know about my specific company products?", answer: "We implement Retrieval-Augmented Generation (RAG). The bot indexes your website, PDFs, documentation, and CRM data in real time, answering customer questions with 99%+ factual precision without hallucinating." },
          { question: "How long does it take to deploy a custom AI chatbot?", answer: "A standard web or WhatsApp AI chatbot takes 2 to 4 weeks to train, test, and deploy with CRM integrations. Custom multi-channel enterprise bots with voice capabilities take 4 to 8 weeks." },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
            <MessageSquareCode size={14} className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Conversational AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto">
            Intelligent 24/7 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              AI Chatbots
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Convert visitors into paying customers around the clock. Speion engineers intelligent WhatsApp and web chatbots trained on your company data that answer complex queries, schedule meetings, and sync directly with your CRM.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg shadow-emerald-600/25">
              Build Your Chatbot
            </Link>
            <a 
              href="https://wa.me/917758866318?text=Hi%20Speion%2C%20I%20am%20interested%20in%20building%20an%20AI%20chatbot." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-semibold hover:border-slate-400 transition-all"
            >
              Test a Live Demo on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="relative w-full h-[40vh] md:h-[55vh] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50 group">
            <Image 
              src="/services/ai.png" 
              alt="AI Chatbot Architecture" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">Omnichannel AI</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-2">WhatsApp, Web Widget, Slack, & Mobile App Integration</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Enterprise Chatbot Features
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Automate customer interactions without losing the human touch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Official WhatsApp Cloud API",
                desc: "Direct integration with verified WhatsApp Business accounts for automated broadcast campaigns, catalogs, and instant customer replies.",
                icon: <Smartphone size={24} className="text-emerald-600" />,
              },
              {
                title: "Hallucination-Free RAG",
                desc: "Strictly grounded on your product guides, FAQs, and pricing sheets so your bot never promises what your business cannot deliver.",
                icon: <ShieldCheck size={24} className="text-teal-600" />,
              },
              {
                title: "Live CRM & Lead Sync",
                desc: "Automatically qualifies prospect budget, timeline, and contact information, pushing qualified deals directly to Salesforce, HubSpot, or custom CRMs.",
                icon: <Zap size={24} className="text-cyan-600" />,
              },
              {
                title: "Multilingual Intelligence",
                desc: "Flawlessly answers queries in English, Hindi, Marathi, Arabic, Spanish, and 40+ languages with colloquial accuracy.",
                icon: <Globe2 size={24} className="text-blue-600" />,
              },
              {
                title: "Smart Human Handoff",
                desc: "Detects user frustration or high-value purchase intent and instantly transfers the conversation to a human sales rep with chat history.",
                icon: <RefreshCw size={24} className="text-indigo-600" />,
              },
              {
                title: "Action-Taking Bots",
                desc: "Capable of checking order statuses, resetting passwords, booking calendar slots, and creating support tickets via webhooks.",
                icon: <Bot size={24} className="text-emerald-600" />,
              },
            ].map((cap, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:-translate-y-1.5 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm">{cap.desc}</p>
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
