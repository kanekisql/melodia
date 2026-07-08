import { SearchBar } from '@features/home/components/SearchBar'
import { Container } from '@shared/ui/Container'

export function Hero() {
  return (
    <section className="animate-fade-up flex min-h-[calc(100vh-5rem)] items-center py-20 sm:py-24">
      <Container className="text-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-secondary">
          Asistente musical inteligente
        </p>
        <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          MelodIA
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground-muted sm:text-xl">
          Descubre la música perfecta para cada momento utilizando Inteligencia
          Artificial.
        </p>
        <SearchBar />
      </Container>
    </section>
  )
}
