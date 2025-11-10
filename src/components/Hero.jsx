import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <div className="relative h-[38vh] md:h-[44vh] lg:h-[52vh] w-full overflow-hidden">
      <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(2,8,23,0.25)] to-[rgba(2,8,23,0.7)]" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 120px rgba(0,255,255,0.08)' }} />
      <div className="absolute inset-0 flex items-end p-6 md:p-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.25)]">Aqua-AI Management Suite</h1>
          <p className="mt-2 text-white/80">Glassmorphic command center for aquaculture operations. Real-time insights, AI tooling, and streamlined workflows.</p>
        </div>
      </div>
    </div>
  )
}
