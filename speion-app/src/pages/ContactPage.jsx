import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import '../contact.css';
import '../landing.css';

// ─── Client-side validation ───
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(form) {
  const errors = {};
  if (!form.name || form.name.trim().length < 2) errors.name = 'Name is required (min 2 characters)';
  if (!form.email || !EMAIL_REGEX.test(form.email.trim())) errors.email = 'A valid email is required';
  if (!form.subject || form.subject.trim().length < 2) errors.subject = 'Subject is required';
  if (!form.message || form.message.trim().length < 10) errors.message = 'Message is required (min 10 characters)';
  if (form.name && form.name.length > 100) errors.name = 'Name must be under 100 characters';
  if (form.message && form.message.length > 5000) errors.message = 'Message must be under 5000 characters';
  return errors;
}

const ContactPage = () => {
  const { theme } = useTheme();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [toast, setToast] = useState(null); // { type: 'error' | 'success', message: string }
  const pageRef = useRef(null);
  const toastTimer = useRef(null);

  const showToast = (type, message) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ type, message });
    toastTimer.current = setTimeout(() => setToast(null), 6000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const errors = validateForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      showToast('error', Object.values(errors)[0]);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        // Rate limited
        if (res.status === 429) {
          showToast('error', data.error || 'Too many submissions. Please wait a few minutes.');
        }
        // Validation error from server
        else if (res.status === 400) {
          showToast('error', data.error || 'Please check your inputs.');
          if (data.errors) {
            // Map server errors to fields if possible
            const serverFieldErrors = {};
            data.errors.forEach(err => {
              if (err.toLowerCase().includes('name')) serverFieldErrors.name = err;
              else if (err.toLowerCase().includes('email')) serverFieldErrors.email = err;
              else if (err.toLowerCase().includes('subject')) serverFieldErrors.subject = err;
              else if (err.toLowerCase().includes('message')) serverFieldErrors.message = err;
            });
            setFieldErrors(serverFieldErrors);
          }
        }
        // Server error
        else {
          showToast('error', data.debug ? `Crash: ${data.debug}` : (data.error || 'Something went wrong. Please try again.'));
          if (data.stack) console.error('Backend Crash Trace:', data.stack);
        }
        setIsSubmitting(false);
        return;
      }

      // Success
      setSubmitted(true);
      setIsSubmitting(false);
      setForm({ name: '', phone: '', email: '', subject: '', message: '' });

    } catch (err) {
      console.error('Contact form error:', err);
      showToast('error', 'Network error. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="contact-page" ref={pageRef}>
      <SEO
        title="Contact Speion — Start Your Web Development Project Today"
        description="Ready to build your next digital product? Contact Speion for a free technical strategy session. Web development, AI automation, and SaaS solutions."
        path="/contact"
      />
      <Navbar />

      {/* ═══ ERROR / SUCCESS TOAST ═══ */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`contact-toast contact-toast--${toast.type}`}
            initial={{ opacity: 0, y: -30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {toast.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
            <span>{toast.message}</span>
            <button className="toast-dismiss" onClick={() => setToast(null)} aria-label="Dismiss">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ CONTACT CONTENT ═══ */}
      <motion.div
        className="speion-contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* ─── TOP: High Authority Header ─── */}
        <div className="contact-header-optimized">
          <motion.div variants={itemVariants} className="technical-badge-minimal">
            Global Strategy
          </motion.div>
          <motion.h1 variants={itemVariants} className="technical-headline-refined">
            Let's Engineer Your <br />
            <span className="text-glow-accent">Global Success.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="technical-subtext-clean">
            Reserve your high-performance export architecture. Everything starts
            with a comprehensive technical strategy session.
          </motion.p>
        </div>

        {/* ─── MIDDLE: Info & Form Grid ─── */}
        <div className="contact-main-grid">

          {/* Info Sidebar (Optimized) */}
          <div className="contact-sidebar-refined">
            <motion.div variants={itemVariants} className="info-hub-card">
              <div className="info-hub-row">
                <MapPin size={18} className="text-glow-accent" />
                <div className="hub-text">
                  <span className="hub-label">Presence</span>
                  <p>Parklane Life Season Plus, Dhanori, Pune</p>
                </div>
              </div>

              <div className="info-hub-row">
                <Mail size={18} className="text-glow-accent" />
                <div className="hub-text">
                  <span className="hub-label">Inquiry</span>
                  <a href="mailto:speiongroup@gmail.com">speiongroup@gmail.com</a>
                </div>
              </div>

              <div className="info-hub-row">
                <Phone size={18} className="text-glow-accent" />
                <div className="hub-text">
                  <span className="hub-label">Direct</span>
                  <a href="tel:+917758866318">+91 7758866318</a>
                </div>
              </div>

              {/* Integrated Map Under Info */}
              <div className="mini-map-container">
                <iframe
                  title="Pune Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15127.32208035212!2d73.8966!3d18.5910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1234567890!2sParklane%20Life%20Season%2C%20Dhanori%2C%20Pune!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0, filter: theme === 'dark' ? 'grayscale(100%) invert(90%) contrast(1.2)' : 'none', borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Inquiry Form (Right) */}
          <div className="form-portal-card">
            {!submitted ? (
              <form className="speion-technical-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={`input-group-premium ${fieldErrors.name ? 'input-error' : ''}`}>
                    <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} maxLength={100} />
                    {fieldErrors.name && <span className="field-error-msg">{fieldErrors.name}</span>}
                  </div>
                </div>
                <div className="form-row grid-split">
                  <div className={`input-group-premium ${fieldErrors.email ? 'input-error' : ''}`}>
                    <input type="email" name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />
                    {fieldErrors.email && <span className="field-error-msg">{fieldErrors.email}</span>}
                  </div>
                  <div className="input-group-premium">
                    <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} maxLength={20} />
                  </div>
                </div>
                <div className="form-row">
                  <div className={`input-group-premium ${fieldErrors.subject ? 'input-error' : ''}`}>
                    <input type="text" name="subject" placeholder="Technical Subject" required value={form.subject} onChange={handleChange} maxLength={200} />
                    {fieldErrors.subject && <span className="field-error-msg">{fieldErrors.subject}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className={`input-group-premium ${fieldErrors.message ? 'input-error' : ''}`}>
                    <textarea name="message" rows="4" placeholder="Briefly describe your objectives..." required value={form.message} onChange={handleChange} maxLength={5000} />
                    {fieldErrors.message && <span className="field-error-msg">{fieldErrors.message}</span>}
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className={`btn-technical-submit ${isSubmitting ? 'processing' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="technical-success-view">
                <div className="success-pulse-box">
                  <CheckCircle2 size={48} />
                </div>
                <h3>Strategy Request Logged</h3>
                <p>An engineering lead will review your profile and provide a technical roadmap shortly.</p>
                <button onClick={() => setSubmitted(false)} className="btn-technical-back">Back to Form</button>
              </motion.div>
            )}
          </div>
        </div>

      </motion.div>

      {/* ═══ FOOTER ═══ */}
      <Footer />
    </div>
  );
};

export default ContactPage;
