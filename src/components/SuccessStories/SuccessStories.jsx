"use client"

import { useEffect, useMemo, useState } from "react"

const videos = [
  {
    id: "k-odQ2j0jHI",
    title: "Casos de éxito EAS: Coca-Cola FEMSA",
    subtitle: "Héctor Calva",
  },
  {
    id: "PYG0eYTTF-0",
    title: "Casos de éxito EAS: SAP",
    subtitle: "Alejandro Vera — Senior Director SAP. Center of Expertise Latin-America",
  },
  {
    id: "ikDRouzw1Wk",
    title: "Caso de Éxito EAS: Silanes",
    subtitle: "Proyecto Phoenix - Laboratorios Silanes",
  },
]

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.5 8.7v6.6c0 .7.8 1.1 1.4.7l5-3.3c.6-.4.6-1.2 0-1.6l-5-3.3c-.6-.4-1.4 0-1.4.9Z"
        fill="currentColor"
      />
    </svg>
  )
}

function VideoCard({ v, onOpen }) {
  const thumb = v.id ? `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` : null
  const disabled = !v.id

  return (
    <button
      type="button"
      onClick={() => !disabled && onOpen(v.id)}
      disabled={disabled}
      className={[
        "group relative w-full max-w-[520px] overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-xl transition-all duration-300",
        disabled ? "opacity-70 cursor-not-allowed" : "hover:shadow-2xl",
      ].join(" ")}
    >
      {/* Media */}
      <div className="relative aspect-video bg-slate-100">
        {thumb ? (
          <img
            src={thumb}
            alt={v.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#103268]/15 via-white to-[#76BC21]/15" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {/* Play / Badge */}
        {disabled ? (
          <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-slate-700">
            Próximamente
          </div>
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex items-center gap-3 rounded-full bg-white/15 px-6 py-4 backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-white/20">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#103268] shadow-lg">
                <PlayIcon className="h-6 w-6" />
              </span>
              <span className="text-white text-xs font-black uppercase tracking-[0.25em]">
                Ver video
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Copy */}
      <div className="p-8 text-left">
        <h3 className="text-slate-900 font-black text-xl leading-tight mb-2">
          {v.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">{v.subtitle}</p>

        {!disabled && (
          <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-emerald-600">
            Caso de éxito
            <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-[#103268] to-[#76BC21]" />
          </div>
        )}
      </div>
    </button>
  )
}

export default function SuccessStories() {
  const [openId, setOpenId] = useState(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenId(null)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const iframeSrc = useMemo(() => {
    if (!openId) return ""
    return `https://www.youtube-nocookie.com/embed/${openId}?autoplay=1&rel=0`
  }, [openId])

  return (
    <section id="casos-de-exito" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-4">
            Resultados comprobables
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Casos de Éxito
          </h2>
          <div className="w-20 h-2 bg-gradient-to-r from-[#103268] to-[#76BC21] rounded-full" />
          <p className="text-slate-500 mt-6 max-w-2xl text-lg leading-relaxed">
            Historias reales de transformación y optimización con soluciones SAP, AMS y acompañamiento especializado.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((v, idx) => (
            <VideoCard key={idx} v={v} onOpen={setOpenId} />
          ))}
        </div>
      </div>

	  {/* Modal */}
      {openId && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm p-6 grid place-items-center"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpenId(null)
          }}
        >
          <div className="w-full max-w-5xl">
            <div className="flex justify-end mb-3">
              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="rounded-full bg-white/10 hover:bg-white/15 text-white px-5 py-3 text-xs font-black uppercase tracking-[0.25em] border border-white/15 transition"
              >
                Cerrar
              </button>
            </div>
            <div className="relative w-full aspect-video overflow-hidden rounded-[28px] border border-white/10 shadow-2xl bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={iframeSrc}
                title="Caso de éxito"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}