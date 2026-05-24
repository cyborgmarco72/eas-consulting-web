"use client"

import { useEffect, useRef, useState } from "react"

function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true

          let startTime = null

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp

            const progress = Math.min((timestamp - startTime) / duration, 1)

            const current = Math.floor(progress * end)

            setCount(current)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Metrics() {
  const metrics = [
    {
      value: 20,
      suffix: "+",
      label: "Años de Experiencia",
    },
    {
      value: 2000,
      suffix: "+",
      label: "Proyectos Exitosos",
    },
    {
      value: 15,
      suffix: "+",
      label: "Certificación SAP Silver",
    },
    {
      value: 12,
      suffix: "",
      label: "Sectores Atendidos",
    },
  ]

  return (
    <section className="relative z-20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CORRECCIÓN 1: Aplicamos bg-easNavy (Azul Corporativo Oficial) */}
        <div className="bg-easNavy rounded-[48px] px-10 py-10 shadow-2xl max-w-5xl mx-auto border border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                
                {/* CORRECCIÓN 2 y 3: text-easGreen (Verde EAS) y font-exo para los números */}
                <div className="text-5xl md:text-6xl font-black text-easGreen mb-3 tracking-tight font-exo">
                  <Counter
                    end={metric.value}
                    suffix={metric.suffix}
                  />
                </div>

                {/* CORRECCIÓN 4: font-montserrat para los sub-textos descriptivos */}
                <div className="text-easLightBlue text-[11px] uppercase tracking-[0.25em] font-bold font-montserrat">
                  {metric.label}
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}