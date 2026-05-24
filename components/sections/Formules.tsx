'use client'

import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

type Formule = {
  jours: string
  nom: string
  prix: string
  suffixe?: string
  lignes: string[]
  note?: string
  reco?: boolean
}

const formules: Formule[] = [
  {
    jours: 'Mardi → Vendredi',
    nom: 'La Formule Midi',
    prix: '12,50€',
    lignes: ['Le plat du jour, fait maison', 'Formule complète entrée + plat : 14,90€', 'Plat du jour à volonté : 14€', 'Café gourmand en supplément'],
    note: 'Service rapide pour la pause déjeuner.',
  },
  {
    jours: 'Mardi → Samedi',
    nom: 'Le Menu Soir',
    prix: '29€',
    lignes: ['1 entrée au choix sur la carte', '1 plat au choix sur la carte', '1 dessert maison au choix', 'Menu enfant : 9€'],
    note: 'L’expérience complète, le soir venu.',
    reco: true,
  },
  {
    jours: 'Toute la semaine',
    nom: 'Groupes & privatisation',
    prix: 'Sur mesure',
    suffixe: 'à partir de 10 couverts',
    lignes: ['Repas d’équipe & anniversaires', 'Privatisation salle (34) ou terrasse (30)', 'Menu adapté à votre budget', 'On s’occupe de tout'],
    note: 'Un événement à fêter ? Parlons-en.',
  },
]

export function Formules() {
  return (
    <section id="formules" className="bg-moutarde-clair py-24 text-charbon md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-vin">← Les formules</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold italic leading-tight text-charbon">
            Trois façons
            <br />
            de passer à table.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 max-w-md font-sans text-[15px] font-light leading-relaxed text-charbon/65">
            Les prix n&apos;ont pas bougé depuis l&apos;ouverture. Pas de menu piège, pas de supplément
            surprise — juste de la cuisine honnête.
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {formules.map((f, i) => (
            <Reveal key={f.nom} delay={i * 90}>
              <div
                className={cn(
                  'relative flex h-full flex-col p-8',
                  f.reco
                    ? 'bg-charbon text-creme shadow-2xl lg:-translate-y-3'
                    : 'border border-charbon/12 bg-creme text-charbon'
                )}
              >
                {f.reco && (
                  <span className="absolute -top-3 left-8 bg-moutarde px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wide text-charbon">
                    Le plus pris
                  </span>
                )}
                <span className={cn('font-sans text-[11px] font-bold uppercase tracking-[0.18em]', f.reco ? 'text-moutarde' : 'text-vin')}>
                  {f.jours}
                </span>
                <h3 className={cn('mt-3 font-display text-[1.7rem] italic leading-tight', f.reco ? 'text-creme' : 'text-charbon')}>
                  {f.nom}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-[2.6rem] font-bold leading-none text-moutarde">{f.prix}</span>
                  {f.suffixe && <span className={cn('font-sans text-[12px]', f.reco ? 'text-creme/55' : 'text-charbon/50')}>{f.suffixe}</span>}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {f.lignes.map((l) => (
                    <li key={l} className="flex items-start gap-2.5">
                      <Check size={16} className={cn('mt-0.5 shrink-0', f.reco ? 'text-moutarde' : 'text-vin')} />
                      <span className={cn('font-sans text-[14px] font-light leading-snug', f.reco ? 'text-creme/80' : 'text-charbon/75')}>
                        {l}
                      </span>
                    </li>
                  ))}
                </ul>

                {f.note && (
                  <p className={cn('mt-5 font-sans text-[12.5px] italic', f.reco ? 'text-creme/55' : 'text-charbon/50')}>{f.note}</p>
                )}

                <DemoCTA
                  ariaLabel={`Réserver — ${f.nom}`}
                  className={cn(
                    'mt-6 w-full py-3.5 text-center font-sans text-[13px] font-bold uppercase tracking-wide transition-transform hover:scale-[1.02]',
                    f.reco ? 'bg-moutarde text-charbon' : 'bg-charbon text-creme'
                  )}
                >
                  Réserver →
                </DemoCTA>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
