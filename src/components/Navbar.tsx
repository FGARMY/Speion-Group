"use client";

import { Code2, Menu, X, ChevronDown, Monitor, Smartphone, Server, Blocks, Bot, Database, Share2, Globe, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const NAV_ITEMS = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Packages", path: "/packages" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" }
];

const SERVICES_MENU = [
  { label: "Web Development", path: "/services/web-development", icon: Monitor },
  { label: "Mobile Apps", path: "/services/mobile-app-development", icon: Smartphone },
  { label: "Custom Software", path: "/services/custom-software-development", icon: Code2 },
  { label: "ERP Solutions", path: "/services/erp-development", icon: Server },
  { label: "UI/UX Design", path: "/services/ui-ux-design", icon: Blocks },
  { label: "AI Automations", path: "/services/ai-automations", icon: Bot },
  { label: "CRM Development", path: "/services/crm-development", icon: Database },
  { label: "Social Media", path: "/services/social-media-management", icon: Share2 },
];

const PACKAGES_MENU = [
  { label: "Export Business", path: "/packages/export-business", icon: Globe },
  { label: "SaaS Startup MVP", path: "/packages/saas-startup-mvp", icon: Server },
  { label: "E-Commerce & Retail", path: "/packages/ecommerce-retail", icon: Zap },
  { label: "Healthcare Clinic", path: "/packages/healthcare-clinic", icon: ShieldCheck },
  { label: "Real Estate Agency", path: "/packages/real-estate-agency", icon: Blocks },
  { label: "Enterprise Custom", path: "/packages/enterprise-transformation", icon: Code2 },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? "py-3" : "py-8"
        }`}
    >
      <nav className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 transition-all duration-500 ease-in-out relative z-50 ${scrolled || mobileMenuOpen
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/40 dark:border-slate-800/50"
            : "bg-transparent border-transparent"
            }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group" aria-label="Speion Home" onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Image src="/images/Primary-white.png" alt="Speion" width={150} height={40} priority className="h-8 md:h-10 w-auto object-contain invert dark:invert-0" />
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white">Speion</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.label.toLowerCase().replace(" ", "-");
              
              if (item.label === "Services" || item.label === "Packages") {
                const isServices = item.label === "Services";
                const menuItems = isServices ? SERVICES_MENU : PACKAGES_MENU;
                
                return (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.path}
                      className={`flex items-center gap-1 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive
                        ? "text-rose-600 dark:text-rose-400"
                        : "text-slate-600 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400"
                        }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </Link>
                    
                    {/* Hover Mega Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-slate-900/50 p-4 w-[500px] grid grid-cols-2 gap-2">
                        {menuItems.map((menuItem, idx) => {
                          const Icon = menuItem.icon;
                          return (
                            <Link 
                              key={idx} 
                              href={menuItem.path}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group/item"
                            >
                              <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                                <Icon size={16} className="text-rose-600 dark:text-rose-500" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5 group-hover/item:text-rose-600 dark:group-hover/item:text-rose-400 transition-colors">
                                  {menuItem.label}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`py-4 text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive
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
            <Link href="/contact" className="flex items-center" aria-label="Start Project">
              <HoverBorderGradient
                as="div"
                containerClassName="rounded-full"
                className="font-medium px-6 py-2.5 bg-rose-600 text-white text-sm transition-all flex items-center justify-center"
              >
                Book Free Consultation Now
              </HoverBorderGradient>
            </Link>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle scrolled={scrolled || mobileMenuOpen} />
            <button
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors text-slate-900 bg-slate-100 dark:text-white dark:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Content */}
        <div
          className={`lg:hidden absolute top-[calc(100%+12px)] left-4 right-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800/80 transition-all duration-300 z-50 origin-top ${mobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-4 pointer-events-none"
            }`}
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.label.toLowerCase().replace(" ", "-");
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`py-4 px-2 text-[17px] font-medium tracking-tight border-b border-slate-100 dark:border-slate-800/50 flex items-center justify-between transition-colors ${isActive ? "text-rose-600 dark:text-rose-500" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-500' : 'bg-slate-50 dark:bg-slate-800/50 text-slate-400'}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              );
            })}
            
            <div className="mt-6">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-[15px] rounded-xl py-3.5 transition-transform active:scale-95 shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
