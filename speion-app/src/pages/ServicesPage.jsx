import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../services.css';
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
      const heroElements = ref.current?.querySelectorAll('.services-hero.reveal');
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

const ServicesPage = () => {
  const pageRef = useScrollReveal();
  useNavScroll();

  const servicePillars = [
    {
      id: "web-dev",
      title: "Web Development",
      description: "High-performance digital engines built for scalability and conversions. We craft interfaces that turn visitors into partners.",
      bullets: [
        "Business-critical websites",
        "Conversion-led landing pages",
        "SaaS product interfaces",
        "Enterprise e-commerce systems"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=75&w=600&auto=format&fit=crop"
    },
    {
      id: "app-dev",
      title: "Application Development",
      description: "Custom software solutions engineered for real-world usability and technical scale. From concept to deployment.",
      bullets: [
        "Native and cross-platform mobile apps",
        "Complex web application systems",
        "Rapid MVP development",
        "Client and operations dashboards"
      ],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=75&w=600&auto=format&fit=crop"
    },
    {
      id: "logo-design",
      title: "Logo Design",
      description: "Visual identities that communicate authority. We define the mark that represents your business to the world.",
      bullets: [
        "Architectural simplicity",
        "Immediate memorability",
        "Premium visual impact",
        "Scalable across all mediums"
      ],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=75&w=600&auto=format&fit=crop"
    },
    {
      id: "brand-kit",
      title: "Brand Kit",
      description: "A unified visual language for your entire organization. Precise guidelines for a consistent global presence.",
      bullets: [
        "Curated color and typography systems",
        "Comprehensive brand guidelines",
        "Internal and external design assets",
        "Social and marketing ecosystem kits"
      ],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=75&w=600&auto=format&fit=crop"
    },
    {
      id: "ai-automation",
      title: "AI Automation Solutions",
      description: "Engineering efficiency through intelligent systems. Eliminate manual friction and reclaim operational time.",
      bullets: [
        "Automated lead generation workflows",
        "Website and WhatsApp intelligent bots",
        "CRM integration and data management",
        "Automated email marketing architectures",
        "Frictionless appointment systems",
        "Reporting and data scraping engines"
      ],
      techLabel: "Engineered with:",
      tech: "Zapier / Make / n8n / OpenAI / HubSpot / Airtable",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=75&w=600&auto=format&fit=crop"
    }
  ];

  const workSteps = [
    { num: "01", title: "Audit", desc: "Technical analysis of your current systems and goals." },
    { num: "02", title: "Engineer", desc: "Direct development with a focus on speed and scale." },
    { num: "03", title: "Scale", desc: "Deployment and ongoing system optimization." }
  ];

  return (
    <div className="services-page premium-landing" ref={pageRef}>
      <SEO
        title="Digital Agency Services — Web, App, AI & Branding"
        description="Explore Speion's full-stack digital services: web development, app development, AI automation, SaaS platforms, and brand identity design. Engineered for scale."
        path="/services"
        keywords="web development services, app development company, AI automation agency, SaaS development, brand identity design, digital services india"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What web development services does Speion offer?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Speion builds high-performance business websites, conversion-led landing pages, SaaS product interfaces, and enterprise e-commerce systems using React, Next.js, and modern frameworks.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Does Speion offer AI automation services?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes. We engineer automated lead generation workflows, intelligent website and WhatsApp bots, CRM integrations, automated email marketing, and data reporting engines using Zapier, Make, n8n, and OpenAI.',
              },
            },
            {
              '@type': 'Question',
              'name': 'How much does it cost to build a website with Speion?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Project costs depend on scope and complexity. We offer free technical strategy sessions to understand your requirements before providing a detailed proposal. Contact us to get started.',
              },
            },
            {
              '@type': 'Question',
              'name': 'Where is Speion located?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Speion is based in Pune, Maharashtra, India — at Parklane Life Season Plus, Dhanori. We serve clients across India and globally.',
              },
            },
          ],
        }}
      />
      <Navbar />

      <main className="services-container">
        {/* ═══ HERO ═══ */}
        <section className="services-hero reveal">
          <span className="section-label">Capabilities</span>
          <h1 className="services-hero-title">
            Our <span className="text-glow-accent">Services</span>
          </h1>
          <p className="services-lead">
            We build the digital infrastructure that powers global-first brands. No fluff. Just high-impact systems engineered for your business growth.
          </p>
        </section>

        {/* ═══ SERVICE PILLARS ─── */}
        <div className="pillars-list">
          {servicePillars.map((pillar, i) => (
            <section className={`pillar-item reveal ${i % 2 !== 0 ? 'pillar-reverse' : ''}`} key={pillar.id} aria-label={`Service: ${pillar.title}`}>
              <div className="pillar-content">
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
                <ul className="pillar-bullets">
                  {pillar.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
                {pillar.tech && (
                  <div className="pillar-tech-box" aria-label="Technical stack">
                    <span className="pillar-tech-label">{pillar.techLabel}</span>
                    <p className="pillar-tech-list">{pillar.tech}</p>
                  </div>
                )}
              </div>
              <div className="pillar-visual">
                <div className="pillar-img-frame">
                  <img src={pillar.image} alt={`${pillar.title} - professional service by Speion agency`} loading="lazy" width={600} height={400} decoding="async" />
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ═══ HOW WE WORK ═══ */}
        <section className="how-we-work reveal">
          <div className="work-header">
            <span className="section-label">Approach</span>
            <h2 className="section-title">How We Work</h2>
          </div>
          <div className="work-steps">
            {workSteps.map((step, i) => (
              <div className="work-step-card" key={i}>
                <span className="work-step-num">{step.num}</span>
                <h4 className="work-step-title">{step.title}</h4>
                <p className="work-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CALL TO ACTION ═══ */}
        <section className="services-footer-cta reveal">
          <div className="cs-footer-card">
            <span className="section-label">Scale Your Business</span>
            <h2 className="section-title">Ready to build your next system?</h2>
            <p className="section-desc">
              Expertise is limited. We only partner with 3 new clients per month.
            </p>
            <Link to="/contact" className="s-cta-btn">
              Apply for a Partnership
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
