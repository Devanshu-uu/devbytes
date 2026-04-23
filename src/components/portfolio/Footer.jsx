import React from 'react';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Socials', id: 'socials' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#070707', borderTop: '1px solid #171717', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }} className="md:flex-row md:justify-between">
        <div>
          <div style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontWeight: 800, fontSize: 20, letterSpacing: '0.05em', marginBottom: 4 }}>
            <span style={{ color: '#ef4444' }}>DEV</span><span style={{ color: '#fff' }}>BYTES</span>
          </div>
          <p style={{ fontSize: 14, color: '#737373', margin: 0 }}>© 2026 Devanshu. All rights reserved.</p>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: '#a3a3a3', transition: 'color 180ms ease' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
              onMouseLeave={e => e.currentTarget.style.color = '#a3a3a3'}>
              {label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}