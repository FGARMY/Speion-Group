import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../casestudies.css';
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
      const heroElements = ref.current?.querySelectorAll('.casestudies-hero.reveal');
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

const CaseStudiesPage = () => {
  const pageRef = useScrollReveal();
  useNavScroll();

  const cases = [
    {
      client: "Panjara Agro",
      industry: "Agricultural Exports",
      title: "Building trust for India's agro commodities on the global stage.",
      problem: "A farmer producer company with premium Indian agricultural products — spices, grains, pulses, oilseeds — but zero digital presence. International buyers couldn't discover, verify, or trust them online. No APEDA-certified credibility visible digitally.",
      solution: "Full-stack export-ready web platform with product catalog, certification showcase (APEDA, IEC, FSSAI, GST), WhatsApp-integrated lead capture, and SEO-optimized content targeting global agro procurement teams across 6+ markets.",
      metrics: [
        { value: "3x", label: "Inquiry Growth" },
        { value: "8+", label: "Export Markets" }
      ],
      image: "/panjara-agro.png",
      link: "https://panjara-agro.vercel.app"
    },
    {
      client: "ParkSense AI",
      industry: "Smart Infrastructure",
      title: "Intelligent parking management powered by computer vision.",
      problem: "Urban parking facilities struggled with manual monitoring, inaccurate occupancy counts, and zero real-time data. Operators needed an automated system to detect vehicles, track availability, and reduce operational overhead.",
      solution: "AI-powered parking dashboard with real-time YOLO-based vehicle detection, live camera feed integration, occupancy analytics, and an operator-friendly interface. Built with React frontend and Python/Flask backend for edge deployment.",
      metrics: [
        { value: "95%", label: "Detection Accuracy" },
        { value: "Real-time", label: "Monitoring" }
      ],
      image: "/parksense-ai.png",
      link: "https://parking-ai-zwch.vercel.app"
    },
    {
      client: "NexTrade Analytics",
      industry: "Fintech SaaS",
      title: "Data-driven trading insights for institutional portfolios.",
      problem: "A fintech startup with powerful quantitative models but no client-facing dashboard. Institutional investors needed real-time portfolio analytics, risk visualization, and automated reporting — all in a secure, SOC2-compliant platform.",
      solution: "Enterprise SaaS dashboard with real-time data streaming via WebSockets, interactive D3.js charting for portfolio analysis, role-based access control, and automated PDF report generation. Built on Next.js with PostgreSQL and Redis caching.",
      metrics: [
        { value: "+30%", label: "Client Retention" },
        { value: "2.5s", label: "Load Time" }
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=75&w=600&auto=format&fit=crop",
      link: null
    }
  ];

  return (
    <div className="casestudies-page premium-landing" ref={pageRef}>
      <SEO
        title="Case Studies — Proven Results from Digital Engineering"
        description="See how Speion helped global businesses grow with custom web development, SaaS platforms, and strategic digital systems. Real metrics, real results."
        path="/case-studies"
      />
      <Navbar />

      <main className="casestudies-container">
        {/* ═══ HERO ═══ */}
        <section className="casestudies-hero reveal">
          <span className="section-label">Case Studies</span>
          <h1 className="casestudies-hero-title">
            Engineering <span className="text-glow-accent">Proven Results</span>
          </h1>
          <p className="casestudies-lead">
            A deep look at how we've helped global exporters bridge the digital gap 
            and dominate international markets through strategic systems.
          </p>
        </section>

        {/* ═══ CASES LOOP ═══ */}
        <div className="cases-list">
          {cases.map((project, i) => (
            <section className="case-item reveal" key={i} aria-label={`Project: ${project.client}`}>
              <div className="case-meta">
                <span className="case-num">Project 0{i + 1}</span>
                <span className="case-industry">{project.industry} — {project.client}</span>
              </div>
              
              <h2 className="case-title">{project.title}</h2>
              
              <div className="case-visual">
                <img src={project.image} alt={`${project.client} case study - ${project.industry} digital transformation by Speion`} loading="lazy" width={600} height={400} decoding="async" />
              </div>

              <div className="case-details-grid">
                <div className="case-detail-block" aria-label="The client problem">
                  <h4 className="case-detail-label">The Problem</h4>
                  <p className="case-detail-text">{project.problem}</p>
                </div>
                <div className="case-detail-block" aria-label="Our technical solution">
                  <h4 className="case-detail-label">Our Solution</h4>
                  <p className="case-detail-text">{project.solution}</p>
                </div>
              </div>

              <div className="case-metrics" aria-label="Project success metrics">
                {project.metrics.map((metric, j) => (
                  <div className="case-metric-item" key={j}>
                    <span className="case-metric-value">{metric.value}</span>
                    <span className="case-metric-label">{metric.label}</span>
                  </div>
                ))}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-live-link"
                  >
                    Visit Live Site <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* ═══ FOOTER CTA ═══ */}
        <section className="casestudies-footer reveal">
          <div className="cs-footer-card">
            <span className="section-label">Build Your Success Story</span>
            <h2 className="section-title">Ready to be the next Case Study?</h2>
            <p className="section-desc">
              We're looking for our next global expansion partner. Let's engineer your growth together.
            </p>
            <Link to="/contact" className="cs-cta-btn">
              Apply for a System Build
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
