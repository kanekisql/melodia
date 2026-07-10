import type { MusicCardItem } from '@features/music-discovery/components/MusicCard'

export const TRENDING_TRACKS: readonly MusicCardItem[] = [
  {
    id: 'trend-1',
    title: 'Midnight Pulse',
    artist: 'Nova Echo',
    coverGradient: 'linear-gradient(135deg, #1d4ed8, #7c3aed 48%, #06b6d4)',
  },
  {
    id: 'trend-2',
    title: 'Luz de Neón',
    artist: 'Valeria Norte',
    coverGradient: 'linear-gradient(135deg, #0f172a, #9333ea 52%, #22d3ee)',
  },
  {
    id: 'trend-3',
    title: 'After Hours Code',
    artist: 'The Static Room',
    coverGradient: 'linear-gradient(135deg, #020617, #2563eb 45%, #a855f7)',
  },
  {
    id: 'trend-4',
    title: 'Cian y Violeta',
    artist: 'Marea Digital',
    coverGradient: 'linear-gradient(135deg, #164e63, #4c1d95 55%, #67e8f9)',
  },
  {
    id: 'trend-5',
    title: 'Night Runner',
    artist: 'Pixel Avenue',
    coverGradient: 'linear-gradient(135deg, #111827, #6d28d9 50%, #0ea5e9)',
  },
  {
    id: 'trend-6',
    title: 'Aurora Synth',
    artist: 'Luna Circuit',
    coverGradient: 'linear-gradient(135deg, #312e81, #0891b2 48%, #c084fc)',
  },
  {
    id: 'trend-7',
    title: 'Blue Static',
    artist: 'Ocean Bias',
    coverGradient: 'linear-gradient(135deg, #0c4a6e, #1e1b4b 46%, #8b5cf6)',
  },
  {
    id: 'trend-8',
    title: 'Soft Gravity',
    artist: 'Milo Reyes',
    coverGradient: 'linear-gradient(135deg, #1e293b, #581c87 52%, #38bdf8)',
  },
]

export const RECOMMENDED_TRACKS: readonly MusicCardItem[] = [
  {
    id: 'rec-1',
    title: 'Lo-Fi Rain',
    artist: 'Quiet Terminal',
    coverGradient: 'linear-gradient(135deg, #030712, #155e75 45%, #8b5cf6)',
    isRecommended: true, 
  },
  {
    id: 'rec-2',
    title: 'Programmer Flow',
    artist: 'Syntax Waves',
    coverGradient: 'linear-gradient(135deg, #082f49, #4c1d95 55%, #22d3ee)',
    isRecommended: true, 
  },
  {
    id: 'rec-3',
    title: 'Calma Lunar',
    artist: 'Sofia Atlas',
    coverGradient: 'linear-gradient(135deg, #172554, #6b21a8 48%, #67e8f9)',
    isRecommended: true, 
  },
  {
    id: 'rec-4',
    title: 'Indie at 2 AM',
    artist: 'Glass Harbor',
    coverGradient: 'linear-gradient(135deg, #18181b, #7e22ce 45%, #0284c7)',
    isRecommended: true, 
  },
  {
    id: 'rec-5',
    title: 'Focus Bloom',
    artist: 'Mina Cloud',
    coverGradient: 'linear-gradient(135deg, #0f172a, #0e7490 50%, #a78bfa)',
    isRecommended: true, 
  },
  {
    id: 'rec-6',
    title: 'Electric Nostalgia',
    artist: 'Retro Signal',
    coverGradient: 'linear-gradient(135deg, #1e1b4b, #7c3aed 44%, #06b6d4)',
    isRecommended: true, 
  },
]

export const RECENT_SEARCHES = [
  {
    mood: "😊",
    text: "Música para levantar el ánimo",
  },
  {
    mood: "😢",
    text: "Estoy triste",
  },
  {
    mood: "🏋️",
    text: "Entrenamiento intenso",
  },
  {
    mood: "🌙",
    text: "Lo-fi para dormir",
  },
  {
    mood: "🎸",
    text: "Rock en español",
  },
]