"use client";
import React, { useEffect, useRef } from "react";

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  const progressRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      const lengthCircle = 2 * Math.PI * 40;
      const dashOffset = lengthCircle - (progress / 100) * lengthCircle;
      progressRef.current.style.strokeDasharray = `${lengthCircle}`;
      progressRef.current.style.strokeDashoffset = `${dashOffset}`;
    }
  }, [progress]);

  return (
    <svg
      className="w-full h-full"
      height="100"
      width="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/200/svg"
    >
      <circle
        cx={50}
        cy={50}
        r={40}
        strokeWidth={2}
        fill="none"
        stroke="#ccc"
      />
      <circle
        ref={progressRef}
        cx={50}
        cy={50}
        r={40}
        fill="none"
        strokeWidth={2}
        stroke="#ff0000"
        transform="rotate(-90, 50, 50)"
      />

      <text
        x={50}
        y={50}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000"
      >
        {progress}%
      </text>
    </svg>
  );
}
