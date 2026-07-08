import { APP_ROUTES } from '@app/routes/routes.config'
import { Container } from '@shared/ui/Container'
import { useState } from 'react'
import { Link } from 'react-router'

const navItems = [
  { label: 'Inicio', href: APP_ROUTES.home },
  { label: 'Explorar', href: '#explorar' },
  { label: 'Acerca de', href: '#acerca-de' },
] as const

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <Container>
        <nav
          aria-label="Navegación principal"
          className="flex min-h-20 items-center justify-between"
        >
          <Link
            className="text-lg font-semibold tracking-tight text-foreground transition hover:text-secondary"
            to={APP_ROUTES.home}
          >
            <span aria-hidden="true">🎵</span> MelodIA
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) =>
              item.href.startsWith('#') ? (
                <a
                  className="text-sm font-medium text-foreground-muted transition hover:text-foreground"
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  className="text-sm font-medium text-foreground-muted transition hover:text-foreground"
                  key={item.label}
                  to={item.href}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú de navegación"
            className="grid size-11 place-items-center rounded-full border border-border bg-surface/60 text-foreground transition hover:border-border-strong md:hidden"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            type="button"
          >
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </nav>

        {isMenuOpen ? (
          <div className="grid gap-2 border-t border-border/60 py-4 md:hidden">
            {navItems.map((item) =>
              item.href.startsWith('#') ? (
                <a
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground-muted transition hover:bg-surface hover:text-foreground"
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground-muted transition hover:bg-surface hover:text-foreground"
                  key={item.label}
                  onClick={() => setIsMenuOpen(false)}
                  to={item.href}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        ) : null}
      </Container>
    </header>
  )
}
