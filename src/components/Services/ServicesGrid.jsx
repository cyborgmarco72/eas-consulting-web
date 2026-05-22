"use client"
import { useState } from "react"

const servicios = [
  {
    title: "Consultoría y Proyectos SAP",
    desc: "Acompañamiento técnico y funcional para asegurar el éxito de tus proyectos SAP de principio a fin.",
    image: "/images/consultores_enterprise.jpg",
    color: "from-[#103268] to-[#00BEFE]"
  },
  {
    title: "Soporte Operativo AMS y MDS",
    desc: "Seguimiento de sistemas SAP bajo metodologías ITIL y Solution Manager para una operación sin interrupciones.",
    image: "/images/dashboards.jpg",
    color: "from-[#103268] to-[#003d6b]"
  },
  {
    title: "Infraestructura de Nube",
    desc: "Implementación y migración de infraestructura cloud diseñada para soluciones SAP y NO SAP.",
    image: "/images/data_center.jpg",
    color: "from-[#76BC21] to-[#103268]"
  },
  {
    title: "Fábrica de Software",
    desc: "Desarrollos específicos que fortalecen y optimizan tus procesos de negocio sobre plataformas SAP.",
    image: "/images/codigo.jpg",
    color: "from-[#103268] to-[#00BEFE]"
  },
  {
    title: "Colaboraciones Estratégicas",
    desc: "Alianzas con líderes como VOQUZ Labs y Accountfy para reporteo financiero y consolidación enterprise.",
    image: "/images/partnership.jpg",
    color: "from-[#003d6b] to-[#76BC21]"
  }
]

function ServiceCard({ s }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -15
    const rotateY = ((x - centerX) / centerX) * 15
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.6s ease" : "transform 0.4s ease"
      }}
      className="relative h-[220px] w-[380px] rounded-[32px] overflow-hidden cursor-pointer shadow-xl"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${s.image})` }}
      />

      {/* Overlay degradado EAS */}
      <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-85`} />

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
        <h3 className="text-white font-black text-xl leading-tight mb-3">{s.title}</h3>
        <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
      </div>
    </div>
  )
}

export default function ServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-4">
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Expertise que impulsa tu negocio
        </h2>
        <div className="w-20 h-2 bg-gradient-to-r from-[#103268] to-[#76BC21] rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {servicios.map((s, i) => (
          <ServiceCard key={i} s={s} />
        ))}
      </div>
    </section>
  )
}