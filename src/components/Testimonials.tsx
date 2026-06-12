import { Star, Building2, Hexagon, Globe } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "Speion completely transformed our legacy ERP system. Their team delivered a highly scalable cloud architecture that improved our processing speed by 40%. The communication was transparent throughout the agile sprints.",
      author: "Rajesh Kulkarni",
      role: "CTO, Manufacturing Firm",
      initials: "RK",
      color: "bg-slate-100 text-rose-600 dark:bg-slate-800 dark:text-rose-500",
      logo: <Building2 size={28} className="text-slate-300 dark:text-slate-600 mb-6" />
    },
    {
      text: "We partnered with Speion to build our mobile app from scratch. Not only did they deliver a stunning UI/UX, but the React Native codebase was incredibly clean and performant. Highly recommend their engineering team.",
      author: "Priya Sharma",
      role: "Founder, FinTech Startup",
      initials: "PS",
      color: "bg-slate-100 text-red-600 dark:bg-slate-800 dark:text-red-500",
      logo: <Hexagon size={28} className="text-slate-300 dark:text-slate-600 mb-6" />
    },
    {
      text: "Finding a reliable software development agency in Pune was tough until we found Speion. They act as an extension of our in-house team. The custom CRM they built for us has automated hundreds of hours of manual work.",
      author: "Amit Deshmukh",
      role: "VP Operations",
      initials: "AD",
      color: "bg-slate-100 text-rose-600 dark:bg-slate-800 dark:text-rose-500",
      logo: <Globe size={28} className="text-slate-300 dark:text-slate-600 mb-6" />
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-transparent transition-colors duration-500 relative">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-rose-600 dark:bg-rose-400 block"></span>
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            Real success stories from enterprises and startups we've partnered with.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-white dark:border-white/5 shadow-[0_10px_40px_rgba(15,23,42,0.05)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative flex flex-col group hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1"
            >

              {/* Quote mark decoration */}
              <div className="absolute top-4 right-8 text-8xl text-slate-50 dark:text-slate-800/50 font-serif leading-none italic select-none pointer-events-none group-hover:text-slate-100 dark:group-hover:text-slate-800 transition-colors duration-500">
                &ldquo;
              </div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {rev.logo}

              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-10 flex-grow relative z-10 italic">
                &ldquo;{rev.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 mt-auto relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold font-display shadow-sm transition-transform group-hover:scale-110 ${rev.color}`}>
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-200 leading-tight">{rev.author}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-light">{rev.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
