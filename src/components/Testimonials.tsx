import { Star, Building2, Hexagon, Globe, Play } from "lucide-react";

export default function Testimonials() {
  const videoTestimonials = [
    {
      thumbnailUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      author: "Sarah Jenkins",
      role: "CEO, TechNova"
    },
    {
      thumbnailUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
      author: "Michael Chang",
      role: "Founder, RetailFlow"
    },
    {
      thumbnailUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
      author: "Elena Rodriguez",
      role: "VP Engineering, MedSync"
    }
  ];

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
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Decor */}


      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100/50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-500">Founders</span> <br className="hidden sm:block" />
            & Engineering Leaders
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Real success stories from enterprises and startups we've partnered with to build world-class software.
          </p>
        </div>

        {/* Video Reels Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 lg:mb-24 px-4 sm:px-12 lg:px-24">
          {videoTestimonials.map((video, idx) => (
            <div 
              key={idx} 
              className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(225,29,72,0.15)] dark:hover:shadow-[0_25px_50px_rgba(225,29,72,0.15)] transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-800"
            >
              {/* Thumbnail */}
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.author} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" 
                  loading="lazy"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 pointer-events-none"></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white group-hover:bg-rose-500 group-hover:border-rose-400 transition-all duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <Play size={28} fill="currentColor" className="ml-1.5 sm:ml-2" />
                 </div>
              </div>

              {/* "Reels" badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                  Video Review
                </div>
              </div>

              {/* Details */}
              <div className="absolute bottom-0 left-0 w-full p-8 pb-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                 <h4 className="font-bold text-2xl text-white mb-1 tracking-tight">{video.author}</h4>
                 <p className="text-sm text-slate-300 font-medium">{video.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Text Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white dark:border-slate-800 shadow-[0_10px_40px_rgba(15,23,42,0.04)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative flex flex-col group hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_20px_60px_rgba(225,29,72,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-rose-100 dark:hover:border-rose-900/50"
            >

              {/* Quote mark decoration */}
              <div className="absolute top-4 right-8 text-8xl text-slate-100 dark:text-slate-800/50 font-serif leading-none italic select-none pointer-events-none group-hover:text-rose-50 dark:group-hover:text-rose-900/20 transition-colors duration-500">
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
