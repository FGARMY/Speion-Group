import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Packages from "@/components/Packages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industry Packages & Pre-Built Solutions | Speion",
  description: "Accelerate your digital product launch with pre-architected industry packages for SaaS startups, healthcare clinics, real estate, e-commerce, and export businesses.",
  pathname: "/packages",
});

export default function PackagesPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      {/* Spacer for sticky navbar */}
      <div className="pt-20"></div>

      <Packages />

      <CTA />
      <Footer />
    </main>
  );
}
