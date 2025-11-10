import React from 'react'

// Utility wrapper to apply consistent glassmorphism styling
export function GlassPanel({ className = '', children }) {
  return (
    <div
      className={`rounded-2xl border border-white/15 bg-[rgba(20,20,30,0.4)] backdrop-blur-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${className}`}
    >
      {children}
    </div>
  )
}

export function GlowText({ children, className = '' }) {
  return (
    <span className={`text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.25)] ${className}`}>
      {children}
    </span>
  )
}

export function SectionTitle({ title, right }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-white/90 font-semibold tracking-wide">{title}</h3>
      {right}
    </div>
  )
}
