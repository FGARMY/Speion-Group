import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Database, Users, TrendingUp, Target, PieChart, Layers } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "CRM Development Services | Sales & Customer Data | Speion",
  description: "Speion builds Custom Customer Relationship Management (CRM) software to track leads, manage pipelines, and boost enterprise conversions.",
  pathname: "/services/crm-development",
});

export default function CrmDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-orange-500/30">
      <ServicePageSchema
        serviceName="CRM Development"
        serviceDescription="Speion builds Custom Customer Relationship Management (CRM) software to track leads, manage pipelines, and boost enterprise conversions."
        pathname="/services/crm-development"
        faqs={[
          { question: "Why build a custom CRM instead of using Salesforce or HubSpot?", answer: "Off-the-shelf CRMs charge per-seat licensing fees that scale exponentially. A custom CRM built by Speion costs a one-time development fee, you own the IP forever, and it's tailored exactly to your sales pipeline — no unnecessary features bloating your workflow, no vendor lock-in." },
          { question: "How long does it take to build a custom CRM?", answer: "A basic CRM with lead tracking, contact management, and pipeline visualization takes 6-10 weeks. Enterprise CRMs with advanced analytics, multi-team RBAC, email integrations, and API connections to your existing tools take 3-6 months." },
          { question: "Can Speion migrate data from our existing CRM to a custom solution?", answer: "Yes. We handle complete data migration from Salesforce, HubSpot, Zoho, or any other CRM. We map your existing data schema, clean and validate records, and import everything into your new custom CRM with zero data loss." },
        ]}
      />
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Database size={14} className="text-orange-600 dark:text-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Data Engineering</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Master Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-400">
                Customer Data
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              Off-the-shelf CRMs are bloated and rigid. We build hyper-customized Customer Relationship Management software designed precisely for your unique sales funnel.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Build Your CRM
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
              src="/services/crm.png" 
              alt="Custom CRM Dashboard" 
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
            <div className="w-12 h-[2px] bg-orange-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Target className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Pipeline & Lead Management</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Visualize your entire sales funnel with custom Kanban boards and lists. Automatically capture leads from your website, ads, and emails, and route them to the right sales rep instantly.
              </p>
              <ul className="space-y-2">
                {['Automated Lead Scoring', 'Custom Sales Stages', 'Omnichannel Communication Log'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-orange-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Capability 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Customer 360° View</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Every email, phone call, purchase, and support ticket associated with a client, accessible in a single unified profile.
              </p>
            </div>
            
            {/* Capability 3 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <PieChart className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Advanced Reporting</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Real-time analytics dashboards tracking conversion rates, sales rep performance, and revenue forecasting.
              </p>
            </div>
            
            {/* Capability 4 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <Layers className="w-12 h-12 text-orange-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Marketing & Sales Automation</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl relative z-10">
                Trigger automated email drip campaigns, internal Slack notifications, and follow-up reminders based on user actions. We make sure no lead ever slips through the cracks.
              </p>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-tl-[100%] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Data Infrastructure Stack</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light">Built on fast, secure, and relational technologies.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['PostgreSQL', 'GraphQL', 'Node.js', 'React.js', 'Prisma ORM', 'Twilio API', 'SendGrid', 'Redis'].map((tech, i) => (
              <div key={i} className="py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-orange-500/50 hover:text-orange-600 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-[2px] bg-orange-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center">Implementation Process</h2>
            <div className="w-12 h-[2px] bg-orange-600"></div>
          </div>
          
          <div className="space-y-12">
            {[
              { num: "01", title: "Sales Funnel Mapping", desc: "We map out your exact sales process—from initial contact to close—to ensure the CRM reflects reality." },
              { num: "02", title: "Database Architecture", desc: "Designing a highly relational database schema to correctly associate leads, companies, deals, and activities." },
              { num: "03", title: "UI & Dashboard Build", desc: "Developing a lightning-fast React frontend so your sales team can update records without page reloads or friction." },
              { num: "04", title: "Third-Party Integrations", desc: "Connecting the CRM to your email provider (Gmail/Outlook), VoIP systems, and marketing platforms." },
              { num: "05", title: "Data Migration", desc: "Importing your existing customer data from HubSpot, Salesforce, or Excel securely into the new system." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-900 border border-slate-800 group-hover:border-orange-500 group-hover:bg-orange-600 flex items-center justify-center font-display font-bold text-xl transition-all duration-300">
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
