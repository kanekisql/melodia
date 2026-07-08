// src/features/home/components/SearchBar.tsx
import { useState, useEffect } from 'react'
import { Sparkles, Mic, MicOff, Loader2 } from 'lucide-react'
import { Button } from '@shared/ui/Button'

export function SearchBar() {
  const [isListening, setIsListening] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [circlesScale, setCirclesScale] = useState<number[]>([1, 1, 1, 1, 1])

  useEffect(() => {
    if (!isListening) return

    const interval = window.setInterval(() => {
      setCirclesScale([
        Math.random() * 1.6 + 0.5,
        Math.random() * 2.2 + 0.7,
        Math.random() * 2.8 + 1.0,
        Math.random() * 2.2 + 0.7,
        Math.random() * 1.6 + 0.5,
      ])
    }, 100)

    return () => window.clearInterval(interval)
  }, [isListening])

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false)
      setCirclesScale([1, 1, 1, 1, 1])
    } else {
      setIsListening(true)
    }
  }

  // Se ejecuta tanto con el botón "Sorpréndeme" como al presionar ENTER en el input
  const procesarBusqueda = (textoPrompt: string) => {
    setIsListening(false)
    setCirclesScale([1, 1, 1, 1, 1])
    setIsProcessing(true)

    console.log("Enviando prompt a MelodIA:", textoPrompt)

    // Simulación de respuesta de la IA (Aquí conectarás tu backend/contexto más adelante)
    setTimeout(() => {
      setIsProcessing(false)
      setInputValue('')
      alert(`MelodIA procesó tu mood: "${textoPrompt}". ¡Aquí tienes tus canciones TOP recomendadas!`)
      // TECH LEAD NOTE: Aquí irá la redirección o actualización del estado global/router
      // window.location.href = '/explorar' 
    }, 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    procesarBusqueda(inputValue)
  }

  const handleSurpriseClick = () => {
    const promptsSorpresa = [
      'Generando un mix de Rock alternativo bailable...',
      'Buscando lo mejor del Synthwave espacial para concentrarse...',
      'Armando un set de Lo-Fi relajante para una tarde lluviosa...'
    ]
    const randomPrompt = promptsSorpresa[Math.floor(Math.random() * promptsSorpresa.length)]
    setInputValue(randomPrompt)
    procesarBusqueda(randomPrompt)
  }

  return (
    <div className="mx-auto mt-8 w-full max-w-2xl select-none">
      
      {/* Círculos de voz reactivos */}
      <div className="h-16 flex items-center justify-center gap-2.5 mb-3 overflow-hidden">
        {isProcessing ? (
          <div className="flex flex-col items-center gap-1.5 animate-pulse">
            <div className="flex gap-1.5 justify-center items-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping [animation-delay:0.4s]" />
            </div>
            <span className="text-[10px] tracking-widest text-cyan-400 font-semibold uppercase">
              Modelando Ritmo Inteligente...
            </span>
          </div>
        ) : isListening ? (
          <div className="flex items-center justify-center gap-2.5 h-full">
            {circlesScale.map((scale, index) => {
              const colors = [
                'bg-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.4)]',
                'bg-violet-500/60 shadow-[0_0_20px_rgba(124,58,237,0.4)]',
                'bg-fuchsia-500/50 shadow-[0_0_25px_rgba(236,72,153,0.5)]',
                'bg-violet-500/60 shadow-[0_0_20px_rgba(124,58,237,0.4)]',
                'bg-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
              ]
              return (
                <div 
                  key={index}
                  style={{ transform: `scaleY(${scale})` }} 
                  className={`w-3 h-3 rounded-full transition-transform duration-100 ease-out ${colors[index]}`} 
                />
              )
            })}
          </div>
        ) : (
          <div className="flex gap-1.5 items-center opacity-20">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white animate-bounce" />
            <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.15s]" />
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]" />
          </div>
        )}
      </div>

      {/* Formulario que escucha ENTER nativamente */}
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
        <div className={`flex min-h-14 flex-1 items-center rounded-full border bg-surface/70 px-5 shadow-soft backdrop-blur transition-all duration-500 ${
          isListening ? 'border-cyan-500/40 bg-cyan-950/10' : 'border-border'
        }`}>
          
          <span className="flex items-center gap-1 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mr-3 select-none">
            <Sparkles className={`w-3.5 h-3.5 text-cyan-400 ${isProcessing ? 'animate-spin' : ''}`} />
            MelodIA
          </span>

          <input
            className="w-full bg-transparent text-base text-foreground placeholder:text-foreground-subtle focus:outline-none disabled:opacity-40"
            disabled={isProcessing}
            placeholder={isListening ? "Te escucho, dime qué ritmo quieres..." : "Estoy triste, quiero rock de los 90..."}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            type="button"
            disabled={isProcessing}
            onClick={toggleListening}
            className={`ml-3 grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-300 relative ${
              isListening 
                ? 'border-fuchsia-500/40 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105' 
                : 'border-border bg-surface-elevated text-lg hover:border-secondary hover:text-secondary'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            {isListening && <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping pointer-events-none" />}
          </button>
        </div>

       {/* ¡BOTÓN SORPRÉNDEME REVOLUCIONADO! */}
         {/* ¡BOTÓN CON DOS ESTADOS INTERACTIVOS (HOVER Y CLIC ALBOROTADO)! */}
<Button 
  className={`relative min-h-14 px-8 rounded-full font-bold overflow-visible transition-all duration-300 active:scale-95 disabled:pointer-events-none group bg-slate-950 text-white border select-none ${
    isProcessing 
      ? 'border-fuchsia-500 shadow-[0_0_40px_rgba(236,72,153,0.7)] scale-105' 
      : 'border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)]'
  }`} 
  type="button"
  disabled={isProcessing}
  onClick={handleSurpriseClick}
>
  {/* FONDO DINÁMICO: 
      - En reposo/hover: Gradiente suave líquido.
      - Al procesar: Se vuelve un destello alborotado ultra rápido cruzando de izquierda a derecha (bg-[size:400%])
  */}
  <span className={`absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 via-purple-600 via-yellow-400 to-cyan-400 opacity-95 group-hover:opacity-100 transition-all duration-300 ${
    isProcessing 
      ? 'bg-[size:400%_auto] animate-alborotado-bg' 
      : 'bg-[size:200%_auto] animate-suave-bg'
  }`} />

  {/* RÁFAGA DE INSTRUMENTOS MUSICALES (Efecto Hover e Intensidad en Clic) */}
  <div className="absolute inset-0 pointer-events-none overflow-visible">
    {/* Emojis base que salen SI o SI en Hover normal */}
    <span className="absolute -top-4 left-4 text-base opacity-0 group-hover:animate-float-particle [animation-delay:0s]">🎧</span>
    <span className="absolute -top-5 left-1/4 text-lg opacity-0 group-hover:animate-float-particle [animation-delay:0.3s]">🎸</span>
    <span className="absolute -top-3 left-1/2 text-sm opacity-0 group-hover:animate-float-particle [animation-delay:0.1s]">🥁</span>
    <span className="absolute -top-6 right-1/4 text-base opacity-0 group-hover:animate-float-particle [animation-delay:0.5s]">🎹</span>
    <span className="absolute -top-4 right-4 text-base opacity-0 group-hover:animate-float-particle [animation-delay:0.2s]">🎤</span>

    {/* SUPER RÁFAGA: Emojis extras que explotan alborotados a doble velocidad al hacer clic */}
    {isProcessing && (
      <>
        <span className="absolute -top-7 left-10 text-lg animate-float-particle [animation-delay:0.1s] [animation-duration:0.6s]">📻</span>
        <span className="absolute -top-6 left-1/3 text-xl animate-float-particle [animation-delay:0.4s] [animation-duration:0.5s]">🎶</span>
        <span className="absolute -top-8 right-1/3 text-lg animate-float-particle [animation-delay:0.2s] [animation-duration:0.7s]">💥</span>
        <span className="absolute -top-5 right-12 text-xl animate-float-particle [animation-delay:0.5s] [animation-duration:0.5s]">⚡</span>
      </>
    )}
  </div>

  {/* Contenido del Texto e Íconos */}
  <span className="relative z-10 flex items-center justify-center gap-2.5 tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
    {isProcessing ? (
      <>
        {/* Spinner girando velozmente con brillo blanco */}
        <Loader2 className="w-5 h-5 animate-spin text-white drop-shadow-[0_0_8px_white]" />
        {/* Filtro de géneros parpadeante */}
        <span className="animate-scan-text text-sm font-extrabold uppercase tracking-wider" />
      </>
    ) : (
      <>
        {/* Icono animado del estado normal */}
        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:animate-bounce">
          🔮
        </span>
        <span className="font-extrabold tracking-wide">
          Sorpréndeme
        </span>
      </>
    )}
  </span>

  {/* Efecto de Aura resplandeciente exterior */}
  <span className={`absolute -inset-px rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 blur-md transition-opacity duration-500 ${
    isProcessing ? 'opacity-80 animate-pulse' : 'opacity-0 group-hover:opacity-60'
  }`} />
</Button>
      </form>
    </div>
  )
}