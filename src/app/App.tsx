import { AppProviders } from '@app/providers/AppProviders'
import { appRouter } from '@app/routes/router'
import { RouterProvider } from 'react-router'

export function App() {
  return (
    <AppProviders>
      <RouterProvider router={appRouter} />
    </AppProviders>
  )
}
