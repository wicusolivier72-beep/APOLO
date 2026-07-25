import React, { useState } from 'react';
import { BookMarked, X, Trash2, Copy, Check } from 'lucide-react';

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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose}></div>

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#09090B] border-l border-[#27272A] h-full flex flex-col z-10 shadow-2xl">
        <div className="p-4 border-b border-[#27272A] bg-[#121215] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookMarked className="w-4 h-4 text-[#E2C08D]" />
            <div>
              <h3 className="text-xs font-bold text-[#F4F4F5] uppercase tracking-wider">
                FIELD CHEAT-SHEET DRAWER
              </h3>
              <p className="text-[10px] text-[#71717A]">Clipped Evidence ({savedClips.length})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#71717A] hover:text-[#F4F4F5]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {savedClips.length === 0 ? (
            <div className="text-center py-12 text-xs text-[#71717A] border border-dashed border-[#27272A] p-6 rounded">
              <p className="font-semibold text-[#F4F4F5] mb-1">FIELD DRAWER IS EMPTY</p>
              <p>Click "Clip" on any manuscript, artifact, or tactic to bookmark key evidence for instant access during active conversations.</p>
            </div>
          ) : (
            savedClips.map((clip, index) => (
              <div key={index} className="p-3 border border-[#27272A] bg-[#121215] rounded">
                <div className="flex items-center justify-between border-b border-[#27272A] pb-1.5 mb-2">
                  <span className="mono-pill text-[9px]">{clip.category || '[SAVED CLIP]'}</span>
                  <button
                    onClick={() => onRemoveClip(index)}
                    className="text-[#71717A] hover:text-red-400 text-xs"
                    title="Remove clip"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h4 className="text-xs font-bold text-[#F4F4F5] mb-1">{clip.title}</h4>
                <p className="text-xs text-[#71717A] leading-relaxed mb-3">{clip.snippet}</p>

                <button
                  onClick={() => copyToClipboard(`${clip.title}: ${clip.snippet}`, index)}
                  className="w-full py-1.5 border border-[#27272A] bg-[#09090B] hover:border-[#E2C08D] text-[11px] text-[#F4F4F5] flex items-center justify-center gap-1.5 transition-colors rounded"
                >
                  {copiedIdx === index ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#E2C08D]" />
                      <span className="text-[#E2C08D]">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#E2C08D]" />
                      <span>Copy for Dialogue</span>
                    </>
                  )}
                </button>
              </div>
            ))
          )}
        </div>

        {savedClips.length > 0 && (
          <div className="p-3 border-t border-[#27272A] bg-[#121215] flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs text-red-400 hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>

            <button
              onClick={() => {
                const fullText = savedClips.map((c) => `[${c.category}] ${c.title}\n${c.snippet}`).join('\n\n---\n\n');
                copyToClipboard(fullText, 'all');
              }}
              className="px-3 py-1.5 bg-[#E2C08D] text-[#09090B] text-xs font-bold font-mono hover:bg-[#E2C08D]/90 flex items-center gap-1 rounded"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy All ({savedClips.length})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
