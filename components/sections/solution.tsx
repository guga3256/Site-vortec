import { Globe, MapPin, Star } from 'lucide-react'
import { MaskText, Reveal } from '@/components/scroll'

const SERVICES = [
  {
    icon: MapPin,
    title: 'Domínio do Google Maps',
    text: 'Reivindicamos, estruturamos e otimizamos o Perfil da sua Empresa com técnicas de SEO Local para você aparecer nas três primeiras posições — o cobiçado "Local Pack".',
    tag: 'SEO Local',
  },
  {
    icon: Globe,
    title: 'Site de Alta Conversão',
    text: 'Desenvolvemos uma página profissional, rápida e focada em transformar visitantes em contatos reais direto no seu WhatsApp.',
    tag: 'Desenvolvimento',
  },
  {
    icon: Star,
    title: 'Gestão de Reputação',
    text: 'Estratégias para multiplicar as suas avaliações positivas de forma ética, construindo autoridade e confiança na sua região.',
    tag: 'Reputação',
  },
]

export function Solution() {
  return (
    <section id="metodo" className="relative overflow-hidden py-24 lg:py-36">
      {/* A faixa de luz respira junto com o progresso da página */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-primary/5 blur-[120px]"
        style={{ opacity: 'calc(0.4 + var(--scroll, 0))' }}
      />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Reveal
            as="span"
            className="inline-block text-sm font-medium tracking-[0.2em] text-primary uppercase"
          >
            O Método Vortec
          </Reveal>
          <MaskText
            as="h2"
            text="Transformamos a sua presença digital no seu melhor vendedor."
            highlight="no seu melhor vendedor."
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
          />
          <Reveal as="p" delay={300} className="mt-4 text-lg text-muted-foreground">
            Trabalhando 24 horas por dia, 7 dias por semana — sem folga, sem
            comissão.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={i * 130}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_60px_-20px] hover:shadow-primary/30"
            >
              <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                  {service.tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
