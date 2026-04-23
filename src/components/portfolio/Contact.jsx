// src/components/portfolio/ContactSection.jsx

import React from 'react';
import { Mail, ArrowUpRight, Github, Linkedin, Instagram, Send } from 'lucide-react';

const SOCIALS = [
  {
    label: 'Email',
    value: 'devanshumohriya@gmail.com',
    href: 'mailto:devanshumohriya@gmail.com',
    icon: Mail,
    color: '#ef4444',
  },
  {
    label: 'Instagram',
    value: '@devanshu_mohriya',
    href: 'https://instagram.com/devanshu_mohriya',
    icon: Instagram,
    color: '#ec4899',
  },
  {
    label: 'LinkedIn',
    value: 'Devanshu Mohriya',
    href: 'https://linkedin.com/in/devanshu-mohriya',
    icon: Linkedin,
    color: '#3b82f6',
  },
  {
    label: 'GitHub',
    value: 'Devanshu-uu',
    href: 'https://github.com/Devanshu-uu/devbytes',
    icon: Github,
    color: '#9ca3af',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.35em] text-red-400 uppercase mb-4">
          Find Me Online
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Let&apos;s <span className="text-red-500">Work Together</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto leading-7 mb-12">
          I&apos;m open to internships, freelance work, collaborations, and project-based opportunities.
          Have an idea, role, or project in mind? Reach out and let&apos;s build something meaningful.
        </p>

        {/* Main email card */}
        <a
          href="mailto:devanshumohriya@gmail.com"
          className="group block max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] hover:border-red-500/40 transition-all duration-300 p-6 md:p-7 shadow-[0_0_40px_rgba(239,68,68,0.06)]"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.35)]">
                <Mail size={24} className="text-white" />
              </div>

              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-gray-500 mb-1">
                  Email Me — Open For Opportunities
                </p>
                <p className="text-white text-lg md:text-xl font-semibold group-hover:text-red-400 transition-colors">
                  devanshumohriya@gmail.com
                </p>
              </div>
            </div>

            <ArrowUpRight className="text-gray-500 group-hover:text-red-400 transition-colors hidden md:block" />
          </div>
        </a>

        {/* Social buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {SOCIALS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    boxShadow: `0 0 0 rgba(0,0,0,0)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow = `0 0 25px ${item.color}55`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
                  }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <span className="text-xs text-gray-500 mt-2 group-hover:text-gray-300 transition-colors">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center flex-wrap gap-4">
          <a
            href="mailto:devanshumohriya@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            <Send size={16} />
            Send Email
          </a>

          <a
            href="https://github.com/Devanshu-uu/devbytes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-medium hover:border-red-500/40 hover:text-red-400 transition"
          >
            <Github size={16} />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}