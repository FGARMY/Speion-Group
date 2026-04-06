import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import heroDashboard from '../../assets/hero-dashboard.webp';

const Hero = () => {
  // Parallax Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for parallax
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  // Dampened parallax — professional, weighted feel
  const parallax1X = useTransform(springX, [0, 1440], [-6, 6]);
  const parallax1Y = useTransform(springY, [0, 900], [-6, 6]);

  const parallax2X = useTransform(springX, [0, 1440], [10, -10]);
  const parallax2Y = useTransform(springY, [0, 900], [10, -10]);

  const parallax3X = useTransform(springX, [0, 1440], [-14, 14]);
  const parallax3Y = useTransform(springY, [0, 900], [14, -14]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Oscillation variants for floating cards
  const floatOscillation = (duration, yRange, rotateRange) => ({
    animate: {
      y: yRange,
      rotate: rotateRange,
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  });

  return (
    <section className="premium-hero">
      <div className="mesh-gradient-bg"></div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text-content">
          <div className="hero-badge" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            Next-Gen Agency
          </div>

          <h1 className="hero-title" style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
            We Build Digital Systems <br />
            That Feel Like the <span className="text-glow">Future</span>
          </h1>

          <p className="hero-subtext" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            Websites, apps, automations, and brand systems for modern businesses.
          </p>

          <div className="hero-cta-group" aria-label="Call to action buttons" style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
            <Link to="/contact" className="btn-glow-primary" aria-label="Get in touch to start your project">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
            <Link to="/case-studies" className="btn-outline-secondary" aria-label="View our featured digital products">
              <Play size={16} fill="white" />
              View Work
            </Link>
          </div>
        </div>

        <div className="hero-visuals-stack">
          {/* Main Dashboard — Back Layer (largest, sits behind) */}
          <motion.div
            className="stacked-card card-main-dashboard"
            style={{ x: parallax1X, y: parallax1Y }}
            variants={floatOscillation(6, [0, -10, 0], [0, 1, 0])}
            animate="animate"
          >
            <img src={heroDashboard} alt="Speion core infrastructure dashboard showing web development and AI automation capabilities" fetchpriority="high" width={1200} height={636} decoding="async" />
            <div className="card-shine"></div>
            <div className="card-scanner"></div>
          </motion.div>

          {/* Live SaaS Project — Front Layer */}
          <motion.div
            className="stacked-card card-support-code"
            style={{ x: parallax2X, y: parallax2Y }}
            variants={floatOscillation(5, [0, 8, 0], [-3, -6, -3])}
            animate="animate"
          >
            <div className="live-project-tag">
              <span className="live-dot"></span> LIVE • SaaS Platform
            </div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
              alt="Live SaaS platform analytics dashboard built by Speion"
              loading="lazy"
              width={400}
              height={267}
              decoding="async"
            />
            <div className="card-shine"></div>
          </motion.div>

          {/* Live Automation Project — Mid Layer */}
          <motion.div
            className="stacked-card card-support-analytics"
            style={{ x: parallax3X, y: parallax3Y }}
            variants={floatOscillation(7, [0, -12, 0], [0, 2, 0])}
            animate="animate"
          >
            <div className="live-project-tag">
              <span className="live-dot"></span> LIVE • Automation
            </div>
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400"
              alt="AI automation workflow system engineered by Speion"
              loading="lazy"
              width={400}
              height={267}
              decoding="async"
            />
            <div className="card-shine"></div>
          </motion.div>

          <div className="hero-glow color-blue"></div>
          <div className="hero-glow color-purple"></div>
        </div>
      </motion.div>

      <div className="grid-layer"></div>
    </section>
  );
};

export default Hero;
