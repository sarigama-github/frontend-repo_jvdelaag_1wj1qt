import React from 'react'
import { GlassPanel, SectionTitle } from './GlassStyles'

export default function Tabs({ active }) {
  return (
    <div className="space-y-6">
      {active === 'dashboard' && <DashboardTab />}
      {active === 'calculators' && <CalculatorsTab />}
      {active === 'analysis' && <AnalysisTab />}
      {active === 'market' && <MarketTab />}
      {active === 'health' && <HealthTab />}
      {active === 'feedlog' && <FeedLogTab />}
      {active === 'weather' && <WeatherTab />}
      {active === 'operations' && <OperationsTab />}
      {active === 'settings' && <SettingsTab />}
    </div>
  )
}

function DashboardTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <GlassPanel className="px-4 py-2">
            <div className="text-xs uppercase tracking-widest text-white/60">Brand</div>
            <div className="text-white">All Ponds</div>
          </GlassPanel>
          <button className="px-4 py-2 rounded-xl bg-aqua/20 text-aqua border border-aqua/30 hover:bg-aqua/30 transition">Export</button>
          <button className="px-4 py-2 rounded-xl bg-aqua/20 text-aqua border border-aqua/30 hover:bg-aqua/30 transition">Print</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Active Ponds','FCR','Survival','Biomass'].map((t,i)=> (
          <GlassPanel key={i} className="p-4">
            <div className="text-white/70 text-sm">{t}</div>
            <div className="text-white text-2xl font-semibold mt-1">{[12,1.45,'89%','3.2t'][i]}</div>
          </GlassPanel>
        ))}
      </div>

      <GlassPanel className="p-4">
        <SectionTitle title="Expanded Feed Chart Table" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-white/60">
              <tr>
                {['Pond','Age (d)','Feed Code','Qty','Status'].map(h=> <th key={h} className="py-2 pr-6">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5,6,7].map((r)=> (
                <tr key={r} className="border-t border-white/10 hover:bg-aqua/5 transition">
                  <td className="py-2 pr-6 text-white/90">P-{r}</td>
                  <td className="py-2 pr-6 text-white/80">{15+r}</td>
                  <td className="py-2 pr-6">
                    <span className="px-2 py-1 rounded-lg text-xs bg-purple-500/20 text-purple-300 border border-purple-400/30">C{r}2</span>
                  </td>
                  <td className="py-2 pr-6 text-white/80">{(200-r*7)} kg</td>
                  <td className="py-2 pr-6">
                    <span className={`px-2 py-1 rounded-lg text-xs border ${r%2?'bg-green-500/15 text-green-300 border-green-400/30':'bg-yellow-500/15 text-yellow-300 border-yellow-400/30'}`}>
                      {r%2? 'On Track':'Review'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassPanel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GlassPanel className="p-4">
          <SectionTitle title="Competitive Analysis" />
          <div className="flex gap-2 overflow-x-auto pb-2">
            {Array.from({length:8}).map((_,i)=> (
              <div key={i} className="min-w-[180px] rounded-xl border border-white/10 bg-white/5 p-3 text-white/80">Brand {i+1}</div>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="p-4">
          <SectionTitle title="Feed Code Legend" />
          <div className="grid grid-cols-2 gap-2 text-white/80 text-sm">
            {['C12 Starter','C22 Grower','C32 Finisher','C42 Booster'].map((s)=> (
              <div key={s} className="rounded-xl border border-white/10 bg-white/5 p-3">{s}</div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}

function CalculatorsTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <GlassPanel className="p-4">
        <SectionTitle title="Calculator Selection" />
        <select className="w-full bg-white/5 border border-white/15 rounded-xl p-2 text-white">
          <option>Survival Rate Estimator</option>
          <option>Feed Conversion Calculator</option>
          <option>Breakeven Analyzer</option>
        </select>
      </GlassPanel>
      <GlassPanel className="p-4">
        <SectionTitle title="Survival Rate Estimator" />
        <div className="grid grid-cols-2 gap-3">
          {['Initial Stock','Current Count','Days'].map((l)=> (
            <div key={l}>
              <div className="text-xs text-white/60 mb-1">{l}</div>
              <input className="w-full bg-white/5 border border-white/15 rounded-xl p-2 text-white placeholder-white/40" placeholder="0" />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-3/4 bg-aqua/60" />
          </div>
          <div className="mt-2 text-white">Estimated Survival: 75%</div>
        </div>
      </GlassPanel>
    </div>
  )
}

function AnalysisTab() {
  return (
    <div className="space-y-4">
      {['Inputs','Health','Projections'].map((s,i)=> (
        <details key={s} className="group">
          <summary className="cursor-pointer select-none">
            <GlassPanel className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-white">{s}</div>
                <div className="text-aqua/80">{i===0?'Benchmarks & Growth': i===1?'Financial Summary':'Harvest Profit Simulator'}</div>
              </div>
            </GlassPanel>
          </summary>
          <div className="p-3" />
        </details>
      ))}
      <button className="w-full rounded-2xl bg-aqua/20 text-aqua border border-aqua/30 py-3 hover:bg-aqua/30 transition">Get AI-Powered Advice</button>
    </div>
  )
}

function MarketTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <input className="flex-1 bg-white/5 border border-white/15 rounded-xl p-2 text-white" placeholder="Search markets or ask a question" />
        <button className="px-4 py-2 rounded-xl bg-aqua/20 text-aqua border border-aqua/30 hover:bg-aqua/30 transition">Search</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['Andhra Pradesh','Tamil Nadu','Odisha','Gujarat','West Bengal','Kerala'].map((m)=> (
          <GlassPanel key={m} className="p-4">
            <div className="text-white/80">{m}</div>
            <div className="text-white text-2xl font-semibold mt-1">₹ {Math.floor(300+Math.random()*50)}/kg</div>
            <div className="mt-2 text-xs text-white/50">Sources: gov.in, local exchanges</div>
          </GlassPanel>
        ))}
      </div>
    </div>
  )
}

function HealthTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <GlassPanel className="p-6 min-h-[260px] flex items-center justify-center text-white/80">AI Diagnosis Tool (drag & drop, file, camera)</GlassPanel>
      <div className="space-y-4">
        <GlassPanel className="p-4">Diagnosis History (searchable)</GlassPanel>
        <GlassPanel className="p-4">Disease Library</GlassPanel>
      </div>
    </div>
  )
}

function FeedLogTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <GlassPanel className="p-4">Daily Logging</GlassPanel>
      <GlassPanel className="p-4">Feed Stock Management</GlassPanel>
      <GlassPanel className="p-4">Advanced History Table</GlassPanel>
    </div>
  )
}

function WeatherTab() {
  return (
    <div className="space-y-4">
      <GlassPanel className="p-4">Animated weather background with detailed info and lunar calendar</GlassPanel>
    </div>
  )
}

function OperationsTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <GlassPanel className="p-4">Kanban Board</GlassPanel>
      <GlassPanel className="p-4">Daily Checklist</GlassPanel>
      <GlassPanel className="p-4">Feeding Schedules</GlassPanel>
      <GlassPanel className="p-4">Water Quality Monitoring</GlassPanel>
      <GlassPanel className="p-4">Equipment Maintenance</GlassPanel>
    </div>
  )
}

function SettingsTab() {
  return (
    <div className="space-y-4">
      <GlassPanel className="p-4">All configuration options with auto-save</GlassPanel>
    </div>
  )
}
