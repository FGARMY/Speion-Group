import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us | Speion Software Development",
  description: "Get in touch with our elite software engineering team in Pune. Schedule a free technical consultation or request a project proposal.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <div className="pt-8 sm:pt-12">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
