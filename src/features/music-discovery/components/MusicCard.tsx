export type MusicCardItem = {
  readonly id: string
  readonly title: string
  readonly artist: string
  readonly coverGradient: string
  readonly isRecommended?: boolean
}

type MusicCardProps = {
  readonly item: MusicCardItem
}

export function MusicCard({ item }: MusicCardProps) {
  const isWide = item.isRecommended;

  return (
    <article 
      className={`group relative flex overflow-hidden ${isWide 
        ? 'flex-row items-center gap-6 p-5 bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-3xl hover:border-violet-500/50 hover:bg-slate-800/50' 
        : 'flex-col p-4 bg-slate-900/20 border border-white/5 backdrop-blur-md rounded-[2rem] hover:border-cyan-500/30 hover:bg-slate-900/50'} 
      transition-all duration-500 hover:shadow-2xl`}
    >
      
      {/* CONTENEDOR DE IMAGEN / VINILO */}
      <div className={`relative overflow-visible ${
  isWide ? 'w-32 h-32 shrink-0' : 'aspect-square w-full'
}`}>
        
       {/* EL DISCO */}
{!isWide && (
  <div className="absolute inset-0 flex items-center justify-center z-0 overflow-visible">
    <div
      className="
        relative
        h-[72%]
        w-[72%]
        rounded-full
        transition-all
        duration-700
        ease-[cubic-bezier(.22,1,.36,1)]
        translate-x-0
        group-hover:translate-x-16
        animate-spin-slow
      "
    >
      {/* Disco */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-900 via-black to-zinc-800 shadow-2xl">
        {/* Surcos */}
        <div className="absolute inset-[6%] rounded-full border border-white/[0.05]" />
        <div className="absolute inset-[11%] rounded-full border border-white/[0.05]" />
        <div className="absolute inset-[16%] rounded-full border border-white/[0.05]" />
        <div className="absolute inset-[21%] rounded-full border border-white/[0.05]" />
        <div className="absolute inset-[26%] rounded-full border border-white/[0.05]" />
        <div className="absolute inset-[31%] rounded-full border border-white/[0.05]" />

        {/* Reflejo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent" />

        {/* Etiqueta central */}
        <div className="absolute left-1/2 top-1/2 flex h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg">
          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900" />
        </div>
      </div>
    </div>
  </div>
)}

      {/* PORTADA */}
<div
  className={`
    absolute
    inset-0
    z-10
    transition-all
    duration-700
    ease-[cubic-bezier(.22,1,.36,1)]
    ${
      isWide
        ? 'rounded-2xl'
        : 'rounded-2xl shadow-2xl group-hover:-translate-x-8 group-hover:scale-[0.76]'
    }
  `}
  style={{ background: item.coverGradient }}
>
  {!isWide && (
    <>
      {/* Brillo */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/15 via-transparent to-transparent" />

      {/* Sombra */}
      <div className="absolute inset-0 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,.45)]" />
    </>
  )}
</div>
        
        {/* SELLOS Y CONTROLES (SOLO TENDENCIAS) */}
        {!isWide && (
          <>
            <div className="absolute top-3 left-3 z-20 px-2 py-0.5 bg-black/40 backdrop-blur-md rounded-md border border-white/5 text-[7px] font-bold uppercase tracking-widest text-white/60">
              Trending
            </div>
            <div className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-cyan-500/90 shadow-lg">
              <svg className="w-3 h-3 text-white fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </>
        )}

        {/* ECUALIZADOR (SOLO RECOMENDADOS) */}
        {isWide && (
          <div className="absolute bottom-3 right-3 flex items-end gap-1 h-6 z-10">
            {[10, 40, 25, 50, 30].map((h, i) => (
              <div key={i} className="w-1 bg-white/90 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        )}
      </div>

      {/* TEXTO Y BOTONES */}
      <div className="flex-1 min-w-0">
        <h3 className={`font-bold text-white transition-colors duration-300 ${isWide ? 'text-xl' : 'text-base mt-4 group-hover:text-cyan-400'}`}>
          {item.title}
        </h3>
        <p className="text-xs text-white/50 uppercase tracking-wider mt-1">{item.artist}</p>
        
        {isWide && (
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-[9px] font-bold text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all">REPRODUCIR</button>
            <button className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-white/70 hover:bg-white/10 transition-all">LETRA</button>
            <button className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-white/70 hover:bg-white/10 transition-all">HISTORIA</button>
          </div>
        )}
      </div>
    </article>
  )
}