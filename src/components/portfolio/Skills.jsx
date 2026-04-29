import React, { useEffect, useRef, useState } from 'react';

const SKILLS = [
  { name: 'Python', pct: 90 },
  { name: 'C Programming', pct: 85 },
  { name: 'Web Development', pct: 75 },
  { name: 'Data Science', pct: 70 },
  { name: 'Machine Learning', pct: 60 },
];

const TECH = ['Python', 'HTML', 'CSS', 'JavaScript', 'Pandas', 'NumPy', 'Matplotlib', 'Git', 'VS Code', 'Jupyter'];

function SkillBar({ name, pct, animate }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>{name}</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#ef4444' }}>{pct}%</span>
      </div>
      <div style={{ height: 8, borderRadius: 9999, background: '#171717', overflow: 'hidden' }}>
        <div style={{ height: '100%', borderRadius: 9999, background: 'linear-gradient(to right, #dc2626, #f87171)', width: animate ? `${pct}%` : '0%', transition: 'width 1400ms ease-out' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setAnimate(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={{ background: '#0a0a0a', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto' }}>
        <p className="kicker">WHAT I KNOW</p>
        <h2 className="section-title">Technical <span style={{ color: '#ef4444' }}>Skills</span></h2>
        <div ref={ref} style={{ marginTop: 48, display: 'grid', gap: 32 }} className="md:grid-cols-2 grid">
          <div className="card-dark" style={{ padding: 28 }}>
            {SKILLS.map((s) => <SkillBar key={s.name} name={s.name} pct={s.pct} animate={animate} />)}
          </div>
          <div className="card-dark" style={{ padding: 28 }}>
            <div style={{ fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444', marginBottom: 20 }}>TECH STACK</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {TECH.map((t) => <span key={t} className="tech-chip">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}