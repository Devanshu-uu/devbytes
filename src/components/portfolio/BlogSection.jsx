import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import base44 from '@/api/base44Client';

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await base44.entities.BlogPost.filter();
        // Take latest 3 posts
        setPosts(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return null;

  return (
    <section id="blog-section" style={{ background: '#0a0a0a', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <p className="kicker">LATEST UPDATES</p>
        <h2 className="section-title">From The <span style={{ color: '#ef4444' }}>Blog</span></h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#a3a3a3', 
          fontSize: 16, 
          marginTop: 14, 
          maxWidth: 600, 
          marginInline: 'auto',
          lineHeight: 1.7 
        }}>
          I write about web development, data science, and my journey as a creator. Check out my latest articles below.
        </p>

        <div style={{ 
          display: 'grid', 
          gap: 24, 
          marginTop: 56 
        }} className="md:grid-cols-2 lg:grid-cols-3 grid">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="card-dark"
              style={{ 
                textDecoration: 'none', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img 
                  src={post.cover_image} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 500ms ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ 
                    fontSize: 10, 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.1em', 
                    color: '#ef4444',
                    background: 'rgba(239,68,68,0.1)',
                    padding: '2px 8px',
                    borderRadius: 4
                  }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: 12, color: '#737373', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Calendar size={12} /> {new Date(post.created_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                <h3 style={{ 
                  fontSize: 20, 
                  fontWeight: 700, 
                  color: '#fff', 
                  lineHeight: 1.4,
                  marginBottom: 12,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.title}
                </h3>

                <p style={{ 
                  fontSize: 14, 
                  color: '#a3a3a3', 
                  lineHeight: 1.6,
                  marginBottom: 20,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.excerpt}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 6, color: '#ef4444', fontWeight: 600, fontSize: 14 }}>
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 56, textAlign: 'center' }}>
          <Link to="/blog" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={18} /> View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
}