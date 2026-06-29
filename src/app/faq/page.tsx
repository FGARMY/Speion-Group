import type { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Frequently Asked Questions | Speion Engineering',
  description: 'Answers to common questions about enterprise software development, pricing, timelines, AI automation, web and mobile app development, and how Speion works.',
  pathname: '/faq',
});

const faqs = [
  // ─── Services ──────────────────────────────────────────────────────────────
  {
    question: "What services does Speion offer?",
    answer: "Speion offers a comprehensive range of software engineering services including custom web development (React, Next.js), mobile app development (React Native, Flutter), AI and automation integrations (LLMs, chatbots, workflow automation), custom CRM development, enterprise ERP systems, SaaS platform development, e-commerce solutions, and machine learning / predictive analytics. We serve clients across India and globally, with offices in Pune and Nashik, Maharashtra."
  },
  {
    question: "What is the typical timeline for migrating a legacy ERP to a cloud-native architecture?",
    answer: "A complete migration typically takes 6 to 12 months, depending on the complexity of the legacy database and the number of microservices required. We use the Strangler Fig Pattern to migrate module by module, ensuring zero operational downtime. The process includes a thorough legacy system audit, data migration planning, microservices architecture design, phased migration execution, and comprehensive testing at each stage."
  },
  {
    question: "Do we own the Intellectual Property (IP) for the custom software you build?",
    answer: "Yes. Unlike SaaS platforms where you pay perpetual per-seat licensing, you own 100% of the custom codebase and intellectual property from day one. Once the final milestone payment is cleared, all source code, deployment assets, documentation, and design files are fully transferred to your organization. There are no vendor lock-ins, no recurring licensing fees, and no restrictions on what you can do with the software."
  },
  {
    question: "How do you handle security for FinTech and HealthTech applications?",
    answer: "We adhere to strict SOC 2, HIPAA, and PCI-DSS compliance standards. Our architecture incorporates zero-trust principles, end-to-end encryption (AES-256), automated vulnerability scanning in our CI/CD pipelines, and regular third-party penetration testing. Every application includes role-based access control (RBAC), secure JWT-based authentication, input validation, and comprehensive audit logging."
  },
  // ─── Technology ────────────────────────────────────────────────────────────
  {
    question: "What tech stack does Speion use for development?",
    answer: "We are framework-agnostic but specialize in modern, scalable technologies. For web, we use React, Next.js, TypeScript, and Tailwind CSS. For mobile, we leverage React Native and Flutter. Our backend systems are typically built on Node.js, Python, or Go, with PostgreSQL and Redis for data management, hosted on AWS, Google Cloud, or Vercel. For AI/ML projects, we use Python, TensorFlow, PyTorch, LangChain, and OpenAI APIs."
  },
  {
    question: "Why do you recommend React Native for some enterprise apps and Flutter for others?",
    answer: "We recommend React Native when your organization already utilizes a massive React web ecosystem and you want to share business logic across platforms. We recommend Flutter for highly graphical, UI-heavy applications that require pixel-perfect rendering across fragmented Android devices. Both frameworks produce native-quality apps — the choice depends on your existing tech stack, team expertise, and specific performance requirements."
  },
  // ─── Pricing ───────────────────────────────────────────────────────────────
  {
    question: "How much does it cost to build a custom website or web application?",
    answer: "A high-performance corporate website starts at ₹25,000. Complex web applications with user authentication, dashboards, CMS, and third-party integrations typically range from ₹75,000 to ₹5,00,000+. Enterprise SaaS platforms and multi-tenant applications can exceed ₹10,00,000. We provide transparent, milestone-based pricing after a free discovery call where we understand your exact requirements. There are no hidden fees."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, absolutely. We offer comprehensive Service Level Agreements (SLAs) for post-launch maintenance, bug fixes, server scaling, security patches, and continuous feature updates to ensure your software remains cutting-edge. Our support plans include 24/7 monitoring, incident response, performance optimization, and regular technology updates. Support is included free for the first month after launch, with flexible monthly or annual plans thereafter."
  },
  // ─── Process ───────────────────────────────────────────────────────────────
  {
    question: "How long does it take to build a custom software application?",
    answer: "The timeline depends on the complexity of the project. A basic MVP can take 4-8 weeks, while comprehensive enterprise software or complex SaaS platforms can take 3-6 months. We provide detailed agile sprint timelines before starting any project. Every project includes weekly demos so you can track progress, provide feedback, and adjust priorities in real-time. We never start coding without a clear scope document and timeline approved by you."
  },
  {
    question: "Can you rescue an ongoing software project that is failing?",
    answer: "Yes. We offer Architecture Audits where we assess the existing codebase, identify bottlenecks, technical debt, and security vulnerabilities. Following the audit, our engineering team can step in to refactor the architecture, fix critical issues, and get the project back on track. We've successfully rescued projects from failed agencies, offshore teams, and internal dev teams that hit a wall. The audit takes 1-2 weeks and includes a detailed report with prioritized recommendations."
  },
  {
    question: "What does your development process look like?",
    answer: "Our process follows five stages: (1) Discovery & Architecture — we analyze your requirements and define the system architecture. (2) UI/UX Prototyping — high-fidelity wireframes and interactive prototypes in Figma. (3) Development Sprints — agile phases with weekly demos. (4) Rigorous QA & Testing — automated unit tests, integration tests, and manual QA. (5) Deployment & CI/CD — zero-downtime launches with automated pipelines. Throughout the process, you have direct access to your dedicated project manager and engineering team."
  },
  // ─── Location ──────────────────────────────────────────────────────────────
  {
    question: "Where is Speion located? Do you work with clients outside Pune and Nashik?",
    answer: "Speion is headquartered in Pune, Maharashtra, with an additional office in Nashik. However, we work with clients across India and internationally. Our team operates in a hybrid model, combining the benefits of local collaboration with the flexibility of remote work. Whether you're in Mumbai, Bangalore, Delhi, or abroad, we can deliver the same quality of work through our proven remote collaboration framework including daily standups, shared project boards, and video demos."
  },
  {
    question: "Why choose a software development company in Pune over Bangalore or Hyderabad?",
    answer: "Pune offers a unique combination of world-class engineering talent (thanks to top universities like COEP, PICT, and VIT), significantly lower operational costs compared to Bangalore and Hyderabad, and a thriving IT ecosystem. Speion passes these cost advantages directly to our clients, delivering Silicon Valley-quality engineering at competitive Indian rates. Our location in Pune also means we're within driving distance of Mumbai, India's financial capital."
  },
  // ─── AI & Automation ───────────────────────────────────────────────────────
  {
    question: "What types of AI automation can Speion build for my business?",
    answer: "We build custom LLM integrations (OpenAI, Llama 3, Claude), AI-powered chatbots for 24/7 customer support, workflow automation connecting your entire tech stack (CRM, email, accounting, inventory), Retrieval-Augmented Generation (RAG) systems trained on your proprietary data, predictive analytics dashboards, and automated document processing systems. Our AI solutions typically deliver 40-70% reduction in manual task time and significant cost savings."
  },
  {
    question: "Is AI automation expensive? What's the ROI?",
    answer: "AI automation projects start at ₹40,000 for basic chatbot integrations. The ROI is typically exceptional — most of our clients see 3-5x return within the first 6 months through reduced labor costs, faster response times, and eliminated manual errors. For example, an AI customer support chatbot can handle 80% of common queries, reducing support ticket volume dramatically. We provide ROI projections during the proposal phase so you can make an informed investment decision."
  },
  // ─── Trust & Quality ───────────────────────────────────────────────────────
  {
    question: "How do you ensure code quality and prevent technical debt?",
    answer: "We enforce strict engineering standards including TypeScript for type safety, comprehensive unit and integration testing, automated CI/CD pipelines with quality gates, mandatory code reviews, and adherence to SOLID principles. Every project includes detailed technical documentation, API docs, and a clean Git history. We use ESLint, Prettier, and Husky pre-commit hooks to maintain consistent code quality across the team. Our goal is to build software that's as easy to maintain in year 5 as it was on day 1."
  },
];

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 px-4 sm:px-6">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked <span className="text-rose-600">Questions</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Answers to technical, strategic, and pricing questions about our enterprise engineering services.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 sm:p-8">
                <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white pr-8">
                  {faq.question}
                </h2>
                <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 group-open:bg-rose-600 group-open:text-white transition-colors duration-300">
                  <ChevronDown
                    size={20}
                    className="transition-transform duration-300 group-open:rotate-180"
                  />
                </div>
              </summary>
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </div>
  );
}

