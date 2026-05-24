import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

const stats: { to?: number; suffix?: string; value?: string; label: string }[] = [
  { to: 948, label: 'Avis Google · 4,4★' },
  { value: '34+30', label: 'Couverts Salle · Terrasse' },
  { value: '12,50€', label: 'Formule midi · Dès' },
  { to: 100, suffix: '%', label: 'Fait Maison · Produits frais' },
]

export function StatStrip() {
  return (
    <section className="bg-moutarde text-charbon">
      <div className="grid grid-cols-2 gap-px bg-charbon/20 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={i}
            delay={i * 70}
            className="flex min-h-[120px] flex-col items-center justify-center bg-moutarde px-4 py-8 text-center"
          >
            {s.to != null ? (
              <CountUp to={s.to} suffix={s.suffix} className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-charbon" />
            ) : (
              <span className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-charbon">{s.value}</span>
            )}
            <span className="mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-charbon/70">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
