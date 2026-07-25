import React, { useState } from 'react';
import { columboQuestions, selfRefutingStatements } from '../../data/tacticsData';
import { Bookmark, Sparkles } from 'lucide-react';

export default function ColumboSimulator({ onSaveClip }) {
  const [activeTab, setActiveTab] = useState('columbo');
  const [selectedStatement, setSelectedStatement] = useState(selfRefutingStatements[0]);

  return (
    <div className="blueprint-card p-5 sm:p-6 mb-8 border border-[#222630] bg-[#13151A] rounded-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#222630] pb-4 mb-5">
        <div>
          <h3 className="text-base font-semibold text-[#F3F4F6]">
            Columbo Tactics & Self-Refuting Guide
          </h3>
          <p className="text-sm text-[#9CA3AF] mt-0.5">
            Practical frameworks for asking questions and neutralizing self-defeating claims.
          </p>
        </div>

        <div className="flex items-center bg-[#0B0C0E] p-1 rounded-lg border border-[#222630] text-sm self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('columbo')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'columbo' ? 'bg-[#1D212B] text-[#E2C08D] font-medium' : 'text-[#9CA3AF] hover:text-[#F3F4F6]'
            }`}
          >
            Columbo Plan
          </button>
          <button
            onClick={() => setActiveTab('refuting')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'refuting' ? 'bg-[#1D212B] text-[#E2C08D] font-medium' : 'text-[#9CA3AF] hover:text-[#F3F4F6]'
            }`}
          >
            Self-Refuting Claims
          </button>
        </div>
      </div>

      {activeTab === 'columbo' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {columboQuestions.map((q) => (
            <div key={q.step} className="border border-[#222630] bg-[#0B0C0E] p-4.5 rounded-xl flex flex-col justify-between text-sm">
              <div>
                <div className="flex items-center justify-between border-b border-[#222630] pb-2 mb-3">
                  <span className="text-xs text-[#E2C08D] font-semibold">Step {q.step}</span>
                  <span className="text-sm text-[#F3F4F6] font-semibold">{q.title}</span>
                </div>

                <div className="p-3.5 bg-[#13151A] border border-[#222630] rounded-lg mb-3 text-sm text-[#E2C08D] font-medium">
                  "{q.questionText}"
                </div>

                <p className="text-sm text-[#9CA3AF] mb-3 leading-relaxed">{q.purpose}</p>

                <div className="p-3 bg-[#13151A] border border-[#222630] rounded-lg text-xs space-y-1">
                  <div className="text-xs text-[#9CA3AF]">Skeptic Claim:</div>
                  <div className="text-[#F3F4F6] italic text-xs">{q.exampleClaim}</div>
                  <div className="text-xs text-[#E2C08D] mt-2">Recommended Response:</div>
                  <div className="text-[#F3F4F6] font-medium text-xs">{q.recommendedResponse}</div>
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

              <div className="mb-3">
                <div className="text-xs text-[#9CA3AF] mb-1">Claim:</div>
                <div className="text-sm text-[#F3F4F6] p-3 bg-[#13151A] border border-[#222630] rounded-lg">
                  "{selectedStatement.statement}"
                </div>
              </div>

              <div className="mb-3">
                <div className="text-xs text-[#E2C08D] mb-1 font-semibold flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-[#E2C08D]" />
                  <span>Reframing Question:</span>
                </div>
                <div className="text-sm font-semibold text-[#E2C08D] p-3 bg-[#13151A] border border-[#222630] rounded-lg">
                  "{selectedStatement.refutationQuestion}"
                </div>
              </div>

              <div className="p-3.5 bg-[#13151A] border border-[#222630] rounded-lg text-sm text-[#9CA3AF] leading-relaxed">
                {selectedStatement.explanation}
              </div>
            </div>

            {onSaveClip && (
              <button
                onClick={() =>
                  onSaveClip({
                    title: `Self-Refuting: "${selectedStatement.statement}"`,
                    snippet: `Claim: "${selectedStatement.statement}" ➔ Question: "${selectedStatement.refutationQuestion}"`,
                    category: 'Tactics'
                  })
                }
                className="mt-4 w-full py-2.5 border border-[#222630] bg-[#13151A] hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#F3F4F6] text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Bookmark className="w-4 h-4 text-[#E2C08D]" />
                <span>Save to Field Drawer</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
