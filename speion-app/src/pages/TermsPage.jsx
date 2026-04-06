import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsPage = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Speion Group';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Detailed terms and conditions for Speion Group services, platforms, and intellectual property.');
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
          <h1 className="legal-title">Terms & Conditions</h1>
          <p className="legal-last-updated">Last Updated: April 2026</p>
        </div>

        <div className="legal-paper-container">
          <div className="legal-content">
            
            <section className="legal-section">
              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Speion Group ("we," "us," or "our"), concerning your access to and use of our website, applications, APIs, and any related services (collectively, the "Services"). By accessing the Services, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms and Conditions.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Services (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p>
                Except as expressly provided in these Terms and Conditions, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Client Responsibilities & Deliverables</h2>
              <p>
                When engaging Speion Group for engineering, design, or consulting services:
              </p>
              <ul>
                <li><strong>Information Provided:</strong> You agree to provide accurate, current, and complete information necessary for us to provide the Services.</li>
                <li><strong>Feedback & Approvals:</strong> Timely feedback and prompt approvals are required to maintain project schedules. Delays caused by the client may result in adjusted timelines and potential additional fees.</li>
                <li><strong>Integration Services:</strong> We are not liable for any disruptions or failures caused by third-party APIs, plugins, or tools that are integrated into your custom platform at your request.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Payment, Invoicing, and Refunds</h2>
              <p>
                All fees for Services will be explicitly stated in the Statement of Work (SOW) or proposal provided to you. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. Invoices are due upon receipt unless otherwise stated. Due to the custom nature of our engineering and design work, all deposits and payments are non-refundable once work has commenced.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Prohibited Activities</h2>
              <p>
                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Services, you agree not to:
              </p>
              <ul>
                <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
                <li>Engage in unauthorized framing of or linking to the Services.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming, that interferes with any party's uninterrupted use and enjoyment of the Services.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>6. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Services, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and defined following the laws of the jurisdiction in which Speion Group is registered. Speion Group and yourself irrevocably consent that the courts of that jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Modifications and Interruptions</h2>
              <p>
                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services. We cannot guarantee the Services will be available at all times.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
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

export default TermsPage;
