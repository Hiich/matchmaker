import React from 'react'

export function NeonPattern() {
  return (
    <div className="h-32 w-full relative overflow-hidden bg-[#1E1A29]">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9C27B0" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#00BCD4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#9C27B0" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 L100,0 L100,100 L0,100 Z"
          fill="url(#neonGradient)"
          opacity="0.1"
        />
        <path
          d="M0,50 Q25,0 50,50 T100,50"
          fill="none"
          stroke="#9C27B0"
          strokeWidth="0.5"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,50 Q25,0 50,50 T100,50;
              M0,50 Q25,100 50,50 T100,50;
              M0,50 Q25,0 50,50 T100,50
            "
          />
        </path>
        <path
          d="M0,50 Q25,100 50,50 T100,50"
          fill="none"
          stroke="#00BCD4"
          strokeWidth="0.5"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,50 Q25,100 50,50 T100,50;
              M0,50 Q25,0 50,50 T100,50;
              M0,50 Q25,100 50,50 T100,50
            "
          />
        </path>
      </svg>
    </div>
  )
}

