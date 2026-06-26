"use client";

import Link from "next/link";
import { Apple, Play } from "lucide-react"; // using Play as a stand-in for Google Play

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="w-full">
        
        {/* Seamless Container */}
        <div className="px-8 sm:px-16 pt-16 sm:pt-24 pb-0 relative overflow-hidden flex flex-col justify-between">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10">
            
            {/* Left Side: Logo & App Buttons */}
            <div className="lg:col-span-5 flex flex-col items-start justify-between">
              <div>
                <Link href="/" className="inline-block mb-16" aria-label="Speion Home">
                  <div className="flex items-center gap-3">
                    {/* Placeholder for Logo if image fails, but using the existing paths */}
                    <img src="/images/logo-dark.webp" alt="Speion" className="h-8 md:h-10 w-auto object-contain block dark:hidden" />
                    <img src="/images/logo-light.webp" alt="Speion" className="h-8 md:h-10 w-auto object-contain hidden dark:block" />
                    {/* Fallback Text if image isn't loaded */}
                    <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white hidden">Speion</span>
                  </div>
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                <button className="bg-black dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors shadow-sm">
                  <Apple size={24} fill="currentColor" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] leading-tight text-slate-300">Download on the</span>
                    <span className="text-sm font-semibold leading-tight">App Store</span>
                  </div>
                </button>
                <button className="bg-black dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl px-4 py-2.5 flex items-center gap-3 transition-colors shadow-sm">
                  <Play size={20} fill="currentColor" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] leading-tight text-slate-300">GET IT ON</span>
                    <span className="text-sm font-semibold leading-tight">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Side: Links */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-4">
              
              <div className="flex flex-col gap-6">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm tracking-wide">What we do</h4>
                <ul className="space-y-4">
                  <li><Link href="/services/web-development" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Web Development</Link></li>
                  <li><Link href="/services/mobile-app-development" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Mobile Apps</Link></li>
                  <li><Link href="/services/custom-software-development" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Enterprise</Link></li>
                  <li><Link href="/services/social-media-management" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Marketing</Link></li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm tracking-wide">Industries</h4>
                <ul className="space-y-4">
                  <li><Link href="/industries/healthcare" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Healthcare</Link></li>
                  <li><Link href="/industries/fintech" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">FinTech</Link></li>
                  <li><Link href="/industries/ecommerce" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">E-Commerce</Link></li>
                  <li><Link href="/industries/logistics" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Logistics</Link></li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm tracking-wide">About</h4>
                <ul className="space-y-4">
                  <li><Link href="/insights" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Blog</Link></li>
                  <li><Link href="/about" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Meet The Team</Link></li>
                  <li><Link href="/careers" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-slate-900 dark:text-white font-bold text-sm tracking-wide">Social Media</h4>
                <ul className="space-y-4">
                  <li><a href="https://instagram.com/speiongroup" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Instagram</a></li>
                  <li><a href="https://linkedin.com/company/speion" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">LinkedIn</a></li>
                  <li><a href="https://facebook.com/speion" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors">Facebook</a></li>
                </ul>
              </div>

            </div>
          </div>

          <div className="w-full flex justify-between items-center text-xs text-slate-400 mt-16 mb-4 relative z-10 px-2 sm:px-0">
             <span>&copy; {new Date().getFullYear()} Speion.</span>
             <div className="flex gap-4">
               <Link href="/privacy-policy" className="hover:text-slate-600 dark:hover:text-slate-300">Privacy</Link>
               <Link href="/terms" className="hover:text-slate-600 dark:hover:text-slate-300">Terms</Link>
             </div>
          </div>

          {/* Massive Bottom Text */}
          <div className="relative w-full flex justify-center mt-auto pointer-events-none select-none">
            <span className="text-[25vw] sm:text-[22vw] lg:text-[15rem] font-display font-black tracking-tighter leading-[0.7] text-slate-900 dark:text-white transform translate-y-[18%]">
              Speion
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
