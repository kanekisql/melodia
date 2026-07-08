import { Container } from '@shared/ui/Container'

const footerLinks = ['GitHub', 'Portfolio', 'LinkedIn'] as const

export function Footer() {
  return (
    <footer
      className="relative z-0 border-t border-border/70 py-10 text-sm text-foreground-subtle"
      id="acerca-de"
    >
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">MelodIA</p>
          <p className="mt-2 max-w-xl">
            Proyecto educativo desarrollado con React + Vite + TypeScript.
          </p>
        </div>

        <nav aria-label="Enlaces externos simulados">
          <ul className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  className="transition hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
