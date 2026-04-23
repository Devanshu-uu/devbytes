import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function BlogNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.6)]' : ''}`}
        style={{
          background: scrolled ? 'rgba(13,17,23,0.98)' : 'rgba(13,17,23,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #21262d',
          height: scrolled ? '56px' : '68px',
        }}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="font-black text-xl tracking-widest" style={{ textDecoration: 'none' }}>
            <span style={{ WebkitTextStroke: '1px #f85149', color: 'transparent' }}>DEV</span>
            <span style={{ color: '#e6edf3' }}>BYTES</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <li key={l.label}>
                <Link to={l.href}
                  className="text-sm font-medium tracking-wide transition-colors"
                  style={{
                    color: location.pathname === l.href ? '#f85149' : '#8b949e',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => e.target.style.color = '#f85149'}
                  onMouseLeave={e => e.target.style.color = location.pathname === l.href ? '#f85149' : '#8b949e'}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: '#e6edf3' }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(13,17,23,0.99)' }}>
        {navLinks.map(l => (
          <Link key={l.label} to={l.href} onClick={() => setOpen(false)}
            className="text-2xl font-bold transition-colors"
            style={{ color: '#e6edf3', textDecoration: 'none' }}
            onMouseEnter={e => e.target.style.color = '#f85149'}
            onMouseLeave={e => e.target.style.color = '#e6edf3'}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}