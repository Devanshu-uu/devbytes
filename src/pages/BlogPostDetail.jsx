import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import BlogNavbar from '../components/blog/BlogNavbar';
import BlogFooter from '../components/blog/BlogFooter';

export default function BlogPostDetail() {
  const { slug } = useParams();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blogpost', slug],
    queryFn: () => base44.entities.BlogPost.filter({ slug, published: true }, '-created_date', 1),
  });

  const post = posts[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post?.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) return <LoadingSkeleton />;
  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen" style={{ background: '#0d1117', color: '#e6edf3' }}>
      <BlogNavbar />

      <div className="pt-20 max-w-3xl mx-auto px-4 pb-24">

        {/* Back */}
        <Link to="/blog" className="inline-flex items-center gap-2 mt-8 mb-8 text-sm transition-colors hover:text-red-400"
          style={{ color: '#8b949e', textDecoration: 'none' }}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Cover Image */}
        {post.cover_image && (
          <div className="w-full rounded-2xl overflow-hidden mb-8" style={{ aspectRatio: '16/7' }}>
            <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4" style={{ color: '#e6edf3' }}>
          {post.title}
        </h1>

        {/* Excerpt / Quote */}
        {post.excerpt && (
          <blockquote className="italic text-base mb-6 pl-4" style={{
            borderLeft: '3px solid #f85149',
            color: '#8b949e',
          }}>
            "{post.excerpt}"
          </blockquote>
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-6"
          style={{ borderBottom: '1px solid #21262d' }}>
          <div className="flex items-center gap-4 text-sm" style={{ color: '#8b949e' }}>
            <span>By <span style={{ color: '#f85149', fontWeight: 700 }}>{post.author || 'DevBytes'}</span></span>
            {post.created_date && (
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                Updated: {new Date(post.created_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            )}
            {post.read_time && (
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {post.read_time} min read
              </span>
            )}
          </div>
          <button onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
            style={{ background: '#161b22', border: '1px solid #30363d', color: '#e6edf3' }}>
            <Share2 size={14} /> Share
          </button>
        </div>

        {/* Markdown Content */}
        <div className="blog-content">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-black mt-10 mb-4" style={{ color: '#e6edf3' }}>{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: '#e6edf3' }}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#e6edf3' }}>{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-base leading-relaxed mb-4" style={{ color: '#c9d1d9' }}>{children}</p>
              ),
              code: ({ inline, children, className }) => {
                if (inline) {
                  return (
                    <code className="px-1.5 py-0.5 rounded text-sm font-mono"
                      style={{ background: '#161b22', color: '#f85149', border: '1px solid #30363d' }}>
                      {children}
                    </code>
                  );
                }
                return <CodeBlock code={String(children).replace(/\n$/, '')} />;
              },
              pre: ({ children }) => <>{children}</>,
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-4 space-y-1.5" style={{ color: '#c9d1d9' }}>{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-4 space-y-1.5" style={{ color: '#c9d1d9' }}>{children}</ol>
              ),
              li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="pl-4 italic my-4" style={{ borderLeft: '3px solid #f85149', color: '#8b949e' }}>
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a href__={href} target="_blank" rel="noopener noreferrer"
                  style={{ color: '#58a6ff', textDecoration: 'underline' }}>
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <img src={src} alt={alt} className="w-full rounded-xl my-6 border"
                  style={{ borderColor: '#30363d' }} />
              ),
              strong: ({ children }) => <strong style={{ color: '#e6edf3', fontWeight: 700 }}>{children}</strong>,
              hr: () => <hr className="my-8" style={{ borderColor: '#21262d' }} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid #21262d' }}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold mr-2" style={{ color: '#8b949e' }}>Tags</span>
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: '#161b22', border: '1px solid #30363d', color: '#8b949e' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <button onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
                style={{ background: '#161b22', border: '1px solid #30363d', color: '#e6edf3' }}>
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
            style={{ background: '#f85149', color: '#fff', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to All Articles
          </Link>
        </div>
      </div>

      <BlogFooter />
    </div>
  );
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-5 rounded-xl overflow-hidden" style={{ background: '#161b22', border: '1px solid #30363d' }}>
      <div className="flex items-center justify-between px-4 py-2" style={{ background: '#21262d', borderBottom: '1px solid #30363d' }}>
        <span className="text-xs font-mono" style={{ color: '#8b949e' }}>Code</span>
        <button onClick={copy} className="flex items-center gap-1.5 text-xs transition-colors hover:text-white"
          style={{ color: copied ? '#3fb950' : '#8b949e' }}>
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed" style={{ color: '#e6edf3' }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="min-h-screen" style={{ background: '#0d1117' }}>
      <BlogNavbar />
      <div className="pt-24 max-w-3xl mx-auto px-4 animate-pulse">
        <div className="h-48 rounded-2xl mb-8" style={{ background: '#161b22' }} />
        <div className="h-8 rounded mb-4" style={{ background: '#161b22', width: '80%' }} />
        <div className="h-4 rounded mb-8" style={{ background: '#161b22', width: '60%' }} />
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 rounded" style={{ background: '#161b22', width: `${80 + Math.random() * 20}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#0d1117', color: '#e6edf3' }}>
      <BlogNavbar />
      <p className="text-6xl font-black mb-4" style={{ color: '#f85149' }}>404</p>
      <p className="text-xl mb-6" style={{ color: '#8b949e' }}>Post not found</p>
      <Link to="/blog" className="px-6 py-3 rounded-xl font-semibold"
        style={{ background: '#f85149', color: '#fff', textDecoration: 'none' }}>
        Back to Blog
      </Link>
    </div>
  );
}