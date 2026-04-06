import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const ProjectContext = createContext(null);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error('useProjects must be used within ProjectProvider');
  return context;
};

const STORAGE_KEY = 'speion_projects';

const STATUS_FLOW = ['inquiry', 'contact', 'in-progress', 'review', 'revision', 'delivered', 'completed'];

const STATUS_LABELS = {
  inquiry: 'Inquiry',
  contact: 'Contact Client',
  'in-progress': 'In Progress',
  review: 'Review',
  revision: 'Revision',
  delivered: 'Delivered',
  completed: 'Completed',
};

const STATUS_COLORS = {
  inquiry: '#f59e0b',
  contact: '#3b82f6',
  'in-progress': '#8b5cf6',
  review: '#0ea5e9',
  revision: '#f97316',
  delivered: '#06d6a0',
  completed: '#10b981',
};

const generateId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  // Load projects from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  // Persist to localStorage on change
  const persist = (updated) => {
    setProjects(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const addProject = (projectData) => {
    const newProject = {
      id: generateId(),
      ...projectData,
      status: projectData.status || 'inquiry',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      notes: [],
      timeline: [
        {
          status: projectData.status || 'inquiry',
          date: new Date().toISOString(),
          message: projectData.status === 'contact' ? 'Project created internally' : 'Inquiry submitted',
        },
      ],
    };
    persist([newProject, ...projects]);
    return newProject;
  };

  const updateProject = (id, updates) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, ...updates, updatedAt: new Date().toISOString() } : p
    );
    persist(updated);
  };

  const advanceStatus = (id) => {
    const project = projects.find((p) => p.id === id);
    if (!project) return;

    const currentIndex = STATUS_FLOW.indexOf(project.status);
    if (currentIndex < STATUS_FLOW.length - 1) {
      const nextStatus = STATUS_FLOW[currentIndex + 1];
      const updated = projects.map((p) =>
        p.id === id
          ? {
              ...p,
              status: nextStatus,
              updatedAt: new Date().toISOString(),
              timeline: [
                ...p.timeline,
                {
                  status: nextStatus,
                  date: new Date().toISOString(),
                  message: `Status changed to ${STATUS_LABELS[nextStatus]}`,
                },
              ],
            }
          : p
      );
      persist(updated);
    }
  };

  const setStatus = (id, status) => {
    const updated = projects.map((p) =>
      p.id === id
        ? {
            ...p,
            status,
            updatedAt: new Date().toISOString(),
            timeline: [
              ...p.timeline,
              {
                status,
                date: new Date().toISOString(),
                message: `Status changed to ${STATUS_LABELS[status]}`,
              },
            ],
          }
        : p
    );
    persist(updated);
  };

  const addNote = (id, text) => {
    const updated = projects.map((p) =>
      p.id === id
        ? {
            ...p,
            updatedAt: new Date().toISOString(),
            notes: [...p.notes, { id: generateId(), text, date: new Date().toISOString() }],
          }
        : p
    );
    persist(updated);
  };

  const deleteProject = (id) => {
    persist(projects.filter((p) => p.id !== id));
  };

  const getProject = (id) => projects.find((p) => p.id === id);

  const getProjectsByStatus = (status) => projects.filter((p) => p.status === status);

  const value = {
    projects,
    addProject,
    updateProject,
    advanceStatus,
    setStatus,
    addNote,
    deleteProject,
    getProject,
    getProjectsByStatus,
    STATUS_FLOW,
    STATUS_LABELS,
    STATUS_COLORS,
  };

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};
