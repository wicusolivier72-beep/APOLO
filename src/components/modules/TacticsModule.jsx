import React from 'react';
import { conversationScenarios } from '../../data/tacticsData';
import ColumboSimulator from '../interactive/ColumboSimulator';
import { Bookmark } from 'lucide-react';

export default function TacticsModule({ onSaveClip }) {
  return (
    <div className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-[#222630] pb-4">
        <span className="subtle-badge">Conversational Strategy</span>
        <h2 className="text-xl font-semibold text-[#F3F4F6] mt-2">
          Tactics & Field Guides
        </h2>
        <p className="text-xs text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
          Practical, non-defensive frameworks for asking questions, shifting the burden of proof, and clarifying points.
        </p>
      </div>

      <ColumboSimulator onSaveClip={onSaveClip} />

      {/* Scenarios */}
      <div>
        <h3 className="text-xs font-semibold text-[#F3F4F6] uppercase tracking-wider mb-4">
          Dialogue Guides ({conversationScenarios.length})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {conversationScenarios.map((scen) => (
            <div key={scen.id} className="blueprint-card border border-[#222630] bg-[#13151A] p-5 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="subtle-badge">Dialogue</span>
                  <span className="text-xs text-[#6B7280]">{scen.id}</span>
                </div>

                <h4 className="text-base font-semibold text-[#F3F4F6] mb-3">{scen.title}</h4>

                <div className="space-y-2 mb-3">
                  <div className="p-3 bg-[#0B0C0E] border border-[#222630] rounded-lg">
                    <div className="text-[11px] text-[#9CA3AF] font-medium mb-0.5">Skeptic Claims:</div>
                    <p className="text-[#F3F4F6] italic">"{scen.opponentQuote}"</p>
                  </div>

                  <div className="p-3 bg-[#0B0C0E] border border-[#222630] rounded-lg">
                    <div className="text-[11px] text-[#E2C08D] font-medium mb-0.5">Step 1 (Clarify):</div>
                    <p className="text-[#E2C08D]">{scen.columboStep1}</p>
                  </div>

                  <div className="p-3 bg-[#0B0C0E] border border-[#222630] rounded-lg">
                    <div className="text-[11px] text-[#E2C08D] font-medium mb-0.5">Step 2 (Burden of Proof):</div>
                    <p className="text-[#E2C08D]">{scen.columboStep2}</p>
                  </div>
                </div>

                <div className="p-3 bg-[#0B0C0E] border border-[#222630] rounded-lg text-xs text-[#9CA3AF]">
                  <div className="text-xs text-[#F3F4F6] font-medium mb-1">Evidence Payload:</div>
                  {scen.factPayload}
                </div>
              </div>

              <div className="pt-3 border-t border-[#222630] mt-3 flex items-center justify-between text-xs">
                <span className="text-xs text-[#6B7280]">Field Guide</span>
                {onSaveClip && (
                  <button
                    onClick={() =>
                      onSaveClip({
                        title: scen.title,
                        snippet: `Opponent: "${scen.opponentQuote}" ➔ Question: ${scen.columboStep1} Payload: ${scen.factPayload}`,
                        category: 'Tactics'
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
