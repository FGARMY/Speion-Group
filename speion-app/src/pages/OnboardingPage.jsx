import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import StepIndicator from '../components/StepIndicator';

const STEP_LABELS = ['Company', 'Industry', 'Services', 'Goals'];

const INDUSTRIES = [
  { id: 'global-trade', icon: '🌍', title: 'Global Trade', desc: 'Import/export operations' },
  { id: 'technology', icon: '💻', title: 'Technology', desc: 'Software & IT solutions' },
  { id: 'real-world', icon: '🏭', title: 'Real-World Industries', desc: 'Manufacturing & logistics' },
  { id: 'intl-commerce', icon: '🛒', title: 'International Commerce', desc: 'Cross-border commerce' },
];

const MARKETS = [
  { id: 'export-focused', icon: '📦', title: 'Export-Focused', desc: 'Export-driven business' },
  { id: 'global-enterprise', icon: '🏢', title: 'Global Enterprise', desc: 'Large-scale operations' },
  { id: 'tech-company', icon: '⚡', title: 'Technology Company', desc: 'Tech product/service' },
  { id: 'multi-industry', icon: '🔗', title: 'Multi-Industry', desc: 'Diversified sectors' },
];

const SERVICES = [
  { id: 'export-websites', icon: '🌐', title: 'Export-Ready Websites', desc: 'International web presence' },
  { id: 'automation', icon: '⚙️', title: 'Automation Systems', desc: 'Business process automation' },
  { id: 'infrastructure', icon: '🏗️', title: 'Infrastructure Solutions', desc: 'Scalable digital infra' },
  { id: 'consulting', icon: '💡', title: 'Digital Consulting', desc: 'Strategy & advisory' },
];

const GOALS = [
  { id: 'growth', icon: '📈', title: 'Business Growth', desc: 'Scale revenue & reach' },
  { id: 'efficiency', icon: '🎯', title: 'Operational Efficiency', desc: 'Streamline operations' },
  { id: 'scaling', icon: '🌏', title: 'International Scaling', desc: 'Expand globally' },
  { id: 'clarity', icon: '🔮', title: 'Operational Clarity', desc: 'Data-driven decisions' },
];

const OnboardingPage = () => {
  const navigate = useNavigate();
  const { saveProfile, user } = useAuth();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    companyName: '',
    role: '',
    companySize: '',
    industry: '',
    market: '',
    services: [],
    goals: [],
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleMultiSelect = (field, id) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(id)
        ? prev[field].filter((item) => item !== id)
        : [...prev[field], id],
    }));
  };

  const selectSingle = (field, id) => {
    setForm({ ...form, [field]: id });
  };

  const canProceed = () => {
    switch (step) {
      case 0: return form.companyName.trim() && form.role.trim() && form.companySize;
      case 1: return form.industry && form.market;
      case 2: return form.services.length > 0;
      case 3: return form.goals.length > 0;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      saveProfile(form);
      navigate('/dashboard', { replace: true });
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="step-content" key="step-0">
            <h2>Tell us about your company</h2>
            <p className="subtitle">Help us personalize your experience</p>

            <div className="form-group">
              <label htmlFor="onboard-company">Company Name</label>
              <input
                id="onboard-company"
                className="form-input"
                type="text"
                name="companyName"
                placeholder="e.g. Acme Global Ltd."
                value={form.companyName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="onboard-role">Your Role</label>
              <input
                id="onboard-role"
                className="form-input"
                type="text"
                name="role"
                placeholder="e.g. CEO, CTO, Operations Manager"
                value={form.role}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="onboard-size">Company Size</label>
              <select
                id="onboard-size"
                className="form-select"
                name="companySize"
                value={form.companySize}
                onChange={handleInputChange}
              >
                <option value="">Select company size</option>
                <option value="1-10">1–10 employees</option>
                <option value="11-50">11–50 employees</option>
                <option value="51-200">51–200 employees</option>
                <option value="201-500">201–500 employees</option>
                <option value="500+">500+ employees</option>
              </select>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="step-content" key="step-1">
            <h2>Your Industry & Market</h2>
            <p className="subtitle">Select your primary industry</p>

            <div className="option-grid">
              {INDUSTRIES.map((item) => (
                <div
                  key={item.id}
                  className={`option-card ${form.industry === item.id ? 'selected' : ''}`}
                  onClick={() => selectSingle('industry', item.id)}
                >
                  <div className="option-icon">{item.icon}</div>
                  <div className="option-title">{item.title}</div>
                  <div className="option-desc">{item.desc}</div>
                </div>
              ))}
            </div>

            <p className="subtitle" style={{ marginTop: '8px' }}>Select your target market</p>

            <div className="option-grid">
              {MARKETS.map((item) => (
                <div
                  key={item.id}
                  className={`option-card ${form.market === item.id ? 'selected' : ''}`}
                  onClick={() => selectSingle('market', item.id)}
                >
                  <div className="option-icon">{item.icon}</div>
                  <div className="option-title">{item.title}</div>
                  <div className="option-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content" key="step-2">
            <h2>Services you need</h2>
            <p className="subtitle">Select all that apply</p>

            <div className="option-grid">
              {SERVICES.map((item) => (
                <div
                  key={item.id}
                  className={`option-card ${form.services.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => toggleMultiSelect('services', item.id)}
                >
                  <div className="option-icon">{item.icon}</div>
                  <div className="option-title">{item.title}</div>
                  <div className="option-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-content" key="step-3">
            <h2>Your business goals</h2>
            <p className="subtitle">What outcomes matter most to you?</p>

            <div className="option-grid">
              {GOALS.map((item) => (
                <div
                  key={item.id}
                  className={`option-card ${form.goals.includes(item.id) ? 'selected' : ''}`}
                  onClick={() => toggleMultiSelect('goals', item.id)}
                >
                  <div className="option-icon">{item.icon}</div>
                  <div className="option-title">{item.title}</div>
                  <div className="option-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-container" style={{ maxWidth: '560px' }}>
        <div className="auth-brand">
          <div className="auth-brand-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <h1>Set up your workspace</h1>
          <p>Welcome, {user?.displayName || 'there'}! Just a few details to get started.</p>
        </div>

        <div className="auth-card">
          <StepIndicator currentStep={step} totalSteps={4} labels={STEP_LABELS} />

          {renderStep()}

          <div className="onboarding-nav">
            {step > 0 && (
              <button className="btn btn-secondary" onClick={handleBack}>
                Back
              </button>
            )}
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={!canProceed()}
              id="onboarding-next"
            >
              {step === 3 ? 'Complete Setup' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
