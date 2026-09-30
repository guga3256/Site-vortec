'use client'

import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ *
 * Um único listener de scroll para a página inteira.
 * Cada componente registra um callback; tudo roda num rAF só.
 * ------------------------------------------------------------------ */
const subs = new Set<() => void>()
let frame = 0

function flush() {
  frame = 0
  for (const s of subs) s()
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(flush)
}

/** Registra um callback no ticker compartilhado. Devolve o cancelamento. */
export function onScrollFrame(fn: () => void) {
  subs.add(fn)
  if (subs.size === 1) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  }
  fn()
  return () => {
    subs.delete(fn)
    if (!subs.size) {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }
}

export function useScrollFrame(fn: () => void) {
  const latest = useRef(fn)
  latest.current = fn
  useEffect(() => onScrollFrame(() => latest.current()), [])
}

/** Progresso 0→1 da rolagem dentro de uma seção presa (`h-[Nvh]` + filho sticky). */
export function pinProgress(el: HTMLElement | null) {
  if (!el) return 0
  const { top, height } = el.getBoundingClientRect()
  const span = height - window.innerHeight
  if (span <= 0) return 0
  return Math.min(Math.max(-top / span, 0), 1)
}

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Seção presa: a altura extra vira o trilho da cena e o progresso sai em `--p`
 * (0→1) para os filhos usarem em CSS puro. Os filhos chegam prontos do
 * servidor — só esta casca hidrata.
 *
 * Sem trilho (mobile, onde a seção tem altura automática) `--p` vale 1: a cena
 * já nasce montada em vez de ficar invisível.
 */
export function Pin({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)

  useScrollFrame(() => {
    const el = ref.current
    if (!el) return
    const { top, height } = el.getBoundingClientRect()
    const span = height - window.innerHeight
    const p = span <= 0 ? 1 : Math.min(Math.max(-top / span, 0), 1)
    el.style.setProperty('--p', p.toFixed(4))
  })

  return (
    <section ref={ref} id={id} data-pin className={cn('relative', className)}>
      {children}
    </section>
  )
}

/* ------------------------------------------------------------------ *
 * Rolagem com inércia + `--scroll` global (0→1) para o fundo reagir.
 * ------------------------------------------------------------------ */
export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    let lenis: { destroy: () => void } | null = null
    let cancelled = false

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        autoRaf: true,
        anchors: { offset: -80 },
      })
    })

    return () => {
      cancelled = true
      lenis?.destroy()
    }
  }, [])

  useScrollFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const p = max > 0 ? window.scrollY / max : 0
    document.documentElement.style.setProperty('--scroll', p.toFixed(4))
  })

  return null
}

/* ------------------------------------------------------------------ *
 * Título que se monta: cada palavra sobe de trás de uma máscara,
 * com o atraso calculado por LINHA (medido no layout real).
 * ------------------------------------------------------------------ */
export function MaskText({
  text,
  highlight,
  as: Tag = 'span',
  className,
  highlightClassName = 'text-primary',
  delay = 0,
  stagger = 90,
}: {
  text: string
  highlight?: string
  highlightClassName?: string
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
}) {
  const ref = useRef<HTMLElement>(null)
  const words = text.split(' ')

  const start = highlight ? text.indexOf(highlight) : -1
  let cursor = 0
  const lit = words.map((w) => {
    const at = cursor
    cursor += w.length + 1
    return start >= 0 && at >= start && at < start + highlight!.length
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Agrupa as palavras por linha pelo offsetTop real — é isso que faz a
    // máscara subir linha a linha e não palavra a palavra.
    const measure = () => {
      let line = -1
      let lastTop = Number.NEGATIVE_INFINITY
      el.querySelectorAll<HTMLElement>('[data-w]').forEach((w) => {
        if (w.offsetTop > lastTop + 2) {
          line++
          lastTop = w.offsetTop
        }
        const inner = w.firstElementChild as HTMLElement
        inner.style.transitionDelay = `${delay + line * stagger}ms`
      })
    }
    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(el)

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('is-in')
        io.disconnect()
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      ro.disconnect()
    }
  }, [delay, stagger, text])

  return (
    <Tag ref={ref} className={cn('mask-text', className)}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span data-w className="mask-w">
            <span className={lit[i] ? highlightClassName : undefined}>{word}</span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  )
}

/* ------------------------------------------------------------------ *
 * Entrada genérica por rolagem.
 * ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('is-in')
        io.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn('reveal', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/* ------------------------------------------------------------------ *
 * Número que sobe sozinho quando entra na tela.
 * O valor final é o que o servidor renderiza — sem JS, o número está lá.
 * ------------------------------------------------------------------ */
const fmt = (v: number, decimals: number) =>
  v.toFixed(decimals).replace('.', ',')

export function CountUp({
  to,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1500,
  className,
}: {
  to: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(to)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) return

    setValue(0)
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const step = (now: number) => {
          const p = Math.min((now - t0) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(to * eased)
          if (p < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {fmt(value, decimals)}
      {suffix}
    </span>
  )
}
