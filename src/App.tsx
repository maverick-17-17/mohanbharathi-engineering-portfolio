import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import ProjectExplorer from './components/sections/ProjectExplorer';
import Photography from './components/sections/Photography';
import Contact from './components/sections/Contact';
import { initialProjects } from './data/projects';
import type { Project } from './data/projects';
import { useLocalStorage } from './hooks/useLocalStorage';
import './styles/theme.css';

export default function App() {
  const [projects, setProjects] = useLocalStorage<Project[]>('mohanbharathi_projects_data', initialProjects);
  const [selectedChipTitle, setSelectedChipTitle] = useState<string>('');

  const handleSelectChip = (title: string) => {
    setSelectedChipTitle(title);
  };

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero
          projects={projects}
          onSelectProjectChip={handleSelectChip}
        />
        <About />
        <Skills />
        <ProjectExplorer
          projects={projects}
          onUpdateProjects={setProjects}
          selectedFilterTitle={selectedChipTitle}
        />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
