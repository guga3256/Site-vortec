import { WhatsappButton } from '@/components/whatsapp-button'
import { CountUp, MaskText, Reveal } from '@/components/scroll'

export function Hero() {
  return (
    <section id="topo" className="relative flex flex-col overflow-hidden lg:block lg:h-svh lg:min-h-[640px]">
      {/* Fundo: glows */}
      <div className="animate-float pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-[8%] h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />

      {/* Visual — ocupa a metade direita de cima a baixo no desktop.
          O iframe mantém o tamanho nativo do embed (480×780) e é escalado. */}
      <div className="relative order-last mx-auto h-[640px] w-full max-w-[400px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2 lg:max-w-none">
        <iframe
          src="/hero-embed.html"
          title="Demonstração: sua empresa aparecendo no Google"
          className="absolute top-1/2 left-1/2 h-[780px] w-[480px] -translate-x-1/2 -translate-y-1/2 scale-[0.8] overflow-hidden border-0 bg-transparent lg:top-[calc(50%+2rem)] lg:scale-[0.8] [@media(min-height:860px)]:lg:scale-[0.95] [@media(min-height:1000px)]:lg:scale-110"
        />
      </div>

      {/* Copy — à esquerda, um pouco acima do centro (como na referência) */}
      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center px-5 pt-32 pb-12 lg:px-8 lg:pt-16 lg:pb-[8vh] xl:max-w-7xl">
        <div className="max-w-md lg:max-w-[40rem]">
          <MaskText
            as="h1"
            text="Quantos clientes compraram do seu concorrente hoje porque não te acharam no celular?"
            highlight="porque não te acharam"
            delay={120}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance text-foreground sm:text-4xl xl:text-[2.6rem]"
          />

          <Reveal
            as="p"
            delay={420}
            className="mt-5 max-w-md text-sm leading-relaxed text-pretty text-muted-foreground lg:text-base"
          >
            <CountUp to={90} suffix="%" className="font-medium text-foreground" />{' '}
            das pessoas pesquisam no Google antes de ir a um
            estabelecimento local. Se o seu Perfil da Empresa está
            desatualizado, sem site ou sem telefone, você está simplesmente{' '}
            <span className="text-foreground">invisível</span>.
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
