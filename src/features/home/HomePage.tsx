import { Hero } from '@features/home/components/Hero'
import { RecentSearches } from '@features/home/components/RecentSearches'
import { TrackGridSection } from '@features/home/components/TrackGridSection'
import {
  RECOMMENDED_TRACKS,
  TRENDING_TRACKS,
} from '@features/home/data/home.mock'

export function HomePage() {
  return (
    <>
      <Hero />

      <TrackGridSection
        title="✨ Recomendado para ti"
        tracks={RECOMMENDED_TRACKS}
      />

      <TrackGridSection
        id="explorar"
        title="🔥 Tendencias"
        tracks={TRENDING_TRACKS}
      />
    
      <RecentSearches />
    </>
  )
}
