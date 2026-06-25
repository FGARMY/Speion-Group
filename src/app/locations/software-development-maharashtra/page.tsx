import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { MapPin, Code2, Rocket, Building2 } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Company in Maharashtra | Speion",
  description: "Speion is a leading Maharashtra software development company offering custom web, mobile, enterprise, and ERP solutions across the region.",
  pathname: "/locations/software-development-maharashtra",
  keywords: [
    "software development company Maharashtra",
    "custom software development Maharashtra",
    "enterprise software development Maharashtra",
    "Maharashtra IT services",
    "software development firm India",
  ],
});

export default function MaharashtraLocationPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <LocalBusinessSchema
        addressLocality="Maharashtra"
        addressRegion="Maharashtra"
        postalCode="400001"
        url="https://speion.com/locations/software-development-maharashtra"
        description={metadata.description ?? "Speion is a leading Maharashtra software development company."}
      />
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.4em] text-teal-500 font-bold mb-4">Maharashtra Software Development</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Leading Software Development Company in <span className="text-teal-400">Maharashtra</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Speion supports businesses across Maharashtra with custom software engineering, enterprise platforms, mobile apps, SaaS products, and digital transformation.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Custom Software",
                desc: "Build scalable enterprise applications, ERP systems, and SaaS products for Maharashtra businesses.",
                icon: Building2,
              },
              {
                title: "Mobile Apps",
                desc: "Design and develop Android and iOS apps that deliver a premium digital experience.",
                icon: Code2,
              },
              {
                title: "Digital Transformation",
                desc: "Modernize operations with automation, cloud migration, and AI-enabled workflows.",
                icon: Rocket,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
                  <div className="mb-6 w-14 h-14 rounded-3xl bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-300 flex items-center justify-center">
                    <Icon size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
