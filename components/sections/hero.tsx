import { WhatsappButton } from '@/components/whatsapp-button'
import { MaskText, Reveal } from '@/components/scroll'
import { NetworkBackground } from '@/components/network-background'

export function Hero() {
  return (
    <section id="topo" className="relative flex flex-col overflow-hidden lg:block lg:h-svh lg:min-h-[640px]">
      {/* Fundo: pontos se interligando pela seção toda, bem apagados */}
      <NetworkBackground className="absolute inset-0 h-full w-full opacity-[0.18]" />

      {/* Fundo: glows */}
      <div className="animate-float pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-[8%] h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />

      {/* Visual — ocupa a metade direita de cima a baixo no desktop.
          O iframe mantém o tamanho nativo do embed (480×780) e é escalado.
          --s = escala do celular, --dy = deslocamento vertical do centro. */}
      <div className="relative order-last mx-auto mt-6 h-[600px] w-full max-w-[360px] [--dy:0px] [--s:0.72] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-1/2 lg:max-w-none lg:[--dy:2rem] [@media(min-height:860px)]:lg:[--s:0.85] [@media(min-height:1000px)]:lg:[--s:1]">
        {/* Aviso: é uma simulação. Fica logo acima do topo do celular
            (o aparelho tem 720px de altura no embed). */}
        <span
          className="absolute left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-muted-foreground backdrop-blur"
          style={{ top: 'calc(50% + var(--dy) - 360px * var(--s) - 2.75rem)' }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span>
            <span className="font-medium text-foreground">Simulação ilustrativa</span>
            {/* Em telas muito estreitas fica só o rótulo */}
            <span className="max-[370px]:hidden">
              {' · '}como seu cliente te encontra no Google
            </span>
          </span>
        </span>
        <iframe
          src="/hero-embed.html"
          title="Simulação: como seu cliente te encontra no Google"
          className="absolute left-1/2 h-[780px] w-[480px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border-0 bg-transparent"
          style={{ top: 'calc(50% + var(--dy))', scale: 'var(--s)' }}
        />
      </div>

      {/* Copy — à esquerda, um pouco acima do centro (como na referência) */}
      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center px-5 pt-32 pb-12 lg:px-8 lg:pt-16 lg:pb-[8vh] xl:max-w-7xl">
        <div className="max-w-md lg:max-w-[40rem]">
          <MaskText
            as="h1"
            text="Quantos clientes você perde para o concorrente porque não te encontram no Google?"
            highlight="porque não te encontram"
            delay={120}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance text-foreground sm:text-4xl xl:text-[2.6rem]"
          />

          <Reveal
            as="p"
            delay={420}
            className="mt-5 max-w-md text-sm leading-relaxed text-pretty text-muted-foreground lg:text-base"
          >
            <span className="mb-1 block font-medium text-foreground">
              Seu negócio precisa aparecer quando o cliente está procurando.
            </span>
            Estruturamos sua presença no Google para você ser encontrado, gerar
            contatos e vender mais.
          </Reveal>

          <Reveal
            delay={540}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <WhatsappButton>Fazer um Diagnóstico Gratuito</WhatsappButton>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
            >
              Ver como funciona
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
