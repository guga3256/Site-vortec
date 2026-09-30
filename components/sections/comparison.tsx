import type { CSSProperties } from 'react'
import { Globe, ImageOff, MapPin, MessageCircle, Phone, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CountUp, MaskText, Pin, Reveal } from '@/components/scroll'

/** Atalho para posicionar um elemento na linha do tempo da cena. */
const at = (from: number, speed = 7): CSSProperties =>
  ({ '--from': from, '--speed': speed }) as CSSProperties

export function Comparison() {
  return (
    // No desktop a seção prende e o contraste acontece sob o dedo.
    // No mobile ela tem altura normal e tudo já nasce montado (`--p` = 1).
    <Pin id="comparativo" className="md:h-[260vh]">
      <div className="flex flex-col justify-center py-24 md:sticky md:top-0 md:h-svh md:py-0">
        <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal
              as="span"
              className="inline-block text-sm font-medium tracking-[0.2em] text-primary uppercase"
            >
              O contraste
            </Reveal>
            <MaskText
              as="h2"
              text="Quando o cliente pesquisa, ele compara."
              highlight="ele compara."
              className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl"
            />
            <Reveal as="p" delay={280} className="mt-4 text-lg text-muted-foreground">
              Com qual destas duas empresas você acha que ele vai fechar
              negócio?
            </Reveal>
          </div>

          <div className="mt-10 grid items-start gap-6 md:grid-cols-2 lg:mt-12">
            <AmateurProfile />
            <ProProfile />
          </div>
        </div>
      </div>
    </Pin>
  )
}

function ProfileFrame({
  children,
  tone,
  label,
  className,
  style,
}: {
  children: React.ReactNode
  tone: 'bad' | 'good'
  label: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-3xl border bg-card',
        tone === 'bad' ? 'border-destructive/25' : 'border-primary/40',
        className,
      )}
      style={style}
    >
      <div
        className={cn(
          'flex items-center justify-between px-5 py-3 text-xs font-medium',
          tone === 'bad'
            ? 'bg-destructive/10 text-destructive'
            : 'bg-primary/10 text-primary',
        )}
      >
        <span className="tracking-[0.15em] uppercase">{label}</span>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> Google
        </span>
      </div>
      {children}
    </div>
  )
}

function AmateurProfile() {
  return (
    <ProfileFrame
      tone="bad"
      label="Invisível e amador"
      className="scrub scrub-out"
      style={at(0.08, 1.6)}
    >
      {/* Capa vazia */}
      <div className="flex h-28 items-center justify-center border-b border-white/5 bg-muted/40 text-muted-foreground">
        <ImageOff className="h-6 w-6 opacity-50" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground">
          Comércio do João
        </h3>
        <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <span className="flex text-muted-foreground/60">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5" />
            ))}
          </span>
          <span>Sem avaliações</span>
        </div>

        <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2.5 line-through decoration-destructive/60">
            <Phone className="h-4 w-4 opacity-40" /> Telefone não informado
          </li>
          <li className="flex items-center gap-2.5 line-through decoration-destructive/60">
            <Globe className="h-4 w-4 opacity-40" /> Sem site
          </li>
          <li className="flex items-center gap-2.5 line-through decoration-destructive/60">
            <MessageCircle className="h-4 w-4 opacity-40" /> Sem WhatsApp
          </li>
        </ul>

        <div className="mt-6 rounded-xl bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
          Perfil incompleto — dificilmente aparece nas buscas.
        </div>
      </div>
    </ProfileFrame>
  )
}

const PRO_ITEMS = [
  { icon: Phone, text: '(00) 90000-0000' },
  { icon: Globe, text: 'site profissional ativo' },
  { icon: MessageCircle, text: 'WhatsApp em 1 toque' },
]

const PRO_ACTIONS = ['Rotas', 'Ligar', 'Site']

function ProProfile() {
  return (
    <ProfileFrame
      tone="good"
      label="Impossível de ser ignorado"
    >
      {/* Capa profissional — a luz acende primeiro */}
      <div
        className="scrub scrub-in relative h-28 overflow-hidden border-b border-white/5 bg-gradient-to-br from-primary/40 via-primary/20 to-primary/5"
        style={{ ...at(0.12), '--dy': '-10px', '--dx': '0px' } as CSSProperties}
      >
        <div className="bg-grid absolute inset-0 opacity-40" />
        <span
          className="scrub scrub-in absolute bottom-3 left-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur"
          style={at(0.24)}
        >
          Aberto agora
        </span>
      </div>

      <div className="p-5">
        <h3
          className="scrub scrub-in font-display text-lg font-semibold text-foreground"
          style={at(0.18)}
        >
          Studio Premium — João
        </h3>

        <div
          className="scrub scrub-in mt-1 flex items-center gap-1.5 text-sm"
          style={at(0.3)}
        >
          <span className="font-medium text-foreground">
            <CountUp to={4.9} decimals={1} />
          </span>
          <span className="flex text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="scrub scrub-in h-3.5 w-3.5 fill-current"
                style={{ ...at(0.34 + i * 0.03, 14), '--dx': '0px' } as CSSProperties}
              />
            ))}
          </span>
          <span className="text-muted-foreground">
            <CountUp to={128} /> avaliações
          </span>
        </div>

        {/* Cada linha que faltava no amador aparece aqui, uma a uma */}
        <ul className="mt-5 space-y-2.5 text-sm text-foreground">
          {PRO_ITEMS.map((item, i) => (
            <li
              key={item.text}
              className="scrub scrub-in flex items-center gap-2.5"
              style={at(0.42 + i * 0.09)}
            >
              <item.icon className="h-4 w-4 text-primary" /> {item.text}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-2">
          {PRO_ACTIONS.map((action, i) => (
            <span
              key={action}
              className={cn(
                'scrub scrub-in flex-1 rounded-xl py-2 text-center text-xs font-medium',
                i === 0
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'border border-white/15 text-foreground',
              )}
              style={{ ...at(0.72 + i * 0.06), '--dy': '14px', '--dx': '0px' } as CSSProperties}
            >
              {action}
            </span>
          ))}
        </div>
      </div>
    </ProfileFrame>
  )
}
