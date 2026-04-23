import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ background: '#0a0a0a', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <p className="kicker">WHO AM I</p>
        <h2 className="section-title">About <span style={{ color: '#ef4444' }}>Me</span></h2>

        <div style={{ marginTop: 56, display: 'grid', gap: 48 }} className="md:grid-cols-2 grid">
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -24, borderRadius: '50%', background: 'rgba(239,68,68,0.10)', filter: 'blur(48px)' }} />
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ aspectRatio: '3/4', borderRadius: 16, overflow: 'hidden', border: '1px solid #262626', transform: 'translateY(16px)' }}>
                <img src="https://media.base44.com/images/public/69bdc87402b020b7249e66f1/e610270b3_file_00000000aff071fd8f89a7b6446d0bc7.png" alt="Devanshu" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ aspectRatio: '3/4', borderRadius: 16, overflow: 'hidden', border: '1px solid #262626', transform: 'translateY(-16px)', background: 'linear-gradient(135deg, rgba(239,68,68,0.05), rgba(239,68,68,0.15))' }} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: 16, color: '#d4d4d4', lineHeight: 1.625, marginBottom: 16 }}>
              I'm Devanshu, currently pursuing BSc Life Science at Delhi University. Alongside my studies, I'm deeply passionate about Web Development, Data Science, and Artificial Intelligence.
            </p>
            <p style={{ fontSize: 16, color: '#d4d4d4', lineHeight: 1.625, marginBottom: 16 }}>
              I build projects using Python and the modern web stack, exploring data-driven technologies while sharing my journey on YouTube.
            </p>
            <p style={{ fontSize: 16, color: '#d4d4d4', lineHeight: 1.625 }}>
              Whether it's crafting clean UIs, diving into datasets, or experimenting with ML models — I'm always building, always learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}