import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Case Studies | Speion Software Development",
  description: "Explore our portfolio of scalable web apps, mobile applications, and enterprise software solutions built by Speion.",
};

export default function CaseStudiesPage() {
  const projects = [
    {
      title: "FinTech Mobile Banking App",
      client: "Global Financial Services",
      desc: "Built a secure, scalable mobile banking application using React Native and Node.js. Achieved 99.99% uptime and handled 1M+ daily active users.",
      tech: ["React Native", "Node.js", "AWS", "PostgreSQL"],
    },
    {
      title: "Enterprise ERP System",
      client: "Manufacturing Corp",
      desc: "Modernized a legacy ERP system, migrating it to a cloud-native Next.js and Python architecture. Improved processing speed by 40%.",
      tech: ["Next.js", "Python", "Google Cloud", "MongoDB"],
    },
    {
      title: "Healthcare SaaS Platform",
      client: "MedTech Innovations",
      desc: "Developed a HIPAA-compliant SaaS platform for telemedicine. Implemented real-time video streaming and encrypted patient records.",
      tech: ["React", "Go", "WebRTC", "Docker"],
    }
  ];

  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Work</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover how we've helped ambitious companies scale their operations with custom software engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 block">{project.client}</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 font-light">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
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
