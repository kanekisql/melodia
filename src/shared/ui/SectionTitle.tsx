type SectionTitleProps = {
  readonly eyebrow?: string
  readonly title: string
  readonly actionLabel?: string
}

export function SectionTitle({
  actionLabel = 'Ver más',
  eyebrow,
  title,
}: SectionTitleProps) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <p className="mb-2 text-sm font-medium text-foreground-subtle">{eyebrow}</p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
      </div>
      <button
        aria-label={`${actionLabel} de ${title}`}
        className="shrink-0 text-sm font-medium text-secondary transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
        type="button"
      >
        {actionLabel} →
      </button>
    </div>
  )
}
