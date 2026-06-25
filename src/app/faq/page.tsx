import type { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Frequently Asked Questions | Speion Engineering',
  description: 'Answers to common questions regarding enterprise software development, architecture audits, custom CRMs, and FinTech integrations.',
  pathname: '/faq',
});

const faqs = [
  {
    question: "What is the typical timeline for migrating a legacy ERP to a cloud-native architecture?",
    answer: "A complete migration typically takes 6 to 12 months, depending on the complexity of the legacy database and the number of microservices required. We use the Strangler Fig Pattern to migrate module by module, ensuring zero operational downtime."
  },
  {
    question: "Do we own the Intellectual Property (IP) for the custom software you build?",
    answer: "Yes. Unlike SaaS platforms where you pay perpetual per-seat licensing, you own 100% of the custom codebase and intellectual property from day one. There are no vendor lock-ins."
  },
  {
    question: "How do you handle security for FinTech and HealthTech applications?",
    answer: "We adhere to strict SOC 2, HIPAA, and PCI-DSS compliance standards. Our architecture incorporates zero-trust principles, end-to-end encryption (AES-256), automated vulnerability scanning in our CI/CD pipelines, and regular third-party penetration testing."
  },
  {
    question: "Why do you recommend React Native for some enterprise apps and Flutter for others?",
    answer: "We recommend React Native when your organization already utilizes a massive React web ecosystem and you want to share business logic across platforms. We recommend Flutter for highly graphical, UI-heavy applications that require pixel-perfect rendering across fragmented Android devices."
  },
  {
    question: "Can you rescue an ongoing software project that is failing?",
    answer: "Yes. We offer Architecture Audits where we assess the existing codebase, identify bottlenecks, technical debt, and security vulnerabilities. Following the audit, our elite engineering pod can step in to refactor the architecture and get the project back on track."
  }
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
            Answers to technical and strategic questions about our enterprise engineering process.
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
