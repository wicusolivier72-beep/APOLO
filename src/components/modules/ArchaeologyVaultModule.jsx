import React, { useState } from 'react';
import { archaeologyArtifacts } from '../../data/archaeologyData';
import { Calendar, MapPin, ChevronDown, ChevronUp, Bookmark } from 'lucide-react';

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
    <div className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-[#222630] pb-4">
        <span className="subtle-badge">Steles & Inscriptions</span>
        <h2 className="text-2xl font-bold text-[#F3F4F6] mt-2">
          Archaeological Vault
        </h2>
        <p className="text-sm text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
          Inscriptions, burial boxes, and public architecture confirming biblical people, dates, and administrative titles.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredArtifacts.map((art) => {
          const isExpanded = expandedCardId === art.id;

          return (
            <div key={art.id} className="blueprint-card p-5 border border-[#222630] bg-[#13151A] rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="subtle-badge">{art.category.replace(/\[|\]/g, '')}</span>
                  <span className="text-xs text-[#9CA3AF]">{art.id}</span>
                </div>

                <h3 className="text-lg font-semibold text-[#F3F4F6] mb-1">{art.title}</h3>
                <div className="text-sm text-[#E2C08D] font-medium mb-3">Ref: {art.biblicalCorroboration}</div>

                <div className="space-y-1.5 text-sm text-[#9CA3AF] mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#E2C08D]" />
                    <span>Date: <strong className="text-[#F3F4F6]">{art.date}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E2C08D]" />
                    <span>Location: <strong className="text-[#F3F4F6]">{art.location}</strong></span>
                  </div>
                </div>

                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-3">{art.summary}</p>

                {isExpanded && (
                  <div className="mt-3 p-4 bg-[#0B0C0E] border border-[#222630] rounded-xl text-sm space-y-2">
                    <p className="text-[#9CA3AF] leading-relaxed">{art.details}</p>
                    <div className="pt-2 border-t border-[#222630]">
                      <div className="text-xs text-[#E2C08D] font-semibold mb-1">Primary Inscription:</div>
                      <div className="text-[#F3F4F6] font-mono text-xs">{art.primaryInscription}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#222630] mt-3 flex items-center justify-between text-sm">
                <button
                  onClick={() => setExpandedCardId(isExpanded ? null : art.id)}
                  className="flex items-center gap-1.5 text-[#E2C08D] hover:underline font-medium"
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  <span>{isExpanded ? 'Hide Details' : 'View Inscription'}</span>
                </button>

                {onSaveClip && (
                  <button
                    onClick={() =>
                      onSaveClip({
                        title: art.title,
                        snippet: `${art.title} (${art.date}): ${art.summary} Inscription: ${art.primaryInscription}`,
                        category: 'Archaeology'
                      })
                    }
                    className="flex items-center gap-1 text-[#9CA3AF] hover:text-[#F3F4F6]"
                  >
                    <Bookmark className="w-4 h-4" />
                    <span>Save</span>
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
