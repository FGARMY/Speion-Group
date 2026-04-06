import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../about.css';
import '../landing.css';

/* ─── Scroll reveal ─── */
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    // Force visible for hero initial state
    const timer = setTimeout(() => {
      const heroElements = ref.current?.querySelectorAll('.about-hero.reveal');
      heroElements?.forEach((el) => el.classList.add('visible'));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
  return ref;
};

/* ─── Navbar scroll ─── */
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

const AboutPage = () => {
  const pageRef = useScrollReveal();
  useNavScroll();

  return (
    <div className="about-page premium-landing" ref={pageRef}>
      <SEO
        title="About Speion — Digital Agency Building Systems That Convert"
        description="Learn how Speion engineers high-performance websites, SaaS products, and AI automation systems that drive real business growth. Based in Pune, serving globally."
        path="/about"
        keywords="about speion, digital agency pune, web development company india, SaaS agency, business automation company"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />
      <Navbar />

      <main className="about-container">
        {/* ═══ HERO ═══ */}
        <section className="about-hero reveal">
          <span className="section-label">🚀 About Speion</span>
          <h1 className="about-hero-title">
            Building the <span className="text-glow-accent">Digital Future</span>
          </h1>
          <div className="about-text-content lead-text">
            <p>
              At Speion, we don’t just build websites and applications — we build systems that drive real business growth.
            </p>
            <p>
              Technology today is crowded with noise. Most solutions look good but fail to perform. We exist to change that. Our focus is simple: create fast, scalable, and conversion-driven digital products that actually deliver results.
            </p>
            <p>
              What started as a small group of builders has evolved into a growing digital agency working with clients across India and globally. Our approach has remained the same — cut the fluff, focus on impact, and build solutions that work in the real world.
            </p>
          </div>
        </section>

        {/* ═══ WHO WE ARE ═══ */}
        <section className="about-section reveal">
          <h2 className="about-section-title">💡 Who We Are</h2>
          <div className="about-text-content">
            <p>
              We are a team of developers, designers, and problem-solvers who care more about outcomes than aesthetics.
            </p>
            <div className="quote-block">
              Every project we take starts with one question:
              <br />
              <strong>“How does this help the business grow?”</strong>
            </div>
            <p>
              From there, we design and build platforms that are not just functional, but strategic. We work across:
            </p>
            <ul className="about-list">
              <li>Web applications</li>
              <li>SaaS platforms</li>
              <li>E-commerce systems</li>
              <li>Business automation tools</li>
            </ul>
            <p>
              Whether it’s a startup launching fast or a business scaling aggressively, we create solutions that match the pace.
            </p>
          </div>
        </section>

        {/* ═══ WHAT WE DO DIFFERENTLY ═══ */}
        <section className="about-section reveal">
          <h2 className="about-section-title">⚙️ What We Do Differently</h2>
          <div className="about-text-content">
            <p className="highlight-p">
              Most agencies sell designs. <br />
              <span className="text-glow-accent">We build systems that convert.</span>
            </p>
            <ul className="about-list checked">
              <li>Clean, high-performance code</li>
              <li>Scalable architecture</li>
              <li>Conversion-focused UI/UX</li>
              <li>Fast deployment using pre-built systems when needed</li>
              <li>Fully custom solutions when required</li>
            </ul>
            <p>
              No overengineering. No unnecessary complexity. Just what works.
            </p>
          </div>
        </section>

        {/* ═══ OUR MISSION ═══ */}
        <section className="about-section reveal mb-large">
          <h2 className="about-section-title">🎯 Our Mission</h2>
          <div className="about-text-content mission-box">
            <p>
              To make powerful technology simple, accessible, and profitable for businesses of all sizes.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
