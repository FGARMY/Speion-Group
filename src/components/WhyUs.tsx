import { ShieldCheck, Zap, Code2, Clock } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Elite Engineers",
      desc: "Top 1% of software engineers and architects with deep expertise in modern scalable frameworks and cloud infrastructure.",
      icon: <ShieldCheck size={28} />,
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Agile Methodology",
      desc: "Rapid sprints, continuous integration, and seamless deployment pipelines for faster time-to-market without technical debt.",
      icon: <Zap size={28} />,
      color: "bg-teal-50 text-teal-600 border-teal-100"
    },
    {
      title: "Clean Architecture",
      desc: "We write highly maintainable, documented, and modular code that can easily scale as your business demands grow.",
      icon: <Code2 size={28} />,
      color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      title: "On-Time Delivery",
      desc: "Proven track record of hitting strict deadlines with 100% transparency and regular milestone demonstrations.",
      icon: <Clock size={28} />,
      color: "bg-amber-50 text-amber-600 border-amber-100"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/50 relative transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 block"></span>
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
            Your Business Growth, Our Code
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            Scalable architecture, clean code, and a business-first approach that enterprise clients trust.
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
              <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center border-2 transition-transform group-hover:scale-110 ${item.color.replace('bg-', 'bg-opacity-50 dark:bg-opacity-20 bg-')}`}>
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
