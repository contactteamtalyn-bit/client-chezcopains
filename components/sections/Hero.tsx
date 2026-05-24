'use client'

import { useEffect, useRef } from 'react'
import RotatingText from '@/components/ui/RotatingText'
import ShinyText from '@/components/ui/ShinyText'
import { SmartImage } from '@/components/ui/SmartImage'
import { useDemoModal } from '@/components/DemoModal'

const DOT_SPACING = 25
const BASE_OPACITY_MIN = 0.35
const BASE_OPACITY_MAX = 0.5
const INTERACTION_RADIUS = 150

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const { open } = useDemoModal()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const parent = canvas.parentElement
    if (!parent) return

    let raf = 0
    let dots: { x: number; y: number; base: number }[] = []

    const build = () => {
      const w = parent.clientWidth
      const h = parent.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      for (let y = DOT_SPACING / 2; y < h; y += DOT_SPACING) {
        for (let x = DOT_SPACING / 2; x < w; x += DOT_SPACING) {
          dots.push({ x, y, base: BASE_OPACITY_MIN + Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) })
        }
      }
    }

    const draw = () => {
      const w = parent.clientWidth
      const h = parent.clientHeight
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        const dx = d.x - mouse.current.x
        const dy = d.y - mouse.current.y
        const dist = Math.hypot(dx, dy)
        let op = d.base
        if (dist < INTERACTION_RADIUS) op = Math.min(1, d.base + (1 - dist / INTERACTION_RADIUS) * 0.7)
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(196, 160, 23, ${op})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 }
    }

    build()
    draw()
    window.addEventListener('resize', build)
    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', build)
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-charbon pb-16 pt-[140px] md:pt-[118px]"
    >
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: 'radial-gradient(80% 55% at 50% 0%, rgba(196,160,23,0.10), transparent 70%)' }}
      />

      <div className="wrap relative z-10 flex flex-col items-center text-center">
        <div className="animate-fade-up">
          <ShinyText
            text="Mar–Sam · Midi & Soir · En face des Halles"
            className="rounded-full border border-moutarde/40 bg-[#2A2018] px-5 py-2 font-sans text-[12px] font-medium text-moutarde"
          />
        </div>

        <h1 className="mt-7 font-display text-5xl font-bold text-creme lg:text-6xl" style={{ lineHeight: 1.05 }}>
          La cuisine
          <br />
          des copains,
          <br />
          <RotatingText
            texts={['Fait maison.', 'Du marché.', 'Sans chichi.', 'Bourguignon.', 'Entre amis.']}
            mainClassName="text-moutarde"
          />
        </h1>

        <p className="mt-7 max-w-xl font-sans text-[17px] font-light leading-relaxed text-creme/70">
          Bistrot traditionnel au cœur de Dijon. Nos produits arrivent chaque matin des Halles d&apos;en face.
          Menu midi dès 12,50€, formule soir à 29€. Terrasse avec vue.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <div className="rounded border border-moutarde/30 bg-[#2A1F14] px-5 py-3 text-sm font-medium text-moutarde">
            📞 03 80 40 20 10
          </div>
          <button
            onClick={open}
            className="rounded bg-moutarde px-6 py-3 text-sm font-bold text-charbon transition hover:bg-moutarde-vif"
          >
            Réserver une table →
          </button>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-sm text-creme/50">
          <span>⭐ 4,4 Google</span>
          <span className="text-creme/30">·</span>
          <span>948 avis</span>
          <span className="text-creme/30">·</span>
          <span>Fait maison</span>
          <span className="text-creme/30">·</span>
          <span>Ouvert mar-sam</span>
        </div>

        <div className="mt-12 w-full max-w-3xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-moutarde/20 shadow-2xl">
            <SmartImage
              src="/images/hero/salle.jpg"
              alt="La salle de Chez Copains, Dijon"
              fill
              priority
              sizes="(max-width:768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
