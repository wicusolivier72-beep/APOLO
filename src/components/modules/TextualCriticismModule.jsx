import React from 'react';
import { manuscriptsList } from '../../data/manuscriptsData';
import ManuscriptGapVisualizer from '../interactive/ManuscriptGapVisualizer';
import TextualVariantBreakdown from '../interactive/TextualVariantBreakdown';
import { FileText, Calendar, MapPin, BookOpen, ExternalLink, BookmarkPlus } from 'lucide-react';

export default function TextualCriticismModule({ searchFilter, onSaveClip }) {
  const filteredMSS = manuscriptsList.filter((item) => {
    if (!searchFilter) return true;
    const q = searchFilter.toLowerCase();
    return (
      item.designation.toLowerCase().includes(q) ||
      item.contents.toLowerCase().includes(q) ||
      item.significance.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8 font-mono">
      {/* Module Banner */}
      <div className="border border-[#2A2A2A] bg-[#121212] p-4 md:p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="mono-pill text-[#00E5FF]">[01. DATABASE MODULE]</span>
          <span className="text-xs text-[#8E8E8A]">MANUSCRIPT PRESERVATION & TEXTUAL CRITICISM</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#F4F4F0] tracking-wider uppercase">
          TEXTUAL CRITICISM & MANUSCRIPTS
        </h2>
        <p className="text-xs text-[#8E8E8A] mt-1 max-w-3xl leading-relaxed">
          Primary source evidence on papyri, uncial codices, variant classification, and copy fidelity across 5,800+ Greek manuscripts.
        </p>
      </div>

      {/* Interactive Feature 1: Gap Visualizer */}
      <ManuscriptGapVisualizer onSaveClip={onSaveClip} />

      {/* Interactive Feature 2: Variant Breakdown Apparatus */}
      <TextualVariantBreakdown onSaveClip={onSaveClip} />

      {/* Card Index: Primary Papyri & Codices */}
      <div>
        <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-2 mb-4">
          <h3 className="text-sm font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
            <span className="text-[#00E5FF]">■</span> PRIMARY MANUSCRIPT CATALOG ({filteredMSS.length})
          </h3>
          <span className="text-xs text-[#8E8E8A]">1PX SCHEMATIC CARDS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMSS.map((mss) => (
            <div key={mss.id} className="blueprint-card p-5 border border-[#2A2A2A] bg-[#121212] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-2 mb-3">
                  <span className="mono-pill text-[#00E5FF]">{mss.category}</span>
                  <span className="text-xs text-[#8E8E8A]">{mss.id}</span>
                </div>

                <h4 className="text-base font-bold text-[#F4F4F0] mb-2">{mss.designation}</h4>

                <div className="space-y-1 text-xs text-[#8E8E8A] mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>Estimated Date: <strong className="text-[#F4F4F0]">{mss.date}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>Repository: <strong className="text-[#F4F4F0]">{mss.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>Contents: <strong className="text-[#F4F4F0]">{mss.contents}</strong></span>
                  </div>
                </div>

                <div className="p-3 bg-[#0C0C0C] border border-[#2A2A2A] text-xs text-[#8E8E8A] mb-4">
                  <div className="text-[10px] text-[#00E5FF] font-bold mb-1">[HISTORICAL SIGNIFICANCE]</div>
                  <p className="leading-relaxed">{mss.significance}</p>
                </div>

                {/* Syllogism Box */}
                <div className="p-3 bg-[#1A1A1A] border-l-2 border-l-[#00E5FF] text-xs space-y-1 mb-4">
                  <div className="text-[10px] text-[#00E5FF] font-bold">[LOGICAL SYLLOGISM]</div>
                  <div className="text-[#8E8E8A]">P1: {mss.syllogism.p1}</div>
                  <div className="text-[#8E8E8A]">P2: {mss.syllogism.p2}</div>
                  <div className="text-[#F4F4F0] font-bold">Conclusion: {mss.syllogism.c}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2A2A2A] flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#8E8E8A]">MSS CATALOG ENTRY</span>
                {onSaveClip && (
                  <button
                    onClick={() =>
                      onSaveClip({
                        title: mss.designation,
                        snippet: `${mss.designation} (${mss.date}): ${mss.significance}`,
                        category: '[MANUSCRIPT]'
                      })
                    }
                    className="flex items-center gap-1 text-[#00E5FF] hover:underline text-xs"
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" />
                    <span>CLIP ENTRY</span>
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
