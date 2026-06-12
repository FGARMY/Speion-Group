"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem("speion_cookie_consent");
    if (!hasAccepted) {
      // Small delay so it doesn't pop up instantly
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("speion_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-6 z-[9999] animate-fade-in-up">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-slate-900 dark:text-white font-bold text-lg">Cookie Consent</h3>
        <button onClick={() => setIsVisible(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
          <X size={20} />
        </button>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 font-light leading-relaxed">
        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
      </p>
      <div className="flex gap-3">
        <button onClick={acceptCookies} className="flex-1 bg-rose-600 text-white font-semibold py-2 rounded-xl text-sm hover:bg-rose-500 transition-colors">
          Accept All
        </button>
        <button onClick={() => setIsVisible(false)} className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold py-2 rounded-xl text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          Reject
        </button>
      </div>
    </div>
  );
}
