import React from "react";
import { cn } from "@/lib/utils";

export function FloatingPathsBackground({
  position = 1,
  children,
  className,
}) {
  const paths = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(226, 192, 141, ${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className={cn("w-full relative overflow-hidden", className)}>
      <div className="ambient-field__paths absolute inset-0 pointer-events-none">
        <svg
          className="ambient-field__svg w-full h-full text-[#E2C08D]"
          viewBox="0 0 696 316"
          fill="none"
        >
          {paths.map((path) => (
            <path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={0.06 + path.id * 0.012}
            />
          ))}
        </svg>
      </div>
      {children}
    </div>
  );
}
