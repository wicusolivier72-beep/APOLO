import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import ModuleNav from './components/layout/ModuleNav';
import TextualCriticismModule from './components/modules/TextualCriticismModule';
import ArchaeologyVaultModule from './components/modules/ArchaeologyVaultModule';
import HistoricalJesusModule from './components/modules/HistoricalJesusModule';
import MythBustingModule from './components/modules/MythBustingModule';
import TacticsModule from './components/modules/TacticsModule';
import CheatSheetDrawer from './components/ui/CheatSheetDrawer';

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
    <div className="min-h-screen bg-[#09090B] text-[#F4F4F5] flex flex-col font-sans selection:bg-[#E2C08D] selection:text-[#09090B] antialiased">
      {/* Header */}
      <Header
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        savedClipsCount={savedClips.length}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Module Nav */}
      <ModuleNav activeModule={activeModule} setActiveModule={setActiveModule} />

      {/* Clean Hero Header */}
      <section className="border-b border-[#27272A] bg-[#09090B] py-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-2 font-mono">
          <span className="mono-pill">ACADEMIC // TRANSPARENT // MYTH-BUSTING</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#F4F4F5] tracking-tight uppercase">
            APOLOGETICS 101 FIELD BLUEPRINT
          </h2>
          <p className="text-xs text-[#71717A] max-w-2xl leading-relaxed">
            A fast, structured digital museum and field manual for Christian apologetics and biblical reliability. Rooted in primary manuscripts, verified archaeological inscriptions, early creedal timing, and logical self-refuting analysis.
          </p>
        </div>
      </section>

      {/* Main Module Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-6 py-8">
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

      {/* Footer */}
      <footer className="border-t border-[#27272A] bg-[#121215] py-6 px-4 md:px-6 font-mono text-xs text-[#71717A]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2C08D]"></span>
            <span className="text-[#F4F4F5] font-bold">APOLOGETICS 101</span>
            <span>— DIGITAL MUSEUM & FIELD MANUAL</span>
          </div>

          <div className="text-[11px] text-[#71717A]">
            PRIMARY SOURCES FIRST • ZERO FLUFF
          </div>
        </div>
      </footer>

      {/* Field Drawer */}
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
