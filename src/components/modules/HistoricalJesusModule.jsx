import React from 'react';
import { creedTimelineSteps, nonChristianHistorians } from '../../data/creedsJesusData';
import MinimalFactsMatrix from '../interactive/MinimalFactsMatrix';
import { BookmarkPlus } from 'lucide-react';

export default function HistoricalJesusModule({ searchFilter, onSaveClip }) {
  return (
    <div className="space-y-8 font-mono">
      {/* Module Header */}
      <div className="border-b border-[#27272A] pb-4">
        <span className="mono-pill">MODULE 03</span>
        <h2 className="text-xl font-bold text-[#F4F4F5] tracking-wide mt-1.5 uppercase">
          The Historical Jesus & Early Creeds
        </h2>
        <p className="text-xs text-[#71717A] mt-1 max-w-2xl leading-relaxed">
          Data-driven historical analysis focusing on early eyewitness testimony, 1 Corinthians 15 creedal chronology, non-Christian ancient historians, and the Minimal Facts matrix.
        </p>
      </div>

      {/* 1 Cor 15 Creed Timeline */}
      <div className="blueprint-card p-5 md:p-6 border border-[#27272A] bg-[#121215] rounded">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#27272A] pb-3 mb-6">
          <div>
            <span className="mono-pill text-[10px]">CREED CHRONOLOGY</span>
            <h3 className="text-base font-bold text-[#F4F4F5] mt-1">1 Corinthians 15:3–8 Creed Timeline</h3>
          </div>
          <span className="text-xs text-[#71717A] mt-1 sm:mt-0">Early Jerusalem Oral Tradition (c. 33 AD)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {creedTimelineSteps.map((step, idx) => (
            <div key={idx} className="border border-[#27272A] bg-[#09090B] p-4 rounded flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-[#E2C08D] font-bold block mb-1">{step.year} — {step.phase}</span>
                <h4 className="text-sm font-bold text-[#F4F4F5] mb-2">{step.title}</h4>
                <p className="text-xs text-[#71717A] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-3.5 bg-[#09090B] border border-[#27272A] rounded text-xs text-[#A1A1AA] leading-relaxed">
          <span className="text-[#E2C08D] font-bold">TAKEAWAY: </span>
          Paul explicitly uses rabbinic technical terms ('delivered' / 'received') for receiving the resurrection creed in Jerusalem within 3–5 years of Jesus' death. Resurrection claims did not take centuries of legend to form.
        </div>
      </div>

      {/* Minimal Facts Matrix */}
      <MinimalFactsMatrix onSaveClip={onSaveClip} />

      {/* Non-Christian Historians Catalog */}
      <div>
        <div className="flex items-center justify-between border-b border-[#27272A] pb-2 mb-4">
          <h3 className="text-xs font-bold text-[#F4F4F5] uppercase tracking-wider">
            NON-CHRISTIAN ANCIENT WITNESSES ({nonChristianHistorians.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {nonChristianHistorians.map((h, i) => (
            <div key={i} className="blueprint-card p-5 border border-[#27272A] bg-[#121215] rounded flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="mono-pill text-[10px]">EXTRA-BIBLICAL</span>
                  <span className="text-[10px] text-[#71717A]">{h.historian.split(' ')[0]}</span>
                </div>

                <h4 className="text-base font-bold text-[#F4F4F5] mb-0.5">{h.historian}</h4>
                <div className="text-xs text-[#E2C08D] font-semibold mb-3">{h.work}</div>

                <blockquote className="p-3 bg-[#09090B] border-l-2 border-l-[#E2C08D] text-xs text-[#F4F4F5] italic mb-3 leading-relaxed rounded-r">
                  "{h.quote}"
                </blockquote>

                <p className="text-xs text-[#71717A] leading-relaxed">{h.significance}</p>
              </div>

              <div className="pt-3 border-t border-[#27272A] mt-3 flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#71717A]">HISTORICAL WITNESS</span>
                {onSaveClip && (
                  <button
                    onClick={() =>
                      onSaveClip({
                        title: h.historian,
                        snippet: `${h.historian} (${h.work}): "${h.quote}"`,
                        category: '[HISTORICAL WITNESS]'
                      })
                    }
                    className="flex items-center gap-1 text-[#71717A] hover:text-[#F4F4F5] text-xs"
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" />
                    <span>Clip</span>
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
