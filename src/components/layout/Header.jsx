import React from 'react';
import { Search, Bookmark } from 'lucide-react';

export default function Header({ searchFilter, setSearchFilter, savedClipsCount, onOpenDrawer }) {
  return (
    <header className="sticky top-0 z-40 bg-[#0B0C0E]/90 backdrop-blur-md border-b border-[#222630]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#13151A] border border-[#222630] flex items-center justify-center text-[#E2C08D] font-bold text-sm">
            ΑΩ
          </div>
          <div>
            <h1 className="text-base font-semibold text-[#F3F4F6] tracking-tight">
              Apologetics <span className="text-[#E2C08D] font-medium">101</span>
            </h1>
            <p className="text-xs text-[#6B7280]">
              Digital Museum & Field Guide
            </p>
          </div>
        </div>

        {/* Search & Drawer button */}
        <div className="flex items-center gap-3">
          <div className="relative w-40 sm:w-60">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search..."
              className="w-full bg-[#13151A] border border-[#222630] focus:border-[#E2C08D] pl-8 pr-3 py-1.5 text-xs text-[#F3F4F6] placeholder-[#6B7280] focus:outline-none transition-colors rounded-lg"
            />
            {searchFilter && (
              <button
                onClick={() => setSearchFilter('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[#6B7280] hover:text-[#F3F4F6]"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={onOpenDrawer}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#222630] bg-[#13151A] hover:border-[#E2C08D] text-xs text-[#F3F4F6] transition-all rounded-lg"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#E2C08D]" />
            <span className="hidden sm:inline font-medium">Field Drawer</span>
            <span className="bg-[#1D212B] text-[#E2C08D] px-1.5 py-0.5 text-[10px] rounded-md font-semibold">
              {savedClipsCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
