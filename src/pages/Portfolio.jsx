import React from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import CertificatesSection from '../components/portfolio/CertificatesSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import YouTubeSection from '../components/portfolio/YouTubeSection';
import SocialsSection from '../components/portfolio/SocialsSection';
import ContactSection from '../components/portfolio/ContactSection';
import FooterSection from '../components/portfolio/FooterSection';
import MusicPlayer from '../components/portfolio/MusicPlayer';

export default function Portfolio() {
  return (
    <div className="bg-[#09090b] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificatesSection />
      <ProjectsSection />
      <YouTubeSection />
      <SocialsSection />
      <ContactSection />
      <FooterSection />
      <MusicPlayer />
    </div>
  );
}