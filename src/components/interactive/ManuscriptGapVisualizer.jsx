import React, { useState } from 'react';
import { manuscriptGapData } from '../../data/manuscriptsData';
import { Clock, FileText, Bookmark } from 'lucide-react';

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
    <div className="blueprint-card p-5 sm:p-6 mb-8 border border-[#222630] bg-[#13151A] rounded-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#222630] pb-4 mb-5">
        <div>
          <h3 className="text-base font-semibold text-[#F3F4F6]">
            Manuscript Time Gap & Copy Comparison
          </h3>
          <p className="text-sm text-[#9CA3AF] mt-0.5">
            Comparing the time elapsed between original writing and earliest surviving copy.
          </p>
        </div>

        <div className="flex items-center bg-[#0B0C0E] p-1 rounded-lg border border-[#222630] text-sm self-start sm:self-auto">
          <button
            onClick={() => setActiveMetric('gap')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeMetric === 'gap' ? 'bg-[#1D212B] text-[#E2C08D] font-semibold' : 'text-[#9CA3AF] hover:text-[#F3F4F6]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Time Gap</span>
          </button>
          <button
            onClick={() => setActiveMetric('copies')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeMetric === 'copies' ? 'bg-[#1D212B] text-[#E2C08D] font-semibold' : 'text-[#9CA3AF] hover:text-[#F3F4F6]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Copy Count</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Bars */}
        <div className="lg:col-span-7 space-y-3">
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
                className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#E2C08D]/60 bg-[#1A1D24]'
                    : 'border-[#222630] bg-[#0B0C0E] hover:border-[#374151]'
                }`}
              >
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className={`font-medium ${isNT ? 'text-[#E2C08D]' : 'text-[#F3F4F6]'}`}>
                    {item.author} <span className="text-xs text-[#9CA3AF]">({item.work})</span>
                  </span>
                  <span className={`text-sm font-semibold ${isNT ? 'text-[#E2C08D]' : 'text-[#9CA3AF]'}`}>
                    {activeMetric === 'gap' ? `${item.timeGapYears} yr gap` : `${item.copiesCount.toLocaleString()} MSS`}
                  </span>
                </div>

                <div className="w-full bg-[#13151A] h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isNT ? 'bg-[#E2C08D]' : 'bg-[#374151]'
                    }`}
                    style={{ width: `${barWidth}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Details Card */}
        <div className="lg:col-span-5 border border-[#222630] bg-[#0B0C0E] p-5 rounded-xl">
          <div className="text-xs text-[#E2C08D] font-semibold mb-1">
            Data Details
          </div>

          <h4 className="text-base font-semibold text-[#F3F4F6] border-b border-[#222630] pb-2 mb-3">
            {selectedAuthor.author}
          </h4>

          <div className="space-y-2.5 text-sm text-[#9CA3AF] mb-4">
            <div className="flex justify-between border-b border-[#222630]/60 pb-1">
              <span>Work:</span>
              <span className="text-[#F3F4F6]">{selectedAuthor.work}</span>
            </div>
            <div className="flex justify-between border-b border-[#222630]/60 pb-1">
              <span>Date Written:</span>
              <span className="text-[#F3F4F6]">{selectedAuthor.dateWritten}</span>
            </div>
            <div className="flex justify-between border-b border-[#222630]/60 pb-1">
              <span>Earliest Copy:</span>
              <span className="text-[#F3F4F6]">{selectedAuthor.earliestCopy}</span>
            </div>
            <div className="flex justify-between border-b border-[#222630]/60 pb-1">
              <span>Time Gap:</span>
              <span className="text-[#E2C08D] font-semibold">{selectedAuthor.timeGapYears} Years</span>
            </div>
            <div className="flex justify-between">
              <span>Greek Manuscripts:</span>
              <span className="text-[#E2C08D] font-semibold">{selectedAuthor.copiesCount.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4 p-3.5 bg-[#13151A] rounded-lg border border-[#222630]">
            {selectedAuthor.notes}
          </p>

          {onSaveClip && (
            <button
              onClick={() =>
                onSaveClip({
                  title: `${selectedAuthor.author} Manuscript Gap`,
                  snippet: `${selectedAuthor.author} (${selectedAuthor.work}): Written ${selectedAuthor.dateWritten}, earliest copy ${selectedAuthor.earliestCopy} (${selectedAuthor.timeGapYears} yr gap, ${selectedAuthor.copiesCount} MSS).`,
                  category: 'Manuscripts'
                })
              }
              className="w-full py-2.5 border border-[#222630] bg-[#13151A] hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#F3F4F6] text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Bookmark className="w-4 h-4 text-[#E2C08D]" />
              <span>Save to Field Drawer</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
