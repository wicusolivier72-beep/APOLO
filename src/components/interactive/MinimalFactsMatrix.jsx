import React, { useState } from 'react';
import { minimalFactsData } from '../../data/creedsJesusData';
import { Check, X, Bookmark } from 'lucide-react';

export default function MinimalFactsMatrix({ onSaveClip }) {
  const [selectedHypothesis, setSelectedHypothesis] = useState(minimalFactsData.hypotheses[4]);

  return (
    <div className="blueprint-card p-5 sm:p-6 mb-8 border border-[#222630] bg-[#13151A] rounded-xl">
      <div className="border-b border-[#222630] pb-4 mb-5">
        <h3 className="text-sm font-semibold text-[#F3F4F6]">
          The Minimal Facts Resurrection Matrix
        </h3>
        <p className="text-xs text-[#9CA3AF] mt-0.5">
          Comparing naturalistic theories against 5 facts accepted by &gt;90% of critical scholars.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-[#222630] bg-[#0B0C0E] rounded-xl mb-5 text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#222630] bg-[#13151A] text-[#9CA3AF]">
              <th className="p-3 border-r border-[#222630]">Theory</th>
              {minimalFactsData.facts.map((f) => (
                <th key={f.id} className="p-3 text-center border-r border-[#222630] w-16">
                  {f.code}
                </th>
              ))}
              <th className="p-3 text-right">Score</th>
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
                  className={`border-b border-[#222630] transition-colors cursor-pointer ${
                    isSelected ? 'bg-[#1D212B]' : 'hover:bg-[#13151A]'
                  }`}
                >
                  <td className="p-3 font-medium border-r border-[#222630] text-[#F3F4F6] flex items-center justify-between">
                    <span>{h.name}</span>
                    {isResurrection && (
                      <span className="text-[10px] bg-[#E2C08D]/10 text-[#E2C08D] border border-[#E2C08D]/30 px-1.5 py-0.5 rounded-full font-medium">
                        Best Fit
                      </span>
                    )}
                  </td>

                  {minimalFactsData.facts.map((f) => {
                    const passes = h.scores[f.id];
                    return (
                      <td key={f.id} className="p-3 text-center border-r border-[#222630]">
                        {passes ? (
                          <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-[#E2C08D]/20 text-[#E2C08D]">
                            <Check className="w-3 h-3" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-4 h-4 rounded bg-[#222630] text-[#6B7280]">
                            <X className="w-3 h-3" />
                          </span>
                        )}
                      </td>
                    );
                  })}

                  <td className="p-3 text-right font-medium">
                    {allPassed ? (
                      <span className="text-[#E2C08D]">5/5</span>
                    ) : (
                      <span className="text-[#9CA3AF]">
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

      <div className="border border-[#222630] bg-[#0B0C0E] p-4 rounded-xl text-xs">
        <div className="flex items-center justify-between border-b border-[#222630] pb-2 mb-2">
          <span className="text-xs font-semibold text-[#E2C08D]">Evaluation</span>
          <span className="font-semibold text-[#F3F4F6]">{selectedHypothesis.name}</span>
        </div>

        <p className="text-xs text-[#9CA3AF] leading-relaxed mb-3">{selectedHypothesis.critique}</p>

        {onSaveClip && (
          <button
            onClick={() =>
              onSaveClip({
                title: `Minimal Facts: ${selectedHypothesis.name}`,
                snippet: `${selectedHypothesis.name}: ${selectedHypothesis.critique}`,
                category: 'Minimal Facts'
              })
            }
            className="py-1.5 px-3 border border-[#222630] bg-[#13151A] hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#F3F4F6] text-xs rounded-lg transition-all flex items-center justify-center gap-1.5"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#E2C08D]" />
            <span>Save to Drawer</span>
          </button>
        )}
      </div>
    </div>
  );
}
