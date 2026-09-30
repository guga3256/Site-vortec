import { MapPin, MousePointer2 } from 'lucide-react'
import { WhatsappButton } from '@/components/whatsapp-button'
import { HeroPhone } from '@/components/sections/hero-phone'
import { CountUp, MaskText, Reveal } from '@/components/scroll'

export function Hero() {
  return (
    // A seção é alta de propósito: a altura extra é o trilho da cena do
    // celular, que o HeroPhone lê como `--p` (0→1) e converte em tempo.
    <section id="topo" data-pin className="relative lg:h-[320vh]">
      <div className="flex items-center overflow-hidden pt-28 pb-16 lg:sticky lg:top-0 lg:min-h-svh lg:pt-32 lg:pb-14">
        {/* Fundo: glows */}
        <div className="animate-float pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" />
        <div className="pointer-events-none absolute top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1fr_1.15fr] lg:px-8 lg:pr-0 xl:max-w-7xl">
          {/* Copy */}
          <div>
            <Reveal as="span" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              SEO Local &amp; Sites de Alta Conversão
            </Reveal>

            <MaskText
              as="h1"
              text="Quantos clientes compraram do seu concorrente hoje porque não te acharam no celular?"
              highlight="porque não te acharam"
              delay={120}
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
            />

            <Reveal
              as="p"
              delay={420}
              className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground lg:text-lg"
            >
              <CountUp to={90} suffix="%" className="font-medium text-foreground" />{' '}
              das pessoas pesquisam no Google antes de ir a um
              estabelecimento local. Se o seu Perfil da Empresa está
              desatualizado, sem site ou sem telefone, você está simplesmente{' '}
              <span className="text-foreground">invisível</span>.
            </Reveal>

            <Reveal
              delay={540}
              className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <WhatsappButton size="lg">
                Fazer um Diagnóstico Gratuito
              </WhatsappButton>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Ver como funciona o método
              </a>
            </Reveal>

            <Reveal as="p" delay={640} className="mt-5 text-xs text-muted-foreground">
              Análise de 5 minutos • Sem compromisso • Direto no seu WhatsApp
            </Reveal>
          </div>

          {/* Visual — a cena avança conforme a pessoa desce */}
          <HeroPhone />
        </div>

        {/* Convite para rolar: some assim que a cena começa a andar */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-6 left-1/2 hidden w-full lg:flex max-w-6xl -translate-x-1/2 flex-col items-start gap-2 px-5 text-muted-foreground lg:px-8 xl:max-w-7xl"
          style={{ opacity: 'clamp(0, calc(1 - var(--p, 0) * 8), 1)' }}
        >
          <MousePointer2 className="h-3.5 w-3.5 text-primary" />
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase">
            Role para buscar
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
