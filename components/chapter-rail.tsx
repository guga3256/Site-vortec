'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const CHAPTERS = [
  { id: 'topo', label: 'Início' },
  { id: 'problema', label: 'O Problema' },
  { id: 'metodo', label: 'O Método' },
  { id: 'comparativo', label: 'Antes & Depois' },
  { id: 'autoridade', label: 'A Vortec' },
  { id: 'contato', label: 'Diagnóstico' },
]

export function ChapterRail() {
  const [active, setActive] = useState('topo')

  useEffect(() => {
    // A seção que cruza o meio da tela é o capítulo atual.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    for (const { id } of CHAPTERS) {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [])

  return (
    <nav
      aria-label="Capítulos"
      className="pointer-events-none fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ol className="group relative flex flex-col gap-5 pl-5">
        {/* Trilho + preenchimento ligado ao progresso da página */}
        <span
          aria-hidden
          className="absolute top-1 bottom-1 left-0 w-px bg-white/10"
        />
        <span
          aria-hidden
          className="absolute top-1 bottom-1 left-0 w-px origin-top bg-primary"
          style={{ transform: 'scaleY(var(--scroll, 0))' }}
        />

        {CHAPTERS.map(({ id, label }, i) => {
          const current = active === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={current ? 'step' : undefined}
                className={cn(
                  'pointer-events-auto flex items-center gap-2.5 text-xs transition-colors duration-300',
                  current
                    ? 'text-foreground'
                    : 'text-muted-foreground/45 hover:text-muted-foreground',
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'h-px transition-all duration-500',
                    current ? 'w-5 bg-primary' : 'w-2.5 bg-white/20',
                  )}
                />
                <span className="font-mono text-[10px] tabular-nums">
                  {String(i).padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'tracking-tight whitespace-nowrap transition-all duration-500',
                    // Abaixo de 1600px o rótulo só aparece no hover: o trilho
                    // não pode encostar no conteúdo.
                    '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100',
                    current && 'min-[1600px]:translate-x-0 min-[1600px]:opacity-100',
                  )}
                >
                  {label}
                </span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
