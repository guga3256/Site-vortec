import { Logo } from '@/components/logo'
import { NAV_LINKS } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo withTagline />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Presença digital e SEO Local para negócios que querem ser
              encontrados por quem está pronto para comprar.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Navegação
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Vortec Marketing &amp; Soluções.
            Todos os direitos reservados.
          </p>
          <p>Especialistas em presença digital para negócios locais.</p>
        </div>
      </div>
    </footer>
  )
}
