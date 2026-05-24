import { MapPin, Phone, Clock, Train } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const acces = [
  { icon: MapPin, t: 'Face aux Halles', d: 'Le marché couvert (Eiffel) est juste de l’autre côté de la rue.' },
  { icon: Train, t: 'Tram Godrans', d: 'Lignes T1 / T2, arrêt Godrans à 3 min à pied.' },
  { icon: Clock, t: 'Parking Dauphine', d: 'À 150 m. Place de la Libération à 5 min.' },
]

export function Localisation() {
  return (
    <section id="localisation" className="bg-creme py-24 text-charbon md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-vin">← Nous trouver</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold italic leading-tight text-charbon">
            Au pied
            <br />
            des Halles.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col">
            <Reveal delay={120}>
              <div className="border border-charbon/12 bg-moutarde-clair p-8">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-vin">Adresse</p>
                <p className="mt-3 font-display text-[1.5rem] italic leading-tight text-charbon">
                  10 Rue Quentin
                  <br />
                  21000 Dijon
                </p>
                <a
                  href="tel:0380402010"
                  className="mt-5 inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-charbon transition-opacity hover:opacity-70"
                >
                  <Phone size={16} className="text-vin" />
                  03 80 40 20 10
                </a>
              </div>
            </Reveal>

            <div className="mt-5 grid flex-1 gap-px overflow-hidden rounded-lg bg-charbon/10 sm:grid-cols-1">
              {acces.map((a, i) => (
                <Reveal key={a.t} delay={160 + i * 70}>
                  <div className="flex h-full items-start gap-4 bg-creme p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charbon text-moutarde">
                      <a.icon size={17} />
                    </span>
                    <div>
                      <p className="font-sans text-[14px] font-bold text-charbon">{a.t}</p>
                      <p className="mt-0.5 font-sans text-[13px] font-light leading-snug text-charbon/65">{a.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={140}>
            <div className="h-full min-h-[360px] overflow-hidden rounded-xl border border-charbon/12">
              <iframe
                title="Plan d’accès — Chez Copains, 10 Rue Quentin, Dijon"
                src="https://maps.google.com/maps?q=10%20Rue%20Quentin%2C%2021000%20Dijon&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[360px] w-full grayscale-[0.2]"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
