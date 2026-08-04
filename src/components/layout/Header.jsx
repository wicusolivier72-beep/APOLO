import React from 'react';
import { Search } from 'lucide-react';
import { LogoIcon } from '../ui/LogoIcon';

export default function Header({ searchFilter, setSearchFilter }) {
  return (
    <header className="site-header sticky top-0 z-40 border-b">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <LogoIcon className="w-9 h-9 text-[#E2C08D]" />
          <div>
            <h1 className="brand-lockup text-base sm:text-lg tracking-tight">
              Extant
            </h1>
            <p className="brand-subtitle text-xs">
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
            className="archive-search w-full border pl-9 pr-3 py-1.5 text-sm text-[#F3F4F6] placeholder-[#9CA3AF] focus:outline-none transition-colors rounded-lg"
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
