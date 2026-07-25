import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import ModuleNav from './components/layout/ModuleNav';
import TextualCriticismModule from './components/modules/TextualCriticismModule';
import ArchaeologyVaultModule from './components/modules/ArchaeologyVaultModule';
import HistoricalJesusModule from './components/modules/HistoricalJesusModule';
import MythBustingModule from './components/modules/MythBustingModule';
import TacticsModule from './components/modules/TacticsModule';
import CheatSheetDrawer from './components/ui/CheatSheetDrawer';
import { Layers, Landmark, History, Zap, MessageSquareCode, ShieldCheck, Database, Award } from 'lucide-react';

export default function App() {
  const [activeModule, setActiveModule] = useState('module-1');
  const [searchFilter, setSearchFilter] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [savedClips, setSavedClips] = useState(() => {
    try {
      const saved = localStorage.getItem('apolo_saved_clips');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('apolo_saved_clips', JSON.stringify(savedClips));
    } catch (e) {
      console.error('Failed to save clips to local storage', e);
    }
  }, [savedClips]);

  const handleSaveClip = (clip) => {
    // Avoid duplicate clip by title
    if (!savedClips.some((c) => c.title === clip.title)) {
      setSavedClips([clip, ...savedClips]);
      setIsDrawerOpen(true);
    }
  };

  const handleRemoveClip = (index) => {
    setSavedClips(savedClips.filter((_, i) => i !== index));
  };

  const handleClearAllClips = () => {
    setSavedClips([]);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F4F4F0] flex flex-col font-sans selection:bg-[#00E5FF] selection:text-[#0C0C0C]">
      {/* Top Header */}
      <Header
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        savedClipsCount={savedClips.length}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Module Matrix Navigation */}
      <ModuleNav activeModule={activeModule} setActiveModule={setActiveModule} />

      {/* Hero Studio Banner */}
      <section className="border-b border-[#2A2A2A] bg-[#121212]/80 px-4 py-6 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="mono-pill text-[#00E5FF]">WES HUFF VIBE ARCHITECTURE</span>
              <span className="text-[10px] text-[#8E8E8A]">[ACADEMIC // TRANSPARENT // MYTH-BUSTING]</span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#F4F4F0] tracking-wider uppercase">
              APOLOGETICS 101 FIELD BLUEPRINT
            </h2>
            <p className="text-xs text-[#8E8E8A] max-w-3xl leading-relaxed">
              Rooted exclusively in primary manuscript papyri, archaeological artifacts, early creedal timing, and logical self-refuting analysis.
            </p>
          </div>

          {/* Quick Metric Blueprint Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            <div className="p-2.5 border border-[#2A2A2A] bg-[#0C0C0C] text-center">
              <div className="text-xs font-bold text-[#00E5FF]">5,856+</div>
              <div className="text-[9px] text-[#8E8E8A] uppercase">Greek NT MSS</div>
            </div>
            <div className="p-2.5 border border-[#2A2A2A] bg-[#0C0C0C] text-center">
              <div className="text-xs font-bold text-[#00E5FF]">30-50 YRS</div>
              <div className="text-[9px] text-[#8E8E8A] uppercase">Earliest Gap</div>
            </div>
            <div className="p-2.5 border border-[#2A2A2A] bg-[#0C0C0C] text-center">
              <div className="text-xs font-bold text-[#00E5FF]">100%</div>
              <div className="text-[9px] text-[#8E8E8A] uppercase">Verifiable Data</div>
            </div>
            <div className="p-2.5 border border-[#2A2A2A] bg-[#0C0C0C] text-center">
              <div className="text-xs font-bold text-[#00E5FF]">0 FLUFF</div>
              <div className="text-[9px] text-[#8E8E8A] uppercase">Brutalist Grid</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Module View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {activeModule === 'module-1' && (
          <TextualCriticismModule searchFilter={searchFilter} onSaveClip={handleSaveClip} />
        )}
        {activeModule === 'module-2' && (
          <ArchaeologyVaultModule searchFilter={searchFilter} onSaveClip={handleSaveClip} />
        )}
        {activeModule === 'module-3' && (
          <HistoricalJesusModule searchFilter={searchFilter} onSaveClip={handleSaveClip} />
        )}
        {activeModule === 'module-4' && (
          <MythBustingModule searchFilter={searchFilter} onSaveClip={handleSaveClip} />
        )}
        {activeModule === 'module-5' && (
          <TacticsModule searchFilter={searchFilter} onSaveClip={handleSaveClip} />
        )}
      </main>

      {/* Blueprint Footer */}
      <footer className="border-t border-[#2A2A2A] bg-[#121212] py-6 px-4 font-mono text-xs text-[#8E8E8A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF]"></span>
            <span className="text-[#F4F4F0] font-bold">APOLOGETICS 101</span>
            <span>— DIGITAL MUSEUM & FIELD MANUAL</span>
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <span>DESIGN: EDITORIAL BRUTALISM</span>
            <span className="text-[#2A2A2A]">|</span>
            <span>FRAMEWORK: REACT + VITE + TAILWIND</span>
            <span className="text-[#2A2A2A]">|</span>
            <span className="text-[#00E5FF]">PRIMARY SOURCES FIRST</span>
          </div>
        </div>
      </footer>

      {/* Sliding Field Drawer */}
      <CheatSheetDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        savedClips={savedClips}
        onRemoveClip={handleRemoveClip}
        onClearAll={handleClearAllClips}
      />
    </div>
  );
}
