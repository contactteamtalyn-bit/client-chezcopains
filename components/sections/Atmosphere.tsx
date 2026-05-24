'use client'

import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'

const faits = [
  { k: '30', v: 'couverts en terrasse, face au marché' },
  { k: '34', v: 'couverts en salle, autour du comptoir' },
  { k: 'Midi & soir', v: 'du mardi au samedi, sans interruption le service' },
]

export function Atmosphere() {
  return (
    <section id="atmosphere" className="bg-creme py-24 text-charbon md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow text-vin">← La terrasse</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold italic leading-tight text-charbon">
              Une terrasse,
              <br />
              face aux Halles.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-md font-sans text-[15px] font-light leading-relaxed text-charbon/70">
              Aux beaux jours, on déjeune dehors sous les platanes, le marché couvert juste en face. Dedans,
              c&apos;est l&apos;esprit bistrot : nappes vichy, comptoir en zinc, et le brouhaha des habitués qui
              se saluent par leur prénom.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 max-w-md font-sans text-[15px] font-light leading-relaxed text-charbon/70">
              On vient seul au comptoir, à deux pour le menu du soir, ou à dix pour fêter quelque chose. Ici,
              personne ne regarde sa montre.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4 border-t border-charbon/10 pt-7">
            {faits.map((f, i) => (
              <Reveal key={f.v} delay={220 + i * 70}>
                <div className="flex items-baseline gap-4">
                  <span className="w-28 shrink-0 font-display text-[1.6rem] font-bold italic leading-none text-vin">
                    {f.k}
                  </span>
                  <span className="font-sans text-[14px] font-light text-charbon/70">{f.v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* cluster photos */}
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-xl">
              <SmartImage src="/images/atmosphere/terrasse.jpg" alt="La terrasse de Chez Copains face aux Halles de Dijon" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <SmartImage src="/images/atmosphere/salle.jpg" alt="La salle bistrot et son comptoir en zinc" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <SmartImage src="/images/atmosphere/detail.jpg" alt="Détail de table : nappe vichy et couverts" fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
              <span className="nappe absolute bottom-3 left-3 h-9 w-9 rounded-md ring-2 ring-creme" aria-hidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
