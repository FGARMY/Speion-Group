import { Lightbulb } from "lucide-react";
import React from "react";

interface TLDRProps {
  summary: string;
}

/**
 * TLDR component designed for AEO (Answer Engine Optimization)
 * Places a semantically bolded, highlighted answer box at the top of an article
 * to feed Answer Engines like Perplexity and Google SGE.
 */
export default function TLDR({ summary }: TLDRProps) {
  return (
    <aside 
      className="my-8 p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50"
      aria-label="Quick Summary"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 p-2 rounded-xl flex-shrink-0">
          <Lightbulb size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2 font-display">
            Quick Answer (TL;DR)
          </h3>
          <p className="text-amber-800 dark:text-amber-200/90 leading-relaxed font-medium">
            {summary}
          </p>
        </div>
      </div>
    </aside>
  );
}
