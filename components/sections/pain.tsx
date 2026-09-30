import { X } from 'lucide-react'
import { MaskText, Reveal } from '@/components/scroll'

const PAINS = [
  {
    title: 'Perfil "Fantasma"',
    text: 'Os clientes pesquisam pelo seu nicho na sua cidade, mas o Google só mostra os seus concorrentes.',
  },
  {
    title: 'Falta de Confiança',
    text: 'Seu perfil tem menos de 15 avaliações ou a nota está baixa, afastando quem ainda não te conhece.',
  },
  {
    title: 'Fuga de Contatos',
    text: 'Seu WhatsApp não está claro ou você não tem um site para mostrar seus serviços de forma profissional.',
  },
  {
    title: 'Perfil Sem Dono',
    text: 'Qualquer pessoa pode sugerir alteração do seu horário no Google e "fechar" a sua loja digitalmente.',
  },
]

export function Pain() {
  return (
    <section id="problema" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal
            as="span"
            className="inline-block text-sm font-medium tracking-[0.2em] text-primary uppercase"
          >
            O diagnóstico
          </Reveal>
          <MaskText
            as="h2"
            text="O seu negócio sofre de algum destes problemas?"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
          />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {PAINS.map((pain, i) => (
            <Reveal
              key={pain.title}
              delay={i * 110}
              className="group flex gap-4 rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-300 hover:border-destructive/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive transition-transform duration-300 group-hover:scale-110">
                <X className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {pain.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {pain.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <MaskText
          as="p"
          text="Cada dia que o seu perfil passa assim é faturamento garantido caindo na conta do seu concorrente do bairro vizinho."
          highlight="faturamento garantido caindo na conta do seu concorrente"
          highlightClassName="font-medium text-foreground"
          stagger={70}
          className="mx-auto mt-14 max-w-2xl text-center text-lg text-balance text-muted-foreground"
        />
      </div>
    </section>
  )
}
