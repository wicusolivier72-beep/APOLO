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
    <nav className="module-nav border-b sticky top-16 z-30 py-3">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="module-nav__track flex items-center gap-2 overflow-x-auto no-scrollbar">
          {modules.map((mod) => {
            const isActive = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`module-tab px-4 py-2 rounded-full transition-all whitespace-nowrap font-medium ${
                  isActive
                    ? 'module-tab-active'
                    : 'module-tab-idle'
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
