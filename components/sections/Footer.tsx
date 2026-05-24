import { Instagram, Phone, MapPin } from 'lucide-react'
import { DemoCTA } from '@/components/DemoModal'

const menu = [
  { l: 'Les entrées', h: '#carte' },
  { l: 'Les plats', h: '#carte' },
  { l: 'Les desserts', h: '#carte' },
  { l: 'Les formules', h: '#formules' },
]

const maison = [
  { l: 'La terrasse', h: '#atmosphere' },
  { l: 'Les Halles en face', h: '#halles' },
  { l: 'Les avis', h: '#avis' },
  { l: 'Nous trouver', h: '#localisation' },
]

export function Footer() {
  return (
    <footer className="bg-charbon-profond text-creme">
      <div className="wrap py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="nappe h-7 w-7 rounded-md" aria-hidden />
              <span className="font-display text-[1.8rem] font-bold italic text-creme">Chez Copains</span>
            </div>
            <p className="mt-5 max-w-xs font-sans text-[14px] font-light leading-relaxed text-creme/55">
              Le bistrot d&apos;en face. Cuisine maison, produits des Halles de Dijon, prix d&apos;avant. On vous
              attend autour du comptoir.
            </p>
          </div>

          {/* menu */}
          <nav aria-label="Le menu">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-moutarde">Le menu</p>
            <ul className="mt-5 space-y-3">
              {menu.map((m) => (
                <li key={m.l}>
                  <a href={m.h} className="font-sans text-[14px] font-light text-creme/60 transition-colors hover:text-creme">
                    {m.l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* maison */}
          <nav aria-label="La maison">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-moutarde">La maison</p>
            <ul className="mt-5 space-y-3">
              {maison.map((m) => (
                <li key={m.l}>
                  <a href={m.h} className="font-sans text-[14px] font-light text-creme/60 transition-colors hover:text-creme">
                    {m.l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact */}
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-moutarde">Contact</p>
            <ul className="mt-5 space-y-3 font-sans text-[14px] font-light text-creme/60">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-moutarde" />
                <span>10 Rue Quentin, 21000 Dijon</span>
              </li>
              <li>
                <a href="tel:0380402010" className="flex items-center gap-2.5 transition-colors hover:text-creme">
                  <Phone size={15} className="shrink-0 text-moutarde" />
                  03 80 40 20 10
                </a>
              </li>
              <li className="text-creme/45">Mar – Sam · midi &amp; soir</li>
            </ul>
            <DemoCTA
              ariaLabel="Instagram de Chez Copains"
              className="mt-5 inline-flex items-center gap-2 border border-creme/15 px-4 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-wide text-creme/80 transition-colors hover:border-moutarde hover:text-creme"
            >
              <Instagram size={15} />
              Suivez-nous
            </DemoCTA>
          </div>
        </div>
      </div>

      {/* bandeau anti-vol */}
      <div className="border-t border-creme/10">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-creme/40">
            © 2026 Chez Copains · Démo non contractuelle
          </p>
          <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-creme/40">
            Maquette réalisée par Maison Talyn ·{' '}
            <a
              href="https://instagram.com/maison.talyn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-moutarde hover:underline"
            >
              @maison.talyn
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
