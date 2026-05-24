'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'

interface DemoCtx {
  open: () => void
}

const Ctx = createContext<DemoCtx | null>(null)

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Ctx.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-moutarde">
            Maquette démonstration
          </p>
          <DialogTitle>Activé après finalisation</DialogTitle>
          <DialogDescription className="mt-3">
            Ce bouton sera activé une fois le site finalisé avec Maison Talyn. Ce que vous consultez est une
            maquette de démonstration — tout est 100% modifiable selon vos goûts.
          </DialogDescription>
          <p className="mt-6 border-t border-creme/15 pt-5 font-sans text-[13px] text-creme/85">
            Contact :{' '}
            <a
              href="https://instagram.com/maison.talyn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-moutarde underline underline-offset-2"
            >
              @maison.talyn
            </a>
          </p>
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  )
}

export function useDemoModal(): DemoCtx {
  const ctx = useContext(Ctx)
  return ctx ?? { open: () => {} }
}

interface DemoCTAProps {
  children: ReactNode
  className?: string
  ariaLabel?: string
}

export function DemoCTA({ children, className, ariaLabel }: DemoCTAProps) {
  const { open } = useDemoModal()
  return (
    <button type="button" aria-label={ariaLabel} onClick={open} className={className}>
      {children}
    </button>
  )
}
