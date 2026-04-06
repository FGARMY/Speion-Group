import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Speion Group';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Detailed privacy policy explaining how Speion Group collects, uses, and protects your information.');
    }
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="legal-page">
        <div className="legal-nav-header">
          <Link to="/" className="back-to-site-btn">
            <ArrowLeft size={16} />
            <span>Back to Website</span>
          </Link>
        </div>

        <div className="legal-header">
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-last-updated">Last Updated: April 2026</p>
        </div>

        <div className="legal-paper-container">
          <div className="legal-content">
            
            <section className="legal-section">
              <h2>1. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.
              </p>
              <ul>
                <li><strong>Personal Data:</strong> Names, phone numbers, email addresses, mailing addresses, job titles, usernames, contact preferences, contact or authentication data, billing addresses, debit/credit card numbers, and other similar information.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>2. How We Use Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul>
                <li>Create and manage your account or project engagements.</li>
                <li>Process your transactions and invoice you properly.</li>
                <li>Email you regarding your account, order, or services.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Generate a personal profile about you to make future engagements more personalized.</li>
                <li>Increase the efficiency and operation of the Site.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>3. Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul>
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Use of Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Data Security</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy or wish to exercise your data rights, please contact us at:
              </p>
              <address style={{ fontStyle: 'normal', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <strong>Speion Group</strong><br />
                Email: speiongroup@gmail.com<br />
                Phone: 7758866318
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
