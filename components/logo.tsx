import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  withTagline = false,
}: {
  className?: string
  withTagline?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <VortecMark className="h-7 w-7" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight text-foreground">
          vortec
        </span>
        {withTagline && (
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Marketing &amp; Soluções
          </span>
        )}
      </span>
    </span>
  )
}

// Símbolo oficial da marca Vortec
export function VortecMark({ className }: { className?: string }) {
  return (
    <Image
      src="/vortec-mark.png"
      alt="Vortec"
      width={561}
      height={564}
      priority
      className={cn('object-contain', className)}
    />
  )
}
