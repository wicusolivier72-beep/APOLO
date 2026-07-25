import React from 'react';
import { mythBustingList } from '../../data/mythsData';
import { Bookmark } from 'lucide-react';

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
    <div className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-[#222630] pb-4">
        <span className="subtle-badge">Social Media Myths</span>
        <h2 className="text-xl font-semibold text-[#F3F4F6] mt-2">
          Pop-Culture Myth-Busting
        </h2>
        <p className="text-xs text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
          Short-form counter-arguments against viral claims (Horus/Mithra, telephone game fallacies, Nicaea canon legends, Easter etymology).
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {filteredMyths.map((myth) => (
          <div key={myth.id} className="blueprint-card border border-[#222630] bg-[#13151A] p-5 rounded-xl">
            <div className="flex items-center justify-between border-b border-[#222630] pb-3 mb-4">
              <span className="subtle-badge">{myth.category.replace(/\[|\]/g, '')}</span>
              <span className="text-xs text-[#6B7280]">{myth.id}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 text-xs">
              <div className="md:col-span-5 p-3.5 bg-[#0B0C0E] border border-[#222630] rounded-xl">
                <div className="text-xs text-[#9CA3AF] font-medium mb-1">Viral Claim:</div>
                <h4 className="text-sm font-semibold text-[#F3F4F6] mb-2">"{myth.claim}"</h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{myth.mythDetail}</p>
              </div>

              <div className="md:col-span-7 p-3.5 bg-[#0B0C0E] border border-[#222630] rounded-xl flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[#E2C08D] font-medium mb-1">Historical Reality:</div>
                  <p className="text-xs text-[#F3F4F6] leading-relaxed mb-3">{myth.historicalReality}</p>
                </div>
                <div className="text-xs text-[#E2C08D] pt-2 border-t border-[#222630]">
                  <span className="text-[#9CA3AF]">Primary Evidence: </span>
                  {myth.primaryEvidence}
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#0B0C0E] border border-[#222630] rounded-lg text-xs">
              <div className="text-xs text-[#9CA3AF] font-medium mb-1.5">30-Second Takeaway:</div>
              <ul className="space-y-1 text-[#9CA3AF]">
                {myth.refutationPoints.map((pt, idx) => (
                  <li key={idx}>• {pt}</li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#222630] mt-4 flex items-center justify-between text-xs">
              <span className="text-xs text-[#6B7280]">Myth Card</span>
              {onSaveClip && (
                <button
                  onClick={() =>
                    onSaveClip({
                      title: `Myth Bust: ${myth.claim}`,
                      snippet: `Myth: "${myth.claim}" ➔ Reality: ${myth.historicalReality} Primary evidence: ${myth.primaryEvidence}`,
                      category: 'Myth Bust'
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
  );
}
