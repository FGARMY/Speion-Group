"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import ClientLogos from "@/components/ClientLogos";

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setFormState('success');
      form.reset();
      setTimeout(() => setFormState('idle'), 3000);
    } else {
      console.error(result.error);
      alert("Failed to send message: " + result.error);
      setFormState('idle');
    }
  };

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden bg-white dark:bg-slate-950 flex items-center py-24">
      {/* Content Canvas */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 h-full max-w-full mx-auto flex items-center justify-between -mt-16 lg:-mt-32">
        
        {/* Left Side Text */}
        <div className="hidden md:block ml-4 lg:ml-12 xl:ml-24 relative z-0">
          <h2 className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-bold text-slate-300 dark:text-slate-800 uppercase tracking-tighter leading-none select-none">
            Contact US
          </h2>
          <div className="mt-2 sm:mt-4 pl-2 lg:pl-4 flex items-center gap-4">
            <div className="w-12 sm:w-20 lg:w-24 h-[3px] bg-slate-400 dark:bg-slate-500 rounded-full"></div>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-500 dark:text-slate-400 tracking-tight">
              Have a Project ?
            </h3>
          </div>

          {/* Contact Details */}
          <div className="mt-24 lg:mt-32 pl-2 lg:pl-4 flex flex-col sm:flex-row gap-8 lg:gap-16 w-full max-w-3xl">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-3">Phone</h4>
              <p className="text-base lg:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                (+91) 77588 66318
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-3">Email</h4>
              <p className="text-base lg:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                speiongorup@gmail.com
              </p>
            </div>
          </div>
          
          <div className="absolute top-[100%] left-[-1rem] lg:left-[-4rem] xl:left-[-7rem] w-[100vw] mt-20 sm:mt-24 lg:mt-32 opacity-60 pointer-events-none -z-10">
            <ClientLogos />
          </div>
        </div>

        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 w-full max-w-[420px] ml-auto">
          
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="fax">Fax Number</label>
              <input id="fax" name="fax" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <input type="hidden" name="subject" value="general" />

            <div className="relative">
              <input 
                type="text" id="name" name="name" required
                className="block px-4 pb-2 pt-5 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-950/50 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-600 peer transition-all" 
                placeholder=" " 
              />
              <label 
                htmlFor="name" 
                className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-slate-800 peer-focus:dark:text-slate-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input 
                type="tel" id="phone" name="phone" required
                className="block px-4 pb-2 pt-5 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-950/50 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-600 peer transition-all" 
                placeholder=" " 
              />
              <label 
                htmlFor="phone" 
                className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-slate-800 peer-focus:dark:text-slate-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
              >
                Phone
              </label>
            </div>

            <div className="relative">
              <input 
                type="email" id="email" name="email" required
                className="block px-4 pb-2 pt-5 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-950/50 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-600 peer transition-all" 
                placeholder=" " 
              />
              <label 
                htmlFor="email" 
                className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-slate-800 peer-focus:dark:text-slate-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea 
                id="message" name="message" rows={4} required minLength={10}
                className="block px-4 pb-2 pt-5 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-950/50 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-slate-400 dark:focus:ring-slate-600 peer transition-all resize-none" 
                placeholder=" " 
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-slate-800 peer-focus:dark:text-slate-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
              >
                Description (Min 10 chars)
              </label>
            </div>

            <button 
              type="submit" 
              disabled={formState !== 'idle'}
              className={`w-full py-3.5 mt-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group/btn ${
                formState === 'success' 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-slate-900 hover:bg-black dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {formState === 'idle' && (
                  <>
                    Send Message
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
                {formState === 'sending' && (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <CheckCircle2 size={18} />
                    Sent Successfully
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
