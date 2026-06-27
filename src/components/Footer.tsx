"use client";

import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-100 dark:border-slate-800 overflow-hidden relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pt-16 sm:pt-24 pb-12 flex flex-col justify-between min-h-[50vh]">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start z-10 relative">

          {/* Left Side: Contact & Subscribe */}
          <div className="mb-16 lg:mb-0 w-full lg:w-auto">
            <p className="text-slate-400 font-medium text-sm mb-2">Contact us at</p>
            <p className="text-slate-800 dark:text-slate-200 font-bold text-lg mb-8">speiongroup@gmail.com</p>

            <form className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full p-1.5 w-full max-w-sm shadow-sm transition-shadow focus-within:shadow-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-5 py-3 text-sm outline-none text-slate-700 dark:text-slate-300 placeholder-slate-400"
                required
              />
              <HoverBorderGradient
                as="button"
                type="submit"
                containerClassName="shrink-0 rounded-full"
                className="bg-black dark:bg-white text-white dark:text-black px-5 sm:px-8 py-3 font-semibold text-sm h-full flex items-center justify-center"
              >
                Subscribe
              </HoverBorderGradient>
            </form>
          </div>

          {/* Right Side: Links */}
          <div className="flex flex-wrap lg:flex-nowrap gap-10 sm:gap-16 lg:gap-24 text-left w-full lg:w-auto justify-start lg:justify-end">

            <div className="flex flex-col items-start lg:items-end gap-5">
              <h4 className="text-slate-400 font-semibold text-sm mb-2">Links</h4>
              <ul className="flex flex-col items-start lg:items-end gap-3.5">
                <li><Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Contact</Link></li>
                <li><Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">About Us</Link></li>
              </ul>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-5">
              <h4 className="text-slate-400 font-semibold text-sm mb-2">More Resources</h4>
              <ul className="flex flex-col items-start lg:items-end gap-3.5">
                <li><Link href="/insights" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Blogs</Link></li>
                <li><Link href="/terms" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund-policy" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Refund Policy</Link></li>
              </ul>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-5">
              <h4 className="text-slate-400 font-semibold text-sm mb-2">Social Media</h4>
              <ul className="flex flex-col items-start lg:items-end gap-3.5">
                <li><a href="https://instagram.com/speiongroup" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Instagram</a></li>
                <li><a href="https://facebook.com/speion" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">Facebook</a></li>
                <li><a href="https://wa.me/7758866318" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-32 w-full relative flex items-end justify-center z-10 pt-12 min-h-[120px] lg:min-h-[160px]">

          {/* Massive Text (Centered behind) */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none -z-10 overflow-hidden">
            <span className="text-[14vw] md:text-[180px] lg:text-[200px] font-display font-medium tracking-wide text-slate-100 dark:text-slate-900/40 select-none leading-[0.75] mb-2 lg:mb-4">
              SPEION
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
