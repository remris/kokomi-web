'use client'

import { useState } from 'react'
import Image from 'next/image'

// ── Phone-Frame Komponente ────────────────────────────────────────────────────
function Phone({
  src,
  label,
  caption,
  screen,
}: {
  src?: string
  label: string
  caption?: string
  screen?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-36 md:w-44">
        <div className="bg-gray-800 rounded-[2.4rem] p-2 phone-shadow">
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-gray-900 rounded-full z-10" />
          <div className="bg-gray-900 rounded-[2rem] overflow-hidden aspect-[9/19.5] relative">
            {src ? (
              <Image
                src={src}
                alt={label}
                fill
                className="object-cover object-top"
              />
            ) : (
              screen
            )}
            {/* Overlay nur wenn kein echtes Bild */}
            {!src && (
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2 text-center border border-white/10">
                  <p className="text-white/40 text-[8px] font-medium">📸 {label}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {caption && (
        <p className="text-[11px] text-gray-400 text-center max-w-[10rem] leading-tight">
          {caption}
        </p>
      )}
    </div>
  )
}

// ── Simulierte Screens ────────────────────────────────────────────────────────

function HomeScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-3 bg-gradient-to-b from-[#3D6B8F] to-[#2A5470]">
        <p className="text-[7px] text-blue-100/70">Guten Morgen 👋</p>
        <p className="text-[10px] font-black text-white">Übersicht</p>
      </div>
      <div className="px-2 pt-2 grid grid-cols-3 gap-1 mb-1.5">
        {[['32','Artikel'],['3','Ablauf'],['5','Rezepte']].map(([n,l]) => (
          <div key={l} className="bg-white rounded-xl p-1.5 text-center border border-gray-100">
            <p className="text-[10px] font-black text-gray-800">{n}</p>
            <p className="text-[6px] text-gray-400">{l}</p>
          </div>
        ))}
      </div>
      <div className="px-2 space-y-1 overflow-hidden flex-1">
        <p className="text-[6px] font-bold text-gray-400 px-1">LÄUFT BALD AB</p>
        {[{e:'🥛',n:'Milch',d:'2 Tage'},{e:'🍞',n:'Brot',d:'1 Tag'},{e:'🍅',n:'Tomaten',d:'3 Tage'}].map(i => (
          <div key={i.n} className="flex items-center gap-1.5 bg-red-50 border border-red-100 rounded-lg px-2 py-1">
            <span className="text-[10px]">{i.e}</span>
            <p className="text-[7px] font-semibold text-gray-700 flex-1">{i.n}</p>
            <p className="text-[6px] text-red-400">{i.d}</p>
          </div>
        ))}
        <p className="text-[6px] font-bold text-gray-400 px-1 pt-0.5">SCHNELLZUGRIFF</p>
        <div className="grid grid-cols-2 gap-1">
          {[['🛒','Einkauf'],['📅','Wochenplan']].map(([e,l]) => (
            <div key={l} className="bg-white border border-gray-100 rounded-xl p-1.5 flex items-center gap-1">
              <span className="text-[9px]">{e}</span>
              <p className="text-[6px] font-semibold text-gray-700">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VorratListeScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-gradient-to-b from-[#3D6B8F] to-[#2A5470]">
        <p className="text-[10px] font-black text-white">Mein Vorrat</p>
        <p className="text-[6px] text-blue-100/70">32 Artikel · 3 laufen bald ab</p>
      </div>
      <div className="px-2 py-1.5 flex-1 space-y-1 overflow-hidden">
        {[{e:'🥛',n:'Milch 1L',d:'2 Tage',w:true},{e:'🧀',n:'Gouda',d:'14 Tage',w:false},{e:'🥦',n:'Brokkoli',d:'4 Tage',w:false},{e:'🍗',n:'Hähnchen',d:'2 Tage',w:true},{e:'🥚',n:'Eier (6)',d:'10 Tage',w:false},{e:'🍋',n:'Zitronen',d:'8 Tage',w:false}].map(i => (
          <div key={i.n} className={`flex items-center gap-1.5 rounded-lg px-2 py-1 ${i.w ? 'bg-red-50 border border-red-200' : 'bg-white border border-gray-100'}`}>
            <span className="text-[10px]">{i.e}</span>
            <div className="flex-1">
              <p className="text-[7px] font-semibold text-gray-800">{i.n}</p>
              <p className={`text-[5px] ${i.w ? 'text-red-500' : 'text-gray-400'}`}>MHD: {i.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function VorratKatScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-gradient-to-b from-[#3D6B8F] to-[#2A5470]">
        <p className="text-[10px] font-black text-white">Kategorien</p>
      </div>
      <div className="px-2 py-1.5 flex-1 space-y-1.5 overflow-hidden">
        {[{k:'🥛 Milchprodukte',n:4,w:1},{k:'🥩 Fleisch & Fisch',n:2,w:0},{k:'🥦 Gemüse',n:7,w:0},{k:'🍞 Backwaren',n:3,w:2},{k:'🥫 Konserven',n:8,w:0},{k:'🧊 Tiefkühl',n:5,w:0}].map(c => (
          <div key={c.k} className="bg-white rounded-xl px-2 py-1.5 border border-gray-100">
            <div className="flex items-center justify-between">
              <p className="text-[7px] font-bold text-gray-700">{c.k}</p>
              <div className="flex items-center gap-1">
                {c.w > 0 && <span className="text-[5px] bg-red-100 text-red-500 px-1 py-0.5 rounded-full">⚠️{c.w}</span>}
                <span className="text-[5px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">{c.n}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EinkaufListeScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-gradient-to-b from-[#3D6B8F] to-[#2A5470]">
        <p className="text-[10px] font-black text-white">Einkaufsliste</p>
        <p className="text-[6px] text-blue-100/70">Wocheneinkauf · 8 Artikel</p>
      </div>
      <div className="px-2 py-1.5 flex-1 space-y-1 overflow-hidden">
        {[{e:'🥛',n:'Milch 1L',m:'2x',done:true},{e:'🍞',n:'Vollkornbrot',m:'1x',done:true},{e:'🧀',n:'Parmesan',m:'200g',done:false},{e:'🥩',n:'Rinderhack',m:'500g',done:false},{e:'🥕',n:'Karotten',m:'1kg',done:false},{e:'🧅',n:'Zwiebeln',m:'500g',done:false}].map(i => (
          <div key={i.n} className={`flex items-center gap-1.5 rounded-lg px-2 py-1 bg-white border border-gray-100 ${i.done ? 'opacity-40' : ''}`}>
            <div className={`w-3 h-3 rounded-full border flex items-center justify-center flex-shrink-0 ${i.done ? 'bg-[#56B4A0] border-[#56B4A0]' : 'border-gray-300'}`}>
              {i.done && <span className="text-white text-[5px]">✓</span>}
            </div>
            <span className="text-[9px]">{i.e}</span>
            <p className={`text-[7px] font-semibold flex-1 ${i.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>{i.n}</p>
            <p className="text-[6px] text-gray-400">{i.m}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function EinkaufModusScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-[#56B4A0]">
        <p className="text-[7px] text-white/70">🛒 Einkaufsmodus</p>
        <p className="text-[9px] font-black text-white">4 / 8 erledigt</p>
        <div className="mt-1 h-1 bg-white/30 rounded-full">
          <div className="h-full bg-white rounded-full w-1/2" />
        </div>
      </div>
      <div className="px-2 py-1.5 flex-1 space-y-1 overflow-hidden">
        <p className="text-[6px] font-bold text-gray-400 px-1">NOCH ZU KAUFEN</p>
        {[{e:'🧀',n:'Parmesan'},{e:'🥩',n:'Rinderhack'},{e:'🥕',n:'Karotten'},{e:'🧅',n:'Zwiebeln'}].map(i => (
          <div key={i.n} className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1.5 border border-gray-100">
            <span className="text-[10px]">{i.e}</span>
            <p className="text-[7px] font-semibold text-gray-800 flex-1">{i.n}</p>
            <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
          </div>
        ))}
      </div>
      <div className="px-2 pb-3">
        <div className="h-6 rounded-full bg-[#56B4A0] flex items-center justify-center">
          <p className="text-[7px] font-bold text-white">✓ Einkauf abschließen</p>
        </div>
      </div>
    </div>
  )
}

function KiRezepteScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-gradient-to-b from-[#3D6B8F] to-[#2A5470]">
        <p className="text-[10px] font-black text-white">KI-Rezepte</p>
        <p className="text-[6px] text-blue-100/70">Aus deinem Vorrat</p>
      </div>
      <div className="px-2 py-1.5 flex-1 space-y-1 overflow-hidden">
        {[{n:'Pasta Carbonara',t:'20 Min',k:'520 kcal',tag:'⭐'},{n:'Gemüse-Curry',t:'30 Min',k:'380 kcal',tag:'🌱'},{n:'Hähnchen-Wrap',t:'15 Min',k:'450 kcal',tag:'🔥'},{n:'Brokkoli-Suppe',t:'25 Min',k:'280 kcal',tag:'❄️'},{n:'Omelett & Käse',t:'10 Min',k:'310 kcal',tag:'⚡'}].map(r => (
          <div key={r.n} className="bg-white rounded-xl p-1.5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-0.5">
              <p className="text-[7px] font-bold text-gray-800 flex-1">{r.n}</p>
              <span className="text-[8px]">{r.tag}</span>
            </div>
            <div className="flex gap-1.5">
              <span className="text-[5px] text-[#3D6B8F]">⏱ {r.t}</span>
              <span className="text-[5px] text-orange-500">🔥 {r.k}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RezeptDetailScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="h-14 bg-gradient-to-b from-orange-400 to-orange-600 flex items-end px-3 pb-2">
        <div>
          <p className="text-[9px] font-black text-white">Pasta Carbonara</p>
          <div className="flex gap-1 mt-0.5">
            <span className="text-[5px] bg-white/20 text-white px-1 py-0.5 rounded-full">⏱ 20 Min</span>
            <span className="text-[5px] bg-white/20 text-white px-1 py-0.5 rounded-full">🔥 520 kcal</span>
          </div>
        </div>
      </div>
      <div className="px-2 py-1.5 flex-1 overflow-hidden space-y-1.5">
        <div>
          <p className="text-[6px] font-black text-gray-500 mb-0.5">ZUTATEN</p>
          {['Spaghetti 200g','Eier 3x ✓','Parmesan 60g ✓','Speck 100g','Knoblauch ✓'].map(z => (
            <p key={z} className={`text-[6px] py-0.5 ${z.includes('✓') ? 'text-[#56B4A0]' : 'text-gray-700'}`}>• {z}</p>
          ))}
        </div>
        <div>
          <p className="text-[6px] font-black text-gray-500 mb-0.5">ZUBEREITUNG</p>
          <p className="text-[5px] text-gray-500 leading-relaxed">Pasta kochen, Eier mit Parmesan verrühren, Speck anbraten, alles vermengen...</p>
        </div>
      </div>
      <div className="px-2 pb-2">
        <div className="h-5 rounded-full gradient-brand flex items-center justify-center">
          <p className="text-[6px] font-bold text-white">🛒 Fehlende kaufen</p>
        </div>
      </div>
    </div>
  )
}

function WochenplanScreen() {
  const days = ['Mo','Di','Mi','Do','Fr','Sa','So']
  const meals = ['Pasta Carbonara','Gemüse-Curry','Hähnchen-Wrap','Brokkoli-Suppe','Buddha Bowl']
  const emojis = ['🍝','🍛','🌯','🥣','🥗']
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-gradient-to-b from-[#3D6B8F] to-[#2A5470]">
        <p className="text-[10px] font-black text-white">Wochenplan</p>
        <p className="text-[6px] text-blue-100/70">KW 15 · Apr 2026</p>
      </div>
      <div className="px-2 py-1.5 flex-1 space-y-1 overflow-hidden">
        {days.map((d,i) => (
          <div key={d} className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1 border border-gray-100">
            <p className="text-[6px] font-black text-gray-400 w-4">{d}</p>
            <p className={`text-[6px] font-semibold flex-1 ${i < 5 ? 'text-gray-700' : 'text-gray-300 italic'}`}>
              {i < 5 ? meals[i] : 'Kein Plan'}
            </p>
            {i < 5 && <span className="text-[8px]">{emojis[i]}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function HaushaltsScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-gradient-to-b from-[#3D6B8F] to-[#2A5470]">
        <p className="text-[10px] font-black text-white">Mein Haushalt</p>
        <p className="text-[6px] text-blue-100/70">Familie Müller · 3 Mitglieder</p>
      </div>
      <div className="px-2 py-1.5 flex-1 space-y-1.5 overflow-hidden">
        <div className="flex gap-1">
          {[{e:'👩',n:'Anna'},{e:'👨',n:'Markus'},{e:'👧',n:'Lena'}].map(m => (
            <div key={m.n} className="flex-1 bg-white rounded-xl p-1.5 border border-gray-100 flex flex-col items-center gap-0.5">
              <span className="text-[13px]">{m.e}</span>
              <p className="text-[6px] font-semibold text-gray-700">{m.n}</p>
            </div>
          ))}
        </div>
        <p className="text-[6px] font-black text-gray-400 px-1">HAUSHALT-CHAT</p>
        {[{u:'👩',n:'Anna',t:'Ich kaufe heute ein 🛒',time:'14:32'},{u:'👨',n:'Markus',t:'Bitte noch Käse!',time:'14:35'},{u:'👩',n:'Anna',t:'Erledigt ✅',time:'14:50'}].map(m => (
          <div key={m.time} className="flex items-start gap-1">
            <span className="text-[9px]">{m.u}</span>
            <div className="flex-1 bg-white rounded-xl px-1.5 py-1 border border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-[5px] font-bold text-[#3D6B8F]">{m.n}</p>
                <p className="text-[4px] text-gray-300">{m.time}</p>
              </div>
              <p className="text-[6px] text-gray-600">{m.t}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function HaushaltsInviteScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-gradient-to-b from-[#3D6B8F] to-[#2A5470]">
        <p className="text-[10px] font-black text-white">Haushalt einladen</p>
      </div>
      <div className="px-3 py-4 flex-1 flex flex-col items-center justify-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-[#3D6B8F]/10 flex items-center justify-center">
          <span className="text-xl">🏠</span>
        </div>
        <p className="text-[8px] font-black text-gray-800 text-center">Einladungscode teilen</p>
        <div className="bg-white border-2 border-dashed border-[#3D6B8F]/30 rounded-2xl px-3 py-2.5 text-center w-full">
          <p className="text-[13px] font-black text-[#3D6B8F] tracking-widest">HX7A-K2M9</p>
          <p className="text-[5px] text-gray-400 mt-0.5">Einladungscode</p>
        </div>
        <p className="text-[6px] text-gray-400 text-center">Geteilter Vorrat · Listen · Chat</p>
        <div className="h-5 w-full rounded-full gradient-brand flex items-center justify-center">
          <p className="text-[6px] font-bold text-white">📋 Code kopieren</p>
        </div>
      </div>
    </div>
  )
}

function CommunityFeedScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-gradient-to-b from-[#3D6B8F] to-[#2A5470]">
        <p className="text-[10px] font-black text-white">Mein Feed</p>
      </div>
      <div className="px-2 py-1.5 flex-1 space-y-1.5 overflow-hidden">
        {[{u:'👩',n:'Anna K.',t:'Mein Sommer-Wochenplan! 🌞',r:'🌿 Sommer-Wochenplan',l:12},{u:'👨',n:'Marco R.',t:'Heute Reste gerettet 🎉',r:'🥗 Buddha Bowl',l:8},{u:'🧑',n:'Sarah M.',t:'Neues KI-Rezept – top!',r:'🍝 One-Pot Pasta',l:23}].map(p => (
          <div key={p.n} className="bg-white rounded-xl p-1.5 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-[10px]">{p.u}</span>
              <p className="text-[7px] font-bold text-gray-800">{p.n}</p>
            </div>
            <p className="text-[6px] text-gray-500 mb-1">{p.t}</p>
            <div className="bg-[#3D6B8F]/10 border border-[#3D6B8F]/20 rounded-lg px-1.5 py-0.5">
              <p className="text-[6px] text-[#3D6B8F] font-medium">{p.r}</p>
            </div>
            <p className="text-[5px] text-gray-400 mt-0.5">❤️ {p.l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CommunityLokalScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-gradient-to-b from-[#56B4A0] to-[#3D9B85]">
        <p className="text-[10px] font-black text-white">Meine Community</p>
        <p className="text-[6px] text-white/70">Prenzlauer Berg · 34 Mitgl.</p>
      </div>
      <div className="px-2 py-1.5 flex-1 space-y-1.5 overflow-hidden">
        <div className="flex gap-1">
          {[['💬','Feed'],['🎁','Teilen'],['🆘','Hilfe']].map(([e,l]) => (
            <div key={l} className="flex-1 bg-white rounded-xl py-1.5 border border-gray-100 flex flex-col items-center gap-0.5">
              <span className="text-[10px]">{e}</span>
              <p className="text-[5px] font-semibold text-gray-500">{l}</p>
            </div>
          ))}
        </div>
        <p className="text-[6px] font-black text-gray-400 px-1">GERADE VERFÜGBAR</p>
        {[{e:'🍎',n:'Äpfel vom Baum',u:'Anna K.',d:'Bis Fr.'},{e:'🍞',n:'Selbst gebackenes Brot',u:'Marco',d:'Heute'},{e:'🥕',n:'Bio-Karotten 1kg',u:'Sarah',d:'2 verfügbar'}].map(s => (
          <div key={s.n} className="bg-white rounded-xl p-1.5 border border-gray-100">
            <div className="flex items-center gap-1">
              <span className="text-[11px]">{s.e}</span>
              <div className="flex-1">
                <p className="text-[6px] font-bold text-gray-800">{s.n}</p>
                <p className="text-[5px] text-gray-400">{s.u} · {s.d}</p>
              </div>
              <div className="text-[5px] bg-[#56B4A0]/10 text-[#56B4A0] border border-[#56B4A0]/20 px-1 py-0.5 rounded-full whitespace-nowrap">Anfragen</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CommunityTeilenScreen() {
  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col">
      <div className="px-3 pt-7 pb-2 bg-gradient-to-b from-[#56B4A0] to-[#3D9B85]">
        <p className="text-[10px] font-black text-white">Lebensmittel teilen</p>
      </div>
      <div className="px-2 py-1.5 flex-1 space-y-1.5 overflow-hidden">
        <div className="bg-[#56B4A0]/10 border border-[#56B4A0]/20 rounded-xl p-1.5">
          <p className="text-[7px] font-bold text-[#56B4A0]">+ Lebensmittel anbieten</p>
          <p className="text-[5px] text-gray-400">Für Nachbarn verschenken</p>
        </div>
        <p className="text-[6px] font-black text-gray-400 px-1">MEINE ANGEBOTE</p>
        {[{e:'🍋',n:'Zitronen (5 Stück)',s:'Offen'},{e:'🌿',n:'Basilikum-Topf',s:'Abgeholt ✓'}].map(a => (
          <div key={a.n} className="flex items-center gap-1 bg-white rounded-xl px-1.5 py-1.5 border border-gray-100">
            <span className="text-[11px]">{a.e}</span>
            <p className="text-[6px] font-semibold text-gray-700 flex-1">{a.n}</p>
            <span className={`text-[5px] px-1 py-0.5 rounded-full font-medium ${a.s.includes('✓') ? 'bg-gray-100 text-gray-400' : 'bg-green-50 text-green-600 border border-green-200'}`}>{a.s}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Tab-Definitionen ──────────────────────────────────────────────────────────

type TabPhone = { label: string; caption: string; screen: React.ReactNode; src?: string }
type Tab = { id: string; label: string; title: string; bullets: string[]; phones: TabPhone[] }

const tabs: Tab[] = [
  {
    id: 'home', label: '🏠 Home', title: 'Alles auf einen Blick',
    bullets: [
      'Dashboard mit Vorrats-Übersicht und Ablaufwarnungen',
      'Schnellzugriff auf Einkauf, Wochenplan und KI-Rezepte',
      'Persönliche Statistiken und Haushalt-Status auf einen Blick',
      'Push-Benachrichtigungen für ablaufende Artikel',
    ],
    phones: [
      { label: 'home_screen', caption: 'Übersicht & Schnellzugriff', src: '/screenshots/home_screen.jpg', screen: <HomeScreen /> },
    ],
  },
  {
    id: 'vorrat', label: '📦 Vorrat', title: 'Vorrat immer im Griff',
    bullets: [
      'Barcode scannen oder manuell eingeben – in Sekunden',
      'MHD-Tracking mit farbigen Ablauf-Warnungen',
      'Kategorien-Ansicht: Kühlschrank, Tiefkühl, Vorratskammer',
      'Geöffnete Artikel tracken und Verbrauch protokollieren',
      'Geteilter Vorrat mit allen Haushaltsmitgliedern in Echtzeit',
    ],
    phones: [
      { label: 'vorrat_liste', caption: 'Liste mit MHD-Warnungen', src: '/screenshots/vorrat_liste.jpg', screen: <VorratListeScreen /> },
      { label: 'vorrat_kategorien', caption: 'Nach Kategorie gruppiert', src: '/screenshots/vorrat_kategorien.jpg', screen: <VorratKatScreen /> },
    ],
  },
  {
    id: 'einkauf', label: '🛒 Einkauf', title: 'Einkaufen leicht gemacht',
    bullets: [
      'Mehrere Listen – privat oder mit dem Haushalt geteilt',
      'Fehlende Rezept-Zutaten direkt auf die Liste',
      'Einkaufsmodus: übersichtlich, eine Hand, kein Scrollen',
      'Abgehakte Artikel werden automatisch zum Vorrat',
      'Kassenbon fotografieren – KI erkennt alle Produkte',
    ],
    phones: [
      { label: 'einkauf_liste', caption: 'Liste mit Mengenangaben', src: '/screenshots/einkauf_liste.jpg', screen: <EinkaufListeScreen /> },
      { label: 'einkauf_modus', caption: 'Optimiert fürs Einkaufen', src: '/screenshots/einkauf_modus.jpg', screen: <EinkaufModusScreen /> },
    ],
  },
  {
    id: 'kueche', label: '🍳 Küche & KI', title: 'KI-Rezepte & Wochenplanung',
    bullets: [
      '5 Rezepte gleichzeitig – aus deinem aktuellen Vorrat generiert',
      'Airfryer, OnePot, MealPrep, Vegan und viele weitere Tags',
      'Rezept-Detail mit Zutaten-Check und Schritt-für-Schritt Anleitung',
      'Fehlende Zutaten mit einem Klick auf die Einkaufsliste',
      'Wochenplaner: 7 Tage vorplanen, teilen oder als Vorlage speichern',
    ],
    phones: [
      { label: 'ki_rezepte', caption: '5 Vorschläge aus Vorrat', src: '/screenshots/ki_rezepte.jpg', screen: <KiRezepteScreen /> },
      { label: 'rezept_detail', caption: 'Zutaten & Zubereitung', src: '/screenshots/rezept_detail.jpg', screen: <RezeptDetailScreen /> },
      { label: 'wochenplan', caption: '7-Tage-Planung', src: '/screenshots/wochenplan.jpg', screen: <WochenplanScreen /> },
    ],
  },
  {
    id: 'haushalt', label: '👨‍👩‍👧 Haushalt', title: 'Gemeinsam kochen & planen',
    bullets: [
      'Haushalt per Einladungscode teilen – Familie & WG',
      'Geteilter Vorrat und gemeinsame Einkaufslisten in Echtzeit',
      'Haushalt-Chat: Schnellnachrichten und freier Text',
      'Sehe wer gerade einkauft oder was als nächstes gekocht wird',
      'Haushalts-Spitzname separat vom Community-Anzeigenamen',
    ],
    phones: [
      { label: 'haushalt_chat', caption: 'Mitglieder & Chat', src: '/screenshots/haushalt_chat.jpg', screen: <HaushaltsScreen /> },
      { label: 'haushalt_einladen', caption: 'Einladungscode teilen', src: '/screenshots/haushalt_einladen.jpg', screen: <HaushaltsInviteScreen /> },
    ],
  },
  {
    id: 'community', label: '🤝 Community', title: 'Lokale Community & Social Feed',
    bullets: [
      'Communities nach PLZ-Bereich – bis 50 Mitglieder',
      'Lebensmittelreste anbieten, Vorräte an Nachbarn verschenken',
      'Hilfe anfragen & anbieten ("Wer hat Zucker?")',
      'Social Feed: Posts mit verknüpften Rezepten & Wochenplänen',
      'Folgen, liken, kommentieren und nach @Username suchen',
    ],
    phones: [
      { label: 'community_feed', caption: 'Posts mit Rezept-Links', src: '/screenshots/community_feed.jpg', screen: <CommunityFeedScreen /> },
      { label: 'community_lokal', caption: 'Nachbarschafts-Hub', src: '/screenshots/community_lokal.jpg', screen: <CommunityLokalScreen /> },
      { label: 'community_teilen', caption: 'Reste & Angebote teilen', src: '/screenshots/community_teilen.jpg', screen: <CommunityTeilenScreen /> },
    ],
  },
]

// ── Haupt-Export ──────────────────────────────────────────────────────────────

export default function Screenshots() {
  const [active, setActive] = useState('home')
  const tab = tabs.find(t => t.id === active)!

  return (
    <section id="screenshots" className="bg-gray-50 py-28 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#56B4A0] text-sm font-semibold uppercase tracking-widest">App in Aktion</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">
            Sieh Kokomu in Aktion
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Jede Funktion durchdacht – intuitiv von Tag&nbsp;1.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs px-4 py-2 rounded-full">
            📸 Ersetze die Dummy-Screens durch echte Screenshots – Dateinamen siehe unten
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === t.id
                  ? 'bg-[#3D6B8F] text-white shadow-md scale-105'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-[#3D6B8F]/40 hover:text-[#3D6B8F]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">

              {/* Linke Seite: Text & Bullets */}
              <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">{tab.title}</h3>
                <ul className="space-y-3 mb-8">
                  {tab.bullets.map(b => (
                    <li key={b} className="flex items-start gap-3 text-left">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#56B4A0]/15 border border-[#56B4A0]/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#56B4A0] text-[9px] font-black">✓</span>
                      </span>
                      <span className="text-gray-600 text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                {/* Screenshot-Dateinamen als Hinweis */}
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 mb-2">📁 Screenshot-Dateien für diesen Tab:</p>
                  <div className="space-y-1">
                    {tab.phones.map(p => (
                      <div key={p.label} className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#3D6B8F] bg-[#3D6B8F]/5 px-2 py-0.5 rounded">
                          /public/screenshots/{p.label}.jpg
                        </span>
                        <span className="text-[10px] text-gray-400">{p.caption}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rechte Seite: Phone Mockups */}
              <div className="flex gap-4 md:gap-6 items-end justify-center flex-shrink-0 order-1 lg:order-2">
                {tab.phones.map((p, i) => {
                  // Mittleres Phone bei 3 leicht anheben
                  const lift = tab.phones.length === 3 && i === 1
                  return (
                    <div key={p.label} className={lift ? '-translate-y-6' : ''}>
                      <Phone
                        label={p.label}
                        caption={p.caption}
                        screen={p.screen}
                        src={p.src}
                      />
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-full transition-all duration-300 ${
                active === t.id
                  ? 'w-6 h-2 bg-[#3D6B8F]'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
