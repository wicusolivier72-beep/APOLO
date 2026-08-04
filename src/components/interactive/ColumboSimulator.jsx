import React, { useState } from 'react';
import { columboQuestions, selfRefutingStatements } from '../../data/tacticsData';
import { Sparkles } from 'lucide-react';

export default function ColumboSimulator() {
  const [activeTab, setActiveTab] = useState('columbo');
  const [selectedStatement, setSelectedStatement] = useState(selfRefutingStatements[0]);

  return (
    <div className="blueprint-card p-5 sm:p-6 mb-8 border border-[#222630] bg-[#13151A] rounded-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#222630] pb-4 mb-6">
        <div>
          <h3 className="text-base font-semibold text-[#F3F4F6]">
            Columbo Tactics & Self-Refuting Guide
          </h3>
          <p className="text-sm text-[#9CA3AF] mt-0.5">
            Practical frameworks for asking questions and neutralizing self-defeating claims.
          </p>
        </div>

        <div className="segmented-control flex items-center bg-[#0B0C0E] p-1 rounded-lg border border-[#222630] text-sm self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('columbo')}
            className={`px-3.5 py-1.5 rounded-md transition-all ${
              activeTab === 'columbo' ? 'bg-[#1D212B] text-[#E2C08D] font-medium' : 'text-[#9CA3AF] hover:text-[#F3F4F6]'
            }`}
          >
            Columbo Plan
          </button>
          <button
            onClick={() => setActiveTab('refuting')}
            className={`px-3.5 py-1.5 rounded-md transition-all ${
              activeTab === 'refuting' ? 'bg-[#1D212B] text-[#E2C08D] font-medium' : 'text-[#9CA3AF] hover:text-[#F3F4F6]'
            }`}
          >
            Self-Refuting Claims
          </button>
        </div>
      </div>

      {activeTab === 'columbo' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {columboQuestions.map((q) => (
            <div key={q.step} className="border border-[#222630] bg-[#0B0C0E] p-5 rounded-xl flex flex-col justify-between h-full text-sm">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#222630] pb-3 mb-4">
                    <span className="text-xs text-[#E2C08D] font-bold shrink-0">Step {q.step}</span>
                    <span className="text-sm text-[#F3F4F6] font-semibold text-right leading-tight ml-2">{q.title}</span>
                  </div>

                  <div className="p-4 bg-[#13151A] border border-[#222630] rounded-lg mb-4 text-sm text-[#E2C08D] font-medium text-center leading-snug">
                    "{q.questionText}"
                  </div>

                  <p className="text-sm text-[#9CA3AF] mb-4 leading-relaxed">{q.purpose}</p>
                </div>

                <div className="p-4 bg-[#13151A] border border-[#222630] rounded-lg text-sm space-y-3 mt-auto">
                  <div>
                    <div className="text-xs text-[#9CA3AF] font-medium mb-1">Skeptic Claim:</div>
                    <div className="text-[#F3F4F6] italic text-sm leading-snug">{q.exampleClaim}</div>
                  </div>
                  <div className="pt-2.5 border-t border-[#222630]">
                    <div className="text-xs text-[#E2C08D] font-semibold mb-1">Recommended Response:</div>
                    <div className="text-[#F3F4F6] font-medium text-sm leading-snug">{q.recommendedResponse}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 space-y-2">
            <div className="text-sm text-[#9CA3AF] mb-2 font-medium">Select a skeptical statement:</div>
            {selfRefutingStatements.map((item, idx) => {
              const isSelected = selectedStatement.statement === item.statement;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedStatement(item)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between text-sm ${
                    isSelected
                      ? 'border-[#E2C08D] bg-[#1D212B] text-[#F3F4F6]'
                      : 'border-[#222630] bg-[#0B0C0E] text-[#9CA3AF] hover:text-[#F3F4F6]'
                  }`}
                >
                  <span className="truncate pr-2 font-medium">"{item.statement}"</span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-6 border border-[#222630] bg-[#0B0C0E] p-5 rounded-xl flex flex-col justify-between text-sm">
            <div>
              <div className="text-xs text-[#E2C08D] font-semibold mb-3">
                Analysis & Turning Question
              </div>

              <div className="mb-4">
                <div className="text-xs text-[#9CA3AF] mb-1.5">Claim:</div>
                <div className="text-sm text-[#F3F4F6] p-3.5 bg-[#13151A] border border-[#222630] rounded-lg leading-relaxed">
                  "{selectedStatement.statement}"
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs text-[#E2C08D] mb-1.5 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#E2C08D]" />
                  <span>Reframing Question:</span>
                </div>
                <div className="text-sm font-semibold text-[#E2C08D] p-3.5 bg-[#13151A] border border-[#222630] rounded-lg leading-relaxed">
                  "{selectedStatement.refutationQuestion}"
                </div>
              </div>

              <div className="p-4 bg-[#13151A] border border-[#222630] rounded-lg text-sm text-[#9CA3AF] leading-relaxed">
                {selectedStatement.explanation}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
