export const APP_ROUTES = {
  home: '/',
  history: '/history',
  settings: '/settings',
  about: '/about',
} as const

export type AppRouteKey = keyof typeof APP_ROUTES
export type AppRoutePath = (typeof APP_ROUTES)[AppRouteKey]
