import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Speion",
  description: "Terms and conditions for using Speion's website and software development services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 mb-4">Terms of Service</h1>
            <p className="text-slate-500">Last updated: October 2026</p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none prose-h2:text-2xl prose-h2:font-display prose-h2:mb-4 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:font-light prose-p:leading-relaxed">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              The site and its original content, features, and functionality are owned by Speion and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2>3. Service Level Agreements (SLAs)</h2>
            <p>
              For our enterprise clients, specific SLAs regarding uptime, maintenance, and support are defined in individual Master Service Agreements (MSAs). This website's terms do not override specific contractual agreements.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              In no event shall Speion, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
