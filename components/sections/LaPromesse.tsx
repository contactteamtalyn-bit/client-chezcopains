import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

export function LaPromesse() {
  return (
    <section className="bg-creme py-20 text-charbon md:py-24">
      <div className="wrap grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-moutarde">← Notre philosophie</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold italic leading-tight text-charbon">
              Pas de chichi.
              <br />
              Que du bon.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 font-sans text-[16px] font-light leading-[1.7] text-charbon/75">
              Chez Copains, c&apos;est la table que vous cherchiez depuis toujours. Celle où le bœuf bourguignon
              est vraiment bourguignon, où la terrine est vraiment de la maison, et où le plat du jour change
              tous les jours parce qu&apos;on fait les courses tous les matins.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 font-sans text-[16px] font-light leading-[1.7] text-charbon/75">
              Nos fournisseurs sont à dix mètres — les Halles de Dijon, d&apos;en face. Chez Chenu pour la
              viande, chez Au Gas Normand pour les fromages. Rien n&apos;arrive par camion frigorifique.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="bg-charbon px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-wide text-moutarde">Fait Maison</span>
              <span className="bg-vin px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-wide text-creme">Produits locaux</span>
              <span className="bg-moutarde px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-wide text-charbon">Menu du jour</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-moutarde/30 bg-vin-clair" style={{ transform: 'rotate(-1deg)' }}>
            <SmartImage src="/images/promesse/bourguignon.jpg" alt="Le bœuf bourguignon maison de Chez Copains" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
