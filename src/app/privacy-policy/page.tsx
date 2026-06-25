import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy | Speion",
  description: "Our Privacy Policy detailing how we handle, process, and protect your data.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Last updated: October 2026</p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none prose-h2:text-2xl prose-h2:font-display prose-h2:mb-4 prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:font-light prose-p:leading-relaxed">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including your name, email address, phone number, and any other information you choose to provide when contacting us or using our services. We also automatically collect certain technical information when you visit our website, such as IP addresses and browser types.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to operate, maintain, and provide the features of our services, to communicate with you, and to understand and analyze how you use our website to improve our offerings.
            </p>

            <h2>3. Data Security and GDPR Compliance</h2>
            <p>
              We implement appropriate technical and organizational security measures designed to protect your personal information against accidental or unlawful destruction, loss, or alteration. We fully comply with international data protection regulations including the GDPR and CCPA.
            </p>

            <h2>4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@speion.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
