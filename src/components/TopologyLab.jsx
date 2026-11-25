import React, { useState } from 'react';
import { Server, Shield, Router, Globe, Activity } from 'lucide-react';
import { TOPOLOGY_NODES } from '../portfolioData';
import Tilt3DCard from './Tilt3DCard';

export default function TopologyLab() {
  const [selectedNode, setSelectedNode] = useState(TOPOLOGY_NODES[0]);

  const getIcon = (id) => {
    switch (id) {
      case 'isp-edge': return <Router className="w-7 h-7 text-cyber-red" />;
      case 'core-fw': return <Shield className="w-7 h-7 text-yellow-400" />;
      case 'core-sw': return <Server className="w-7 h-7 text-cyber-cyan" />;
      case 'web-app': return <Globe className="w-7 h-7 text-cyber-green" />;
      default: return <Router className="w-7 h-7" />;
    }
  };

  return (
    <section id="topology" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-900">
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan uppercase tracking-wider mb-2">
          <Activity className="w-4 h-4" /> 3D Interactive Architecture Blueprint
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Packet Flow & Infrastructure Inspector
        </h2>
        <p className="text-gray-400 mt-2 max-w-2xl">
          Hover for 3D telemetry tilt and click any network node to inspect its live Cisco IOS configuration & security rules.
        </p>
      </div>

      {/* 3D Visual Topology Diagram */}
      <div className="bg-cyber-dark/90 backdrop-blur-md border border-gray-800 rounded-2xl p-6 sm:p-10 mb-8 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          {TOPOLOGY_NODES.map((node, index) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <div key={node.id} className="relative flex flex-col items-center">
                {index < TOPOLOGY_NODES.length - 1 && (
                  <svg className="hidden md:block absolute top-1/2 -right-1/2 w-full h-6 -translate-y-1/2 z-0 pointer-events-none">
                    <line
                      x1="15%"
                      y1="50%"
                      x2="85%"
                      y2="50%"
                      stroke="#FF2A54"
                      strokeWidth="2.5"
                      className="animate-packet"
                    />
                  </svg>
                )}

                <Tilt3DCard
                  glowColor={isSelected ? 'rgba(255, 42, 84, 0.28)' : 'rgba(0, 240, 255, 0.22)'}
                  className={`w-full rounded-xl border transition-colors duration-300 ${
                    isSelected
                      ? 'bg-cyber-card border-cyber-red shadow-lg shadow-cyber-red/25'
                      : 'bg-[#0A0B0E]/95 border-gray-800 hover:border-cyber-cyan/60'
                  }`}
                >
                  <button
                    onClick={() => setSelectedNode(node)}
                    className="w-full p-5 text-left"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800">
                        {getIcon(node.id)}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-green-500/10 text-cyber-green border border-green-500/20">
                        {node.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-sm sm:text-base">{node.title}</h3>
                    <p className="font-mono text-xs text-cyber-cyan mt-1">{node.ip}</p>
                    <p className="text-xs text-gray-500 mt-1">{node.role}</p>
                  </button>
                </Tilt3DCard>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Running-Config Viewer */}
      <Tilt3DCard glowColor="rgba(0, 255, 102, 0.14)" className="bg-cyber-card/95 border border-gray-800 rounded-xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="font-mono text-xs text-cyber-red uppercase">Selected Node Details</span>
              <h3 className="text-2xl font-bold text-white mt-1">{selectedNode.title}</h3>
              <p className="font-mono text-sm text-cyber-cyan mt-1">Management IP: {selectedNode.ip}</p>
              <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                {selectedNode.notes}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-black/50 border border-gray-800 font-mono text-xs text-gray-400">
              <span className="text-cyber-green">●</span> Packet forwarding verified. Zero packet loss across trunk links.
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#070709] border border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-[#12141C] px-4 py-2 border-b border-gray-800 flex justify-between items-center">
                <span className="font-mono text-xs text-gray-400">running-config // {selectedNode.id}</span>
                <span className="font-mono text-[11px] text-cyber-cyan">READ-ONLY</span>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-green-400 overflow-x-auto leading-relaxed">
                <code>{selectedNode.config}</code>
              </pre>
            </div>
          </div>
        </div>
      </Tilt3DCard>
    </section>
  );
}