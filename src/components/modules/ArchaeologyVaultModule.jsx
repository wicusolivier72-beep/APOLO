import React from 'react';
import { archaeologyArtifacts } from '../../data/archaeologyData';
import { Landmark, Calendar, MapPin, FileCheck, BookmarkPlus } from 'lucide-react';

export default function ArchaeologyVaultModule({ searchFilter, onSaveClip }) {
  const filteredArtifacts = archaeologyArtifacts.filter((art) => {
    if (!searchFilter) return true;
    const q = searchFilter.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.biblicalCorroboration.toLowerCase().includes(q) ||
      art.summary.toLowerCase().includes(q) ||
      art.details.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8 font-mono">
      {/* Module Banner */}
      <div className="border border-[#2A2A2A] bg-[#121212] p-4 md:p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="mono-pill text-[#00E5FF]">[02. DATABASE MODULE]</span>
          <span className="text-xs text-[#8E8E8A]">PRIMARY ARTIFACT CATALOG & INSCRIPTIONS</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#F4F4F0] tracking-wider uppercase">
          THE ARCHAEOLOGICAL VAULT
        </h2>
        <p className="text-xs text-[#8E8E8A] mt-1 max-w-3xl leading-relaxed">
          Searchable catalog of extra-biblical inscriptions, stone steles, burial ossuaries, and public architecture directly confirming biblical figures, dates, and administrative titles.
        </p>
      </div>

      {/* Artifact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtifacts.map((art) => (
          <div key={art.id} className="blueprint-card border border-[#2A2A2A] bg-[#121212] flex flex-col justify-between overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-[#2A2A2A]">
              <div className="flex items-center justify-between mb-2">
                <span className="mono-pill text-[#00E5FF]">{art.category}</span>
                <span className="text-[10px] text-[#8E8E8A]">{art.id}</span>
              </div>
              <h3 className="text-lg font-bold text-[#F4F4F0] tracking-wide">{art.title}</h3>
              <div className="text-xs text-[#00E5FF] font-semibold mt-1">
                Ref: {art.biblicalCorroboration}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 space-y-3 flex-1 text-xs">
              <div className="space-y-1 text-[#8E8E8A]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>Date: <strong className="text-[#F4F4F0]">{art.date}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>Location: <strong className="text-[#F4F4F0]">{art.location}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Landmark className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>Discovered: <strong className="text-[#F4F4F0]">{art.discovered}</strong></span>
                </div>
              </div>

              <div className="p-3 bg-[#0C0C0C] border border-[#2A2A2A] text-[#8E8E8A]">
                <div className="text-[10px] text-[#00E5FF] font-bold mb-1">[EXECUTIVE SUMMARY]</div>
                <p className="leading-relaxed">{art.summary}</p>
              </div>

              <p className="text-[#8E8E8A] leading-relaxed">{art.details}</p>

              {/* Primary Inscription Box */}
              <div className="p-2.5 bg-[#1A1A1A] border-l-2 border-l-[#00E5FF] text-[11px]">
                <div className="text-[9px] text-[#00E5FF] font-bold uppercase mb-1">PRIMARY INSCRIPTION:</div>
                <div className="text-[#F4F4F0] font-mono">{art.primaryInscription}</div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-3 border-t border-[#2A2A2A] bg-[#0C0C0C] flex items-center justify-between text-xs">
              <span className="text-[10px] text-[#8E8E8A]">VAULT ITEM</span>
              {onSaveClip && (
                <button
                  onClick={() =>
                    onSaveClip({
                      title: art.title,
                      snippet: `${art.title} (${art.date}): ${art.summary} Inscription: ${art.primaryInscription}`,
                      category: '[ARCHAEOLOGY]'
                    })
                  }
                  className="flex items-center gap-1 text-[#00E5FF] hover:underline text-xs"
                >
                  <BookmarkPlus className="w-3.5 h-3.5" />
                  <span>CLIP ARTIFACT</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
