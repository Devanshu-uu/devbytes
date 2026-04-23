import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Youtube, Linkedin } from 'lucide-react';

const sections = [
  {
    title: 'Main',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Projects', href: '/#projects' },
      { label: 'YouTube', href: '/#youtube' },
      { label: 'Skills', href: '/#skills' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'GitHub', href: '#', icon: <Github size={13} /> },
      { label: 'Twitter (X)', href: '#', icon: <Twitter size={13} /> },
      { label: 'YouTube', href: '#', icon: <Youtube size={13} /> },
      { label: 'LinkedIn', href: '#', icon: <Linkedin size={13} /> },
    ],
  },
];

export default function BlogFooter() {
  return (
    <footer style={{ background: '#0d1117', borderTop: '1px solid #21262d' }}>
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {sections.map(s => (
            <div key={s.title}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#8b949e' }}>{s.title}</p>
              <ul className="space-y-2">
                {s.links.map(l => (
                  <li key={l.label}>
                    <a href__={l.href}
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: '#8b949e', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#f85149'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8b949e'}
                    >
                      {l.icon} {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 text-center text-xs" style={{ borderTop: '1px solid #21262d', color: '#8b949e' }}>
          Made with ❤️ in India &nbsp;·&nbsp; DevBytes © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}