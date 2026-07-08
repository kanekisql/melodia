export type RecommendationIntent =
  | 'mood'
  | 'activity'
  | 'genre'
  | 'artist'
  | 'chart'
  | 'unknown'

export type RecommendationRequest = {
  readonly query: string
  readonly intent: RecommendationIntent
}
