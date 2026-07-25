import React, { useState } from 'react';
import { archaeologyArtifacts } from '../../data/archaeologyData';
import { Calendar, MapPin, Landmark, ChevronDown, ChevronUp, BookmarkPlus } from 'lucide-react';

export default function ArchaeologyVaultModule({ searchFilter, onSaveClip }) {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const filteredArtifacts = archaeologyArtifacts.filter((art) => {
    if (!searchFilter) return true;
    const q = searchFilter.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.biblicalCorroboration.toLowerCase().includes(q) ||
      art.summary.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8 font-mono">
      {/* Module Header */}
      <div className="border-b border-[#27272A] pb-4">
        <span className="mono-pill">MODULE 02</span>
        <h2 className="text-xl font-bold text-[#F4F4F5] tracking-wide mt-1.5 uppercase">
          The Archaeological Vault
        </h2>
        <p className="text-xs text-[#71717A] mt-1 max-w-2xl leading-relaxed">
          Primary catalog of extra-biblical inscriptions, stone steles, burial ossuaries, and public architecture directly confirming biblical figures and administrative titles.
        </p>
      </div>

      {/* Artifact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredArtifacts.map((art) => {
          const isExpanded = expandedCardId === art.id;

          return (
            <div key={art.id} className="blueprint-card p-5 border border-[#27272A] bg-[#121215] rounded flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="mono-pill text-[10px]">{art.category}</span>
                  <span className="text-[10px] text-[#71717A]">{art.id}</span>
                </div>

                <h3 className="text-base font-bold text-[#F4F4F5] mb-1">{art.title}</h3>
                <div className="text-xs text-[#E2C08D] font-semibold mb-3">Ref: {art.biblicalCorroboration}</div>

                <div className="space-y-1 text-xs text-[#71717A] mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#E2C08D]" />
                    <span>Date: <strong className="text-[#F4F4F5]">{art.date}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E2C08D]" />
                    <span>Location: <strong className="text-[#F4F4F5]">{art.location}</strong></span>
                  </div>
                </div>

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-3">{art.summary}</p>

                {/* Expandable Inscription Drawer */}
                {isExpanded && (
                  <div className="mt-3 p-3 bg-[#09090B] border border-[#27272A] rounded text-xs space-y-2 animate-fadeIn">
                    <p className="text-[#71717A] leading-relaxed">{art.details}</p>
                    <div className="pt-2 border-t border-[#27272A]">
                      <div className="text-[10px] text-[#E2C08D] font-bold uppercase mb-0.5">PRIMARY INSCRIPTION:</div>
                      <div className="text-[#F4F4F5] font-mono text-[11px]">{art.primaryInscription}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#27272A] mt-3 flex items-center justify-between text-xs">
                <button
                  onClick={() => setExpandedCardId(isExpanded ? null : art.id)}
                  className="flex items-center gap-1 text-[#E2C08D] hover:underline text-xs"
                >
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  <span>{isExpanded ? 'Hide Details' : 'View Inscription'}</span>
                </button>

                {onSaveClip && (
                  <button
                    onClick={() =>
                      onSaveClip({
                        title: art.title,
                        snippet: `${art.title} (${art.date}): ${art.summary} Inscription: ${art.primaryInscription}`,
                        category: '[ARCHAEOLOGY]'
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
  );
}
