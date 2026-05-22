import { 
  MessageSquare, 
  Target, 
  Lightbulb, 
  Handshake, 
  BookOpen, 
  Award, 
  Rocket 
} from "lucide-react"

export const metadata = {
  title: 'Nosotros | EAS Consulting',
  description: 'Conoce nuestra misión, visión y valores como expertos en SAP.',
}

export default function NosotrosPage() {
  const valores = [
    { 
      icon: MessageSquare, 
      titulo: "Franqueza", 
      desc: "Comunicar con claridad, honestidad y empatía. Construyendo confianza a través de la coherencia entre lo que se piensa, se dice y se hace." 
    },
    { 
      icon: Target, 
      titulo: "Tenacidad", 
      desc: "Persistir ante los retos con disciplina y determinación. Mantener el enfoque en los objetivos, adaptándose a los cambios sin perder el compromiso." 
    },
    { 
      icon: Lightbulb, 
      titulo: "Creatividad", 
      desc: "Pensar diferente para generar soluciones útiles y valiosas. Ver oportunidades donde otros ven límites." 
    },
    { 
      icon: Handshake, 
      titulo: "Lealtad", 
      desc: "Actuar con fidelidad a los principios, al equipo y a la organización. Cuidar la confianza y el compromiso colectivo." 
    },
    { 
      icon: BookOpen, 
      titulo: "Hambre de Conocimiento", 
      desc: "Mantener una curiosidad constante por aprender y mejorar. Buscar crecimiento profesional y personal." 
    },
    { 
      icon: Award, 
      titulo: "Pasión por la Calidad", 
      desc: "Realizar cada tarea con excelencia, detalle y orgullo profesional. No solo cumplir, sino superar estándares." 
    },
    { 
      icon: Rocket, 
      titulo: "Innovación", 
      desc: "Impulsar el cambio positivo mediante nuevas ideas, tecnologías o procesos que generen evolución sostenible." 
    },
  ]

  return (
    <main className="bg-white pt-10">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Encabezado */}
          <div className="text-center mb-20">
            <p className="text-[14px] font-black uppercase tracking-[0.3em] text-[#76BC21] mb-4">
              Quiénes Somos
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#103268] leading-tight max-w-3xl mx-auto">
              Somos tu partner aliado para implementar estrategias que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BEFE] to-[#76BC21]">
                beneficien tu empresa
              </span>
            </h2>
          </div>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {/* Misión (Fondo azul fuerte con detalles azul eléctrico y verde) */}
            <div className="bg-[#103268] rounded-3xl p-10 text-white shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#76BC21]"></span>
                <p className="text-[14px] font-black uppercase tracking-[0.3em] text-[#00BEFE]">Misión</p>
              </div>
              <p className="text-xl font-bold leading-relaxed">
                Venimos a poner el corazón, mente, energía y experiencia para ofrecer soluciones SAP complementadas con tecnología de vanguardia, generando tranquilidad y{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BEFE] to-[#76BC21] font-extrabold">
                  progreso en tu organización.
                </span>
              </p>
            </div>

            {/* Visión (Detalle de borde verde sutil y acento en texto) */}
            <div className="bg-slate-50 border border-slate-100/80 rounded-3xl p-10 shadow-sm hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#00BEFE]"></span>
                <p className="text-[14px] font-black uppercase tracking-[0.3em] text-[#76BC21]">Visión</p>
              </div>
              <p className="text-xl font-black text-[#103268] leading-relaxed">
                Ser la primera Comunidad de Consultores técnicos de excelencia en aplicaciones empresariales en{" "}
                <span className="text-[#00BEFE]">Latinoamérica</span>.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="text-center mb-16">
            <p className="text-[14px] font-black uppercase tracking-[0.3em] text-[#76BC21] mb-3">Nuestro ADN</p>
            <h3 className="text-3xl md:text-4xl font-black text-[#103268]">Los valores que nos definen</h3>
          </div>

          {/* Grid de Valores Súper Corporativo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {valores.map((valor, i) => {
              const IconComponent = valor.icon
              const isFirst = i === 0

              return (
                <div 
                  key={i} 
                  className={`group rounded-3xl p-8 hover:scale-[1.03] transition-all duration-300 ease-out ${
                    isFirst 
                      ? "md:col-span-2 bg-[#103268] text-white shadow-xl shadow-blue-900/10" 
                      : "bg-slate-50/60 border border-slate-100 hover:bg-white hover:border-[#76BC21]/30 hover:shadow-xl hover:shadow-slate-100/85"
                  }`}
                >
                  {/* Contenedor del ícono */}
                  <div className="mb-6 flex">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      isFirst 
                        ? "bg-white/10 border border-white/10" 
                        : "bg-[#103268]/5 border border-[#103268]/10 group-hover:bg-[#76BC21]/10 group-hover:border-[#76BC21]/30"
                    }`}>
                      <IconComponent 
                        className={`w-7 h-7 stroke-[2] transition-colors duration-300 ${
                          isFirst 
                            ? "text-[#76BC21]" 
                            : "text-[#103268] group-hover:text-[#76BC21]"
                        }`} 
                      />
                    </div>
                  </div>

                  <h4 className={`font-black text-sm uppercase tracking-wider mb-3 transition-colors duration-300 ${
                    isFirst ? "text-[#00BEFE]" : "text-[#103268] group-hover:text-[#76BC21]"
                  }`}>
                    {valor.titulo}
                  </h4>
                  
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isFirst ? "text-white/80" : "text-slate-500"
                  }`}>
                    {valor.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    </main>
  )
}