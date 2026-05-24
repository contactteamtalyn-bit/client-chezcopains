'use client'

import { useEffect, useState } from 'react'
import { DemoCTA } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

const links = [
  { label: 'La Carte', href: '#carte' },
  { label: 'La Terrasse', href: '#atmosphere' },
  { label: 'Les Halles', href: '#halles' },
  { label: 'Réservation', href: '#reservation' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-[38px] z-50 transition-colors duration-300',
        scrolled ? 'border-b border-moutarde/15 bg-charbon/90 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="wrap-wide flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-[22px] italic text-creme">
          Chez <span className="text-moutarde">Copains</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-sans text-[13px] font-medium tracking-wide text-creme/70 transition-colors hover:text-moutarde"
            >
              {l.label}
            </a>
          ))}
        </div>

        <DemoCTA
          ariaLabel="Réserver une table"
          className="bg-moutarde px-5 py-2.5 font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-charbon transition-colors duration-300 hover:bg-moutarde-vif"
        >
          Réserver · 03 80 40 20 10
        </DemoCTA>
      </nav>
    </header>
  )
}
