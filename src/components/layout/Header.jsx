import React from 'react';
import { Search } from 'lucide-react';

export default function Header({ searchFilter, setSearchFilter }) {
  return (
    <header className="sticky top-0 z-40 bg-[#0B0C0E]/90 backdrop-blur-md border-b border-[#222630]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#13151A] border border-[#222630] flex items-center justify-center text-[#E2C08D] font-bold text-sm">
            E
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-[#F3F4F6] tracking-tight">
              Extant
            </h1>
            <p className="text-xs text-[#9CA3AF]">
              Digital Museum
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-44 sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search archive..."
            className="w-full bg-[#13151A] border border-[#222630] focus:border-[#E2C08D] pl-9 pr-3 py-1.5 text-sm text-[#F3F4F6] placeholder-[#9CA3AF] focus:outline-none transition-colors rounded-lg"
          />
          {searchFilter && (
            <button
              onClick={() => setSearchFilter('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF] hover:text-[#F3F4F6]"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
