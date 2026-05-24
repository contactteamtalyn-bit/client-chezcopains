'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/Reveal'

type Plat = { n: string; d: string; p: string }

const entrees: Plat[] = [
  { n: 'Œufs mayonnaise fermiers', d: 'Les œufs viennent directement des producteurs des Halles.', p: '9€' },
  { n: 'Terrine de campagne maison', d: 'Préparée ici chaque semaine selon la recette du gérant.', p: '9€' },
  { n: 'Tartelette aux girolles', d: 'Selon arrivage du marché. Disponible en saison.', p: '9€' },
  { n: 'Œufs en meurette au vin rouge', d: 'La signature bourguignonne. Vin rouge de Bourgogne, lardons, champignons.', p: '9€' },
]

const plats: Plat[] = [
  { n: 'Le Copain Burger', d: 'Le burger de la maison. Steak haché Chenu, fromage affiné, frites maison.', p: '19€' },
  { n: "Onglet à l'échalote Didier Chenu", d: "Viande de race charolaise de la boucherie Chenu. L'échalote vient du Val de Loire.", p: '19€' },
  { n: 'Bœuf bourguignon maison', d: 'Mijoté 4h, vin de Bourgogne, lardons, champignons. La vraie recette.', p: '19€' },
  { n: 'Cordon bleu maison', d: 'Plat du jour fréquent. Escalope de poulet, jambon fumé, gruyère de Savoie.', p: '19€' },
  { n: 'Couscous merguez-poulet', d: "Spécialité du jeudi. Recette transmise par l'équipe.", p: '19€' },
]

const desserts: Plat[] = [
  { n: 'Mousse au chocolat maison', d: 'Chocolat noir 70%, œufs fermiers. Faite le matin même.', p: '8€' },
  { n: 'Profiteroles maison', d: 'Choux maison, crème vanillée, chocolat fondu.', p: '8€' },
  { n: 'Sélection de fromages affinés', d: 'Choix de 3 fromages de la fromagerie Au Gas Normand des Halles.', p: '8€' },
]

const tabs = ['Entrées', 'Plats', 'Desserts']

function Grille({ items }: { items: Plat[] }) {
  return (
    <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
      {items.map((it) => (
        <div key={it.n} className="flex items-baseline justify-between gap-4 border-b border-creme/10 pb-5">
          <div>
            <h3 className="font-display text-[20px] italic text-creme">{it.n}</h3>
            <p className="mt-1.5 font-sans text-[13px] font-light leading-relaxed text-creme/55">{it.d}</p>
          </div>
          <span className="shrink-0 font-sans text-[16px] font-bold text-moutarde">{it.p}</span>
        </div>
      ))}
    </div>
  )
}

export function LaCarte() {
  const [tab, setTab] = useState(0)
  return (
    <section id="carte" className="bg-charbon py-24 text-creme md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-moutarde">← La carte</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold italic leading-tight text-creme">
            Ce qu&apos;on mange
            <br />
            chez nous.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 max-w-md font-sans text-[15px] font-light text-creme/60">
            Tout est fait maison. La carte change selon le marché. Les prix n&apos;ont pas changé depuis
            l&apos;ouverture.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-3">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={cn(
                'px-5 py-2.5 font-sans text-[13px] font-semibold uppercase tracking-wide transition-colors',
                tab === i ? 'bg-moutarde text-charbon' : 'border border-moutarde/30 text-creme/80 hover:border-moutarde'
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="relative mt-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {tab === 0 && <Grille items={entrees} />}
              {tab === 1 && <Grille items={plats} />}
              {tab === 2 && <Grille items={desserts} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
