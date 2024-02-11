'use client';
import React, { useEffect, useRef } from 'react';

export default function ProgressBar({ progress }: { progress: number | null }) {
  const progressRef = useRef<SVGCircleElement>(null);

  const colorLine = (value: number) => {
    if (0 <= value && value <= 25) {
      return '#FF0000';
    } else if (25 < value && value <= 50) {
      return '#FFA500';
    } else if (50 < value && value <= 75) {
      return '#FFFF00';
    } else if (75 < value && value <= 100) {
      return '#008000';
    }
  };

  useEffect(() => {
    if (progressRef.current) {
      if (progress === null) {
        return;
      }
      const lengthCircle = 2 * Math.PI * 40;
      const dashOffset = lengthCircle - (progress / 100) * lengthCircle;
      progressRef.current.style.strokeDasharray = `${lengthCircle}`;
      progressRef.current.style.strokeDashoffset = `${dashOffset}`;
    }
  }, [progress]);

  return (
    <svg
      height="45"
      width="45"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/200/svg"
    >
      <circle
        cx={50}
        cy={50}
        r={40}
        strokeWidth={8}
        fill="none"
        stroke="#ccc"
      />
      <circle
        ref={progressRef}
        cx={50}
        cy={50}
        r={40}
        fill="none"
        strokeWidth={8}
        stroke={colorLine(progress || 0)}
        transform="rotate(-90, 50, 50)"
      />

      <text
        x={50}
        y={50}
        fontSize={24}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000"
      >
        {progress}%
      </text>
    </svg>
  );
}
