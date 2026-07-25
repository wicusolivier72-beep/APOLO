import React from 'react';
import { creedTimelineSteps, nonChristianHistorians } from '../../data/creedsJesusData';
import MinimalFactsMatrix from '../interactive/MinimalFactsMatrix';
import { History, Clock, FileText, BookmarkPlus, ShieldCheck } from 'lucide-react';

export default function HistoricalJesusModule({ searchFilter, onSaveClip }) {
  return (
    <div className="space-y-8 font-mono">
      {/* Module Banner */}
      <div className="border border-[#2A2A2A] bg-[#121212] p-4 md:p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="mono-pill text-[#00E5FF]">[03. DATABASE MODULE]</span>
          <span className="text-xs text-[#8E8E8A]">MINIMAL FACTS & EARLY CREED TIMELINES</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#F4F4F0] tracking-wider uppercase">
          THE HISTORICAL JESUS & EARLY CREEDS
        </h2>
        <p className="text-xs text-[#8E8E8A] mt-1 max-w-3xl leading-relaxed">
          Data-driven historical analysis focusing on early eyewitness testimony, 1 Corinthians 15 creedal chronology, non-Christian ancient historians, and the Minimal Facts matrix.
        </p>
      </div>

      {/* Feature: 1 Cor 15:3-8 Creed Timeline Visualizer */}
      <div className="blueprint-card p-5 border border-[#2A2A2A] bg-[#121212]">
        <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3 mb-6">
          <div>
            <span className="mono-pill text-[#00E5FF]">CREED CHRONOLOGY</span>
            <h3 className="text-lg font-bold text-[#F4F4F0] mt-1">1 CORINTHIANS 15:3–8 CREED TIMELINE</h3>
          </div>
          <span className="text-xs text-[#8E8E8A]">DESTROYS LATE MYTH-MAKING HYPOTHESIS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {creedTimelineSteps.map((step, idx) => (
            <div key={idx} className="border border-[#2A2A2A] bg-[#0C0C0C] p-4 relative flex flex-col justify-between">
              <div className="absolute -top-3 left-4 bg-[#00E5FF] text-[#0C0C0C] text-[10px] font-bold px-2 py-0.5 border border-[#00E5FF]">
                {step.year}
              </div>

              <div className="mt-2">
                <div className="text-[10px] text-[#8E8E8A] mb-1">{step.phase}</div>
                <h4 className="text-sm font-bold text-[#F4F4F0] mb-2">{step.title}</h4>
                <p className="text-xs text-[#8E8E8A] leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#2A2A2A] text-[10px] text-[#00E5FF] font-bold">
                TIMELINE STEP {idx + 1} OF 3
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-[#1A1A1A] border border-[#00E5FF]/40 text-xs text-[#F4F4F0]">
          <div className="text-[10px] text-[#00E5FF] font-bold mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>HISTORICAL CONCLUSION ON 1 CORINTHIANS 15</span>
          </div>
          <p className="text-[#8E8E8A] leading-relaxed">
            The resurrection proclamation was not a 2nd-century legendary accretion. Because Paul received this standardized Greek formula in Jerusalem within 2–5 years of Jesus' crucifixion (from Peter and James), the core doctrine of Jesus' death, burial, and resurrection is historically anchored to the immediate eyewitnesses in Jerusalem.
          </p>
        </div>
      </div>

      {/* Interactive Feature: Minimal Facts Matrix */}
      <MinimalFactsMatrix onSaveClip={onSaveClip} />

      {/* Non-Christian Historical Mentions */}
      <div>
        <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-2 mb-4">
          <h3 className="text-sm font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
            <span className="text-[#00E5FF]">■</span> NON-CHRISTIAN ANCIENT WITNESSES ({nonChristianHistorians.length})
          </h3>
          <span className="text-xs text-[#8E8E8A]">PAGAN & JEWISH HISTORIANS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nonChristianHistorians.map((h, i) => (
            <div key={i} className="blueprint-card p-5 border border-[#2A2A2A] bg-[#121212] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-2 mb-3">
                  <span className="mono-pill text-[#00E5FF]">[EXTRA-BIBLICAL]</span>
                  <span className="text-xs text-[#8E8E8A]">{h.historian.split(' ')[0]}</span>
                </div>

                <h4 className="text-base font-bold text-[#F4F4F0] mb-1">{h.historian}</h4>
                <div className="text-xs text-[#00E5FF] font-semibold mb-3">{h.work}</div>

                <blockquote className="p-3 bg-[#0C0C0C] border-l-2 border-l-[#00E5FF] text-xs text-[#F4F4F0] italic mb-4 leading-relaxed">
                  "{h.quote}"
                </blockquote>

                <div className="p-3 bg-[#1A1A1A] border border-[#2A2A2A] text-xs text-[#8E8E8A]">
                  <div className="text-[10px] text-[#00E5FF] font-bold mb-1">[HISTORICAL IMPORTANCE]</div>
                  <p className="leading-relaxed">{h.significance}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2A2A2A] mt-4 flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#8E8E8A]">HISTORICAL SOURCE</span>
                {onSaveClip && (
                  <button
                    onClick={() =>
                      onSaveClip({
                        title: h.historian,
                        snippet: `${h.historian} (${h.work}): "${h.quote}"`,
                        category: '[HISTORICAL WITNESS]'
                      })
                    }
                    className="flex items-center gap-1 text-[#00E5FF] hover:underline text-xs"
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" />
                    <span>CLIP WITNESS</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
