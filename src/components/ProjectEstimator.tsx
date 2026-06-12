"use client";

import { useState } from "react";
import { Calculator, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ProjectEstimator() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    type: "",
    timeline: "",
    complexity: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, send `selections` to API route
  };

  const getEstimate = () => {
    let base = 5000;
    if (selections.type === "Enterprise SaaS" || selections.type === "AI/ML Integration") base += 10000;
    if (selections.complexity === "High (Custom Backend & APis)") base *= 2;
    if (selections.complexity === "Medium (Standard SaaS)") base *= 1.5;
    if (selections.timeline === "1-2 Months (Rush)") base *= 1.3;
    
    return `$${Math.round(base).toLocaleString()}`;
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl text-center">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Estimate Generated!</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Based on your requirements, the estimated budget starts around <strong className="text-xl text-slate-900 dark:text-white">{getEstimate()}</strong>.
        </p>
        <p className="text-sm text-slate-500">We've sent a detailed breakdown to {selections.email}. One of our senior architects will reach out shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Calculator className="text-primary" /> Project Estimator
        </h3>
        <span className="text-sm font-bold text-slate-400">Step {step} of 4</span>
      </div>

      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-out" 
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      {step === 1 && (
        <div className="animate-fade-in-up">
          <h4 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-4">What type of project are you building?</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Web Application", "Mobile App (iOS/Android)", "Enterprise SaaS", "AI/ML Integration"].map((opt) => (
              <button 
                key={opt}
                onClick={() => { setSelections({ ...selections, type: opt }); handleNext(); }}
                className={`p-4 rounded-xl border text-left transition-all ${selections.type === opt ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'}`}
              >
                <span className={`font-medium ${selections.type === opt ? 'text-primary' : 'text-slate-700 dark:text-slate-300'}`}>{opt}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-in-up">
          <h4 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-4">What is the expected complexity?</h4>
          <div className="grid sm:grid-cols-1 gap-4">
            {["Low (MVP / Simple Template)", "Medium (Standard SaaS)", "High (Custom Backend & APis)"].map((opt) => (
              <button 
                key={opt}
                onClick={() => { setSelections({ ...selections, complexity: opt }); handleNext(); }}
                className={`p-4 rounded-xl border text-left transition-all ${selections.complexity === opt ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'}`}
              >
                <span className={`font-medium ${selections.complexity === opt ? 'text-primary' : 'text-slate-700 dark:text-slate-300'}`}>{opt}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-fade-in-up">
          <h4 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-4">What is your ideal timeline?</h4>
          <div className="grid sm:grid-cols-3 gap-4">
            {["1-2 Months (Rush)", "3-6 Months", "6+ Months (Flexible)"].map((opt) => (
              <button 
                key={opt}
                onClick={() => { setSelections({ ...selections, timeline: opt }); handleNext(); }}
                className={`p-4 rounded-xl border text-center transition-all ${selections.timeline === opt ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'}`}
              >
                <span className={`font-medium ${selections.timeline === opt ? 'text-primary' : 'text-slate-700 dark:text-slate-300'}`}>{opt}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="animate-fade-in-up">
          <h4 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-4">Where should we send your estimate?</h4>
          <form onSubmit={submitForm} className="space-y-4">
            <input 
              type="email" 
              required 
              placeholder="Enter your work email"
              value={selections.email}
              onChange={(e) => setSelections({ ...selections, email: e.target.value })}
              className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <button 
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-colors shadow-lg"
            >
              Reveal My Estimate
            </button>
          </form>
        </div>
      )}

      <div className="mt-8 flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
        <button 
          onClick={handlePrev} 
          disabled={step === 1}
          className={`flex items-center gap-2 text-sm font-bold ${step === 1 ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed' : 'text-slate-500 hover:text-primary transition-colors'}`}
        >
          <ArrowLeft size={16} /> Back
        </button>
        {step < 4 && (
          <button 
            onClick={handleNext}
            disabled={
              (step === 1 && !selections.type) || 
              (step === 2 && !selections.complexity) || 
              (step === 3 && !selections.timeline)
            }
            className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg transition-colors ${
              (step === 1 && !selections.type) || (step === 2 && !selections.complexity) || (step === 3 && !selections.timeline)
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary-dark shadow-md'
            }`}
          >
            Next <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
