import { Hero } from '@/components/sections/Hero'
import { StatStrip } from '@/components/sections/StatStrip'
import { LaPromesse } from '@/components/sections/LaPromesse'
import { LaCarte } from '@/components/sections/LaCarte'
import { HallesEnFace } from '@/components/sections/HallesEnFace'
import { Atmosphere } from '@/components/sections/Atmosphere'
import { Avis } from '@/components/sections/Avis'
import { Formules } from '@/components/sections/Formules'
import { Reservation } from '@/components/sections/Reservation'
import { Localisation } from '@/components/sections/Localisation'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <StatStrip />
        <LaPromesse />
        <LaCarte />
        <HallesEnFace />
        <Atmosphere />
        <Avis />
        <Formules />
        <Reservation />
        <Localisation />
      </main>
      <Footer />
    </>
  )
}
