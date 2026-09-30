import { SiteHeader } from '@/components/site-header'
import { FloatingWhatsapp } from '@/components/floating-whatsapp'
import { ChapterRail } from '@/components/chapter-rail'
import { Hero } from '@/components/sections/hero'
import { Pain } from '@/components/sections/pain'
import { Solution } from '@/components/sections/solution'
import { Comparison } from '@/components/sections/comparison'
import { Authority } from '@/components/sections/authority'
import { FinalCta } from '@/components/sections/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <ChapterRail />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <Comparison />
        <Authority />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingWhatsapp />
    </>
  )
}
