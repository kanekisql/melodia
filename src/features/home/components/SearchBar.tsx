import { Button } from '@shared/ui/Button'

export function SearchBar() {
  return (
    <form className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="music-search">
        Describe que musica quieres descubrir
      </label>
      <div className="flex min-h-14 flex-1 items-center rounded-full border border-border bg-surface/70 px-5 shadow-soft backdrop-blur">
        <input
          className="w-full bg-transparent text-base text-foreground placeholder:text-foreground-subtle focus:outline-none"
          id="music-search"
          placeholder="Estoy triste, quiero rock de los 90..."
          type="search"
        />
        <button
          aria-label="Usar microfono"
          className="ml-3 grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface-elevated text-lg transition hover:border-secondary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
          type="button"
        >
          🎙
        </button>
      </div>
      <Button className="min-h-14 px-7" type="button">
        Sorpréndeme
      </Button>
    </form>
  )
}
