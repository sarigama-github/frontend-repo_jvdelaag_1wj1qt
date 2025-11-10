import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Tabs from './components/Tabs'
import './index.css'

function App() {
  const [active, setActive] = useState('dashboard')

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <div className="fixed inset-0 -z-10 opacity-[0.08]" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,255,255,0.15),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(147,51,234,0.15),transparent_25%)]" />
      </div>

      <Sidebar active={active} onChange={setActive} />

      <main className="pl-20 md:pl-60">
        <Hero />
        <div className="px-6 md:px-8 -mt-10 md:-mt-14">
          <div className="rounded-3xl border border-white/10 bg-[rgba(20,20,30,0.35)] backdrop-blur-[18px] p-1">
            <div className="rounded-[22px] p-5 md:p-6">
              <Tabs active={active} />
            </div>
          </div>
        </div>
        <footer className="px-6 md:px-8 py-8 text-xs text-white/40">© 2025 Aqua-AI</footer>
      </main>
    </div>
  )
}

export default App
