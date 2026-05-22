"use client"

import { useState } from "react"

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    mensaje: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    // Agregamos id="contacto" y scroll-mt-24 para compensar el Navbar fijo
    <section id="contacto" className="py-20 bg-gradient-to-br from-[#103268] via-[#004a82] to-[#005596] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Izquierda — Copy */}
          <div className="flex flex-col space-y-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-4">
                Hablemos
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Diseñemos juntos tu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BEFE] to-[#76BC21]">
                  hoja de ruta SAP
                </span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Cuéntanos tu reto. Nuestros especialistas te contactarán en menos de 24 horas con una propuesta personalizada.
              </p>
            </div>

            {/* Datos de contacto */}
            <div className="flex flex-col gap-5">
              <a
                href="https://wa.me/5215515056362"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-xl group-hover:bg-emerald-500/20 transition-all">
                  💬
                </div>
                <div>
                  <p className="text-white font-bold text-sm">WhatsApp</p>
                  <p className="text-slate-400 text-xs">Respuesta inmediata</p>
                </div>
              </a>

              <a
                href="mailto:contacto@easconsulting.com.mx"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-xl group-hover:bg-emerald-500/20 transition-all">
                  ✉️
                </div>
                <div>
                  <p className="text-white font-bold text-sm">contacto@easconsulting.com.mx</p>
                  <p className="text-slate-400 text-xs">Respondemos en menos de 24 hrs</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Ciudad de México</p>
                  <p className="text-slate-400 text-xs">México y Latinoamérica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Derecha — Formulario */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-16 gap-6">
                <div className="text-6xl">🚀</div>
                <h3 className="text-white font-black text-2xl">¡Mensaje recibido!</h3>
                <p className="text-slate-300 leading-relaxed">
                  Uno de nuestros especialistas se pondrá en contacto contigo en menos de 24 horas.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ nombre: "", empresa: "", correo: "", mensaje: "" }) }}
                  className="mt-4 text-emerald-400 text-xs font-black uppercase tracking-widest hover:text-emerald-300 transition"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="text-white font-black text-2xl mb-2">Contáctanos</h3>

                {/* Nombre */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-widest">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Juan Pérez"
                    className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
                  />
                </div>

                {/* Empresa */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-widest">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Grupo Industrial XYZ"
                    className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
                  />
                </div>

                {/* Correo */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-widest">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    required
                    placeholder="juan@empresa.com"
                    className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition"
                  />
                </div>

                {/* {/* Mensaje */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-widest">
                    ¿Cómo podemos apoyarte?
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Cuéntanos tu reto o proyecto SAP..."
                    className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00BEFE] to-[#76BC21] text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl hover:opacity-90 transition-all shadow-lg mt-2"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}