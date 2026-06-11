import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us | Speion Software Development",
  description: "Get in touch with our elite software engineering team in Pune. Schedule a free technical consultation or request a project proposal.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <div className="pt-32">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
