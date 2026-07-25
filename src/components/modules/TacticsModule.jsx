import React from 'react';
import { conversationScenarios } from '../../data/tacticsData';
import ColumboSimulator from '../interactive/ColumboSimulator';
import { MessageSquareCode, Users, MessageCircle, ArrowRight, BookmarkPlus } from 'lucide-react';

export default function TacticsModule({ onSaveClip }) {
  return (
    <div className="space-y-8 font-mono">
      {/* Module Banner */}
      <div className="border border-[#2A2A2A] bg-[#121212] p-4 md:p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="mono-pill text-[#00E5FF]">[05. DATABASE MODULE]</span>
          <span className="text-xs text-[#8E8E8A]">TACTICS & DIALOGUE FIELD MANUAL</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#F4F4F0] tracking-wider uppercase">
          TACTICS & CONVERSATION GUIDES
        </h2>
        <p className="text-xs text-[#8E8E8A] mt-1 max-w-3xl leading-relaxed">
          Practical, non-defensive conversational frameworks for asking questions, shifting the burden of proof, exposing self-refuting statements, and steering conversations with grace and precision.
        </p>
      </div>

      {/* Feature: Interactive Columbo Simulator */}
      <ColumboSimulator onSaveClip={onSaveClip} />

      {/* Real Conversation Scenarios */}
      <div>
        <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-2 mb-4">
          <h3 className="text-sm font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
            <span className="text-[#00E5FF]">■</span> REAL CONVERSATION SCENARIOS ({conversationScenarios.length})
          </h3>
          <span className="text-xs text-[#8E8E8A]">FIELD WALKTHROUGHS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conversationScenarios.map((scen) => (
            <div key={scen.id} className="blueprint-card border border-[#2A2A2A] bg-[#121212] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-2 mb-3">
                  <span className="mono-pill text-[#00E5FF]">[CONVERSATION SCENARIO]</span>
                  <span className="text-xs text-[#8E8E8A]">{scen.id}</span>
                </div>

                <h4 className="text-base font-bold text-[#F4F4F0] mb-3">{scen.title}</h4>

                {/* Dialogue Sequence */}
                <div className="space-y-3 text-xs mb-4">
                  <div className="p-3 bg-[#0C0C0C] border border-red-500/20">
                    <div className="text-[9px] text-red-400 font-bold uppercase mb-1">OPPONENT SAYS:</div>
                    <p className="text-[#F4F4F0] italic">"{scen.opponentQuote}"</p>
                  </div>

                  <div className="p-3 bg-[#1A1A1A] border border-[#00E5FF]/30">
                    <div className="text-[9px] text-[#00E5FF] font-bold uppercase mb-1">COLUMBO STEP 1 (CLARIFY):</div>
                    <p className="text-[#00E5FF]">{scen.columboStep1}</p>
                  </div>

                  <div className="p-3 bg-[#1A1A1A] border border-[#00E5FF]/30">
                    <div className="text-[9px] text-[#00E5FF] font-bold uppercase mb-1">COLUMBO STEP 2 (BURDEN OF PROOF):</div>
                    <p className="text-[#00E5FF]">{scen.columboStep2}</p>
                  </div>
                </div>

                <div className="p-3 bg-[#0C0C0C] border border-[#2A2A2A] text-xs">
                  <div className="text-[10px] text-[#F4F4F0] font-bold mb-1">[TACTICAL FACT PAYLOAD]</div>
                  <p className="text-[#8E8E8A] leading-relaxed">{scen.factPayload}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2A2A2A] mt-4 flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#8E8E8A]">FIELD GUIDE SCENARIO</span>
                {onSaveClip && (
                  <button
                    onClick={() =>
                      onSaveClip({
                        title: scen.title,
                        snippet: `Opponent: "${scen.opponentQuote}" ➔ Question: ${scen.columboStep1} Payload: ${scen.factPayload}`,
                        category: '[DIALOGUE GUIDES]'
                      })
                    }
                    className="flex items-center gap-1 text-[#00E5FF] hover:underline text-xs font-bold"
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" />
                    <span>CLIP SCENARIO</span>
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
