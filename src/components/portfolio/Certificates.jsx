import React, { useState } from 'react';
import { X, BadgeCheck } from 'lucide-react';
import { a } from 'framer-motion/client';

const CERTS = [
  { title: 'GeoGebra Training', issuer: 'IIT Bombay', category: 'Technical', image: 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/e3658b534_1111.jpg' },
  { title: 'Arduino Training', issuer: 'IIT Bombay', category: 'Technical', image: 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/fd390b929_11112.jpg' },
  { title: 'Java Bootcamp', issuer: 'LetsUpgrade', category: 'Programming', image: 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/b761f22b4_LUEJAVAAUG1254001_page-0001.jpg' },
  { title: 'Python Bootcamp', issuer: 'LetsUpgrade', category: 'Programming', image: 'https://media.base44.com/images/public/69bdc87402b020b7249e66f1/300216592_python_page-0001.jpg' },
  { title: 'Analytical Tools and Techniques', issuer: 'University of Delhi', category: 'Science', image: '/chemistry.jpg' },
];

const TABS = ['Science','Technical', 'Programming'];

export default function Certificates() {
  const [modal, setModal] = useState(null);
  const [activeTab, setActiveTab] = useState('Science');
  const filtered = CERTS.filter(c => c.category === activeTab);

  return (
    <section id="certificates" style={{ background: '#0a0a0a', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <p className="kicker">ACHIEVEMENTS</p>
        <h2 className="section-title">My <span style={{ color: '#ef4444' }}>Certificates</span></h2>
        <p style={{ textAlign: 'center', color: '#a3a3a3', fontSize: 16, marginTop: 12 }}>Certifications and achievements that validate my skills</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 40 }}>
          {TABS.map(tab => (
            <button key={tab} className={`filter-pill ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gap: 24, marginTop: 36, maxWidth: 800, margin: '36px auto 0' }} className="md:grid-cols-2 grid">
          {filtered.map((cert) => (
            <div key={cert.title} style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 24px rgba(0,0,0,0.4)', border: '2px solid #e5e5e5', transition: 'transform 200ms ease, box-shadow 200ms ease' }}
              onClick={() => setModal(cert)}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)'; }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#f5f5f5' }}>
                <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ background: '#111', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, color: '#fff' }}>{cert.title}</div>
                  <div style={{ fontSize: 13, color: '#a3a3a3', marginTop: 2 }}>{cert.issuer}</div>
                </div>
                <button style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 8, background: '#1a1a1a', border: '1px solid #333', color: '#fff', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                  onClick={e => { e.stopPropagation(); setModal(cert); }}>
                  <BadgeCheck size={15} style={{ color: '#ef4444' }} /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
          onClick={() => setModal(null)}>
          <div style={{ position: 'relative', maxWidth: 900, width: '100%' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setModal(null)} style={{ position: 'absolute', top: -16, right: -16, zIndex: 1, width: 40, height: 40, borderRadius: '50%', background: '#171717', border: '1px solid #262626', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <X size={18} />
            </button>
            <img src={modal.image} alt={modal.title} style={{ width: '100%', borderRadius: 18, display: 'block' }} />
          </div>
        </div>
      )}
    </section>
  );
}