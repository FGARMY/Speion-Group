import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPage = () => {
  useEffect(() => {
    document.title = 'Refund Policy | Speion Group';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Detailed refund policy for Speion Group engineering and design services.');
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
          <h1 className="legal-title">Refund Policy</h1>
          <p className="legal-last-updated">Last Updated: April 2026</p>
        </div>

        <div className="legal-paper-container">
          <div className="legal-content">
            
            <section className="legal-section">
              <h2>1. Nature of Services</h2>
              <p>
                Speion Group provides highly customized engineering, design, and consulting services. Each project involves significant upfront allocation of specialized human capital, research, and technical resources. Due to the bespoke nature of our high-authority platforms and engineering systems, our refund policy is designed to reflect the non-recoverable costs associated with professional service delivery.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Project Deposits</h2>
              <p>
                All project deposits (initial payments) are strictly non-refundable. These funds are used to secure project timelines, initiate technical research, and allocate engineering personnel to your specific engagement.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Milestone Payments</h2>
              <p>
                For projects structured with milestone payments, once a milestone has been signed off or the associated work has commenced, that payment becomes non-refundable. We provide comprehensive review periods and revision cycles at each milestone to ensure alignment before further work proceeds.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Subscription & Recurring Services</h2>
              <p>
                For ongoing maintenance, hosting, or support subscriptions:
              </p>
              <ul>
                <li><strong>Cancellations:</strong> You may cancel your subscription at any time. Cancellation will take effect at the end of the current billing cycle.</li>
                <li><strong>Backdated Refunds:</strong> We do not offer prorated or backdated refunds for partially used subscription periods.</li>
                <li><strong>Technical Disruptions:</strong> While we strive for 99.9% uptime, occasional maintenance or third-party service provider outages do not constitute grounds for a refund.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Termination for Cause</h2>
              <p>
                In the event that Speion Group fails to deliver services as outlined in a signed Statement of Work (SOW) due to gross negligence or willful breach, clients may be eligible for a partial refund proportional to the uncompleted portion of the project. This determination is made at the sole discretion of Speion Group management following a formal review process.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Disputes</h2>
              <p>
                If you are dissatisfied with the quality of our service, we encourage you to contact your project lead immediately. Our primary goal is your satisfaction, and we will make every reasonable effort to remediate technical or design concerns through our established revision processes.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Contact Us</h2>
              <p>
                For any questions regarding billing or refund requests, please contact our accounts department:
              </p>
              <address style={{ fontStyle: 'normal', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                <strong>Speion Group - Billing Department</strong><br />
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

export default RefundPage;
