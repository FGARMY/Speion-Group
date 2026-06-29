import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Bot, BrainCircuit, Sparkles, Workflow, LineChart, MessageSquare } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "AI & Automation Services | Enterprise AI | Speion",
  description: "Speion integrates custom AI models and automations to streamline workflows, reduce overhead, and drive massive operational efficiency.",
  pathname: "/services/ai-automations",
});

export default function AiAutomationsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-violet-500/30">
      <ServicePageSchema
        serviceName="AI & Automation"
        serviceDescription="Speion integrates custom AI models and automations to streamline workflows, reduce overhead, and drive massive operational efficiency."
        pathname="/services/ai-automations"
        faqs={[
          { question: "What types of AI automation can Speion build?", answer: "We build custom LLM integrations (OpenAI, Llama), AI chatbots for 24/7 customer support, workflow automation connecting your entire tech stack (Zapier, Make.com, custom APIs), predictive analytics dashboards, and Retrieval-Augmented Generation (RAG) systems trained on your company data." },
          { question: "How much does AI automation cost for a business?", answer: "AI automation projects start at ₹40,000 for basic chatbot integrations and can scale to ₹5,00,000+ for enterprise-grade systems with custom LLM fine-tuning, multi-system integrations, and advanced analytics. We scope each project individually based on complexity and ROI potential." },
          { question: "How long does it take to implement AI automation?", answer: "A basic AI chatbot can be deployed in 2-3 weeks. Custom LLM integrations with RAG and workflow automation typically take 4-8 weeks. Enterprise AI systems with multiple integrations and custom model training can take 3-6 months." },
        ]}
      />
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Bot size={14} className="text-violet-600 dark:text-violet-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Artificial Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Intelligent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500 dark:from-violet-400 dark:to-purple-400">
                Automations
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              Transform your business with custom AI integrations and workflow automations. We build systems that think, learn, and execute tasks autonomously.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Explore AI Solutions
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
              src="/services/ai.png" 
              alt="AI Data Center" 
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
            <div className="w-12 h-[2px] bg-violet-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <BrainCircuit className="w-12 h-12 text-violet-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Custom AI Models (LLMs)</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We fine-tune Large Language Models (LLMs) on your proprietary company data to create highly specialized AI agents that understand your specific business context.
              </p>
              <ul className="space-y-2">
                {['OpenAI API Integration', 'Local Open-Source LLMs (Llama 3)', 'RAG (Retrieval-Augmented Generation)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-violet-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Capability 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Workflow className="w-12 h-12 text-violet-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Workflow Automation</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Connecting your entire tech stack (Zapier, Make.com, custom scripts) to eliminate manual, repetitive tasks entirely.
              </p>
            </div>
            
            {/* Capability 3 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <MessageSquare className="w-12 h-12 text-violet-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">AI Chatbots</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Intelligent, context-aware customer support agents that resolve queries instantly 24/7, deflecting tickets and boosting satisfaction.
              </p>
            </div>
            
            {/* Capability 4 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <LineChart className="w-12 h-12 text-violet-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Predictive Analytics</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl relative z-10">
                Leveraging machine learning algorithms to analyze historical business data and predict future trends—from sales forecasting to predictive maintenance in manufacturing.
              </p>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-violet-500/10 to-transparent rounded-tl-[100%] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our AI Stack</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light">Cutting-edge machine learning and automation tools.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Python', 'TensorFlow / PyTorch', 'OpenAI APIs', 'LangChain', 'Pinecone / Vector DBs', 'Hugging Face', 'Zapier / Make', 'AWS SageMaker'].map((tech, i) => (
              <div key={i} className="py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-violet-500/50 hover:text-violet-600 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-[2px] bg-violet-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center">Implementation Process</h2>
            <div className="w-12 h-[2px] bg-violet-600"></div>
          </div>
          
          <div className="space-y-12">
            {[
              { num: "01", title: "Process Auditing", desc: "We identify the most repetitive, time-consuming tasks in your business that are ripe for automation." },
              { num: "02", title: "Data Preparation", desc: "Cleaning, structuring, and vectorizing your company's data so it can be understood by AI models." },
              { num: "03", title: "Model Training & Integration", desc: "Fine-tuning the LLM or building the automation scripts, then integrating them via APIs into your existing software." },
              { num: "04", title: "Testing & Guardrails", desc: "Implementing strict prompt engineering and security guardrails to ensure the AI behaves predictably and safely." },
              { num: "05", title: "Deployment & Monitoring", desc: "Deploying the system and continuously monitoring API usage, success rates, and edge cases to further refine the model." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-900 border border-slate-800 group-hover:border-violet-500 group-hover:bg-violet-600 flex items-center justify-center font-display font-bold text-xl transition-all duration-300">
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
