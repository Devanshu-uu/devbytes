// src/components/portfolio/ProjectsSection.jsx

import React, { useState } from 'react';
import { Download, Github } from 'lucide-react';
import amazonDashboardImg from '/amazon-sales-dashboard.png?url';

const PROJECTS = [
  {
    title: 'Portfolio Website',
    desc: 'A modern personal portfolio with smooth UI, responsive layout, and strong branding built to present skills and projects professionally.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    github: 'https://github.com/Devanshu-uu/devbytes',
    download: 'https://www.devbytes.in/',
  },
  {
    title: 'Frontend Development',
    desc: 'Responsive user interfaces using HTML, CSS, and JavaScript with emphasis on clean layout, interaction, and accessibility.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    github: '#',
    download: '#',
  },
  {
    title: 'Amazon Dashboard',
    desc: 'Excel-based business dashboard showcasing Amazon sales performance, KPI tracking, trends, and data-driven insights using charts and slicers.',
    tags: ['Excel', 'Dashboard', 'Data Analysis'],
    category: 'Excel',
    image: amazonDashboardImg,
    download: '/amazon-dashboard.xlsx',
    github: 'https://github.com/Devanshu-uu/Excel-Dashboards',
  },
  {
    title: 'AI Chatbot',
    desc: 'Conversational AI concept project using NLP ideas and API-based workflows to create intelligent interactions.',
    tags: ['Python', 'NLP', 'APIs'],
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    github: '#',
    download: '#',
  },
  {
    title: 'ML Classifier',
    desc: 'Machine learning classification model with data preprocessing and evaluation flow using Scikit-learn and NumPy.',
    tags: ['Python', 'Scikit-learn', 'NumPy'],
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    github: '#',
    download: '#',
  },
];

const FILTERS = ['Web Dev', 'Excel', 'AI/ML'];

export default function ProjectsSection() {
  const [active, setActive] = useState('Web Dev');
  const filtered = PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" style={{ background: '#0a0a0a', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            color: '#737373',
            fontSize: 12,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          What I Build
        </p>

        <h2
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 'clamp(34px,5vw,56px)',
            fontWeight: 800,
            margin: 0,
          }}
        >
          My <span style={{ color: '#ef4444' }}>Projects</span>
        </h2>

        <p
          style={{
            textAlign: 'center',
            color: '#a3a3a3',
            fontSize: 16,
            marginTop: 14,
            maxWidth: 760,
            marginInline: 'auto',
            lineHeight: 1.7,
          }}
        >
          Excel-based analytics and business intelligence projects with interactive dashboards and data insights.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 12,
            marginTop: 40,
          }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: '10px 16px',
                borderRadius: 9999,
                border: active === f ? '1px solid #ef4444' : '1px solid #262626',
                background: active === f ? '#ef4444' : 'transparent',
                color: active === f ? '#fff' : '#d4d4d4',
                fontSize: 13,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div
          style={{ display: 'grid', gap: 24, marginTop: 32 }}
          className="md:grid-cols-2 lg:grid-cols-3 grid"
        >
          {filtered.map((p) => (
            <div
              key={p.title}
              style={{
                overflow: 'hidden',
                background: '#0f0f0f',
                border: '1px solid #1f1f1f',
                borderRadius: 16,
                transition: 'border-color 0.25s ease, transform 0.25s ease',
              }}
            >
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 500ms ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              <div style={{ padding: 20 }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 20,
                    color: '#fff',
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </div>

                <div
                  style={{
                    fontSize: 14,
                    color: '#a3a3a3',
                    lineHeight: 1.7,
                    marginTop: 10,
                    minHeight: 72,
                  }}
                >
                  {p.desc}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: '5px 10px',
                        borderRadius: 9999,
                        background: '#141414',
                        border: '1px solid #262626',
                        fontSize: 12,
                        color: '#d4d4d4',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 16, marginTop: 20 }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 14,
                      color: '#d4d4d4',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    <Github size={15} /> Code
                  </a>

                  <a
                    href={p.download}
                    download
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 14,
                      color: '#ef4444',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    <Download size={15} /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}