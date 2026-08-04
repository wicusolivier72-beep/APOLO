import React, { useState } from 'react';
import { minimalFactsData } from '../../data/creedsJesusData';
import { Check, X } from 'lucide-react';

export default function MinimalFactsMatrix() {
  const [selectedHypothesis, setSelectedHypothesis] = useState(minimalFactsData.hypotheses[4]);

  return (
    <div className="blueprint-card p-5 sm:p-6 mb-8 border border-[#222630] bg-[#13151A] rounded-xl">
      <div className="border-b border-[#222630] pb-4 mb-5">
        <h3 className="text-base font-semibold text-[#F3F4F6]">
          The Minimal Facts Resurrection Matrix
        </h3>
        <p className="text-sm text-[#9CA3AF] mt-0.5">
          Comparing naturalistic theories against 5 facts accepted by &gt;90% of critical scholars.
        </p>
      </div>

      {/* Facts Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5 mb-5 font-sans text-xs">
        {minimalFactsData.facts.map((fact) => (
          <div key={fact.id} className="p-3 border border-[#222630] bg-[#0B0C0E] rounded-lg">
            <div className="text-xs text-[#E2C08D] font-bold">{fact.code}</div>
            <div className="font-medium text-[#F3F4F6] truncate mt-0.5">{fact.label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="matrix-table overflow-x-auto border border-[#222630] bg-[#0B0C0E] rounded-xl mb-5 text-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#222630] bg-[#13151A] text-[#9CA3AF] text-xs uppercase font-medium">
              <th className="p-3.5 border-r border-[#222630]">Theory</th>
              {minimalFactsData.facts.map((f) => (
                <th key={f.id} className="p-3.5 text-center border-r border-[#222630] w-20">
                  {f.code}
                </th>
              ))}
              <th className="p-3.5 text-right">Score</th>
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
                  className={`border-b border-[#222630] transition-colors cursor-pointer text-sm ${
                    isSelected ? 'bg-[#1D212B]' : 'hover:bg-[#13151A]'
                  }`}
                >
                  <td className="p-3.5 font-medium border-r border-[#222630] text-[#F3F4F6] flex items-center justify-between">
                    <span>{h.name}</span>
                    {isResurrection && (
                      <span className="text-xs bg-[#E2C08D]/15 text-[#E2C08D] border border-[#E2C08D]/30 px-2 py-0.5 rounded-full font-medium">
                        Best Fit
                      </span>
                    )}
                  </td>

                  {minimalFactsData.facts.map((f) => {
                    const passes = h.scores[f.id];
                    return (
                      <td key={f.id} className="p-3.5 text-center border-r border-[#222630]">
                        {passes ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[#E2C08D]/20 text-[#E2C08D]">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[#222630] text-[#9CA3AF]">
                            <X className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </td>
                    );
                  })}

                  <td className="p-3.5 text-right font-medium">
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

      <div className="border border-[#222630] bg-[#0B0C0E] p-4 sm:p-5 rounded-xl text-sm">
        <div className="flex items-center justify-between border-b border-[#222630] pb-2.5 mb-2.5">
          <span className="text-xs font-semibold text-[#E2C08D]">Evaluation</span>
          <span className="font-semibold text-[#F3F4F6] text-sm">{selectedHypothesis.name}</span>
        </div>

        <p className="text-sm text-[#9CA3AF] leading-relaxed">{selectedHypothesis.critique}</p>
      </div>
    </div>
  );
}
