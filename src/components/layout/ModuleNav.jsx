import React from 'react';

export const modules = [
  { id: 'module-1', name: 'Manuscripts & Text' },
  { id: 'module-2', name: 'Archaeology Vault' },
  { id: 'module-3', name: 'Historical Jesus' },
  { id: 'module-4', name: 'Myth Busting' },
  { id: 'module-5', name: 'Tactics' },
];

export default function ModuleNav({ activeModule, setActiveModule }) {
  return (
    <nav className="border-b border-[#222630] bg-[#0B0C0E] sticky top-16 z-30 py-3">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {modules.map((mod) => {
            const isActive = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`px-4 py-2 rounded-full transition-all text-sm whitespace-nowrap font-medium ${
                  isActive
                    ? 'bg-[#E2C08D] text-[#0B0C0E] shadow-sm font-semibold'
                    : 'text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#13151A]'
                }`}
              >
                {mod.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
