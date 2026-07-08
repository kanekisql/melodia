import { MusicCard } from '@features/music-discovery/components/MusicCard'
import type { MusicCardItem } from '@features/music-discovery/components/MusicCard'
import { Container } from '@shared/ui/Container'
import { SectionTitle } from '@shared/ui/SectionTitle'

type TrackGridSectionProps = {
  readonly id?: string
  readonly title: string
  readonly tracks: readonly MusicCardItem[]
}

export function TrackGridSection({ id, title, tracks }: TrackGridSectionProps) {
  return (
    <section className="animate-fade-up py-12 sm:py-16" id={id}>
      <Container>
        <SectionTitle actionLabel="Ver más" title={title} />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5">
          {tracks.map((track) => (
            <MusicCard item={track} key={track.id} />
          ))}
        </div>
      </Container>
    </section>
  )
}
