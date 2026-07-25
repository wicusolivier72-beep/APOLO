import React, { useState } from 'react';
import { manuscriptGapData } from '../../data/manuscriptsData';
import { Clock, FileText, BookmarkPlus } from 'lucide-react';

export default function ManuscriptGapVisualizer({ onSaveClip }) {
  const [activeMetric, setActiveMetric] = useState('gap');
  const [selectedAuthor, setSelectedAuthor] = useState(manuscriptGapData[0]);

  const sortedData = [...manuscriptGapData].sort((a, b) => {
    if (activeMetric === 'gap') return a.timeGapYears - b.timeGapYears;
    return b.copiesCount - a.copiesCount;
  });

  const maxGap = Math.max(...manuscriptGapData.map((d) => d.timeGapYears));
  const maxCopies = Math.max(...manuscriptGapData.map((d) => d.copiesCount));

  return (
    <div className="blueprint-card p-5 md:p-6 mb-8 border border-[#27272A] bg-[#121215]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#27272A] pb-4 mb-6">
        <div>
          <span className="mono-pill mb-1">INTERACTIVE TIMELINE SCHEMATIC</span>
          <h3 className="text-base font-bold text-[#F4F4F5] tracking-wide mt-1">
            Manuscript Time Gap & Copy Abundance Comparison
          </h3>
          <p className="text-xs text-[#71717A] mt-0.5">
            Time elapsed between original writing and earliest surviving copy across ancient history.
          </p>
        </div>

        {/* View Switch */}
        <div className="flex items-center border border-[#27272A] bg-[#09090B] p-1 rounded font-mono text-xs self-start sm:self-auto">
          <button
            onClick={() => setActiveMetric('gap')}
            className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
              activeMetric === 'gap' ? 'bg-[#1E1E24] text-[#E2C08D] font-bold' : 'text-[#71717A] hover:text-[#F4F4F5]'
            }`}
          >
            <Clock className="w-3 h-3" />
            <span>TIME GAP (YEARS)</span>
          </button>
          <button
            onClick={() => setActiveMetric('copies')}
            className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
              activeMetric === 'copies' ? 'bg-[#1E1E24] text-[#E2C08D] font-bold' : 'text-[#71717A] hover:text-[#F4F4F5]'
            }`}
          >
            <FileText className="w-3 h-3" />
            <span>SURVIVING MSS</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sleek Chart Bars */}
        <div className="lg:col-span-7 space-y-3 font-mono">
          {sortedData.map((item) => {
            const isNT = item.author.startsWith('New Testament');
            const isSelected = selectedAuthor.author === item.author;

            const barWidth =
              activeMetric === 'gap'
                ? Math.max(4, (item.timeGapYears / maxGap) * 100)
                : Math.max(5, (item.copiesCount / maxCopies) * 100);

            return (
              <div
                key={item.author}
                onClick={() => setSelectedAuthor(item)}
                className={`p-3 rounded border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#E2C08D]/60 bg-[#1A1A1E]'
                    : 'border-[#27272A] bg-[#09090B] hover:border-[#3F3F46]'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className={`font-semibold ${isNT ? 'text-[#E2C08D]' : 'text-[#F4F4F5]'}`}>
                    {item.author} <span className="text-[10px] text-[#71717A]">({item.work})</span>
                  </span>
                  <span className={`font-bold ${isNT ? 'text-[#E2C08D]' : 'text-[#A1A1AA]'}`}>
                    {activeMetric === 'gap' ? `${item.timeGapYears} yrs gap` : `${item.copiesCount.toLocaleString()} MSS`}
                  </span>
                </div>

                <div className="w-full bg-[#121215] h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isNT ? 'bg-[#E2C08D]' : 'bg-[#3F3F46]'
                    }`}
                    style={{ width: `${barWidth}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Data Inspector Card */}
        <div className="lg:col-span-5 border border-[#27272A] bg-[#09090B] p-5 rounded font-mono">
          <div className="text-[10px] text-[#E2C08D] font-bold uppercase tracking-widest mb-2">
            [MANUSCRIPT RECORD DATA]
          </div>

          <h4 className="text-sm font-bold text-[#F4F4F5] border-b border-[#27272A] pb-2 mb-3">
            {selectedAuthor.author}
          </h4>

          <div className="space-y-2 text-xs text-[#A1A1AA] mb-4">
            <div className="flex justify-between border-b border-[#27272A]/40 pb-1">
              <span>Work:</span>
              <span className="text-[#F4F4F5]">{selectedAuthor.work}</span>
            </div>
            <div className="flex justify-between border-b border-[#27272A]/40 pb-1">
              <span>Date Written:</span>
              <span className="text-[#F4F4F5]">{selectedAuthor.dateWritten}</span>
            </div>
            <div className="flex justify-between border-b border-[#27272A]/40 pb-1">
              <span>Earliest Extant Copy:</span>
              <span className="text-[#F4F4F5]">{selectedAuthor.earliestCopy}</span>
            </div>
            <div className="flex justify-between border-b border-[#27272A]/40 pb-1">
              <span>Time Gap:</span>
              <span className="text-[#E2C08D] font-bold">{selectedAuthor.timeGapYears} Years</span>
            </div>
            <div className="flex justify-between">
              <span>Greek Manuscripts:</span>
              <span className="text-[#E2C08D] font-bold">{selectedAuthor.copiesCount.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-xs text-[#71717A] leading-relaxed mb-4 p-3 bg-[#121215] border border-[#27272A] rounded">
            {selectedAuthor.notes}
          </p>

          {onSaveClip && (
            <button
              onClick={() =>
                onSaveClip({
                  title: `${selectedAuthor.author} Manuscript Gap`,
                  snippet: `${selectedAuthor.author} (${selectedAuthor.work}): Written ${selectedAuthor.dateWritten}, earliest copy ${selectedAuthor.earliestCopy} (${selectedAuthor.timeGapYears} yr gap, ${selectedAuthor.copiesCount} MSS).`,
                  category: '[MSS COMPARISON]'
                })
              }
              className="w-full py-2 border border-[#27272A] bg-[#121215] hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#F4F4F5] text-xs font-mono rounded transition-all flex items-center justify-center gap-1.5"
            >
              <BookmarkPlus className="w-3.5 h-3.5 text-[#E2C08D]" />
              <span>CLIP TO FIELD DRAWER</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
