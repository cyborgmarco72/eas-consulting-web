"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import CtaBanner from "../../components/CtaBanner/CtaBanner"

const services = [
  {
    title: "Consultoría y Proyectos SAP",
    description: "Implementación, optimización y evolución de soluciones SAP.",
    href: "/servicios/consultoria-y-proyectos-sap",
    color: "from-[#103268] to-[#00BEFE]",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop",
    floatingText: "100% Éxito",
  },
  {
    title: "Seguridad SAP",
    description: "Protección, cumplimiento y control de accesos en entornos SAP.",
    href: "/servicios/seguridad-sap",
    color: "from-[#103268] to-[#76BC21]",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    floatingText: "Blindaje Total",
  },
  {
    title: "SAP S/4HANA",
    description: "Migración y adopción de nueva generación SAP.",
    href: "/servicios/sap-s4-hana",
    color: "from-[#00BEFE] to-[#103268]",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    floatingText: "S/4 Readiness",
  },
  {
    title: "SAP RISE",
    description: "Transformación digital con SAP en la nube.",
    href: "/servicios/sap-rise",
    color: "from-[#76BC21] to-[#00BEFE]",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
    floatingText: "Next Gen Cloud",
  },
  {
    title: "AMS & MDS",
    description: "Soporte continuo y evolución de tus sistemas.",
    href: "/servicios/soporte-operativo-ams-mds",
    color: "from-[#103268] to-[#00BEFE]",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    floatingText: "Mesa 24/7",
  },
  {
    title: "Infraestructura en la Nube",
    description: "Arquitecturas escalables para SAP y no SAP.",
    href: "/servicios/infraestructura-nube",
    color: "from-[#00BEFE] to-[#76BC21]",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
    floatingText: "SLA Garantizado",
  },
  {
    title: "Fábrica de Software",
    description: "Desarrollo a medida alineado a tu negocio.",
    href: "/servicios/fabrica-de-software",
    color: "from-[#103268] to-[#76BC21]",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    floatingText: "Agile Dev",
  },
  {
    title: "VOQUZ Labs",
    description: "Licenciamiento y optimización SAP.",
    href: "/servicios/voquz-labs",
    color: "from-[#00BEFE] to-[#103268]",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    floatingText: "Especialistas LUI",
  },
  {
    title: "Accountfy",
    description: "Automatización financiera inteligente.",
    href: "/servicios/accountfy",
    color: "from-[#76BC21] to-[#103268]",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
    floatingText: "Financial Tech",
  },
];

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pb-12">

      {/* HERO */}
      <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black leading-tight text-[#103268]"
        >
          Soluciones que impulsan tu{" "}
          <span className="bg-gradient-to-r from-[#00BEFE] to-[#76BC21] bg-clip-text text-transparent">
            transformación digital
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto"
        >
          En EAS Consulting combinamos experiencia, tecnología y estrategia para
          llevar tu empresa al siguiente nivel.
        </motion.p>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={service.href}>
                <div className="group relative h-full flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer">
                  
                  {/* Visual Container */}
                  <div className="relative w-full h-[220px] overflow-hidden bg-gray-100">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-95 transform rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#103268]/40 to-transparent mix-blend-multiply"></div>

                    {/* Floating Badge */}
                    <div 
                      className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-white/50 flex items-center gap-1.5 animate-bounce"
                      style={{ animationDuration: "3s" }}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#76BC21]"></span>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#103268]">{service.floatingText}</p>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color}`} />
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">EAS Service</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-[#103268] group-hover:text-[#00BEFE] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center text-sm font-bold text-[#00BEFE]">
                      <span className="group-hover:translate-x-1 transition-transform">Ver más →</span>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BANNER MODULAR Y COMPARTIDO */}
      <CtaBanner />

    </main>
  );
}