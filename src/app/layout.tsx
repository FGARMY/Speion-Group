import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Speion | #1 Software Development Company in Nashik & Pune",
  description: "Leading software development company in Nashik & Pune. We build high-performance websites, custom software, mobile apps, SaaS platforms, and AI automation systems.",
  keywords: ["Software Development Company", "Web Development", "App Development Pune", "IT Company Nashik", "Speion Group", "AI Automation"],
  openGraph: {
    title: "Speion | #1 Software Development Company in Nashik & Pune",
    description: "Custom software, web & app development, AI automation, and SaaS solutions by Speion Group.",
    type: "website",
    locale: "en_IN",
    siteName: "Speion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speion | Software Development Company",
    description: "Custom software, web & app development in Nashik and Pune.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} font-sans scroll-smooth`}
    >
      <body className="antialiased bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:shadow-2xl"
          >
            Skip to Content
          </a>
          <ScrollProgress />
          <div id="main-content">
            {children}
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
