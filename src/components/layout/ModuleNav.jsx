import React from 'react';
import { Layers, Landmark, History, Zap, MessageSquareCode } from 'lucide-react';

export const modules = [
  { id: 'module-1', code: '[01]', name: 'TEXTUAL CRITICISM & MSS', icon: Layers, subtitle: 'Papyri, Codices & Variants' },
  { id: 'module-2', code: '[02]', name: 'ARCHAEOLOGICAL VAULT', icon: Landmark, subtitle: 'Inscriptions & Artifact IDs' },
  { id: 'module-3', code: '[03]', name: 'HISTORICAL JESUS & CREEDS', icon: History, subtitle: '1 Cor 15 & Minimal Facts' },
  { id: 'module-4', code: '[04]', name: 'POP-CULTURE MYTH-BUSTING', icon: Zap, subtitle: 'Horus, Nicaea & Telephone' },
  { id: 'module-5', code: '[05]', name: 'TACTICS & FIELD GUIDES', icon: MessageSquareCode, subtitle: 'Columbo & Self-Refuting' },
];

export default function ModuleNav({ activeModule, setActiveModule }) {
  return (
    <nav className="border-b border-[#2A2A2A] bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="text-[10px] font-mono text-[#8E8E8A] mb-2 uppercase tracking-widest flex items-center gap-2">
          <span className="text-[#00E5FF]">■</span> CONTENT PILLAR MATRIX: SELECT DATABASE MODULE
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isActive = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`text-left p-2.5 border transition-all relative overflow-hidden group ${
                  isActive
                    ? 'border-[#00E5FF] bg-[#121212] shadow-[0_0_15px_rgba(0,229,255,0.1)]'
                    : 'border-[#2A2A2A] bg-[#121212]/50 hover:border-[#8E8E8A] hover:bg-[#121212]'
                }`}
              >
                {/* Active Indicator Top Border Bar */}
                {isActive && <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00E5FF]"></div>}

                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#00E5FF]' : 'text-[#8E8E8A]'}`}>
                    {mod.code}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#00E5FF]' : 'text-[#8E8E8A] group-hover:text-[#F4F4F0]'}`} />
                </div>
                <div className={`font-mono text-xs font-semibold uppercase tracking-wider truncate ${isActive ? 'text-[#F4F4F0]' : 'text-[#8E8E8A] group-hover:text-[#F4F4F0]'}`}>
                  {mod.name}
                </div>
                <div className="text-[10px] font-mono text-[#8E8E8A] truncate mt-0.5">
                  {mod.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
