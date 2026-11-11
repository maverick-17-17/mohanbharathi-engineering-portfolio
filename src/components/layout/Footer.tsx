export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="header__dot" style={{ width: 8, height: 8 }} />
            <strong style={{ color: '#f5f5f7' }}>Mohanbharathi P</strong>
            <span style={{ color: '#6e6e73' }}>— Engineering Portfolio & Laboratory Archive</span>
          </div>
          <div style={{ color: '#86868b', fontSize: '0.8rem' }}>
            SRM Institute of Science and Technology · Department of Electronics and Communication Engineering
          </div>
        </div>

        <div className="footer__right">
          <span>STATUS: ACTIVE BENCH</span>
          <span>EST. {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}

