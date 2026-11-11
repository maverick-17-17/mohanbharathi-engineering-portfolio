import { useState, useEffect } from 'react';
import type { Project, ComponentItem } from '../../data/projects';
import ProjectIcon from './ProjectIcon';
import { exportBOMToCSV } from '../../utils/helpers';
import { X, Download, Plus, Trash2, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onUpdateComponents?: (projectId: string, components: ComponentItem[]) => void;
}

export default function ProjectDetailModal({ project, onClose, onUpdateComponents }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'components' | 'testing' | 'status'>('overview');
  const [components, setComponents] = useState<ComponentItem[]>([]);
  const [newCompName, setNewCompName] = useState('');
  const [newCompSpec, setNewCompSpec] = useState('');
  const [newCompCategory] = useState('Semiconductors');
  const [newCompQty, setNewCompQty] = useState('1');
  const [newCompPurpose, setNewCompPurpose] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    if (project) {
      setComponents(project.components);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleAddComponent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompName.trim()) return;

    const newItem: ComponentItem = {
      id: `custom-${Date.now()}`,
      name: newCompName.trim(),
      category: newCompCategory,
      quantity: newCompQty || '1',
      spec: newCompSpec.trim() || 'Custom Bench Component',
      purpose: newCompPurpose.trim() || 'Circuit function',
      status: 'Installed',
      verified: true
    };

    const updated = [...components, newItem];
    setComponents(updated);
    if (onUpdateComponents) onUpdateComponents(project.id, updated);

    setNewCompName('');
    setNewCompSpec('');
    setNewCompPurpose('');
    setShowAddForm(false);
  };

  const handleDeleteComponent = (id: string) => {
    const updated = components.filter(c => c.id !== id);
    setComponents(updated);
    if (onUpdateComponents) onUpdateComponents(project.id, updated);
  };

  const handleToggleVerify = (id: string) => {
    const updated = components.map(c => c.id === id ? { ...c, verified: !c.verified } : c);
    setComponents(updated);
    if (onUpdateComponents) onUpdateComponents(project.id, updated);
  };

  const handleStatusChange = (id: string, newStatus: ComponentItem['status']) => {
    const updated = components.map(c => c.id === id ? { ...c, status: newStatus } : c);
    setComponents(updated);
    if (onUpdateComponents) onUpdateComponents(project.id, updated);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* macOS Titlebar */}
        <div className="modal-titlebar">
          <div className="modal-controls">
            <button className="modal-dot modal-dot-close" onClick={onClose} aria-label="Close window">
              <X size={8} color="#000" />
            </button>
            <span className="modal-dot modal-dot-min" />
            <span className="modal-dot modal-dot-max" />
          </div>
          <div className="modal-title-text mono">
            {project.number} // {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}
          </div>
          <div style={{ width: 48 }} />
        </div>

        {/* Tab Navigation */}
        <div className="modal-tabs">
          <button
            className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview & Motivation
          </button>
          <button
            className={`modal-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            Circuit Architecture
          </button>
          <button
            className={`modal-tab-btn ${activeTab === 'components' ? 'active' : ''}`}
            onClick={() => setActiveTab('components')}
          >
            Components & BOM ({components.length})
          </button>
          <button
            className={`modal-tab-btn ${activeTab === 'testing' ? 'active' : ''}`}
            onClick={() => setActiveTab('testing')}
          >
            Testing & Observations
          </button>
          <button
            className={`modal-tab-btn ${activeTab === 'status' ? 'active' : ''}`}
            onClick={() => setActiveTab('status')}
          >
            Status & Future Scope
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="modal-body">
          {/* Header Card */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ background: 'rgba(14, 16, 22, 0.8)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <ProjectIcon id={project.id} size={48} />
            </div>
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                <span className="tag-badge status-prototype">{project.status}</span>
                <span className="tag-badge">{project.year}</span>
                <span className="tag-badge">{project.category}</span>
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#f5f5f7' }}>{project.title}</h2>
              <p style={{ color: '#a1a1a6', fontSize: '0.9rem' }}>{project.shortDescription}</p>
            </div>
          </div>

          {/* Safety Warning if applicable */}
          {project.safetyWarning && (
            <div style={{ background: 'rgba(255, 69, 58, 0.1)', border: '1px solid rgba(255, 69, 58, 0.3)', borderRadius: '8px', padding: '12px 16px', display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
              <AlertTriangle color="#ff453a" size={24} style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.82rem', color: '#ff6961' }}>{project.safetyWarning}</div>
            </div>
          )}

          {/* Academic Context if applicable */}
          {project.academicContext && (
            <div style={{ background: 'rgba(10, 132, 255, 0.08)', border: '1px solid rgba(10, 132, 255, 0.25)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px' }}>
              <div className="mono" style={{ fontSize: '0.75rem', color: '#0a84ff', fontWeight: 600, marginBottom: '4px' }}>ACADEMIC LABORATORY RECORD</div>
              <div style={{ fontSize: '0.85rem', color: '#f5f5f7' }}>
                <strong>{project.academicContext.course}</strong> — {project.academicContext.semester}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#a1a1a6' }}>
                {project.academicContext.institution} · {project.academicContext.department}
              </div>
            </div>
          )}

          {/* TAB: OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 className="mono" style={{ fontSize: '0.85rem', color: '#ff453a', textTransform: 'uppercase', marginBottom: '8px' }}>Project Overview</h4>
                <p style={{ color: '#d1d1d6', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.overview}</p>
              </div>

              {project.problemStatement && (
                <div>
                  <h4 className="mono" style={{ fontSize: '0.85rem', color: '#ff453a', textTransform: 'uppercase', marginBottom: '8px' }}>Problem Statement & Motivation</h4>
                  <p style={{ color: '#d1d1d6', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.problemStatement}</p>
                </div>
              )}

              <div>
                <h4 className="mono" style={{ fontSize: '0.85rem', color: '#ff453a', textTransform: 'uppercase', marginBottom: '8px' }}>Core Engineering Objectives</h4>
                <ul style={{ paddingLeft: '20px', color: '#d1d1d6', fontSize: '0.92rem', lineHeight: '1.7' }}>
                  {project.objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>

              {project.designApproach && (
                <div>
                  <h4 className="mono" style={{ fontSize: '0.85rem', color: '#ff453a', textTransform: 'uppercase', marginBottom: '8px' }}>Design Approach</h4>
                  <p style={{ color: '#d1d1d6', fontSize: '0.92rem', lineHeight: '1.6' }}>{project.designApproach}</p>
                </div>
              )}
            </div>
          )}

          {/* TAB: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 className="mono" style={{ fontSize: '0.85rem', color: '#ff453a', textTransform: 'uppercase', marginBottom: '8px' }}>Working Principle</h4>
                <p style={{ color: '#d1d1d6', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.workingPrinciple}</p>
              </div>

              <div>
                <h4 className="mono" style={{ fontSize: '0.85rem', color: '#30d158', textTransform: 'uppercase', marginBottom: '8px' }}>Signal Path & Circuit Diagram</h4>
                <div style={{ background: '#07080b', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#30d158', overflowX: 'auto', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
                  {project.architectureDiagram}
                </div>
              </div>

              <div>
                <h4 className="mono" style={{ fontSize: '0.85rem', color: '#ff453a', textTransform: 'uppercase', marginBottom: '8px' }}>Implementation Details</h4>
                <p style={{ color: '#d1d1d6', fontSize: '0.92rem', lineHeight: '1.6' }}>{project.implementationDetails}</p>
              </div>
            </div>
          )}

          {/* TAB: COMPONENTS & BOM */}
          {activeTab === 'components' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h4 className="mono" style={{ fontSize: '0.95rem', color: '#f5f5f7', fontWeight: 600 }}>Bill of Materials (BOM)</h4>
                  <p style={{ fontSize: '0.8rem', color: '#86868b' }}>Editable component inventory. Changes persist in your browser session.</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    className="copy-btn"
                    onClick={() => setShowAddForm(!showAddForm)}
                  >
                    <Plus size={14} />
                    <span>{showAddForm ? 'Cancel' : 'Add Component'}</span>
                  </button>
                  <button
                    className="copy-btn"
                    onClick={() => exportBOMToCSV(project.title, components)}
                  >
                    <Download size={14} />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              {/* Add Component Form */}
              {showAddForm && (
                <form onSubmit={handleAddComponent} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-medium)', borderRadius: '8px', padding: '16px', marginBottom: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                  <div>
                    <label className="mono" style={{ fontSize: '0.7rem', color: '#86868b' }}>Part Name</label>
                    <input
                      className="form-input"
                      value={newCompName}
                      onChange={(e) => setNewCompName(e.target.value)}
                      placeholder="e.g. 7408 AND Gate"
                      required
                    />
                  </div>
                  <div>
                    <label className="mono" style={{ fontSize: '0.7rem', color: '#86868b' }}>Specification</label>
                    <input
                      className="form-input"
                      value={newCompSpec}
                      onChange={(e) => setNewCompSpec(e.target.value)}
                      placeholder="e.g. DIP-14 TTL"
                    />
                  </div>
                  <div>
                    <label className="mono" style={{ fontSize: '0.7rem', color: '#86868b' }}>Quantity</label>
                    <input
                      className="form-input"
                      value={newCompQty}
                      onChange={(e) => setNewCompQty(e.target.value)}
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <label className="mono" style={{ fontSize: '0.7rem', color: '#86868b' }}>Purpose</label>
                    <input
                      className="form-input"
                      value={newCompPurpose}
                      onChange={(e) => setNewCompPurpose(e.target.value)}
                      placeholder="e.g. Logic gating"
                    />
                  </div>
                  <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '6px' }}>
                    <button type="submit" className="btn-primary" style={{ padding: '6px 16px', fontSize: '0.8rem' }}>Save to BOM</button>
                  </div>
                </form>
              )}

              {/* Components Table */}
              <div className="bom-table-wrapper">
                <table className="bom-table">
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Spec / Value</th>
                      <th>Qty</th>
                      <th>Purpose</th>
                      <th>Status</th>
                      <th>Verified</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {components.map((c) => (
                      <tr key={c.id}>
                        <td style={{ fontWeight: 600, color: '#f5f5f7' }}>{c.name}</td>
                        <td className="mono" style={{ fontSize: '0.78rem' }}>{c.spec}</td>
                        <td className="mono">{c.quantity}</td>
                        <td style={{ fontSize: '0.8rem' }}>{c.purpose}</td>
                        <td>
                          <select
                            value={c.status}
                            onChange={(e) => handleStatusChange(c.id, e.target.value as ComponentItem['status'])}
                            style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-subtle)', color: '#f5f5f7', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}
                          >
                            <option value="Installed">Installed</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Available">Available</option>
                            <option value="Suggested">Suggested</option>
                            <option value="To Be Verified">To Be Verified</option>
                            <option value="Required">Required</option>
                          </select>
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => handleToggleVerify(c.id)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', color: c.verified ? '#30d158' : '#86868b', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}
                          >
                            <CheckCircle2 size={14} />
                            <span>{c.verified ? 'Verified' : 'Pending'}</span>
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => handleDeleteComponent(c.id)}
                            style={{ background: 'none', border: 'none', color: '#ff453a', cursor: 'pointer', padding: '4px' }}
                            title="Remove component"
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: TESTING */}
          {activeTab === 'testing' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 className="mono" style={{ fontSize: '0.85rem', color: '#ff453a', textTransform: 'uppercase', marginBottom: '8px' }}>Bench Testing & Observations</h4>
                <p style={{ color: '#d1d1d6', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.testingObservations}</p>
              </div>

              <div>
                <h4 className="mono" style={{ fontSize: '0.85rem', color: '#ff9f0a', textTransform: 'uppercase', marginBottom: '8px' }}>Technical Challenges Encountered</h4>
                <p style={{ color: '#d1d1d6', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.challenges}</p>
              </div>

              <div style={{ background: 'rgba(14, 16, 22, 0.6)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px' }}>
                <h5 className="mono" style={{ fontSize: '0.8rem', color: '#86868b', marginBottom: '6px' }}>Documentation Photography Area</h5>
                <p style={{ fontSize: '0.82rem', color: '#6e6e73' }}>
                  Laboratory bench photographs, scope captures, and wiring macro imagery uploaded by the engineer will be indexed here.
                </p>
              </div>
            </div>
          )}

          {/* TAB: STATUS */}
          {activeTab === 'status' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 className="mono" style={{ fontSize: '0.85rem', color: '#30d158', textTransform: 'uppercase', marginBottom: '8px' }}>Current Development Status</h4>
                <p style={{ color: '#d1d1d6', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.developmentStatus}</p>
              </div>

              <div>
                <h4 className="mono" style={{ fontSize: '0.85rem', color: '#0a84ff', textTransform: 'uppercase', marginBottom: '8px' }}>Future Improvements & Roadmap</h4>
                <p style={{ color: '#d1d1d6', fontSize: '0.95rem', lineHeight: '1.6' }}>{project.futureImprovements}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
