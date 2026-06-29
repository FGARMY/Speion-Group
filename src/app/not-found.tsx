"use client";

import Link from "next/link";
import { MoveLeft, Stethoscope, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-slate-900 h-24 w-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-xl w-full text-center relative z-10">
        <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-10 animate-bounce-short shadow-xl shadow-indigo-100/50">
          <Stethoscope size={48} />
        </div>
        
        <h1 className="text-8xl md:text-9xl font-display font-black text-slate-100 absolute -top-16 left-1/2 -translate-x-1/2 -z-10 select-none">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">
          Diagnosis: <span className="text-primary italic">Page Not Found</span>
        </h2>
        
        <p className="text-lg text-slate-500 font-light leading-relaxed mb-12">
          It seems the link you followed has been misplaced. No need to worry—even the best specialists lose their way sometimes. Let&apos;s get you back to safety.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/" 
            className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:bg-primary-dark hover:-translate-y-1 transition-all active:scale-95"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto bg-slate-100 text-slate-600 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-200 transition-all active:scale-95"
          >
            <MoveLeft size={20} />
            Previous Page
          </button>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 left-0 w-full text-center">
        <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">
          Dr. Sulakshane Clinic &bull; Excellence in Care
        </p>
      </div>
    </div>
  );
}
