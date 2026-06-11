"use client";

import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Case Studies", path: "/case-studies" },
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
              ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40" 
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Speion Home" onClick={() => setMobileMenuOpen(false)}>
            <div className="bg-primary/10 text-primary w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white" aria-hidden="true">
              <Code2 size={24} />
            </div>
            <span className={`text-lg md:text-xl font-display font-bold ${scrolled || mobileMenuOpen ? "text-slate-900 dark:text-white" : "text-white"}`}>
              Speion <span className="font-semibold opacity-80">Group</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.label.toLowerCase().replace(" ", "-");
              return (
                <Link 
                  key={item.label} 
                  href={item.path}
                  className={`text-sm font-medium transition-all relative group ${
                    isActive 
                      ? (scrolled ? "text-primary dark:text-primary-light" : "text-white") 
                      : (scrolled ? "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white" : "text-white/80 hover:text-white")
                  }`}
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} aria-hidden="true"></span>
                </Link>
              );
            })}
          </nav>

          {/* Call to Action - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle scrolled={scrolled || mobileMenuOpen} />
            <Link 
              href="/contact" 
              className={`font-medium px-6 py-2.5 rounded-full text-sm transition-all shadow-sm font-display hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
                scrolled || mobileMenuOpen
                  ? "bg-primary text-white hover:bg-primary-dark" 
                  : "bg-white text-primary hover:bg-slate-50"
              }`}
              aria-label="Start Project"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle scrolled={scrolled || mobileMenuOpen} />
            <button 
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                scrolled || mobileMenuOpen ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
              }`}
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
          className={`lg:hidden fixed top-[100px] left-4 right-4 z-50 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl transition-all duration-500 origin-top ${
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
                  className={`text-lg font-display font-semibold transition-all flex items-center justify-between ${
                    isActive ? "text-primary translate-x-1 dark:text-primary-light" : "text-slate-600 dark:text-slate-300"
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
              className="bg-primary text-white text-center py-4 rounded-2xl font-display font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all active:scale-[0.98]"
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
