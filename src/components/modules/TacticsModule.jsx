import React from 'react';
import ColumboSimulator from '../interactive/ColumboSimulator';

export default function TacticsModule() {
  return (
    <div className="space-y-8">
      {/* Module Header */}
      <div className="module-header border-b border-[#222630] pb-4">
        <span className="subtle-badge">Conversational Strategy</span>
        <h2 className="module-title text-2xl mt-2">
          Tactics & Conversation Guides
        </h2>
        <p className="module-intro text-sm mt-1 max-w-2xl leading-relaxed">
          Practical, non-defensive frameworks for asking questions, shifting the burden of proof, and clarifying points.
        </p>
      </div>

      <ColumboSimulator />
    </div>
  );
}
