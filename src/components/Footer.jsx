import React from 'react'

export default function Footer(){
  return (
    <footer className="relative py-12">
      <div className="max-w-5xl mx-auto px-6 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Kh. Ida — En kortfilm. Alle rettigheder forbeholdes.
      </div>
    </footer>
  )
}
