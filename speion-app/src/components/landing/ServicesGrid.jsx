import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Rocket, Paintbrush, Shield, Globe, Zap } from 'lucide-react';

const SERVICES = [
  {
    id: 'web-dev',
    title: 'High-Performance Web Development',
    icon: Globe,
    desc: 'Scalable, lightning-fast websites engineered to drive conversions. We craft premium digital experiences that elevate your brand and generate measurable revenue.',
    color: '#3B82F6',
    size: 'wide',
    tech: 'React / Next.js / Framer'
  },
  {
    id: 'app-dev',
    title: 'Custom Application Development',
    icon: Rocket,
    desc: 'Robust software solutions tailored to your business needs. We build intuitive web and mobile applications, SaaS products, and internal dashboards.',
    color: '#8B5CF6',
    size: 'compact',
    tech: 'Node / Cloud / Architecture'
  },
  {
    id: 'ai-automation',
    title: 'AI & Business Automation',
    icon: Zap,
    desc: 'Intelligent systems that eliminate manual friction. We integrate custom AI solutions and automated workflows to streamline operations and reclaim your time.',
    color: '#F59E0B',
    size: 'compact',
    tech: 'Machine Learning / AI / RPA'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & Design',
    icon: Paintbrush,
    desc: 'Distinctive visual identities that communicate authority. We design premium logos and comprehensive brand guidelines for enduring market recognition.',
    color: '#06d6a0',
    size: 'wide',
    tech: 'Brand Guidelines / Visual Systems'
  },
];

const ServicesGrid = () => {
  return (
    <section className="services-section">
      <div className="section-header center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-badge"
        >
          Engineering Specialties
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Built for <span className="text-secondary text-glow">Scale</span>
        </motion.h2>
      </div>

      <div className="bento-grid">
        {SERVICES.map((service, i) => {
          const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
            e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
          };

          return (
            <Link
              key={i}
              to={`/services#${service.id}`}
              className={`bento-card ${service.size}`}
              onMouseMove={handleMouseMove}
              style={{ textDecoration: 'none' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              {/* Glossy Materials & Interactive Glow */}
              <div className="card-glass-material"></div>
              <div className="card-holographic-shimmer"></div>
              <div className="card-interactive-glow" style={{ "--brand": service.color }}></div>
              <div className="card-edge-glow" style={{ "--glow": service.color }}></div>
              <div className="card-progress-bar" style={{ "--brand": service.color }}></div>

              <div className="card-inner">
                <div className="bento-header">
                  <div className="card-icon-box" style={{ "--brand": service.color }}>
                    <service.icon size={24} strokeWidth={2.5} />
                  </div>
                  <div className="tech-badge">
                    {service.tech}
                  </div>
                </div>

                <div className="bento-body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>

                <div className="bento-footer">
                  <div className="explore-btn">
                    Explore <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default ServicesGrid;
