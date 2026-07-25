import React, { useState } from 'react';
import { manuscriptsList } from '../../data/manuscriptsData';
import ManuscriptGapVisualizer from '../interactive/ManuscriptGapVisualizer';
import TextualVariantBreakdown from '../interactive/TextualVariantBreakdown';
import { Calendar, MapPin, BookOpen, ChevronDown, ChevronUp, BookmarkPlus } from 'lucide-react';

export default function TextualCriticismModule({ searchFilter, onSaveClip }) {
  const [expandedCardId, setExpandedCardId] = useState(null);

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
      {/* Module Header */}
      <div className="border-b border-[#27272A] pb-4">
        <span className="mono-pill">MODULE 01</span>
        <h2 className="text-xl font-bold text-[#F4F4F5] tracking-wide mt-1.5 uppercase">
          Textual Criticism & Manuscript Record
        </h2>
        <p className="text-xs text-[#71717A] mt-1 max-w-2xl leading-relaxed">
          Primary source evidence on papyri, uncial codices, variant classification, and copy fidelity across 5,800+ Greek manuscripts.
        </p>
      </div>

      {/* Interactive Visualizers */}
      <ManuscriptGapVisualizer onSaveClip={onSaveClip} />
      <TextualVariantBreakdown onSaveClip={onSaveClip} />

      {/* Manuscript Catalog */}
      <div>
        <div className="flex items-center justify-between border-b border-[#27272A] pb-2 mb-4">
          <h3 className="text-xs font-bold text-[#F4F4F5] uppercase tracking-wider">
            PRIMARY MANUSCRIPT CATALOG ({filteredMSS.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredMSS.map((mss) => {
            const isExpanded = expandedCardId === mss.id;

            return (
              <div key={mss.id} className="blueprint-card p-5 border border-[#27272A] bg-[#121215] rounded flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="mono-pill text-[10px]">{mss.category}</span>
                    <span className="text-[10px] text-[#71717A]">{mss.id}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#F4F4F5] mb-2">{mss.designation}</h4>

                  <div className="space-y-1 text-xs text-[#71717A] mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#E2C08D]" />
                      <span>Date: <strong className="text-[#F4F4F5]">{mss.date}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#E2C08D]" />
                      <span>Repository: <strong className="text-[#F4F4F5]">{mss.location}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-[#E2C08D]" />
                      <span>Contents: <strong className="text-[#F4F4F5]">{mss.contents}</strong></span>
                    </div>
                  </div>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-3">{mss.significance}</p>

                  {/* Expandable Syllogism Accordion */}
                  {isExpanded && (
                    <div className="mt-3 p-3 bg-[#09090B] border border-[#27272A] rounded text-xs space-y-1.5 animate-fadeIn">
                      <div className="text-[10px] text-[#E2C08D] font-bold">[LOGICAL SYLLOGISM]</div>
                      <div className="text-[#71717A]">P1: {mss.syllogism.p1}</div>
                      <div className="text-[#71717A]">P2: {mss.syllogism.p2}</div>
                      <div className="text-[#F4F4F5] font-semibold pt-1 border-t border-[#27272A]">
                        Conclusion: {mss.syllogism.c}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#27272A] mt-3 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setExpandedCardId(isExpanded ? null : mss.id)}
                    className="flex items-center gap-1 text-[#E2C08D] hover:underline text-xs"
                  >
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    <span>{isExpanded ? 'Hide Syllogism' : 'View Syllogism'}</span>
                  </button>

                  {onSaveClip && (
                    <button
                      onClick={() =>
                        onSaveClip({
                          title: mss.designation,
                          snippet: `${mss.designation} (${mss.date}): ${mss.significance}`,
                          category: '[MANUSCRIPT]'
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
