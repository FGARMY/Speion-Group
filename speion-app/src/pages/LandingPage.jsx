import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SystemGrid from '../components/SystemGrid';
import GeometricShapes from '../components/GeometricShapes';
import OrbitingElements from '../components/OrbitingElements';
import FlowDiagram from '../components/FlowDiagram';
import '../landing.css';

/* ─── Scroll reveal hook ─── */
const useScrollReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
};

/* ─── Navbar scroll effect ─── */
const useNavScroll = () => {
  useEffect(() => {
    const nav = document.querySelector('.landing-nav');
    const handleScroll = () => {
      if (window.scrollY > 60) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

const LogoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const PROCESS_STEPS = [
  { title: 'Client submits inquiry', desc: 'You describe your project through our intake form' },
  { title: 'Discovery & understanding', desc: 'We learn your business, products, and target market' },
  { title: 'Design & build', desc: 'Our team engineers your digital system from the ground up' },
  { title: 'Review & iterate', desc: 'You review, we refine — until it\'s exactly right' },
  { title: 'Deploy & launch', desc: 'Your system goes live, globally optimized and production-ready' },
];

const LandingPage = () => {
  const pageRef = useScrollReveal();
  useNavScroll();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page" ref={pageRef}>

      {/* ═══ NAVBAR ═══ */}
      <nav className="landing-nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <div className="nav-logo-icon"><LogoIcon /></div>
            <span className="nav-logo-text">Speion Group</span>
          </a>
          <div className="nav-links">
            <button className="nav-link" onClick={() => scrollTo('services')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Services</button>
            <button className="nav-link" onClick={() => scrollTo('capabilities')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Capabilities</button>
            <button className="nav-link" onClick={() => scrollTo('industries')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Industries</button>
            <button className="nav-link" onClick={() => scrollTo('process')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Process</button>
            <Link to="/login" className="nav-link">Sign In</Link>
            <Link to="/start-project" className="nav-cta">Start a Project</Link>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="landing-hero">
        <SystemGrid variant="hero" opacity={0.5} />
        <OrbitingElements />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            High-Performance Digital Systems
          </div>
          <h1 className="hero-title">
            Build systems that <span>scale globally</span>
          </h1>
          <p className="hero-subtitle">
            We design and engineer export-ready websites, automation systems, and digital infrastructure for businesses that think internationally.
          </p>
          <div className="hero-actions">
            <Link to="/start-project" className="hero-btn-primary">
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <button className="hero-btn-secondary" onClick={() => scrollTo('services')}>
              Explore Services
            </button>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="landing-section parallax-section" id="services">
        <div className="section-header reveal">
          <div className="section-label">Services Foundation</div>
          <h2 className="section-title">Everything you need to go digital</h2>
          <p className="section-desc">From concept to deployment, we build the systems that power modern businesses across borders.</p>
        </div>
        <div className="services-grid">
          <div className="service-card reveal reveal-delay-1" style={{ '--card-accent': '#0ea5e9' }}>
            <div className="service-icon" style={{ background: 'rgba(14, 165, 233, 0.08)' }}>🌐</div>
            <h3>Export-Ready Websites</h3>
            <p>Multilingual, SEO-optimized websites built for international markets with conversion-focused design.</p>
          </div>
          <div className="service-card reveal reveal-delay-2" style={{ '--card-accent': '#8b5cf6' }}>
            <div className="service-icon" style={{ background: 'rgba(139, 92, 246, 0.08)' }}>⚙️</div>
            <h3>Automation Systems</h3>
            <p>Streamline operations with intelligent workflows, reducing manual effort and increasing throughput.</p>
          </div>
          <div className="service-card reveal reveal-delay-3" style={{ '--card-accent': '#06d6a0' }}>
            <div className="service-icon" style={{ background: 'rgba(6, 214, 160, 0.08)' }}>🏗️</div>
            <h3>Infrastructure Solutions</h3>
            <p>Scalable cloud architecture, APIs, and data pipelines designed for reliability and growth.</p>
          </div>
          <div className="service-card reveal reveal-delay-4" style={{ '--card-accent': '#f59e0b' }}>
            <div className="service-icon" style={{ background: 'rgba(245, 158, 11, 0.08)' }}>💡</div>
            <h3>Digital Consulting</h3>
            <p>Strategic advisory on digital transformation, technology selection, and system architecture.</p>
          </div>
        </div>
      </section>

      {/* ═══ CORE CAPABILITIES ═══ */}
      <section className="landing-section parallax-section" id="capabilities">
        <div className="section-header reveal">
          <div className="section-label">Core Capabilities</div>
          <h2 className="section-title">Engineering excellence at every layer</h2>
          <p className="section-desc">Deep expertise across the full stack of modern digital infrastructure.</p>
        </div>
        <div className="capabilities-grid">
          <div className="capability-card reveal reveal-delay-1">
            <div className="capability-num">01</div>
            <div>
              <h3>System Design</h3>
              <p>Architecture that anticipates scale. We design systems from day one to handle global traffic and data complexity.</p>
            </div>
          </div>
          <div className="capability-card reveal reveal-delay-2">
            <div className="capability-num">02</div>
            <div>
              <h3>Performance Optimization</h3>
              <p>Sub-second load times, efficient queries, and optimized resource usage across every touchpoint.</p>
            </div>
          </div>
          <div className="capability-card reveal reveal-delay-3">
            <div className="capability-num">03</div>
            <div>
              <h3>Infrastructure Development</h3>
              <p>Cloud-native deployments, CI/CD pipelines, and monitoring stacks that keep systems reliable.</p>
            </div>
          </div>
          <div className="capability-card reveal reveal-delay-4">
            <div className="capability-num">04</div>
            <div>
              <h3>Automation Engineering</h3>
              <p>End-to-end process automation — from lead capture to fulfillment — eliminating bottlenecks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRY FOCUS ═══ */}
      <section className="industries-section parallax-section" id="industries">
        <div className="industries-inner">
          <div className="section-header reveal">
            <div className="section-label">Industry Focus</div>
            <h2 className="section-title">Built for real-world industries</h2>
            <p className="section-desc">Deep domain understanding across sectors that drive the global economy.</p>
          </div>
          <div className="industries-grid">
            <div className="industry-card reveal reveal-delay-1">
              <div className="industry-icon">🌍</div>
              <h3>Global Trade</h3>
              <p>Systems for import/export operations, compliance, and cross-border logistics.</p>
            </div>
            <div className="industry-card reveal reveal-delay-2">
              <div className="industry-icon">💻</div>
              <h3>Technology Sector</h3>
              <p>SaaS platforms, developer tools, and technology product infrastructure.</p>
            </div>
            <div className="industry-card reveal reveal-delay-3">
              <div className="industry-icon">🏭</div>
              <h3>Real-World Industries</h3>
              <p>Manufacturing, agriculture, and logistics digitalization solutions.</p>
            </div>
            <div className="industry-card reveal reveal-delay-4">
              <div className="industry-icon">🛒</div>
              <h3>International Commerce</h3>
              <p>Cross-border e-commerce, payments, and marketplace integrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — Flow Diagram ═══ */}
      <section className="landing-section" id="process">
        <div className="section-header reveal">
          <div className="section-label">How We Work</div>
          <h2 className="section-title">From inquiry to launch</h2>
          <p className="section-desc">A structured process that turns ideas into production-ready digital systems.</p>
        </div>
        <FlowDiagram steps={PROCESS_STEPS} />
      </section>

      {/* ═══ BUSINESS OUTCOMES ═══ */}
      <section className="landing-section parallax-section" id="outcomes">
        <div className="section-header reveal">
          <div className="section-label">Business Outcomes</div>
          <h2 className="section-title">Results that move the needle</h2>
          <p className="section-desc">Every system we build is measured by the business impact it delivers.</p>
        </div>
        <div className="outcomes-grid">
          <div className="outcome-card reveal reveal-delay-1">
            <div className="outcome-icon" style={{ background: 'rgba(14, 165, 233, 0.06)' }}>📈</div>
            <h3>Business Growth</h3>
            <p>Accelerate revenue with systems built for conversion and scale.</p>
          </div>
          <div className="outcome-card reveal reveal-delay-2">
            <div className="outcome-icon" style={{ background: 'rgba(6, 214, 160, 0.06)' }}>🎯</div>
            <h3>Operational Efficiency</h3>
            <p>Reduce costs and manual effort through intelligent automation.</p>
          </div>
          <div className="outcome-card reveal reveal-delay-3">
            <div className="outcome-icon" style={{ background: 'rgba(139, 92, 246, 0.06)' }}>🌏</div>
            <h3>International Scaling</h3>
            <p>Expand to new markets with localized, export-ready digital presence.</p>
          </div>
          <div className="outcome-card reveal reveal-delay-4">
            <div className="outcome-icon" style={{ background: 'rgba(245, 158, 11, 0.06)' }}>🔮</div>
            <h3>Operational Clarity</h3>
            <p>Data-driven dashboards and analytics for confident decision making.</p>
          </div>
        </div>
      </section>

      {/* ═══ TARGET MARKETS ═══ */}
      <section className="markets-section parallax-section">
        <div className="markets-inner">
          <div className="section-header reveal">
            <div className="section-label">Target Markets</div>
            <h2 className="section-title">Who we work with</h2>
            <p className="section-desc">We partner with ambitious businesses ready to compete globally.</p>
          </div>
          <div className="markets-grid">
            <div className="market-card reveal reveal-delay-1">
              <div className="market-icon">📦</div>
              <h3>Export-Focused Businesses</h3>
              <p>Companies selling products and services internationally.</p>
            </div>
            <div className="market-card reveal reveal-delay-2">
              <div className="market-icon">🏢</div>
              <h3>Global Enterprises</h3>
              <p>Large organizations needing scalable digital infrastructure.</p>
            </div>
            <div className="market-card reveal reveal-delay-3">
              <div className="market-icon">⚡</div>
              <h3>Technology Companies</h3>
              <p>Tech firms building products for domestic and global markets.</p>
            </div>
            <div className="market-card reveal reveal-delay-4">
              <div className="market-icon">🔗</div>
              <h3>Multi-Industry Sectors</h3>
              <p>Diversified businesses across manufacturing, services, and trade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KEY DIFFERENTIATORS ═══ */}
      <section className="landing-section" id="differentiators">
        <div className="section-header reveal">
          <div className="section-label">Key Differentiators</div>
          <h2 className="section-title">Why Speion Group</h2>
          <p className="section-desc">What sets us apart in the world of digital systems engineering.</p>
        </div>
        <div className="diff-grid">
          <div className="diff-card reveal reveal-delay-1">
            <div className="diff-icon">🚀</div>
            <h3>High-Performance Systems</h3>
          </div>
          <div className="diff-card reveal reveal-delay-2">
            <div className="diff-icon">🔄</div>
            <h3>Service-to-Product Model</h3>
          </div>
          <div className="diff-card reveal reveal-delay-3">
            <div className="diff-icon">🌐</div>
            <h3>Export-Ready Solutions</h3>
          </div>
          <div className="diff-card reveal reveal-delay-4">
            <div className="diff-icon">📐</div>
            <h3>Scalable Infrastructure</h3>
          </div>
          <div className="diff-card reveal reveal-delay-4">
            <div className="diff-icon">🌎</div>
            <h3>International Expertise</h3>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="landing-cta">
        <div className="cta-inner reveal">

          <div className="cta-content">
            <h2>Ready to build something great?</h2>
            <p>Tell us about your project. We'll get back to you within 24 hours with a plan.</p>
            <Link to="/start-project" className="cta-btn">
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="landing-footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <div className="footer-logo-icon"><LogoIcon /></div>
            <span className="footer-logo-text">Speion Group</span>
          </div>
          <div className="footer-links">
            <button className="footer-link" onClick={() => scrollTo('services')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Services</button>
            <button className="footer-link" onClick={() => scrollTo('capabilities')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Capabilities</button>
            <button className="footer-link" onClick={() => scrollTo('industries')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Industries</button>
            <Link to="/start-project" className="footer-link">Start a Project</Link>
            <Link to="/login" className="footer-link">Sign In</Link>
          </div>
          <span className="footer-copy">© 2026 Speion Group</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
