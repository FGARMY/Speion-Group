"use client";

import { useEffect, useRef } from "react";

interface ObfuscatedEmailProps {
  className?: string;
}

/**
 * Renders the company email as a clickable mailto: link, but only after
 * client-side hydration. The server-rendered HTML contains a non-scrapable
 * placeholder, so bots crawling the raw HTML source will never find the
 * real email address.
 */
export default function ObfuscatedEmail({ className }: ObfuscatedEmailProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Split into parts so the full address never appears in the JS bundle
    // as a single scannable string.
    const parts = ["speion", "gorup", "@", "gmail", ".", "com"];
    const assembled = parts[0] + parts[1] + parts[2] + parts[3] + parts[4] + parts[5];

    const anchor = document.createElement("a");
    anchor.href = `mailto:${assembled}`;
    anchor.textContent = assembled;
    anchor.className = className || "";

    // Replace placeholder text with the real link
    ref.current.textContent = "";
    ref.current.appendChild(anchor);
  }, [className]);

  // Server-rendered fallback — bots see this, users see the real link after hydration
  return <span ref={ref}>Get in touch via email</span>;
}
