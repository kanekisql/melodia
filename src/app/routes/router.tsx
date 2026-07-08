import { MainLayout } from '@app/layouts/MainLayout'
import { HomeRoute } from '@app/routes/HomeRoute'
import { APP_ROUTES } from '@app/routes/routes.config'
import { createBrowserRouter } from 'react-router'

export const appRouter = createBrowserRouter([
  {
    path: APP_ROUTES.home,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomeRoute,
      },
    ],
  },
])
