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

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // CONEXIÓN A FORMSPREE: Pon tu ID aquí
      const response = await fetch("https://formspree.io/f/TU_ID_DE_FORMSPREE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setSent(true)
      } else {
        alert("Hubo un error al enviar el formulario. Inténtalo de nuevo.")
      }
    } catch (error) {
      alert("Hubo un error de conexión al enviar el correo.")
    }
  }

  return (
    <section id="contacto" className="py-20 bg-easNavy scroll-mt-24 font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cambiamos items-center por lg:items-start para subir todo el bloque izquierdo */}
        <div className="grid lg:grid-cols-2 gap-16 lg:items-start">

          {/* Izquierda — Copy (Reducimos space-y-8 a space-y-6 para compactar) */}
          <div className="flex flex-col space-y-6 pt-2">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-easGreen mb-3 font-montserrat">
                Hablemos
              </p>
              {/* Le quitamos el uppercase y ajustamos el mb-6 a mb-4 para dar más espacio */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 font-exo tracking-tight">
                Diseñemos juntos tu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-easLightBlue to-easGreen">
                  hoja de ruta SAP
                </span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Cuéntanos tu reto. Nuestros especialistas te contactarán en menos de 24 horas con una propuesta personalizada.
              </p>
            </div>

            {/* Datos de contacto (Reducimos gap-5 a gap-4) */}
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5215515056362"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-xl group-hover:bg-easGreen/20 group-hover:border-easGreen/30 transition-all">
                  💬
                </div>
                <div>
                  <p className="text-white font-bold text-sm">WhatsApp</p>
                  <p className="text-slate-400 text-xs font-montserrat tracking-wide">Respuesta inmediata</p>
                </div>
              </a>

              <a
                href="mailto:contacto@easconsulting.com.mx"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-xl group-hover:bg-easLightBlue/20 group-hover:border-easLightBlue/30 transition-all">
                  ✉️
                </div>
                <div>
                  <p className="text-white font-bold text-sm">contacto@easconsulting.com.mx</p>
                  <p className="text-slate-400 text-xs font-montserrat tracking-wide">Respondemos en menos de 24 hrs</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Ciudad de México</p>
                  <p className="text-slate-400 text-xs font-montserrat tracking-wide">México y Latinoamérica</p>
                </div>
              </div>
              
              {/* NUEVO: Logo SAP Silver Partner */}
              <div className="pt-4 mt-2">
                <img 
                  src="/images/logo-sap-silver.png" 
                  alt="SAP Silver Partner" 
                  className="h-24 md:h-32 w-auto object-contain opacity-90 drop-shadow-md"
                />
              </div>

            </div>
          </div>

          {/* Derecha — Formulario (Se queda igual pero ahora define la altura) */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-16 gap-6">
                <div className="text-6xl">🚀</div>
                <h3 className="text-white font-black text-2xl font-exo uppercase tracking-tight">¡Mensaje recibido!</h3>
                <p className="text-slate-300 leading-relaxed">
                  Uno de nuestros especialistas se pondrá en contacto contigo en menos de 24 horas.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ nombre: "", empresa: "", correo: "", mensaje: "" }) }}
                  className="mt-4 text-easLightBlue text-xs font-black uppercase tracking-widest hover:text-white transition font-montserrat"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="text-white font-black text-2xl mb-2 font-exo uppercase tracking-tight">Contáctanos</h3>

                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-widest font-montserrat">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Juan Pérez"
                    className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-easLightBlue transition"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-widest font-montserrat">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Grupo Industrial XYZ"
                    className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-easLightBlue transition"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-widest font-montserrat">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    required
                    placeholder="juan@empresa.com"
                    className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-easLightBlue transition"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-xs font-bold uppercase tracking-widest font-montserrat">
                    ¿Cómo podemos apoyarte?
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Cuéntanos tu reto o proyecto SAP..."
                    className="bg-white/10 border border-white/15 rounded-2xl px-5 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-easLightBlue transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-easLightBlue to-easGreen text-white font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-easLightBlue/20 mt-2 font-montserrat"
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