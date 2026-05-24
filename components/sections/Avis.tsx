'use client'

import { Star } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'

type Avis = { texte: string; nom: string; contexte: string }

const avis: Avis[] = [
  {
    texte: "Le bœuf bourguignon est exactement comme celui de ma grand-mère. On se sent chez soi, et l'addition reste douce.",
    nom: 'Mathilde R.',
    contexte: 'Habituée du midi',
  },
  {
    texte: "Formule à 12,50€ le midi, fait maison, en face des Halles : imbattable dans Dijon. J'y emmène tous mes rendez-vous.",
    nom: 'Karim B.',
    contexte: 'Déjeuner de travail',
  },
  {
    texte: "Accueil au top, terrasse parfaite l'été. L'onglet à l'échalote et la mousse au chocolat valent vraiment le détour.",
    nom: 'Sophie & Laurent',
    contexte: 'Dîner en couple',
  },
]

export function Avis() {
  return (
    <section id="avis" className="bg-charbon py-24 text-creme md:py-28">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-moutarde">← Les avis</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold italic leading-tight text-creme">
                On revient
                <br />
                pour l&apos;ambiance.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="flex items-center gap-4 border border-creme/12 bg-charbon-card px-6 py-4">
              <span className="font-display text-[2.6rem] font-bold leading-none text-moutarde">4,4</span>
              <div>
                <div className="flex gap-0.5 text-moutarde">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-1 font-sans text-[12px] text-creme/55">
                  <CountUp to={948} /> avis Google
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={a.nom} delay={i * 90}>
              <figure className="flex h-full flex-col border border-creme/10 bg-charbon-card p-7">
                <div className="flex gap-0.5 text-moutarde">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 font-display text-[18px] italic leading-relaxed text-creme/90">
                  « {a.texte} »
                </blockquote>
                <figcaption className="mt-6 border-t border-creme/10 pt-4">
                  <p className="font-sans text-[14px] font-semibold text-creme">{a.nom}</p>
                  <p className="font-sans text-[12px] text-creme/50">{a.contexte}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
