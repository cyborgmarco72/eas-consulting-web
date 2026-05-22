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
        <div className="bg-[#005596] rounded-[48px] px-10 py-10 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                
                <div className="text-5xl md:text-6xl font-black text-emerald-400 mb-3 tracking-tight">
                  <Counter
                    end={metric.value}
                    suffix={metric.suffix}
                  />
                </div>

                <div className="text-white/80 text-[11px] uppercase tracking-[0.25em] font-bold">
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