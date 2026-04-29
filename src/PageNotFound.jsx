import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div style={{
      background: '#0a0a0a',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
      padding: '0 24px'
    }}>
      <h1 style={{
        fontSize: 'clamp(80px, 15vw, 150px)',
        fontWeight: 900,
        margin: 0,
        background: 'linear-gradient(to right, #ef4444, #f87171)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        404
      </h1>
      <h2 style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 700, marginTop: -20 }}>
        Page Not Found
      </h2>
      <p style={{ color: '#a3a3a3', maxWidth: 500, margin: '24px 0 40px', lineHeight: 1.6 }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div style={{ display: 'flex', gap: 16 }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: '#ef4444',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: 12,
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'transform 200ms ease'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Home size={18} /> Back to Home
        </Link>
        
        <Link to="/blog" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: '#141414',
          border: '1px solid #262626',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: 12,
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'border-color 200ms ease'
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#ef4444'}
        onMouseLeave={e => e.currentTarget.style.borderColor = '#262626'}
        >
          <ArrowLeft size={18} /> Visit Blog
        </Link>
      </div>
    </div>
  );
}