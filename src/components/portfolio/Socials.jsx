import React from 'react';
import { Instagram, Github, Linkedin, Send, Youtube, Facebook, Twitter, Ghost, Mail } from 'lucide-react';

const GamepadIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/>
    <circle cx="15" cy="13" r="1"/><circle cx="17" cy="11" r="1"/>
    <path d="M12 20a8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8 8 8 0 0 1-8 8Z"/>
  </svg>
);

const SOCIALS = [
  { label: 'Instagram', Icon: Instagram, grad: 'linear-gradient(135deg, #ec4899, #f43f5e)', href: 'https://instagram.com/devanshu_mohriya' },
  { label: 'GitHub', Icon: Github, grad: 'linear-gradient(135deg, #a3a3a3, #525252)', href: '#' },
  { label: 'LinkedIn', Icon: Linkedin, grad: 'linear-gradient(135deg, #0ea5e9, #2563eb)', href: 'https://linkedin.com/in/devanshu-mohriya' },
  { label: 'Discord', Icon: GamepadIcon, grad: 'linear-gradient(135deg, #6366f1, #7c3aed)', href: '#' },
  { label: 'Twitter (X)', Icon: Twitter, grad: 'linear-gradient(135deg, #94a3b8, #475569)', href: 'https://twitter.com/DevanshuMohriya' },
  { label: 'Snapchat', Icon: Ghost, grad: 'linear-gradient(135deg, #facc15, #f59e0b)', href: '#' },
  { label: 'Telegram', Icon: Send, grad: 'linear-gradient(135deg, #38bdf8, #06b6d4)', href: '#' },
  { label: 'YouTube', Icon: Youtube, grad: 'linear-gradient(135deg, #ef4444, #f43f5e)', href: 'https://youtube.com/channel/UC24ZXuLKFu0ZMXOsSNL_qTQ' },
  { label: 'Facebook', Icon: Facebook, grad: 'linear-gradient(135deg, #3b82f6, #4f46e5)', href: '#' },
];

export default function Socials() {
  return (
    <section id="socials" style={{ background: '#0a0a0a', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <p className="kicker">FIND ME ONLINE</p>
        <h2 className="section-title">Connect <span style={{ color: '#ef4444' }}>With Me</span></h2>

        <div style={{ marginTop: 40, maxWidth: 560, margin: '40px auto 0' }}>
          <a href__="mailto:devanshumohriya@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 28px', borderRadius: 16, background: '#141414', border: '1px solid #262626', textDecoration: 'none', transition: 'border-color 200ms ease' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#ef4444'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#262626'}>
            <div style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0, background: 'linear-gradient(135deg, #ef4444, #dc2626)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 20px rgba(239,68,68,0.3)' }}>
              <Mail size={24} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#737373', marginBottom: 4 }}>EMAIL ME — OPEN FOR OPPORTUNITIES</div>
              <div style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>devanshumohriya@gmail.com</div>
            </div>
          </a>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginTop: 32 }}>
          {SOCIALS.map(({ label, Icon, grad, href }) => (
            <a key={label} href__={href} target="_blank" rel="noopener noreferrer" title={label}
              style={{ width: 52, height: 52, borderRadius: 14, background: grad, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', transition: 'transform 200ms ease, box-shadow 200ms ease', flexShrink: 0 }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}>
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}