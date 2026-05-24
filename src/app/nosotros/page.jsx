import React from 'react'
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
      desc: "Comunicar con claridad, honesty y empatía. Construyendo confianza a través de la coherencia entre lo que se piensa, se dice y se hace." 
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
    <main className="bg-white pt-10 font-poppins">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Encabezado */}
          <div className="text-center mb-20">
            <p className="text-[14px] font-black uppercase tracking-[0.35em] text-easGreen mb-5 font-montserrat">
              Quiénes Somos
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-easNavy leading-tight max-w-4xl mx-auto font-exo uppercase tracking-tight">
              Somos tu partner aliado para implementar estrategias que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-easLightBlue to-easGreen">
                beneficien tu empresa
              </span>
            </h2>
          </div>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            
            {/* Tarjeta de Misión */}
            <div className="bg-easNavy rounded-[24px] p-12 text-white shadow-xl hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-center border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-easGreen"></span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-[0.25em] text-easLightBlue font-montserrat">
                  Misión
                </h3>
              </div>
              <p className="text-lg md:text-[21px] font-medium leading-relaxed font-poppins text-white/90">
                Venimos a poner el corazón, mente, energía y experiencia para ofrecer soluciones SAP complementadas con tecnología de vanguardia, generando tranquilidad y{" "}
                <span className="text-easGreen font-extrabold font-exo">
                  progreso en tu organización.
                </span>
              </p>
            </div>

            {/* Tarjeta de Visión */}
            <div className="bg-[#F8FAFC]/90 border border-slate-200/50 rounded-[24px] p-12 text-easNavy shadow-sm hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-easLightBlue"></span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-[0.25em] text-easGreen font-montserrat">
                  Visión
                </h3>
              </div>
              <p className="text-lg md:text-[21px] font-medium leading-relaxed text-easNavy font-poppins">
                Ser la primera Comunidad de Consultores técnicos de excelencia en aplicaciones empresariales en{" "}
                <span className="text-easLightBlue font-bold font-exo uppercase">
                  Latinoamérica.
                </span>
              </p>
            </div>

          </div>

          {/* Sección de ADN */}
          <div className="text-center mb-16">
            <p className="text-[14px] font-black uppercase tracking-[0.3em] text-easGreen mb-3 font-montserrat">
              Nuestro ADN
            </p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-easNavy font-exo uppercase tracking-tight">
              Los valores que nos definen
            </h3>
          </div>

          {/* Grid de Valores de Alto Impacto Simétricos con Tailwind centralizado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {valores.map((valor, i) => {
              const IconComponent = valor.icon

              return (
                <div 
                  key={i} 
                  className="group rounded-3xl p-8 bg-slate-50/60 border border-slate-100 hover:bg-white hover:border-easGreen/30 hover:shadow-xl hover:shadow-slate-100/85 hover:scale-[1.03] transition-all duration-300 ease-out"
                >
                  {/* Icono animado */}
                  <div className="mb-6 flex">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-easNavy/5 border border-easNavy/10 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-easGreen/10 group-hover:border-easGreen/30">
                      <IconComponent 
                        className="w-7 h-7 stroke-[2] transition-colors duration-300 text-easNavy group-hover:text-easGreen" 
                      />
                    </div>
                  </div>

                  <h4 className="font-bold text-sm uppercase tracking-wider mb-3 transition-colors duration-300 font-montserrat text-easNavy group-hover:text-easGreen">
                    {valor.titulo}
                  </h4>
                  
                  <p className="text-sm leading-relaxed transition-colors duration-300 font-poppins text-slate-500">
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