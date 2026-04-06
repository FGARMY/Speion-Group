import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
import Logo from './Logo';

const Footer = () => {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="landing-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" onClick={handleLogoClick} aria-label="Speion - Go to Home">
              <Logo className="nav-logo-mark" />
              <span className="footer-logo-text">Speion</span>
            </Link>
            <p className="footer-tagline">
              Engineering systems for global scale. Authority-first platforms for trade and technology.
            </p>
          </div>

          <div className="footer-nav">
            <div className="footer-nav-group">
              <span className="footer-nav-title">Company</span>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/case-studies" className="footer-link">Projects</Link>
            </div>

            <div className="footer-nav-group">
              <span className="footer-nav-title">Resources</span>
              <Link to="/contact" className="footer-link">Start a Project</Link>
            </div>

            <div className="footer-nav-group">
              <span className="footer-nav-title">Socials</span>
              <a href="https://instagram.com/speiongroup" target="_blank" rel="noopener noreferrer" className="footer-link icon-link" aria-label="Visit our Instagram profile">
                <InstagramIcon /> <span>Instagram - speiongroup</span>
              </a>
              <a href="https://facebook.com/Speion" target="_blank" rel="noopener noreferrer" className="footer-link icon-link" aria-label="Visit our Facebook page">
                <FacebookIcon /> <span>Facebook - Speion</span>
              </a>
              <a href="https://linkedin.com/company/speion" target="_blank" rel="noopener noreferrer" className="footer-link icon-link" aria-label="Visit our LinkedIn company page">
                <LinkedInIcon /> <span>Linkedin - Speion</span>
              </a>
            </div>

            <div className="footer-nav-group">
              <span className="footer-nav-title">Contact</span>
              <a href="tel:7758866318" className="footer-link icon-link">
                <Phone size={14} /> <span>7758866318</span>
              </a>
              <a href="mailto:speiongroup@gmail.com" className="footer-link icon-link">
                <Mail size={14} /> <span>speiongroup@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span className="footer-copy">© 2026 Speion Group. All rights reserved. Built for scale.</span>
            <div className="footer-meta-links">
              <Link to="/privacy" className="footer-meta-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-meta-link">Terms & Conditions</Link>
              <Link to="/refund" className="footer-meta-link">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
