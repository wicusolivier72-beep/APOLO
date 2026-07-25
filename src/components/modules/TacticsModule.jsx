import React from 'react';
import ColumboSimulator from '../interactive/ColumboSimulator';

export default function TacticsModule({ onSaveClip }) {
  return (
    <div className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-[#222630] pb-4">
        <span className="subtle-badge">Conversational Strategy</span>
        <h2 className="text-xl font-semibold text-[#F3F4F6] mt-2">
          Tactics & Field Guides
        </h2>
        <p className="text-xs text-[#9CA3AF] mt-1 max-w-2xl leading-relaxed">
          Practical, non-defensive frameworks for asking questions, shifting the burden of proof, and clarifying points.
        </p>
      </div>

      <ColumboSimulator onSaveClip={onSaveClip} />
    </div>
  );
}
