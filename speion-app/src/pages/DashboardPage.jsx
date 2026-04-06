import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useProjects } from '../contexts/ProjectContext';
import DashboardLayout from '../components/DashboardLayout';

const SERVICE_LABELS = {
  'export-websites': 'Export-Ready Websites',
  'automation': 'Automation Systems',
  'infrastructure': 'Infrastructure Solutions',
  'consulting': 'Digital Consulting',
};

const GOAL_LABELS = {
  'growth': 'Business Growth',
  'efficiency': 'Operational Efficiency',
  'scaling': 'International Scaling',
  'clarity': 'Operational Clarity',
};

const INDUSTRY_LABELS = {
  'global-trade': 'Global Trade',
  'technology': 'Technology',
  'real-world': 'Real-World Industries',
  'intl-commerce': 'International Commerce',
};

const MARKET_LABELS = {
  'export-focused': 'Export-Focused',
  'global-enterprise': 'Global Enterprise',
  'tech-company': 'Technology Company',
  'multi-industry': 'Multi-Industry',
};

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const { projects, getProjectsByStatus } = useProjects();

  const activeProjects = projects.filter((p) => p.status !== 'completed');
  const completedProjects = getProjectsByStatus('completed');

  return (
    <DashboardLayout activeLink="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user?.displayName?.split(' ')[0]} 👋</h1>
        <p>Here's an overview of your workspace at {profile?.companyName || 'your company'}.</p>
      </div>

      <div className="dashboard-grid">
        {/* Active Projects Card */}
        <div className="dash-card" onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>
          <div className="dash-card-header">
            <div className="dash-card-icon cyan">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div className="dash-card-title">Active Projects</div>
          </div>
          <div className="dash-card-value">{activeProjects.length}</div>
          <div className="dash-card-desc">{completedProjects.length} completed</div>
        </div>

        {/* Industry Card */}
        <div className="dash-card">
          <div className="dash-card-header">
            <div className="dash-card-icon green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div className="dash-card-title">Industry & Market</div>
          </div>
          <div className="tag-list">
            {profile?.industry && <span className="tag">{INDUSTRY_LABELS[profile.industry]}</span>}
            {profile?.market && <span className="tag green">{MARKET_LABELS[profile.market]}</span>}
          </div>
        </div>

        {/* Services Card */}
        <div className="dash-card">
          <div className="dash-card-header">
            <div className="dash-card-icon purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <div className="dash-card-title">Active Services</div>
          </div>
          <div className="dash-card-value">{profile?.services?.length || 0}</div>
          <div className="tag-list">
            {profile?.services?.map(s => (
              <span key={s} className="tag">{SERVICE_LABELS[s]}</span>
            ))}
          </div>
        </div>

        {/* Goals Card */}
        <div className="dash-card">
          <div className="dash-card-header">
            <div className="dash-card-icon amber">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div className="dash-card-title">Business Goals</div>
          </div>
          <div className="tag-list">
            {profile?.goals?.map(g => (
              <span key={g} className="tag green">{GOAL_LABELS[g]}</span>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
