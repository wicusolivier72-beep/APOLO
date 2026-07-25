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
    <div className="min-h-screen bg-[#0B0C0E] text-[#F3F4F6] flex flex-col font-sans selection:bg-[#E2C08D] selection:text-[#0B0C0E] antialiased">
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
      <section className="border-b border-[#222630] bg-[#0B0C0E] py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-1.5">
          <span className="subtle-badge">Academic • Precise • Transparent</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F4F6] tracking-tight">
            Apologetics 101 Field Guide
          </h2>
          <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl leading-relaxed">
            An interactive digital museum for manuscript evidence, verified archaeological inscriptions, early creedal timelines, and tactical conversation guides.
          </p>
        </div>
      </section>

      {/* Main Module Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8">
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
      <footer className="border-t border-[#222630] bg-[#13151A] py-6 px-4 sm:px-6 text-xs text-[#9CA3AF]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2C08D]"></span>
            <span className="text-[#F3F4F6] font-semibold">Apologetics 101</span>
            <span>— Digital Museum & Field Guide</span>
          </div>

          <div className="text-xs text-[#6B7280]">
            Primary Sources First
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
