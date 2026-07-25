import React, { useState } from 'react';
import Header from './components/layout/Header';
import ModuleNav from './components/layout/ModuleNav';
import TextualCriticismModule from './components/modules/TextualCriticismModule';
import ArchaeologyVaultModule from './components/modules/ArchaeologyVaultModule';
import HistoricalJesusModule from './components/modules/HistoricalJesusModule';
import MythBustingModule from './components/modules/MythBustingModule';
import TacticsModule from './components/modules/TacticsModule';
import { FloatingPathsBackground } from '@/components/ui/floating-paths';
import { ArrowDown, Layers, Landmark, History, ShieldAlert, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeModule, setActiveModule] = useState('module-1');
  const [searchFilter, setSearchFilter] = useState('');

  const scrollToContent = (moduleId) => {
    if (moduleId) {
      setActiveModule(moduleId);
    }
    const element = document.getElementById('archive-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F3F4F6] flex flex-col font-sans selection:bg-[#E2C08D] selection:text-[#0B0C0E] antialiased">
      {/* Header */}
      <Header
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />

      {/* Full-Screen Immersive Landing Hero */}
      <section className="relative border-b border-[#222630] bg-[#0B0C0E] min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden">
        <FloatingPathsBackground position={-1} className="w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10 my-auto">
            <div>
              <span className="subtle-badge">Academic • Precise • Transparent</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F3F4F6] tracking-tight">
              Extant
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed font-normal">
              An interactive digital museum for manuscript evidence, verified archaeological inscriptions, early creedal timelines, and conversation guides.
            </p>

            {/* Call to Action & Quick Category Launchers */}
            <div className="pt-4 space-y-6">
              <button
                onClick={() => scrollToContent()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E2C08D] hover:bg-[#E2C08D]/90 text-[#0B0C0E] font-semibold text-sm rounded-full transition-all shadow-lg hover:shadow-[#E2C08D]/10"
              >
                <span>Explore Archive</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Category Quick Selector Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
                <button
                  onClick={() => scrollToContent('module-1')}
                  className="px-3.5 py-1.5 rounded-full border border-[#222630] bg-[#13151A]/80 hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#9CA3AF] transition-all flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Manuscripts & Text</span>
                </button>

                <button
                  onClick={() => scrollToContent('module-2')}
                  className="px-3.5 py-1.5 rounded-full border border-[#222630] bg-[#13151A]/80 hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#9CA3AF] transition-all flex items-center gap-1.5"
                >
                  <Landmark className="w-3.5 h-3.5" />
                  <span>Archaeology Vault</span>
                </button>

                <button
                  onClick={() => scrollToContent('module-3')}
                  className="px-3.5 py-1.5 rounded-full border border-[#222630] bg-[#13151A]/80 hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#9CA3AF] transition-all flex items-center gap-1.5"
                >
                  <History className="w-3.5 h-3.5" />
                  <span>Historical Jesus</span>
                </button>

                <button
                  onClick={() => scrollToContent('module-4')}
                  className="px-3.5 py-1.5 rounded-full border border-[#222630] bg-[#13151A]/80 hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#9CA3AF] transition-all flex items-center gap-1.5"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Myth Busting</span>
                </button>

                <button
                  onClick={() => scrollToContent('module-5')}
                  className="px-3.5 py-1.5 rounded-full border border-[#222630] bg-[#13151A]/80 hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#9CA3AF] transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Tactics</span>
                </button>
              </div>
            </div>
          </div>
        </FloatingPathsBackground>
      </section>

      {/* Main Database Content Section Anchor */}
      <div id="archive-content" className="scroll-mt-16">
        {/* Module Nav */}
        <ModuleNav activeModule={activeModule} setActiveModule={setActiveModule} />

        {/* Main Module Content */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8">
          {activeModule === 'module-1' && (
            <TextualCriticismModule searchFilter={searchFilter} />
          )}
          {activeModule === 'module-2' && (
            <ArchaeologyVaultModule searchFilter={searchFilter} />
          )}
          {activeModule === 'module-3' && (
            <HistoricalJesusModule searchFilter={searchFilter} />
          )}
          {activeModule === 'module-4' && (
            <MythBustingModule searchFilter={searchFilter} />
          )}
          {activeModule === 'module-5' && (
            <TacticsModule searchFilter={searchFilter} />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#222630] bg-[#13151A] py-6 px-4 sm:px-6 text-xs text-[#9CA3AF]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2C08D]"></span>
            <span className="text-[#F3F4F6] font-semibold">Extant</span>
            <span>— Digital Museum</span>
          </div>

          <div className="text-xs text-[#6B7280]">
            Primary Sources First
          </div>
        </div>
      </footer>
    </div>
  );
}
