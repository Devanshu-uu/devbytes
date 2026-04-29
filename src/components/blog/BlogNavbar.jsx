import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export default function BlogNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#f85149] rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Terminal size={18} />
          </div>
          <span className="font-black text-xl tracking-tight hidden sm:block">
            Dev<span className="text-[#f85149]">Bytes</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/blog" className="text-sm font-bold text-[#f85149]">
            Blog
          </Link>
          <Link to="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link to="/#socials" className="px-4 py-2 rounded-lg bg-[#161b22] border border-[#30363d] text-xs font-bold hover:border-[#f85149] transition-all">
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}