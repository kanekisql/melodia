import { MusicCard } from '@features/music-discovery/components/MusicCard'
import type { MusicCardItem } from '@features/music-discovery/components/MusicCard'
import { Container } from '@shared/ui/Container'

type TrackGridSectionProps = {
  readonly id?: string
  readonly title: string
  readonly tracks: readonly MusicCardItem[]
}

export function TrackGridSection({ id, title, tracks }: TrackGridSectionProps) {
  const isRecommended = title.includes("Recomendado");

  return (
    <section className="py-16" id={id}>
      <Container>
        {/* Línea única: Título - Línea - Botón */}
        <div className="mb-10 flex items-center gap-6">
          
          {/* Título y subtítulo en un solo bloque */}
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-black text-white whitespace-nowrap">{title}</h2>
            {isRecommended && (
              <p className="text-cyan-400/60 text-xs font-mono tracking-widest uppercase whitespace-nowrap">
                Análisis en tiempo real para tu mood
              </p>
            )}
          </div>

          {/* Línea conectora */}
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />

          {/* Botón Ver más alineado a la derecha */}
          <button className="flex items-center gap-2 text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em] hover:text-white transition-all whitespace-nowrap">
            Ver lista completa
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </button>
        </div>

        {/* Grilla */}
        <div className={`grid gap-8 ${isRecommended ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'}`}>
          {tracks.map((track) => (
            <MusicCard item={{...track, isRecommended}} key={track.id} />
          ))}
        </div>
      </Container>
    </section>
  )
}