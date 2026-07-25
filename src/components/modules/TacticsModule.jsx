import React from 'react';
import { conversationScenarios } from '../../data/tacticsData';
import ColumboSimulator from '../interactive/ColumboSimulator';
import { BookmarkPlus } from 'lucide-react';

export default function TacticsModule({ onSaveClip }) {
  return (
    <div className="space-y-8 font-mono">
      {/* Module Header */}
      <div className="border-b border-[#27272A] pb-4">
        <span className="mono-pill">MODULE 05</span>
        <h2 className="text-xl font-bold text-[#F4F4F5] tracking-wide mt-1.5 uppercase">
          Tactics & Field Guides
        </h2>
        <p className="text-xs text-[#71717A] mt-1 max-w-2xl leading-relaxed">
          Practical, non-defensive conversational frameworks for asking questions, shifting the burden of proof, exposing self-refuting statements, and steering conversations with clarity.
        </p>
      </div>

      {/* Simulator */}
      <ColumboSimulator onSaveClip={onSaveClip} />

      {/* Real Scenarios */}
      <div>
        <div className="flex items-center justify-between border-b border-[#27272A] pb-2 mb-4">
          <h3 className="text-xs font-bold text-[#F4F4F5] uppercase tracking-wider">
            CONVERSATION DIALOGUE GUIDES ({conversationScenarios.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {conversationScenarios.map((scen) => (
            <div key={scen.id} className="blueprint-card border border-[#27272A] bg-[#121215] p-5 rounded flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="mono-pill text-[10px]">[DIALOGUE SCENARIO]</span>
                  <span className="text-[10px] text-[#71717A]">{scen.id}</span>
                </div>

                <h4 className="text-base font-bold text-[#F4F4F5] mb-3">{scen.title}</h4>

                <div className="space-y-2.5 text-xs mb-3">
                  <div className="p-3 bg-[#09090B] border border-[#27272A] rounded">
                    <div className="text-[9px] text-[#71717A] font-bold uppercase mb-0.5">SKEPTIC CLAIMS:</div>
                    <p className="text-[#A1A1AA] italic">"{scen.opponentQuote}"</p>
                  </div>

                  <div className="p-3 bg-[#09090B] border border-[#27272A] rounded">
                    <div className="text-[9px] text-[#E2C08D] font-bold uppercase mb-0.5">STEP 1 (CLARIFY):</div>
                    <p className="text-[#E2C08D] font-medium">{scen.columboStep1}</p>
                  </div>

                  <div className="p-3 bg-[#09090B] border border-[#27272A] rounded">
                    <div className="text-[9px] text-[#E2C08D] font-bold uppercase mb-0.5">STEP 2 (BURDEN OF PROOF):</div>
                    <p className="text-[#E2C08D] font-medium">{scen.columboStep2}</p>
                  </div>
                </div>

                <div className="p-3 bg-[#09090B] border border-[#27272A] rounded text-xs text-[#71717A]">
                  <div className="text-[10px] text-[#F4F4F5] font-bold mb-1">TACTICAL EVIDENCE PAYLOAD:</div>
                  {scen.factPayload}
                </div>
              </div>

              <div className="pt-3 border-t border-[#27272A] mt-4 flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#71717A]">FIELD SCENARIO</span>
                {onSaveClip && (
                  <button
                    onClick={() =>
                      onSaveClip({
                        title: scen.title,
                        snippet: `Opponent: "${scen.opponentQuote}" ➔ Question: ${scen.columboStep1} Payload: ${scen.factPayload}`,
                        category: '[DIALOGUE GUIDES]'
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
