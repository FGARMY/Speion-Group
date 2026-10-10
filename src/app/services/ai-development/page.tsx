import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Bot, BrainCircuit, Cpu, Sparkles, CheckCircle2, ArrowRight, Database, ShieldCheck } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Enterprise AI Development Services | LLMs & Custom Models | Speion",
  description: "Speion builds custom AI solutions, proprietary LLM fine-tuning, RAG knowledge bases, and autonomous AI agents for high-growth enterprises.",
  pathname: "/services/ai-development",
});

export default function AIDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <ServicePageSchema
        serviceName="AI Development"
        serviceDescription="Speion builds custom AI solutions, proprietary LLM fine-tuning, RAG knowledge bases, and autonomous AI agents for high-growth enterprises."
        pathname="/services/ai-development"
        faqs={[
          { question: "What AI development services does Speion offer?", answer: "We specialize in end-to-end enterprise AI engineering: fine-tuning foundation models (Llama, Mistral, OpenAI), building Retrieval-Augmented Generation (RAG) vector pipelines, orchestrating autonomous multi-agent workflows, and integrating AI microservices into existing corporate tech stacks." },
          { question: "How does Speion ensure enterprise data privacy with LLMs?", answer: "We implement strict zero-retention data pipelines, on-premises or private VPC model hosting (AWS Bedrock / Azure OpenAI), and vector database encryption at rest. Your proprietary data is never used to train public foundation models." },
          { question: "How much does custom AI development cost?", answer: "Focused AI implementations and internal RAG copilots start from ₹75,000 to ₹2,50,000 ($1,000 to $3,500 USD). Large-scale autonomous agent platforms and multi-modal models range from ₹3,50,000 to ₹10,00,000+ with milestone-based delivery." },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
            <BrainCircuit size={14} className="text-rose-600 dark:text-rose-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Artificial Intelligence</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto">
            Bespoke Enterprise <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
              AI Systems
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Move beyond generic wrapper apps. Speion engineers production-grade artificial intelligence: sovereign RAG pipelines, fine-tuned domain models, and autonomous multi-agent systems designed to unlock exponential operational leverage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 hover:scale-105 transition-all shadow-lg shadow-rose-600/25">
              Engineer Your AI Solution
            </Link>
            <a 
              href="https://wa.me/917758866318?text=Hi%20Speion%2C%20I%20want%20to%20discuss%20an%20AI%20development%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-semibold hover:border-slate-400 transition-all"
            >
              Chat with AI Architect
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
              alt="Enterprise AI Architecture" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-rose-400">Production AI</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-2">Private VPC Deployment with 99.9% Uptime</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Capabilities */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Core AI Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Engineered with modern frameworks and resilient cloud infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retrieval-Augmented Generation (RAG)",
                desc: "Connect your enterprise knowledge bases, PDFs, and SQL databases to LLMs with sub-second hybrid semantic vector retrieval.",
                icon: <Database size={24} className="text-rose-600" />,
              },
              {
                title: "Autonomous Agent Swarms",
                desc: "Multi-agent systems capable of multi-step tool execution, web research, code execution, and CRM updates without human intervention.",
                icon: <Bot size={24} className="text-purple-600" />,
              },
              {
                title: "Domain Model Fine-Tuning",
                desc: "Adapt open-source weights (Llama 3, Mistral) on your specialized industry datasets for superior accuracy at a fraction of API costs.",
                icon: <Cpu size={24} className="text-blue-600" />,
              },
              {
                title: "Enterprise Guardrails & Safety",
                desc: "Strict PII redaction, prompt injection defense, and hallucinations mitigation layers built directly into the inference pipeline.",
                icon: <ShieldCheck size={24} className="text-emerald-600" />,
              },
              {
                title: "Multi-Modal Intelligence",
                desc: "Voice processing, optical document analysis, OCR invoice extraction, and visual inspection systems for logistics and healthcare.",
                icon: <Sparkles size={24} className="text-amber-600" />,
              },
              {
                title: "High-Throughput Serving",
                desc: "FastAPI, vLLM, and TensorRT containerized deployments capable of handling hundreds of concurrent streaming completions.",
                icon: <BrainCircuit size={24} className="text-rose-600" />,
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
