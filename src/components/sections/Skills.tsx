import { useState } from 'react';
import { defaultSkills } from '../../data/skills';
import type { Skill } from '../../data/skills';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Sliders, Plus, RotateCcw, Check, Trash2, Wrench, Search } from 'lucide-react';

export default function Skills() {
  const [skills, setSkills, resetSkills] = useLocalStorage<Skill[]>('mohanbharathi_skills_data', defaultSkills);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Skill State
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState<Skill['category']>('Engineering');
  const [newLevel, setNewLevel] = useState<Skill['level']>('Developing');
  const [newDesc, setNewDesc] = useState('');

  const levels: Skill['level'][] = [
    'Professional',
    'Moderate',
    'Somewhat Good',
    'Developing',
    'Beginner',
    'To be set'
  ];

  const categories: Skill['category'][] = [
    'Engineering',
    'Programming & Computing',
    'Design & Media'
  ];

  const getBadgeClass = (lvl: Skill['level']) => {
    switch (lvl) {
      case 'Professional': return 'badge-professional';
      case 'Moderate': return 'badge-moderate';
      case 'Somewhat Good': return 'badge-somewhat-good';
      case 'Developing': return 'badge-developing';
      case 'Beginner': return 'badge-beginner';
      default: return 'badge-to-be-set';
    }
  };

  const handleUpdateLevel = (skillId: string, level: Skill['level']) => {
    const updated = skills.map(s => s.id === skillId ? { ...s, level } : s);
    setSkills(updated);
    if (selectedSkill?.id === skillId) {
      setSelectedSkill({ ...selectedSkill, level });
    }
  };

  const handleDeleteSkill = (skillId: string) => {
    const updated = skills.filter(s => s.id !== skillId);
    setSkills(updated);
    if (selectedSkill?.id === skillId) setSelectedSkill(null);
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newSkillItem: Skill = {
      id: `custom-sk-${Date.now()}`,
      name: newName.trim(),
      category: newCategory,
      level: newLevel,
      description: newDesc.trim() || 'Custom engineering skill entry.',
      tools: ['Bench Practical']
    };

    setSkills([...skills, newSkillItem]);
    setNewName('');
    setNewDesc('');
    setShowAddModal(false);
  };

  const filteredSkills = skills.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (s.tools && s.tools.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <section id="skills" className="skills-section container">
      {/* Section Meta Header */}
      <div className="section-meta">
        <span className="section-tag mono">SECTION 02</span>
        <div className="window-dots-tag">
          <span className="dot-red" />
          <span className="dot-yellow" />
          <span className="dot-green" />
          <span>skills.matrix</span>
        </div>
      </div>

      <h2 className="section-title">Technical Skills</h2>
      <p className="section-desc">
        A self-assessed working matrix, kept intentionally descriptive rather than converted into artificial percentages. Click any skill to inspect tools or adjust proficiency.
      </p>

      {/* Interactive Controls Bar */}
      <div className="skills-interactive-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 240px' }}>
          <Search size={16} color="#86868b" />
          <input
            type="text"
            className="form-input"
            style={{ padding: '6px 12px', fontSize: '0.82rem', width: '100%', maxWidth: '280px' }}
            placeholder="Search skills & tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            className="copy-btn"
            onClick={() => setShowAddModal(true)}
          >
            <Plus size={14} />
            <span>Add Skill</span>
          </button>
          <button
            className="copy-btn"
            onClick={() => {
              if (window.confirm('Reset skills to default published levels?')) {
                resetSkills();
                setSelectedSkill(null);
              }
            }}
          >
            <RotateCcw size={14} />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* 3 Categories Matrix Grid */}
      <div className="skills-matrix-grid">
        {categories.map((cat) => {
          const catSkills = filteredSkills.filter(s => s.category === cat);
          return (
            <div key={cat} className="skills-column">
              <div className="skills-column__header">
                <div className="skills-column__title">
                  <Sliders size={18} color="#ff453a" />
                  <span>{cat}</span>
                </div>
                <span className="skills-column__count mono">
                  {catSkills.length.toString().padStart(2, '0')}
                </span>
              </div>

              <div className="skills-list">
                {catSkills.map((sk) => (
                  <div
                    key={sk.id}
                    className={`skill-item ${selectedSkill?.id === sk.id ? 'active-skill' : ''}`}
                    onClick={() => setSelectedSkill(sk)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="skill-item__head">
                      <span className="skill-item__name">{sk.name}</span>
                      <span className={`skill-badge ${getBadgeClass(sk.level)}`}>
                        {sk.level}
                      </span>
                    </div>
                    <p className="skill-item__desc">{sk.description}</p>
                    
                    {/* Render tool tags if available */}
                    {sk.tools && sk.tools.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '8px' }}>
                        {sk.tools.slice(0, 3).map((t, idx) => (
                          <span key={idx} className="mono" style={{ fontSize: '0.68rem', color: '#86868b', background: 'rgba(255,255,255,0.04)', padding: '2px 6px', borderRadius: '4px' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Skill Interactive Inspector Drawer */}
      {selectedSkill && (
        <div style={{ marginTop: '28px', background: 'rgba(18, 20, 28, 0.9)', border: '1px solid rgba(255, 69, 58, 0.35)', borderRadius: '14px', padding: '22px 28px', animation: 'fadeIn 0.25s ease' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Wrench size={20} color="#ff453a" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f5f5f7' }}>{selectedSkill.name}</h3>
              <span className={`skill-badge ${getBadgeClass(selectedSkill.level)}`}>
                {selectedSkill.level}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="copy-btn"
                onClick={() => handleDeleteSkill(selectedSkill.id)}
                style={{ color: '#ff453a' }}
              >
                <Trash2 size={14} />
                <span>Delete</span>
              </button>
              <button
                className="copy-btn"
                onClick={() => setSelectedSkill(null)}
              >
                <span>Close Inspector</span>
              </button>
            </div>
          </div>

          <p style={{ color: '#a1a1a6', fontSize: '0.9rem', marginBottom: '16px' }}>{selectedSkill.description}</p>

          {/* Interactive Level Switcher */}
          <div>
            <div className="mono" style={{ fontSize: '0.75rem', color: '#ff453a', marginBottom: '8px', textTransform: 'uppercase' }}>
              Adjust Proficiency Level:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  className={`copy-btn ${selectedSkill.level === lvl ? 'active' : ''}`}
                  style={{
                    borderColor: selectedSkill.level === lvl ? '#ff453a' : 'var(--border-subtle)',
                    background: selectedSkill.level === lvl ? 'rgba(255, 69, 58, 0.15)' : 'rgba(255,255,255,0.03)'
                  }}
                  onClick={() => handleUpdateLevel(selectedSkill.id, lvl)}
                >
                  {selectedSkill.level === lvl && <Check size={12} color="#ff453a" />}
                  <span>{lvl}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Add Custom Skill Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-window" style={{ maxWidth: '480px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-titlebar">
              <div className="modal-controls">
                <button className="modal-dot modal-dot-close" onClick={() => setShowAddModal(false)} />
              </div>
              <span className="mono" style={{ fontSize: '0.8rem', color: '#86868b' }}>skills.add_entry</span>
              <div style={{ width: 32 }} />
            </div>

            <form onSubmit={handleAddSkill} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label className="form-label">Skill Name</label>
                <input
                  className="form-input"
                  style={{ width: '100%' }}
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. KiCAD / Verilog"
                  required
                />
              </div>

              <div>
                <label className="form-label">Category</label>
                <select
                  className="form-input"
                  style={{ width: '100%' }}
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as Skill['category'])}
                >
                  {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Proficiency Level</label>
                <select
                  className="form-input"
                  style={{ width: '100%' }}
                  value={newLevel}
                  onChange={(e) => setNewLevel(e.target.value as Skill['level'])}
                >
                  {levels.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Description / Scope</label>
                <textarea
                  className="form-input"
                  style={{ width: '100%', minHeight: '80px' }}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Hands-on bench experience or coursework scope..."
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Save Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
