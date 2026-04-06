import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';
import DashboardLayout from '../components/DashboardLayout';

const NewProjectPage = () => {
  const navigate = useNavigate();
  const { addProject } = useProjects();
  const [form, setForm] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    businessType: '',
    products: '',
    targetMarket: '',
    requirements: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.clientName.trim()) return setError('Client name is required.');

    addProject({ ...form, status: 'contact' });
    navigate('/projects', { replace: true });
  };

  return (
    <DashboardLayout activeLink="projects">
      <div className="detail-top-bar">
        <button className="btn-back" onClick={() => navigate('/projects')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Projects
        </button>
      </div>

      <div className="auth-container" style={{ maxWidth: '600px', margin: '0' }}>
        <div className="auth-card">
          <h2>Create New Project</h2>
          <p className="subtitle">Add a new client project to your pipeline</p>

          {error && <div className="alert alert-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="np-name">Client Name *</label>
                <input id="np-name" className="form-input" type="text" name="clientName" placeholder="e.g. John Smith" value={form.clientName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="np-email">Client Email</label>
                <input id="np-email" className="form-input" type="email" name="clientEmail" placeholder="client@example.com" value={form.clientEmail} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="np-phone">Phone</label>
                <input id="np-phone" className="form-input" type="text" name="clientPhone" placeholder="+91 98765 43210" value={form.clientPhone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="np-btype">Business Type</label>
                <input id="np-btype" className="form-input" type="text" name="businessType" placeholder="e.g. E-commerce, SaaS" value={form.businessType} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="np-products">Products / Services</label>
                <input id="np-products" className="form-input" type="text" name="products" placeholder="What do they sell?" value={form.products} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="np-market">Target Market</label>
                <input id="np-market" className="form-input" type="text" name="targetMarket" placeholder="e.g. Global, India, US" value={form.targetMarket} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="np-req">Requirements</label>
              <textarea
                id="np-req"
                className="form-input"
                name="requirements"
                placeholder="Describe the project requirements..."
                rows={4}
                value={form.requirements}
                onChange={handleChange}
                style={{ resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn btn-primary" id="create-project-submit">
              Create Project
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewProjectPage;
