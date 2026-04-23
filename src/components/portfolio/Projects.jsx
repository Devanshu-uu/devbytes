import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  { title: 'Frontend Development', desc: 'Modern, responsive UI designs using HTML, CSS, and JavaScript with clean animations and great UX.', tags: ['HTML', 'CSS', 'JavaScript'], category: 'Web Dev', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80' },
  { title: 'Portfolio Website', desc: 'Personal portfolio website showcasing projects, skills and journey with smooth animations.', tags: ['React', 'TailwindCSS'], category: 'Web Dev', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80' },
  { title: 'Data Analysis Dashboard', desc: 'Interactive dashboard for analyzing datasets and visualizing trends with Python and Pandas.', tags: ['Python', 'Pandas', 'Matplotlib'], category: 'Data Science', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  { title: 'Sales Trend Insights', desc: 'End-to-end sales data pipeline and trend analysis tool with interactive Power BI reports.', tags: ['Python', 'Power BI', 'SQL'], category: 'Data Science', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
  { title: 'ML Classifier', desc: 'Machine learning classification model using scikit-learn with comprehensive data preprocessing.', tags: ['Python', 'Scikit-learn', 'NumPy'], category: 'AI/ML', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80' },
  { title: 'AI Chatbot', desc: 'Conversational AI chatbot leveraging NLP techniques and modern language model APIs.', tags: ['Python', 'NLP', 'APIs'], category: 'AI/ML', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80' },
];

const FILTERS = ['Web Dev', 'Data Science', 'AI/ML'];

export default function Projects() {
  const [active, setActive] = useState('Web Dev');
  const filtered = PROJECTS.filter(p => p.category === active);

  return (
    <section id="projects" style={{ background: '#0a0a0a', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <p className="kicker">WHAT I BUILD</p>
        <h2 className="section-title">My <span style={{ color: '#ef4444' }}>Projects</span></h2>
        <p style={{ textAlign: 'center', color: '#a3a3a3', fontSize: 16, marginTop: 12 }}>The collection of my personal and academic projects</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 40 }}>
          {FILTERS.map(f => <button key={f} className={`filter-pill ${active === f ? 'active' : ''}`} onClick={() => setActive(f)}>{f}</button>)}
        </div>

        <div style={{ display: 'grid', gap: 24, marginTop: 32 }} className="md:grid-cols-2 lg:grid-cols-3 grid">
          {filtered.map((p) => (
            <div key={p.title} className="card-dark" style={{ overflow: 'hidden' }}>
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 500ms ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ fontWeight: 600, fontSize: 18, color: '#fff' }}>{p.title}</div>
                <div style={{ fontSize: 14, color: '#a3a3a3', lineHeight: 1.5, marginTop: 8 }}>{p.desc}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                  {p.tags.map(t => <span key={t} style={{ padding: '4px 10px', borderRadius: 9999, background: '#141414', border: '1px solid #262626', fontSize: 12, color: '#d4d4d4' }}>{t}</span>)}
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                  {[{ Icon: Github, label: 'Code' }, { Icon: ExternalLink, label: 'Live' }].map(({ Icon, label }) => (
                    <a key={label} href__="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 14, color: '#d4d4d4', textDecoration: 'none', transition: 'color 180ms ease' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
                      onMouseLeave={e => e.currentTarget.style.color = '#d4d4d4'}>
                      <Icon size={15} /> {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}