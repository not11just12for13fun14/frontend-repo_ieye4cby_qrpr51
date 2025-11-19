import React from 'react'

function LockScreenTime() {
  return (
    <div className="text-white/95 select-none text-center">
      <div className="text-[5rem] leading-none font-light tracking-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]">
        21:34
      </div>
      <div className="mt-1 text-sm text-white/70">
        onsdag 13. marts
      </div>
    </div>
  )
}

function NotificationPill({ title, body }) {
  return (
    <div className="mx-auto max-w-md backdrop-blur-md bg-white/5 border border-white/10 text-white rounded-2xl px-4 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.35)]">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-xs">i</div>
        <div className="flex-1">
          <div className="text-[0.8rem] font-medium text-white/90">{title}</div>
          <div className="text-[0.8rem] text-white/70 leading-snug">{body}</div>
        </div>
        <div className="text-[0.7rem] text-white/60">nu</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background: soft textile folds suggested via layered gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-neutral-900 to-stone-900" />
        {/* Subtle organic folds */}
        <div className="absolute inset-0 opacity-[0.65] mix-blend-overlay" style={{
          backgroundImage: `radial-gradient(1200px_400px at 20% 30%, rgba(255,255,255,0.06), transparent 60%),
                            radial-gradient(1000px_380px at 70% 60%, rgba(255,255,255,0.045), transparent 60%),
                            radial-gradient(900px_320px at 40% 80%, rgba(255,255,255,0.035), transparent 60%)`
        }} />
        {/* Grain + vignette */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6))]" />
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'64\' height=\'64\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\'/><feColorMatrix type=\'saturate\' values=\'0\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.5\'/></svg>")',
            backgroundSize: '256px 256px'
          }} />
        </div>
      </div>

      {/* Phone glass reflection */}
      <div className="absolute inset-[8%] rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-white/2 to-white/0 backdrop-blur-[2px] shadow-[inset_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_rgba(0,0,0,0.5)]" />

      <div className="relative z-10 max-w-5xl w-full px-6">
        <div className="flex flex-col items-center gap-6">
          <LockScreenTime />

          <div className="text-center mt-2">
            <h1 className="font-[var(--font-title-serif)] text-white tracking-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)]" style={{
              fontFamily: 'var(--font-title-serif)'
            }}>
              <span className="block text-5xl sm:text-6xl md:text-7xl leading-[0.95]">Kh. Ida</span>
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Et hjemligt, melankolsk øjeblik fanget mellem nærhed, fravær og teknologi.
            </p>
          </div>

          <div className="mt-6">
            <NotificationPill title="Påmindelse" body="Se teaser og tilmeld dig opdateringer om festivalpremieren." />
          </div>
        </div>

        {/* Bottom glass blur to suggest portrait behind screen */}
        <div className="mt-12 h-56 sm:h-64 md:h-72 relative">
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/50 via-black/30 to-transparent backdrop-blur-[6px] rounded-3xl" />
          <div className="absolute inset-0 rounded-3xl border border-white/5" />
        </div>
      </div>

      {/* Subtle side glow */}
      <div className="pointer-events-none absolute -left-20 top-1/3 w-72 h-72 rounded-full blur-3xl bg-amber-900/20" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 w-72 h-72 rounded-full blur-3xl bg-blue-900/20" />
    </section>
  )
}
