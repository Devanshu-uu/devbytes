// src/components/portfolio/ContactSection.jsx

import React from 'react'
import { Mail, ArrowUpRight } from 'lucide-react'

const SOCIALS = [
  {
    label: 'Email',
    value: 'devanshumohriya@gmail.com',
    href: 'mailto:devanshumohriya@gmail.com',
  },
  {
    label: 'Instagram',
    value: '@devanshu_mohriya',
    href: 'https://instagram.com/devanshu_mohriya',
  },
  {
    label: 'LinkedIn',
    value: 'Devanshu Mohriya',
    href: 'https://linkedin.com',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-xs tracking-[0.4em] text-gray-500 uppercase mb-4">
          Contact
        </p>

        <h2 className="text-4xl font-bold text-white mb-10">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-10">
          Want to work together or have a project idea? Let’s connect.
        </p>

        <div className="space-y-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              className="flex justify-between items-center border-b border-gray-800 py-4 text-gray-300 hover:text-red-500 transition"
            >
              <span>{s.value}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="mailto:devanshumohriya@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white text-sm hover:bg-red-600 transition"
          >
            <Mail size={16} />
            Send Email
          </a>
        </div>

      </div>
    </section>
  )
}