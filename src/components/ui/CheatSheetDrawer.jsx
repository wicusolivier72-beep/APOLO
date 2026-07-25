import React, { useState } from 'react';
import { Bookmark, X, Trash2, Copy, Check } from 'lucide-react';

export default function CheatSheetDrawer({ isOpen, onClose, savedClips, onRemoveClip, onClearAll }) {
  const [copiedIdx, setCopiedIdx] = useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-sans">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose}></div>

      <div className="relative w-full max-w-md bg-[#0B0C0E] border-l border-[#222630] h-full flex flex-col z-10 shadow-2xl">
        <div className="p-4 border-b border-[#222630] bg-[#13151A] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#E2C08D]" />
            <div>
              <h3 className="text-sm font-semibold text-[#F3F4F6]">
                Field Drawer
              </h3>
              <p className="text-xs text-[#9CA3AF]">Saved Evidence ({savedClips.length})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#9CA3AF] hover:text-[#F3F4F6]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
          {savedClips.length === 0 ? (
            <div className="text-center py-12 text-xs text-[#9CA3AF] border border-dashed border-[#222630] p-6 rounded-xl">
              <p className="font-semibold text-[#F3F4F6] mb-1">Your drawer is empty</p>
              <p>Click "Save" on any manuscript, artifact, or tactic to bookmark key evidence for instant access during conversations.</p>
            </div>
          ) : (
            savedClips.map((clip, index) => (
              <div key={index} className="p-3.5 border border-[#222630] bg-[#13151A] rounded-xl">
                <div className="flex items-center justify-between border-b border-[#222630] pb-2 mb-2">
                  <span className="subtle-badge">{clip.category || 'Saved Clip'}</span>
                  <button
                    onClick={() => onRemoveClip(index)}
                    className="text-[#9CA3AF] hover:text-red-400 text-xs"
                    title="Remove clip"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h4 className="text-xs font-semibold text-[#F3F4F6] mb-1">{clip.title}</h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed mb-3">{clip.snippet}</p>

                <button
                  onClick={() => copyToClipboard(`${clip.title}: ${clip.snippet}`, index)}
                  className="w-full py-1.5 border border-[#222630] bg-[#0B0C0E] hover:border-[#E2C08D] text-xs text-[#F3F4F6] flex items-center justify-center gap-1.5 transition-colors rounded-lg font-medium"
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
          <div className="p-4 border-t border-[#222630] bg-[#13151A] flex items-center justify-between text-xs">
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
              className="px-3 py-1.5 bg-[#E2C08D] text-[#0B0C0E] text-xs font-semibold hover:bg-[#E2C08D]/90 flex items-center gap-1 rounded-lg"
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
