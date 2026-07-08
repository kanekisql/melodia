// src/app/layouts/MainLayout.tsx
import { Footer } from '@app/layouts/Footer'
import { Navbar } from '@app/layouts/Navbar'
import { Outlet } from 'react-router'
import { AmbientBackground } from '@shared/components/visual/AmbientBackground';

export function MainLayout() {
  return (
    // TECH LEAD NOTE: Quitamos 'bg-background' para evitar que este contenedor
    // tape con un color sólido a las capas de AmbientBackground.
    <div className="relative min-h-screen overflow-hidden text-foreground">
      
      {/* Nuestro sistema inmersivo de capas (Base + Blobs + Noise) */}
      <AmbientBackground />

      {/* Capa de UI: Forzamos un orden relativo superior para interactuar sin problemas */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Outlet />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}