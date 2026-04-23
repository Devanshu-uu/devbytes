import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'socials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 64,
        transition: 'background 300ms ease, border-color 300ms ease',
        background: scrolled ? 'rgba(0,0,0,0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #171717' : '1px solid transparent',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => scrollTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <span style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontWeight: 800, fontSize: 27, letterSpacing: '0.05em' }}>
              <span style={{ color: '#ef4444' }}>DEV</span>
              <span style={{ color: '#fff' }}>BYTES</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '12px 12px', position: 'relative',
                fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 14,
                color: active === item.id ? '#ef4444' : '#d4d4d4',
                transition: 'color 200ms ease',
              }}
                onMouseEnter={e => { if (active !== item.id) e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { if (active !== item.id) e.currentTarget.style.color = '#d4d4d4'; }}
              >
                {item.label}
                <span style={{
                  position: 'absolute', bottom: -2, left: 12, right: 12, height: 2,
                  background: '#ef4444',
                  transform: active === item.id ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 200ms ease',
                  borderRadius: 9999,
                }} />
              </button>
            ))}
          </div>

          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 4 }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'rgba(0,0,0,0.95)',
          paddingTop: 80, paddingLeft: 24, paddingRight: 24,
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} style={{
                background: active === item.id ? 'rgba(239,68,68,0.1)' : 'transparent',
                border: '1px solid', borderColor: active === item.id ? 'rgba(239,68,68,0.3)' : '#262626',
                borderRadius: 8, padding: '10px 12px',
                color: active === item.id ? '#ef4444' : '#d4d4d4',
                fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500,
                cursor: 'pointer', textAlign: 'left',
              }}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}