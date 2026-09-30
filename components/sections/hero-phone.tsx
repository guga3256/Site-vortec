'use client'

import { useEffect, useRef } from 'react'
import { onScrollFrame, pinProgress } from '@/components/scroll'

const TOTAL_DURATION_MS = 18000
const SEARCH_QUERY = 'Dentista em Osasco'

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max)
}

export function HeroPhone() {
  const stageRef = useRef<HTMLDivElement>(null)
  const world3DRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const ambientGlowRef = useRef<HTMLDivElement>(null)
  const rippleContainerRef = useRef<HTMLDivElement>(null)

  const screenHomeRef = useRef<HTMLDivElement>(null)
  const screenMapsRef = useRef<HTMLDivElement>(null)
  const screenCallingRef = useRef<HTMLDivElement>(null)
  const typedSearchTextRef = useRef<HTMLSpanElement>(null)
  const tapIndicatorMapsRef = useRef<HTMLDivElement>(null)
  const screenMapPinsRef = useRef<HTMLDivElement>(null)

  const floatingCard1Ref = useRef<HTMLDivElement>(null)
  const floatingCard2Ref = useRef<HTMLDivElement>(null)
  const floatingCard3Ref = useRef<HTMLDivElement>(null)
  const heroCardRef = useRef<HTMLDivElement>(null)

  const virtualCursorRef = useRef<HTMLDivElement>(null)
  const cursorWaveRef = useRef<HTMLDivElement>(null)
  const cursorGestureHintRef = useRef<HTMLDivElement>(null)
  const btnCallNowRef = useRef<HTMLDivElement>(null)
  const callTimerRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const world3D = world3DRef.current
    const parallax = parallaxRef.current
    const ambientGlow = ambientGlowRef.current
    const rippleContainer = rippleContainerRef.current
    const screenHome = screenHomeRef.current
    const screenMaps = screenMapsRef.current
    const screenCalling = screenCallingRef.current
    const typedSearchText = typedSearchTextRef.current
    const tapIndicatorMaps = tapIndicatorMapsRef.current
    const screenMapPins = screenMapPinsRef.current
    const floatingCard1 = floatingCard1Ref.current
    const floatingCard2 = floatingCard2Ref.current
    const floatingCard3 = floatingCard3Ref.current
    const heroCard = heroCardRef.current
    const virtualCursor = virtualCursorRef.current
    const cursorWave = cursorWaveRef.current
    const cursorGestureHint = cursorGestureHintRef.current
    const btnCallNow = btnCallNowRef.current
    const callTimer = callTimerRef.current

    if (
      !stage ||
      !world3D ||
      !parallax ||
      !ambientGlow ||
      !rippleContainer ||
      !screenHome ||
      !screenMaps ||
      !screenCalling ||
      !typedSearchText ||
      !tapIndicatorMaps ||
      !screenMapPins ||
      !floatingCard1 ||
      !floatingCard2 ||
      !floatingCard3 ||
      !heroCard ||
      !virtualCursor ||
      !cursorWave ||
      !cursorGestureHint ||
      !btnCallNow ||
      !callTimer
    ) {
      return
    }

    let lastRippleTime = 0

    function triggerRipple() {
      if (Date.now() - lastRippleTime < 900) return
      lastRippleTime = Date.now()
      const rip = document.createElement('div')
      rip.className =
        'absolute w-20 h-20 rounded-full border-4 border-[#0026FF] bg-blue-500/30 shadow-[0_0_40px_#0026FF] pointer-events-none'
      rip.style.left = '48%'
      rip.style.top = '54%'
      rip.style.animation = 'vortec-ripple-shockwave 0.8s ease-out forwards'
      rippleContainer!.appendChild(rip)
      setTimeout(() => rip.remove(), 800)
    }

    function updateFrame(t: number) {
      // Cena 1: 0s - 3.5s (abertura, clique no Maps e digitação)
      if (t < 3500) {
        screenHome!.style.opacity = t < 1500 ? '1' : '0'
        screenMaps!.style.opacity = t >= 1500 ? '1' : '0'
        screenCalling!.style.opacity = '0'
        ambientGlow!.style.backgroundColor = 'transparent'

        if (t < 800) {
          virtualCursor!.style.transform = `translate3d(0px, 70px, 120px) scale(0.9)`
          cursorWave!.style.opacity = '0'
          tapIndicatorMaps!.style.transform = 'scale(0)'
        } else if (t < 1500) {
          virtualCursor!.style.transform = `translate3d(-20px, -10px, 90px) scale(0.8)`
          tapIndicatorMaps!.style.transform = 'scale(1.2)'
          cursorWave!.style.opacity = '1'
          cursorWave!.style.transform = 'scale(1.4)'
        } else {
          tapIndicatorMaps!.style.transform = 'scale(0)'
          virtualCursor!.style.transform = `translate3d(0px, -100px, 110px) scale(0.85)`
          cursorWave!.style.opacity = '0'

          const progress = clamp((t - 1500) / 1600, 0, 1)
          const chars = Math.floor(progress * SEARCH_QUERY.length)
          typedSearchText!.textContent = SEARCH_QUERY.substring(0, chars)
        }

        floatingCard1!.style.opacity = '0'
        floatingCard1!.style.transform = 'translate3d(-40px, 0px, 0px) scale(0.5)'
        floatingCard2!.style.opacity = '0'
        floatingCard2!.style.transform = 'translate3d(40px, 0px, 0px) scale(0.5)'
        floatingCard3!.style.opacity = '0'
        floatingCard3!.style.transform = 'translate3d(0px, 40px, 50px) scale(0.5)'
        heroCard!.style.opacity = '0'
        heroCard!.style.transform = 'translate3d(0px, 0px, 50px) scale(0.4)'
        cursorGestureHint!.style.opacity = '0'
      }

      // Cena 2: 3.5s - 9.0s (3 cards flutuam)
      else if (t >= 3500 && t < 9000) {
        screenHome!.style.opacity = '0'
        screenMaps!.style.opacity = '1'
        screenCalling!.style.opacity = '0'
        screenMapPins!.style.opacity = '1'
        typedSearchText!.textContent = SEARCH_QUERY

        floatingCard1!.style.opacity = '1'
        floatingCard2!.style.opacity = '1'
        floatingCard3!.style.opacity = '1'

        if (t < 5300) {
          virtualCursor!.style.transform = `translate3d(-110px, -40px, 150px) scale(1)`
          floatingCard1!.style.transform =
            'translate3d(-115px, -50px, 90px) rotateY(12deg) rotateX(8deg) scale(1.05)'
          floatingCard2!.style.transform =
            'translate3d(115px, 20px, 110px) rotateY(-12deg) rotateX(10deg) scale(1)'
          floatingCard3!.style.transform =
            'translate3d(0px, 110px, 140px) rotateY(-4deg) rotateX(10deg) scale(0.95)'
        } else if (t < 7100) {
          virtualCursor!.style.transform = `translate3d(110px, 25px, 160px) scale(1)`
          floatingCard1!.style.transform =
            'translate3d(-115px, -50px, 90px) rotateY(12deg) rotateX(8deg) scale(1)'
          floatingCard2!.style.transform =
            'translate3d(115px, 20px, 110px) rotateY(-12deg) rotateX(10deg) scale(1.06)'
          floatingCard3!.style.transform =
            'translate3d(0px, 110px, 140px) rotateY(-4deg) rotateX(10deg) scale(0.95)'
        } else {
          virtualCursor!.style.transform = `translate3d(0px, 120px, 180px) scale(1.05)`
          floatingCard1!.style.transform =
            'translate3d(-115px, -50px, 90px) rotateY(12deg) rotateX(8deg) scale(1)'
          floatingCard2!.style.transform =
            'translate3d(115px, 20px, 110px) rotateY(-12deg) rotateX(10deg) scale(1)'
          floatingCard3!.style.transform =
            'translate3d(0px, 110px, 140px) rotateY(-4deg) rotateX(10deg) scale(1.06)'
        }

        heroCard!.style.opacity = '0'
        heroCard!.style.transform = 'translate3d(0px, 0px, 50px) scale(0.4)'
        cursorGestureHint!.style.opacity = '0'
      }

      // Cena 3: 9.0s - 11.5s (swipe e arremesso dos cards)
      else if (t >= 9000 && t < 11500) {
        const swipeProgress = (t - 9000) / 2500

        if (t < 10000) {
          const move = (t - 9000) / 1000
          virtualCursor!.style.transform = `translate3d(${-50 + move * 240}px, 20px, 170px) scale(1.15)`
          cursorGestureHint!.style.opacity = '1'
        } else {
          virtualCursor!.style.transform = `translate3d(170px, 20px, 170px) scale(0.9)`
          cursorGestureHint!.style.opacity = '0'
        }

        const flyDistance = swipeProgress * 500
        floatingCard1!.style.opacity = `${Math.max(0, 1 - swipeProgress * 2)}`
        floatingCard1!.style.transform = `translate3d(${-115 - flyDistance}px, ${-50 - flyDistance * 0.4}px, 90px) rotateZ(-30deg) scale(0.6)`

        floatingCard2!.style.opacity = `${Math.max(0, 1 - swipeProgress * 2)}`
        floatingCard2!.style.transform = `translate3d(${115 + flyDistance * 1.3}px, ${20 - flyDistance * 0.6}px, 110px) rotateZ(35deg) scale(0.5)`

        floatingCard3!.style.opacity = `${Math.max(0, 1 - swipeProgress * 2)}`
        floatingCard3!.style.transform = `translate3d(${flyDistance * 0.6}px, ${110 + flyDistance * 1.1}px, 140px) rotateZ(45deg) scale(0.4)`

        heroCard!.style.opacity = '0'
        screenCalling!.style.opacity = '0'
      }

      // Cena 4: 11.5s - 18.0s (card campeão, clique e ligação)
      else if (t >= 11500) {
        floatingCard1!.style.opacity = '0'
        floatingCard2!.style.opacity = '0'
        floatingCard3!.style.opacity = '0'
        cursorGestureHint!.style.opacity = '0'

        ambientGlow!.style.backgroundColor = 'rgba(0, 38, 255, 0.35)'

        if (t < 14500) {
          const emergeProg = clamp((t - 11500) / 2000, 0, 1)
          heroCard!.style.opacity = '1'
          heroCard!.style.transform = `translate3d(0px, -10px, 160px) rotateY(-4deg) rotateX(4deg) scale(${0.8 + emergeProg * 0.25})`
          virtualCursor!.style.transform = `translate3d(70px, 60px, 210px) scale(1)`
          btnCallNow!.style.transform = 'scale(1)'
        } else if (t < 15800) {
          heroCard!.style.opacity = '1'
          heroCard!.style.transform = 'translate3d(0px, -10px, 160px) rotateY(-4deg) rotateX(4deg) scale(1.03)'
          virtualCursor!.style.transform = `translate3d(0px, 25px, 200px) scale(0.85)`
          btnCallNow!.style.transform = 'scale(0.95)'
          triggerRipple()
        } else {
          const fadeProg = (t - 15800) / 2200
          heroCard!.style.opacity = `${Math.max(0, 1 - fadeProg * 1.6)}`
          heroCard!.style.transform = `translate3d(0px, -10px, ${160 + fadeProg * 50}px) scale(1.03)`

          screenMaps!.style.opacity = '0'
          screenCalling!.style.opacity = '1'
          btnCallNow!.style.transform = 'scale(1)'

          const timerSec = Math.floor((t - 15800) / 500)
          callTimer!.textContent = `00:0${timerSec}`
        }
      }
    }

    // No desktop a rolagem é o relógio: o progresso dentro da seção presa vira
    // o tempo da cena e a pessoa avança o quadro com o dedo.
    const pin = stage.closest<HTMLElement>('[data-pin]')

    function syncToScroll() {
      const p = pinProgress(pin)
      pin?.style.setProperty('--p', p.toFixed(4))
      updateFrame(p * (TOTAL_DURATION_MS - 100))
    }

    // No celular não há trilho para prender (a copy já ocupa a tela inteira),
    // então a cena volta a rodar sozinha.
    let currentTimeMs = 0
    let lastFrameTime = performance.now()
    let rafId = 0

    function loop(timestamp: number) {
      const delta = timestamp - lastFrameTime
      lastFrameTime = timestamp
      currentTimeMs = (currentTimeMs + delta) % TOTAL_DURATION_MS
      updateFrame(currentTimeMs)
      rafId = requestAnimationFrame(loop)
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = stage!.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      parallax!.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 14}deg)`
    }
    function handleMouseLeave() {
      parallax!.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }

    stage.addEventListener('mousemove', handleMouseMove)
    stage.addEventListener('mouseleave', handleMouseLeave)

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const pinned = window.matchMedia('(min-width: 1024px)')
    let unsubscribe = () => {}

    function stop() {
      cancelAnimationFrame(rafId)
      rafId = 0
      unsubscribe()
      unsubscribe = () => {}
    }

    function start() {
      stop()
      if (prefersReducedMotion) {
        // Static end-state frame: winning profile card fully emerged, before
        // the one-shot tap ripple and calling screen kick in.
        updateFrame(14499)
      } else if (pinned.matches) {
        unsubscribe = onScrollFrame(syncToScroll)
      } else {
        lastFrameTime = performance.now()
        rafId = requestAnimationFrame(loop)
      }
    }

    start()
    pinned.addEventListener('change', start)

    return () => {
      stop()
      pinned.removeEventListener('change', start)
      stage.removeEventListener('mousemove', handleMouseMove)
      stage.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={stageRef}
      className="perspective-stage relative mx-auto flex h-[380px] w-full max-w-[380px] select-none items-center justify-center p-4 sm:h-[560px] sm:max-w-[520px] lg:ml-auto lg:mr-0 lg:h-[720px] lg:max-w-[720px]"
    >
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
      <div
        ref={ambientGlowRef}
        className="pointer-events-none absolute bottom-8 right-1/4 h-80 w-80 rounded-full bg-[#0026FF]/0 blur-[90px] transition-all duration-700"
      />
      <div ref={rippleContainerRef} className="pointer-events-none absolute z-50" />

      <div
        ref={world3DRef}
        className="preserve-3d relative flex h-full w-full scale-[0.7] items-center justify-center transition-transform duration-300 sm:scale-105 lg:scale-125"
      >
      <div ref={parallaxRef} className="preserve-3d relative flex h-full w-full items-center justify-center transition-transform duration-300">
        {/* iPhone 3D */}
        <div
          className="preserve-3d relative transition-all duration-700 ease-out"
          style={{ transform: 'rotateX(20deg) rotateY(-14deg) rotateZ(2deg)' }}
        >
          <div className="absolute -bottom-12 left-1/2 h-14 w-56 -translate-x-1/2 -rotate-x-90 translate-z-[-50px] transform rounded-full bg-black/65 blur-xl" />

          <div className="phone-shadow preserve-3d relative h-[460px] w-[230px] rounded-[40px] border-[2.5px] border-slate-600/80 bg-slate-800 p-2.5">
            <div className="pointer-events-none absolute -inset-[1px] rounded-[40px] border border-white/20" />

            <div className="absolute -left-[4.5px] top-20 h-7 w-[3px] rounded-l-sm bg-slate-500" />
            <div className="absolute -left-[4.5px] top-32 h-10 w-[3px] rounded-l-sm bg-slate-500" />
            <div className="absolute -left-[4.5px] top-46 h-10 w-[3px] rounded-l-sm bg-slate-500" />
            <div className="absolute -right-[4.5px] top-28 h-14 w-[3px] rounded-r-sm bg-slate-500" />

            <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[32px] border border-slate-800 bg-slate-950">
              <div className="absolute top-2 left-1/2 z-40 h-4.5 w-18 -translate-x-1/2 flex items-center justify-end rounded-full border border-slate-800/80 bg-black px-2 shadow-md">
                <div className="h-2 w-2 rounded-full border border-blue-900/40 bg-[#101018]" />
              </div>

              {/* Tela 1: Home */}
              <div
                ref={screenHomeRef}
                className="absolute inset-0 flex flex-col justify-between p-3.5 pt-9 opacity-100 transition-opacity duration-500"
              >
                <div className="flex items-center justify-between px-2 text-[9px] font-medium text-slate-400">
                  <span>09:41</span>
                  <div className="flex items-center gap-1">
                    <span>5G</span>
                    <div className="h-2 w-3.5 rounded-xs border border-slate-400 p-0.5">
                      <div className="h-full w-full bg-slate-200" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2.5 px-1">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-xs shadow-md">
                      💬
                    </div>
                    <span className="text-[8.5px] text-slate-400">Chat</span>
                  </div>
                  <div className="group relative flex flex-col items-center gap-1">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-lg">
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        />
                        <circle fill="#EA4335" cx="12" cy="9" r="3.5" />
                        <circle fill="#FFFFFF" cx="12" cy="9" r="1.5" />
                      </svg>
                    </div>
                    <span className="text-[8.5px] font-medium text-slate-200">Maps</span>
                    <div
                      ref={tapIndicatorMapsRef}
                      className="absolute -inset-1 scale-0 rounded-xl border-2 border-blue-400 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-xs shadow-md">
                      📷
                    </div>
                    <span className="text-[8.5px] text-slate-400">Fotos</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-slate-700 to-slate-800 text-xs shadow-md">
                      ⚙️
                    </div>
                    <span className="text-[8.5px] text-slate-400">Ajustes</span>
                  </div>
                </div>

                <div className="mb-1.5 flex w-full justify-around rounded-2xl border border-slate-700/50 bg-slate-800/60 p-1.5 backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-xs">📞</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500 text-xs">🌐</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 text-xs">✉️</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-600 text-xs">🎵</div>
                </div>
              </div>

              {/* Tela 2: Maps & busca */}
              <div
                ref={screenMapsRef}
                className="absolute inset-0 flex flex-col bg-[#1e232a] opacity-0 transition-opacity duration-500"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] opacity-40 [background-size:16px_16px]">
                  <svg className="h-full w-full fill-none stroke-slate-600/40" viewBox="0 0 200 400">
                    <path d="M-10 80 Q100 120 220 70" strokeWidth="6" />
                    <path d="M50 -10 Q80 200 30 420" strokeWidth="8" />
                    <path d="M140 -10 Q160 180 180 420" strokeWidth="5" />
                    <path d="M-10 260 Q120 220 220 280" strokeWidth="7" />
                  </svg>
                </div>

                <div className="relative z-20 p-3 pt-9">
                  <div className="flex w-full items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/90 px-2.5 py-1.5 shadow-lg">
                    <svg
                      className="h-3 w-3 shrink-0 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span
                      ref={typedSearchTextRef}
                      className="truncate text-[11px] font-medium tracking-wide text-white"
                    />
                    <span className="animate-blink h-3 w-0.5 shrink-0 bg-blue-400" />
                  </div>
                </div>

                <div
                  ref={screenMapPinsRef}
                  className="relative z-10 flex flex-1 flex-col justify-around p-3 opacity-0 transition-opacity duration-500"
                >
                  <div className="flex w-fit items-center gap-1.5 rounded border border-slate-700 bg-slate-900/80 px-2 py-0.5 text-[8.5px] text-slate-300 shadow">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> Clínica A (2.0★)
                  </div>
                  <div className="flex w-fit items-center gap-1.5 self-end rounded border border-slate-700 bg-slate-900/80 px-2 py-0.5 text-[8.5px] text-slate-300 shadow">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Odonto B (?)
                  </div>
                </div>
              </div>

              {/* Tela 3: Ligação em andamento */}
              <div
                ref={screenCallingRef}
                className="absolute inset-0 z-30 flex flex-col items-center justify-between bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 p-5 pt-11 text-center opacity-0 transition-opacity duration-500"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-2 h-14 w-14 rounded-full bg-gradient-to-tr from-[#0026FF] to-blue-400 p-0.5 shadow-[0_0_20px_#0026FF]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-lg">
                      🦷
                    </div>
                    <div className="absolute -bottom-0.5 right-0 h-3.5 w-3.5 rounded-full border-2 border-slate-900 bg-emerald-500" />
                  </div>
                  <p className="text-sm font-bold tracking-wide text-white">Clínica Odonto</p>
                  <p className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
                    Ligação em andamento...
                  </p>
                  <p ref={callTimerRef} className="mt-0.5 font-mono text-[11px] text-slate-400">
                    00:03
                  </p>
                </div>

                <div className="flex h-5 items-center gap-1">
                  <span className="h-3.5 w-1 animate-[pulse_0.6s_ease-in-out_infinite] rounded-full bg-blue-500" />
                  <span className="h-5 w-1 animate-[pulse_0.4s_ease-in-out_infinite] rounded-full bg-blue-400" />
                  <span className="h-2.5 w-1 animate-[pulse_0.8s_ease-in-out_infinite] rounded-full bg-emerald-400" />
                  <span className="h-4 w-1 animate-[pulse_0.5s_ease-in-out_infinite] rounded-full bg-blue-500" />
                  <span className="h-3.5 w-1 animate-[pulse_0.7s_ease-in-out_infinite] rounded-full bg-blue-300" />
                </div>

                <div className="mb-2 grid w-full max-w-[160px] grid-cols-3 gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-xs text-slate-300">
                    🎙️
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-xs text-slate-300">
                    🔊
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-xs text-white shadow-lg shadow-red-600/50">
                    📞
                  </div>
                </div>
              </div>

              <div className="relative z-30 mx-auto mb-1.5 h-1 w-20 rounded-full bg-slate-500/50" />
            </div>
          </div>
        </div>

        {/* Card 1 */}
        <div
          ref={floatingCard1Ref}
          className="glass-card-dark preserve-3d absolute w-[190px] rounded-2xl border-red-500/40 p-3 text-left opacity-0 shadow-[0_10px_25px_rgba(239,68,68,0.2)] transition-all duration-700 ease-out pointer-events-none"
          style={{ transform: 'translate3d(-115px, -50px, 90px) rotateY(12deg) rotateX(8deg)' }}
        >
          <div className="mb-1.5 flex items-start justify-between">
            <div>
              <p className="w-28 truncate text-[11px] font-bold text-slate-100">Consultório Central</p>
              <div className="mt-0.5 flex items-center gap-1">
                <span className="text-[11px] font-bold text-amber-400">2.0</span>
                <div className="flex text-[9px] text-amber-400">★★☆☆☆</div>
                <span className="text-[9px] text-slate-400">(4)</span>
              </div>
            </div>
            <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
          </div>
          <div
            className="mt-1.5 flex items-center justify-between rounded-lg border border-red-500/60 bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-400"
            style={{ animation: 'vortec-red-blink-alert 1.2s infinite ease-in-out' }}
          >
            <span className="flex items-center gap-1">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Sem Telefone
            </span>
            <span className="rounded bg-red-500/30 px-1 text-[8px] uppercase">Erro</span>
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={floatingCard2Ref}
          className="glass-card-dark preserve-3d absolute w-[195px] rounded-2xl border-amber-500/40 p-3 text-left opacity-0 shadow-[0_10px_25px_rgba(245,158,11,0.2)] transition-all duration-700 ease-out pointer-events-none"
          style={{ transform: 'translate3d(115px, 20px, 110px) rotateY(-12deg) rotateX(10deg)' }}
        >
          <div className="mb-1.5 flex items-start justify-between">
            <div>
              <p className="w-28 truncate text-[11px] font-bold text-slate-100">Dr. Silva Odonto</p>
              <div className="mt-0.5 flex items-center gap-1">
                <span className="text-[11px] font-bold text-amber-400">3.1</span>
                <div className="flex text-[9px] text-amber-400">★★★☆☆</div>
              </div>
            </div>
            <div className="relative h-5 w-5 shrink-0 rounded-md border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400">
              <span className="text-[10px]">🌐</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-0.5 w-5 rotate-45 rounded-full bg-red-500 shadow" />
              </div>
            </div>
          </div>
          <div className="mt-1.5 flex items-center gap-1 rounded-lg border border-amber-500/60 bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400">
            <svg className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="truncate">Faltam Informações</span>
          </div>
        </div>

        {/* Card 3 */}
        <div
          ref={floatingCard3Ref}
          className="glass-card-dark preserve-3d absolute w-[210px] rounded-2xl border-red-600/50 p-3 text-left opacity-0 shadow-[0_12px_30px_rgba(220,38,38,0.35)] transition-all duration-700 ease-out pointer-events-none"
          style={{ transform: 'translate3d(0px, 110px, 140px) rotateY(-4deg) rotateX(10deg)' }}
        >
          <div className="mb-1 flex items-center justify-between">
            <div>
              <p className="w-36 truncate text-[11px] font-bold text-slate-200">Consultório Bairro Novo</p>
              <p className="text-[9px] text-slate-400">Horário: Não informado</p>
            </div>
            <span className="relative z-10 shrink-0 font-mono text-[11px] text-red-400">⚠️</span>
          </div>
          <div
            className="flex items-center justify-center gap-1 rounded-lg border border-red-500/80 bg-red-600/30 px-2 py-1 text-[9.5px] font-bold text-red-200"
            style={{ animation: 'vortec-red-blink-alert 1.4s infinite ease-in-out' }}
          >
            <svg className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <span>Perfil Não Reivindicado</span>
          </div>
        </div>

        {/* Card campeão: Clínica Odonto */}
        <div
          ref={heroCardRef}
          className="card-hero-glow preserve-3d absolute z-40 w-[285px] scale-50 rounded-3xl p-3.5 text-left opacity-0 transition-all duration-700 pointer-events-none"
          style={{ transform: 'translate3d(0px, -10px, 160px) rotateY(-4deg) rotateX(4deg)' }}
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0026FF] to-blue-400 text-xs font-black text-white shadow-[0_0_10px_#0026FF]">
                🦷
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-xs font-black tracking-wide text-white">Clínica Odonto</p>
                  <svg className="h-3.5 w-3.5 fill-current text-blue-400" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold text-blue-300">Perfil Otimizado &amp; Verificado</span>
              </div>
            </div>
            <span className="rounded-full border border-emerald-500/50 bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
              Aberto
            </span>
          </div>

          <div className="mb-2.5 flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-slate-900/70 p-1.5">
            <span className="text-xs font-black text-amber-400">5.0</span>
            <div
              className="flex text-[10px] tracking-wider text-amber-400"
              style={{ animation: 'vortec-star-shimmer-gold 2s infinite ease-in-out' }}
            >
              ★★★★★
            </div>
            <span className="text-[10px] font-medium text-slate-300">(+180 avaliações)</span>
          </div>

          <div className="flex flex-col gap-1.5">
            <div
              ref={btnCallNowRef}
              className="relative flex items-center justify-center gap-1.5 overflow-hidden rounded-xl border border-emerald-400/40 bg-gradient-to-r from-emerald-600 to-teal-500 px-3 py-1.5 text-[11px] font-bold text-white shadow-[0_4px_15px_rgba(16,185,129,0.4)] transition-transform"
            >
              <svg className="h-3 w-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>LIGAR AGORA</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              <div className="flex items-center justify-center gap-1 rounded-xl border border-[#25D366]/40 bg-[#25D366]/20 px-1.5 py-1.5 text-[10px] font-bold text-emerald-300">
                <svg className="h-3 w-3 shrink-0 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm3.376 8.204c-.149.42-1.424.81-1.748.825-.324.015-.654.02-2.13-.585-1.776-.729-2.919-2.544-3.008-2.663-.089-.119-.724-.963-.724-1.836 0-.873.456-1.302.618-1.48.163-.178.355-.223.474-.223.119 0 .237.002.341.007.11.005.257-.042.402.308.149.356.508 1.24.553 1.33.045.089.075.193.015.312-.06.119-.089.193-.178.297-.089.104-.188.232-.268.312-.089.089-.182.186-.078.365.104.178.463.765.994 1.238.684.609 1.261.798 1.44.887.178.089.283.074.388-.045.104-.119.445-.519.564-.698.119-.178.238-.149.401-.089.163.06 1.037.489 1.215.578.178.089.297.134.341.208.045.074.045.431-.104.851z" />
                </svg>
                <span>WhatsApp</span>
              </div>

              <div className="flex items-center justify-center gap-1 rounded-xl border border-blue-400/40 bg-blue-600/20 px-1.5 py-1.5 text-[10px] font-semibold text-blue-200">
                <svg className="h-3 w-3 shrink-0 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span>Acessar Site</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cursor 3D */}
        <div
          ref={virtualCursorRef}
          className="cursor-pointer-dot pointer-events-none absolute z-50 flex items-center justify-center transition-all duration-300 ease-out"
          style={{ transform: 'translate3d(-30px, -40px, 180px)' }}
        >
          <div className="relative flex items-center justify-center">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-500 bg-white/95 shadow-[0_0_12px_#ffffff]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#0026FF]" />
            </div>
            <div
              ref={cursorWaveRef}
              className="absolute -inset-2 scale-0 rounded-full border-2 border-blue-400 opacity-0 transition-all duration-300"
            />
            <div
              ref={cursorGestureHintRef}
              className="absolute -top-5 whitespace-nowrap rounded border border-blue-700 bg-slate-900/90 px-1.5 py-0.5 text-[9px] font-bold text-blue-300 opacity-0 transition-opacity"
            >
              Swipe ➔
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
