import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Globe, GitBranch, Share2 } from 'lucide-react';
import TerminalHero from './components/TerminalHero';
import TopologyLab from './components/TopologyLab';
import SkillsAndProjects from './components/SkillsAndProjects';
import Cyber3DCanvas from './components/Cyber3DCanvas';
import { PROFILE } from './portfolioData';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-cyber-black bg-cyber-grid text-gray-200 overflow-x-hidden">
      {/* Live 3D Interactive Network Globe Background */}
      <Cyber3DCanvas />

      {/* Subtle NOC Scanline Layer */}
      <div className="pointer-events-none fixed inset-0 z-40 noc-scanlines opacity-35" />

      {/* Top Navbar + Live Scroll Progress Telemetry */}
      <header className="fixed top-0 w-full z-50 bg-cyber-black/80 backdrop-blur-md border-b border-gray-900">
        <div
          className="h-[2px] bg-gradient-to-r from-cyber-red via-cyber-cyan to-cyber-green transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-mono font-bold text-white">
            <Terminal className="w-5 h-5 text-cyber-red" />
            <span>KESHAV<span className="text-cyber-cyan">.NET</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-gray-400">
            <a href="#topology" className="hover:text-cyber-cyan transition">01. TOPOLOGY_LAB</a>
            <a href="#skills" className="hover:text-cyber-cyan transition">02. OSI_SKILLS</a>
            <a href="#projects" className="hover:text-cyber-cyan transition">03. PROJECTS</a>
            <a href="#contact" className="hover:text-cyber-red transition">04. CONTACT</a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block font-mono text-[11px] text-cyber-cyan">
              SYNC {Math.round(scrollProgress)}%
            </span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="font-mono text-xs px-4 py-2 rounded bg-cyber-card border border-cyber-cyan/40 hover:border-cyber-red text-white transition"
            >
              Hire / Connect
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <TerminalHero />
        <TopologyLab />
        <SkillsAndProjects />
      </main>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-gray-900 bg-[#050507]/90 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-sm text-white font-bold">
              {PROFILE.name} <span className="text-gray-600">//</span> <span className="text-cyber-green">CCNA Completed</span> • <span className="text-cyber-cyan">CCNP In Progress</span>
            </p>
            <p className="font-mono text-xs text-gray-500 mt-1">
              {PROFILE.email} • {PROFILE.phone}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a href={`mailto:${PROFILE.email}`} className="text-gray-400 hover:text-cyber-red transition" title="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-cyan transition" title="LinkedIn">
              <Globe className="w-5 h-5" />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition" title="GitHub">
              <GitBranch className="w-5 h-5" />
            </a>
            <a href={PROFILE.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 transition" title={PROFILE.instagramHandle}>
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}