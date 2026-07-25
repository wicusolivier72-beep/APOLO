import React from 'react';

export const modules = [
  { id: 'module-1', code: '01', name: 'TEXTUAL CRITICISM', subtitle: 'Papyri & Manuscripts' },
  { id: 'module-2', code: '02', name: 'ARCHAEOLOGICAL VAULT', subtitle: 'Steles & Inscriptions' },
  { id: 'module-3', code: '03', name: 'HISTORICAL JESUS', subtitle: 'Creeds & Minimal Facts' },
  { id: 'module-4', code: '04', name: 'MYTH-BUSTING', subtitle: 'Social Media Myths' },
  { id: 'module-5', code: '05', name: 'TACTICS & GUIDES', subtitle: 'Columbo Framework' },
];

export default function ModuleNav({ activeModule, setActiveModule }) {
  return (
    <nav className="border-b border-[#27272A] bg-[#09090B] sticky top-16 z-30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
          {modules.map((mod) => {
            const isActive = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`px-4 py-2.5 rounded transition-all whitespace-nowrap text-left flex items-center gap-2.5 font-mono text-xs ${
                  isActive
                    ? 'bg-[#121215] text-[#F4F4F5] border border-[#27272A] shadow-sm'
                    : 'text-[#71717A] hover:text-[#A1A1AA] hover:bg-[#121215]/50'
                }`}
              >
                <span className={`text-[10px] font-bold ${isActive ? 'text-[#E2C08D]' : 'text-[#52525B]'}`}>
                  {mod.code}
                </span>
                <span className="font-semibold tracking-wide uppercase">{mod.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
