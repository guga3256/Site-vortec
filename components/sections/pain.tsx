import { Ghost, MessageCircleOff, ShieldAlert, StarOff } from 'lucide-react'
import { WhatsappButton } from '@/components/whatsapp-button'
import { MaskText, Reveal } from '@/components/scroll'

const PAINS = [
  {
    icon: Ghost,
    title: 'Perfil "Fantasma"',
    text: 'Os clientes pesquisam pelo seu nicho na sua cidade, mas o Google só mostra os seus concorrentes.',
  },
  {
    icon: StarOff,
    title: 'Falta de Confiança',
    text: 'Seu perfil tem menos de 15 avaliações ou a nota está baixa, afastando quem ainda não te conhece.',
  },
  {
    icon: MessageCircleOff,
    title: 'Fuga de Contatos',
    text: 'Seu WhatsApp não está claro ou você não tem um site para mostrar seus serviços de forma profissional.',
  },
  {
    icon: ShieldAlert,
    title: 'Perfil Sem Dono',
    text: 'Qualquer pessoa pode sugerir alteração do seu horário no Google e "fechar" a sua loja digitalmente.',
  },
]

export function Pain() {
  return (
    <section id="problema" className="relative py-24 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-16 lg:px-8 xl:max-w-7xl">
        {/* Intro — à esquerda */}
        <div>
          <Reveal
            as="span"
            className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase"
          >
            O diagnóstico
          </Reveal>
          <MaskText
            as="h2"
            text="O seu negócio sofre de algum destes problemas?"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl"
          />
          <MaskText
            as="p"
            text="Cada dia que o seu perfil passa assim é faturamento garantido caindo na conta do seu concorrente do bairro vizinho."
            highlight="faturamento garantido caindo na conta do seu concorrente"
            highlightClassName="font-medium text-foreground"
            stagger={70}
            className="mt-4 max-w-md text-base leading-relaxed text-pretty text-muted-foreground"
          />
          <Reveal delay={300} className="mt-8">
            <WhatsappButton>Fazer meu diagnóstico</WhatsappButton>
          </Reveal>
        </div>

        {/* Cards — grade 2×2 à direita */}
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          {PAINS.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 110}
              className="group rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-300 hover:border-destructive/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-background text-foreground transition-colors duration-300 group-hover:text-destructive">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
