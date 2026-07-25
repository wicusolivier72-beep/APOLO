import React, { useState } from 'react';
import { manuscriptsList } from '../../data/manuscriptsData';
import ManuscriptGapVisualizer from '../interactive/ManuscriptGapVisualizer';
import TextualVariantBreakdown from '../interactive/TextualVariantBreakdown';
import { Calendar, MapPin, ChevronDown, ChevronUp, Bookmark } from 'lucide-react';

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
    <div className="space-y-8">
      {/* Module Title */}
      <div className="border-b border-[#222630] pb-4">
        <span className="subtle-badge">Manuscript Preservation & Variants</span>
        <h2 className="text-xl font-semibold text-[#F3F4F6] mt-2">
          Textual Criticism & Manuscripts
        </h2>
        <p className="text-xs text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
          Primary evidence on papyri, uncial codices, variant classification, and manuscript transmission.
        </p>
      </div>

      {/* Visualizers */}
      <ManuscriptGapVisualizer onSaveClip={onSaveClip} />
      <TextualVariantBreakdown onSaveClip={onSaveClip} />

      {/* Catalog */}
      <div>
        <h3 className="text-xs font-semibold text-[#F3F4F6] uppercase tracking-wider mb-4">
          Manuscript Catalog ({filteredMSS.length})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMSS.map((mss) => {
            const isExpanded = expandedCardId === mss.id;

            return (
              <div key={mss.id} className="blueprint-card p-5 border border-[#222630] bg-[#13151A] rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="subtle-badge">{mss.category.replace(/\[|\]/g, '')}</span>
                    <span className="text-xs text-[#6B7280]">{mss.id}</span>
                  </div>

                  <h4 className="text-base font-semibold text-[#F3F4F6] mb-2">{mss.designation}</h4>

                  <div className="space-y-1 text-xs text-[#9CA3AF] mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#E2C08D]" />
                      <span>Date: <strong className="text-[#F3F4F6]">{mss.date}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#E2C08D]" />
                      <span>Location: <strong className="text-[#F3F4F6]">{mss.location}</strong></span>
                    </div>
                  </div>

                  <p className="text-xs text-[#9CA3AF] leading-relaxed mb-3">{mss.significance}</p>

                  {isExpanded && (
                    <div className="mt-3 p-3 bg-[#0B0C0E] border border-[#222630] rounded-lg text-xs space-y-1.5">
                      <div className="text-xs text-[#E2C08D] font-medium">Logical Syllogism</div>
                      <div className="text-[#9CA3AF]">P1: {mss.syllogism.p1}</div>
                      <div className="text-[#9CA3AF]">P2: {mss.syllogism.p2}</div>
                      <div className="text-[#F3F4F6] font-medium pt-1 border-t border-[#222630]">
                        Conclusion: {mss.syllogism.c}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#222630] mt-3 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setExpandedCardId(isExpanded ? null : mss.id)}
                    className="flex items-center gap-1 text-[#E2C08D] hover:underline font-medium"
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
                          category: 'Manuscript'
                        })
                      }
                      className="flex items-center gap-1 text-[#9CA3AF] hover:text-[#F3F4F6]"
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>Save</span>
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
