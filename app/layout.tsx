import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { DemoModalProvider } from '@/components/DemoModal'
import { DemoBanner } from '@/components/DemoBanner'
import { Navigation } from '@/components/Navigation'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
  adjustFontFallback: false,
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Chez Copains — Bistrot traditionnel · Dijon · En face des Halles',
  description:
    'Bistrot traditionnel au cœur de Dijon, en face des Halles. Fait maison, produits des Halles, bons vins. Menu midi dès 12,50€, menu soir 29€. 4,4★ · 948 avis.',
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${jakarta.variable} font-sans bg-charbon text-creme antialiased`}>
        <DemoModalProvider>
          <DemoBanner />
          <Navigation />
          {children}
        </DemoModalProvider>
      </body>
    </html>
  )
}
