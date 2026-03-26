import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';
import DashboardLayout from '../components/DashboardLayout';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const { projects, STATUS_FLOW, STATUS_LABELS, STATUS_COLORS, getProjectsByStatus } = useProjects();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBySearch = (statusProjects) => {
    if (!searchQuery.trim()) return statusProjects;
    const q = searchQuery.toLowerCase();
    return statusProjects.filter(
      (p) =>
        p.clientName.toLowerCase().includes(q) ||
        p.businessType?.toLowerCase().includes(q) ||
        p.clientEmail?.toLowerCase().includes(q)
    );
  };

  const activeStatuses = STATUS_FLOW.filter((s) => s !== 'completed');

  return (
    <DashboardLayout activeLink="projects">
      <div className="page-header">
        <div>
          <h1>Projects</h1>
          <p className="page-subtitle">{projects.length} total projects in pipeline</p>
        </div>
        <div className="page-header-actions">
          <div className="search-input-wrap">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              className="form-input search-input"
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="project-search"
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/projects/new')}
            style={{ width: 'auto', padding: '10px 20px' }}
            id="new-project-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            New Project
          </button>
        </div>
      </div>

      <div className="pipeline-board">
        {activeStatuses.map((status) => {
          const statusProjects = filteredBySearch(getProjectsByStatus(status));
          return (
            <div className="pipeline-column" key={status}>
              <div className="pipeline-column-header">
                <span
                  className="status-dot"
                  style={{ background: STATUS_COLORS[status] }}
                />
                <span className="pipeline-column-title">{STATUS_LABELS[status]}</span>
                <span className="pipeline-column-count">{statusProjects.length}</span>
              </div>
              <div className="pipeline-cards">
                {statusProjects.length === 0 ? (
                  <div className="pipeline-empty">No projects</div>
                ) : (
                  statusProjects.map((project) => (
                    <div
                      className="pipeline-card"
                      key={project.id}
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      <div className="pipeline-card-name">{project.clientName}</div>
                      {project.businessType && (
                        <div className="pipeline-card-type">{project.businessType}</div>
                      )}
                      <div className="pipeline-card-footer">
                        <span className="pipeline-card-date">
                          {new Date(project.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        {project.notes?.length > 0 && (
                          <span className="pipeline-card-notes">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            {project.notes.length}
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Completed section */}
      {getProjectsByStatus('completed').length > 0 && (
        <div className="completed-section">
          <h3 className="completed-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Completed ({getProjectsByStatus('completed').length})
          </h3>
          <div className="completed-list">
            {filteredBySearch(getProjectsByStatus('completed')).map((project) => (
              <div
                className="completed-row"
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <span className="completed-row-name">{project.clientName}</span>
                <span className="completed-row-type">{project.businessType}</span>
                <span className="completed-row-date">
                  {new Date(project.updatedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ProjectsPage;
