'use client'

import { Reveal } from '@/components/ui/Reveal'

type Fournisseur = {
  num: string
  nom: string
  metier: string
  produit: string
  detail: string
}

const fournisseurs: Fournisseur[] = [
  {
    num: '01',
    nom: 'Boucherie Chenu',
    metier: 'Boucher · Halle centrale',
    produit: 'Charolaise & steak haché du jour',
    detail: "Didier Chenu fournit l'onglet, le steak haché du Copain Burger et la viande du bourguignon. Race charolaise, jamais surgelée.",
  },
  {
    num: '02',
    nom: 'Au Gas Normand',
    metier: 'Fromager affineur · Les Halles',
    produit: 'Plateau de fromages affinés',
    detail: 'Nos trois fromages changent chaque semaine selon les affinages. Sélectionnés le matin, juste en face.',
  },
  {
    num: '03',
    nom: 'Les primeurs des Halles',
    metier: 'Maraîchers · Carreau du marché',
    produit: 'Légumes & girolles de saison',
    detail: "Girolles, échalotes du Val de Loire, herbes fraîches : la carte suit l'arrivage du marché, pas l'inverse.",
  },
]

export function HallesEnFace() {
  return (
    <section id="halles" className="relative overflow-hidden bg-moutarde py-24 text-charbon md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-vin">← Les Halles, en face</p>
        </Reveal>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal delay={60}>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold italic leading-tight text-charbon">
              Nos fournisseurs
              <br />
              sont nos voisins.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md font-sans text-[15px] font-light leading-relaxed text-charbon/75">
              Les Halles de Dijon — le marché couvert dessiné par Gustave Eiffel en 1875 — sont juste de
              l&apos;autre côté de la rue. On y achète la viande, les fromages et les légumes le matin même.
              Dix mètres séparent l&apos;étal de l&apos;assiette.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Mini-plan */}
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-charbon-profond p-5">
              {/* trame de fond */}
              <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #FAF7F0 1px, transparent 1px), linear-gradient(to bottom, #FAF7F0 1px, transparent 1px)',
                  backgroundSize: '34px 34px',
                }}
                aria-hidden
              />
              {/* la rue */}
              <div
                className="absolute left-0 right-0 top-1/2 h-[14%] -translate-y-1/2 bg-creme/[0.07]"
                aria-hidden
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-[9px] uppercase tracking-[0.3em] text-creme/35">
                Rue Quentin
              </span>

              {/* bloc Halles */}
              <div className="absolute left-[8%] top-[10%] flex h-[34%] w-[46%] flex-col justify-center border border-creme/30 bg-creme/[0.04] px-4">
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-creme/45">Marché couvert</span>
                <span className="mt-1 font-display text-[15px] italic leading-tight text-creme">Les Halles de Dijon</span>
                <span className="mt-1 font-sans text-[10px] text-creme/40">Eiffel · 1875</span>
              </div>

              {/* bloc Chez Copains */}
              <div className="absolute bottom-[11%] right-[9%] flex h-[30%] w-[40%] flex-col justify-center bg-vin px-4">
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-creme/70">Vous êtes ici</span>
                <span className="mt-1 font-display text-[15px] italic leading-tight text-creme">Chez Copains</span>
                <span className="mt-1 font-sans text-[10px] text-creme/55">10 Rue Quentin</span>
              </div>

              {/* halo pulsant sur Chez Copains */}
              <span className="absolute bottom-[24%] right-[26%] h-3 w-3 rounded-full bg-moutarde animate-pulse-soft" aria-hidden />

              {/* badge distance */}
              <span className="absolute left-1/2 top-[57%] -translate-x-1/2 rounded-full bg-moutarde px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wide text-charbon shadow-lg">
                10 mètres
              </span>
            </div>
          </Reveal>

          {/* fournisseurs */}
          <div className="flex flex-col gap-px overflow-hidden rounded-xl bg-charbon/10">
            {fournisseurs.map((f, i) => (
              <Reveal key={f.nom} delay={i * 80}>
                <div className="flex h-full items-start gap-5 bg-moutarde-clair p-6 sm:p-7">
                  <span className="font-display text-[2rem] font-bold italic leading-none text-vin/70">{f.num}</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-[20px] italic text-charbon">{f.nom}</h3>
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-wide text-vin">{f.metier}</span>
                    </div>
                    <p className="mt-2 font-sans text-[13px] font-bold uppercase tracking-wide text-charbon/70">{f.produit}</p>
                    <p className="mt-2 font-sans text-[13.5px] font-light leading-relaxed text-charbon/70">{f.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
