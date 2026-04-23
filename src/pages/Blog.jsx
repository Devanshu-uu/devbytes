import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { Search, Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';
import BlogNavbar from '../components/blog/BlogNavbar';
import BlogFooter from '../components/blog/BlogFooter';

export default function Blog() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogposts'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }, '-created_date', 50),
  });

  const allTags = ['All', ...Array.from(new Set(posts.flatMap(p => p.tags || [])))];

  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt?.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === 'All' || (p.tags || []).includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <div className="min-h-screen" style={{ background: '#0d1117', color: '#e6edf3' }}>
      <BlogNavbar />

      {/* Hero Header */}
      <div className="pt-24 pb-12 text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(248,81,73,0.12)', color: '#f85149', border: '1px solid rgba(248,81,73,0.3)' }}>
          <BookOpen size={12} /> Dev Articles & Tutorials
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
          <span style={{ color: '#f85149' }}>Dev</span>
          <span style={{ color: '#e6edf3' }}>Bytes</span>
          <span className="block text-3xl md:text-4xl mt-1 font-light" style={{ color: '#8b949e' }}>Blog</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: '#8b949e' }}>
          Tutorials, tips, and deep-dives on web dev, CS concepts & more.
        </p>

        {/* Search */}
        <div className="relative max-w-lg mx-auto">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#8b949e' }} />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all"
            style={{
              background: '#161b22',
              border: '1px solid #30363d',
              color: '#e6edf3',
            }}
            onFocus={e => e.target.style.borderColor = '#f85149'}
            onBlur={e => e.target.style.borderColor = '#30363d'}
          />
        </div>

        {/* Tags */}
        {allTags.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={{
                  background: activeTag === tag ? '#f85149' : 'rgba(248,81,73,0.08)',
                  color: activeTag === tag ? '#fff' : '#8b949e',
                  border: `1px solid ${activeTag === tag ? '#f85149' : '#30363d'}`,
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rounded-xl overflow-hidden animate-pulse" style={{ background: '#161b22', border: '1px solid #21262d' }}>
                <div className="h-48 w-full" style={{ background: '#21262d' }} />
                <div className="p-4 space-y-3">
                  <div className="h-4 rounded" style={{ background: '#30363d', width: '80%' }} />
                  <div className="h-3 rounded" style={{ background: '#30363d', width: '60%' }} />
                  <div className="h-8 rounded" style={{ background: '#21262d' }} />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24" style={{ color: '#8b949e' }}>
            <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-xl">No articles found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} featured={i === 0 && activeTag === 'All' && !search} />
            ))}
          </div>
        )}
      </div>

      <BlogFooter />
    </div>
  );
}

function BlogCard({ post, featured }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ${featured ? 'sm:col-span-2 lg:col-span-2' : ''}`}
      style={{
        background: '#161b22',
        border: '1px solid #21262d',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {/* Cover Image */}
      <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
        {post.cover_image ? (
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl font-black"
            style={{ background: 'linear-gradient(135deg, #f85149 0%, #d73a49 100%)', color: '#fff' }}>
            {post.title.charAt(0)}
          </div>
        )}
        {post.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
            style={{ background: 'rgba(248,81,73,0.9)', color: '#fff' }}>
            {post.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className={`font-bold leading-snug mb-2 group-hover:text-red-400 transition-colors ${featured ? 'text-xl' : 'text-base'}`}
          style={{ color: '#e6edf3' }}>
          {post.title}
        </h2>
        <p className="text-sm flex-1 line-clamp-3 mb-4" style={{ color: '#8b949e' }}>
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid #21262d' }}>
          <div className="flex items-center gap-2 text-xs" style={{ color: '#8b949e' }}>
            {post.read_time && (
              <span className="flex items-center gap-1">
                <Clock size={11} /> {post.read_time} min
              </span>
            )}
            {post.tags?.slice(0, 1).map(tag => (
              <span key={tag} className="flex items-center gap-1">
                <Tag size={11} /> {tag}
              </span>
            ))}
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold transition-colors group-hover:gap-2"
            style={{ color: '#f85149' }}>
            Read More <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}