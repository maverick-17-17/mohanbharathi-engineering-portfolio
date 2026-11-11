import { useState } from 'react';
import type { Project } from '../../data/projects';
import ProjectIcon from './ProjectIcon';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  // Expanded if hovered or clicked/pinned on mobile
  const expanded = isHovered || isPinned;

  return (
    <div
      className={`project-card ${expanded ? 'is-expanded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsPinned(!isPinned)}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsPinned(!isPinned);
        }
      }}
    >
      {/* Top Metadata */}
      <div className="project-card__top">
        <span className="project-card__id">{project.number}</span>
        <span className="project-card__category">{project.category}</span>
      </div>

      {/* Technical Symbol Artwork */}
      <div className="project-card__icon-wrap">
        <ProjectIcon id={project.id} size={54} />
      </div>

      {/* Badges */}
      <div className="project-card__tags">
        <span className={`tag-badge ${project.status === 'Working prototype' ? 'status-prototype' : 'status-progress'}`}>
          {project.status}
        </span>
        <span className="tag-badge">{project.year}</span>
        <span className="tag-badge">{project.filterCategory}</span>
      </div>

      {/* Title & Brief */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__brief">{project.shortDescription}</p>

      {/* EXPANDING DETAILS ON HOVER / CLICK */}
      <div className="project-card__expanded-content" onClick={(e) => e.stopPropagation()}>
        {/* Overview */}
        <div className="expanded-section-title">Overview</div>
        <p className="expanded-text">{project.overview}</p>

        {/* Working Principle */}
        <div className="expanded-section-title">Working Principle</div>
        <p className="expanded-text">{project.workingPrinciple}</p>

        {/* Architecture / Circuit Flow */}
        <div className="expanded-section-title">Architecture / Circuit Flow</div>
        <div className="arch-flow-box">{project.architectureDiagram}</div>

        {/* Implementation Details */}
        <div className="expanded-section-title">Implementation Details</div>
        <p className="expanded-text">{project.implementationDetails}</p>

        {/* Component Inventory Preview */}
        <div className="expanded-section-title">Component Inventory ({project.components.length} Listed)</div>
        <div className="bom-mini-pills">
          {project.components.slice(0, 5).map((comp) => (
            <span key={comp.id} className={`bom-pill ${comp.status === 'Installed' ? 'installed' : ''}`}>
              {comp.name} {comp.verified ? '✓' : '?'}
            </span>
          ))}
          {project.components.length > 5 && (
            <span className="bom-pill">+{project.components.length - 5} more</span>
          )}
        </div>

        {/* Testing & Observations */}
        <div className="expanded-section-title">Testing & Observations</div>
        <p className="expanded-text">{project.testingObservations}</p>

        {/* Challenges */}
        <div className="expanded-section-title">Challenges</div>
        <p className="expanded-text">{project.challenges}</p>

        {/* Development Status */}
        <div className="expanded-section-title">Development Status</div>
        <p className="expanded-text">{project.developmentStatus}</p>

        {/* Future Improvements */}
        <div className="expanded-section-title">Future Improvements</div>
        <p className="expanded-text">{project.futureImprovements}</p>

        {/* Project Photographs note */}
        <div className="expanded-section-title">Project Documentation Images</div>
        <p className="expanded-text" style={{ fontStyle: 'italic', color: '#86868b' }}>
          Lab bench schematics and prototype photographs documented in the full case-study window.
        </p>
      </div>

      {/* Card Footer with Modal Trigger */}
      <div className="project-card__footer">
        <button
          className="project-card__action"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(project);
          }}
        >
          <span>Open full documentation</span>
          <ArrowUpRight size={14} />
        </button>

        <span style={{ color: '#6e6e73', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          <span className="mono">{expanded ? 'Collapse' : 'Hover / Tap'}</span>
        </span>
      </div>
    </div>
  );
}

