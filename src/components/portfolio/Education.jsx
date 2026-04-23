import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const ENTRIES = [
  {
    period: '2019 - 2020',
    degree: 'Class X',
    school: 'Akali Baba Phoola Singh Khalsa Higher Secondary School',
    chips: [{ Icon: Award, text: 'CBSE' }, { Icon: MapPin, text: 'Delhi, India' }],
  },
  {
    period: '2020 - 2022',
    degree: 'Class XII',
    school: 'Rana Pratap Sindhi Sarvodaya Vidyalaya',
    chips: [{ Icon: Award, text: 'CBSE' }, { Icon: MapPin, text: 'Delhi, India' }],
  },
  {
    period: '2021 - PRESENT',
    degree: "Bachelor's Degree (BSc Life Science)",
    school: 'Delhi University',
    chips: [{ Icon: Award, text: 'Delhi University' }, { Icon: MapPin, text: 'Delhi, India' }],
  },
];

function EntryCard({ entry }) {
  return (
    <div className="card-dark" style={{ padding: 24, width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 8, flexShrink: 0,
          background: 'rgba(239,68,68,0.10)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#ef4444',
        }}>
          <GraduationCap size={20} />
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 18, color: '#fff' }}>{entry.degree}</div>
          <div style={{ fontSize: 14, color: '#a3a3a3' }}>{entry.school}</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
        {entry.chips.map(({ Icon, text }) => (
          <span key={text} style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '4px 10px', borderRadius: 6,
            background: '#171717', border: '1px solid #262626',
            fontSize: 12, color: '#d4d4d4',
          }}>
            <Icon size={12} style={{ color: '#ef4444' }} /> {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleDots, setVisibleDots] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = null;
          const duration = 1200;

          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setLineHeight(progress * 100);

            ENTRIES.forEach((_, i) => {
              const threshold = (i + 1) / (ENTRIES.length + 1);
              if (progress >= threshold) {
                setVisibleDots(prev => prev.includes(i) ? prev : [...prev, i]);
                setTimeout(() => {
                  setVisibleCards(prev => prev.includes(i) ? prev : [...prev, i]);
                }, 150);
              }
            });

            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // Fallback: show everything after 500ms if observer doesn't fire
    const fallback = setTimeout(() => {
      setLineHeight(100);
      ENTRIES.forEach((_, i) => {
        setVisibleDots(prev => prev.includes(i) ? prev : [...prev, i]);
        setVisibleCards(prev => prev.includes(i) ? prev : [...prev, i]);
      });
    }, 500);

    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <section id="education" style={{ background: '#0a0a0a', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto' }}>
        <p className="kicker">ACADEMIC PATH</p>
        <h2 className="section-title">
          Educational <span style={{ color: '#ef4444' }}>Journey</span>
        </h2>
        <p style={{ textAlign: 'center', color: '#a3a3a3', fontSize: 16, marginTop: 12 }}>
          My academic path that has shaped my knowledge and skills
        </p>

        <div ref__={sectionRef} style={{ position: 'relative', marginTop: 64 }}>

          {/* Desktop center line */}
          <div className="hidden md:block" ref__={lineRef} style={{
            position: 'absolute', left: '50%', top: 0,
            width: 2, transform: 'translateX(-50%)',
            height: '100%', background: '#1a1a1a',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: `${lineHeight}%`,
              background: 'linear-gradient(to bottom, #ef4444, rgba(239,68,68,0.4))',
              borderRadius: 9999,
            }} />
          </div>

          {/* Mobile line */}
          <div className="md:hidden" style={{
            position: 'absolute', left: 8, top: 0, width: 2,
            height: '100%', background: '#1a1a1a',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: `${lineHeight}%`,
              background: 'linear-gradient(to bottom, #ef4444, rgba(239,68,68,0.4))',
              borderRadius: 9999,
            }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {ENTRIES.map((entry, idx) => {
              const dotVisible = visibleDots.includes(idx);
              const cardVisible = visibleCards.includes(idx);

              return (
                <div key={idx} style={{ position: 'relative' }}>

                  {/* Desktop layout */}
                  <div className="hidden md:flex" style={{ alignItems: 'flex-start', position: 'relative' }}>

                    {/* Left side */}
                    <div style={{
                      width: 'calc(50% - 24px)', textAlign: 'right',
                      paddingRight: 48,
                      display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
                      paddingTop: idx % 2 === 0 ? 18 : 8,
                      opacity: cardVisible ? 1 : 0,
                      transform: cardVisible ? 'translateX(0)' : 'translateX(-20px)',
                      transition: 'opacity 500ms ease, transform 500ms ease',
                    }}>
                      {idx % 2 === 0
                        ? <span style={{ fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444' }}>{entry.period}</span>
                        : <EntryCard entry={entry} />}
                    </div>

                    {/* Dot */}
                    <div style={{
                      position: 'absolute', left: '50%', top: 18,
                      transform: 'translateX(-50%)',
                      width: 16, height: 16, borderRadius: '50%',
                      background: dotVisible ? '#ef4444' : '#2a2a2a',
                      boxShadow: dotVisible ? '0 0 0 4px rgba(239,68,68,0.25), 0 0 12px rgba(239,68,68,0.5)' : 'none',
                      zIndex: 2,
                      transition: 'background 400ms ease, box-shadow 400ms ease',
                    }} />

                    {/* Right side */}
                    <div style={{
                      width: 'calc(50% - 24px)',
                      paddingLeft: 48,
                      paddingTop: idx % 2 === 0 ? 8 : 18,
                      opacity: cardVisible ? 1 : 0,
                      transform: cardVisible ? 'translateX(0)' : 'translateX(20px)',
                      transition: 'opacity 500ms ease, transform 500ms ease',
                    }}>
                      {idx % 2 === 0
                        ? <EntryCard entry={entry} />
                        : <span style={{ fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444' }}>{entry.period}</span>}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden" style={{
                    paddingLeft: 32,
                    opacity: cardVisible ? 1 : 0,
                    transform: cardVisible ? 'translateY(0)' : 'translateY(16px)',
                    transition: 'opacity 500ms ease, transform 500ms ease',
                  }}>
                    <div style={{ fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444', marginBottom: 8 }}>
                      {entry.period}
                    </div>
                    <EntryCard entry={entry} />
                    <div style={{
                      position: 'absolute', left: 1, top: 2,
                      width: 14, height: 14, borderRadius: '50%',
                      background: dotVisible ? '#ef4444' : '#2a2a2a',
                      boxShadow: dotVisible ? '0 0 0 3px rgba(239,68,68,0.25)' : 'none',
                      zIndex: 2,
                      transition: 'background 400ms ease, box-shadow 400ms ease',
                    }} />
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}