import { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export interface PhotoItem {
  id: string;
  title: string;
  category: string;
  year: string;
  url: string;
  description: string;
}

const defaultPhotos: PhotoItem[] = [
  {
    id: 'ph-1',
    title: 'Heritage Dome at Twilight',
    category: 'Architecture',
    year: '2024',
    url: '/images/photography/heritage-dome.jpg',
    description: 'Illuminated neoclassical dome with warm accent lighting and crescent moon in the night sky.'
  },
  {
    id: 'ph-2',
    title: 'Solar Meridian & Ridgeline',
    category: 'Sunset',
    year: '2025',
    url: '/images/photography/sunset-silhouettes.jpg',
    description: 'Golden hour sunset casting deep tree silhouettes against distant mountain terrain.'
  },
  {
    id: 'ph-3',
    title: 'Solitary Gold-Lined Cloud',
    category: 'Clouds',
    year: '2024',
    url: '/images/photography/golden-cloud.jpg',
    description: 'Isolated low-altitude cloud catching warm sunset amber light against a textured altocumulus sky.'
  },
  {
    id: 'ph-4',
    title: 'Vertical Cumulus Formations',
    category: 'Clouds',
    year: '2025',
    url: '/images/photography/cumulus-tower.jpg',
    description: 'Towering cloud column rising through atmospheric layers during evening transition.'
  },
  {
    id: 'ph-5',
    title: 'Arched Fenestration Facade',
    category: 'Architecture',
    year: '2024',
    url: '/images/photography/arched-facade.jpg',
    description: 'Repetitive arched window bays and electrical grid lines framed by urban foliage.'
  }
];

export default function Photography() {
  const [photos, setPhotos] = useLocalStorage<PhotoItem[]>('mohanbharathi_gallery_photos_v2', defaultPhotos);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['All', 'Clouds', 'Architecture', 'Sunset'];

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(p => p.category === selectedCategory);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const newPhoto: PhotoItem = {
            id: `user-ph-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
            title: file.name.replace(/\.[^/.]+$/, ''),
            category: selectedCategory === 'All' ? 'Observational' : selectedCategory,
            year: '2026',
            url: event.target.result as string,
            description: 'Direct owner upload to engineering photography archive.'
          };
          setPhotos(prev => [newPhoto, ...prev]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <section id="photography" className="photography-section container">
      {/* Section Header */}
      <div className="section-meta">
        <span className="section-tag mono">SECTION 04</span>
        <div className="window-dots-tag">
          <span className="dot-red" />
          <span className="dot-yellow" />
          <span className="dot-green" />
          <span>art.gallery</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 className="section-title">The Engineering & Light Gallery</h2>
          <p className="section-desc">
            Observational photography, architectural geometry, cloud formations and light studies captured by Mohanbharathi P.
          </p>
        </div>

        {/* Upload Action */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            multiple
            onChange={handleFileUpload}
          />
          <button
            className="btn-primary"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload size={16} />
            <span>Upload More Photos</span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="filter-pills" style={{ marginTop: '24px', marginBottom: '8px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* THEATRICAL ART GALLERY STAGE WITH CURTAINS */}
      <div className="gallery-stage">
        {/* Velvet Theatre Curtains Framing */}
        <div className="curtain-drape-top" aria-hidden="true" />
        <div className="curtain-drape-left" aria-hidden="true" />
        <div className="curtain-drape-right" aria-hidden="true" />

        {/* Overhead Museum Spotlights */}
        <div className="gallery-spotlight" aria-hidden="true" />

        {/* Framed Wall Grid */}
        <div className="gallery-grid">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-frame"
              onClick={() => setActivePhoto(photo)}
              role="button"
              tabIndex={0}
            >
              <div className="gallery-frame__image-wrap" style={{ height: '280px' }}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="gallery-frame__img"
                  loading="lazy"
                />
              </div>

              {/* Museum Brass-Style Placard */}
              <div className="gallery-placard">
                <div className="gallery-placard__title">{photo.title}</div>
                <div className="gallery-placard__meta">
                  {photo.category} · {photo.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="modal-overlay" onClick={() => setActivePhoto(null)}>
          <div
            className="modal-window"
            style={{ maxWidth: '820px', background: '#090a0f', borderColor: 'rgba(255,255,255,0.15)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-titlebar">
              <div className="modal-controls">
                <button className="modal-dot modal-dot-close" onClick={() => setActivePhoto(null)} />
              </div>
              <span className="modal-title-text mono">{activePhoto.title}</span>
              <div style={{ width: 32 }} />
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ maxWidth: '100%', maxHeight: '70vh', overflow: 'hidden', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '70vh', objectFit: 'contain' }}
                />
              </div>

              <div style={{ width: '100%', marginTop: '16px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#f5f5f7', fontWeight: 600 }}>{activePhoto.title}</h3>
                <p className="mono" style={{ fontSize: '0.8rem', color: '#ff453a', marginTop: '4px' }}>
                  {activePhoto.category} · {activePhoto.year}
                </p>
                <p style={{ fontSize: '0.88rem', color: '#a1a1a6', marginTop: '8px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                  {activePhoto.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
