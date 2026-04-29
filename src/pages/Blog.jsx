import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import base44 from '@/api/base44Client';
import BlogNavbar from '../components/blog/BlogNavbar';
import BlogFooter from '../components/blog/BlogFooter';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await base44.entities.BlogPost.filter();
        setPosts(data);
        setFilteredPosts(data);
        
        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(data.map(post => post.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    let result = posts;

    // Filter by Search
    if (searchQuery) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(result);
  }, [searchQuery, selectedCategory, posts]);

  if (loading) return <BlogLoadingSkeleton />;

  return (
    <div className="min-h-screen" style={{ background: '#0d1117', color: '#e6edf3' }}>
      <BlogNavbar />
      
      <main className="max-w-7xl mx-auto px-4 pt-28 pb-20">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight" 
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            The <span style={{ color: '#f85149' }}>DevBytes</span> Blog
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Thoughts, tutorials, and insights on modern web development, design, and performance.
          </p>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between bg-[#161b22] p-6 rounded-2xl border border-[#30363d]">
          
          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#0d1117] border border-[#30363d] rounded-xl focus:outline-none focus:border-[#f85149] transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category 
                  ? 'bg-[#f85149] text-white' 
                  : 'bg-[#0d1117] text-gray-400 border border-[#30363d] hover:border-[#f85149]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group flex flex-col h-full bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden hover:border-[#f85149] transition-all duration-300 transform hover:-translate-y-1">
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.cover_image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-[#f85149] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.created_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.read_time} min read</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-[#f85149] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex gap-1">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] bg-[#0d1117] text-[#f85149] px-2 py-1 rounded border border-[#30363d]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[#f85149] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#161b22] rounded-3xl border border-dashed border-[#30363d]">
            <div className="bg-[#0d1117] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#30363d]">
              <Search className="text-gray-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
              className="mt-6 text-[#f85149] font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </main>

      <BlogFooter />
    </div>
  );
}

function BlogLoadingSkeleton() {
  return (
    <div className="min-h-screen" style={{ background: '#0d1117' }}>
      <div className="max-w-7xl mx-auto px-4 pt-28">
        <div className="h-10 w-64 bg-[#161b22] rounded-lg mb-4 mx-auto animate-pulse" />
        <div className="h-4 w-96 bg-[#161b22] rounded-lg mb-12 mx-auto animate-pulse" />
        <div className="h-20 w-full bg-[#161b22] rounded-2xl mb-12 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-96 bg-[#161b22] rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}