import { GraduationCap, Compass, Layers, CheckCircle } from 'lucide-react';

export default function About() {
  const academicMarks = [
    { label: 'Class X Secondary', score: '85%' },
    { label: 'Class XII Higher Secondary', score: '87%' },
    { label: 'JEE Main (Engineering)', score: '92%ile' },
    { label: 'JEE Main (B.Arch / Architecture)', score: '97%ile' }
  ];

  const interests = [
    'Electronics restoration & component salvage',
    'Vintage watch mechanical restoration',
    'DIY embedded hardware systems',
    'Hardware experimentation at component level',
    '3D modeling, CAD drafting & FDM printing',
    'Local offline AI models & edge computing',
    'Observational & hardware macro photography',
    'Rigorous technical documentation & lab journaling',
    'Knowledge sharing & peer tutoring',
    'Hardware product prototyping & entrepreneurship'
  ];

  return (
    <section id="about" className="container" style={{ padding: '80px 24px', borderTop: '1px solid var(--border-subtle)' }}>
      {/* Section Meta */}
      <div className="section-meta">
        <span className="section-tag mono">SECTION 01</span>
        <div className="window-dots-tag">
          <span className="dot-red" />
          <span className="dot-yellow" />
          <span className="dot-green" />
          <span>engineer.profile</span>
        </div>
      </div>

      <h2 className="section-title">About Mohanbharathi P</h2>
      <p className="section-desc">
        Electronics and Communication Engineering undergraduate at SRM Institute of Science and Technology, specializing in Data Science.
      </p>

      {/* Two Column Layout: Narrative & Academic Profile */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginTop: '36px' }}>
        {/* Left Column: Narrative */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <Compass size={20} color="#ff453a" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#f5f5f7' }}>Engineering Philosophy</h3>
          </div>

          <p style={{ color: '#d1d1d6', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '16px' }}>
            My engineering work is rooted in hands-on hardware exploration: understanding electronic circuits at the discrete component level, probing signal propagation on the bench, and breathing new utility into vintage and discarded devices.
          </p>
          <p style={{ color: '#d1d1d6', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '16px' }}>
            Rather than relying solely on high-level software abstractions, I enjoy building systems from the silicon and solder upward—from 7400-series TTL combinational logic and NE555 timer multivibrators to ESP32 FreeRTOS microcontrollers, local AI pipelines, and mechanical horological teardowns.
          </p>
          <p style={{ color: '#a1a1a6', fontSize: '0.88rem', lineHeight: '1.6' }}>
            Every experiment is documented with genuine observations, recorded component bills of materials, and noted failure modes.
          </p>
        </div>

        {/* Right Column: Academic Record & Certifications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Institution Card */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <GraduationCap size={20} color="#ff453a" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#f5f5f7' }}>SRM Institute of Science and Technology</h3>
            </div>
            <div className="mono" style={{ fontSize: '0.85rem', color: '#ff6961', marginBottom: '6px' }}>
              Department of Electronics and Communication Engineering
            </div>
            <div style={{ fontSize: '0.85rem', color: '#86868b' }}>
              Specialization: Data Science · Active Undergraduate Coursework
            </div>

            {/* Academic Scores Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '16px' }}>
              {academicMarks.map((m, i) => (
                <div key={i} style={{ background: 'rgba(14, 16, 22, 0.7)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '10px 14px' }}>
                  <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f5f5f7' }}>{m.score}</div>
                  <div style={{ fontSize: '0.75rem', color: '#86868b' }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Verified Certifications */}
            <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
              <div className="mono" style={{ fontSize: '0.75rem', color: '#86868b', marginBottom: '8px', textTransform: 'uppercase' }}>
                Coursework Certifications
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="mono" style={{ fontSize: '0.78rem', background: 'rgba(48,209,88,0.1)', color: '#30d158', border: '1px solid rgba(48,209,88,0.25)', padding: '4px 10px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle size={12} /> Python Certification
                </span>
                <span className="mono" style={{ fontSize: '0.78rem', background: 'rgba(48,209,88,0.1)', color: '#30d158', border: '1px solid rgba(48,209,88,0.25)', padding: '4px 10px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle size={12} /> 3D Modelling Certification
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interests Matrix */}
      <div style={{ marginTop: '36px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '24px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <Layers size={18} color="#ff453a" />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f5f5f7' }}>Core Engineering Interests</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
          {interests.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#d1d1d6' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff453a', flexShrink: 0 }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
