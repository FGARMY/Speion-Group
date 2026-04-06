import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Shield, TrendingUp, Globe } from 'lucide-react';

const PROJECTS = [
  {
    title: "Panjara Agro",
    category: "Agricultural Exports",
    metric: "3x Inquiries",
    icon: <Globe size={20} />,
    color: "var(--color-secondary)",
    image: "/panjara-agro.png",
    description: "Full-stack export platform for a farmer producer company entering 8+ global markets.",
    gridArea: "span 2 / span 3",
    link: "https://Panjara-agro.vercel.app"
  },
  {
    title: "ParkSense AI",
    category: "Smart Infrastructure",
    metric: "95% Accuracy",
    icon: <Zap size={20} />,
    color: "var(--color-accent)",
    image: "/parksense-ai.png",
    description: "Real-time AI parking management with YOLO-based vehicle detection and occupancy analytics.",
    gridArea: "span 1 / span 1"
  },
  {
    title: "NexTrade Analytics",
    category: "Fintech SaaS",
    metric: "+30% Retention",
    icon: <TrendingUp size={20} />,
    color: "var(--color-success)",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=75&w=600",
    description: "Enterprise portfolio analytics dashboard with real-time data streaming and automated reporting.",
    gridArea: "span 1 / span 1"
  }
];

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={project.link || "#"}
      target={project.link?.startsWith('http') ? "_blank" : undefined}
      rel={project.link?.startsWith('http') ? "noopener noreferrer" : undefined}
      className="project-tilt-card"
      style={{
        gridArea: project.gridArea,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        display: "block",
        textDecoration: "none",
        color: "inherit"
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-inner" aria-label={`Project: ${project.title} - ${project.category}`}>
        {/* Card Background & Overlay */}
        <div className="project-bg-wrap">
          <img src={project.image} alt={`${project.title} - ${project.category} case study by Speion`} className="project-bg-img" loading="lazy" width={600} height={400} decoding="async" />
          <div className="project-card-overlay"></div>
        </div>

        {/* Floating Metrics Header */}
        <div className="project-top-meta" style={{ transform: "translateZ(50px)" }}>
          <div className="project-icon-wrap" style={{ background: project.color }}>
            {project.icon}
          </div>
          <div className="project-stat-pill">
            <span className="stat-val">{project.metric}</span>
          </div>
        </div>

        {/* Content Footer */}
        <div className="project-bottom-content" style={{ transform: "translateZ(50px)" }}>
          <span className="project-category">{project.category}</span>
          <h3 className="project-title-large">{project.title}</h3>
          <p className="project-teaser">{project.description}</p>
          
          <div className="project-action-row">
            <div className="project-explore-btn" aria-label={`Explore the ${project.title} case study`}>
              Explore Case <ArrowRight size={14} />
            </div>
          </div>
        </div>

        {/* Subtle Highlight Reflection */}
        <div className="project-card-shimmer"></div>
      </div>
    </motion.a>
  );
};

const WorkShowcase = () => {
  return (
    <section className="work-section">
      <div className="section-header center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-badge"
        >
          Selected Works
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Case Studies in <span className="text-secondary text-glow">Excellence</span>
        </motion.h2>
      </div>

      <div className="work-bento-container">
        <div className="work-bento-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
