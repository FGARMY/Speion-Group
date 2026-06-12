import { ShieldCheck, Zap, Code2, Clock } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Senior Technical Talent",
      desc: "Our engineering pods consist exclusively of senior-level developers who have architected and scaled systems to 1M+ active users.",
      icon: <ShieldCheck size={28} />,
      color: "bg-slate-100 text-rose-600 border-slate-200 dark:bg-slate-800 dark:text-rose-500 dark:border-slate-700"
    },
    {
      title: "Strict CI/CD Pipelines",
      desc: "We enforce 99.99% Uptime SLAs through automated testing, containerization, and continuous integration pipelines for every deployment.",
      icon: <Zap size={28} />,
      color: "bg-slate-100 text-red-600 border-slate-200 dark:bg-slate-800 dark:text-red-500 dark:border-slate-700"
    },
    {
      title: "Maintainable Architecture",
      desc: "We write modular, documented code that accelerates future feature development by up to 40% while eliminating critical technical debt.",
      icon: <Code2 size={28} />,
      color: "bg-slate-100 text-rose-600 border-slate-200 dark:bg-slate-800 dark:text-rose-500 dark:border-slate-700"
    },
    {
      title: "Transparent Sprints",
      desc: "No black boxes. You get access to our Jira/Linear boards and regular milestone demos so you always know the project status.",
      icon: <Clock size={28} />,
      color: "bg-slate-100 text-red-600 border-slate-200 dark:bg-slate-800 dark:text-red-500 dark:border-slate-700"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/50 relative transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-rose-600 dark:bg-rose-400 block"></span>
            Our Advantage
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
            Built for Scale. Engineered for ROI.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            We don't just write code. We architect systems that solve complex technical debt and drive revenue growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-[0_10px_40px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(idx + 1) * 0.15}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
