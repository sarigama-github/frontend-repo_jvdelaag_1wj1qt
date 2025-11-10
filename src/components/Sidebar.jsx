import React, { useState } from 'react'
import { LayoutDashboard, Calculator, LineChart, ShoppingBag, HeartPulse, BookOpenCheck, CloudSun, Settings, ListChecks } from 'lucide-react'

const tabs = [
  { key: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { key: 'calculators', icon: Calculator, label: 'Calculators' },
  { key: 'analysis', icon: LineChart, label: 'Analysis' },
  { key: 'market', icon: ShoppingBag, label: 'Market' },
  { key: 'health', icon: HeartPulse, label: 'Health' },
  { key: 'feedlog', icon: BookOpenCheck, label: 'Feed Log' },
  { key: 'weather', icon: CloudSun, label: 'Weather' },
  { key: 'operations', icon: ListChecks, label: 'Operations' },
  { key: 'settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar({ active, onChange }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <aside
      className={`fixed left-0 top-0 h-screen z-40 transition-[width] duration-300 ${expanded ? 'w-56' : 'w-18'} px-3 py-4`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="h-full rounded-3xl border border-white/15 bg-[rgba(20,20,30,0.4)] backdrop-blur-[18px] flex flex-col items-stretch">
        <div className="px-3 py-4 text-aqua font-semibold text-sm tracking-widest uppercase">Aqua-AI</div>
        <nav className="flex-1 space-y-1 px-2">
          {tabs.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`group w-full flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition 
                ${active === key ? 'bg-aqua/15 text-white ring-1 ring-aqua/40' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              title={label}
            >
              <Icon size={20} className={`shrink-0 ${active === key ? 'text-aqua' : 'text-white/60 group-hover:text-aqua'}`} />
              <span className={`transition-opacity ${expanded ? 'opacity-100' : 'opacity-0'} whitespace-nowrap`}>{label}</span>
            </button>
          ))}
        </nav>
        <div className="px-3 py-3 text-[10px] text-white/40">v1.0</div>
      </div>
    </aside>
  )
}
