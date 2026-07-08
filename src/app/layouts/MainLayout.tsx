import { Footer } from '@app/layouts/Footer'
import { Navbar } from '@app/layouts/Navbar'
import { Outlet } from 'react-router'

export function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(3,7,18,1)_58%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-80 bg-[linear-gradient(90deg,rgba(29,78,216,0.18),rgba(147,51,234,0.16),rgba(6,182,212,0.12))] blur-3xl"
      />
      <Navbar />
      <main className="relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
