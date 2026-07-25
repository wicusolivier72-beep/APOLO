import React, { useState } from 'react';
import { columboQuestions, selfRefutingStatements } from '../../data/tacticsData';
import { BookmarkPlus, Zap } from 'lucide-react';

export default function ColumboSimulator({ onSaveClip }) {
  const [activeTab, setActiveTab] = useState('columbo');
  const [selectedStatement, setSelectedStatement] = useState(selfRefutingStatements[0]);

  return (
    <div className="blueprint-card p-5 md:p-6 mb-8 border border-[#27272A] bg-[#121215]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#27272A] pb-4 mb-6">
        <div>
          <span className="mono-pill mb-1">DIALOGUE FIELD TRAINER</span>
          <h3 className="text-base font-bold text-[#F4F4F5] tracking-wide mt-1">
            Columbo Tactics & Self-Refuting Cheat Sheet
          </h3>
          <p className="text-xs text-[#71717A] mt-0.5">
            Practical frameworks for asking questions, shifting the burden of proof, and neutralizing self-defeating claims.
          </p>
        </div>

        <div className="flex items-center border border-[#27272A] bg-[#09090B] p-1 rounded font-mono text-xs self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('columbo')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'columbo' ? 'bg-[#1E1E24] text-[#E2C08D] font-bold' : 'text-[#71717A] hover:text-[#F4F4F5]'
            }`}
          >
            COLUMBO PLAN
          </button>
          <button
            onClick={() => setActiveTab('refuting')}
            className={`px-3 py-1 rounded transition-colors ${
              activeTab === 'refuting' ? 'bg-[#1E1E24] text-[#E2C08D] font-bold' : 'text-[#71717A] hover:text-[#F4F4F5]'
            }`}
          >
            SELF-REFUTING CHEAT SHEET
          </button>
        </div>
      </div>

      {activeTab === 'columbo' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
          {columboQuestions.map((q) => (
            <div key={q.step} className="border border-[#27272A] bg-[#09090B] p-4 rounded flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#27272A] pb-2 mb-3">
                  <span className="text-[10px] text-[#E2C08D] font-bold">STEP {q.step}</span>
                  <span className="text-xs text-[#F4F4F5] font-bold">{q.title}</span>
                </div>

                <div className="p-3 bg-[#121215] border border-[#27272A] rounded mb-3 text-xs text-[#E2C08D] font-semibold">
                  "{q.questionText}"
                </div>

                <p className="text-xs text-[#71717A] mb-3 leading-relaxed">{q.purpose}</p>

                <div className="p-2.5 bg-[#121215] border border-[#27272A] rounded text-xs space-y-1">
                  <div className="text-[9px] text-[#71717A] uppercase">EX. SKEPTIC CLAIM:</div>
                  <div className="text-[#A1A1AA] italic">{q.exampleClaim}</div>
                  <div className="text-[9px] text-[#E2C08D] uppercase mt-2">RECOMMENDED QUESTION:</div>
                  <div className="text-[#F4F4F5] font-semibold">{q.recommendedResponse}</div>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-[#27272A] text-[10px] text-[#71717A]">
                <span className="text-[#E2C08D]">TIP: </span>
                {q.tacticalTip}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono">
          <div className="lg:col-span-6 space-y-2">
            <div className="text-[10px] text-[#71717A] uppercase mb-2">SELECT SKEPTICAL CLAIM:</div>
            {selfRefutingStatements.map((item, idx) => {
              const isSelected = selectedStatement.statement === item.statement;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedStatement(item)}
                  className={`w-full text-left p-3 rounded border transition-all flex items-center justify-between text-xs ${
                    isSelected
                      ? 'border-[#E2C08D] bg-[#1E1E24] text-[#F4F4F5]'
                      : 'border-[#27272A] bg-[#09090B] text-[#71717A] hover:text-[#F4F4F5]'
                  }`}
                >
                  <span className="truncate pr-2 font-medium">"{item.statement}"</span>
                  <span className="text-[10px] text-[#E2C08D] whitespace-nowrap">{item.category}</span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-6 border border-[#27272A] bg-[#09090B] p-5 rounded font-mono flex flex-col justify-between">
            <div>
              <div className="text-[10px] text-[#E2C08D] font-bold mb-2 uppercase flex items-center justify-between">
                <span>[SELF-REFUTING ANALYSIS]</span>
                <span>{selectedStatement.category}</span>
              </div>

              <div className="mb-3">
                <div className="text-[10px] text-[#71717A] uppercase mb-1">Target Statement:</div>
                <div className="text-xs font-semibold text-[#A1A1AA] p-2.5 bg-[#121215] border border-[#27272A] rounded">
                  "{selectedStatement.statement}"
                </div>
              </div>

              <div className="mb-3">
                <div className="text-[10px] text-[#E2C08D] uppercase mb-1 flex items-center gap-1 font-bold">
                  <Zap className="w-3 h-3 text-[#E2C08D]" />
                  <span>Reframing Question:</span>
                </div>
                <div className="text-xs font-bold text-[#E2C08D] p-2.5 bg-[#121215] border border-[#27272A] rounded">
                  "{selectedStatement.refutationQuestion}"
                </div>
              </div>

              <div className="p-3 bg-[#121215] border border-[#27272A] rounded text-xs text-[#71717A] leading-relaxed">
                <div className="text-[10px] text-[#F4F4F5] font-bold mb-1">LOGICAL COLLAPSE:</div>
                {selectedStatement.explanation}
              </div>
            </div>

            {onSaveClip && (
              <button
                onClick={() =>
                  onSaveClip({
                    title: `Self-Refuting: "${selectedStatement.statement}"`,
                    snippet: `Claim: "${selectedStatement.statement}" ➔ Question: "${selectedStatement.refutationQuestion}"`,
                    category: '[TACTICS]'
                  })
                }
                className="mt-4 w-full py-2 border border-[#27272A] bg-[#121215] hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#F4F4F5] text-xs font-mono rounded transition-all flex items-center justify-center gap-1.5"
              >
                <BookmarkPlus className="w-3.5 h-3.5 text-[#E2C08D]" />
                <span>CLIP TO FIELD DRAWER</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
