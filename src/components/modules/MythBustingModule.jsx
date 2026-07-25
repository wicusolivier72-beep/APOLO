import React from 'react';
import { mythBustingList } from '../../data/mythsData';
import { Zap, AlertTriangle, ShieldCheck, FileCheck, BookmarkPlus } from 'lucide-react';

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
      {/* Module Banner */}
      <div className="border border-[#2A2A2A] bg-[#121212] p-4 md:p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="mono-pill text-[#00E5FF]">[04. DATABASE MODULE]</span>
          <span className="text-xs text-[#8E8E8A]">INTERNET & VIRAL SKEPTIC MYTH REBUTTALS</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#F4F4F0] tracking-wider uppercase">
          POP-CULTURE MYTH-BUSTING
        </h2>
        <p className="text-xs text-[#8E8E8A] mt-1 max-w-3xl leading-relaxed">
          Short-form, high-impact counter-arguments against viral social media myths (Horus/Mithra copycat claims, telephone game fallacies, Nicaea canon legends, and Easter etymology).
        </p>
      </div>

      {/* Myth List */}
      <div className="space-y-6">
        {filteredMyths.map((myth) => (
          <div key={myth.id} className="blueprint-card border border-[#2A2A2A] bg-[#121212] p-5">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="mono-pill text-[#00E5FF]">{myth.category}</span>
                <span className="text-xs text-[#8E8E8A]">{myth.id}</span>
              </div>
              <span className="text-[10px] bg-[#0C0C0C] text-red-400 border border-red-500/30 px-2 py-0.5 font-bold">
                POPULAR MYTH
              </span>
            </div>

            {/* Claim vs Reality Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-4">
              {/* Claim */}
              <div className="lg:col-span-5 border border-red-500/20 bg-[#0C0C0C] p-4">
                <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>VIRAL SKEPTICAL CLAIM</span>
                </div>
                <h4 className="text-sm font-bold text-[#F4F4F0] mb-2">"{myth.claim}"</h4>
                <p className="text-xs text-[#8E8E8A] leading-relaxed">{myth.mythDetail}</p>
              </div>

              {/* Reality */}
              <div className="lg:col-span-7 border border-[#00E5FF]/30 bg-[#1A1A1A] p-4">
                <div className="flex items-center gap-1.5 text-[#00E5FF] text-xs font-bold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>HISTORICAL REALITY & PRIMARY SOURCES</span>
                </div>
                <p className="text-xs text-[#F4F4F0] leading-relaxed mb-3">{myth.historicalReality}</p>

                <div className="p-2 bg-[#0C0C0C] border border-[#2A2A2A] text-[11px] text-[#00E5FF]">
                  <span className="text-[#8E8E8A] font-bold">PRIMARY EVIDENCE: </span>
                  {myth.primaryEvidence}
                </div>
              </div>
            </div>

            {/* Fast Refutation Points */}
            <div className="p-3 bg-[#0C0C0C] border border-[#2A2A2A] text-xs">
              <div className="text-[10px] text-[#00E5FF] font-bold mb-2 uppercase">[30-SECOND CHEAT SHEET BULLETS]</div>
              <ul className="space-y-1 text-[#8E8E8A]">
                {myth.refutationPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#00E5FF] font-bold">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-[#2A2A2A] mt-4 flex items-center justify-between text-xs">
              <span className="text-[10px] text-[#8E8E8A]">MYTH-BUST CARD</span>
              {onSaveClip && (
                <button
                  onClick={() =>
                    onSaveClip({
                      title: `Myth Bust: ${myth.claim}`,
                      snippet: `Myth: "${myth.claim}" ➔ Reality: ${myth.historicalReality} Primary evidence: ${myth.primaryEvidence}`,
                      category: '[MYTH BUST]'
                    })
                  }
                  className="flex items-center gap-1 text-[#00E5FF] hover:underline text-xs font-bold"
                >
                  <BookmarkPlus className="w-3.5 h-3.5" />
                  <span>CLIP MYTH-BUST</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
