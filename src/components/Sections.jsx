import React from 'react'

function Section({ title, kicker, children }) {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6">
        {kicker && (
          <div className="text-[0.75rem] uppercase tracking-[0.2em] text-white/40 mb-4">{kicker}</div>
        )}
        <h2 className="text-2xl sm:text-3xl text-white/90 font-serif mb-4" style={{fontFamily:'var(--font-title-serif)'}}>{title}</h2>
        <div className="prose prose-invert prose-stone max-w-none">
          {children}
        </div>
      </div>
    </section>
  )
}

export function Logline() {
  return (
    <Section title="Logline" kicker="Fortælling">
      <p className="text-white/80 leading-relaxed">
        En ung kvinde forsøger at holde fast i kærligheden gennem skærmen, mens virkeligheden langsomt glider hende af hænde.
      </p>
    </Section>
  )
}

export function Synopsis() {
  return (
    <Section title="Kort synopsis" kicker="Handling">
      <p className="text-white/80 leading-relaxed">
        Ida og Jonas deler seng men ikke nærvær. Når de ikke kan finde ordene, bliver telefonens lysskær deres mellemværende. 
        En aften trækker notifikationer tråde mellem dem – blide, men ubønhørlige – og et stille brud tager form i skyggerne.
      </p>
    </Section>
  )
}

export function Cast() {
  return (
    <Section title="Cast" kicker="Medvirkende">
      <ul className="grid sm:grid-cols-2 gap-3 text-white/80">
        <li><span className="text-white/90">Ida</span> – Asta Holm</li>
        <li><span className="text-white/90">Jonas</span> – Emil Sand</li>
        <li><span className="text-white/90">Veninde (voice)</span> – Lea Nørregaard</li>
        <li><span className="text-white/90">Mor (voice)</span> – Trine Dahl</li>
      </ul>
    </Section>
  )
}

export function Crew() {
  return (
    <Section title="Crew" kicker="Hold">
      <ul className="grid sm:grid-cols-2 gap-3 text-white/80">
        <li><span className="text-white/90">Instruktør</span> – Ida Madsen</li>
        <li><span className="text-white/90">Manuskript</span> – Ida Madsen & Jonas Kirk</li>
        <li><span className="text-white/90">Fotograf</span> – Sara Leth</li>
        <li><span className="text-white/90">Klipper</span> – Mikkel Brandt</li>
        <li><span className="text-white/90">Lyd</span> – Oliver Thastum</li>
        <li><span className="text-white/90">Musik</span> – Sofie Holst</li>
        <li><span className="text-white/90">Colorist</span> – Katrine Mørk</li>
        <li><span className="text-white/90">Producer</span> – Nordlys Film</li>
      </ul>
    </Section>
  )
}

export function DirectorNote() {
  return (
    <Section title="Instruktørens note" kicker="Vision">
      <p className="text-white/80 leading-relaxed">
        Kh. Ida er en film om den skrøbelige intimitet i en digital hverdag. Om at ligge ved siden af et menneske, mens tanker og blikke vandrer ind i skærmens tyste rum. 
        Jeg ville skabe et rum, hvor berøring og afstand sameksisterer – hvor mørket er blødt, lyset dæmpet og tiden trækker vejret langsomt.
      </p>
    </Section>
  )
}

export function PressSponsors() {
  return (
    <Section title="Presse & sponsorer" kicker="Partnerskaber">
      <div className="text-white/80 space-y-3">
        <p>Pressekontakt: presse@kh-ida.film</p>
        <p>
          Støttet af: Dansk Filminstitut, DR Talent, Nordlys Film, samt private fonde.
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
          <div className="h-10 rounded bg-white/5 border border-white/10"></div>
          <div className="h-10 rounded bg-white/5 border border-white/10"></div>
          <div className="h-10 rounded bg-white/5 border border-white/10"></div>
          <div className="h-10 rounded bg-white/5 border border-white/10"></div>
        </div>
      </div>
    </Section>
  )
}

export function Contact() {
  return (
    <Section title="Kontakt" kicker="Henvendelser">
      <div className="text-white/80">
        <p>Email: kontakt@kh-ida.film</p>
        <p className="mt-2 text-white/60 text-sm">For visningslink, pressebilleder og festivalbooking.</p>
      </div>
    </Section>
  )
}
