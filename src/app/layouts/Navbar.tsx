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
    // ─── FILTRO DE CRISTAL AVANZADO (Z-50 + Opacidad calibrada al 40%) ───
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0516]/40 backdrop-blur-xl transition-all duration-300">
      <Container>
        <nav
          aria-label="Navegación principal"
          className="flex min-h-20 items-center justify-between"
        >
          {/* LOGO EN GRADIENTE DE NEÓN ELÉCTRICO */}
          <Link
            className="flex items-center gap-2 text-lg font-bold tracking-tight transition hover:opacity-80"
            to={APP_ROUTES.home}
          >
            <span aria-hidden="true" className="text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">🎵</span>
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              MelodIA
            </span>
          </Link>

          {/* MENÚ DESKTOP CON EFECTO HOVER SUAVE */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) =>
              item.href.startsWith('#') ? (
                <a
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                  key={item.label}
                  to={item.href}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* BOTÓN HAMBURGUESA RETOCADO PARA ESTILO OSCURO */}
          <button
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú de navegación"
            className="grid size-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-all hover:border-white/[0.18] hover:text-white md:hidden"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            type="button"
          >
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </nav>

        {/* MENÚ MÓVIL ADAPTADO AL FONDO LÍQUIDO */}
        {isMenuOpen ? (
          <div className="grid gap-2 border-t border-white/[0.06] py-4 md:hidden">
            {navItems.map((item) =>
              item.href.startsWith('#') ? (
                <a
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-400 transition-all hover:bg-white/[0.04] hover:text-white"
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-400 transition-all hover:bg-white/[0.04] hover:text-white"
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