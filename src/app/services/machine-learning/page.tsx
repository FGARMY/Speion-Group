import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Network, LineChart, Cpu, Database, Binary, ShieldCheck, ArrowRight, Layers } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Machine Learning Engineering & Predictive AI | Speion",
  description: "Speion builds enterprise machine learning models, predictive forecasting algorithms, computer vision pipelines, and production MLOps systems.",
  pathname: "/services/machine-learning",
});

export default function MachineLearningPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-cyan-500/30">
      <ServicePageSchema
        serviceName="Machine Learning Engineering"
        serviceDescription="Speion builds enterprise machine learning models, predictive forecasting algorithms, computer vision pipelines, and production MLOps systems."
        pathname="/services/machine-learning"
        faqs={[
          { question: "What is the difference between AI and traditional Machine Learning at Speion?", answer: "While generative AI excels at language and multi-modal synthesis, classical and deep Machine Learning focuses on numerical regression, classification, anomaly detection, predictive time-series forecasting, and automated decision-making using proprietary structured business datasets." },
          { question: "How does Speion approach custom ML model development?", answer: "We follow a 4-stage pipeline: (1) Data Audit & Feature Engineering, (2) Model Training & Cross-Validation, (3) Model Quantization & Containerization, and (4) Production MLOps with automated drift detection and retraining triggers." },
          { question: "Can you deploy models to our existing AWS / Azure infrastructure?", answer: "Yes. We deploy production inference pipelines to AWS SageMaker, Azure ML, or self-hosted Kubernetes clusters with CI/CD integration, monitoring latency and accuracy metrics continuously." },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
            <Network size={14} className="text-cyan-600 dark:text-cyan-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Data Science & MLOps</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto">
            Predictive Enterprise <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
              Machine Learning
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Transform raw business data into predictive revenue engines. Speion engineers custom machine learning models that forecast demand, detect anomalies, personalize customer journeys, and automate complex decision-making at scale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 hover:scale-105 transition-all shadow-lg shadow-cyan-600/25">
              Build Machine Learning Models
            </Link>
            <a 
              href="https://wa.me/917758866318?text=Hi%20Speion%2C%20I%20have%20a%20machine%20learning%20or%20predictive%20analytics%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-semibold hover:border-slate-400 transition-all"
            >
              Consult with ML Engineer
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
              alt="Machine Learning Architecture" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-cyan-400">MLOps Infrastructure</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-2">Scalable Batch & Real-Time Microservice Serving</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Machine Learning Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Production algorithms delivering quantifiable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Demand & Revenue Forecasting",
                desc: "High-accuracy time-series modeling predicting inventory requirements, cash flow cycles, and seasonal demand peaks.",
                icon: <LineChart size={24} className="text-cyan-600" />,
              },
              {
                title: "Customer Churn & Lead Scoring",
                desc: "Identify disengaged clients before they leave and score sales leads algorithmically to focus reps on deals most likely to close.",
                icon: <Binary size={24} className="text-blue-600" />,
              },
              {
                title: "Fraud & Anomaly Detection",
                desc: "Real-time transaction scoring identifying suspicious patterns, payment fraud, and network breaches in milliseconds.",
                icon: <ShieldCheck size={24} className="text-emerald-600" />,
              },
              {
                title: "Computer Vision & Optical Inspection",
                desc: "Defect detection for manufacturing lines, visual inventory count, and automated image classification pipelines.",
                icon: <Cpu size={24} className="text-purple-600" />,
              },
              {
                title: "ETL & Feature Store Engineering",
                desc: "Scalable data ingestion pipelines turning unstructured raw records into clean, versioned feature vectors.",
                icon: <Database size={24} className="text-amber-600" />,
              },
              {
                title: "MLOps & Automated Retraining",
                desc: "Continuous model monitoring, drift tracking, and automated CI/CD retraining ensuring accuracy never decays.",
                icon: <Layers size={24} className="text-indigo-600" />,
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
