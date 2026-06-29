"use client";

import { Phone, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Delay the appearance of the contact buttons slightly
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWidgetVisible(true);
    }, 1000);
    
    // Handle scroll for the "back to top" button
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 transition-all duration-700 ${isWidgetVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 bg-white dark:bg-slate-900 text-rose-500 border border-slate-200 dark:border-slate-800 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 hover:bg-rose-500 hover:text-white hover:-translate-y-1 active:scale-95 group ${
          isScrolled ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} className="group-hover:animate-bounce-short" />
      </button>

      {/* Email */}
      <a 
        href="mailto:speiongroup@gmail.com"
        className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:scale-110 hover:text-rose-500 hover:border-rose-200 transition-all group"
        aria-label="Email Us"
        title="Email Us"
      >
        <Mail size={20} className="group-hover:animate-pulse" />
      </a>
      
      {/* Phone */}
      <a 
        href="tel:+917758866318"
        className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:scale-110 hover:text-blue-500 hover:border-blue-200 transition-all group"
        aria-label="Call Us"
        title="Call Us"
      >
        <Phone size={20} className="group-hover:animate-pulse" />
      </a>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/7758866318"
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 hover:bg-[#20bd5a] transition-all group"
        aria-label="WhatsApp"
        title="WhatsApp Us"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:animate-pulse">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>

    </div>
  );
}
