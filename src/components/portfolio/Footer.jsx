// src/components/portfolio/Footer.jsx

import React from 'react';
import { Github, Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'socials' },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Devanshu-uu', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/devanshu-mohriya', icon: Linkedin },
  { label: 'Email', href: 'mailto:devanshumohriya@gmail.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#070707',
        borderTop: '1px solid #171717',
        padding: '56px 24px 36px',
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gap: 28,
            alignItems: 'start',
          }}
          className="md:grid-cols-[1.2fr_0.8fr_0.8fr]"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'Space Grotesk, Inter, sans-serif',
                fontWeight: 800,
                fontSize: 28,
                letterSpacing: '0.05em',
                marginBottom: 12,
              }}
            >
              <span style={{ color: '#ef4444' }}>DEV</span>
              <span style={{ color: '#fff' }}>BYTES</span>
            </div>

            <p
              style={{
                fontSize: 15,
                color: '#a3a3a3',
                lineHeight: 1.8,
                maxWidth: 420,
                margin: 0,
              }}
            >
              A personal portfolio focused on web development, data science, and AI — built
              to showcase projects, growth, and professional potential.
            </p>
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#737373',
                marginBottom: 16,
              }}
            >
              Quick Links
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 15,
                    color: '#d4d4d4',
                    textAlign: 'left',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#d4d4d4')}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#737373',
                marginBottom: 16,
              }}
            >
              Connect
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SOCIALS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      color: '#d4d4d4',
                      textDecoration: 'none',
                      fontSize: 15,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#d4d4d4')}
                  >
                    <Icon size={16} />
                    {item.label}
                    <ArrowUpRight size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 36,
            paddingTop: 20,
            borderTop: '1px solid #171717',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: 14, color: '#737373', margin: 0 }}>
            © 2026 Devanshu. All rights reserved.
          </p>

          <p style={{ fontSize: 14, color: '#737373', margin: 0 }}>
            Built with React, Vite & a lot of late-night effort.
          </p>
        </div>
      </div>
    </footer>
  );
}