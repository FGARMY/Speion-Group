import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Services from "@/components/Services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Services | Speion Software Development Company",
  description: "Explore our comprehensive software development services, including web development, mobile apps, custom software, ERPs, CRMs, and UI/UX design.",
  pathname: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      {/* Spacer for sticky navbar */}
      <div className="pt-20"></div>

      {/* Services Component */}
      <Services />

      <CTA />
      <Footer />
    </main>
  );
}
