import React, { useState } from 'react';
import { textualVariantsData } from '../../data/manuscriptsData';
import { ShieldCheck, GitBranch, BookmarkPlus } from 'lucide-react';

export default function TextualVariantBreakdown({ onSaveClip }) {
  const [selectedVariant, setSelectedVariant] = useState(textualVariantsData[0]);
  const [showVariantText, setShowVariantText] = useState(false);

  return (
    <div className="blueprint-card p-5 md:p-6 mb-8 border border-[#27272A] bg-[#121215]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#27272A] pb-4 mb-6">
        <div>
          <span className="mono-pill mb-1">TEXTUAL APPARATUS TOOL</span>
          <h3 className="text-base font-bold text-[#F4F4F5] tracking-wide mt-1">
            Textual Variant Analysis & Apparatus
          </h3>
          <p className="text-xs text-[#71717A] mt-0.5">
            Transparently examine how major variants are evaluated in modern critical Greek apparatuses (NA28/UBS5).
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          {textualVariantsData.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVariant(v);
                setShowVariantText(false);
              }}
              className={`px-3 py-1.5 rounded border transition-all text-xs ${
                selectedVariant.id === v.id
                  ? 'border-[#E2C08D] bg-[#1E1E24] text-[#E2C08D] font-semibold'
                  : 'border-[#27272A] bg-[#09090B] text-[#71717A] hover:text-[#F4F4F5]'
              }`}
            >
              {v.passage.split(' ')[0]} {v.passage.split(' ')[1]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-4 font-mono">
          <div className="bg-[#09090B] border border-[#27272A] p-4 rounded">
            <div className="flex items-center justify-between border-b border-[#27272A] pb-2 mb-3">
              <span className="text-sm font-bold text-[#F4F4F5]">{selectedVariant.passage}</span>
              <span className="text-[10px] text-[#E2C08D] bg-[#121215] border border-[#27272A] px-2 py-0.5 rounded">
                NA28 APPARATUS
              </span>
            </div>

            {/* View Switch */}
            <div className="flex items-center justify-between bg-[#121215] p-2 border border-[#27272A] rounded mb-3">
              <span className="text-[11px] text-[#71717A]">TEXT DISPLAY MODE:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowVariantText(false)}
                  className={`px-2.5 py-1 text-[11px] rounded border ${
                    !showVariantText
                      ? 'border-[#E2C08D] bg-[#E2C08D] text-[#09090B] font-bold'
                      : 'border-[#27272A] text-[#71717A]'
                  }`}
                >
                  EARLIEST GREEK TEXT (NA28)
                </button>
                <button
                  onClick={() => setShowVariantText(true)}
                  className={`px-2.5 py-1 text-[11px] rounded border ${
                    showVariantText
                      ? 'border-[#3F3F46] bg-[#3F3F46] text-[#F4F4F5] font-bold'
                      : 'border-[#27272A] text-[#71717A]'
                  }`}
                >
                  LATER BYZANTINE TRADITION
                </button>
              </div>
            </div>

            <div className="p-4 bg-[#121215] border border-[#27272A] rounded min-h-[90px] flex flex-col justify-center">
              <div className="text-[10px] text-[#71717A] mb-1">READING:</div>
              <p className="text-xs text-[#E2C08D] leading-relaxed">
                {!showVariantText
                  ? selectedVariant.interactiveGreek.standard
                  : selectedVariant.interactiveGreek.addedVariant}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 border border-[#27272A] bg-[#09090B] rounded">
              <div className="text-[11px] text-[#E2C08D] font-semibold mb-2">
                EARLIEST MANUSCRIPT WITNESSES:
              </div>
              <ul className="space-y-1 text-xs text-[#A1A1AA]">
                {selectedVariant.manuscriptsMissing.map((mss, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-[#E2C08D]">▸</span>
                    <span>{mss}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 border border-[#27272A] bg-[#09090B] rounded">
              <div className="text-[11px] text-[#71717A] font-semibold mb-2">
                LATER / BYZANTINE WITNESSES:
              </div>
              <ul className="space-y-1 text-xs text-[#A1A1AA]">
                {selectedVariant.manuscriptsIncluding.map((mss, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-[#71717A]">▸</span>
                    <span>{mss}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 border border-[#27272A] bg-[#09090B] p-5 rounded font-mono flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-[#E2C08D] font-bold uppercase tracking-widest mb-2">
              [THEOLOGICAL EVALUATION]
            </div>

            <h4 className="text-xs font-bold text-[#F4F4F5] uppercase mb-1">SCHOLARLY CONSENSUS</h4>
            <p className="text-xs text-[#71717A] leading-relaxed mb-4">{selectedVariant.scholarConsensus}</p>

            <h4 className="text-xs font-bold text-[#F4F4F5] uppercase mb-1">EARLY PATRISTIC TESTIMONY</h4>
            <p className="text-xs text-[#71717A] leading-relaxed mb-4">{selectedVariant.earlyFathersNotes}</p>

            <div className="p-3 bg-[#121215] border border-[#27272A] rounded text-xs text-[#F4F4F5]">
              <div className="text-[10px] text-[#E2C08D] font-semibold mb-1">DOCTRINAL IMPACT:</div>
              <p className="text-[#A1A1AA] leading-relaxed">{selectedVariant.theologicalImpact}</p>
            </div>
          </div>

          {onSaveClip && (
            <button
              onClick={() =>
                onSaveClip({
                  title: `Variant: ${selectedVariant.passage}`,
                  snippet: `${selectedVariant.passage}: ${selectedVariant.theologicalImpact}`,
                  category: '[TEXTUAL VARIANT]'
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
    </div>
  );
}
