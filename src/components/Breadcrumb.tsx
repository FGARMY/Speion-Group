"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import React from "react";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate BreadcrumbList JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://speion.com${item.href}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      {/* Inject JSON-LD for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ol className="flex items-center flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
        <li>
          <Link 
            href="/" 
            className="flex items-center hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            <Home size={14} />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={item.href}>
              <li>
                <ChevronRight size={14} className="text-slate-300 dark:text-slate-600" />
              </li>
              <li>
                {isLast ? (
                  <span 
                    className="font-medium text-slate-800 dark:text-slate-200" 
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href} 
                    className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
