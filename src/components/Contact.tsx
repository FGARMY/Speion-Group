"use client";

import { MapPin, Phone, Mail, Send, CheckCircle2, ArrowRight } from "lucide-react";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

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
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-rose-400/20 dark:bg-rose-600/10 rounded-full blur-3xl -translate-x-1/2 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        
        <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-3xl border border-white/50 dark:border-slate-800/50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side: Info */}
            <div className="flex flex-col h-full justify-center">
              <div className="inline-flex items-center gap-2 bg-rose-100/50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest mb-8 w-fit shadow-sm">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                Contact Us
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                Get in Touch with <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-500">Our Engineers</span>
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-12 max-w-lg">
                Have a project in mind or need a technical consultation? We&apos;re here to help. Reach out through the form or our contact details below.
              </p>

              <div className="space-y-8 mt-auto">
                {[
                  { icon: <MapPin size={22} />, title: "HQ Address", text: <a href="https://maps.app.goo.gl/ACfvVXNsbz4CnaEz7" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">Parklane Life Season Plus, Dhanori,<br/>Pune, Maharashtra 411015</a> },
                  { icon: <Phone size={22} />, title: "Phone Number", text: <a href="tel:+917758866318" className="hover:text-rose-500 transition-colors">+91 77588 66318</a> },
                  { icon: <Mail size={22} />, title: "Email Support", text: <ObfuscatedEmail className="hover:text-rose-500 transition-colors" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800/80 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-rose-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                      <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-white dark:border-slate-800 relative">
              
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gradient-to-br from-rose-400 to-indigo-500 rounded-full blur-3xl opacity-20 dark:opacity-30 pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                {/* Honeypot field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="fax">Fax Number</label>
                  <input id="fax" name="fax" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <input 
                      type="text" id="name" name="name" required
                      className="block px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-950/50 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 peer transition-all" 
                      placeholder=" " 
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="relative">
                    <input 
                      type="email" id="email" name="email" required
                      className="block px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-950/50 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 peer transition-all" 
                      placeholder=" " 
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <input 
                      type="tel" id="phone" name="phone" required
                      className="block px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-950/50 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 peer transition-all" 
                      placeholder=" " 
                    />
                    <label 
                      htmlFor="phone" 
                      className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
                    >
                      Phone Number
                    </label>
                  </div>

                  <div className="relative">
                    <input 
                      type="text" id="company" name="company"
                      className="block px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-950/50 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 peer transition-all" 
                      placeholder=" " 
                    />
                    <label 
                      htmlFor="company" 
                      className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
                    >
                      Company Name (Optional)
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <select 
                    id="subject" name="subject" required defaultValue=""
                    className="block px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-950/50 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">Select a subject</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="enterprise">Enterprise Software</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  <label 
                    htmlFor="subject" 
                    className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 pointer-events-none"
                  >
                    Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea 
                    id="message" name="message" rows={4} required
                    className="block px-5 pb-3 pt-6 w-full text-sm text-slate-900 bg-slate-50 dark:bg-slate-950/50 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-rose-500 focus:border-rose-500 peer transition-all resize-none" 
                    placeholder=" " 
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-rose-600 peer-focus:dark:text-rose-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 pointer-events-none"
                  >
                    Tell us about your project requirements...
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={formState !== 'idle'}
                  className={`w-full py-4 mt-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group/btn ${
                    formState === 'success' 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-rose-600 hover:bg-rose-500 text-white shadow-[0_8px_20px_rgba(225,29,72,0.25)] dark:shadow-[0_8px_20px_rgba(225,29,72,0.15)] hover:-translate-y-1 active:translate-y-0'
                  }`}
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    {formState === 'idle' && (
                      <>
                        Send Your Message
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                    {formState === 'sending' && (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    )}
                    {formState === 'success' && (
                      <>
                        <CheckCircle2 size={18} />
                        Message Sent Successfully
                      </>
                    )}
                  </span>
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
