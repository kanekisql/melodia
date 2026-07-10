import { RECENT_SEARCHES } from '@features/home/data/home.mock'
import { Container } from '@shared/ui/Container'
import { SectionTitle } from '@shared/ui/SectionTitle'

export function RecentSearches() {
  return (
    <section className="animate-fade-up py-12 sm:py-16">
      <Container>
        <SectionTitle actionLabel="Ver historial" title="🕘 Recientes" />
        <div className="flex flex-wrap gap-x-3 gap-y-4">
          {RECENT_SEARCHES.map((search) => (
            <button
              className="group rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] px-4 py-2 text-sm text-foreground-muted shadow-soft  transition duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 flex items-center gap-2"
              key={search.text}
              type="button"
            >
            <>
             <span
              className="
                text-lg

                transition-transform
              duration-500
              group-hover:rotate-6
              group-hover:scale-110


              "
            >
              {search.mood}
            </span>

            <span
              className="
                transition-colors
                duration-500
                group-hover:text-white
              "
            >
              {search.text}
            </span>            </>     
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}
