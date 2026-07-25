import React from 'react';
import { Search, BookMarked } from 'lucide-react';

export default function Header({ searchFilter, setSearchFilter, savedClipsCount, onOpenDrawer }) {
  return (
    <header className="sticky top-0 z-40 bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded border border-[#E2C08D]/40 bg-[#121215] flex items-center justify-center text-[#E2C08D] font-mono font-bold text-sm">
            ΑΩ
          </div>
          <div>
            <h1 className="text-base font-bold tracking-wider font-mono text-[#F4F4F5]">
              APOLOGETICS<span className="text-[#E2C08D]">101</span>
            </h1>
            <p className="text-[10px] font-mono text-[#71717A] tracking-widest uppercase">
              Digital Museum & Field Manual
            </p>
          </div>
        </div>

        {/* Global Search & Field Drawer */}
        <div className="flex items-center gap-3">
          <div className="relative w-44 sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#71717A]" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search database..."
              className="w-full bg-[#121215] border border-[#27272A] focus:border-[#E2C08D] pl-8 pr-3 py-1.5 text-xs font-mono text-[#F4F4F5] placeholder-[#71717A] focus:outline-none transition-colors rounded"
            />
            {searchFilter && (
              <button
                onClick={() => setSearchFilter('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-mono text-[#71717A] hover:text-[#F4F4F5]"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={onOpenDrawer}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#27272A] bg-[#121215] hover:border-[#E2C08D] hover:bg-[#1A1A1E] text-xs font-mono text-[#F4F4F5] transition-all rounded"
          >
            <BookMarked className="w-3.5 h-3.5 text-[#E2C08D]" />
            <span className="hidden sm:inline">FIELD DRAWER</span>
            <span className="bg-[#1A1A1E] text-[#E2C08D] border border-[#27272A] px-1.5 py-0.5 text-[10px] rounded">
              {savedClipsCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
