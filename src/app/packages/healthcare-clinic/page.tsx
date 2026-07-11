import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { ShieldCheck, ArrowRight, CheckCircle2, TrendingUp, Users, Target, Activity, HeartPulse, Stethoscope } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Healthcare Clinic Portal Package | Speion",
  description: "Complete technical package for Healthcare Clinics including Appointment Booking, Patient CRM, and Telemedicine Setup.",
  pathname: "/packages/healthcare-clinic",
});

export default function HealthcareClinicPackage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <ShieldCheck size={14} className="text-teal-600 dark:text-teal-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Business Package</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Healthcare Clinic <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-500 dark:to-emerald-400">
                Digital Portal
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              Modernize your medical practice with secure, compliant portals, automated scheduling, and integrated telemedicine features to deliver world-class patient care.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience / Business Value */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Patient First <span className="text-teal-500">Care</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Reduce front-desk bottlenecks and eliminate scheduling errors. This package provides a secure, streamlined digital experience that patients expect from modern healthcare providers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center shrink-0 mt-1">
                    <Activity size={16} className="text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Reduce No-Shows</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Automated SMS and email reminders drastically decrease missed appointments.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Data Privacy First</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Architected with strict data security measures to protect sensitive health records.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Ideal For:</h3>
               <ul className="space-y-4 relative z-10">
                 {['Independent Dental & Medical Clinics', 'Specialty Healthcare Centers', 'Physiotherapy & Wellness Studios', 'Veterinary Clinics', 'Telehealth Practitioners'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                     <Target size={18} className="text-teal-500 shrink-0" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features Bento Grid */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">The Medical Suite</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">A unified system for doctors, staff, and patients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Stethoscope className="w-10 h-10 text-teal-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Patient Portal & Booking</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">A user-friendly web portal where patients can self-schedule appointments based on live doctor availability.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Live Calendar Syncing', 'Doctor Profiles & Reviews', 'Digital Registration Forms', 'Automated Waitlists'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-teal-500"/> {f}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <HeartPulse className="w-10 h-10 text-teal-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Telemedicine Ready</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Secure video consultation integration with Zoom or custom WebRTC links.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-10 h-10 text-teal-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Role-Based Access</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Distinct dashboards for Doctors, Receptionists, and Administrators.</p>
            </div>

            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Patient CRM (EMR Lite)</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">A centralized database to track patient history, upcoming appointments, and billing.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-emerald-500" size={20}/> Secure Document Uploads (Prescriptions/Labs)</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-emerald-500" size={20}/> Encrypted Database Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6 bg-slate-100 dark:bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Secure Technology Stack</h2>
            <p className="text-slate-600 dark:text-slate-400">Enterprise security standards to protect patient data.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Next.js', icon: SiNextdotjs, color: '' },
              { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
              { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
              { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
              { name: 'AWS', icon: FaAws, color: '#232F3E' }
            ].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="group py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center gap-3 font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-default">
                  <Icon 
                    className="w-6 h-6 text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                    style={{ '--hover-color': tech.color || 'currentColor' } as React.CSSProperties}
                  />
                  <span className="hidden md:inline">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Delivery Timeline</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Launch your digital clinic in 4-6 weeks.</p>
          </div>
          
          <div className="space-y-8">
            {[
              { week: "Week 1", title: "Workflow Analysis & Design", desc: "Mapping your clinic's scheduling workflow and designing the patient portal." },
              { week: "Weeks 2-3", title: "Portal Development", desc: "Building the Next.js patient interface and the doctor/staff dashboard." },
              { week: "Week 4", title: "Database & Security Setup", desc: "Configuring the secure PostgreSQL database and role-based authentication." },
              { week: "Weeks 5-6", title: "Testing & Staff Training", desc: "End-to-end testing, security audits, and training your reception staff on the new system." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 shrink-0 rounded-xl bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm text-center">
                  {step.week}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
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
