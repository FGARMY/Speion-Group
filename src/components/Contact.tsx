"use client";

import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
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
    <section id="contact" className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-transparent relative overflow-hidden transition-colors duration-500">
      {/* Background Decals */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
              Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 mb-8 tracking-tight">
              Get in Touch with Our <span className="text-primary italic">Engineers</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-12 max-w-lg">
              Have a project in mind or need a technical consultation? We&apos;re here to help. Reach out through the form or our contact details below.
            </p>

            <div className="space-y-8">
              {[
                { icon: <MapPin size={24} />, title: "HQ Address", text: <a href="https://maps.app.goo.gl/ACfvVXNsbz4CnaEz7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Parklane Life Season Plus, Dhanori,<br/>Pune, Maharashtra 411015</a> },
                { icon: <Phone size={24} />, title: "Phone Number", text: <a href="tel:+917758866318" className="hover:text-primary transition-colors">+91 77588 66318</a> },
                { icon: <Mail size={24} />, title: "Email Support", text: <a href="mailto:speiongorup@gmail.com" className="hover:text-primary transition-colors">speiongorup@gmail.com</a> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary dark:group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h4>
                    <div className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-[0_30px_100px_rgba(15,23,42,0.05)] border border-slate-100 dark:border-slate-800 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field to trap spambots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="fax">Fax Number</label>
                <input 
                  id="fax"
                  name="fax"
                  type="text" 
                  tabIndex={-1} 
                  autoComplete="off" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-700 transition-all text-slate-900 dark:text-slate-100"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="hello@company.com" 
                    required
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-700 transition-all text-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    required
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-700 transition-all text-slate-900 dark:text-slate-100"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Company Name</label>
                  <input 
                    id="company"
                    name="company"
                    type="text" 
                    placeholder="Your Company (Optional)" 
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-700 transition-all text-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                <div className="relative">
                  <select 
                    id="subject"
                    name="subject"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-700 transition-all appearance-none text-slate-900 dark:text-slate-100"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="enterprise">Enterprise Software</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4} 
                  placeholder="Tell us about your project requirements..." 
                  required
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-700 transition-all resize-none text-slate-900 dark:text-slate-100"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl ${
                  formState === 'success' 
                    ? 'bg-emerald-500 text-white shadow-emerald-200' 
                    : 'bg-pink-600 text-white shadow-pink-600/20 hover:bg-pink-700 hover:-translate-y-1 active:scale-95'
                }`}
              >
                {formState === 'idle' && (
                  <>
                    <Send size={18} />
                    Send Your Message
                  </>
                )}
                {formState === 'sending' && (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                )}
                {formState === 'success' && (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent Successfully
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
