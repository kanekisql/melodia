export const APP_ROUTES = {
  home: '/',
} as const

export type AppRouteKey = keyof typeof APP_ROUTES
