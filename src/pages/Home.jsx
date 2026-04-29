import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/portfolio/Navbar';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Education from '../components/portfolio/Education';
import Certificates from '../components/portfolio/Certificates';
import Projects from '../components/portfolio/Projects';
import BlogSection from '../components/portfolio/BlogSection';
import Contact from '../components/portfolio/Socials';
import Footer from '../components/portfolio/Footer';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certificates />
      <Projects />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
}