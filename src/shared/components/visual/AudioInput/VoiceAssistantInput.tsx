// src/shared/components/visual/AudioInput/VoiceAssistantInput.tsx
import { useState, useEffect } from 'react'
import { Sparkles, Mic, MicOff, Send, Loader2 } from 'lucide-react'

export function VoiceAssistantInput() {
  const [isListening, setIsListening] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [circlesScale, setCirclesScale] = useState<number[]>([1, 1, 1, 1, 1])

  // ─── OPTIMIZADO: El Effect SOLO se activa si está escuchando ───
  useEffect(() => {
    if (!isListening) return // Si está apagado, no hace absolutamente nada sincrónico

    const interval = window.setInterval(() => {
      setCirclesScale([
        Math.random() * 1.5 + 0.6,
        Math.random() * 2.0 + 0.8,
        Math.random() * 2.5 + 1.0,
        Math.random() * 2.0 + 0.8,
        Math.random() * 1.5 + 0.6,
      ])
    }, 120)

    // Al apagar el micro, limpiamos el intervalo limpiamente
    return () => {
      window.clearInterval(interval)
    }
  }, [isListening])

  // CONTROLADOR INTELEGENTE: Maneja el encendido/apagado y reinicia los círculos aquí
  const toggleListening = () => {
    if (isListening) {
      setIsListening(false)
      setCirclesScale([1, 1, 1, 1, 1]) // Reseteo seguro fuera del render principal
    } else {
      setIsListening(true)
    }
  }

  // Función para simular el envío y procesamiento de la IA
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() && !isListening) return

    setIsListening(false)
    setCirclesScale([1, 1, 1, 1, 1]) // Reseteo seguro aquí también
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      setInputValue('') 
    }, 2500)
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 select-none">
      
      {/* ─── CAPA DE ANIMACIÓN: CÍRCULOS DE LUZ INTEGRADOS ─── */}
      <div className="h-20 flex items-center justify-center gap-3 mb-2 overflow-hidden">
        {isProcessing ? (
          <div className="flex flex-col items-center gap-2 animate-pulse">
            <div className="flex gap-1.5 justify-center items-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping [animation-delay:0.4s]" />
            </div>
            <span className="text-xs tracking-widest text-cyan-400/80 font-medium uppercase animate-pulse">
              Modelando Ritmo...
            </span>
          </div>
        ) : isListening ? (
          <div className="flex items-center justify-center gap-3 h-full">
            <div 
              style={{ transform: `scaleY(${circlesScale[0]})` }} 
              className="w-2.5 h-2.5 rounded-full bg-cyan-400/70 transition-transform duration-100 ease-out shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
            />
            <div 
              style={{ transform: `scaleY(${circlesScale[1]})` }} 
              className="w-4 h-4 rounded-full bg-violet-500/60 transition-transform duration-100 ease-out shadow-[0_0_20px_rgba(124,58,237,0.5)]" 
            />
            <div 
              style={{ transform: `scaleY(${circlesScale[2]})` }} 
              className="w-7 h-7 rounded-full bg-fuchsia-500/50 transition-transform duration-100 ease-out shadow-[0_0_25px_rgba(236,72,153,0.6)]" 
            />
            <div 
              style={{ transform: `scaleY(${circlesScale[3]})` }} 
              className="w-4 h-4 rounded-full bg-violet-500/60 transition-transform duration-100 ease-out shadow-[0_0_20px_rgba(124,58,237,0.5)]" 
            />
            <div 
              style={{ transform: `scaleY(${circlesScale[4]})` }} 
              className="w-2.5 h-2.5 rounded-full bg-cyan-400/70 transition-transform duration-100 ease-out shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
            />
          </div>
        ) : (
          <div className="flex gap-2 items-center opacity-25 hover:opacity-40 transition-opacity duration-300">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white animate-bounce" />
            <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.15s]" />
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.3s]" />
          </div>
        )}
      </div>

      {/* ─── CONTENEDOR PRINCIPAL (CON TEXTO E INPUT) ─── */}
      <form 
        onSubmit={handleSend}
        className={`relative flex items-center bg-white/[0.02] backdrop-blur-2xl border rounded-2xl p-2.5 pl-5 shadow-2xl transition-all duration-500 ${
          isListening 
            ? 'border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-cyan-950/5' 
            : isProcessing 
            ? 'border-fuchsia-500/40 shadow-[0_0_30px_rgba(236,72,153,0.15)] bg-fuchsia-950/5'
            : 'border-white/[0.06] focus-within:border-violet-500/40 focus-within:bg-white/[0.04]'
        }`}
      >
        <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mr-3 select-none">
          <Sparkles className={`w-3.5 h-3.5 text-cyan-400 ${isProcessing ? 'animate-spin' : ''}`} />
          <span>MelodIA</span>
        </div>

        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isProcessing}
          placeholder={isListening ? "Escuchando tu voz..." : "Describe la melodía que imaginas o escribe aquí..."}
          className="w-full bg-transparent text-white placeholder-white/20 outline-none text-sm pr-12 disabled:opacity-50"
        />

        <div className="flex items-center gap-2">
          {inputValue.trim() && !isListening ? (
            <button
              type="submit"
              disabled={isProcessing}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)] hover:opacity-90 active:scale-95 transition-all"
            >
              {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          ) : (
            <button
              type="button"
              disabled={isProcessing}
              onClick={toggleListening}
              className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                isListening 
                  ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.5)] scale-105' 
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              {isListening && (
                <span className="absolute inset-0 rounded-xl bg-cyan-400/30 animate-ping pointer-events-none" />
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}