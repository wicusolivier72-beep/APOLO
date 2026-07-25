import React, { useState } from 'react';
import { textualVariantsData } from '../../data/manuscriptsData';
import { GitBranch, ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function TextualVariantBreakdown({ onSaveClip }) {
  const [selectedVariant, setSelectedVariant] = useState(textualVariantsData[0]);
  const [showVariantText, setShowVariantText] = useState(false);

  return (
    <div className="blueprint-card p-4 md:p-6 my-6 border border-[#2A2A2A]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#2A2A2A] pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="mono-pill text-[#00E5FF]">TEXTUAL APPARATUS TOOL</span>
            <span className="text-[10px] font-mono text-[#8E8E8A]">[APPARATUS 02]</span>
          </div>
          <h3 className="text-lg font-bold font-mono text-[#F4F4F0] mt-1 tracking-wide">
            INTERACTIVE TEXTUAL VARIANT BREAKDOWN
          </h3>
          <p className="text-xs text-[#8E8E8A] mt-0.5">
            Transparently examine how major variants are analyzed in modern Greek textual criticism.
          </p>
        </div>

        {/* Variant selector */}
        <div className="flex items-center gap-2 font-mono text-xs w-full md:w-auto">
          {textualVariantsData.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVariant(v);
                setShowVariantText(false);
              }}
              className={`px-3 py-1.5 border transition-all text-xs ${
                selectedVariant.id === v.id
                  ? 'border-[#00E5FF] bg-[#1A1A1A] text-[#00E5FF] font-bold'
                  : 'border-[#2A2A2A] bg-[#121212] text-[#8E8E8A] hover:border-[#8E8E8A]'
              }`}
            >
              {v.passage.split(' ')[0]} {v.passage.split(' ')[1]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Apparatus Display */}
        <div className="lg:col-span-8 space-y-4 font-mono">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-4">
            <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-2 mb-3">
              <span className="text-sm font-bold text-[#F4F4F0]">{selectedVariant.passage}</span>
              <span className="text-[10px] text-[#00E5FF] bg-[#0C0C0C] border border-[#2A2A2A] px-2 py-0.5">
                TRANSPARENCY ANALYSIS
              </span>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center justify-between bg-[#0C0C0C] p-2 border border-[#2A2A2A] mb-4">
              <span className="text-xs text-[#8E8E8A]">MANUSCRIPT TEXT TOGGLE:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowVariantText(false)}
                  className={`px-2.5 py-1 text-xs border ${
                    !showVariantText
                      ? 'border-[#00E5FF] bg-[#00E5FF] text-[#0C0C0C] font-bold'
                      : 'border-[#2A2A2A] text-[#8E8E8A]'
                  }`}
                >
                  EARLIEST GREEK TEXT (NA28 / SINAITICUS)
                </button>
                <button
                  onClick={() => setShowVariantText(true)}
                  className={`px-2.5 py-1 text-xs border ${
                    showVariantText
                      ? 'border-[#FF9900] bg-[#FF9900] text-[#0C0C0C] font-bold'
                      : 'border-[#2A2A2A] text-[#8E8E8A]'
                  }`}
                >
                  LATER TRADITION / INSERTION
                </button>
              </div>
            </div>

            {/* Display Box */}
            <div className="p-4 bg-[#0C0C0C] border border-[#2A2A2A] min-h-[100px] flex flex-col justify-center">
              <div className="text-[10px] text-[#8E8E8A] mb-1">GREEK MANUSCRIPT DISPLAY:</div>
              <p className="text-sm text-[#00E5FF] font-mono leading-relaxed">
                {!showVariantText
                  ? selectedVariant.interactiveGreek.standard
                  : selectedVariant.interactiveGreek.addedVariant}
              </p>
            </div>
          </div>

          {/* Manuscript Evidence Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 border border-[#2A2A2A] bg-[#121212]">
              <div className="text-[10px] text-[#00E5FF] font-bold mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>EARLIEST WITNESSES (OMIT VARIANT)</span>
              </div>
              <ul className="space-y-1 text-xs text-[#8E8E8A]">
                {selectedVariant.manuscriptsMissing.map((mss, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-[#00E5FF]">▸</span>
                    <span>{mss}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 border border-[#2A2A2A] bg-[#121212]">
              <div className="text-[10px] text-[#FF9900] font-bold mb-2 flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5" />
                <span>LATER / BYZANTINE WITNESSES</span>
              </div>
              <ul className="space-y-1 text-xs text-[#8E8E8A]">
                {selectedVariant.manuscriptsIncluding.map((mss, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-[#FF9900]">▸</span>
                    <span>{mss}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Theological Impact Panel */}
        <div className="lg:col-span-4 border border-[#2A2A2A] bg-[#121212] p-4 font-mono">
          <div className="text-[10px] text-[#00E5FF] mb-2 font-bold uppercase tracking-widest flex items-center justify-between">
            <span>[CRITICAL EVALUATION]</span>
          </div>

          <h4 className="text-xs font-bold text-[#F4F4F0] uppercase mb-2">SCHOLARLY CONSENSUS</h4>
          <p className="text-xs text-[#8E8E8A] leading-relaxed mb-4">{selectedVariant.scholarConsensus}</p>

          <h4 className="text-xs font-bold text-[#F4F4F0] uppercase mb-2">EARLY CHURCH WITNESSES</h4>
          <p className="text-xs text-[#8E8E8A] leading-relaxed mb-4">{selectedVariant.earlyFathersNotes}</p>

          <div className="p-3 bg-[#1A1A1A] border border-[#00E5FF]/40 text-xs">
            <div className="text-[10px] text-[#00E5FF] font-bold mb-1 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THEOLOGICAL IMPACT ON DOCTRINE</span>
            </div>
            <p className="text-[#F4F4F0] leading-relaxed">{selectedVariant.theologicalImpact}</p>
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
              className="mt-4 w-full py-2 border border-[#00E5FF] bg-[#00E5FF]/10 hover:bg-[#00E5FF] hover:text-[#0C0C0C] text-[#00E5FF] text-xs font-mono font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>+ CLIP TO FIELD DRAWER</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
