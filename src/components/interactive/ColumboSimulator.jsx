import React, { useState } from 'react';
import { columboQuestions, selfRefutingStatements } from '../../data/tacticsData';
import { HelpCircle, MessageSquare, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function ColumboSimulator({ onSaveClip }) {
  const [activeTab, setActiveTab] = useState('columbo'); // 'columbo' or 'refuting'
  const [selectedStatement, setSelectedStatement] = useState(selfRefutingStatements[0]);

  return (
    <div className="blueprint-card p-4 md:p-6 my-6 border border-[#2A2A2A]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#2A2A2A] pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-pill text-[#00E5FF]">TACTICAL TRAINER</span>
            <span className="text-[10px] font-mono text-[#8E8E8A]">[FIELD TACTICS 05]</span>
          </div>
          <h3 className="text-lg font-bold font-mono text-[#F4F4F0] mt-1 tracking-wide">
            COLUMBO PLAN & SELF-REFUTING STATEMENTS SIMULATOR
          </h3>
          <p className="text-xs text-[#8E8E8A] mt-0.5">
            Practical frameworks for asking questions, shifting the burden of proof, and neutralizing self-defeating arguments.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center border border-[#2A2A2A] bg-[#1A1A1A] p-1 font-mono text-xs">
          <button
            onClick={() => setActiveTab('columbo')}
            className={`px-3 py-1 font-semibold transition-colors ${
              activeTab === 'columbo' ? 'bg-[#00E5FF] text-[#0C0C0C]' : 'text-[#8E8E8A] hover:text-[#F4F4F0]'
            }`}
          >
            THE 3 COLUMBO QUESTIONS
          </button>
          <button
            onClick={() => setActiveTab('refuting')}
            className={`px-3 py-1 font-semibold transition-colors ${
              activeTab === 'refuting' ? 'bg-[#00E5FF] text-[#0C0C0C]' : 'text-[#8E8E8A] hover:text-[#F4F4F0]'
            }`}
          >
            SELF-REFUTING CHEAT SHEET
          </button>
        </div>
      </div>

      {activeTab === 'columbo' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
          {columboQuestions.map((q) => (
            <div key={q.step} className="border border-[#2A2A2A] bg-[#121212] p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-2 mb-3">
                  <span className="text-[10px] text-[#00E5FF] font-bold">STEP {q.step}</span>
                  <span className="text-xs text-[#F4F4F0] font-bold">{q.title}</span>
                </div>

                <div className="p-3 bg-[#1A1A1A] border border-[#00E5FF]/30 mb-3 text-xs text-[#00E5FF] font-bold">
                  "{q.questionText}"
                </div>

                <p className="text-xs text-[#8E8E8A] mb-3 leading-relaxed">{q.purpose}</p>

                <div className="p-2.5 bg-[#0C0C0C] border border-[#2A2A2A] text-[11px]">
                  <div className="text-[9px] text-[#8E8E8A] uppercase mb-1">SKEPTIC CLAIM:</div>
                  <div className="text-red-400 italic mb-2">{q.exampleClaim}</div>
                  <div className="text-[9px] text-[#00E5FF] uppercase mb-1">RECOMMENDED QUESTION:</div>
                  <div className="text-[#F4F4F0] font-semibold">{q.recommendedResponse}</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#2A2A2A] text-[10px] text-[#8E8E8A]">
                <span className="text-[#00E5FF] font-bold">TACTICAL TIP: </span>
                {q.tacticalTip}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono">
          {/* Statement selector list */}
          <div className="lg:col-span-6 space-y-2">
            <div className="text-[10px] text-[#8E8E8A] uppercase tracking-wider mb-2">
              SELECT COMMON SKEPTICAL CLAIM TO REFRAME:
            </div>
            {selfRefutingStatements.map((item, idx) => {
              const isSelected = selectedStatement.statement === item.statement;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedStatement(item)}
                  className={`w-full text-left p-3 border transition-all flex items-center justify-between text-xs ${
                    isSelected
                      ? 'border-[#00E5FF] bg-[#1A1A1A] text-[#F4F4F0]'
                      : 'border-[#2A2A2A] bg-[#121212] text-[#8E8E8A] hover:border-[#8E8E8A]'
                  }`}
                >
                  <span className="truncate pr-2 font-medium">"{item.statement}"</span>
                  <span className="text-[10px] text-[#00E5FF] border border-[#2A2A2A] px-1.5 py-0.5 whitespace-nowrap">
                    {item.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Solution card */}
          <div className="lg:col-span-6 border border-[#2A2A2A] bg-[#121212] p-5">
            <div className="text-[10px] text-[#00E5FF] font-bold mb-2 uppercase tracking-widest flex items-center justify-between">
              <span>[SELF-REFUTING ANALYSIS]</span>
              <span>{selectedStatement.category}</span>
            </div>

            <div className="mb-4">
              <div className="text-[10px] text-[#8E8E8A] uppercase mb-1">Target Statement:</div>
              <div className="text-sm font-bold text-red-400 p-2.5 bg-[#0C0C0C] border border-red-500/20">
                "{selectedStatement.statement}"
              </div>
            </div>

            <div className="mb-4">
              <div className="text-[10px] text-[#00E5FF] font-bold uppercase mb-1 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                <span>Columbo Turning Question:</span>
              </div>
              <div className="text-sm font-bold text-[#00E5FF] p-2.5 bg-[#0C0C0C] border border-[#00E5FF]/30">
                "{selectedStatement.refutationQuestion}"
              </div>
            </div>

            <div className="p-3 bg-[#1A1A1A] border border-[#2A2A2A] text-xs text-[#8E8E8A]">
              <div className="text-[10px] text-[#F4F4F0] font-bold mb-1">[WHY IT IS SELF-DEFEATING]</div>
              <p className="leading-relaxed">{selectedStatement.explanation}</p>
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
                className="mt-4 w-full py-2 border border-[#00E5FF] bg-[#00E5FF]/10 hover:bg-[#00E5FF] hover:text-[#0C0C0C] text-[#00E5FF] text-xs font-mono font-bold transition-all flex items-center justify-center gap-2"
              >
                <span>+ CLIP TO FIELD DRAWER</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
