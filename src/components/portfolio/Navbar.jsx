import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        background: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
        padding: '16px 24px',
        zIndex: 50
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
          <h2 style={{ color: '#ef4444' }}>DEVBYTES</h2>

          <div style={{ display: 'flex', gap: '20px' }}>
            {NAV_ITEMS.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                {item.label}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: 'white' }}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 60,
          left: 0,
          right: 0,
          background: 'black',
          padding: '20px'
        }}>
          {NAV_ITEMS.map(item => (
            <div key={item.id}>
              <button onClick={() => scrollTo(item.id)}
                style={{ color: 'white', margin: '10px 0', background: 'none', border: 'none' }}>
                {item.label}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
