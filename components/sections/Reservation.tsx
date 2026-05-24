import { Phone, MapPin } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

const horaires = [
  { j: 'Lundi', h: 'Fermé', off: true },
  { j: 'Mardi', h: '12h – 14h · 19h – 22h' },
  { j: 'Mercredi', h: '12h – 14h · 19h – 22h' },
  { j: 'Jeudi', h: '12h – 14h · 19h – 22h' },
  { j: 'Vendredi', h: '12h – 14h · 19h – 22h' },
  { j: 'Samedi', h: '12h – 14h · 19h – 22h30' },
  { j: 'Dimanche', h: 'Fermé', off: true },
]

export function Reservation() {
  return (
    <section id="reservation" className="flex min-h-[72vh] items-center bg-charbon-profond py-24 text-creme md:py-28">
      <div className="wrap grid w-full gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <p className="eyebrow text-moutarde">← Réserver</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold italic leading-tight text-creme">
              On vous garde
              <br />
              une table ?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-md font-sans text-[15px] font-light leading-relaxed text-creme/60">
              Le plus simple, c&apos;est un coup de fil. On répond pendant le service et on note tout sur le
              cahier — comme avant.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <a
              href="tel:0380402010"
              className="mt-8 flex items-center gap-4 transition-opacity hover:opacity-80"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-moutarde text-charbon">
                <Phone size={20} />
              </span>
              <span className="font-display text-[2rem] font-bold italic leading-none text-creme sm:text-[2.4rem]">
                03 80 40 20 10
              </span>
            </a>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <DemoCTA
                ariaLabel="Réserver une table en ligne"
                className="bg-moutarde px-7 py-3.5 font-sans text-[13px] font-bold uppercase tracking-wide text-charbon transition-transform hover:scale-[1.02]"
              >
                Réserver en ligne →
              </DemoCTA>
              <span className="inline-flex items-center gap-2 font-sans text-[13px] text-creme/55">
                <MapPin size={15} className="text-moutarde" />
                10 Rue Quentin, 21000 Dijon
              </span>
            </div>
          </Reveal>
        </div>

        {/* horaires */}
        <Reveal delay={140}>
          <div className="border border-creme/12 bg-charbon-card p-8 sm:p-10">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-moutarde">Horaires</p>
            <ul className="mt-6 divide-y divide-creme/10">
              {horaires.map((d) => (
                <li key={d.j} className="flex items-center justify-between py-3">
                  <span className="font-sans text-[14px] font-medium text-creme/85">{d.j}</span>
                  <span
                    className={
                      d.off
                        ? 'font-sans text-[13px] uppercase tracking-wide text-vin/80'
                        : 'font-sans text-[13.5px] font-light text-creme/65'
                    }
                  >
                    {d.h}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-creme/10 pt-5 font-sans text-[12.5px] font-light italic text-creme/45">
              Fermé dimanche et lundi. Dernier service à 22h (22h30 le samedi).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
