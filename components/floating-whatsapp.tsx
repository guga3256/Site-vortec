'use client'

import { useEffect, useState } from 'react'
import { WhatsappButton } from '@/components/whatsapp-button'
import { cn } from '@/lib/utils'

export function FloatingWhatsapp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9
      const nearFooter =
        window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 900
      setVisible(pastHero && !nearFooter)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed right-5 bottom-5 z-40 transition-all duration-300',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
      aria-hidden={!visible}
    >
      <WhatsappButton size="lg" className="shadow-2xl shadow-primary/30">
        Falar no WhatsApp
      </WhatsappButton>
    </div>
  )
}
