import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { copyToClipboard } from '../../utils/helpers';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const email = 'pmohanbharathi2007@gmail.com';
  const phone = '+91 9043631977';

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(email);
    if (ok) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyPhone = async () => {
    const ok = await copyToClipboard(phone);
    if (ok) {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) {
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    // Launch mailto client
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(formSubject || `Portfolio Inquiry from ${formName}`)}&body=${encodeURIComponent(`Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMsg}`)}`;
    window.location.href = mailtoUrl;

    setStatusMessage('Opening default email application to deliver your message.');
    setTimeout(() => setStatusMessage(''), 6000);
  };

  return (
    <section id="contact" className="contact-section container">
      {/* Section Header */}
      <div className="section-meta">
        <span className="section-tag mono">SECTION 05</span>
        <div className="window-dots-tag">
          <span className="dot-red" />
          <span className="dot-yellow" />
          <span className="dot-green" />
          <span>contact.terminal</span>
        </div>
      </div>

      <h2 className="section-title">Direct Engineering Contact</h2>
      <p className="section-desc">
        Reach out for hardware collaboration, bench experimentation discussions, academic queries or technical consultations.
      </p>

      <div className="contact-grid">
        {/* Contact Info Card */}
        <div className="contact-card">
          <div className="mono" style={{ fontSize: '0.75rem', color: '#ff453a', letterSpacing: '0.1em', marginBottom: '8px', textTransform: 'uppercase' }}>
            Verified Identity
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f5f5f7', marginBottom: '4px' }}>
            Mohanbharathi P
          </h3>
          <p style={{ color: '#86868b', fontSize: '0.88rem', marginBottom: '24px' }}>
            ECE Undergraduate · SRM Institute of Science and Technology
          </p>

          <div className="contact-info-list">
            {/* Email item */}
            <div className="contact-info-item">
              <div className="contact-info-left">
                <Mail size={18} className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">Email Address</div>
                  <a href={`mailto:${email}`} className="contact-info-val mono">
                    {email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyEmail}
                title="Copy email address"
              >
                {copiedEmail ? <Check size={14} color="#30d158" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Telephone item */}
            <div className="contact-info-item">
              <div className="contact-info-left">
                <Phone size={18} className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">Direct Line</div>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-info-val mono">
                    {phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={handleCopyPhone}
                title="Copy phone number"
              >
                {copiedPhone ? <Check size={14} color="#30d158" /> : <Copy size={14} />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Campus Location */}
            <div className="contact-info-item">
              <div className="contact-info-left">
                <MapPin size={18} className="contact-info-icon" />
                <div>
                  <div className="contact-info-label">Academic Campus</div>
                  <div className="contact-info-val" style={{ fontSize: '0.9rem' }}>
                    SRMIST Kattankulathur, Chennai, Tamil Nadu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Message Form */}
        <div className="contact-card">
          <div className="mono" style={{ fontSize: '0.75rem', color: '#ff453a', letterSpacing: '0.1em', marginBottom: '8px', textTransform: 'uppercase' }}>
            Dispatch Message
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f5f5f7', marginBottom: '18px' }}>
            Send a Dispatch Note
          </h3>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your name or affiliation"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Your Email Address *</label>
              <input
                type="email"
                className="form-input"
                placeholder="name@domain.com"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Hardware Collaboration / Query"
                value={formSubject}
                onChange={(e) => setFormSubject(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message Details *</label>
              <textarea
                className="form-textarea"
                placeholder="Write your note, question or project proposal..."
                value={formMsg}
                onChange={(e) => setFormMsg(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '6px' }}>
              <Send size={16} />
              <span>Send Message</span>
            </button>

            {statusMessage && (
              <div className="mono" style={{ fontSize: '0.8rem', color: '#30d158', marginTop: '8px' }}>
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
