import type { ReactNode } from 'react'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

export function WhatsappButton({
  children,
  className,
  size = 'md',
  variant = 'primary',
}: {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'outline'
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-sm',
        size === 'lg' && 'px-7 py-4 text-base',
        variant === 'primary' &&
          'bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40',
        variant === 'outline' &&
          'border border-white/15 bg-white/5 text-foreground hover:border-white/30 hover:bg-white/10',
        className,
      )}
    >
      <MessageCircle
        className={cn(
          'transition-transform duration-200 group-hover:scale-110',
          size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',
        )}
      />
      {children}
    </a>
  )
}
