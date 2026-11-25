import React, { useState, useRef, useEffect } from 'react';
import { Terminal, ShieldCheck, Cpu, ArrowDown, Sparkles } from 'lucide-react';
import { PROFILE } from '../portfolioData';

export default function TerminalHero() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Cisco IOS XE Software, Keshav-Core-Router, Version 17.12 [CCNA + CCNP TRACK]' },
    { type: 'system', text: 'Type "help" or click a command below to inspect Keshav Singh\'s profile.' },
  ]);
  const terminalEndRef = useRef(null);

  const commands = {
    help: [
      'Available commands:',
      '  show version          - Engineer bio, CCNA/CCNP status & education',
      '  show ip int brief     - Network + Full-Stack skill interfaces',
      '  show experience       - GeeksforGeeks & Zidio internships',
      '  show @zeni.security   - Networking channel & lab content',
      '  contact               - Email, GitHub, LinkedIn & phone',
      '  clear                 - Clear terminal screen'
    ],
    'show version': [
      `Name          : ${PROFILE.name}`,
      `Current Track : CCNA Completed | CCNP In Progress`,
      `Education     : ${PROFILE.education[0]}`,
      `Mission       : ${PROFILE.tagline}`
    ],
    'show ip int brief': [
      'Interface              IP-Address      Status     Protocol (Domain)',
      'GigabitEthernet0/0     10.10.1.1       up         up (CCNA Routing/Switching/NAT)',
      'GigabitEthernet0/1     10.10.2.1       up/down    testing (CCNP Enterprise Track)',
      'Loopback0              172.16.10.1     up         up (React/Node/Express/MongoDB)',
      'Loopback1              172.16.20.1     up         up (Python/Git/AWS Basic)'
    ],
    'show experience': [
      '1. Zidio Development (Jul 2025 - Oct 2025): Web Developer Intern — Excel Analytics Platform',
      '2. GeeksforGeeks (Jul 2024 - Oct 2024): MERN Stack Intern — REST APIs, JWT & -25% load time'
    ],
    'show @zeni.security': [
      `Handle : ${PROFILE.instagramHandle}`,
      'Focus  : CCNA & network engineering simulations, visual explainers & reels.'
    ],
    contact: [
      `Email    : ${PROFILE.email}`,
      `Phone    : ${PROFILE.phone}`,
      `GitHub   : ${PROFILE.github}`,
      `LinkedIn : ${PROFILE.linkedin}`
    ]
  };

  const executeCommand = (cmdRaw) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const response = commands[cmd] || [
      `% Invalid command "${cmdRaw}". Type "help" to see valid commands.`
    ];

    setHistory(prev => [
      ...prev,
      { type: 'command', text: `Keshav_Router# ${cmdRaw}` },
      ...response.map(line => ({ type: 'output', text: line }))
    ]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-card border border-cyber-cyan/40 text-xs font-mono text-cyber-cyan shadow-lg shadow-cyber-cyan/10">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping"></span>
            CCNA COMPLETED • CCNP IN PROGRESS
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {PROFILE.name}
            <span className="block text-2xl sm:text-3xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyber-red via-purple-400 to-cyber-cyan">
              Network Engineer × Web Developer
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {PROFILE.tagline}. B.Tech CSE graduate with real MERN internship experience, now building a focused career in <span className="text-cyber-green font-mono font-semibold">Enterprise Networking & Security</span>.
          </p>

          {/* Status Cards */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            {PROFILE.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-cyber-card/90 border border-gray-800 hover:border-cyber-cyan/50 transition p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
              >
                <span className="font-mono text-xs sm:text-sm text-gray-200">{cert.name}</span>
                <span className={`font-mono text-xs font-bold ${cert.color}`}>{cert.status}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#topology"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyber-red to-rose-600 hover:opacity-95 text-white font-mono text-sm font-semibold transition flex items-center gap-2 shadow-lg shadow-cyber-red/30"
            >
              <Cpu className="w-4 h-4" /> Explore Network Lab
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-cyber-card hover:bg-gray-800 border border-cyan-500/30 text-cyber-cyan font-mono text-sm transition flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Projects & Internships <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Glowing Animated Terminal Frame */}
        <div className="lg:col-span-6">
          <div className="p-[1.5px] rounded-2xl cyber-border-animated animate-float-glow">
            <div className="bg-[#090A0F] rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-[#141722] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="ml-2 font-mono text-xs text-gray-300 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyber-cyan" /> ssh keshav@ccnp-lab
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyber-green flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> LIVE CLI
                </span>
              </div>

              <div className="p-4 h-80 overflow-y-auto font-mono text-xs sm:text-sm space-y-1.5">
                {history.map((item, idx) => (
                  <div
                    key={idx}
                    className={
                      item.type === 'command' ? 'text-cyber-cyan font-semibold pt-1.5' :
                      item.type === 'system' ? 'text-gray-500' : 'text-gray-200 whitespace-pre-wrap'
                    }
                  >
                    {item.text}
                  </div>
                ))}

                <div className="flex items-center gap-2 pt-2">
                  <span className="text-cyber-red font-bold shrink-0">Keshav_Router#</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type 'help' or 'show version'..."
                    className="bg-transparent border-none outline-none text-white w-full font-mono placeholder-gray-600"
                  />
                </div>
                <div ref={terminalEndRef} />
              </div>

              <div className="bg-[#10131C] px-4 py-2.5 border-t border-gray-800 flex flex-wrap gap-2 items-center">
                <span className="text-[11px] font-mono text-gray-500">Run:</span>
                {['show version', 'show ip int brief', 'show experience', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-gray-800/90 hover:bg-cyber-cyan/20 hover:text-cyber-cyan text-gray-300 border border-gray-700 transition"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}