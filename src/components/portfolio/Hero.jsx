// src/components/portfolio/Hero.jsx

import React, { useState, useEffect } from 'react';
import { Users, Download, ChevronDown, Sparkles, Briefcase, FolderKanban } from 'lucide-react';

const ROLES = ['Data Analyst', 'AI Enthusiast'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timer;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && text === '') {
      setDeleting(false);
      setRoleIdx((p) => (p + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }, deleting ? 45 : 90);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at center, rgba(239,68,68,0.18) 0%, rgba(239,68,68,0.04) 35%, transparent 65%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'rgba(220,38,38,0.15)',
          filter: 'blur(140px)',
          top: -160,
          left: -160,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'rgba(239,68,68,0.10)',
          filter: 'blur(160px)',
          bottom: -160,
          right: -160,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.04,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1280,
          margin: '0 auto',
          padding: '112px 24px 64px',
          width: '100%',
        }}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 9999,
                border: '1px solid rgba(239,68,68,0.30)',
                background: 'rgba(239,68,68,0.10)',
                color: '#f87171',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              <Sparkles size={13} /> WELCOME TO MY PORTFOLIO
            </div>

            <div style={{ marginTop: 24, lineHeight: 0.95, letterSpacing: '-0.01em' }}>
              <div
                style={{
                  fontFamily: 'Space Grotesk, Inter, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(48px, 8vw, 72px)',
                  color: '#fafafa',
                }}
              >
                Hi, I&apos;m
              </div>
              <div
                style={{
                  fontFamily: 'Space Grotesk, Inter, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(60px, 10vw, 92px)',
                  background: 'linear-gradient(to right, #ef4444, #f87171, #dc2626)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                DEVANSHU
              </div>
            </div>

            <div
              className="flex items-center justify-center lg:justify-start"
              style={{ marginTop: 20, height: 40 }}
            >
              <span
                style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontWeight: 500,
                  color: '#d4d4d4',
                  whiteSpace: 'nowrap',
                }}
              >
                I&apos;m a&nbsp;
              </span>
              <span
                style={{
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontWeight: 700,
                  color: '#ef4444',
                }}
              >
                {text}
              </span>
              <span className="caret" style={{ flexShrink: 0 }} />
            </div>

            <p
              style={{
                marginTop: 24,
                maxWidth: 620,
                fontSize: 'clamp(15px, 2vw, 18px)',
                color: '#a3a3a3',
                lineHeight: 1.7,
              }}
              className="mx-auto lg:mx-0"
            >
              I build responsive web experiences, data-driven dashboards, and practical
              AI projects. I’m focused on creating work that looks strong, solves real
              problems, and helps me grow into a high-value developer.
            </p>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start"
              style={{ marginTop: 36, gap: 12 }}
            >
              <button
                className="btn-red"
                onClick={() => scrollTo('projects')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <FolderKanban size={18} /> View Projects
              </button>

              <button
                className="btn-ghost"
                onClick={() => scrollTo('contact')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Briefcase size={18} /> Hire Me
              </button>

              <a
                href="/resume.pdf"
                className="btn-ghost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Download size={18} /> Resume
              </a>
            </div>

            <div
              style={{
                marginTop: 48,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
                maxWidth: 620,
              }}
              className="mx-auto lg:mx-0"
            >
              {[
                { num: '10+', label: 'Projects' },
                { num: '5+', label: 'Certificates' },
                { num: '3+', label: 'Domains' },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    borderLeft: '2px solid rgba(239,68,68,0.5)',
                    paddingLeft: 12,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(22px, 3vw, 30px)',
                      color: '#fff',
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#737373',
                      marginTop: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: -40,
                  borderRadius: '50%',
                  background: 'rgba(239,68,68,0.25)',
                  filter: 'blur(48px)',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: -12,
                  borderRadius: '50%',
                  background:
                    'conic-gradient(from 0deg, #ef4444, transparent 40%, #ef4444 70%, transparent)',
                  animation: 'spin-slow 8s linear infinite',
                  opacity: 0.7,
                  filter: 'blur(2px)',
                  zIndex: 1,
                }}
              />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <img
                  src="https://media.base44.com/images/public/69e7db94b9a2cf455facb7a3/59956e456_PhotoFixerBot_07-41-20_UTC.jpg"
                  alt="Devanshu"
                  style={{
                    width: 'clamp(280px, 35vw, 440px)',
                    height: 'clamp(280px, 35vw, 440px)',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block',
                    boxShadow:
                      '0 0 0 4px rgba(0,0,0,0.6), 0 0 80px rgba(239,68,68,0.45)',
                  }}
                />

                <div
                  className="hidden md:flex"
                  style={{
                    position: 'absolute',
                    left: -24,
                    top: 40,
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 12px',
                    borderRadius: 12,
                    background: 'rgba(23,23,23,0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #262626',
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#22c55e',
                    }}
                    className="animate-pulse"
                  />
                  <span style={{ fontSize: 12, fontWeight: 500, color: '#e5e5e5' }}>
                    Available for work
                  </span>
                </div>

                <div
                  className="hidden md:block"
                  style={{
                    position: 'absolute',
                    right: -16,
                    bottom: 48,
                    padding: '8px 12px',
                    borderRadius: 12,
                    background: 'rgba(23,23,23,0.9)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #262626',
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: '#ef4444',
                    }}
                  >
                    Based In
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginTop: 2 }}>
                    Delhi, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => scrollTo('about')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#737373',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#737373')}
          >
            <ChevronDown size={26} className="animate-bounce-scroll" />
          </button>
        </div>
      </div>
    </section>
  );
}