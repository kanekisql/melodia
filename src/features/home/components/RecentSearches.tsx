import { RECENT_SEARCHES } from '@features/home/data/home.mock'
import { Container } from '@shared/ui/Container'
import { SectionTitle } from '@shared/ui/SectionTitle'

export function RecentSearches() {
  return (
    <section className="animate-fade-up py-12 sm:py-16">
      <Container>
        <SectionTitle actionLabel="Ver más" title="🕘 Recientes" />
        <div className="flex flex-wrap gap-3">
          {RECENT_SEARCHES.map((search) => (
            <button
              className="rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-foreground-muted shadow-soft backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              key={search}
              type="button"
            >
              {search}
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}
