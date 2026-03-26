import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';
import DashboardLayout from '../components/DashboardLayout';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProject, advanceStatus, setStatus, addNote, deleteProject, STATUS_FLOW, STATUS_LABELS, STATUS_COLORS } = useProjects();
  const [noteText, setNoteText] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const project = getProject(id);

  if (!project) {
    return (
      <DashboardLayout activeLink="projects">
        <div className="empty-state">
          <h2>Project not found</h2>
          <p>This project may have been deleted.</p>
          <button className="btn btn-primary" onClick={() => navigate('/projects')} style={{ width: 'auto', marginTop: '16px' }}>
            Back to Projects
          </button>
        </div>
      </DashboardLayout>
    );
  }

  const currentStatusIndex = STATUS_FLOW.indexOf(project.status);
  const canAdvance = currentStatusIndex < STATUS_FLOW.length - 1;
  const nextStatus = canAdvance ? STATUS_FLOW[currentStatusIndex + 1] : null;

  const handleAddNote = () => {
    if (!noteText.trim()) return;
    addNote(id, noteText.trim());
    setNoteText('');
  };

  const handleDelete = () => {
    deleteProject(id);
    navigate('/projects', { replace: true });
  };

  return (
    <DashboardLayout activeLink="projects">
      <div className="detail-top-bar">
        <button className="btn-back" onClick={() => navigate('/projects')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Projects
        </button>
        <div className="detail-actions">
          {canAdvance && (
            <button
              className="btn btn-primary"
              onClick={() => advanceStatus(id)}
              style={{ width: 'auto', padding: '8px 18px', fontSize: '0.875rem' }}
              id="advance-status-btn"
            >
              Move to {STATUS_LABELS[nextStatus]}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          )}
          <button
            className="btn btn-secondary"
            onClick={() => setShowDeleteConfirm(true)}
            style={{ padding: '8px 18px', fontSize: '0.875rem', color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}
          >
            Delete
          </button>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="alert alert-error" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Delete this project permanently?</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-ghost" onClick={() => setShowDeleteConfirm(false)} style={{ fontSize: '0.8rem' }}>Cancel</button>
            <button className="btn btn-ghost" onClick={handleDelete} style={{ fontSize: '0.8rem', color: '#ef4444' }}>Confirm Delete</button>
          </div>
        </div>
      )}

      <div className="detail-grid">
        {/* Main Info */}
        <div className="detail-main">
          <div className="dash-card">
            <div className="detail-header-row">
              <div>
                <h2 className="detail-title">{project.clientName}</h2>
                <p className="detail-subtitle">{project.businessType || 'No business type specified'}</p>
              </div>
              <span
                className="status-badge"
                style={{
                  background: `${STATUS_COLORS[project.status]}20`,
                  color: STATUS_COLORS[project.status],
                  borderColor: `${STATUS_COLORS[project.status]}40`,
                }}
              >
                {STATUS_LABELS[project.status]}
              </span>
            </div>

            <div className="detail-info-grid">
              <div className="detail-info-item">
                <span className="detail-info-label">Email</span>
                <span className="detail-info-value">{project.clientEmail || '—'}</span>
              </div>
              <div className="detail-info-item">
                <span className="detail-info-label">Phone</span>
                <span className="detail-info-value">{project.clientPhone || '—'}</span>
              </div>
              <div className="detail-info-item">
                <span className="detail-info-label">Products</span>
                <span className="detail-info-value">{project.products || '—'}</span>
              </div>
              <div className="detail-info-item">
                <span className="detail-info-label">Target Market</span>
                <span className="detail-info-value">{project.targetMarket || '—'}</span>
              </div>
            </div>

            {project.requirements && (
              <div className="detail-requirements">
                <h4>Requirements</h4>
                <p>{project.requirements}</p>
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="dash-card">
            <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Notes</h3>
            <div className="note-input-row">
              <input
                className="form-input"
                type="text"
                placeholder="Add a note..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
                id="note-input"
              />
              <button
                className="btn btn-primary"
                onClick={handleAddNote}
                disabled={!noteText.trim()}
                style={{ width: 'auto', padding: '10px 18px' }}
              >
                Add
              </button>
            </div>
            {project.notes.length === 0 ? (
              <p className="notes-empty">No notes yet</p>
            ) : (
              <div className="notes-list">
                {[...project.notes].reverse().map((note) => (
                  <div className="note-item" key={note.id}>
                    <p className="note-text">{note.text}</p>
                    <span className="note-date">
                      {new Date(note.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar — Timeline + Status Change */}
        <div className="detail-sidebar">
          <div className="dash-card">
            <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Status Pipeline</h3>
            <div className="status-selector">
              {STATUS_FLOW.map((s, i) => (
                <button
                  key={s}
                  className={`status-selector-item ${project.status === s ? 'active' : ''} ${STATUS_FLOW.indexOf(project.status) > i ? 'past' : ''}`}
                  onClick={() => setStatus(id, s)}
                  style={{
                    '--status-color': STATUS_COLORS[s],
                  }}
                >
                  <span className="status-selector-dot" />
                  <span className="status-selector-label">{STATUS_LABELS[s]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="dash-card">
            <h3 style={{ marginBottom: '16px', fontSize: '1rem' }}>Timeline</h3>
            <div className="timeline">
              {[...project.timeline].reverse().map((entry, i) => (
                <div className="timeline-item" key={i}>
                  <div
                    className="timeline-dot"
                    style={{ background: STATUS_COLORS[entry.status] }}
                  />
                  <div className="timeline-content">
                    <span className="timeline-msg">{entry.message}</span>
                    <span className="timeline-date">
                      {new Date(entry.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dash-card">
            <h3 style={{ marginBottom: '8px', fontSize: '1rem' }}>Created</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              {new Date(project.createdAt).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectDetailPage;
