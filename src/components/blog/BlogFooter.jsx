import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function BlogFooter() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-black text-2xl tracking-tight">
                Dev<span className="text-[#f85149]">Bytes</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              A space for developers, designers, and tech enthusiasts to learn and grow. Dedicated to sharing knowledge and building better web experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#f85149] transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#f85149] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#f85149] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Latest Articles</Link></li>
              <li><Link to="/#projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/#about" className="hover:text-white transition-colors">About Me</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#f85149]" />
                <span>hello@devbytes.com</span>
              </li>
              <li>
                <Link to="/#socials" className="inline-block px-6 py-3 bg-[#161b22] border border-[#30363d] rounded-xl font-bold text-white hover:border-[#f85149] transition-all">
                  Send a Message
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[#30363d] text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DevBytes. All rights reserved. Crafted with ❤️ by Devanshu Mohriya.</p>
        </div>
      </div>
    </footer>
  );
}