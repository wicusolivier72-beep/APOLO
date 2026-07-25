import React from 'react';
import { creedTimelineSteps, nonChristianHistorians } from '../../data/creedsJesusData';
import MinimalFactsMatrix from '../interactive/MinimalFactsMatrix';
import { Bookmark } from 'lucide-react';

export default function HistoricalJesusModule({ searchFilter, onSaveClip }) {
  return (
    <div className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-[#222630] pb-4">
        <span className="subtle-badge">Creeds & Witnesses</span>
        <h2 className="text-xl font-semibold text-[#F3F4F6] mt-2">
          Historical Jesus & Early Creeds
        </h2>
        <p className="text-xs text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
          Eyewitness creedal chronology (1 Corinthians 15), non-Christian Roman/Jewish historians, and Minimal Facts.
        </p>
      </div>

      {/* 1 Cor 15 Timeline */}
      <div className="blueprint-card p-5 sm:p-6 border border-[#222630] bg-[#13151A] rounded-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222630] pb-3 mb-5">
          <div>
            <h3 className="text-sm font-semibold text-[#F3F4F6]">1 Corinthians 15:3–8 Creed Timeline</h3>
          </div>
          <span className="text-xs text-[#9CA3AF] mt-1 sm:mt-0">Early Jerusalem Oral Tradition (c. 33 AD)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {creedTimelineSteps.map((step, idx) => (
            <div key={idx} className="border border-[#222630] bg-[#0B0C0E] p-4 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#E2C08D] font-semibold block mb-1">{step.year}</span>
                <h4 className="text-sm font-semibold text-[#F3F4F6] mb-1.5">{step.title}</h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-[#0B0C0E] border border-[#222630] rounded-lg text-xs text-[#9CA3AF] leading-relaxed">
          <span className="text-[#E2C08D] font-medium">Historical Takeaway: </span>
          Paul explicitly uses rabbinic technical terms ('delivered' / 'received') for receiving the resurrection creed in Jerusalem within 3–5 years of Jesus' death. Resurrection claims did not take centuries of legend to form.
        </div>
      </div>

      {/* Minimal Facts */}
      <MinimalFactsMatrix onSaveClip={onSaveClip} />

      {/* Non-Christian Historians */}
      <div>
        <h3 className="text-xs font-semibold text-[#F3F4F6] uppercase tracking-wider mb-4">
          Non-Christian Ancient Witnesses ({nonChristianHistorians.length})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nonChristianHistorians.map((h, i) => (
            <div key={i} className="blueprint-card p-5 border border-[#222630] bg-[#13151A] rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="subtle-badge">Extra-Biblical</span>
                  <span className="text-xs text-[#6B7280]">{h.historian.split(' ')[0]}</span>
                </div>

                <h4 className="text-base font-semibold text-[#F3F4F6] mb-0.5">{h.historian}</h4>
                <div className="text-xs text-[#E2C08D] font-medium mb-3">{h.work}</div>

                <blockquote className="p-3 bg-[#0B0C0E] border-l-2 border-l-[#E2C08D] text-xs text-[#F3F4F6] italic mb-3 leading-relaxed rounded-r-lg">
                  "{h.quote}"
                </blockquote>

                <p className="text-xs text-[#9CA3AF] leading-relaxed">{h.significance}</p>
              </div>

              <div className="pt-3 border-t border-[#222630] mt-3 flex items-center justify-between text-xs">
                <span className="text-xs text-[#6B7280]">Historical Witness</span>
                {onSaveClip && (
                  <button
                    onClick={() =>
                      onSaveClip({
                        title: h.historian,
                        snippet: `${h.historian} (${h.work}): "${h.quote}"`,
                        category: 'Witness'
                      })
                    }
                    className="flex items-center gap-1 text-[#9CA3AF] hover:text-[#F3F4F6]"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Save</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
