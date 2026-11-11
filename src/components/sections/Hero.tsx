import { Cpu, Camera, Terminal, ExternalLink } from 'lucide-react';
import type { Project } from '../../data/projects';

interface HeroProps {
  projects: Project[];
  onSelectProjectChip: (title: string) => void;
}

export default function Hero({ projects, onSelectProjectChip }: HeroProps) {
  const workingCount = projects.filter(p => p.status === 'Working prototype').length;
  const inProgressCount = projects.filter(p => p.status === 'In progress').length;
  const totalComponents = projects.reduce((acc, p) => acc + p.components.length, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="workbench" className="hero-section container">
      {/* Super-Header Tag */}
      <span className="hero-subtitle-tag mono">
        ENGINEERING WORKSPACE · PERSONAL BUILD RECORD
      </span>

      {/* Main Identity */}
      <h1 className="hero-name">Mohanbharathi P</h1>
      <h2 className="hero-discipline">Electronics and Communication Engineering student</h2>
      <div className="hero-institution">
        Specialization: Data Science · SRM Institute of Science and Technology
      </div>

      {/* Intro Bio */}
      <p className="hero-bio">
        A working record of hardware builds: circuits drawn, components sourced, prototypes tested and failures noted — alongside a personal photography gallery.
      </p>

      {/* CTA Buttons */}
      <div className="hero-actions">
        <button
          className="btn-primary"
          onClick={() => scrollToSection('projects')}
        >
          <Cpu size={18} />
          <span>Explore the projects</span>
        </button>
        <button
          className="btn-secondary"
          onClick={() => scrollToSection('photography')}
        >
          <Camera size={18} />
          <span>Photography gallery</span>
        </button>
      </div>

      {/* 3 Overview Quick Cards */}
      <div className="hero-trio">
        <div className="trio-card">
          <Terminal size={22} className="trio-card__icon" />
          <div>
            <div className="trio-card__val mono">8</div>
            <div className="trio-card__sub">documented builds</div>
          </div>
        </div>

        <div className="trio-card">
          <Cpu size={22} className="trio-card__icon" />
          <div>
            <div className="trio-card__val">Discrete logic</div>
            <div className="trio-card__sub">and microcontrollers</div>
          </div>
        </div>

        <div className="trio-card">
          <Camera size={22} className="trio-card__icon" />
          <div>
            <div className="trio-card__val mono">1 gallery</div>
            <div className="trio-card__sub">personal photography</div>
          </div>
        </div>
      </div>

      {/* WORKBENCH STATUS: What is on the bench (Matching Screenshot 2) */}
      <div className="workbench-box">
        <div className="section-meta" style={{ marginBottom: '6px' }}>
          <span className="section-tag mono">WORKBENCH STATUS</span>
        </div>

        <div className="workbench-box__header">
          <h3 className="workbench-box__title">What is on the bench</h3>
          <span className="workbench-box__pill">
            <span className="header__dot" style={{ width: 6, height: 6 }} />
            <span>live snapshot</span>
          </span>
        </div>

        {/* 4 Metrics Cards */}
        <div className="workbench-metrics">
          <div className="metric-card">
            <div className="metric-card__num mono">{workingCount}</div>
            <div className="metric-card__label">Working prototypes</div>
          </div>
          <div className="metric-card">
            <div className="metric-card__num mono">{inProgressCount}</div>
            <div className="metric-card__label">In progress</div>
          </div>
          <div className="metric-card">
            <div className="metric-card__num mono">{totalComponents}</div>
            <div className="metric-card__label">Components listed</div>
          </div>
          <div className="metric-card">
            <div className="metric-card__num mono">7</div>
            <div className="metric-card__label">Domains covered</div>
          </div>
        </div>

        {/* 8 Project Chips */}
        <div className="workbench-chips">
          {projects.map((proj) => (
            <button
              key={proj.id}
              className="workbench-chip"
              onClick={() => {
                onSelectProjectChip(proj.title);
                scrollToSection('projects');
              }}
            >
              <span className="header__dot" style={{ width: 6, height: 6 }} />
              <span>{proj.title}</span>
              <ExternalLink size={12} style={{ opacity: 0.6 }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

