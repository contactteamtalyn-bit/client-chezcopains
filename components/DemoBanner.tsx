export function DemoBanner() {
  return (
    <a
      href="https://instagram.com/maison.talyn"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-0 right-0 top-0 z-[60] block border-b border-moutarde bg-charbon text-center"
    >
      <p className="overflow-hidden whitespace-nowrap px-4 py-2.5 font-sans text-[10.5px] uppercase tracking-[0.14em] text-creme/90 sm:text-[11px] sm:tracking-[0.16em]">
        Maquette démo
        <span className="hidden md:inline"> · Réalisée par Maison Talyn pour Chez&nbsp;Copains</span>
        <span className="hidden lg:inline"> · Non finalisée</span>
        {' · '}
        <span className="text-moutarde">@maison.talyn</span>
      </p>
    </a>
  )
}
