import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const ImpactCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="impact-cta-section">
      <div className="cta-background-glow"></div>

      <motion.div
        className="cta-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ boxShadow: "0 0 100px hsla(var(--color-accent), 0.25)" }}
        transition={{ duration: 0.4 }}
      >
        {/* Floating Glowing Orbs inside the card */}
        <motion.div
          className="cta-card-glow glow-blue"
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="cta-card-glow glow-purple"
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="cta-content-inner">
          <motion.div
            className="cta-badge"
            animate={{
              y: [0, -5, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={14} />
            <span>Ready for the future?</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="cta-headline">
            Let’s Build Something <br />
            That <span className="text-glow-accent">Stands Out.</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="cta-subtext">
            Join the elite teams building next-generation digital products with Speion.
            Limited availability 2026.
          </motion.p>

          <motion.div variants={itemVariants} className="cta-actions">
            <Link to="/contact" className="btn-glow-primary">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Animated Rings/Circles for depth */}
        <div className="cta-visual-decoration">
          <motion.div 
            className="cta-ring ring-1"
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="cta-ring ring-2"
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ImpactCTA;