import React, { useState } from 'react';
import { minimalFactsData } from '../../data/creedsJesusData';
import { Check, X, BookmarkPlus } from 'lucide-react';

export default function MinimalFactsMatrix({ onSaveClip }) {
  const [selectedHypothesis, setSelectedHypothesis] = useState(minimalFactsData.hypotheses[4]);

  return (
    <div className="blueprint-card p-5 md:p-6 mb-8 border border-[#27272A] bg-[#121215]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#27272A] pb-4 mb-6">
        <div>
          <span className="mono-pill mb-1">HISTORICAL MATRIX SCHEMATIC</span>
          <h3 className="text-base font-bold text-[#F4F4F5] tracking-wide mt-1">
            The Minimal Facts Resurrection Matrix
          </h3>
          <p className="text-xs text-[#71717A] mt-0.5">
            5 facts supported by &gt;90% of critical historical scholars compared against naturalistic hypotheses.
          </p>
        </div>
      </div>

      {/* Facts Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 mb-6 font-mono text-xs">
        {minimalFactsData.facts.map((fact) => (
          <div key={fact.id} className="p-2.5 border border-[#27272A] bg-[#09090B] rounded">
            <div className="text-[10px] text-[#E2C08D] font-bold">{fact.code}</div>
            <div className="font-semibold text-[#F4F4F5] truncate mt-0.5">{fact.label}</div>
          </div>
        ))}
      </div>

      {/* Matrix Table */}
      <div className="overflow-x-auto border border-[#27272A] bg-[#09090B] font-mono rounded mb-6">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#27272A] bg-[#121215] text-[#71717A]">
              <th className="p-3 border-r border-[#27272A]">HYPOTHESIS</th>
              {minimalFactsData.facts.map((f) => (
                <th key={f.id} className="p-3 text-center border-r border-[#27272A] w-20">
                  {f.code}
                </th>
              ))}
              <th className="p-3 text-right">EXPLANATORY SCORE</th>
            </tr>
          </thead>
          <tbody>
            {minimalFactsData.hypotheses.map((h, idx) => {
              const isSelected = selectedHypothesis.name === h.name;
              const isResurrection = h.name.includes('Resurrection');
              const allPassed = Object.values(h.scores).every(Boolean);

              return (
                <tr
                  key={idx}
                  onClick={() => setSelectedHypothesis(h)}
                  className={`border-b border-[#27272A] transition-colors cursor-pointer ${
                    isSelected ? 'bg-[#1E1E24]' : 'hover:bg-[#121215]'
                  }`}
                >
                  <td className="p-3 font-semibold border-r border-[#27272A] text-[#F4F4F5] flex items-center justify-between">
                    <span>{h.name}</span>
                    {isResurrection && (
                      <span className="text-[9px] bg-[#E2C08D]/10 text-[#E2C08D] border border-[#E2C08D]/40 px-1.5 py-0.5 rounded">
                        BEST FIT
                      </span>
                    )}
                  </td>

                  {minimalFactsData.facts.map((f) => {
                    const passes = h.scores[f.id];
                    return (
                      <td key={f.id} className="p-3 text-center border-r border-[#27272A]">
                        {passes ? (
                          <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-[#E2C08D]/20 text-[#E2C08D]">
                            <Check className="w-3 h-3" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-[#27272A] text-[#71717A]">
                            <X className="w-3 h-3" />
                          </span>
                        )}
                      </td>
                    );
                  })}

                  <td className="p-3 text-right font-semibold">
                    {allPassed ? (
                      <span className="text-[#E2C08D]">5/5 (100%)</span>
                    ) : (
                      <span className="text-[#71717A]">
                        {Object.values(h.scores).filter(Boolean).length}/5
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Selected Theory Critique Box */}
      <div className="border border-[#27272A] bg-[#09090B] p-4 rounded font-mono">
        <div className="flex items-center justify-between border-b border-[#27272A] pb-2 mb-2">
          <span className="text-[10px] text-[#E2C08D] font-bold uppercase">[EXPLANATORY EVALUATION]</span>
          <span className="text-xs font-bold text-[#F4F4F5]">{selectedHypothesis.name}</span>
        </div>

        <p className="text-xs text-[#A1A1AA] leading-relaxed mb-3">{selectedHypothesis.critique}</p>

        {onSaveClip && (
          <button
            onClick={() =>
              onSaveClip({
                title: `Minimal Facts: ${selectedHypothesis.name}`,
                snippet: `${selectedHypothesis.name}: ${selectedHypothesis.critique}`,
                category: '[MINIMAL FACTS]'
              })
            }
            className="py-1.5 px-3 border border-[#27272A] bg-[#121215] hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#F4F4F5] text-xs font-mono rounded transition-all flex items-center justify-center gap-1.5"
          >
            <BookmarkPlus className="w-3.5 h-3.5 text-[#E2C08D]" />
            <span>CLIP ANALYSIS</span>
          </button>
        )}
      </div>
    </div>
  );
}
