// ─── StatsBar ────────────────────────────────────────────────────────────────
export default function StatsBar() {
  const stats = [
    { n: '4.4★', l: 'Google Reviews' },
    { n: '83',   l: 'Reseñas verificadas' },
    { n: '11 PM',l: 'Hora de cierre' },
    { n: 'Km 1', l: 'Vía Chimita' },
  ]
  return (
    <div className="grid grid-cols-4 border-t border-b border-[#1a1a1a]">
      {stats.map((s, i) => (
        <div key={i} className={`py-5 text-center ${i < 3 ? 'border-r border-[#1a1a1a]' : ''}`}>
          <div className="font-serif text-2xl font-normal text-[#D4A017]">{s.n}</div>
          <div className="text-[10px] font-light text-[#444] tracking-widest uppercase mt-1">{s.l}</div>
        </div>
      ))}
    </div>
  )
}
