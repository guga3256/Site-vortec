import { Check } from 'lucide-react'
import { WhatsappButton } from '@/components/whatsapp-button'
import { MaskText, Reveal } from '@/components/scroll'

const PROMISES = [
  'Análise gratuita de 5 minutos',
  'Mostramos o que está travando as suas vendas',
  'Sem compromisso, direto no WhatsApp',
]

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-card px-6 py-14 text-center sm:px-12 lg:py-20">
          {/* Glows */}
          <div className="animate-float pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[110px]" />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000,transparent)]" />

          <div className="relative mx-auto max-w-2xl">
            <MaskText
              as="h2"
              text="Pronto para dominar as buscas na sua região?"
              highlight="dominar as buscas"
              className="font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            />
            <Reveal
              as="p"
              delay={180}
              className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground"
            >
              Fale diretamente comigo no WhatsApp. Vou te mostrar exatamente
              como a sua empresa aparece hoje no Google — e o que está travando
              as suas vendas.
            </Reveal>

            <ul className="mx-auto mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              {PROMISES.map((promise, i) => (
                <Reveal
                  as="li"
                  key={promise}
                  delay={240 + i * 80}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {promise}
                </Reveal>
              ))}
            </ul>

            <Reveal delay={480} className="mt-10 flex justify-center">
              <WhatsappButton size="lg">
                Quero o Meu Diagnóstico Gratuito
              </WhatsappButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
