import { Star, Users, Award, Clock } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="relative -mt-16 z-30 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-slate-100 dark:border-slate-800 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-rose-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-200 dark:border-slate-700">
              <Star size={24} className="group-hover:fill-white" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white leading-tight">4.9 / 5.0</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">Client Rating</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-rose-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-200 dark:border-slate-700">
              <Users size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white leading-tight">50+ Global</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">Enterprises</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-rose-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-200 dark:border-slate-700">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white leading-tight">Elite Engineers</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">Top 1% Talent</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-rose-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-200 dark:border-slate-700">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white leading-tight">99.99%</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">Uptime SLA</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
