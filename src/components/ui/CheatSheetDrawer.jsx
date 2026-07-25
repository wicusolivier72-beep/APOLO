import React, { useState } from 'react';
import { BookMarked, X, Trash2, Copy, Check, ExternalLink } from 'lucide-react';

export default function CheatSheetDrawer({ isOpen, onClose, savedClips, onRemoveClip, onClearAll }) {
  const [copiedIdx, setCopiedIdx] = useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-mono">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>

      {/* Drawer Body */}
      <div className="relative w-full max-w-md bg-[#0C0C0C] border-l border-[#2A2A2A] h-full flex flex-col z-10 shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-[#2A2A2A] bg-[#121212] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-[#00E5FF]" />
            <div>
              <h3 className="text-sm font-bold text-[#F4F4F0] uppercase tracking-wider">
                FIELD CHEAT-SHEET DRAWER
              </h3>
              <p className="text-[10px] text-[#8E8E8A]">CLIPPED PRIMARY SOURCES & DATA ({savedClips.length})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-[#2A2A2A] text-[#8E8E8A] hover:text-[#F4F4F0] hover:border-[#00E5FF]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {savedClips.length === 0 ? (
            <div className="text-center py-12 text-xs text-[#8E8E8A] border border-dashed border-[#2A2A2A] p-6">
              <BookMarked className="w-8 h-8 text-[#2A2A2A] mx-auto mb-2" />
              <p className="font-bold text-[#F4F4F0] mb-1">YOUR FIELD DRAWER IS EMPTY</p>
              <p>Click "+ CLIP ENTRY" on any manuscript, artifact, or tactical card across the 5 modules to save primary source evidence here for instant access during conversations.</p>
            </div>
          ) : (
            savedClips.map((clip, index) => (
              <div key={index} className="p-3 border border-[#2A2A2A] bg-[#121212] relative group">
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-1.5 mb-2">
                  <span className="mono-pill text-[#00E5FF] text-[9px]">{clip.category || '[SAVED CLIP]'}</span>
                  <button
                    onClick={() => onRemoveClip(index)}
                    className="text-[#8E8E8A] hover:text-red-400 text-xs"
                    title="Remove clip"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h4 className="text-xs font-bold text-[#F4F4F0] mb-1">{clip.title}</h4>
                <p className="text-xs text-[#8E8E8A] leading-relaxed mb-3">{clip.snippet}</p>

                <button
                  onClick={() => copyToClipboard(`${clip.title}: ${clip.snippet}`, index)}
                  className="w-full py-1.5 border border-[#2A2A2A] bg-[#1A1A1A] hover:border-[#00E5FF] text-[11px] text-[#F4F4F0] flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copiedIdx === index ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>COPY FOR DIALOGUE</span>
                    </>
                  )}
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedClips.length > 0 && (
          <div className="p-3 border-t border-[#2A2A2A] bg-[#121212] flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs text-red-400 hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>CLEAR ALL CLIPS</span>
            </button>

            <button
              onClick={() => {
                const fullText = savedClips.map((c) => `[${c.category}] ${c.title}\n${c.snippet}`).join('\n\n---\n\n');
                copyToClipboard(fullText, 'all');
              }}
              className="px-3 py-1.5 bg-[#00E5FF] text-[#0C0C0C] text-xs font-bold font-mono hover:bg-[#00E5FF]/90 flex items-center gap-1"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>COPY ALL ({savedClips.length})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
