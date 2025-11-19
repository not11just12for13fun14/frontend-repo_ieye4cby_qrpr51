import React from 'react'
import Hero from './components/Hero'
import { Logline, Synopsis, Cast, Crew, DirectorNote, PressSponsors, Contact } from './components/Sections'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Global soft vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.05),transparent_50%)]" />

      {/* Typography variables */}
      <style>{`
        :root { --font-title-serif: 'Cormorant Garamond', 'Times New Roman', serif; }
      `}</style>

      {/* Head fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet" />

      <Hero />
      <Logline />
      <Synopsis />
      <Cast />
      <Crew />
      <DirectorNote />
      <PressSponsors />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
