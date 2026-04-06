import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

// Premium Landing Components (Critical - Direct Import)
import Hero from '../components/landing/Hero';
import MagnetCursor from '../components/landing/MagnetCursor';

// Below-the-fold Components (Lazy Loaded)
const LogoTicker = lazy(() => import('../components/landing/LogoTicker'));
const ServicesGrid = lazy(() => import('../components/landing/ServicesGrid'));
const WorkShowcase = lazy(() => import('../components/landing/WorkShowcase'));
const ImpactCTA = lazy(() => import('../components/landing/ImpactCTA'));

// CSS for the new system
import '../landing.css';

const LoadingFallback = () => (
  <div className="section-loader">
    <div className="loader-glow"></div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="premium-landing">
      <SEO
        title="Web Development & AI Automation Agency — SaaS Experts"
        description="Speion is a web development and AI automation agency building high-performance websites, SaaS platforms, and business automation systems. Get a free strategy session."
        path="/"
        keywords="web development agency, AI automation services, SaaS development company, digital agency india, app development pune"
        breadcrumbs={[{ name: 'Home', path: '/' }]}
      />
      {/* Global Interactive Elements */}
      <MagnetCursor />
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section (Critical Layer) */}
      <Hero />

      {/* Lazy Loaded High-Impact Sections */}
      <Suspense fallback={<LoadingFallback />}>
        {/* Social Proof (Infinite Logo Ticker) */}
        <LogoTicker />

        <main>
          {/* Services & Capabilities (3D Tilt Cards) */}
          <div id="services">
            <ServicesGrid />
          </div>

          {/* Featured Projects (3D Parallax Grid) */}
          <div id="work">
            <WorkShowcase />
          </div>

          {/* Final High-Impact Conversion */}
          <ImpactCTA />
        </main>
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
