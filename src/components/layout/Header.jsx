import React from 'react';
import { Search, BookMarked, ShieldCheck, Terminal, Compass } from 'lucide-react';

export default function Header({ searchFilter, setSearchFilter, savedClipsCount, onOpenDrawer }) {
  return (
    <header className="sticky top-0 z-40 bg-[#0C0C0C]/95 backdrop-blur-md border-b border-[#2A2A2A]">
      {/* Top Banner Status Strip */}
      <div className="bg-[#121212] border-b border-[#2A2A2A] px-4 py-1 flex items-center justify-between text-[11px] font-mono text-[#8E8E8A]">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[#00E5FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse"></span>
            BLUEPRINT STUDIO v1.0
          </span>
          <span className="hidden sm:inline text-[#2A2A2A]">|</span>
          <span className="hidden sm:inline">DATABASE: 5856+ GREEK MSS / 100+ ARTIFACTS</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#8E8E8A] hidden md:inline">SYSTEM: EDITORIAL BRUTALISM</span>
          <span className="text-[#00E5FF] font-medium">PRIMARY SOURCES ONLY</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-[#00E5FF] bg-[#121212] flex items-center justify-center text-[#00E5FF] font-mono font-bold text-lg shadow-[0_0_10px_rgba(0,229,255,0.2)]">
              ΑΩ
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-wider font-mono text-[#F4F4F0] flex items-center gap-2">
                APOLOGETICS<span className="text-[#00E5FF]">101</span>
              </h1>
              <p className="text-[10px] font-mono text-[#8E8E8A] uppercase tracking-widest">
                Digital Museum & Field Manual
              </p>
            </div>
          </div>

          {/* Mobile drawer toggle */}
          <button
            onClick={onOpenDrawer}
            className="md:hidden flex items-center gap-1.5 px-2.5 py-1 border border-[#2A2A2A] bg-[#1A1A1A] text-xs font-mono text-[#00E5FF]"
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>({savedClipsCount})</span>
          </button>
        </div>

        {/* Global Search & Drawer Launcher */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8E8E8A]" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="SEARCH MANUSCRIPTS, ARTIFACTS, CREEDS..."
              className="w-full bg-[#121212] border border-[#2A2A2A] focus:border-[#00E5FF] pl-9 pr-3 py-1.5 text-xs font-mono text-[#F4F4F0] placeholder-[#8E8E8A] focus:outline-none transition-colors"
            />
            {searchFilter && (
              <button
                onClick={() => setSearchFilter('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-mono text-[#8E8E8A] hover:text-[#F4F4F0]"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={onOpenDrawer}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-[#2A2A2A] bg-[#121212] hover:border-[#00E5FF] hover:bg-[#1A1A1A] text-xs font-mono text-[#F4F4F0] transition-colors"
          >
            <BookMarked className="w-4 h-4 text-[#00E5FF]" />
            <span>FIELD DRAWER</span>
            <span className="bg-[#1A1A1A] text-[#00E5FF] border border-[#2A2A2A] px-1.5 py-0.5 text-[10px]">
              {savedClipsCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
