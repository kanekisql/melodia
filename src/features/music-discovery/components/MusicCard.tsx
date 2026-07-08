export type MusicCardItem = {
  readonly id: string
  readonly title: string
  readonly artist: string
  readonly coverGradient: string
}

type MusicCardProps = {
  readonly item: MusicCardItem
}

export function MusicCard({ item }: MusicCardProps) {
  return (
    <article className="group rounded-xl border border-border/70 bg-surface/55 p-3 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-elevated/70">
      <div
        aria-label={`Portada simulada de ${item.title}`}
        className="aspect-square rounded-lg shadow-panel"
        role="img"
        style={{ background: item.coverGradient }}
      />
      <div className="mt-4 min-w-0">
        <h3 className="truncate text-sm font-semibold text-foreground">{item.title}</h3>
        <p className="mt-1 truncate text-sm text-foreground-subtle">{item.artist}</p>
      </div>
    </article>
  )
}
