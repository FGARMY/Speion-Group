import { useState } from 'react';
import { useProjects } from '../contexts/ProjectContext';

const StartProjectPage = () => {
  const { addProject } = useProjects();
  const [form, setForm] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    businessType: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.clientName.trim()) return setError('Your name is required.');
    if (!form.clientEmail.trim()) return setError('Email is required.');

    addProject({ ...form, status: 'inquiry' });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="auth-layout">
        <div className="auth-container">
          <div className="auth-brand">
            <div className="auth-brand-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <h1>Speion Group</h1>
            <p>High-Performance Digital Systems</p>
          </div>

          <div className="auth-card">
            <div className="verify-content">
              <div className="verify-icon" style={{ background: 'rgba(6, 214, 160, 0.1)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#06d6a0' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>

              <h2>Inquiry Submitted!</h2>
              <p>
                Thank you, <span className="verify-email-highlight">{form.clientName}</span>!<br />
                We've received your project inquiry and will get back to you within 24 hours.
              </p>

              <button
                className="btn btn-secondary"
                onClick={() => { setSubmitted(false); setForm({ clientName: '', clientEmail: '', clientPhone: '', businessType: '', requirements: '' }); }}
                style={{ marginTop: '8px' }}
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-layout">
      <div className="auth-container" style={{ maxWidth: '520px' }}>
        <div className="auth-brand">
          <div className="auth-brand-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <h1>Start a Project</h1>
          <p>Let's build something great together</p>
        </div>

        <div className="auth-card">
          <h2>Tell us about your project</h2>
          <p className="subtitle">We'll get back to you within 24 hours</p>

          {error && <div className="alert alert-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sp-name">Your Name *</label>
                <input id="sp-name" className="form-input" type="text" name="clientName" placeholder="Full name" value={form.clientName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="sp-email">Email *</label>
                <input id="sp-email" className="form-input" type="email" name="clientEmail" placeholder="you@example.com" value={form.clientEmail} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sp-phone">Phone</label>
                <input id="sp-phone" className="form-input" type="text" name="clientPhone" placeholder="+91 98765 43210" value={form.clientPhone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="sp-btype">Business Type</label>
                <select id="sp-btype" className="form-select" name="businessType" value={form.businessType} onChange={handleChange}>
                  <option value="">Select type</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="SaaS">SaaS / Software</option>
                  <option value="Export Business">Export Business</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Services">Professional Services</option>
                  <option value="Startup">Startup</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="sp-desc">What do you need?</label>
              <textarea
                id="sp-desc"
                className="form-input"
                name="requirements"
                placeholder="Describe your project — what you're building, your goals, timeline, etc."
                rows={4}
                value={form.requirements}
                onChange={handleChange}
                style={{ resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn btn-primary" id="start-project-submit">
              Submit Inquiry
            </button>
          </form>
        </div>

        <div className="auth-footer">
          Already have an account? <a href="/login">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default StartProjectPage;
