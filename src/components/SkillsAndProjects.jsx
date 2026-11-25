import React from 'react';
import { Network, Code2, ExternalLink, GitBranch, Globe, Layers, Briefcase, GraduationCap } from 'lucide-react';
import { SKILLS, PROJECTS, EXPERIENCE, PROFILE } from '../portfolioData';
import Tilt3DCard from './Tilt3DCard';

export default function SkillsAndProjects() {
  return (
    <>
      {/* Dual-Layer Skills Matrix */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-900">
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-cyber-red uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" /> OSI Stack Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Dual-Domain Skill Matrix</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Tilt3DCard glowColor="rgba(255, 42, 84, 0.22)" className="bg-cyber-card/95 border border-gray-800 hover:border-cyber-red/60 rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyber-red/15 text-cyber-red border border-cyber-red/30">
                <Network className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Network Engineering (CCNA → CCNP)</h3>
                <p className="font-mono text-xs text-cyber-red">OSI Layers 1 – 4 (Infrastructure & Routing)</p>
              </div>
            </div>
            <ul className="space-y-3">
              {SKILLS.networking.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 font-mono">
                  <span className="text-cyber-red mt-0.5">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Tilt3DCard>

          <Tilt3DCard glowColor="rgba(0, 240, 255, 0.22)" className="bg-cyber-card/95 border border-gray-800 hover:border-cyber-cyan/60 rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/30">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Full-Stack Web & Automation</h3>
                <p className="font-mono text-xs text-cyber-cyan">OSI Layer 7 (MERN, APIs & Python)</p>
              </div>
            </div>
            <ul className="space-y-3">
              {SKILLS.webdev.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 font-mono">
                  <span className="text-cyber-cyan mt-0.5">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Tilt3DCard>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan uppercase tracking-wider">
              <Briefcase className="w-4 h-4" /> Internship Experience
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Industry Exposure</h2>
            <div className="space-y-4">
              {EXPERIENCE.map((exp, i) => (
                <Tilt3DCard key={i} glowColor="rgba(0, 240, 255, 0.16)" className="bg-cyber-card/95 border border-gray-800 rounded-xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">{exp.role} — <span className="text-cyber-cyan">{exp.company}</span></h3>
                    <span className="font-mono text-xs text-gray-400">{exp.period} • {exp.location}</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-cyber-green font-mono">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </Tilt3DCard>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-red uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" /> Academic Background
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Education</h2>
            <Tilt3DCard glowColor="rgba(255, 42, 84, 0.16)" className="bg-cyber-card/95 border border-gray-800 rounded-xl p-5 space-y-4">
              {PROFILE.education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-black/50 border border-gray-800/80 font-mono text-xs sm:text-sm text-gray-200">
                  {edu}
                </div>
              ))}
            </Tilt3DCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-900">
        <div className="mb-12">
          <span className="font-mono text-xs text-cyber-cyan uppercase tracking-wider">Deployments & Labs</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Featured Engineering Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <Tilt3DCard
              key={idx}
              glowColor={idx % 2 === 0 ? 'rgba(0, 240, 255, 0.22)' : 'rgba(255, 42, 84, 0.22)'}
              className="bg-cyber-card/95 border border-gray-800 hover:border-cyber-cyan/50 rounded-xl p-6 group shadow-md"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-gray-900 text-cyber-cyan border border-gray-800">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-cyber-red font-semibold">{project.layer}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[11px] font-mono text-gray-300 bg-black/60 border border-gray-800 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white" title="GitHub">
                      <GitBranch className="w-4 h-4" />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-cyan" title="Open Link">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>

        {/* @zeni.security Banner */}
        <Tilt3DCard glowColor="rgba(0, 240, 255, 0.24)" className="mt-12 p-[1px] rounded-2xl cyber-border-animated">
          <div className="bg-gradient-to-r from-[#141118] via-cyber-card to-[#0F171E] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-cyber-red font-mono text-xs font-semibold">
                <Globe className="w-4 h-4" /> NETWORKING CONTENT & VISUAL SIMULATIONS
              </div>
              <h3 className="text-2xl font-bold text-white">
                Sharing Network Engineering on <span className="text-cyber-cyan">{PROFILE.instagramHandle}</span>
              </h3>
              <p className="text-gray-400 text-sm max-w-2xl">
                Visual topology explainers, CCNA/CCNP concepts, routing/switching breakdown, and hands-on networking posts.
              </p>
            </div>
            <a
              href={PROFILE.instagram}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 px-6 py-3 rounded-lg bg-cyber-cyan text-black hover:bg-cyan-300 font-mono text-sm font-bold transition flex items-center gap-2"
            >
              <Globe className="w-4 h-4" /> Visit {PROFILE.instagramHandle}
            </a>
          </div>
        </Tilt3DCard>
      </section>
    </>
  );
}