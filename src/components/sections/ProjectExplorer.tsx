import { useState, useMemo } from 'react';
import type { Project, ComponentItem } from '../../data/projects';
import ProjectCard from '../projects/ProjectCard';
import ProjectDetailModal from '../projects/ProjectDetailModal';
import { Search } from 'lucide-react';

interface ProjectExplorerProps {
  projects: Project[];
  onUpdateProjects: (updated: Project[]) => void;
  selectedFilterTitle?: string;
}

export default function ProjectExplorer({ projects, onUpdateProjects, selectedFilterTitle }: ProjectExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>(selectedFilterTitle || '');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Electronics',
    'Embedded Systems',
    'Digital Electronics',
    'AI / Computing',
    'Restoration',
    'Mechanical Design'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Category filter
      const matchesCategory = activeCategory === 'All' || p.filterCategory === activeCategory;

      // Text search across name, category, components, technologies
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesText =
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.technologies.some(t => t.toLowerCase().includes(query)) ||
        p.components.some(c => c.name.toLowerCase().includes(query) || c.spec.toLowerCase().includes(query));

      return matchesCategory && matchesText;
    });
  }, [projects, activeCategory, searchQuery]);

  const handleUpdateComponents = (projectId: string, newComponents: ComponentItem[]) => {
    const updated = projects.map(p => p.id === projectId ? { ...p, components: newComponents } : p);
    onUpdateProjects(updated);
    if (activeModalProject && activeModalProject.id === projectId) {
      setActiveModalProject({ ...activeModalProject, components: newComponents });
    }
  };

  return (
    <section id="projects" className="projects-section container">
      {/* Section Header */}
      <div className="section-meta">
        <span className="section-tag mono">SECTION 03</span>
        <div className="window-dots-tag">
          <span className="dot-red" />
          <span className="dot-yellow" />
          <span className="dot-green" />
          <span>project.explorer</span>
        </div>
      </div>

      <h2 className="section-title">Project Explorer</h2>
      <p className="section-desc">
        Hover a project to inspect its working brief, status and inventory before opening the full case-study window.
      </p>

      {/* Search and Category Filter Controls */}
      <div className="projects-controls">
        <div className="search-box-wrapper">
          <Search size={18} className="search-icon-pos" />
          <input
            type="text"
            className="search-input mono"
            placeholder="Search projects, components or technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-count-pill">
            {filteredProjects.length} / {projects.length} records
          </span>
        </div>

        <div className="filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Card Grid */}
      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onOpenModal={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(18,20,28,0.5)', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
          <p className="mono" style={{ color: '#86868b', fontSize: '0.9rem', marginBottom: '12px' }}>
            No engineering records found matching "{searchQuery}"
          </p>
          <button
            className="btn-secondary"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Case-Study Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onUpdateComponents={handleUpdateComponents}
      />
    </section>
  );
}
