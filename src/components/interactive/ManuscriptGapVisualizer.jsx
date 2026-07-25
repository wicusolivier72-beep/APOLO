import React, { useState } from 'react';
import { manuscriptGapData } from '../../data/manuscriptsData';
import { Info, BarChart2, ShieldCheck, Clock, FileText } from 'lucide-react';

export default function ManuscriptGapVisualizer({ onSaveClip }) {
  const [activeMetric, setActiveMetric] = useState('gap'); // 'gap' or 'copies'
  const [selectedAuthor, setSelectedAuthor] = useState(manuscriptGapData[0]);

  // Sort according to metric
  const sortedData = [...manuscriptGapData].sort((a, b) => {
    if (activeMetric === 'gap') {
      return a.timeGapYears - b.timeGapYears;
    } else {
      return b.copiesCount - a.copiesCount;
    }
  });

  const maxGap = Math.max(...manuscriptGapData.map((d) => d.timeGapYears));
  const maxCopies = Math.max(...manuscriptGapData.map((d) => d.copiesCount));

  return (
    <div className="blueprint-card p-4 md:p-6 my-6 border border-[#2A2A2A]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[#2A2A2A] pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-pill text-[#00E5FF]">INTERACTIVE VISUALIZER</span>
            <span className="text-[10px] font-mono text-[#8E8E8A]">[SVG SCHEMATIC 01]</span>
          </div>
          <h3 className="text-lg font-bold font-mono text-[#F4F4F0] mt-1 tracking-wide">
            MANUSCRIPT TIME GAP & RELIABILITY SCHEMATIC
          </h3>
          <p className="text-xs text-[#8E8E8A] mt-0.5">
            Comparing the time elapsed between original composition and earliest surviving copies across antiquity.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center border border-[#2A2A2A] bg-[#1A1A1A] p-1 font-mono text-xs">
          <button
            onClick={() => setActiveMetric('gap')}
            className={`px-3 py-1 flex items-center gap-1.5 transition-colors ${
              activeMetric === 'gap' ? 'bg-[#00E5FF] text-[#0C0C0C] font-bold' : 'text-[#8E8E8A] hover:text-[#F4F4F0]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>TIME GAP (YEARS)</span>
          </button>
          <button
            onClick={() => setActiveMetric('copies')}
            className={`px-3 py-1 flex items-center gap-1.5 transition-colors ${
              activeMetric === 'copies' ? 'bg-[#00E5FF] text-[#0C0C0C] font-bold' : 'text-[#8E8E8A] hover:text-[#F4F4F0]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>SURVIVING MSS COUNT</span>
          </button>
        </div>
      </div>

      {/* Main Visualization Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SVG Horizontal Bar Chart */}
        <div className="lg:col-span-8 space-y-3 font-mono">
          {sortedData.map((item) => {
            const isNT = item.author.startsWith('New Testament');
            const isSelected = selectedAuthor.author === item.author;

            const barWidthPercent =
              activeMetric === 'gap'
                ? Math.max(5, (item.timeGapYears / maxGap) * 100)
                : Math.max(6, (item.copiesCount / maxCopies) * 100);

            return (
              <div
                key={item.author}
                onClick={() => setSelectedAuthor(item)}
                className={`p-3 border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'border-[#00E5FF] bg-[#1A1A1A]'
                    : isNT
                    ? 'border-[#00E5FF]/40 bg-[#0C0C0C] hover:border-[#00E5FF]'
                    : 'border-[#2A2A2A] bg-[#0C0C0C] hover:border-[#8E8E8A]'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-2">
                    {isNT && <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />}
                    <span className={`font-bold ${isNT ? 'text-[#00E5FF]' : 'text-[#F4F4F0]'}`}>
                      {item.author}
                    </span>
                    <span className="text-[10px] text-[#8E8E8A]">({item.work})</span>
                  </div>

                  <div className="text-right">
                    {activeMetric === 'gap' ? (
                      <span className={`font-bold ${isNT ? 'text-[#00E5FF]' : 'text-[#F4F4F0]'}`}>
                        {item.timeGapYears} YRS GAP
                      </span>
                    ) : (
                      <span className={`font-bold ${isNT ? 'text-[#00E5FF]' : 'text-[#F4F4F0]'}`}>
                        {item.copiesCount.toLocaleString()} MSS
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bar container */}
                <div className="w-full bg-[#121212] h-4 border border-[#2A2A2A] relative overflow-hidden flex items-center">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isNT ? 'bg-[#00E5FF]' : 'bg-[#2A2A2A] group-hover:bg-[#8E8E8A]'
                    }`}
                    style={{ width: `${barWidthPercent}%` }}
                  ></div>

                  {/* Value overlay */}
                  <span className="absolute left-2 text-[10px] font-mono text-[#F4F4F0] z-10">
                    {activeMetric === 'gap'
                      ? `Written: ${item.dateWritten} ➔ Earliest Copy: ${item.earliestCopy}`
                      : `Total Greek Manuscripts: ${item.copiesCount.toLocaleString()}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Blueprint Panel for Selected Author */}
        <div className="lg:col-span-4 border border-[#2A2A2A] bg-[#121212] p-4 font-mono">
          <div className="text-[10px] text-[#00E5FF] mb-2 font-bold uppercase tracking-widest flex items-center justify-between">
            <span>[DATA INSPECTOR]</span>
            <span className="text-[#8E8E8A]">RATING: {selectedAuthor.reliabilityRating}</span>
          </div>

          <h4 className="text-base font-bold text-[#F4F4F0] border-b border-[#2A2A2A] pb-2 mb-3">
            {selectedAuthor.author}
          </h4>

          <div className="space-y-2.5 text-xs text-[#8E8E8A]">
            <div className="flex justify-between border-b border-[#2A2A2A]/50 pb-1">
              <span>Work / Title:</span>
              <span className="text-[#F4F4F0]">{selectedAuthor.work}</span>
            </div>
            <div className="flex justify-between border-b border-[#2A2A2A]/50 pb-1">
              <span>Date Written:</span>
              <span className="text-[#F4F4F0]">{selectedAuthor.dateWritten}</span>
            </div>
            <div className="flex justify-between border-b border-[#2A2A2A]/50 pb-1">
              <span>Earliest Extant Copy:</span>
              <span className="text-[#F4F4F0]">{selectedAuthor.earliestCopy}</span>
            </div>
            <div className="flex justify-between border-b border-[#2A2A2A]/50 pb-1">
              <span>Time Gap:</span>
              <span className="text-[#00E5FF] font-bold">{selectedAuthor.timeGapYears} Years</span>
            </div>
            <div className="flex justify-between border-b border-[#2A2A2A]/50 pb-1">
              <span>Greek Manuscripts:</span>
              <span className="text-[#00E5FF] font-bold">{selectedAuthor.copiesCount.toLocaleString()}</span>
            </div>
            {selectedAuthor.totalLangCopies && (
              <div className="flex justify-between border-b border-[#2A2A2A]/50 pb-1">
                <span>Ancient Translations:</span>
                <span className="text-[#F4F4F0]">~{selectedAuthor.totalLangCopies.toLocaleString()}</span>
              </div>
            )}
          </div>

          <div className="mt-4 p-3 bg-[#1A1A1A] border border-[#2A2A2A] text-xs text-[#F4F4F0]">
            <div className="text-[10px] text-[#00E5FF] font-bold mb-1">[HISTORICAL TAKEAWAY]</div>
            <p className="leading-relaxed text-[#8E8E8A]">{selectedAuthor.notes}</p>
          </div>

          {onSaveClip && (
            <button
              onClick={() =>
                onSaveClip({
                  title: `${selectedAuthor.author} Manuscript Gap`,
                  snippet: `${selectedAuthor.author} (${selectedAuthor.work}): Written ${selectedAuthor.dateWritten}, earliest copy ${selectedAuthor.earliestCopy} (${selectedAuthor.timeGapYears} yr gap, ${selectedAuthor.copiesCount} MSS).`,
                  category: '[MSS COMPARISON]'
                })
              }
              className="mt-4 w-full py-2 border border-[#00E5FF] bg-[#00E5FF]/10 hover:bg-[#00E5FF] hover:text-[#0C0C0C] text-[#00E5FF] text-xs font-mono font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>+ CLIP TO FIELD DRAWER</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
