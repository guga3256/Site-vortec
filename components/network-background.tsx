'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Fundo da hero: pontos espalhados ligados por arcos — tudo aleatório.
 * As posições são sorteadas a cada visita (só no navegador, para não
 * divergir do HTML do servidor) e cada arco, ao terminar um ciclo, sorteia
 * um novo par de pontos e uma nova curva. As animações em si são CSS
 * (`.map-arc`, `.map-pulse` em globals.css).
 */

const W = 1600
const H = 900
const NODE_COUNT = 18
const ARC_COUNT = 12
const MIN_GAP = 170 // distância mínima entre pontos
const MAX_LINK = 650 // arcos só entre pontos não muito distantes
const COLOR = 'hsl(215 100% 62%)'

type Pt = [number, number]

const rand = (min: number, max: number) => min + Math.random() * (max - min)

function scatter(): Pt[] {
  const pts: Pt[] = []
  for (let tries = 0; pts.length < NODE_COUNT && tries < 4000; tries++) {
    const p: Pt = [rand(40, W - 40), rand(40, H - 40)]
    if (pts.every(([x, y]) => Math.hypot(x - p[0], y - p[1]) >= MIN_GAP)) pts.push(p)
  }
  return pts
}

function randomArc(nodes: Pt[]) {
  for (let tries = 0; tries < 50; tries++) {
    const a = nodes[Math.floor(Math.random() * nodes.length)]
    const b = nodes[Math.floor(Math.random() * nodes.length)]
    const len = Math.hypot(b[0] - a[0], b[1] - a[1])
    if (a === b || len > MAX_LINK) continue
    // controle perpendicular, para um lado ou outro, com curvatura sorteada
    const side = Math.random() < 0.5 ? 1 : -1
    const h = len * rand(0.15, 0.45) * side
    const cx = (a[0] + b[0]) / 2 + (-(b[1] - a[1]) / len) * h
    const cy = (a[1] + b[1]) / 2 + ((b[0] - a[0]) / len) * h
    return `M${a[0].toFixed(0)} ${a[1].toFixed(0)}Q${cx.toFixed(0)} ${cy.toFixed(0)} ${b[0].toFixed(0)} ${b[1].toFixed(0)}`
  }
  return ''
}

type Scene = {
  nodes: { p: Pt; delay: number; dur: number }[]
  arcs: { d: string; delay: number; dur: number }[]
}

export function NetworkBackground({ className }: { className?: string }) {
  const [scene, setScene] = useState<Scene | null>(null)
  const nodesRef = useRef<Pt[]>([])

  useEffect(() => {
    const pts = scatter()
    nodesRef.current = pts
    setScene({
      nodes: pts.map((p) => ({ p, delay: rand(0, 4), dur: rand(2.6, 4.6) })),
      arcs: Array.from({ length: ARC_COUNT }, () => ({
        d: randomArc(pts),
        delay: rand(0, 9),
        dur: rand(6, 12),
      })),
    })
  }, [])

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className={cn('pointer-events-none', className)}
    >
      {scene?.arcs.map((arc, i) => (
        <path
          key={i}
          d={arc.d}
          pathLength={1}
          fill="none"
          stroke={COLOR}
          strokeWidth={1.5}
          strokeLinecap="round"
          className="map-arc"
          style={{ animationDelay: `${arc.delay}s`, animationDuration: `${arc.dur}s` }}
          // Fim de cada ciclo (arco já invisível): troca por um novo par.
          onAnimationIteration={(e) =>
            e.currentTarget.setAttribute('d', randomArc(nodesRef.current))
          }
        />
      ))}

      {scene?.nodes.map(({ p: [x, y], delay, dur }, i) => (
        <g key={i}>
          <circle
            cx={x}
            cy={y}
            r={12}
            fill={COLOR}
            className="map-pulse"
            style={{ animationDelay: `${delay}s`, animationDuration: `${dur}s` }}
          />
          <circle cx={x} cy={y} r={3.5} fill={COLOR} />
        </g>
      ))}
    </svg>
  )
}
