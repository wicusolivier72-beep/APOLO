import React, { useState } from 'react';
import { textualVariantsData } from '../../data/manuscriptsData';
import { Bookmark } from 'lucide-react';

export default function TextualVariantBreakdown({ onSaveClip }) {
  const [selectedVariant, setSelectedVariant] = useState(textualVariantsData[0]);
  const [showVariantText, setShowVariantText] = useState(false);

  return (
    <div className="blueprint-card p-5 sm:p-6 mb-8 border border-[#222630] bg-[#13151A] rounded-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#222630] pb-4 mb-5">
        <div>
          <h3 className="text-sm font-semibold text-[#F3F4F6]">
            Textual Variant Analysis
          </h3>
          <p className="text-xs text-[#9CA3AF] mt-0.5">
            Transparently examine how major variants are evaluated in Greek textual criticism.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          {textualVariantsData.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVariant(v);
                setShowVariantText(false);
              }}
              className={`px-3 py-1.5 rounded-lg border transition-all text-xs ${
                selectedVariant.id === v.id
                  ? 'border-[#E2C08D] bg-[#1D212B] text-[#E2C08D] font-medium'
                  : 'border-[#222630] bg-[#0B0C0E] text-[#9CA3AF] hover:text-[#F3F4F6]'
              }`}
            >
              {v.passage.split(' ')[0]} {v.passage.split(' ')[1]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#0B0C0E] border border-[#222630] p-4 rounded-xl">
            <div className="flex items-center justify-between border-b border-[#222630] pb-2.5 mb-3">
              <span className="text-sm font-semibold text-[#F3F4F6]">{selectedVariant.passage}</span>
            </div>

            {/* Toggle */}
            <div className="flex items-center justify-between bg-[#13151A] p-2 border border-[#222630] rounded-lg mb-3">
              <span className="text-xs text-[#9CA3AF]">Reading Option:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setShowVariantText(false)}
                  className={`px-2.5 py-1 text-xs rounded-md border ${
                    !showVariantText
                      ? 'border-[#E2C08D] bg-[#E2C08D] text-[#0B0C0E] font-medium'
                      : 'border-[#222630] text-[#9CA3AF]'
                  }`}
                >
                  Earliest Manuscripts (NA28)
                </button>
                <button
                  onClick={() => setShowVariantText(true)}
                  className={`px-2.5 py-1 text-xs rounded-md border ${
                    showVariantText
                      ? 'border-[#374151] bg-[#374151] text-[#F3F4F6] font-medium'
                      : 'border-[#222630] text-[#9CA3AF]'
                  }`}
                >
                  Later Addition
                </button>
              </div>
            </div>

            <div className="p-4 bg-[#13151A] border border-[#222630] rounded-lg min-h-[80px] flex flex-col justify-center">
              <p className="text-xs text-[#E2C08D] leading-relaxed font-mono">
                {!showVariantText
                  ? selectedVariant.interactiveGreek.standard
                  : selectedVariant.interactiveGreek.addedVariant}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 border border-[#222630] bg-[#0B0C0E] rounded-xl">
              <div className="text-xs text-[#E2C08D] font-medium mb-1.5">
                Earliest Manuscript Evidence:
              </div>
              <ul className="space-y-1 text-[#9CA3AF]">
                {selectedVariant.manuscriptsMissing.map((mss, i) => (
                  <li key={i}>• {mss}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 border border-[#222630] bg-[#0B0C0E] rounded-xl">
              <div className="text-xs text-[#9CA3AF] font-medium mb-1.5">
                Later Manuscripts:
              </div>
              <ul className="space-y-1 text-[#9CA3AF]">
                {selectedVariant.manuscriptsIncluding.map((mss, i) => (
                  <li key={i}>• {mss}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 border border-[#222630] bg-[#0B0C0E] p-4 sm:p-5 rounded-xl flex flex-col justify-between">
          <div>
            <div className="text-xs text-[#E2C08D] font-medium mb-2">
              Scholarship & Theology
            </div>

            <h4 className="text-xs font-semibold text-[#F3F4F6] mb-1">Scholarly Consensus</h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed mb-3">{selectedVariant.scholarConsensus}</p>

            <h4 className="text-xs font-semibold text-[#F3F4F6] mb-1">Impact on Core Doctrine</h4>
            <p className="text-xs text-[#9CA3AF] leading-relaxed p-3 bg-[#13151A] rounded-lg border border-[#222630]">
              {selectedVariant.theologicalImpact}
            </p>
          </div>

          {onSaveClip && (
            <button
              onClick={() =>
                onSaveClip({
                  title: `Variant: ${selectedVariant.passage}`,
                  snippet: `${selectedVariant.passage}: ${selectedVariant.theologicalImpact}`,
                  category: 'Variant'
                })
              }
              className="mt-4 w-full py-2 border border-[#222630] bg-[#13151A] hover:border-[#E2C08D] hover:text-[#E2C08D] text-[#F3F4F6] text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#E2C08D]" />
              <span>Save to Field Drawer</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
