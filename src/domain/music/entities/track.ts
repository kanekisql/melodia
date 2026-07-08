export type ExternalMusicProvider = 'spotify' | 'youtube' | 'other'

export type TrackExternalLink = {
  readonly provider: ExternalMusicProvider
  readonly url: string
}

export type Track = {
  readonly id: string
  readonly title: string
  readonly artist: string
  readonly album?: string
  readonly durationMs?: number
  readonly artworkUrl?: string
  readonly previewUrl?: string
  readonly externalLinks: readonly TrackExternalLink[]
}
