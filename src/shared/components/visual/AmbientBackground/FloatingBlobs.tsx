// src/shared/components/visual/AmbientBackground/FloatingBlobs.tsx
import { useEffect, useRef } from 'react'

interface LiquidBlob {
  pctX: number        
  pctY: number        
  radiusBase: number
  radiusPulse: number
  rangeX: number      
  rangeY: number      
  speedX: number
  speedY: number
  speedR: number
  colorRGB: string
  alpha: number // Intensidad aumentada
}

interface MiniParticle {
  x: number
  y: number
  radius: number
  baseX: number
  wobbleSpeed: number
  wobbleRange: number
  speedY: number
  opacity: number
}

export function FloatingBlobs() {
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const fgCanvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const bgCanvas = bgCanvasRef.current
    const fgCanvas = fgCanvasRef.current
    if (!bgCanvas || !fgCanvas) return

    const bgCtx = bgCanvas.getContext('2d')
    const fgCtx = fgCanvas.getContext('2d')
    if (!bgCtx || !fgCtx) return

    const resizeCanvas = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      bgCanvas.width = w
      bgCanvas.height = h
      fgCanvas.width = w
      fgCanvas.height = h
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // ─── CAPA 1: 6 BLOBS GRANDES CON INTENSIDAD NEÓN RESALTANTE ───
    const blobs: LiquidBlob[] = [
      { 
        pctX: 0.15, pctY: 0.2, radiusBase: 175, radiusPulse: 25,
        rangeX: 220, rangeY: 180, speedX: 0.0006, speedY: 0.0004, speedR: 0.001,
        colorRGB: '124, 58, 237', alpha: 0.48 // Violeta Intenso
      },
      { 
        pctX: 0.85, pctY: 0.15, radiusBase: 165, radiusPulse: 20,
        rangeX: 200, rangeY: 240, speedX: 0.0005, speedY: 0.0007, speedR: 0.0008,
        colorRGB: '6, 182, 212', alpha: 0.42 // Cian Eléctrico
      },
      { 
        pctX: 0.1, pctY: 0.8, radiusBase: 185, radiusPulse: 30,
        rangeX: 250, rangeY: 160, speedX: 0.0004, speedY: 0.0005, speedR: 0.0007,
        colorRGB: '79, 70, 229', alpha: 0.45 // Índigo Profundo
      },
      { 
        pctX: 0.9, pctY: 0.85, radiusBase: 180, radiusPulse: 25,
        rangeX: 210, rangeY: 220, speedX: 0.0007, speedY: 0.0003, speedR: 0.0009,
        colorRGB: '236, 72, 153', alpha: 0.38 // Fucsia Encendido
      },
      { 
        pctX: 0.35, pctY: 0.5, radiusBase: 155, radiusPulse: 20,
        rangeX: 180, rangeY: 250, speedX: 0.0003, speedY: 0.0006, speedR: 0.0011,
        colorRGB: '124, 58, 237', alpha: 0.32 // Soporte Central Izquierdo
      },
      { 
        pctX: 0.65, pctY: 0.45, radiusBase: 170, radiusPulse: 30,
        rangeX: 240, rangeY: 170, speedX: 0.0005, speedY: 0.0004, speedR: 0.0006,
        colorRGB: '6, 182, 212', alpha: 0.32 // Soporte Central Derecho
      }
    ]

    // ─── CAPA 2: LLUVIA DE MICRO-BURBUJAS EN COLA CONTINUA (65 Partículas) ───
    const particles: MiniParticle[] = []
    const totalParticles = 65 // ¡Más densidad mágica!

    for (let i = 0; i < totalParticles; i++) {
      const initialX = Math.random() * window.innerWidth
      particles.push({
        x: initialX,
        baseX: initialX,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.8 + 0.6, // Desde micro-polvo hasta burbujitas finas
        wobbleSpeed: Math.random() * 0.0016 + 0.0008,
        wobbleRange: Math.random() * 14 + 4,
        speedY: Math.random() * 0.25 + 0.1, // Ritmo pacífico variado
        opacity: Math.random() * 0.4 + 0.12, // Unas más brillantes que otras
      })
    }

    let animationFrameId: number

    const render = (timestamp: number) => {
      const w = bgCanvas.width
      const h = bgCanvas.height

      bgCtx.clearRect(0, 0, w, h)
      fgCtx.clearRect(0, 0, w, h)

      // 1. Renderizar Blobs con Núcleo Expandido
      bgCtx.globalCompositeOperation = 'screen'
      blobs.forEach((blob) => {
        const baseX = w * blob.pctX
        const baseY = h * blob.pctY

        const currentX = baseX + 
          Math.sin(timestamp * blob.speedX) * blob.rangeX + 
          Math.cos(timestamp * (blob.speedX * 0.4)) * (blob.rangeX * 0.3)

        const currentY = baseY + 
          Math.cos(timestamp * blob.speedY) * blob.rangeY + 
          Math.sin(timestamp * (blob.speedY * 0.5)) * (blob.rangeY * 0.3)

        const currentRadius = blob.radiusBase + Math.sin(timestamp * blob.speedR) * blob.radiusPulse

        const gradient = bgCtx.createRadialGradient(currentX, currentY, 0, currentX, currentY, currentRadius)
        // Expandimos el radio del núcleo brillante para darle más "fuerza" visual
        gradient.addColorStop(0, `rgba(${blob.colorRGB}, ${blob.alpha})`)
        gradient.addColorStop(0.45, `rgba(${blob.colorRGB}, ${blob.alpha * 0.6})`)
        gradient.addColorStop(1, `rgba(${blob.colorRGB}, 0)`)

        bgCtx.beginPath()
        bgCtx.arc(currentX, currentY, currentRadius, 0, Math.PI * 2)
        bgCtx.fillStyle = gradient
        bgCtx.fill()
      })

      // 2. Renderizar Micro-burbujas Blancas Cristalinas
      particles.forEach((p) => {
        p.y -= p.speedY
        p.x = p.baseX + Math.sin(timestamp * p.wobbleSpeed) * p.wobbleRange

        if (p.y < -10) {
          p.y = h + 10
          p.baseX = Math.random() * w
          p.x = p.baseX
        }

        fgCtx.beginPath()
        fgCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        
        const pGrad = fgCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
        pGrad.addColorStop(0, `rgba(255, 255, 255, ${p.opacity})`)
        pGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
        
        fgCtx.fillStyle = pGrad
        fgCtx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden pointer-events-none bg-[#0a0516]">
      {/* CORREGIDO: Reducido a blur-[52px] para traer los colores al frente con fuerza */}
      <canvas
        ref={bgCanvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none blur-[52px]"
      />
      <canvas
        ref={fgCanvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
      />
    </div>
  )
}