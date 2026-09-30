import { CreditCard, Target, TrendingUp } from 'lucide-react'
import { VortecMark } from '@/components/logo'
import { MaskText, Reveal } from '@/components/scroll'

const POINTS = [
  {
    icon: Target,
    title: 'Foco em intenção de compra',
    text: 'Posicionamos você onde o cliente procura, no momento exato em que ele quer comprar.',
  },
  {
    icon: TrendingUp,
    title: 'Zero métricas de vaidade',
    text: 'Não vendemos "curtidas". Vendemos presença digital que gera contato e faturamento.',
  },
  {
    icon: CreditCard,
    title: 'Cliente com o cartão na mão',
    text: 'Atraímos quem já decidiu comprar e só precisa encontrar a empresa certa: a sua.',
  },
]

export function Authority() {
  return (
    <section id="autoridade" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Reveal
              as="span"
              className="inline-block text-sm font-medium tracking-[0.2em] text-primary uppercase"
            >
              Autoridade
            </Reveal>
            <MaskText
              as="h2"
              text="Por que escolher a Vortec Marketing & Soluções?"
              highlight="Vortec Marketing & Soluções?"
              className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            />
            <Reveal
              as="p"
              delay={320}
              className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground"
            >
              Somos especialistas em tráfego e presença digital para negócios
              locais. Nosso foco não é vender vaidade, mas posicionar a sua
              empresa exatamente onde o seu cliente está procurando.
            </Reveal>

            <Reveal
              delay={420}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-card px-5 py-4"
            >
              <VortecMark className="h-8 w-8 text-primary" />
              <p className="text-sm text-muted-foreground">
                Método aplicado, orientado a{' '}
                <span className="text-foreground">resultado real</span>.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {POINTS.map((point, i) => (
              <Reveal
                key={point.title}
                delay={i * 130}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <point.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
