"use client";

import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Locations", path: "/locations" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" }
];

/**
 * Navbar component for Speion website.
 * Features a sticky header with a backdrop blur effect on scroll and a mobile-responsive menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "py-3" : "py-8"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div 
          className={`flex items-center justify-between rounded-full px-6 md:px-8 py-3 transition-all duration-500 ease-in-out relative z-50 ${
            scrolled || mobileMenuOpen
              ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/40 dark:border-slate-800/50" 
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group" aria-label="Speion Home" onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/images/Primary-white.png" alt="Speion" className="h-8 md:h-10 w-auto object-contain invert dark:invert-0" />
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white">Speion</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.label.toLowerCase().replace(" ", "-");
              return (
                <Link 
                  key={item.label} 
                  href={item.path}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    isActive 
                      ? "text-rose-600 dark:text-rose-400" 
                      : "text-slate-600 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400"
                  }`}
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle scrolled={scrolled || mobileMenuOpen} />
            <Link 
              href="/contact" 
              className="font-medium px-6 py-2.5 rounded-full text-sm transition-all shadow-sm font-display hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 bg-pink-600 text-white hover:bg-pink-700"
              aria-label="Start Project"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle scrolled={scrolled || mobileMenuOpen} />
            <button 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors text-slate-900 bg-slate-100 dark:text-white dark:bg-slate-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-all duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Content */}
        <div 
          className={`lg:hidden absolute top-20 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-3xl p-6 shadow-2xl dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300 z-50 ${
            mobileMenuOpen 
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.label.toLowerCase().replace(" ", "-");
              return (
                <Link 
                  key={item.label} 
                  href={item.path}
                  className={`text-2xl font-display font-semibold tracking-tight transition-all flex items-center justify-between group ${
                    isActive ? "text-primary translate-x-1 dark:text-primary-light" : "text-slate-800 dark:text-slate-200"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {item.label}
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </Link>
              );
            })}
            <hr className="border-slate-100 dark:border-slate-800" />
            <Link 
              href="/contact" 
              className="bg-pink-600 text-white text-center py-4 rounded-2xl font-display font-bold shadow-lg shadow-pink-600/20 hover:bg-pink-700 transition-all active:scale-[0.98]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Project
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
