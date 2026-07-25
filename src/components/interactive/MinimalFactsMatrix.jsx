import React, { useState } from 'react';
import { minimalFactsData } from '../../data/creedsJesusData';
import { Check, X, ShieldAlert, Award, HelpCircle } from 'lucide-react';

export default function MinimalFactsMatrix({ onSaveClip }) {
  const [selectedHypothesis, setSelectedHypothesis] = useState(minimalFactsData.hypotheses[4]); // default Resurrection

  return (
    <div className="blueprint-card p-4 md:p-6 my-6 border border-[#2A2A2A]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#2A2A2A] pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-pill text-[#00E5FF]">MINIMAL FACTS MATRIX</span>
            <span className="text-[10px] font-mono text-[#8E8E8A]">[HISTORICAL MATRIX 03]</span>
          </div>
          <h3 className="text-lg font-bold font-mono text-[#F4F4F0] mt-1 tracking-wide">
            THE 5 MINIMAL FACTS VS NATURALISTIC HYPOTHESES
          </h3>
          <p className="text-xs text-[#8E8E8A] mt-0.5">
            Facts accepted by &gt;90% of critical non-evangelical historical scholars (Lüdemann, Ehrman, Sanders).
          </p>
        </div>
      </div>

      {/* 5 Minimal Facts Legend Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 mb-6 font-mono">
        {minimalFactsData.facts.map((fact) => (
          <div key={fact.id} className="p-2 border border-[#2A2A2A] bg-[#121212] text-xs">
            <div className="text-[10px] text-[#00E5FF] font-bold">{fact.code}</div>
            <div className="font-semibold text-[#F4F4F0] truncate">{fact.label}</div>
          </div>
        ))}
      </div>

      {/* Matrix Table */}
      <div className="overflow-x-auto border border-[#2A2A2A] bg-[#0C0C0C] font-mono mb-6">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#2A2A2A] bg-[#121212] text-[#8E8E8A]">
              <th className="p-3 border-r border-[#2A2A2A]">HYPOTHESIS / THEORY</th>
              {minimalFactsData.facts.map((f) => (
                <th key={f.id} className="p-3 text-center border-r border-[#2A2A2A] w-20">
                  {f.code}
                </th>
              ))}
              <th className="p-3 text-right">EXPLANATORY POWER</th>
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
                  className={`border-b border-[#2A2A2A] transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A1A1A] border-l-4 border-l-[#00E5FF]'
                      : 'hover:bg-[#121212]'
                  }`}
                >
                  <td className="p-3 font-semibold border-r border-[#2A2A2A] text-[#F4F4F0] flex items-center justify-between">
                    <span>{h.name}</span>
                    {isResurrection && (
                      <span className="text-[9px] bg-[#00E5FF]/20 text-[#00E5FF] px-1.5 py-0.5 border border-[#00E5FF]/40">
                        BEST FIT
                      </span>
                    )}
                  </td>

                  {minimalFactsData.facts.map((f) => {
                    const passes = h.scores[f.id];
                    return (
                      <td key={f.id} className="p-3 text-center border-r border-[#2A2A2A]">
                        {passes ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981]">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 text-red-400">
                            <X className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </td>
                    );
                  })}

                  <td className="p-3 text-right font-bold">
                    {allPassed ? (
                      <span className="text-[#10B981]">100% (5/5 FACTS)</span>
                    ) : (
                      <span className="text-red-400">
                        {Object.values(h.scores).filter(Boolean).length}/5 FACTS
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Selected Theory Detail Panel */}
      <div className="border border-[#2A2A2A] bg-[#121212] p-4 font-mono">
        <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#00E5FF] font-bold uppercase">[EXPERT EVALUATION]</span>
            <span className="text-sm font-bold text-[#F4F4F0]">{selectedHypothesis.name}</span>
          </div>
          {selectedHypothesis.name.includes('Resurrection') ? (
            <span className="text-xs text-[#10B981] font-bold flex items-center gap-1">
              <Award className="w-4 h-4" /> ADEQUATE EXPLANATORY SCOPE
            </span>
          ) : (
            <span className="text-xs text-red-400 font-bold flex items-center gap-1">
              <ShieldAlert className="w-4 h-4" /> FAILS CRITICAL HISTORICAL FACTS
            </span>
          )}
        </div>

        <p className="text-xs text-[#8E8E8A] leading-relaxed mb-4">{selectedHypothesis.critique}</p>

        {onSaveClip && (
          <button
            onClick={() =>
              onSaveClip({
                title: `Minimal Facts: ${selectedHypothesis.name}`,
                snippet: `${selectedHypothesis.name}: ${selectedHypothesis.critique}`,
                category: '[MINIMAL FACTS]'
              })
            }
            className="w-full py-2 border border-[#00E5FF] bg-[#00E5FF]/10 hover:bg-[#00E5FF] hover:text-[#0C0C0C] text-[#00E5FF] text-xs font-mono font-bold transition-all flex items-center justify-center gap-2"
          >
            <span>+ CLIP MATRIX ANALYSIS TO FIELD DRAWER</span>
          </button>
        )}
      </div>
    </div>
  );
}
