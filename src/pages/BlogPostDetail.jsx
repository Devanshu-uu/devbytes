import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import base44 from '@/api/base44Client';
import { ArrowLeft, Calendar, Clock, Tag, Share2, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import BlogNavbar from '../components/blog/BlogNavbar';
import BlogFooter from '../components/blog/BlogFooter';

export default function BlogPostDetail() {
  const { slug } = useParams();

  const { data: post = null, isLoading } = useQuery({
    queryKey: ['blogpost', slug],
    queryFn: async () => {
      const all = await base44.entities.BlogPost.filter();
      return all.find(p => p.slug === slug) || null;
    },
  });

  const handleShare = () => {
    if (!post) return;
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) return <LoadingSkeleton />;
  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen" style={{ background: '#0d1117', color: '#e6edf3' }}>
      <BlogNavbar />

      <article className="pt-28 max-w-4xl mx-auto px-4 pb-24">
        
        {/* Breadcrumbs / Back */}
        <Link to="/blog" className="inline-flex items-center gap-2 mb-10 text-sm font-medium transition-colors hover:text-[#f85149]"
          style={{ color: '#8b949e', textDecoration: 'none' }}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#f85149] text-white">
              {post.category}
            </span>
            <div className="h-1 w-1 rounded-full bg-gray-600" />
            <span className="text-sm text-gray-400 flex items-center gap-1.5">
              <Clock size={14} /> {post.read_time} min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1]" 
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-[#30363d]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#161b22] border border-[#30363d] flex items-center justify-center overflow-hidden">
                <User size={24} className="text-gray-400" />
              </div>
              <div>
                <p className="text-sm font-bold">{post.author}</p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar size={12} /> {new Date(post.created_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>

            <button onClick={handleShare}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-[#30363d]"
              style={{ background: '#161b22', border: '1px solid #30363d' }}>
              <Share2 size={16} /> Share Article
            </button>
          </div>
        </header>

        {/* Cover Image */}
        {post.cover_image && (
          <div className="w-full rounded-3xl overflow-hidden mb-12 shadow-2xl border border-[#30363d]">
            <img src={post.cover_image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover" />
          </div>
        )}

        {/* Excerpt */}
        {post.excerpt && (
          <div className="mb-12">
             <p className="text-xl md:text-2xl text-gray-400 italic leading-relaxed border-l-4 border-[#f85149] pl-6 py-2">
              {post.excerpt}
            </p>
          </div>
        )}

        {/* Main Content */}
        <div className="blog-content prose prose-invert prose-red max-w-none">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-12 mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-[#30363d] pb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-8 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="text-lg leading-8 text-gray-300 mb-6" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-300" {...props} />,
              li: ({node, ...props}) => <li className="text-lg" {...props} />,
              code: ({node, inline, ...props}) => 
                inline ? (
                  <code className="bg-[#161b22] px-1.5 py-0.5 rounded text-[#f85149] text-sm" {...props} />
                ) : (
                  <div className="my-8 rounded-2xl overflow-hidden border border-[#30363d]">
                    <div className="bg-[#161b22] px-4 py-2 text-xs text-gray-400 border-b border-[#30363d] flex justify-between">
                      <span>Code Snippet</span>
                    </div>
                    <pre className="p-6 bg-[#0d1117] overflow-x-auto text-sm leading-relaxed" {...props} />
                  </div>
                ),
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-[#30363d] pl-6 italic text-gray-400 my-8" {...props} />
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[#30363d]">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Related Topics</h4>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-lg text-xs font-medium transition-colors hover:border-[#f85149]"
                  style={{ background: '#161b22', border: '1px solid #30363d', color: '#8b949e' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="mt-20 flex flex-col items-center">
          <div className="w-20 h-1 bg-[#30363d] rounded-full mb-8" />
          <h3 className="text-2xl font-bold mb-6">Enjoyed this article?</h3>
          <Link to="/blog"
            className="px-8 py-4 rounded-2xl font-bold text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
            style={{ background: '#f85149' }}>
            Browse More Articles
          </Link>
        </div>
      </article>

      <BlogFooter />
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4" style={{ background: '#0d1117' }}>
      <div className="w-12 h-12 border-4 border-[#30363d] border-t-[#f85149] rounded-full animate-spin" />
      <p className="text-gray-500 font-medium">Loading article...</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center" style={{ background: '#0d1117' }}>
      <div className="w-24 h-24 bg-[#161b22] rounded-3xl flex items-center justify-center mb-6 border border-[#30363d]">
        <ArrowLeft size={40} className="text-[#f85149]" />
      </div>
      <h1 className="text-4xl font-black mb-4">Article Not Found</h1>
      <p className="text-gray-400 max-w-md mb-8">
        The article you're looking for doesn't exist or has been moved to a new location.
      </p>
      <Link to="/blog" className="px-8 py-3 bg-[#f85149] text-white rounded-xl font-bold">
        Back to Blog Home
      </Link>
    </div>
  );
}