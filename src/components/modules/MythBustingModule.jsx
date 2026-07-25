import React from 'react';
import { mythBustingList } from '../../data/mythsData';
import { BookmarkPlus } from 'lucide-react';

export default function MythBustingModule({ searchFilter, onSaveClip }) {
  const filteredMyths = mythBustingList.filter((m) => {
    if (!searchFilter) return true;
    const q = searchFilter.toLowerCase();
    return (
      m.claim.toLowerCase().includes(q) ||
      m.historicalReality.toLowerCase().includes(q) ||
      m.primaryEvidence.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8 font-mono">
      {/* Module Header */}
      <div className="border-b border-[#27272A] pb-4">
        <span className="mono-pill">MODULE 04</span>
        <h2 className="text-xl font-bold text-[#F4F4F5] tracking-wide mt-1.5 uppercase">
          Pop-Culture Myth-Busting
        </h2>
        <p className="text-xs text-[#71717A] mt-1 max-w-2xl leading-relaxed">
          Short-form, high-impact counter-arguments against viral social media myths (Horus/Mithra claims, telephone game fallacies, Nicaea canon legends, and Easter etymology).
        </p>
      </div>

      {/* Myth Cards */}
      <div className="space-y-5">
        {filteredMyths.map((myth) => (
          <div key={myth.id} className="blueprint-card border border-[#27272A] bg-[#121215] p-5 rounded">
            <div className="flex items-center justify-between border-b border-[#27272A] pb-3 mb-4">
              <span className="mono-pill text-[10px]">{myth.category}</span>
              <span className="text-[10px] text-[#71717A]">{myth.id}</span>
            </div>

            {/* Claim vs Reality */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-4">
              <div className="md:col-span-5 p-3.5 bg-[#09090B] border border-[#27272A] rounded">
                <div className="text-[10px] text-[#71717A] font-bold uppercase mb-1">VIRAL MYTH CLAIM:</div>
                <h4 className="text-sm font-bold text-[#F4F4F5] mb-2">"{myth.claim}"</h4>
                <p className="text-xs text-[#71717A] leading-relaxed">{myth.mythDetail}</p>
              </div>

              <div className="md:col-span-7 p-3.5 bg-[#09090B] border border-[#27272A] rounded flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-[#E2C08D] font-bold uppercase mb-1">HISTORICAL REALITY:</div>
                  <p className="text-xs text-[#F4F4F5] leading-relaxed mb-3">{myth.historicalReality}</p>
                </div>
                <div className="text-[11px] text-[#E2C08D] pt-2 border-t border-[#27272A]">
                  <span className="text-[#71717A]">PRIMARY EVIDENCE: </span>
                  {myth.primaryEvidence}
                </div>
              </div>
            </div>

            {/* Quick Bullets */}
            <div className="p-3 bg-[#09090B] border border-[#27272A] rounded text-xs">
              <div className="text-[10px] text-[#71717A] font-bold uppercase mb-1.5">30-SECOND CHEAT SHEET:</div>
              <ul className="space-y-1 text-[#A1A1AA]">
                {myth.refutationPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E2C08D]">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#27272A] mt-4 flex items-center justify-between text-xs">
              <span className="text-[10px] text-[#71717A]">MYTH CARD</span>
              {onSaveClip && (
                <button
                  onClick={() =>
                    onSaveClip({
                      title: `Myth Bust: ${myth.claim}`,
                      snippet: `Myth: "${myth.claim}" ➔ Reality: ${myth.historicalReality} Primary evidence: ${myth.primaryEvidence}`,
                      category: '[MYTH BUST]'
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
  );
}
